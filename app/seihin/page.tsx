import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EstimateCta } from "@/components/estimate-cta"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimate } from "@/components/scroll-animate"
import {
  Heart,
  HandHeart,
  Recycle,
  ShieldCheck,
  Phone,
  BadgeCheck,
  Lock,
  Zap,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/lib/images"

export const metadata: Metadata = {
  title: "遺品整理・生前整理事業",
  description: "大切な方の想い出に寄り添い、真心を込めて整理いたします。遺品整理士・生前整理アドバイザーが在籍。古物商免許を活かした貴金属・時計の買取も対応可能です。",
  keywords: [
    "遺品整理",
    "生前整理",
    "住環境整理",
    "遺品整理士",
    "生前整理アドバイザー",
    "古物商",
    "大阪",
    "関西",
    "遺品買取",
    "貴金属買取",
  ],
  openGraph: {
    title: "遺品整理・生前整理事業 | 株式会社GAMI | 遺品整理士在籍・買取対応",
    description: "大切な方の想い出に寄り添い、真心を込めて整理いたします。遺品整理士・生前整理アドバイザーが在籍。古物商免許を活かした貴金属・時計の買取も対応可能です。",
    url: '/seihin',
    type: "website",
  },
  alternates: {
    canonical: '/seihin',
  },
}

function renderDescription(
  text: string,
  noBreakPhrases?: string[]
): React.ReactNode {
  if (!noBreakPhrases?.length) return text;
  const phrase = noBreakPhrases[0];
  if (!text.includes(phrase)) {
    return renderDescription(text, noBreakPhrases.slice(1));
  }
  const [before, after] = text.split(phrase);
  return (
    <>
      {renderDescription(before, noBreakPhrases.slice(1))}
      <span className="whitespace-nowrap">{phrase}</span>
      {renderDescription(after, noBreakPhrases.slice(1))}
    </>
  );
}

const values = [
  {
    icon: Heart,
    title: "遺品整理 / 生前整理",
    description: "ご遺族やご本人の気持ちを最優先に。一つひとつの品物に込められた想い出を大切にしながら、遺品整理・生前整理を丁寧に行います。",
  },
  {
    icon: HandHeart,
    title: "片付け・仕分け・整理 全般",
    description:
      "経験豊富なスタッフが、礼節を持って作業にあたります。残すもの・供養するもの・お譲りするものを丁寧に整理いたします。",
    noBreakPhrases: ["残すもの・供養するもの・お譲りするもの"],
  },
  {
    icon: Recycle,
    title: "貴金属・時計等 買取対応",
    description: "古物商免許を活かし、貴金属・時計などのお品物を一点一点丁寧に査定。適正な価格での引き取りにより、ご家族の費用負担を軽減します。",
  },
  {
    icon: ShieldCheck,
    title: "資格保有の安心対応",
    description: "遺品整理士・生前整理アドバイザー・古物商許可を保有。法令を遵守した適正な作業をお約束します。",
  },
]

const flow = [
  { step: "01", title: "ご相談・お見積り", description: "お電話・LINE・フォームからご連絡ください。現地見積りは無料です。" },
  { step: "02", title: "作業日の調整", description: "ご都合に合わせて作業日を決定。急ぎのご依頼にも可能な限り対応します。" },
  {
    step: "03",
    title: "整理・片付け作業",
    description:
      "丁寧に整理を行います。残すもの・供養するもの・お譲りするものを分類します。",
    noBreakPhrases: ["残すもの・供養するもの・お譲りするもの"],
  },
  { step: "04", title: "完了・ご報告", description: "作業完了後、清掃まで行いご報告。必要に応じて供養の手配もいたします。" },
]

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamigami.net'

const seihinServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "遺品整理・生前整理",
  provider: {
    "@type": "Organization",
    name: "株式会社GAMI",
    url: siteUrl,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "34.6937",
      longitude: "135.5023",
    },
    geoRadius: {
      "@type": "Distance",
      name: "関西・中国・四国・九州エリア",
    },
  },
  description: "大切な方の想い出に、心を込めて寄り添います。遺品整理・生前整理、片付け・仕分け・整理全般、貴金属・時計等の買取対応。",
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
      name: "遺品整理・生前整理事業",
      item: `${siteUrl}/seihin`,
    },
  ],
}

export default function SeihinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seihinServiceSchema) }}
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
            src={IMAGES.heroSeihin}
            alt="遺品整理"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:pt-32">
            <div className="max-w-2xl [text-shadow:0_1px_2px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.4)]">
              <p className="font-mono text-lg font-medium uppercase tracking-[0.3em] text-white sm:text-xl md:text-2xl">
                Estate Organization
              </p>
              <h1 className="mt-3 font-serif text-xl font-bold tracking-wider text-white sm:mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
                遺品整理・生前整理
              </h1>
              <p className="mt-3 max-w-xl text-pretty text-xs leading-relaxed tracking-wide text-white sm:mt-4 sm:text-sm md:text-base">
                大切な方の想い出に、心を込めて寄り添います。整理・片付けから供養の手配まで、安心してお任せください。
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-gradient py-16 px-4 sm:px-6 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="サービス内容"
                title="遺品整理 / 生前整理"
                catchCopy="大切な方の想い出に、心を込めて寄り添います。整理・片付けから供養の手配まで、安心してお任せください。"
                className="mb-16"
              />
            </ScrollAnimate>
            <div className="grid gap-8 sm:grid-cols-2">
              {values.map((v) => (
                <ScrollAnimate key={v.title} className="h-full">
                  <div className="tech-card flex h-full flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/10">
                      <v.icon className="h-5 w-5 text-navy" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-medium tracking-wider text-foreground">
                        {v.title}
                      </h3>
                      <p className="mt-1 flex-grow text-sm leading-relaxed tracking-wide text-muted-foreground">
                        {renderDescription(v.description, "noBreakPhrases" in v ? v.noBreakPhrases : undefined)}
                      </p>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        {/* 古物商許可・資格 */}
        <section className="border-t border-border bg-gradient-to-b from-navy/5 to-transparent py-20 px-4 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <ScrollAnimate>
              <div className="license-frame mb-10 rounded-xl p-6 text-center sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-navy">
                  古物商許可
                </p>
                <p className="mt-3 font-mono text-base font-semibold tracking-wider text-navy sm:text-lg">
                  大阪府公安委員会許可 第62229R076690号
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  遺品整理士 / 生前整理アドバイザー
                </p>
              </div>
            </ScrollAnimate>
            <ScrollAnimate className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
              <div className="flex items-center gap-2 rounded-full border border-navy/30 bg-white px-3 py-2 shadow-sm sm:px-4">
                <BadgeCheck className="h-4 w-4 text-navy" />
                <span className="text-xs text-foreground sm:text-sm">見積もり無料</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-navy/30 bg-white px-3 py-2 shadow-sm sm:px-4">
                <Lock className="h-4 w-4 text-navy" />
                <span className="text-xs text-foreground sm:text-sm">秘密厳守</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-navy/30 bg-white px-3 py-2 shadow-sm sm:px-4">
                <Zap className="h-4 w-4 text-navy" />
                <span className="text-xs text-foreground sm:text-sm">即日対応可</span>
              </div>
            </ScrollAnimate>
            <ScrollAnimate className="mt-10">
              <EstimateCta variant="compact" />
            </ScrollAnimate>
          </div>
        </section>

        {/* Flow */}
        <section className="border-t border-border bg-secondary/50 py-24 px-4 sm:px-6 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <ScrollAnimate>
              <SectionHeading
                sub="ご利用手順"
                title="ご利用の流れ"
                catchCopy=""
                className="mb-16"
              />
            </ScrollAnimate>
            <div className="flex flex-col gap-8">
              {flow.map((f) => (
                <div key={f.step} className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                  <span className="shrink-0 font-serif text-3xl tracking-wider aurora-gradient-text">
                    {f.step}
                  </span>
                  <div>
                    <h3 className="font-medium tracking-wider text-foreground">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-8 tracking-wide text-muted-foreground">
                      {renderDescription(f.description, "noBreakPhrases" in f ? f.noBreakPhrases : undefined)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-navy">
              ※不用品回収や買取のみでの対応もいたします。
            </p>
          </div>
        </section>

        {/* Service Area */}
        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
          <ScrollAnimate>
            <SectionHeading
              sub="対応エリア"
              title="対応エリア"
              catchCopy=""
              className="mb-10"
            />
          </ScrollAnimate>
          <ScrollAnimate>
            <div className="mx-auto max-w-lg">
              <div className="relative overflow-hidden rounded-2xl shadow-glass">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/map-service-area.png"
                  alt="対応エリア: 関西・中国・四国・九州（赤色）が対応可能"
                  width={1200}
                  height={1000}
                  className="h-auto w-full object-contain"
                  style={{ filter: "drop-shadow(0 0 24px rgba(59,130,246,0.15))" }}
                />
              </div>
            </div>
            <div className="mt-8 space-y-2 text-center text-sm leading-relaxed tracking-wide text-foreground">
              <p>対応可能（九州・中国・四国・関西エリア）</p>
              <p>順次拡大予定（中部・関東エリア）</p>
              <p className="text-muted-foreground">※赤色のエリアが対応可能地域です。</p>
            </div>
          </ScrollAnimate>
        </section>

        {/* Credentials inline - 古物商許可を枠で囲む */}
        <section className="border-t border-border bg-secondary/50 py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-2xl">
            <p className="text-center text-xs font-medium tracking-[0.2em] text-muted-foreground">
              資格・許可
            </p>
            <div className="license-frame mt-4 rounded-xl p-6 text-center">
              <p className="font-mono text-sm font-semibold tracking-wider text-navy sm:text-base">
                古物商 大阪府公安委員会許可 第62229R076690号
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                遺品整理士 / 生前整理アドバイザー
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#2d3e5e] px-6 py-14 text-center text-white">
          <h2 className="mb-4.5 text-[26px] font-medium tracking-[0.08em]">
            お見積り・ご相談
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[14.5px] leading-[1.9] text-[#d0d9e8]">
            <strong className="font-bold text-white" style={{ borderBottom: '1px solid rgba(255,255,255,0.6)', paddingBottom: '1px' }}>
              物流運送事業・ヘッドスパ事業・遺品整理・生前整理事業
            </strong>。どの事業についても、<br />
            まずはお気軽にお問い合わせください。無料でお見積りいたします。
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
