import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroVideoSlider } from "@/components/hero-video-slider"
import { BusinessCard } from "@/components/business-card"
import { CredentialsSection } from "@/components/credentials-section"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimate } from "@/components/scroll-animate"
import { IMAGES } from "@/lib/images"
import Link from "next/link"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamigami.net'

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社GAMI",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+81-6-6115-9935",
    contactType: "customer service",
    email: "f_fuchigami@gamigami.email",
    areaServed: "JP",
    availableLanguage: "Japanese",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "大日町1-8-18",
    addressLocality: "守口市",
    addressRegion: "大阪府",
    postalCode: "570-0003",
    addressCountry: "JP",
  },
  sameAs: [],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "株式会社GAMI",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/company#contact`,
    },
    "query-input": "required name=search_term_string",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#business`,
  name: "株式会社GAMI",
  image: `${siteUrl}/images/logo.png`,
  url: siteUrl,
  telephone: "+81-6-6115-9935",
  email: "f_fuchigami@gamigami.email",
  address: {
    "@type": "PostalAddress",
    streetAddress: "大日町1-8-18",
    addressLocality: "守口市",
    addressRegion: "大阪府",
    postalCode: "570-0003",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.6937,
    longitude: 135.5023,
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "大阪",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "サービス",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "物流運送事業",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "利用運送・軽貨物運送",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "物流業務",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "物流コンサルティング",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "ヘッドスパ事業",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ヘッドスパ専門店運営",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ヘッドスパスクール",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "整理買取事業",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "整理",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "買取",
            },
          },
        ],
      },
    ],
  },
}

const businesses = [
  {
    title: "物流運送事業",
    subtitle: "物流",
    description: "",
    descriptionItems: [
      "物流業務（入出庫、物流加工・保管等）",
      "物流コンサルティング",
      "利用運送 / 軽貨物運送",
      "EC支援 / ビジネスマッチング",
      "オリジナル梱包資材 企画・製作",
    ],
    href: "/logistics",
    imageSrc: IMAGES.cardLogistics,
    accentColor: "logistics" as const,
  },
  {
    title: "ヘッドスパ事業",
    subtitle: "ヘッドスパ",
    description: "",
    descriptionItems: [
      "ヘッドスパ専門店運営（2025現在 全国3店舗）",
      "独立開業支援 / フランチャイズ支援",
      "ヘッドスパスクール",
      "ストアコンサルティング",
      "出張サービス",
    ],
    href: "/school",
    imageSrc: IMAGES.cardSchool,
    accentColor: "spa" as const,
  },
  {
    title: "整理買取事業",
    subtitle: "整理・買取",
    description: "",
    descriptionItems: [
      "整理・買取",
      "片付け・仕分け・整理 全般",
      "貴金属・時計等 買取対応",
      "資格保有の安心対応",
    ],
    href: "/seihin",
    imageSrc: IMAGES.cardSeihin,
    accentColor: "antiques" as const,
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <HeroVideoSlider />

        {/* Business Cards */}
        <section className="section-gradient py-12 px-4 sm:px-6 sm:py-24 lg:py-40">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="事業紹介"
                title="事業領域"
                catchCopy="物流運送事業・ヘッドスパ事業・整理買取事業。"
                className="mb-16"
              />
            </ScrollAnimate>
            <div className="grid gap-10 md:grid-cols-3">
              {businesses.map((biz) => (
                <BusinessCard key={biz.href} {...biz} />
              ))}
            </div>
          </div>
        </section>

        <CredentialsSection />

        {/* CTA */}
        <section className="bg-[#2d3e5e] px-6 py-14 text-center text-white">
          <h2 className="mb-4.5 text-[26px] font-medium tracking-[0.08em]">
            お見積り・ご相談
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[14.5px] leading-[1.9] text-[#d0d9e8]">
            物流業務、利用運送、EC支援など、まずはお気軽にお問い合わせください。無料でお見積りいたします。
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link
              href="/company#contact"
              className="inline-flex items-center gap-2 rounded-[50px] border-[1.5px] border-white/65 bg-transparent px-7 py-3.5 text-sm font-normal text-white transition-all hover:bg-white/15 hover:border-white"
            >
              お見積り・ご相談
            </Link>
            <a
              href="tel:0661159935"
              className="inline-flex items-center gap-2 rounded-[50px] border-[1.5px] border-white/65 bg-transparent px-7 py-3.5 text-sm font-normal text-white transition-all hover:bg-white/15 hover:border-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.09 4.18 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 17z"/>
              </svg>
              06-6115-9935
            </a>
            <a
              href="https://lin.ee/3QGIdCY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[50px] border-[1.5px] border-white/65 bg-transparent px-7 py-3.5 text-sm font-normal text-white transition-all hover:bg-white/15 hover:border-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              LINE相談
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
