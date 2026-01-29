"use client";

interface GoogleMapEmbedProps {
  mapEmbed: string;
  locationName: string;
}

export default function GoogleMapEmbed({
  mapEmbed,
  locationName,
}: GoogleMapEmbedProps) {
  return (
    <div
      className="w-full h-[450px] rounded-lg overflow-hidden shadow-md"
      dangerouslySetInnerHTML={{ __html: mapEmbed }}
      aria-label={`Google Maps showing ${locationName} service area`}
    />
  );
}
