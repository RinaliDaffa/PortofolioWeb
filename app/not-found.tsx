"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#06b6d4]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative text-center">
        {/* Glitch 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="font-syne font-extrabold text-[120px] md:text-[180px] leading-none text-[#fafafa] relative inline-block">
            <motion.span
              animate={{
                x: [0, -4, 4, -2, 0],
                opacity: [1, 0.8, 1, 0.9, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="absolute inset-0 text-[#06b6d4]/20"
              style={{ clipPath: "inset(20% 0 50% 0)" }}
 aria-hidden
            >
              404
            </motion.span>
            404
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs font-medium text-[#06b6d4] uppercase tracking-[0.2em] mb-4"
        >
          Error
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-syne font-bold text-4xl md:text-5xl text-[#fafafa] mb-4"
        >
          Page not found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#71717a] mb-10 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#06b6d4] text-black font-semibold text-sm hover:bg-[#22d3ee] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-[#27272a] text-sm text-[#fafafa] hover:border-[#3f3f46] hover:bg-[#18181b]/60 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
