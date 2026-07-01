import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeIntroSection from "@/components/sections/HomeIntroSection";
import AboutContactSection from "@/components/sections/AboutContactSection";
// import ProjectThumbnailMarqueeSection from "@/components/sections/ProjectThumbnailMarqueeSection";
import {
  Target,
  PenTool,
  Code,
  CheckCircle,
  Rocket,
  Wrench,
} from "lucide-react";

const About: React.FC = () => {
  const workSteps = [
    {
      title: "Process Audit",
      icon: Target,
      desc: "Identifying operational bottlenecks and mapping out AI and automation opportunities.",
    },
    {
      title: "Intelligent Architecture",
      icon: PenTool,
      desc: "Designing scalable cloud architectures and custom AI models tailored to your data.",
    },
    {
      title: "System Engineering",
      icon: Code,
      desc: "Developing robust automation pipelines and seamless ERP integrations.",
    },
    {
      title: "Deployment & Scaling",
      icon: Rocket,
      desc: "Securely launching systems with ongoing monitoring and continuous optimization.",
    },
  ];

  return (
    <div className="min-h-screen relative bg-slate-50 overflow-hidden">
      <Helmet>
        <title>About Us | Top SaaS Development Agency | Pinak Technology</title>
        <meta
          name="description"
          content="Pinak Technology is a top SaaS development agency and CRM development company. Meet our passionate team of engineers and designers."
        />
      </Helmet>
      <Header />

      {/* Decorative Background Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0a0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0a0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-[45rem] h-[45rem] bg-secondary-100/20 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 pt-36 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-2 text-center pb-10 md:pb-16">
          <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-primary-200 bg-white shadow-sm mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Who We Are
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase">
            ABOUT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              PINAK TECHNOLOGY
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are an engineering powerhouse focused on{" "}
            <strong>Business Automation</strong> and{" "}
            <strong>AI Integration</strong>. We build intelligent workflows and
            bespoke software solutions that eliminate manual bottlenecks, reduce
            operational costs, and help businesses scale effortlessly.
          </p>
        </section>

        {/* Our Missions Section (Moved from Home) */}
        <HomeIntroSection />

        {/* How We Work (Zigzag Layout) */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 mb-32 relative pb-20 pt-4 bg-transparent">
          {/* Floating Spheres (Decorative) */}
          {/* <div className="absolute top-10 right-20 w-24 h-24 rounded-full bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]" />
          <div className="absolute bottom-10 right-40 w-40 h-40 rounded-full bg-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)]" />
          <div className="absolute -bottom-10 left-1/3 w-20 h-20 rounded-full bg-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]" /> */}

          <div className="text-center mb-24 relative z-10 px-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
              HOW WE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
                WORK
              </span>
            </h2>
            <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Our proven Software Development Life Cycle ensures quality at
              every step.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch relative z-10 gap-16 lg:gap-0 mt-12 max-w-6xl mx-auto">
            {workSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="w-full lg:w-1/4 px-4 flex flex-col relative items-center lg:items-start min-h-[300px]"
                >
                  {/* Dotted Arrow Connector (Desktop only) */}
                  {index < workSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-[55%] w-full h-[120px] -translate-y-1/2 z-0 pointer-events-none pr-4">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        className={`overflow-visible ${isEven ? "rotate-[15deg]" : "-rotate-[10deg]"}`}
                      >
                        {isEven ? (
                          <>
                            <path
                              d="M 0,20 C 40,20 60,80 100,80"
                              fill="transparent"
                              stroke="#94a3b8"
                              strokeWidth="2"
                              strokeDasharray="6,6"
                              vectorEffect="non-scaling-stroke"
                            />
                            <path
                              d="M 95,73 L 100,80 L 95,87"
                              fill="transparent"
                              stroke="#94a3b8"
                              strokeWidth="2"
                              vectorEffect="non-scaling-stroke"
                            />
                          </>
                        ) : (
                          <>
                            <path
                              d="M 0,80 C 40,80 60,20 100,20"
                              fill="transparent"
                              stroke="#94a3b8"
                              strokeWidth="2"
                              strokeDasharray="6,6"
                              vectorEffect="non-scaling-stroke"
                            />
                            <path
                              d="M 95,13 L 100,20 L 95,27"
                              fill="transparent"
                              stroke="#94a3b8"
                              strokeWidth="2"
                              vectorEffect="non-scaling-stroke"
                            />
                          </>
                        )}
                      </svg>
                    </div>
                  )}

                  {/* Item Content */}
                  <div
                    className={`flex w-full h-full ${isEven ? "flex-col" : "flex-col-reverse"} justify-between items-center lg:items-center relative z-10 lg:py-0 gap-6 lg:gap-0`}
                  >
                    {/* Circle Icon */}
                    <div className="size-28 lg:size-32 rounded-full border-[8px] border-white bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-xl shadow-primary-500/20 shrink-0 transform transition-transform hover:scale-105 group">
                      <step.icon className="w-10 h-10 lg:w-12 lg:h-12 stroke-[1.5] group-hover:animate-bounce" />
                    </div>

                    {/* Text Block */}
                    <div className="text-center lg:text-left w-[200px]">
                      <h3 className="text-3xl font-black text-slate-900 mb-1">
                        0{index + 1}
                      </h3>
                      <h4 className="text-[17px] font-bold text-slate-800 mb-2 leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* <ProjectThumbnailMarqueeSection /> */}

        {/* Leadership Section */}
        {/* <section className="max-w-6xl mx-auto px-4 md:px-8 mt-12 mb-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Leadership</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Even the best technology needs the best people with the right spirit behind it. Right across the world, 
              we have a team of dreamers and doers just like you, ready to help bring your ideas to life. <br className="hidden md:block" />
              Here are the folks leading the charge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-200 hover:-translate-y-1">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-8 border-4 border-slate-50 shadow-inner group-hover:border-primary-100 transition-colors duration-300">
                <img src="/n.png" alt="Nayan Patel" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
              </div>
              <h4 className="font-extrabold text-slate-800 mt-4 mb-3 text-lg group-hover:text-primary-600 transition-colors">Bringing our ideals to life</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 italic max-w-xs mx-auto">
                "I’m passionate about building technology that is practical, scalable, and driven by real-world outcomes. Every product I create is focused on delivering long-term value rather than short-term trends."
              </p>
              
              <h3 className="text-xl font-black text-slate-900 mb-1">Nayan Patel</h3>
              <p className="text-primary-500 font-semibold text-sm mb-4">Founder</p>
              <a href="https://linkedin.com/in/nayan-patel-tech/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>

            <div className="group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-200 hover:-translate-y-1">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-8 border-4 border-slate-50 shadow-inner group-hover:border-primary-100 transition-colors duration-300">
                <img src="/y.png" alt="Yash Patel" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
              </div>
              <h4 className="font-extrabold text-slate-800 mt-4 mb-3 text-lg group-hover:text-primary-600 transition-colors">Enabling our future</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 italic max-w-xs mx-auto">
                "I’m always exploring new technologies, refining processes, and seeking opportunities to create solutions that make a meaningful difference."
              </p>
              
              <h3 className="text-xl font-black text-slate-900 mb-1">Yash Patel</h3>
              <p className="text-secondary-500 font-semibold text-sm mb-4">Co-founder</p>
              <a href="https://www.linkedin.com/in/yash-patel-18a93a230/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-secondary-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default About;
