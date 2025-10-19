import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Can you customize features in my token?",
      answer: "Yes, we can fully customize your token's features. Based on your project's goals, you can define total supply, minting or burning ability, transfer rules, governance rights, rewards, and more for your token."
    },
    {
      question: "Is it expensive to develop a coin or token?",
      answer: "The cost varies depending on the complexity and features required. We offer competitive pricing and can work within your budget while ensuring high-quality development standards."
    },
    {
      question: "How do you ensure my token's security?",
      answer: "We implement industry-best security practices including smart contract audits, comprehensive testing, and security protocols to protect your token from vulnerabilities and attacks."
    },
    {
      question: "What platforms can I launch my token on?",
      answer: "We develop tokens for various blockchain platforms including Ethereum, Binance Smart Chain, Solana, Polygon, and other major blockchain networks based on your requirements."
    },
    {
      question: "What is tokenomics and why is it important?",
      answer: "Tokenomics refers to the economic model and distribution strategy of your token. It's crucial for determining value, utility, and long-term sustainability of your project in the market."
    },
    {
      question: "Do I need a whitepaper for my token or coin?",
      answer: "While not always mandatory, a whitepaper is highly recommended as it outlines your project's vision, technology, tokenomics, and roadmap, building trust with investors and users."
    }
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
            Find clear, concise responses to the most commonly asked questions about our coin & token development services.
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