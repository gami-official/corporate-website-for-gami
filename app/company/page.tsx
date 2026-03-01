import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CredentialsSection } from "@/components/credentials-section"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "会社概要",
  description: "株式会社GAMIの会社概要・お問い合わせ。物流運送事業、ヘッドスパ事業、整理買取事業を展開。",
  keywords: [
    "株式会社GAMI",
    "会社概要",
    "お問い合わせ",
    "企業情報",
    "大阪",
  ],
  openGraph: {
    title: "会社概要 | 株式会社GAMI",
    description: "株式会社GAMIの会社概要・お問い合わせ。物流運送事業、ヘッドスパ事業、整理買取事業を展開。",
    url: '/company',
    type: "website",
  },
  alternates: {
    canonical: '/company',
  },
}

const companyInfo = [
  { label: "会社名", value: "株式会社GAMI" },
  { label: "代表取締役", value: "淵上 和博" },
  { label: "設立", value: "2025年6月17日" },
  {
    label: "事業内容",
    value: "物流運送事業、ヘッドスパ事業、整理買取事業",
  },
  { label: "メールアドレス", value: "f_fuchigami@gamigami.email" },
  { label: "TEL", value: "06-6115-9935" },
  { label: "FAX", value: "06-6115-9936" },
  { label: "古物商許可", value: "大阪府公安委員会許可 第62229R076690号" },
  {
    label: "化粧品製造業許可",
    value: "認証倉庫 許可番号 27CZ201072",
  },
  {
    label: "インボイス登録番号",
    value: "T9120001277055",
  },
  { label: "所在地（大阪本社）", value: "〒570-0003 大阪府守口市大日町1-8-18" },
  { label: "所在地（福岡支社）", value: "〒819-0014 福岡県福岡市西区豊浜2-20-20-2" },
]

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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "会社概要",
      item: `${siteUrl}/company`,
    },
  ],
}

export default function CompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-16 pt-24 sm:py-20 sm:pt-32">
          <div className="absolute inset-0 aurora-gradient opacity-90" />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-medium tracking-[0.2em] text-white/70">
              会社概要
            </p>
            <h1 className="mt-3 font-serif text-2xl tracking-wider text-balance text-white sm:text-3xl md:text-4xl lg:text-5xl">
              会社概要 | 株式会社GAMI
            </h1>
          </div>
        </section>

        {/* Company Info Table */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
          <SectionHeading
            sub="企業情報"
            title="企業情報"
            catchCopy="株式会社GAMIの基本情報です。ご不明点はお気軽にお問い合わせください。"
            className="mb-16"
          />
          <div className="divide-y divide-border rounded-2xl border border-border/60 bg-card p-2 shadow-glass">
            {companyInfo.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:gap-8 sm:px-6 sm:py-5"
              >
                <dt className="w-full shrink-0 text-xs font-medium text-muted-foreground sm:w-40 sm:text-sm">
                  {row.label}
                </dt>
                <dd className="text-sm leading-relaxed tracking-wide text-foreground sm:leading-8">
                  {row.value}
                </dd>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="border-t border-border bg-secondary/50 py-16 px-4 sm:px-6 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              sub="ミッション"
              title="繋ぐ。癒す。想う。"
              catchCopy={"物流運送事業・ヘッドスパ事業・整理買取事業。\n３つの事業で、暮らしと事業に安心と価値を届けます。"}
              className="mb-10"
            />
            <p className="text-sm leading-loose tracking-readable text-muted-foreground">
              物流運送事業・ヘッドスパ事業・整理買取事業の３つの事業を通じて、人と人、モノと想いを繋ぎます。
              <br className="sm:hidden" />
              お客様の暮らしと事業に寄り添い、安心と価値を届けることが私たちの使命です。
            </p>
          </div>
        </section>

        {/* Credentials */}
        <CredentialsSection />

        {/* Contact Form */}
        <section id="contact" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:py-32">
          <SectionHeading
            sub="お問い合わせ"
            title="お問い合わせ"
            catchCopy="ご質問・ご相談はお気軽にどうぞ。担当者より折り返しご連絡します。"
            className="mb-16"
          />
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  )
}
