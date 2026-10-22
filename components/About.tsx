"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Full-Stack Fluency",
    desc: "From React frontends to FastAPI backends and deployment pipelines — I build complete, production-ready systems.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI & Data Systems",
    desc: "RAG pipelines, embedding models, vector databases, and machine learning — turning raw data into intelligent applications.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Industry & Research",
    desc: "AI Engineer Intern at SPIL building enterprise RAG systems, and undergraduate researcher on LoRA / MoE adapters for LLMs.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "National Impact",
    desc: "Selected for AITF — a national AI talent program by Komdigi, bridging academia, industry, and government.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-medium text-[#06b6d4] uppercase tracking-[0.2em] mb-4"
            >
              About Me
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-syne font-bold text-4xl md:text-5xl leading-tight mb-6"
            >
              Building at the intersection of{" "}
              <span className="text-[#06b6d4]">data, AI,</span> and{" "}
              <span className="text-[#06b6d4]">scalable systems</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4 text-[#a1a1aa] leading-relaxed"
            >
              <p>
                I&apos;m an Informatics student at{" "}
                <span className="text-[#fafafa] font-medium">Institut Teknologi
                  Sepuluh Nopember (ITS)</span>, driven by the belief that good software
                should make complex things feel simple. My focus sits at the intersection
                of data science, full-stack development, and applied AI.
              </p>
              <p>
                Beyond coursework, I&apos;ve built and shipped real-world systems — from
                a Premier League analytics platform used by thousands of fans, to an
                enterprise-grade search engine indexing 48,000+ research papers with
                hybrid vector + keyword retrieval. I care deeply about building things
                that actually work at scale, not just in demos.
              </p>
              <p>
                Currently, I&apos;m an{" "}
                <span className="text-[#fafafa] font-medium">AI Engineer Intern at PT Salam Pacific Indonesia Lines (SPIL)</span>,
                building LLM and RAG systems for enterprise document intelligence. Alongside that, I
                research parameter-efficient LLM fine-tuning (LoRA &amp; MoE adapters) at ITS and take part in
                the <span className="text-[#fafafa] font-medium">AITF program by Komdigi</span>,
                Indonesia&apos;s Ministry of Communication and Digital Affairs.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex items-center gap-3"
            >
              <svg className="w-4 h-4 text-[#52525b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-[#52525b]">Surabaya, Jawa Timur, Indonesia</span>
            </motion.div>
          </div>

          {/* Right — highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="group p-5 rounded-2xl border border-[#27272a] bg-[#09090b]/60 hover:border-[#06b6d4]/30 hover:bg-[#18181b]/60 transition-all duration-300"
              >
                <div className="mb-3 w-10 h-10 rounded-xl bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center group-hover:bg-[#06b6d4]/20 transition-colors">
                  {h.icon}
                </div>
                <h3 className="font-syne font-semibold text-sm mb-2 text-[#fafafa]">
                  {h.title}
                </h3>
                <p className="text-xs text-[#52525b] leading-relaxed">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}