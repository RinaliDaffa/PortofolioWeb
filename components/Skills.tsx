"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "AI& Machine Learning",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "#06b6d4",
    accentBg: "rgba(6,182,212,0.06)",
    accentBorder: "rgba(6,182,212,0.2)",
    skills: [
      { name: "Python", note: "Primary" },
      { name: "LLM / RAG / Embeddings", note: "Production" },
      { name: "LangChain / LlamaIndex", note: "" },
      { name: "PyTorch / TensorFlow", note: "" },
      { name: "Fine-tuning (LoRA, SFT)", note: "" },
      { name: "Hugging Face / Ollama", note: "" },
    ],
  },
  {
    label: "Full-Stack Development",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "#a78bfa",
    accentBg: "rgba(167,139,250,0.06)",
    accentBorder: "rgba(167,139,250,0.2)",
    skills: [
      { name: "Next.js 14 / React", note: "Primary" },
      { name: "TypeScript", note: "" },
      { name: "FastAPI / Flask", note: "" },
      { name: "PostgreSQL / MongoDB", note: "" },
      { name: "Prisma / Supabase", note: "" },
      { name: "GraphQL / tRPC / WebSockets", note: "" },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: "#f59e0b",
    accentBg: "rgba(245,158,11,0.06)",
    accentBorder: "rgba(245,158,11,0.2)",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", note: "" },
      { name: "Docker / Kubernetes", note: "" },
      { name: "Railway / Vercel", note: "Production" },
      { name: "Linux / Git / CI/CD", note: "" },
      { name: "Redis / Caching", note: "" },
      { name: "Terraform / Nginx", note: "" },
    ],
  },
  {
    label: "Research & Data",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "#10b981",
    accentBg: "rgba(16,185,129,0.06)",
    accentBorder: "rgba(16,185,129,0.2)",
    skills: [
      { name: "NLP / Text Processing", note: "" },
      { name: "Scikit-learn / Pandas", note: "" },
      { name: "Web Scraping / APIs", note: "" },
      { name: "Statistical Analysis", note: "" },
      { name: "Academic Writing (IEEE)", note: "" },
      { name: "Elasticsearch / Pinecone", note: "" },
    ],
  },
  {
    label: "Mobile & Cross-Platform",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "#f97316",
    accentBg: "rgba(249,115,22,0.06)",
    accentBorder: "rgba(249,115,22,0.2)",
    skills: [
      { name: "Flutter / Dart", note: "" },
      { name: "React Native", note: "" },
      { name: "Swift / Kotlin", note: "" },
      { name: "REST / GraphQL APIs", note: "" },
      { name: "Firebase / BaaS", note: "" },
      { name: "Mobile CI/CD", note: "" },
    ],
  },
  {
    label: "Tools & Productivity",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "#ec4899",
    accentBg: "rgba(236,72,153,0.06)",
    accentBorder: "rgba(236,72,153,0.2)",
    skills: [
      { name: "VS Code / Cursor / Neovim", note: "" },
      { name: "GitHub Copilot / Claude", note: "" },
      { name: "Jest / Cypress / Playwright", note: "" },
      { name: "Postman / Insomnia", note: "" },
      { name: "Jupyter / Colab", note: "" },
      { name: "A/B Testing / Analytics", note: "" },
    ],
  },
];

const additionalSkills = [
  "C", "C++", "Java", "Go", "SQL", "Bash",
  "Swift", "Laravel", "GNS3", "Packet Tracer",
  "Vite", "Zustand", "Recharts", "Framer Motion",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-medium text-[#06b6d4] uppercase tracking-[0.2em] mb-4">
            Technical Expertise
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl">
            What I <span className="text-[#06b6d4]">work with</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="rounded-2xl p-6 border transition-all duration-300 hover:border-[#3f3f46]"
              style={{
                backgroundColor: group.accentBg,
                borderColor: group.accentBorder,
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${group.color}15`, color: group.color }}
                >
                  {group.icon}
                </div>
                <span
                  className="font-syne font-semibold text-sm"
                  style={{ color: group.color }}
                >
                  {group.label}
                </span>
              </div>

              <div className="space-y-2.5">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-0.5"
                      style={{ backgroundColor: group.color, opacity: 0.6 }}
                    />
                    <div className="flex items-center justify-between flex-1 min-w-0">
                      <span className="text-xs text-[#a1a1aa]">{skill.name}</span>
                      {skill.note && (
                        <span
                          className="text-[9px] px-1.5 py-0.5 rounded-full shrink-0 ml-2"
                          style={{
                            backgroundColor: `${group.color}12`,
                            color: group.color,
                          }}
                        >
                          {skill.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl border border-[#27272a] bg-[#09090b]/40"
        >
          <p className="text-xs text-[#52525b] mb-4">Also experienced with</p>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.02 }}
                className="px-3 py-1.5 rounded-full border border-[#27272a] text-xs text-[#71717a] hover:border-[#3f3f46] hover:text-[#a1a1aa] transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
