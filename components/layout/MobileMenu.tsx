"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { getFlatNavigation } from "@/lib/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const flatNav = getFlatNavigation();

  return (
    <>
      {/* Hamburger button - visible on mobile only */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-text-primary hover:text-primary transition-colors"
        aria-label="Open menu"
      >
        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* Slide-out menu dialog */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 md:hidden"
      >
        {/* Backdrop */}
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/30 transition-opacity duration-300 ease-out data-[closed]:opacity-0"
        />

        {/* Menu panel */}
        <div className="fixed inset-0 z-50 flex justify-end">
          <DialogPanel
            transition
            className="w-full max-w-xs bg-white shadow-xl transform transition duration-300 ease-out data-[closed]:translate-x-full"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <span className="font-heading font-semibold text-primary">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close menu"
              >
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="px-4 py-4">
              <ul className="space-y-1">
                {flatNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-text-primary hover:text-primary hover:bg-background-alt rounded-md transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Get FREE Estimate button */}
            <div className="px-4 py-4 border-t border-gray-100 mt-auto">
              <button
                type="button"
                className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-6 rounded-lg transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  // Modal will be connected in Plan 02
                }}
              >
                Get FREE Estimate
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
