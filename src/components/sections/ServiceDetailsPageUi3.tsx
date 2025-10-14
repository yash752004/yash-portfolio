import { motion } from "framer-motion";
import { Code2 } from "lucide-react"; // icon placeholder — you can replace it

const tokenServices = [
  { 
    title: "BEP20 Token Development", 
    description: "Our BEP20 token development services on Binance Smart Chain ensure low transaction fees, high scalability, and cross-chain compatibility."
  },
  { 
    title: "Polygon Token Development", 
    description: "As a trusted Polygon token development company, we create tokens optimized for fast transactions, advanced Layer-2 scalability, and smooth Ethereum compatibility."
  },
  { 
    title: "Solana Token Development", 
    description: "Our Solana Token Development Solutions use high-performance blockchain architecture to achieve ultra-fast speeds and low gas costs."
  },
  { 
    title: "DeFi Token Development", 
    description: "Our DeFi token development leverage advanced smart contract protocols to build tokens designed for staking, lending platforms, governance systems, and liquidity pool integration."
  },
  { 
    title: "Asset-Backed Token Development", 
    description: "We develop blockchain tokens backed by real-world assets like gold, real estate, or commodities for stable value."
  },
  { 
    title: "ERC20 Token Development", 
    description: "We build ERC20 Tokens on Ethereum with secure smart contracts, custom tokenomics, and seamless dApp integration."
  },
];

const ServiceDetailsPageUi3 = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-emerald-50 dark:bg-zinc-800 text-center">
      {/* Heading */}
      <div className="px-6">
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gradient">
          Blockchain-Based Token Development Services
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mx-auto pt-6 md:pt-10 text-gray-700 dark:text-gray-300">
          We deliver a full suite of cryptocurrency development services, helping businesses create, launch, and manage blockchain-based projects effortlessly under one roof.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
        {tokenServices.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="flex flex-col items-start text-left space-y-4"
          >
            {/* Icon */}
            <div className="rounded-full p-3 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white">
              <Code2 size={30} />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetailsPageUi3;
