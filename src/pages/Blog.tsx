import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useBlogs } from "@/hooks/useBlogs";
import { formatDate } from "@/lib/utils";

const Blog: React.FC = () => {
  const { blogs } = useBlogs();

  // Find the featured blog, otherwise use the latest one, otherwise null
  const featuredBlog = blogs.find(b => b.isFeatured) || blogs[0] || null;
  
  // Recent blogs (exclude the featured one)
  const recentBlogs = featuredBlog ? blogs.filter(b => b.id !== featuredBlog.id) : blogs;

  return (
    <div className="min-h-screen relative bg-slate-50">
      <Header />

      {/* Decorative Background Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0a0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0a0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-[45rem] h-[45rem] bg-secondary-100/20 rounded-full blur-3xl" />
      </div>
      
      <main className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Blog</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Insights, thoughts, and technical deep-dives from the Pinak Technology team.
            </p>
          </div>

          {/* Featured Blog Widget */}
          {featuredBlog && (
            <Link to={`/blog/${featuredBlog.id}`} className="block bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all group mb-20">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/5 relative overflow-hidden h-64 lg:h-auto">
                  <img 
                    src={featuredBlog.image} 
                    alt={featuredBlog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                    Featured
                  </div>
                </div>
                <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={16} /> {formatDate(featuredBlog.date)}</span>
                    <span className="flex items-center gap-1.5"><User size={16} /> {featuredBlog.author}</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary-500 transition-colors">
                    {featuredBlog.title}
                  </h2>
                  <div 
                    className="text-slate-600 text-lg mb-8 line-clamp-3 prose prose-slate"
                    dangerouslySetInnerHTML={{ __html: featuredBlog.content }}
                  />
                  <div className="inline-flex items-center gap-2 text-primary-500 font-bold group-hover:gap-3 transition-all">
                    Read Full Article <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Recent Blogs Grid */}
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Recent Articles</h3>
          {recentBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentBlogs.map((blog) => (
                <Link to={`/blog/${blog.id}`} key={blog.id} className="block bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all group flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span>{formatDate(blog.date)}</span>
                      <span>{blog.author}</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary-500 transition-colors">
                      {blog.title}
                    </h4>
                    <div 
                      className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow prose prose-sm prose-slate"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                    <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-primary-500 transition-colors">
                      Read More <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
              <p className="text-slate-500 text-lg">No articles published yet. Check back later!</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
