import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real app, you would fetch data based on the ID.
  // For now, we use placeholder content that demonstrates images and a table view.
  const article = {
    title: "The Future of Web Development: What to Expect in 2026",
    date: "June 1, 2026",
    author: "Jane Smith",
    category: "Technology",
    headerImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p class="text-lg text-slate-600 mb-6 leading-relaxed">
        The landscape of web development is constantly evolving. As we move further into 2026, new technologies and methodologies are emerging, fundamentally changing how we build, deploy, and interact with digital experiences.
      </p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">The Rise of AI-Driven Interfaces</h3>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Artificial Intelligence is no longer just a backend utility; it's driving the user interface itself. Adaptive UIs that learn from user behavior in real-time are becoming the standard. Below is an example of a modern AI-integrated dashboard interface.
      </p>

      <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Dashboard example" class="w-full h-auto" />
        <p class="text-sm text-center text-slate-500 py-3 bg-white">Figure 1: Next-generation analytics dashboard with predictive UI elements.</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Comparing Frontend Frameworks in 2026</h3>
      <p class="text-slate-600 mb-6 leading-relaxed">
        With the maturity of Server Components and edge computing, the framework wars have shifted focus towards performance and developer experience. Here is a brief comparison of popular tools:
      </p>
    `
  };

  const tableData = [
    { framework: "React 19+", primaryFocus: "Server Components, Concurrency", learningCurve: "Moderate", performance: "High" },
    { framework: "Vue 4", primaryFocus: "Reactivity, Composition API", learningCurve: "Low", performance: "High" },
    { framework: "SvelteKit", primaryFocus: "Zero-runtime, Compiled", learningCurve: "Low", performance: "Very High" },
    { framework: "SolidJS", primaryFocus: "Fine-grained Reactivity", learningCurve: "Moderate", performance: "Very High" }
  ];

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
        <article className="max-w-4xl mx-auto px-4 md:px-8">
          
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-500 transition-colors mb-8 font-semibold">
            <ArrowLeft size={20} /> Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-bold mb-6">
              <Tag size={14} /> {article.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-500 font-medium">
              <span className="flex items-center gap-2"><User size={18} /> {article.author}</span>
              <span className="flex items-center gap-2"><Calendar size={18} /> {article.date}</span>
            </div>
          </header>

          {/* Header Image */}
          <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-md mb-12">
            <img src={article.headerImage} alt="Article Header" className="w-full h-full object-cover" />
          </div>

          {/* Article Content (HTML Injection for demo purposes) */}
          <div 
            className="prose prose-slate prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Table View */}
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 font-bold text-slate-900">Framework</th>
                  <th className="py-4 px-6 font-bold text-slate-900">Primary Focus</th>
                  <th className="py-4 px-6 font-bold text-slate-900">Learning Curve</th>
                  <th className="py-4 px-6 font-bold text-slate-900">Performance Focus</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">{row.framework}</td>
                    <td className="py-4 px-6 text-slate-600">{row.primaryFocus}</td>
                    <td className="py-4 px-6 text-slate-600">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        row.learningCurve === 'Low' ? 'bg-green-100 text-green-700' : 
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {row.learningCurve}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.performance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">
            Choosing the right tools remains crucial, but the overarching theme is building with the user in mind. (End of placeholder post for ID: {id})
          </p>

        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;
