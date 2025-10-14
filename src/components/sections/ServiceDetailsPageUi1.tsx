import { PhoneCall, MessageCircle, Mail, CheckCircle } from "lucide-react";

const ServiceDetailsPageUi1 = () => {
  const services = [
    "Rebase Mechanism",
    "Liquidity Mining",
    "Anti Mev",
    "Crypto Token Wallet Development",
    "Custom and Scalable Token Minting Services for All Use Cases",
    "Secure Token Burning Mechanisms for Supply Management",
    "Seamless Token Listing on Top Cryptocurrency Exchanges",
    "Multi-Factor Security for Token and Platform Protection",
  ];

  return (
    <section className="bg-[#E6AC00] text-black py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            End-to-End Crypto Token Presale Development Solutions for Your Project
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Launch your own cryptocurrency with our expert token creation services.
            Customized tokens with smart contracts, tokenomics, and wallet integration.
            From concept to exchange listing, we provide end-to-end blockchain token
            development tailored to your project needs.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-all">
            BOOK A CALL →
          </button>

          <div className="flex gap-4 mt-6">
            <button className="bg-white w-12 h-12 rounded-md flex items-center justify-center hover:scale-105 transition">
              <PhoneCall className="text-black w-6 h-6" />
            </button>
            <button className="bg-white w-12 h-12 rounded-md flex items-center justify-center hover:scale-105 transition">
              <MessageCircle className="text-black w-6 h-6" />
            </button>
            <button className="bg-white w-12 h-12 rounded-md flex items-center justify-center hover:scale-105 transition">
              <Mail className="text-black w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex-1">
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-black" />
                <span className="text-lg">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsPageUi1;
