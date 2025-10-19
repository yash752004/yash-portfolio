
import ecommerse0 from "./ECommerce/0.png";
import ecommerse1 from "./ECommerce/1.png";
import ecommerse2 from "./ECommerce/2.png";
import ecommerse3 from "./ECommerce/3.png";
import ecommerse4 from "./ECommerce/4.png";
import ecommerse5 from "./ECommerce/5.png";
import ecommerse6 from "./ECommerce/6.png";

import gemini1 from "./ChatApp/1.png";
import gemini2 from "./ChatApp/2.png";
import gemini3 from "./ChatApp/3.png";
import gemini4 from "./ChatApp/4.png";
import gemini5 from "./ChatApp/5.png";
import gemini6 from "./ChatApp/6.png";

import thumbail1 from "./CareHQ/1.png";
import carehq2 from "./CareHQ/2.png";
import carehq3 from "./CareHQ/3.png";
import carehq4 from "./CareHQ/4.png";
import carehq5 from "./CareHQ/5.png";
import carehq6 from "./CareHQ/6.png";
import carehq7 from "./CareHQ/7.png";

import wiretime1 from "./WireTime/1.jpeg";
import wiretime2 from "./WireTime/2.jpeg";
import wiretime3 from "./WireTime/3.png";
import wiretime4 from "./WireTime/4.png";
import wiretime5 from "./WireTime/5.png";
import wiretime6 from "./WireTime/6.png";
import wiretime7 from "./WireTime/7.jpeg";

import sports1 from "./SportsPortal/1.png";
import sports2 from "./SportsPortal/2.png";
import sports3 from "./SportsPortal/3.png";
import sports4 from "./SportsPortal/4.png";
import sports5 from "./SportsPortal/5.png";

import analitics1 from "./Analytics/1.png";
import analitics2 from "./Analytics/2.png";
import analitics3 from "./Analytics/3.png";
import analitics4 from "./Analytics/4.png";
import analitics5 from "./Analytics/5.png";

export type ProjectDetailType = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  verticalThumbnail: string;
  thumbnail: string;
  screenshots: string[];
  liveLink: string;
  hasLiveLink: boolean;
  category: string;
}

export const ProjectDatas: ProjectDetailType[] = [
  {
    id: "jewellery-ecommerce-app",
    title: "Jewellery Ecommerce App",
    description: "Developed a comprehensive Ecommerce platform for jewellery, Home page with diffrent diffrent categories.",
    tools: ['Next.JS', 'Tailwind CSS', 'NodeJs', 'Express', 'MongoDB'],
    verticalThumbnail: ecommerse0,
    thumbnail: ecommerse0,
    screenshots: [
      ecommerse0,
      ecommerse1,
      ecommerse2,
      ecommerse3,
      ecommerse4,
      ecommerse5,
      ecommerse6
    ],
    liveLink: "https://jewellery-ecommerce-flax.vercel.app/",
    hasLiveLink: true,
    category: "Web App"
  },
  {
    id: "gemini-chat-app",
    title: "Gemini Chat App",
    description: "Built a Gemini-style conversational AI chat application with features like OTP-based authentication, multi-chatroom management, real-time AI message simulation, image uploads, and reverse infinite scroll with pagination. Implements Redux for state management, form validation with React Hook Form + Zod, and a polished, responsive UI using Material UI. Dark mode, scroll-to-bottom, and keyboard accessibility are also integrated for a complete UX.",
    tools: ['React', 'Redux', 'Material UI', 'Zod', 'JavaScript'],
    verticalThumbnail: gemini1,
    thumbnail: gemini1,
    screenshots: [
      gemini2,
      gemini3,
      gemini4,
      gemini5,
      gemini6
    ],
    liveLink: "https://gemini-chat-app-gamma.vercel.app/",
    hasLiveLink: true,
    category: "Web App"
  },
  {
    id: "carehq",
    title: "CareHQ",
    description: "Engineered a health monitoring system CareHQ using Vite, TypeScript, designed for staff operating in hazardous environments. The platform allows uploading of staff profiles and medical records, facilitates consultations, highlights abnormal health conditions, and integrates comprehensive checklists for ambulance preparedness and medicine inventory. This system improves on-site safety compliance and supports proactive health management across the organization.",
    tools: ["react", "vite", 'restApi', "typescript", "docker"],
    verticalThumbnail: thumbail1,
    thumbnail: thumbail1,
    screenshots: [
      thumbail1,
      carehq2,
      carehq3,
      carehq4,
      carehq5,
      carehq6,
      carehq7
    ],
    liveLink: "",
    hasLiveLink: false,
    category: "Web App"
  },
  {
    id: "wiretime",
    title: "WiReTime",
    description: "Developed a workforce management platform used by 50+ team members to track tasks and time, improving productivity by 40%. WireTime using Vite, TypeScript, React (MUI). The application streamlines task assignment, real-time punch-in/out tracking with geolocation, leave management, and automated email notifications. Additional modules include user profile customization and a dynamic dashboard, empowering managers with clear visibility into project progress and team productivity.",
    tools: ["vite", 'restApi', "typescript", "docker"],
    verticalThumbnail: wiretime1,
    thumbnail: wiretime1,
    screenshots: [
      wiretime1,
      wiretime2,
      wiretime3,
      wiretime4,
      wiretime5,
      wiretime6,
      wiretime7

    ],
    liveLink: "",
    hasLiveLink: false,
    category: "Web App"
  },
  {
    id: "sports-portal",
    title: "Sports Portal",
    description: "Developed an interactive Sports Portal using React, enabling users to explore training batches based on location and age group, choose from multiple packages, and seamlessly complete online payments. The platform features a dynamic landing page for user engagement and streamlines the booking process for sports programs. On the admin side, it supports batch creation, with functionalities to add trainers, configure package pricing, assign time slots, and monitor user activity. This system enhances operational efficiency and provides a unified interface for both users and administrators in managing sports training programs.",
    tools: ["react", 'MUI', 'css', "docker", 'restApi'],
    verticalThumbnail: sports1,
    thumbnail: sports1,
    screenshots: [
      sports1,
      sports2,
      sports3,
      sports4,
      sports5
    ],
    liveLink: "",
    hasLiveLink: false,
    category: "Web App"
  },
  {
    id: "analytics-dashboard",
    title: 'Analitics Dashboard',
    description: 'Developed a futuristic analytics dashboard that visualizes business performance through dynamic, interactive charts. Users can upload sales data via CSV, which is then processed through n8n automation workflows and displayed as actionable insights. The dashboard features a responsive, glassmorphic UI with dark mode support, enabling intuitive analysis of KPIs like sales, taxes, stock, and payment trends.',
    tools: ['NexxtJs', 'TypeScript', 'n8n Automation', 'Charts.js', 'Tailwind CSS'],
    verticalThumbnail: analitics1,
    thumbnail: analitics1,
    screenshots: [
      analitics1,
      analitics2,
      analitics3,
      analitics4,
      analitics5
    ],
    liveLink: "",
    hasLiveLink: false,
    category: "Web App"
  }
];