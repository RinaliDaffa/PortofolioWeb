"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const certGroups = [
  {
    issuer: "Komdigi — AITF",
    desc: "Digital Talent Scholarship by Indonesia's Ministry of Communication and Digital Affairs",
    color: "#06b6d4",
    certs: [
      {
        name: "Associate Data Scientist",
        issuer: "Komdigi — AITF",
        date: "18 May – 14 Jun 2026",
        hours: "16 JP",
        verifyId: "#21212599840",
        file: "/certifications/Sertifikat_DAFFA RINALI_Associate Data Scientist Certification - AITF.pdf",
      },
      {
        name: "Rekayasa Aplikasi LLM Terapan",
        issuer: "Komdigi — AITF",
        date: "19 Mar – 1 Apr 2026",
        hours: "57 JP",
        verifyId: "#21212228840",
        file: "/certifications/Sertifikat_DAFFA RINALI_Rekayasa Aplikasi LLM Terapan - AITF.pdf",
      },
      {
        name: "Operasionalisasi LLM",
        issuer: "Komdigi — AITF",
        date: "14 – 15 Apr 2026",
        hours: "30 JP",
        verifyId: "#21212335840",
        file: "/certifications/Sertifikat_DAFFA RINALI_Operasionalisasi LLM - AITF.pdf",
      },
      {
        name: "LLM: Dari Teori Hingga Kode",
        issuer: "Komdigi — AITF",
        date: "11 – 16 Mar 2026",
        hours: "21 JP",
        verifyId: "#21212220840",
        file: "/certifications/Sertifikat_DAFFA RINALI_LLM_ Dari Teori Hingga Kode - AITF.pdf",
      },
      {
        name: "Fundamental of Deep Learning",
        issuer: "Komdigi — AITF",
        date: "14 – 19 Feb 2026",
        hours: "44 JP",
        verifyId: "#21212007840",
        file: "/certifications/Sertifikat_DAFFA RINALI_Fundamental Of Deep Learning.pdf",
      },
      {
        name: "Intermediate Deep Learning",
        issuer: "Komdigi — AITF",
        date: "22 – 26 Feb 2026",
        hours: "22 JP",
        verifyId: "#21212047840",
        file: "/certifications/Sertifikat_DAFFA RINALI_Intermediate Deep Learning.pdf",
      },
      {
        name: "Mastery in Deep Learning",
        issuer: "Komdigi — AITF",
        date: "1 – 5 Mar 2026",
        hours: "27 JP",
        verifyId: "#21212108840",
        file: "/certifications/Sertifikat_DAFFA RINALI_Mastery In Deep Learning.pdf",
      },
    ],
  },
  {
    issuer: "AWS Academy",
    desc: "Cloud security curriculum by Amazon Web Services",
    color: "#f59e0b",
    certs: [
      {
        name: "Cloud Security Foundations — Training Badge",
        issuer: "AWS Academy",
        date: "Dec 2025",
        hours: "20 hours",
        verifyId: "Badge20251202-32-nfng9c",
        file: "/certifications/AWS_Academy_Graduate___Cloud_Security_Foundations___Training_Badge_Badge20251202-32-nfng9c.pdf",
      },
      {
        name: "Cloud Security Foundations — Grade Report",
        issuer: "AWS Academy",
        date: "Dec 2025",
        hours: "1117.5 / 1200 (93.13%)",
        verifyId: "[137854]",
        file: "/certifications/Grades for daffa.rinali@gmail.com_ AWS Academy Cloud Security Foundations [137854].pdf",
      },
    ],
  },
  {
    issuer: "Palo Alto Networks",
    desc: "Cybersecurity courses via Palo Alto Networks Academy",
    color: "#ef4444",
    certs: [
      {
        name: "Cybersecurity Foundation",
        issuer: "Palo Alto Networks",
        date: "Dec 15, 2025",
        hours: "",
        verifyId: "#2fvWnUEJni",
        file: "/certifications/Cybersecurity_Foundation_Student_Certificate.pdf",
      },
      {
        name: "Security Operations Fundamentals",
        issuer: "Palo Alto Networks",
        date: "Dec 19, 2025",
        hours: "",
        verifyId: "#IiKmNYaDfO",
        file: "/certifications/Security_Operations_Fundamentals_Student_Certificate.pdf",
      },
    ],
  },
  {
    issuer: "Coursera",
    desc: "Online courses from UC Davis, Peking University, and IBM",
    color: "#8b5cf6",
    certs: [
      {
        name: "Introduction to Cloud Computing",
        issuer: "IBM — Coursera",
        date: "Nov 20, 2025",
        hours: "",
        verifyId: "FZ5016XXDEK9",
        file: "/certifications/Coursera FZ5016XXDEK9 Introduction to Cloud Computing.pdf",
      },
      {
        name: "Introduction to Software Engineering",
        issuer: "IBM — Coursera",
        date: "Nov 15, 2025",
        hours: "",
        verifyId: "TCX8OGPBQTGW",
        file: "/certifications/Coursera TCX8OGPBQTGW Introduction to Software Engineering.pdf",
      },
      {
        name: "Chinese for Beginners",
        issuer: "Peking University — Coursera",
        date: "Nov 19, 2023",
        hours: "",
        verifyId: "ZQW9E37H96R7",
        file: "/certifications/Coursera ZQW9E37H96R7 Chinese For Beginners.pdf",
      },
      {
        name: "SQL for Data Science",
        issuer: "UC Davis — Coursera",
        date: "Oct 29, 2023",
        hours: "",
        verifyId: "WFS8ZPE9U4BL",
        file: "/certifications/Coursera WFS8ZPE9U4BL SQL For Data Science UCDavis.pdf",
      },
    ],
  },
];

type Cert = (typeof certGroups)[0]["certs"][0];

function CertModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-4xl bg-[#18181b]/80 backdrop-blur-md rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h3 className="font-syne font-semibold text-[#fafafa]">{cert.name}</h3>
            <p className="text-xs text-[#52525b] mt-0.5">{cert.issuer}</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#06b6d4] hover:text-[#22d3ee] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg text-[#52525b] hover:text-[#fafafa] hover:bg-[#18181b] transition-colors flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="h-[75vh] bg-[#18181b]/60">
          <iframe
            src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=1`}
            className="w-full h-full"
            title={cert.name}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

  return (
    <>
      <section id="certifications" className="py-24 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/4 w-96 h-64 bg-[#06b6d4]/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs font-medium text-[#06b6d4] uppercase tracking-[0.2em] mb-4">
              Credentials
            </p>
            <h2 className="font-syne font-bold text-4xl md:text-5xl">
              Certifications
            </h2>
          </motion.div>

          <div className="space-y-16">
            {certGroups.map((group, gi) => (
              <motion.div
                key={group.issuer}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                {/* Issuer header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: group.color }}
                  />
                  <div>
                    <h3
                      className="font-syne font-bold text-lg"
                      style={{ color: group.color }}
                    >
                      {group.issuer}
                    </h3>
                    <p className="text-xs text-[#52525b]">{group.desc}</p>
                  </div>
                </div>

                {/* Flowing cert rows */}
                <div className="space-y-1">
                  {group.certs.map((cert, ci) => (
                    <motion.button
                      key={cert.name}
                      onClick={() => setSelectedCert(cert)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: gi * 0.1 + ci * 0.05 }}
                      className="w-full text-left group flex items-center gap-4 py-3 px-2 hover:bg-[#18181b]/30 rounded-lg transition-all duration-200"
                    >
                      {/* Icon dot */}
                      <div
                        className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center"
                        style={{ backgroundColor: `${group.color}12` }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: group.color }}
                        />
                      </div>

                      {/* Name + date */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-syne font-medium text-[#a1a1aa] group-hover:text-[#fafafa] transition-colors truncate">
                          {cert.name}
                        </p>
                        <p className="text-xs text-[#3f3f46]">{cert.date}</p>
                      </div>

                      {/* Meta */}
                      <div className="flex items-center gap-2 shrink-0">
                        {cert.hours && (
                          <span
                            className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                            style={{
                              backgroundColor: `${group.color}12`,
                              color: group.color,
                            }}
                          >
                            {cert.hours}
                          </span>
                        )}
                        <span className="text-[10px] text-[#3f3f46] font-mono hidden sm:block">
                          {cert.verifyId}
                        </span>
                        <svg
                          className="w-4 h-4 text-[#3f3f46] group-hover:text-[#52525b] transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </>
  );
}
