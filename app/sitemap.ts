import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.gamigami.net"
  const languageAlternates = { ja: `${baseUrl}/`, en: `${baseUrl}/international`, "x-default": `${baseUrl}/` }
  return [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1, alternates: { languages: languageAlternates } },
    { url: `${baseUrl}/company`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/headspa-franchise`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/franchise-contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/international`, changeFrequency: "weekly", priority: 0.8, alternates: { languages: languageAlternates } },
    { url: `${baseUrl}/international/contact`, changeFrequency: "yearly", priority: 0.5 },
  ]
}
