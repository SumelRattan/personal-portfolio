import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaChartLine } from "react-icons/fa";
import { LuGraduationCap, LuNetwork } from "react-icons/lu";
import Poster from "@/public/Poster.png"
import BERT from "@/public/BERT.png"
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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technical Product Manager",
    location: "Palampur, India",
    description:
      "At Computech Systems, I improved delivery speed by 30% by streamlining Scrum practices using JIRA. I enhanced application security by reducing vulnerabilities 35% through JUnit-based testing, and leveraged Google Analytics to drive a 27% boost in product accuracy through targeted development insights.",
    icon: React.createElement(LuNetwork),
    date: "2021 - 2022",
  },
  {
    title: "Back-End Developer",
    location: "Bengaluru, India",
    description:
      "At eGov Foundations, I developed a live dashboard that improved real-time data monitoring by 35% and optimized legacy code, reducing technical debt by 15%. I streamlined cross-team communication to cut project delays by 25% and deployed applications on AWS, boosting scalability and lowering costs by 20%. I also earned the DIGIT certification to strengthen my technical proficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Information Designer",
    location: "Noida, India",
    description:
      "At Interra Systems, I streamlined ETL workflows, increasing data processing efficiency by 25% and reducing latency by 30%. I worked closely with stakeholders to design user-focused Power BI dashboards that boosted engagement by 20%. I also improved documentation quality using tools like Adobe RoboHelp and FrameMaker, enhancing clarity and increasing knowledge sharing by 40%.",
    icon: React.createElement(FaChartLine),
    date: "2021 - present",
  },
] as const;

export const educationData = [
  {
    title: "University of Arizona - GPA: 3.9/4.0",
    location: "Tucson, United States",
    description:
      "Master's in Information Science with a focus on Machine Learning and Artificial Intelligence. I gained hands-on experience in data analysis, machine learning, and information retrieval, and developed a strong foundation in programming languages such as Python, SQL and R.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "Chitkara University - GPA: 3.9/4.0",
    location: "Chandigarh, India",
    description:
      "Bachelor's in Computer Science and Engineering with a focus on full stack development. I gained hands-on experience in software development, database management, and web technologies, and developed a strong foundation in programming languages such as Java, Python, and SQL. I immediately found a job before even graduating.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Hospital Readmissions Risk Analysis",
    description:
      "Analyzed hospital readmissions using logistic regression to uncover key risk factors, presenting findings at the University of Arizona’s iShowcase.",
    tags: ["RStudio", "Python", "Pandas", "Predictive Analysis", "Seaborn"],
    imageUrl: Poster,
  },
  {
    title: "Humor Classification on PBS Eons Youtube",
    description:
      "Developed a BERT classifier to detect humor, enabling sentiment analysis & audience engagement insights.",
    tags: ["NLP", "Tensorflow", "Data Wrangling", "Python", "Transformers", "Keras", "Model Evaluation"],
    imageUrl: BERT,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "Microsoft Power BI",
  "JavaScript",
  "Jira",
  "Git",
  "MySQL",
  "PostgreSQL",
  "RStudio",
  "Bash/Shell",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Tensorflow",
  "Keras",
  "HuggingFace Transformers",
  "LLMs",
  "Kubernetes",
  "Microsoft Azure Fundamentals",
  "AWS Cloud Services","Problem Solving", 
  "Collaboration"
] as const;
