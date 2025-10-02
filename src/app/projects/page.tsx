import { Metadata } from "next";
import ProjectCard, { Project } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Kruthik",
};

const projects: Project[] = [
  {
    title: "TextSummarizer",
    description:
      "A modern web app to generate concise summaries of long-form text using advanced NLP models like OpenAI GPT or HuggingFace Transformers.",
    tags: ["Python", "NLP", "React", "OpenAI", "HuggingFace"],
    link: "https://github.com/kruth-s/TextSummarizer",
  },
  {
    title: "FinSmart",
    description:
      "A sleek and intelligent platform for managing personal finances and gaining real-time stock insights. Track expenses, analyze trends, and make informed financial decisions—all in one place!",
    tags: ["JavaScript", "Finance", "Stocks", "Trends"],
    link: "https://github.com/kruth-s/FinSmart",
  },
  {
    title: "Digital-Rights-AI",
    description:
      "Detects copyrighted text using NLP-based similarity matching and licensing checks. Identifies protected phrases, movie dialogues, and code snippets to ensure compliance.",
    tags: ["NLP", "AI", "Copyright", "Compliance"],
    link: "https://github.com/kruth-s/Digital-Rights-AI",
  },
  {
    title: "CrowdFunding-Dapp-solidity",
    description:
      "A decentralized crowdfunding platform built with Solidity, Hardhat, and React (Vite). Supports funding, withdrawal, and refunds.",
    tags: ["Solidity", "Blockchain", "Hardhat", "React"],
    link: "https://github.com/kruth-s/CrowdFunding-Dapp-solidity",
  },
  {
    title: "AI-Powered-Image-Tagging",
    description:
      "An AI-powered image tagging pipeline combining BLIP for caption generation, KeyBERT for keyword extraction, and CLIP for visual tag filtering. Works zero-shot on any image.",
    tags: ["AI", "Vision", "KeyBERT", "CLIP", "BLIP"],
    link: "https://github.com/kruth-s/AI-Powered-Image-Tagging-using-Generative-Vision-Language-Models",
  },
  {
    title: "NutriFit360",
    description:
      "AI-powered Diet and Fitness mobile app to help users stay healthy, track nutrition, and reach fitness goals.",
    tags: ["TypeScript", "AI", "Fitness", "Mobile"],
    link: "https://github.com/kruth-s/NutriFit360",
  },
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}
