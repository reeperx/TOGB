"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
    ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Us</SectionHeading>
      <p className="mb-3">
        At our company, we are passionate about{" "}
        <span className="font-medium">Innovation</span>, and committed to transforming the
        digital landscape. We specialize in creating cutting-edge solutions that seamlessly integrate the{" "}
        <span className="font-bold">the power of Full-Stack Web Development and Artificial Intelligence-Driven Chatbots.</span>.{" "}
        <span className="font-medium">Our mission is to empower businesses and individuals with dynamic</span> user-centric, and intelligent web applications and
        chatbots that drive engagement, efficiency, and growth. <span className="font-medium">With a dedicated team of skilled</span> professionals and a proven
        track record of excellence, we are here to revolutionizeyour online presence and Customer
        interactions.{" "} What sets us apart:{" "}
        <span className="font-bold">
          Expertise, Innovation, Client-Centric Approach, AI-Powered Chatbots,
          Full-Stack Excellence, Solutions for Every Sector and Result-Driven
        </span>
        . Embark on a journey of digital transformation with us Let us colaborate and create digital
        experiences that leave a lasting impression.{" "}
        <span className="font-bold">Contact us today,</span> and let us bring your vision to life in 
        the digital world.
      </p>
    </motion.section>
  );
}
