"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "Data & ML Engineer",
  "AI Systems Builder",
  "Backend Engineer",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      {/* Glow accent */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#06b6d4]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#f59e0b]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-6 inline-flex">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27272a] bg-[#18181b]/60 text-xs text-[#a1a1aa] backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                AI Engineer Intern @ SPIL · Informatics @ ITS
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-syne font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tight mb-2"
            >
              Daffa Rinali
            </motion.h1>

            {/* Animated role */}
            <motion.div variants={item} className="h-12 mb-6 flex items-center">
              <span className="font-syne font-semibold text-2xl md:text-3xl text-[#06b6d4]">
                {displayText}
              </span>
              <span className="ml-1 w-0.5 h-7 bg-[#06b6d4] animate-[blink_1s_step-end_infinite]" />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={item}
              className="text-lg text-[#a1a1aa] leading-relaxed mb-10 max-w-2xl"
            >
              Building data-driven systems and AI-powered applications from Surabaya.
              Currently an AI Engineer Intern at SPIL building enterprise RAG and
              document-intelligence systems, researching LLM fine-tuning at ITS, and
              part of Komdigi&apos;s national AI Talent Factory.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#06b6d4] text-black font-semibold text-sm hover:bg-[#22d3ee] transition-all duration-200"
              >
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-[#27272a] text-sm text-[#fafafa] hover:border-[#3f3f46] hover:bg-[#18181b]/60 transition-all duration-200"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/daffa-rinali-58b380283"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-[#27272a] text-sm text-[#a1a1aa] hover:border-[#3f3f46] hover:text-[#fafafa] transition-all duration-200"
              >
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Right — profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            {/* Ambient glow blobs */}
            <div className="absolute w-80 h-80 bg-[#06b6d4]/10 rounded-full blur-[100px] animate-[orb-float_8s_ease-in-out_infinite]" />
            <div className="absolute w-60 h-60 bg-[#06b6d4]/5 rounded-full blur-[80px] animate-[orb-float_12s_ease-in-out_infinite_reverse]" />

            <div className="relative group">
              {/* Outer glow ring on hover */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#06b6d4]/50 to-[#06b6d4]/0 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 scale-105" />

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/daffa.jpg"
                  alt="Daffa Rinali"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ aspectRatio: "3/4", maxHeight: "480px", width: "320px" }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/60 via-transparent to-transparent" />

                {/* Glitch lines on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                  <div className="absolute w-full h-px bg-[#06b6d4]/60 animate-[scan3s_2s_linear_infinite]" style={{ top: "0%", animationDelay: "0s" }} />
                  <div className="absolute w-full h-px bg-[#06b6d4]/40 animate-[scan3s_2s_linear_infinite]" style={{ top: "0%", animationDelay: "0.6s" }} />
                  <div className="absolute w-full h-px bg-[#06b6d4]/30 animate-[scan3s_2s_linear_infinite]" style={{ top: "0%", animationDelay: "1.2s" }} />
                </div>

                {/* Corner brackets */}
                <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-3 right-3 w-6 h-px bg-[#06b6d4]" />
                  <div className="absolute top-3 right-3 w-px h-6 bg-[#06b6d4]" />
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 w-6 h-px bg-[#06b6d4]" />
                  <div className="absolute bottom-3 left-3 w-px h-6 bg-[#06b6d4]" />
                </div>

                {/* Side accent bars */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#06b6d4]/20 group-hover:bg-[#06b6d4]/60 transition-colors duration-300" />
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#06b6d4]/20 group-hover:bg-[#06b6d4]/60 transition-colors duration-300" />
              </div>

              {/* Bottom label bar */}
              <div className="bg-[#18181b]/90 backdrop-blur-sm border border-[#27272a] rounded-xl px-4 py-3 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="text-xs text-[#71717a] font-mono">Daffa Rinali — ITS Informatics</span>
                </div>
              </div>

              {/* Floating tag — top right */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full border border-[#06b6d4]/30 bg-[#09090b]/90 backdrop-blur-sm text-[10px] text-[#06b6d4] font-mono opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                Full-Stack / AI
              </div>

              {/* Floating stat badge — bottom right */}
              <div className="absolute -bottom-3 -right-3 px-3 py-2 rounded-xl border border-[#27272a] bg-[#18181b]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                <div className="text-xs text-[#06b6d4] font-syne font-bold">Class of 2027</div>
                <div className="text-[10px] text-[#52525b]">Informatics @ ITS</div>
              </div>

              {/* Decorative code lines — left side */}
              <div className="absolute -left-10 top-1/4 space-y-1 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                <div className="h-px w-6 bg-[#06b6d4]/50" />
                <div className="h-px w-4 bg-[#06b6d4]/30" />
                <div className="h-px w-8 bg-[#06b6d4]/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}