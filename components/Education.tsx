"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = {
  institution: "Institut Teknologi Sepuluh Nopember (ITS)",
  degree: "Informatics Engineering",
  major: "Informatics Engineering",
  period: "2023 — Present",
  gpa: "GPA 3.68 / 4.00",
  courses: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Database Systems",
    "Software Engineering",
    "Computer Networks",
    "Operating Systems",
    "Artificial Intelligence",
    "Statistics & Probability",
  ],
  achievements: [
    "AI Engineer Intern at PT Salam Pacific Indonesia Lines (SPIL)",
    "Undergraduate researcher on LoRA & MoE adapters under Prof. Ary M. Shiddiqi",
    "Selected for AITF — national AI talent program by Komdigi",
    "Head of Aspiration Bureau, HMTC ITS",
    "IRIS Robotic Team — OpenCV & ROS",
  ],
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 bg-[#09090b] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-medium text-[#06b6d4] uppercase tracking-[0.2em] mb-4">
            Background
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl">
            Education
          </h2>
        </motion.div>

        <div className="max-w-2xl">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="font-syne font-bold text-xl text-[#fafafa]">
                {education.institution}
              </h3>
              <p className="text-[#06b6d4] font-medium mt-0.5">{education.degree}</p>
              <p className="text-[#71717a] text-sm mt-0.5">{education.major}</p>
              <div className="flex items-center gap-3 mt-2 flex-wrap">
                <span className="text-xs text-[#52525b]">{education.period}</span>
                <span className="px-2.5 py-1 rounded-full text-xs text-[#06b6d4] bg-[#06b6d4]/10 border border-[#06b6d4]/20">{education.gpa}</span>
                              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <p className="text-xs font-medium text-[#3f3f46] uppercase tracking-[0.15em] mb-3">
                Key Achievements
              </p>
              <div className="space-y-2">
                {education.achievements.map((a) => (
                  <div key={a} className="flex items-start gap-2 text-sm text-[#71717a]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] mt-2 shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xs font-medium text-[#3f3f46] uppercase tracking-[0.15em] mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {education.courses.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 rounded-full text-xs text-[#71717a] bg-[#18181b] border border-[#27272a]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}