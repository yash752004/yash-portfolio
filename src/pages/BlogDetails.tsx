import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { useBlogs } from "@/hooks/useBlogs";
import { formatDate } from "@/lib/utils";
import { toast } from "sonner";

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { blogs, loading } = useBlogs();

  const blog = blogs.find(b => b.id === id);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blog?.title || "Check out this blog";

    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
      return;
    }

    let shareUrl = "";
    if (platform === "facebook") shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    if (platform === "twitter") shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    if (platform === "linkedin") shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    
    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen relative bg-slate-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen relative bg-slate-50 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-slate-800 mb-4">Blog not found</p>
          <Link to="/blog" className="text-primary-600 font-medium hover:underline flex items-center gap-2">
            <ArrowLeft size={16} /> Return to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-500 transition-colors mb-8 font-semibold">
            <ArrowLeft size={20} /> Back to Blog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Article Content */}
            <article className="lg:col-span-2">
              {/* Article Header */}
              <header className="mb-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-bold mb-6">
                  <Tag size={14} /> {blog.category}
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  {blog.title}
                </h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-500 font-medium">
                  <span className="flex items-center gap-2"><User size={18} /> {blog.author}</span>
                  <span className="flex items-center gap-2"><Calendar size={18} /> {formatDate(blog.date)}</span>
                </div>
              </header>

              {/* Share Options */}
              <div className="flex flex-wrap items-center gap-4 mb-10 pb-10 border-b border-slate-200">
                <span className="font-bold text-slate-700">Share this article:</span>
                <button onClick={() => handleShare("facebook")} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-sm">
                  <Facebook size={18} />
                </button>
                <button onClick={() => handleShare("twitter")} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-sky-500 hover:border-sky-500 hover:bg-sky-50 transition-all shadow-sm">
                  <Twitter size={18} />
                </button>
                <button onClick={() => handleShare("linkedin")} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-700 hover:border-blue-700 hover:bg-blue-50 transition-all shadow-sm">
                  <Linkedin size={18} />
                </button>
                <button onClick={() => handleShare("copy")} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary-600 hover:border-primary-600 hover:bg-primary-50 transition-all shadow-sm" title="Copy Link">
                  <Link2 size={18} />
                </button>
              </div>

              {/* Header Image */}
              {blog.image && (
                <div className="w-full h-64 md:h-[28rem] rounded-3xl overflow-hidden shadow-md mb-12 bg-white">
                  <img src={blog.image} alt="Article Header" className="w-full h-full object-cover" />
                </div>
              )}

              {/* Article Content (Rich HTML Injection from Quill) */}
              <div 
                className="prose prose-slate prose-lg max-w-none mb-12 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-white/10"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>

            {/* Right Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Key Takeaways */}
                {blog.keyFeatures && blog.keyFeatures.length > 0 ? (
                  <div className="bg-primary-50 rounded-[2.5rem] p-8 md:p-10 border border-primary-100 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Takeaways</h3>
                    <ul className="space-y-4">
                      {blog.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-slate-700">
                          <span className="min-w-8 h-8 rounded-full bg-primary-200 text-primary-700 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">About the Author</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xl">
                        {blog.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{blog.author}</p>
                        <p className="text-sm text-slate-500">Author</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;
