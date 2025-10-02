
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="container mx-auto py-16 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <img
        src="https://avatars.githubusercontent.com/u/213943793?v=4"
        alt="Kruthik S avatar"
        className="mx-auto mb-6 rounded-full w-28 h-28 shadow-lg"
      />
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
        Hi, I&apos;m <span className="text-blue-600">Kruthik S</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Undergraduate CSE student passionate about backend, cloud, DevOps, and AI. Writing full-stack code, pretending blockchain is stable, and raising ML models like they&apos;re my own.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a href="https://github.com/kruth-s" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-900 text-white px-4 py-2 rounded font-semibold hover:bg-gray-700 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/kruth-s/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition">LinkedIn</a>
        <a href="https://kruth-s.github.io/" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition">Portfolio</a>
      </div>
      <a
        href="#projects"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
      >
        View Projects
      </a>
    </motion.section>
  );
}
