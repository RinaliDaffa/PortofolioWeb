"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090b]">
      <div className="text-center px-6">
        <div className="w-16 h-16 rounded-full bg-[#ef4444]/10 text-[#ef4444] flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="font-syne font-bold text-2xl text-[#fafafa] mb-2">
          Something went wrong
        </h1>
        <p className="text-sm text-[#71717a] mb-6 max-w-sm">
          An unexpected error occurred. Try refreshing the page.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#06b6d4] text-black font-semibold text-sm hover:bg-[#22d3ee] transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}