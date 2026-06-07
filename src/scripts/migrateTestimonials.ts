import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const oldTestimonials = [
  {
    name: "Aarav Mehta",
    role: "CEO",
    image: "https://i.pravatar.cc/300?img=12",
    text: "Pinak Technology transformed our product vision into a scalable platform. Their communication, execution speed, and technical expertise exceeded every expectation."
  },
  {
    name: "Sophia Williams",
    role: "Product Manager",
    image: "https://i.pravatar.cc/300?img=47",
    text: "Working with Pinak felt like having an in-house engineering team. They delivered ahead of schedule and maintained exceptional quality throughout the project."
  },
  {
    name: "Rohan Patel",
    role: "Owner",
    image: "https://i.pravatar.cc/300?img=15",
    text: "Their attention to detail and commitment to solving complex challenges helped us launch confidently."
  },
  {
    name: "Emily Carter",
    role: "CTO",
    image: "https://i.pravatar.cc/300?img=48",
    text: "The team consistently delivered innovative solutions while maintaining transparent communication."
  },
  {
    name: "Vivek Shah",
    role: "Founder",
    image: "https://i.pravatar.cc/300?img=18",
    text: "Fast turnaround, strong technical skills, and proactive suggestions made the entire process smooth."
  },
  {
    name: "Priya Desai",
    role: "VP Engineering",
    image: "https://i.pravatar.cc/300?img=32",
    text: "Their structured approach and commitment to quality helped us launch our platform without delays."
  },
  {
    name: "Michael Brown",
    role: "CEO",
    image: "https://i.pravatar.cc/300?img=59",
    text: "One of the most dependable development partners we've worked with. Highly professional and responsive."
  },
  {
    name: "Anaya",
    role: "Product Manager",
    image: "https://i.pravatar.cc/300?img=19",
    text: "Excellent communication and a strong understanding of business requirements from day one."
  },
  {
    name: "Jessica Taylor",
    role: "Owner",
    image: "https://i.pravatar.cc/300?img=41",
    text: "The final product exceeded expectations. Clean execution, great support, and impressive speed."
  },
  {
    name: "Harsh Vora",
    role: "Founder",
    image: "https://i.pravatar.cc/300?img=13",
    text: "Professional, reliable, and focused on delivering real business outcomes."
  }
];

const runMigration = async () => {
  if (!db) {
    console.error("Firebase DB not initialized.");
    process.exit(1);
  }

  for (const t of oldTestimonials) {
    await addDoc(collection(db, "testimonials"), {
      ...t,
      createdAt: Date.now()
    });
    console.log(`Added ${t.name}`);
  }
  
  console.log("Migration complete!");
  process.exit(0);
};

runMigration().catch(console.error);
