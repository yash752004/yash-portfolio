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
    <section className="page-section bg-primary-50 dark:bg-gray-700">
      <div className="container">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Find clear, concise responses to the most commonly asked questions about our software, cloud, and managed engineering services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="group">
              <div 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white pr-4">
                    {item.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;