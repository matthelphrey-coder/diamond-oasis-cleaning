"use client";

import { useState } from "react";
import EstimateModal from "./EstimateModal";

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function CtaButton({ children, className = "" }: CtaButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </button>

      <EstimateModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
