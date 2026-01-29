"use client";

export default function InlineEstimateForm() {
  return (
    <div
      className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
      style={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
      }}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/jjqVGQG6yKAgawF12waP"
        style={{
          width: "100%",
          height: "650px",
          border: "none",
          display: "block",
        }}
        id="hero-inline-jjqVGQG6yKAgawF12waP"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Contact Information"
        data-form-id="jjqVGQG6yKAgawF12waP"
        title="Contact Information Form"
      />
    </div>
  );
}
