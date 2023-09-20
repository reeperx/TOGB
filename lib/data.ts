import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuBoxes, LuBrainCircuit, LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const servicesData = [
  {
    title: "Custom Web Application Development",
    location: "Hammanskraal, SA",
    description:
      "We specialize in creating bespoke web applications tailored to meet your specific business needs. Our team of experts utilizes the latest technologies and frameworks to build highly responsive, scalable, and user-friendly web solutions. Whether you require an e-commerce platform, a content management system, or a web-based tool, we have the skills and experience to bring your vision to life.",
    icon: React.createElement(LuBoxes),
    since: "2020 - to Date",
  },
  {
    title: "Full-Stack Web Developers",
    location: "Hammanskraal, SA",
    description:
      "Our Full-Stack development services encompass both web and mobile app development. Whether you need a responsive website or a cross-platform mobile application, we have the expertise to deliver. We handle everything from front-end design and user interface development to back-end functionality, ensuring your digital presence is cohesive and feature-rich.",
    icon: React.createElement(FaReact),
    since: "2021 - to date",
  },
  {
    title: "AI-Powered Chatbot Development",
    location: "Hammanskraal, SA",
    description:
      "Enhance customer engagement and streamline business operations with our AI-powered chatbots. We design and develop intelligent chatbots that can handle customer inquiries, provide real-time support, automate tasks, and offer personalized experiences. These chatbots are trained to understand natural language, making interactions with your audience seamless and efficient.",
    icon: React.createElement(LuBrainCircuit),
    since: "2022 to date",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "We worked as a full-stack developers on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. We were the front-end developers. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "An AI Chatbot for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["WotNot", "BotPress", "Voiceflow", "Tidio", "HubSpot"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "AI ChatBots",
  "Framer Motion",
] as const;