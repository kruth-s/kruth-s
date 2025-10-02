
"use client";
import { motion } from "framer-motion";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 flex flex-col h-full border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4 mb-2">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
      >
        View Project
      </a>
    </motion.div>
  );
}
