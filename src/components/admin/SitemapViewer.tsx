import React, { useState, useMemo } from "react";
import { Copy, RefreshCw, FileCode, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useProjects } from "@/hooks/useProjects";
import { useBlogs } from "@/hooks/useBlogs";
import { extendedServiceData } from "@/components/sections/ServiceDetailSection";

export const SitemapViewer: React.FC = () => {
  const { projects } = useProjects();
  const { blogs } = useBlogs();
  const [copied, setCopied] = useState(false);

  const siteUrl = window.location.origin;

  const sitemapXml = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];

    // Static Routes
    const staticRoutes = [
      '',
      '/about',
      '/services',
      '/projects',
      '/career',
      '/contact',
      '/blog',
      '/login'
    ];

    // Dynamic Routes
    const projectRoutes = projects.map(p => `/projects/${p.id}`);
    const blogRoutes = blogs.map(b => `/blog/${b.id}`);
    const serviceRoutes = extendedServiceData.map(s => `/services/${s.id}`);

    const allRoutes = [...staticRoutes, ...projectRoutes, ...blogRoutes, ...serviceRoutes];

    const xmlUrls = allRoutes.map(route => `
  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlUrls}
</urlset>`;
  }, [projects, blogs, siteUrl]);

  const handleCopy = () => {
    navigator.clipboard.writeText(sitemapXml);
    setCopied(true);
    toast.success("Sitemap XML copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileCode className="w-6 h-6 text-primary-500" />
            XML Sitemap Generator
          </h3>
          <p className="text-slate-500 mt-2">Automatically generated based on your active pages, projects, services, and blogs.</p>
        </div>
        <Button 
          onClick={handleCopy}
          className="bg-primary-600 hover:bg-primary-700 font-bold rounded-xl px-6 flex items-center gap-2"
        >
          {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy XML"}
        </Button>
      </div>

      <div className="bg-slate-50 dark:bg-black rounded-2xl border border-slate-200 dark:border-white/10 p-6 overflow-hidden relative">
        <div className="absolute top-4 right-4 flex gap-2">
           <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-full text-xs font-bold text-slate-500">
             {projects.length + blogs.length + extendedServiceData.length + 8} Total URLs
           </span>
        </div>
        <pre className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-mono overflow-x-auto overflow-y-auto max-h-[500px]">
          <code>{sitemapXml}</code>
        </pre>
      </div>
      
      <div className="mt-6 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-2xl p-6">
        <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-2">How to use this?</h4>
        <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
          Copy the XML code above and save it to a file named <code>sitemap.xml</code> in the public directory of your project, or directly submit this generated XML content to Google Search Console to help search engines crawl your dynamically created project and service pages faster.
        </p>
      </div>
    </div>
  );
};
