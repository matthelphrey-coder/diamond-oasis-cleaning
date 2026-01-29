import { MetadataRoute } from "next";
import locations from "@/data/locations.json";

const BASE_URL = "https://diamondoasiscleaning.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core pages (priority 1.0-0.9)
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Service pages (priority 0.8)
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/residential-cleaning`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/commercial-cleaning`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/deep-cleaning`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/move-in-move-out-cleaning`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/additional-services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // About section pages (priority 0.7)
  const aboutPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/why-choose-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/process`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/cleaning-tips`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faqs`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Location pages (priority 0.7-0.8)
  const locationHubPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/locations`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const locationDetailPages: MetadataRoute.Sitemap = locations.locations.map(
    (location) => ({
      url: `${BASE_URL}/locations/${location.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  // Utility pages (priority 0.3)
  const utilityPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/booking`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [
    ...corePages,
    ...servicePages,
    ...aboutPages,
    ...locationHubPage,
    ...locationDetailPages,
    ...utilityPages,
  ];
}
