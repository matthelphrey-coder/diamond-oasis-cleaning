"use client";

export default function InlineEstimateForm() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 min-h-[500px]">
      <h2 className="text-xl font-heading font-bold text-primary mb-4">
        Get a FREE Estimate
      </h2>
      <div className="min-h-[450px]">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/jjqVGQG6yKAgawF12waP"
          style={{
            width: "100%",
            height: "450px",
            border: "none",
            borderRadius: "3px",
          }}
          id="hero-inline-jjqVGQG6yKAgawF12waP"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-activation-type="alwaysActivated"
          data-deactivation-type="neverDeactivate"
          data-form-name="Contact Information"
          data-height="450"
          data-form-id="jjqVGQG6yKAgawF12waP"
          title="Contact Information Form"
        />
      </div>
    </div>
  );
}
