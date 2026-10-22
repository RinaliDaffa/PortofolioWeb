"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "PT Salam Pacific Indonesia Lines (SPIL)",
    org: "AI Engineer Intern",
    period: "Jul 2026 — Dec 2026",
    location: "Surabaya, Indonesia",
    description:
      "Designing and building production-oriented AI, data, and software solutions that support digital transformation across enterprise operational workflows at an Indonesian shipping and logistics company.",
    highlights: [
      "Engineered end-to-end LLM-powered systems: data preparation, retrieval, prompt and inference pipelines, automated analysis, validation, and integration into user-facing apps",
      "Designed and evaluated advanced RAG architectures — vector-based and vectorless retrieval — for enterprise document intelligence, cross-document analysis, and evidence-grounded decision support",
      "Built intelligent document-processing workflows combining LLMs, NLP, semantic retrieval, classification, conflict detection, and legal/policy cross-referencing",
      "Improved reliability through test-set development, automated testing, error analysis, output validation, and production-readiness audits — minimizing unsupported AI outputs",
      "Supported the transition of AI prototypes into production-grade applications: architecture, modularity, documentation, deployment workflows, and handover to internal infrastructure",
    ],
    tags: ["LLMs", "RAG", "Document Intelligence", "NLP", "Evaluation", "Python"],
  },
  {
    company: "Artificial Intelligence Talent Factory (AITF)",
    org: "Ministry of Communication and Digital Affairs (Komdigi)",
    period: "Feb 2026 — Present",
    location: "Indonesia",
    description:
      "Selected for a semester-long national AI talent development program organized by Komdigi to strengthen Indonesia's AI ecosystem through collaboration between academia, industry, and government.",
    highlights: [
      "Hands-on development of AI solutions for real-world digital governance use cases",
      "End-to-end AI pipelines: data preparation, model development, fine-tuning, evaluation, and system integration",
      "Collaborated in multidisciplinary teams with academic mentors, industry practitioners, and technical tutors",
      "Participated in technical workshops and expert mentoring sessions focused on production-oriented AI solutions",
    ],
    tags: ["LLMs", "Machine Learning", "AI Engineering", "Python"],
  },
  {
    company: "Undergraduate Researcher — LLM Fine-Tuning & MoE Adapters",
    org: "Supervised by Prof. Ary M. Shiddiqi, Ph.D., IPM. — ITS",
    period: "Jan 2026 — Present",
    location: "Surabaya, Indonesia",
    description:
      "Applied research on parameter-efficient fine-tuning (PEFT) for large language models, as part of a research team at ITS.",
    highlights: [
      "Researching \"CONNEC LoRA\" (Low-Rank Adaptation) architectures to enhance PEFT capabilities in monolithic LLMs",
      "Designing and evaluating Mixture-of-Experts (MoE) adapters to improve model scalability and domain-specific task performance",
      "Investigating structural model-splitting strategies and efficient adapter deployment to streamline training and inference",
    ],
    tags: ["LoRA", "PEFT", "Mixture-of-Experts", "PyTorch", "Research"],
  },
  {
    company: "Himpunan Mahasiswa Teknik Komputer-Informatika (HMTC ITS)",
    org: "Staff → Head of Aspiration Bureau",
    period: "Mar 2025 — Present",
    location: "Surabaya, Indonesia",
    description:
      "Elected as Head of the Aspiration Bureau to lead a team in facilitating advocacy and strategic roadmaps for the Informatics student body.",
    highlights: [
      "Lead a team facilitating advocacy and strategic roadmaps for 500+ Informatics students",
      "Represent student interests in high-level department meetings",
      "Executed 'Jaring Aspirasi' — analyzed survey data and organized faculty forums",
    ],
    tags: ["Leadership", "Communication", "Strategic Planning"],
  },
  {
    company: "IRIS Robotic Team",
    org: "Internship — Robotics & Computer Vision",
    period: "Mar 2024 — Sep 2024",
    location: "Surabaya, Indonesia",
    description:
      "Worked with OpenCV and Robot Operating System (ROS) for robotics-related applications, applying Object-Oriented Programming with C++.",
    highlights: [
      "Developed computer vision applications using OpenCV and ROS",
      "Applied Object-Oriented Programming with C++ in a production robotics environment",
      "Gained experience handling visual data and computational systems",
    ],
    tags: ["OpenCV", "ROS", "C++", "Computer Vision"],
  },
  {
    company: "Schematics — Bootcamp and Seminar of Technology (BST)",
    org: "Staff → Expert Staff",
    period: "2024 — 2025",
    location: "Surabaya, Indonesia",
    description:
      "Served as Staff during the first year, contributing to learning material preparation and participant coordination. Promoted to Expert Staff in the second year.",
    highlights: [
      "Designed technical materials, quizzes, evaluations, and final projects for technology bootcamps",
      "Contributed to learning material preparation, scheduling, and participant coordination",
      "Supported organization and execution of technology-focused bootcamps and seminars",
    ],
    tags: ["Teaching", "Curriculum Design", "Event Organization"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_100%,#18181b_0%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-medium text-[#06b6d4] uppercase tracking-[0.2em] mb-4">
            Career & Experience
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl">
            Where I&apos;ve <span className="text-[#06b6d4]">worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#27272a]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-3 w-[22px] h-[22px] rounded-full border-2 border-[#18181b] bg-[#09090b] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#06b6d4]" />
                </div>

                {/* Header row */}
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-syne font-bold text-lg text-[#fafafa]">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-[#06b6d4] mt-0.5">{exp.org}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-[#71717a]">{exp.period}</p>
                    <p className="text-xs text-[#52525b]">{exp.location}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#71717a] mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-[#a1a1aa]"
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 text-[#06b6d4] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs text-[#71717a] bg-[#18181b] border border-[#27272a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
