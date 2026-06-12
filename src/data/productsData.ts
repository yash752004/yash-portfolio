export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  detailedDescription: string;
  keyCapabilities: string[];
  benefits: string[];
  idealFor: string[];
  category: string;
  primaryUsers: string;
  faqs: { question: string; answer: string }[];
}

export const productsData: ProductData[] = [
  {
    id: "homicare",
    name: "HomiCare",
    tagline: "Homeopathy Clinic Management System",
    overview: "HomiCare is a comprehensive clinic management platform designed specifically for homeopathy practitioners, clinics, and healthcare organizations. The system digitizes the entire patient treatment workflow, enabling doctors and clinic staff to manage patient records, prescriptions, visit history, dispensary operations, and medicine instructions from a centralized dashboard.",
    detailedDescription: "Managing a homeopathy clinic involves handling patient information, prescription records, medicine dispensing, follow-up visits, and treatment tracking. Traditional methods often lead to misplaced records, inefficient workflows, and increased administrative overhead.\n\nHomiCare addresses these challenges by providing an integrated digital ecosystem where doctors can create prescriptions, access patient history instantly, generate medicine instructions, manage dispensary operations, and print medicine labels with ease.\n\nThe platform is designed to simplify daily clinic operations while ensuring accurate patient records and streamlined treatment management. With role-based access controls and centralized data management, clinics can improve productivity while delivering a better patient experience.",
    keyCapabilities: [
      "Patient Registration & Management",
      "Digital Prescription Creation",
      "Previous Visit History Tracking",
      "Medicine Management",
      "Dispensary Operations",
      "Sticker & Label Printing",
      "Appointment Follow-up Tracking",
      "Doctor & Staff Access Control",
      "Search & Filter Records",
      "Prescription History Management",
      "Clinic Workflow Automation",
      "Secure Patient Data Management"
    ],
    benefits: [
      "Faster prescription creation",
      "Improved patient record management",
      "Reduced paperwork",
      "Better treatment tracking",
      "Enhanced clinic productivity",
      "Improved patient experience",
      "Accurate medicine instructions",
      "Centralized healthcare operations"
    ],
    idealFor: [
      "Homeopathy Clinics",
      "Individual Practitioners",
      "Multi-Doctor Clinics",
      "Medical Centers",
      "Healthcare Organizations"
    ],
    category: "Healthcare Management",
    primaryUsers: "Homeopathy Clinics & Doctors",
    faqs: [
      { question: "Is my patient data secure?", answer: "Yes, HomiCare uses industry-standard encryption to ensure all patient data is secure and accessible only by authorized personnel." },
      { question: "Can I manage multiple doctors in one clinic?", answer: "Absolutely, HomiCare supports multi-doctor clinics with role-based access controls." },
      { question: "Does it support label printing?", answer: "Yes, HomiCare has built-in support for sticker and label printing for medicine dispensing." }
    ]
  },
  {
    id: "pinakflow",
    name: "PinakFlow",
    tagline: "Inventory Management System",
    overview: "PinakFlow is an advanced inventory management solution developed for manufacturing, packaging, warehouse, and distribution businesses. The platform enables organizations to track inventory movement, monitor stock levels, manage challans, generate barcodes, and analyze consumption patterns through real-time dashboards and reporting tools.",
    detailedDescription: "Inventory management plays a critical role in operational success. Businesses often struggle with stock inaccuracies, manual record maintenance, inventory losses, and limited visibility into material consumption.\n\nPinakFlow solves these challenges by digitizing inventory operations and providing a centralized system for stock tracking and management.\n\nFrom receiving raw materials through challan entries to monitoring inventory consumption and generating detailed reports, PinakFlow ensures complete control over inventory operations. Barcode-based tracking and real-time dashboards help organizations make informed decisions while maintaining inventory accuracy.\n\nThe platform is particularly suitable for industries handling large quantities of inventory such as paper rolls, packaging materials, manufacturing components, and warehouse stock.",
    keyCapabilities: [
      "Real-Time Inventory Tracking",
      "Challan Management",
      "Barcode Generation & Tracking",
      "Label Printing",
      "Usage Timeline Monitoring",
      "Stock Consumption Tracking",
      "Inventory Dashboard & Analytics",
      "Vendor Management",
      "Purchase Tracking",
      "Role-Based Access Control",
      "Inventory Reports",
      "Stock Movement History",
      "Consumption Analysis",
      "Configuration Management"
    ],
    benefits: [
      "Improved inventory accuracy",
      "Reduced inventory losses",
      "Better stock visibility",
      "Faster inventory operations",
      "Data-driven decision making",
      "Reduced manual effort",
      "Optimized inventory utilization",
      "Improved warehouse efficiency"
    ],
    idealFor: [
      "Manufacturing Companies",
      "Packaging Industries",
      "Warehouses",
      "Distribution Centers",
      "Paper Industries",
      "Production Facilities",
      "Supply Chain Businesses"
    ],
    category: "Inventory Management",
    primaryUsers: "Manufacturing & Warehouse Businesses",
    faqs: [
      { question: "Can PinakFlow handle multiple warehouses?", answer: "Yes, you can configure multiple locations and track inventory movement between them." },
      { question: "Does it support barcode scanning?", answer: "Yes, it fully supports barcode generation, printing, and tracking." },
      { question: "Can I track consumption of raw materials?", answer: "Absolutely, it has detailed consumption tracking and usage timeline monitoring." }
    ]
  },
  {
    id: "billflow",
    name: "BillFlow",
    tagline: "Billing & Inventory Management System",
    overview: "BillFlow is a complete retail billing and inventory management platform designed for modern businesses that require fast invoicing, inventory control, customer management, and sales analytics. The platform combines billing operations and stock management into a single system, helping businesses streamline daily operations and improve overall efficiency.",
    detailedDescription: "Retail businesses often rely on multiple tools for billing, inventory management, customer tracking, and reporting. This fragmented approach increases complexity and reduces operational efficiency.\n\nBillFlow brings all essential business operations into one centralized platform.\n\nThe system allows businesses to create invoices instantly, manage customer records, monitor inventory levels, generate professional receipts, and analyze sales performance through interactive dashboards.\n\nInventory is automatically synchronized with sales activity, ensuring accurate stock visibility and reducing manual updates. Business owners gain real-time insights into revenue, customer purchases, inventory movement, and product performance.",
    keyCapabilities: [
      "Smart Billing & Invoicing",
      "Thermal Receipt Printing",
      "GST Invoice Support",
      "Inventory Management",
      "Category & Product Management",
      "Customer Management",
      "Revenue Tracking",
      "Sales Analytics",
      "Inventory Valuation",
      "Stock Monitoring",
      "Bill History Management",
      "Customer Purchase Tracking",
      "Search & Filtering Tools",
      "Export & Reporting",
      "User Access Control"
    ],
    benefits: [
      "Faster billing process",
      "Improved inventory control",
      "Better customer management",
      "Reduced operational errors",
      "Increased business visibility",
      "Accurate sales tracking",
      "Professional invoice generation",
      "Simplified business operations"
    ],
    idealFor: [
      "Clothing Stores",
      "Fashion Retailers",
      "Electronics Shops",
      "Grocery Stores",
      "Supermarkets",
      "Wholesale Businesses",
      "Multi-Category Retail Stores",
      "Small & Medium Enterprises"
    ],
    category: "Billing & Retail Management",
    primaryUsers: "Retail Stores & Merchants",
    faqs: [
      { question: "Does it support GST billing?", answer: "Yes, BillFlow has built-in support for GST invoices and reporting." },
      { question: "Can I use a thermal printer with BillFlow?", answer: "Yes, the system is optimized for fast thermal receipt printing." },
      { question: "Does it track my profit margins?", answer: "Yes, the sales analytics dashboard provides real-time insights into revenue, margins, and top-selling products." }
    ]
  }
];
