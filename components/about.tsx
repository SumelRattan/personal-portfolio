"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Information Science: Machine Learning and Artificial Intelligence</span>, I've focused on building solutions at the intersection of data, engineering, and product strategy. With hands-on experience in developing{" "}
        <span className="font-medium">machine learning models, designing intuitive dashboards, and streamlining data pipelines,</span> I've worked across industries to turn raw data into meaningful outcomes. My background combines technical depth in {" "}
        <span className="italic">Python, SQL, and cloud platforms like AWS </span> with a practical understanding of <span className="underline">cross-functional collaboration,</span> allowing me to deliver insights that support real business impact. I'm passionate about solving complex problems, simplifying messy data, and building tools that make smart decisions easier.
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a <span className="underline">data scientist, data analyst or a product manager.</span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy hanging out with friends, playing
        video games, watching movies, and have fun. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">building data pipelines</span>. I'm also
        learning video editing.
      </p>
    </motion.section>
  );
}
