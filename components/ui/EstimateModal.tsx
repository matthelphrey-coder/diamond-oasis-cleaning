"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[60]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
        <DialogPanel className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-auto shadow-2xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-background-alt rounded-full transition-colors z-10"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="p-6">
            <DialogTitle className="text-2xl font-heading font-bold text-primary mb-4">
              Get Your FREE Estimate
            </DialogTitle>

            {/* GHL Form Iframe */}
            <div className="min-h-[622px]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/jjqVGQG6yKAgawF12waP"
                style={{
                  width: "100%",
                  height: "622px",
                  border: "none",
                  borderRadius: "3px",
                }}
                id="inline-jjqVGQG6yKAgawF12waP"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Contact Information"
                data-height="622"
                data-form-id="jjqVGQG6yKAgawF12waP"
                title="Contact Information Form"
              />
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
