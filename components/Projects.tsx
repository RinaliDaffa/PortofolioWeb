"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -4;
        const rotY = ((x - cx) / cx) * 4;
        setTransform(`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`);
      }}
      onMouseLeave={() => setTransform("")}
      style={{ transform }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const projects = [
  {
    id: "its-ih",
    title: "ITS Intelligence Hub",
    category: "AI& Research Platform",
    status: "In Progress",
    featured: true,
    description:
      "AI-powered knowledge platform for Institut Teknologi Sepuluh Nopember, enabling researchers and students to search and explore 48,000+ institutional research papers through hybrid retrieval — combining semantic vector search with keyword matching for precision results.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Embeddings", "LLM", "RAG"],
    highlights: [
      "48,000+ research papers indexed with hybrid vector + BM25 retrieval",
      "AI Q&A system powered by RAG (Retrieval-Augmented Generation)",
      "PDF processing pipeline with embedding generation and citation analysis",
      "Deployed on Railway with automated scraping from SINTA academic database",
    ],
    links: { github: "https://github.com/RinaliDaffa/ITS-Intelligence-Hub", demo: "https://its-intelligence-hub-production.up.railway.app/" },
    accent: "#06b6d4",
  },
  {
    id: "apexpl",
    title: "ApexPL",
    category: "Sports Analytics",
    status: "Live",
    featured: true,
    description:
      "A multidimensional analytics platform for the English Premier League — designed for fans who want insight in under 60 seconds. Features a custom momentum algorithm ($M_s$), real-time FPL data ingestion, and broadcast-quality interactive visualizations.",
    tech: ["Next.js 14", "TypeScript", "Framer Motion", "Supabase", "Redis", "Recharts"],
    highlights: [
      "Custom $M_s$ momentum algorithm normalizing xG, progressive passing accuracy, and defensive efficiency",
      '"Hype vs Reality" analytics engine — variance analysis between sentiment and on-field productivity',
      "Server-side data normalization pipeline via Supabase + Redis (5-min TTL, stale-while-revalidate)",
      "Real-time matchday radar with momentum contrast bars and narrative tags",
    ],
    links: { github: "https://github.com/RinaliDaffa/ApexPL", demo: "https://apex-pl.vercel.app/" },
    accent: "#a78bfa",
  },
  {
    id: "learnwai",
    title: "LearnWAI",
    category: "AI Learning Assistant",
    status: "Live",
    featured: false,
    description:
      "AI-powered learning assistant with a conversational interface. Implements a full RAG pipeline — from document embedding and retrieval to response generation. Supports multiple LLM backends including local Ollama, Hugging Face, and Gemini.",
    tech: ["Next.js", "FastAPI", "Python", "RAG", "Embeddings", "LLM", "Ollama", "Gemini"],
    highlights: [
      "RAG pipeline with document embedding, semantic retrieval, and LLM response generation",
      "Multi-backend LLM support: local Ollama inference → Hugging Face tokens → Gemini API",
      "AI Senopati integration for model deployment in academic environment",
      "Next.js frontend with streaming responses and conversation context management",
    ],
    links: { github: "https://github.com/RinaliDaffa/FP_PBKK_LearnWAI", demo: "https://senopati.its.ac.id/" },
    accent: "#f59e0b",
  },
  {
    id: "ews",
    title: "Early Warning System",
    category: "Data Mining & ML",
    status: "Completed",
    featured: false,
    description:
      "Supply chain risk detection system using data mining techniques to identify potential disruptions and anomalies before they escalate. End-to-end pipeline from raw logistics data to actionable risk scores.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook", "PostgreSQL"],
    highlights: [
      "Full data mining pipeline: preprocessing, feature engineering, EDA on logistics datasets",
      "Multiple ML models trained and evaluated for early risk identification",
      "Anomaly detection using isolation forest and supervised classification approaches",
      "Model performance analysis with precision, recall, and F1 evaluation",
    ],
    links: { github: "https://github.com/RinaliDaffa/Early-Warning_System_DataMining_FInalProject", demo: null },
    accent: "#f97316",
  },
  {
    id: "ors",
    title: "ORS",
    category: "Enterprise Platform",
    status: "Completed",
    featured: false,
    description:
      "Operational Review System — an enterprise-style workspace for immutable post-incident analysis and operational accountability. Focused on structured operational review workflows and governed documentation.",
    tech: ["TypeScript", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Structured incident review workflow with immutable documentation",
      "Governed access controls for operational accountability",
      "Enterprise-grade UX designed for minimal cognitive load under stress",
    ],
    links: { github: "https://github.com/RinaliDaffa/ORS-OperationalReviewSystem", demo: null },
    accent: "#ec4899",
  },
  {
    id: "spoj",
    title: "SPOJ Zebra Crossing",
    category: "Competitive Programming",
    status: "Completed",
    featured: false,
    description:
      "Solved a high-difficulty algorithmic problem involving geometric modeling and optimization under strict computational constraints. Applied advanced data structures for maximum efficiency.",
    tech: ["C++", "Sweep Line", "Lazy Segment Tree", "Coordinate Compression"],
    highlights: [
      "Sweep line algorithm with lazy segment tree for O(n log n) maximum overlap detection",
      "Coordinate compression to handle large coordinate spaces efficiently",
      "Time and space complexity analysis ensuring feasibility under strict limits",
    ],
    links: { github: "https://github.com/RinaliDaffa/SPOJ-Zebra-Crossing", demo: "#" },
    accent: "#8b5cf6",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Featured", "AI& ML", "Data", "Web", "Other"];
  const filtered = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    if (activeFilter === "AI& ML") return ["its-ih", "learnwai"].includes(p.id);
    if (activeFilter === "Data") return ["ews", "spoj"].includes(p.id);
    if (activeFilter === "Web") return ["apexpl", "ors"].includes(p.id);
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#06b6d4]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="text-xs font-medium text-[#06b6d4] uppercase tracking-[0.2em] mb-4">
              Featured Work
            </p>
            <h2 className="font-syne font-bold text-4xl md:text-5xl">
              Things I've <span className="text-[#06b6d4]">built</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all duration-200 ${activeFilter === f
                  ? "bg-[#06b6d4] text-black font-medium"
                  : "text-[#52525b] hover:text-[#a1a1aa]"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured projects — large cards with soft glow */}
        {filtered.some((p) => p.featured && p.id === "its-ih") && (
          <TiltCard className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl p-8 group"
              style={{
                background: `radial-gradient(ellipse 80% 60% at 0% 0%, ${projects[0].accent}08 0%, transparent 70%)`,
              }}
            >
              {/* Ambient glow */}
              <div
                className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-[80px] pointer-events-none"
                style={{ backgroundColor: `${projects[0].accent}12` }}
              />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${projects[0].accent}15`,
                      color: projects[0].accent,
                    }}
                  >
                    Featured
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs text-[#52525b]">
                    AI & Research Platform
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs text-[#52525b]">
                    In Progress
                  </span>
                </div>
                <h3 className="font-syne font-bold text-3xl mb-3 text-[#fafafa] group-hover:text-[#06b6d4] transition-colors">
                  ITS Intelligence Hub
                </h3>
                <p className="text-[#71717a] text-sm mb-5 leading-relaxed max-w-2xl">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {projects[0].tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs text-[#52525b]"
                      style={{ backgroundColor: `${projects[0].accent}08` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {projects[0].highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-sm text-[#52525b]">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: projects[0].accent }}
                      />
                      {h}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <a
                    href="https://github.com/RinaliDaffa/its-intelligence-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors"
                    style={{ backgroundColor: `${projects[0].accent}08` }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.71.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          </TiltCard>
        )}

        {filtered.some((p) => p.featured && p.id === "apexpl") && (
          <TiltCard className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative overflow-hidden rounded-2xl p-8 group"
              style={{
                background: `radial-gradient(ellipse 80% 60% at 100% 0%, ${projects[1].accent}08 0%, transparent 70%)`,
              }}
            >
              <div
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[80px] pointer-events-none"
                style={{ backgroundColor: `${projects[1].accent}12` }}
              />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${projects[1].accent}15`,
                      color: projects[1].accent,
                    }}
                  >
                    Featured
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs text-[#52525b]">
                    Sports Analytics
                  </span>
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${projects[1].accent}15`,
                      color: projects[1].accent,
                    }}
                  >
                    Live
                  </span>
                </div>
                <h3 className="font-syne font-bold text-3xl mb-3 text-[#fafafa] group-hover:text-[#a78bfa] transition-colors">
                  ApexPL
                </h3>
                <p className="text-[#71717a] text-sm mb-5 leading-relaxed max-w-2xl">
                  {projects[1].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {projects[1].tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs text-[#52525b]"
                      style={{ backgroundColor: `${projects[1].accent}08` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {projects[1].highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-sm text-[#52525b]">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: projects[1].accent }}
                      />
                      {h}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <a
                    href="https://github.com/RinaliDaffa/ApexPL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors"
                    style={{ backgroundColor: `${projects[1].accent}08` }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.71.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                    Source
                  </a>
                  <a
                    href="https://apex-pl.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all"
                    style={{
                      backgroundColor: projects[1].accent,
                      color: "#09090b",
                    }}
                  >
                    Live Demo
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </TiltCard>
        )}

        {/* Other projects — seamless horizontal flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered
            .filter((p) => !p.featured)
            .map((project, i) => (
              <TiltCard key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl p-6 h-full flex flex-col"
                  style={{
                    background: `radial-gradient(ellipse 100% 80% at 50% 0%, ${project.accent}06 0%, transparent 70%)`,
                  }}
                >
                  {/* Subtle top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${project.accent}30, transparent)`,
                    }}
                  />
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-[#52525b]">{project.category}</span>
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.accent, opacity: 0.6 }}
                    />
                  </div>
                  <h3 className="font-syne font-bold text-lg mb-2 text-[#fafafa] group-hover:opacity-80 transition-opacity">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#52525b] mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full text-[10px] text-[#52525b]"
                        style={{ backgroundColor: `${project.accent}08` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.71.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                      {project.links.github === "#" ? "Private" : "Source"}
                    </a>
                    {project.links.demo !== "#" && (
                      <a
                        href={project.links.demo ?? undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors flex items-center gap-1"
                      >
                        Demo
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              </TiltCard>
            ))}
        </div>
      </div>
    </section>
  );
}
