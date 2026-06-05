import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What services do you provide?",
      answer: "We provide end-to-end software and cloud engineering services: custom web & mobile apps, API and microservices design, cloud architecture & migration, DevOps and CI/CD, security reviews, and ongoing managed support."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines depend on scope. Small projects can take 4-8 weeks, while more complex platforms may take several months. We provide a detailed timeline after the discovery phase."
    },
    {
      question: "How do you handle security and compliance?",
      answer: "Security is integrated into every phase. We follow secure development practices, perform threat modeling, run automated and manual testing, and can support external audits and compliance (e.g., SOC2, GDPR) when required."
    },
    {
      question: "Do you help with cloud migration and cost optimization?",
      answer: "Yes - we design cloud-native architectures, migrate workloads to AWS/Azure/GCP, and implement cost optimization strategies like autoscaling, right-sizing, and efficient storage policies."
    },
    {
      question: "What kind of support and SLAs do you offer?",
      answer: "We offer multiple support plans, including 24/7 incident response for critical issues, regular maintenance windows, and SLAs tailored to your business needs. Contact us to discuss terms."
    },
    {
      question: "Can you integrate with our existing systems and third-party tools?",
      answer: "Absolutely - we specialize in integrating with CRMs, payment gateways, analytics platforms, identity providers, and legacy systems using secure APIs and well-defined integration patterns."
    },
    {
      question: "How do we get started with your services?",
      answer: "Simply reach out via our contact form or email. We'll schedule an initial consultation to understand your needs, discuss potential solutions, and outline next steps."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-transparent w-full relative overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-primary-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-secondary-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* FAQ Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full border border-primary-100 inline-block shadow-sm">
            Support & Clarity
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
            FREQUENTLY ASKED <br />
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              QUESTIONS
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed pt-2">
            Find clear, concise responses to the most commonly asked questions about our software, cloud, and managed engineering services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen 
                    ? "border-primary-200 shadow-lg shadow-primary-500/5 ring-1 ring-primary-50" 
                    : "border-slate-100 shadow-sm hover:border-primary-200 hover:shadow-md"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="p-6 md:p-8 flex justify-between items-center gap-6">
                  <h3 className={`text-lg md:text-xl font-bold transition-colors ${
                    isOpen ? "text-primary-600" : "text-slate-800 group-hover:text-primary-600"
                  }`}>
                    {item.question}
                  </h3>
                  <div className={`shrink-0 flex items-center justify-center size-10 rounded-full transition-all duration-300 ${
                    isOpen 
                      ? "bg-primary-500 text-white rotate-180 shadow-md shadow-primary-500/20" 
                      : "bg-slate-50 text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-500"
                  }`}>
                    <ChevronDown className="size-5 stroke-[2.5]" />
                  </div>
                </div>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      <div className="w-full h-px bg-slate-100 mb-6" />
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;