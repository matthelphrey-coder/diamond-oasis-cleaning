"use client";

export default function ContactForm() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
      <h2 className="text-2xl font-heading font-bold text-primary mb-4 text-center">
        Request a Free Estimate
      </h2>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/jjqVGQG6yKAgawF12waP"
        className="ghl-form-iframe"
        style={{
          width: "100%",
          height: "700px",
          border: "none",
          display: "block",
          overflow: "hidden",
        }}
        scrolling="no"
        id="contact-jjqVGQG6yKAgawF12waP"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Contact Information"
        data-form-id="jjqVGQG6yKAgawF12waP"
        title="Contact Form"
      />
    </div>
  );
}
