interface SchemaMarkupProps {
  schema: object;
}

/**
 * Injects JSON-LD structured data into the page
 * Sanitizes output to prevent XSS attacks
 */
export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  // Sanitize by replacing < with unicode escape to prevent XSS
  const safeJsonLd = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd }}
    />
  );
}
