import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EstimateCta } from "@/components/estimate-cta"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimate } from "@/components/scroll-animate"
import {
  Sparkles,
  GraduationCap,
  Store,
  Briefcase,
  Car,
  ExternalLink,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/lib/images"

export const metadata: Metadata = {
  title: "ドライヘッドスパ事業（Y'u）",
  description:
    "完全予約制のプライベート空間で、極上の癒やしをご提供。日々の疲れをリセットし、心身ともに整えるドライヘッドスパ。",
  keywords: [
    "ヘッドスパ",
    "ヘッドスパスクール",
    "開業支援",
    "フランチャイズ",
    "ストアコンサルティング",
    "出張ヘッドスパ",
    "リラクゼーション",
    "大阪",
  ],
  openGraph: {
    title: "ドライヘッドスパ事業（Y'u） | 株式会社GAMI | 至福の癒やし",
    description:
      "完全予約制のプライベート空間で、極上の癒やしをご提供。日々の疲れをリセットし、心身ともに整えるドライヘッドスパ。",
    url: '/school',
    type: "website",
  },
  alternates: {
    canonical: '/school',
  },
}

const services = [
  {
    icon: Sparkles,
    title: "ヘッドスパ専門店運営（2026現在 全国4店舗）",
    description: "全国4拠点で直営店を展開。確かな技術力とホスピタリティでお客様の心と身体に安らぎをお届けします。",
  },
  {
    icon: Briefcase,
    title: "独立開業支援 / フランチャイズ支援",
    description: "開業までのロードマップ作成から、物件選定、資金計画、開業後の運営サポートまでトータルで支援。フランチャイズモデルもご用意しています。",
  },
  {
    icon: GraduationCap,
    title: "ヘッドスパスクール",
    description: "未経験から即戦力へ。理論と実践で、ヘッドスパのプロフェッショナルを育成します。",
  },
  {
    icon: Store,
    title: "ストアコンサルティング",
    description: "既存サロンの売上改善、メニュー構成、集客戦略、SNSマーケティングまで。店舗運営のあらゆる課題をコンサルティングします。",
  },
  {
    icon: Car,
    title: "出張サービス",
    description: "企業の福利厚生、イベント出展、高齢者施設への訪問など、出張でのヘッドスパにも対応しております。",
  },
]

const shopLinks = [
  { name: "本店", url: "https://www.yuheadspa.net/" },
  { name: "大阪店", url: "https://www.yuheadspa-osaka.net/" },
]

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamigami.net'

const headSpaServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ヘッドスパ",
  provider: {
    "@type": "Organization",
    name: "株式会社GAMI",
    url: siteUrl,
  },
  description:
    "ヘッドスパ専門店運営（2026現在 全国4店舗）、独立開業支援・フランチャイズ支援、ヘッドスパスクール、ストアコンサルティング、出張サービス。",
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
      name: "ヘッドスパ事業",
      item: `${siteUrl}/school`,
    },
  ],
}

export default function SchoolPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(headSpaServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-end">
          <Image
            src={IMAGES.heroSpa}
            alt="ヘッドスパ"
            fill
            className="object-cover scale-90 object-[50%_30%]"
            priority
            unoptimized
          />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:pt-32">
            <div className="max-w-2xl [text-shadow:0_1px_2px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.4)]">
              <p className="font-mono text-lg font-medium uppercase tracking-[0.3em] text-white sm:text-xl md:text-2xl">
                Head Spa
              </p>
              <h1 className="mt-3 font-serif text-xl font-bold tracking-wider text-white sm:mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
                ヘッドスパ事業
              </h1>
              <p className="mt-3 max-w-xl text-pretty text-xs leading-relaxed tracking-wide text-white sm:mt-4 sm:text-sm md:text-base">
                店舗運営・スクール・開業支援。ヘッドスパ事業をトータルプロデュースします。
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-gradient py-16 px-4 sm:px-6 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="事業紹介"
                title="ヘッドスパ事業"
                catchCopy="癒しの極みをプロデュース。"
                className="mb-16"
              />
            </ScrollAnimate>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <ScrollAnimate key={s.title} className="h-full">
                  <div className="tech-card flex h-full flex-col gap-4 rounded-2xl p-4 sm:p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <s.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-base font-medium tracking-wider text-foreground sm:text-lg">
                      {s.title}
                    </h3>
                    <p className="flex-grow text-sm leading-relaxed tracking-wide text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
            <div className="mt-12">
              <EstimateCta variant="compact" />
            </div>
          </div>
        </section>

        {/* Shop Links */}
        <section className="border-t border-border bg-secondary/50 py-24 px-4 sm:px-6 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <ScrollAnimate>
              <SectionHeading
                sub="店舗一覧"
                title="店舗情報"
                catchCopy=""
                className="mb-16"
              />
            </ScrollAnimate>
            <div className="grid gap-6 md:grid-cols-2">
              {shopLinks.map((shop) => (
                <a
                  key={shop.name}
                  href={shop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-card group flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                >
                  <div>
                    <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
                      店舗
                    </p>
                    <p className="mt-1 font-serif text-xl tracking-wider text-foreground">
                      {shop.name}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#2d3e5e] px-6 py-14 text-center text-white">
          <h2 className="mb-4.5 text-[26px] font-medium tracking-[0.08em]">
            ヘッドスパ事業 お問い合わせ
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[14.5px] leading-[1.9] text-[#d0d9e8]">
            店舗運営・スクール・開業支援・出張サービスなど、まずはお気軽にお問い合わせください。無料でご相談いたします。
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link
              href="/company#contact"
              className="inline-flex items-center gap-2 rounded-[50px] border-[1.5px] border-white/65 bg-transparent px-7 py-3.5 text-sm font-normal text-white transition-all hover:bg-white/15 hover:border-white"
            >
              無料でご相談
            </Link>
            <a
              href="tel:0661159935"
              className="inline-flex items-center gap-2 rounded-[50px] border-[1.5px] border-white/65 bg-transparent px-7 py-3.5 text-sm font-normal text-white transition-all hover:bg-white/15 hover:border-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.09 4.18 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 17z"/>
              </svg>
              電話でご相談
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
