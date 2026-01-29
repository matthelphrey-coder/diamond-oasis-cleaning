"use client";

import { useState } from "react";
import EstimateModal from "./EstimateModal";

export default function StickyCtaButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary-light text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
        aria-label="Get Free Estimate"
      >
        {/* Clipboard/Form Icon */}
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        Get FREE Estimate
      </button>

      <EstimateModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
