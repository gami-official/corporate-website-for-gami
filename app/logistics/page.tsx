import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimate } from "@/components/scroll-animate"
import { EstimateCta } from "@/components/estimate-cta"
import {
  Warehouse,
  BarChart3,
  Globe,
  Truck,
  Package,
  Star,
  FlaskConical,
  Shirt,
  Gift,
  UtensilsCrossed,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/lib/images"

export const metadata: Metadata = {
  title: "物流運送事業",
  description:
    "瓶・ガラス容器の運送から化粧品製造業許可を活かした配送まで。細やかな気配りと確実な物流で、お客様のビジネスを支えます。",
  keywords: [
    "物流運送",
    "利用運送",
    "軽貨物運送",
    "物流業務",
    "物流コンサルティング",
    "EC支援",
    "ビジネスマッチング",
    "梱包資材",
    "倉庫",
    "物流代行",
    "大阪",
  ],
  openGraph: {
    title: "物流運送事業 | 株式会社GAMI | 化粧品製造業許可・軽貨物運送",
    description:
      "瓶・ガラス容器の運送から化粧品製造業許可を活かした配送まで。細やかな気配りと確実な物流で、お客様のビジネスを支えます。",
    url: '/logistics',
    type: "website",
  },
  alternates: {
    canonical: '/logistics',
  },
}

const services = [
  {
    icon: Warehouse,
    title: "物流業務（入出庫、物流加工・保管等）",
    description: "入庫・検品・保管・出庫から物流加工まで一元管理。正確な在庫データとスムーズなオペレーションでビジネスを支えます。",
  },
  {
    icon: BarChart3,
    title: "物流コンサルティング",
    description: "物流プロセスの現状分析から改善提案まで。コスト削減と効率化を実現するトータルコンサルティングをご提供します。",
  },
  {
    icon: Truck,
    title: "利用運送 / 軽貨物運送",
    description: "利用運送をメインに、軽貨物運送にも柔軟に対応。急な配送ニーズやスポット便にも迅速にお応えします。",
  },
  {
    icon: Globe,
    title: "EC支援 / ビジネスマッチング",
    description: "ECサイト立ち上げから運用、ビジネスマッチングまで。物流と連携したトータルサポートでお客様のビジネスを加速させます。",
  },
  {
    icon: Package,
    title: "オリジナル梱包資材 企画・製作",
    description: "お客様の商品に最適なオリジナル梱包資材を企画・製作いたします。高品質低価格をご提案いたします。",
  },
]

const trackRecords = [
  {
    icon: FlaskConical,
    number: "01",
    category: "美容・コスメ",
    title: "化粧品・美容商材",
    description: "「化粧品製造業許可」を活かした、製造・充填から発送までのワンストップ物流。",
    badge: "最重点",
  },
  {
    icon: Shirt,
    number: "02",
    category: "ライフスタイル・ギフト",
    title: "アパレル",
    description: "検品から丁寧な梱包まで、ブランド価値を守る高品質な物流管理。",
  },
  {
    icon: Gift,
    number: "03",
    category: "ライフスタイル・ギフト",
    title: "ふるさと納税関連",
    description: "迅速かつ正確なオペレーションが求められる、自治体・事業者様の発送代行。",
  },
  {
    icon: UtensilsCrossed,
    number: "04",
    category: "食品・グロッサリー",
    title: "瓶・ガラス容器製品",
    description: "徹底した衛生管理はもちろん、破損を防ぐ熟練の梱包技術と、重量物の取り扱いに特化したオペレーションで、高品質な状態のまま食卓へ繋ぎます。",
  },
]

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamigami.net'

const logisticsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "物流運送",
  provider: {
    "@type": "Organization",
    name: "株式会社GAMI",
    url: siteUrl,
  },
  description:
    "物流業務、物流コンサルティングを軸に、利用運送・軽貨物運送、EC支援・ビジネスマッチング、オリジナル梱包資材の企画・製作。",
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
      name: "物流運送事業",
      item: `${siteUrl}/logistics`,
    },
  ],
}

export default function LogisticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(logisticsServiceSchema) }}
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
            src={IMAGES.heroLogistics}
            alt="物流倉庫"
            fill
            className="object-cover scale-95"
            priority
            unoptimized
          />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:pt-32">
            <div className="max-w-2xl [text-shadow:0_1px_2px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.4)]">
              <p className="font-mono text-lg font-medium uppercase tracking-[0.3em] text-white sm:text-xl md:text-2xl">
                Logistics
              </p>
              <h1 className="mt-3 font-serif text-xl font-bold tracking-wider text-white sm:mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">物流</span>運送事業
              </h1>
              <p className="mt-3 max-w-xl text-pretty text-xs leading-relaxed tracking-wide text-white sm:mt-4 sm:text-sm md:text-base">
                物流業務を軸に、コンサルティング、EC支援、利用運送・軽貨物運送、オリジナル梱包資材の企画・製作まで。ワンストップの物流ソリューション。
              </p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="section-gradient py-16 px-4 sm:px-6 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="サービス内容"
                title="物流サービス"
                catchCopy="ワンストップの物流ソリューション。物流業務を軸に、コンサルティング、利用運送・軽貨物運送、EC支援、オリジナル梱包資材の企画・製作まで。"
                className="mb-16"
              />
            </ScrollAnimate>
            <div className="grid gap-8 sm:grid-cols-2">
              {services.map((s, index) => {
                const isLastOdd = index === services.length - 1 && services.length % 2 === 1
                return (
                  <ScrollAnimate
                    key={s.title}
                    className={isLastOdd ? "sm:col-span-2 sm:flex sm:justify-center" : "h-full"}
                  >
                    <div className={`tech-card flex h-full flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:p-6 ${isLastOdd ? "sm:max-w-md" : ""}`}>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <s.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-medium tracking-wider text-foreground">
                          {s.title}
                        </h3>
                        <p className="mt-1 flex-grow text-sm leading-relaxed tracking-wide text-muted-foreground">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimate>
                )
              })}
            </div>
            <div className="mt-12">
              <EstimateCta variant="compact" />
            </div>
          </div>
        </section>

        {/* Cosmetics Highlight Section */}
        <section className="py-16 px-4 sm:px-6 sm:py-24 lg:py-32">
          <ScrollAnimate>
            <div className="mx-auto max-w-4xl">
              <div className="relative overflow-hidden rounded-3xl p-[2px]" style={{ background: "linear-gradient(135deg, hsl(220 50% 28%), hsl(38 45% 48%))" }}>
                <div className="glass-strong rounded-[22px] px-5 py-10 text-center sm:px-8 sm:py-12 md:px-12">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl aurora-gradient">
                    <FlaskConical className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="mt-6 font-serif text-xl tracking-wider text-foreground sm:text-2xl md:text-3xl text-balance">
                    化粧品製造業許可 保有。製造から配送までワンストップ。
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed tracking-wide text-muted-foreground">
                    弊社は、保管・出荷・流通加工を含む物流業務に加え、【化粧品製造業許可】を保有し、化粧品の製造・充填・包装・セットアップ・保管までワンストップで対応可能な物流会社です。
                  </p>
                  <Link
                    href="/company#contact"
                    className="btn-glow mt-8 inline-block w-full aurora-gradient rounded-xl px-8 py-3 text-sm font-medium tracking-widest text-white transition-all active:scale-95 sm:w-auto sm:px-10 sm:hover:shadow-glass-hover touch-manipulation"
                  >
                    化粧品物流のお見積り・ご相談
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </section>

        {/* Highlight: Original Packaging — Monotone */}
        <section className="border-y border-border bg-foreground py-24 px-4 sm:px-6 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                <Package className="h-8 w-8 text-white" />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Star className="h-4 w-4 text-white/60" />
                <span className="text-xs font-medium tracking-[0.2em] text-white/60">
                  おすすめ
                </span>
                <Star className="h-4 w-4 text-white/60" />
              </div>
              <h2 className="mt-4 font-serif text-2xl tracking-wider text-white sm:text-3xl md:text-4xl text-balance">
                オリジナル梱包資材 企画・製作
              </h2>
              <p className="mt-4 max-w-2xl text-sm font-bold leading-relaxed tracking-wide text-red-400 sm:mt-6 sm:text-base">
                ※大阪近郊エリア限定。高品質低価格をご提案いたします。今お使いのダンボールを一度お見積りください。
              </p>
              <Link
                href="/company#contact"
                className="mt-6 inline-block w-full rounded-xl border-2 border-white/40 bg-transparent px-8 py-3 text-sm font-medium tracking-widest text-white backdrop-blur-sm transition-all active:scale-95 sm:mt-8 sm:w-auto sm:px-10 sm:hover:bg-white/20 sm:hover:scale-105 touch-manipulation"
              >
                梱包資材のお見積り
              </Link>
            </div>
          </div>
        </section>

        {/* Track Record */}
        <section className="section-gradient border-t border-border py-24 px-4 sm:px-6 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <ScrollAnimate>
              <SectionHeading sub="実績" title="主要取扱実績" className="mb-12" />
            </ScrollAnimate>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {trackRecords.map((item) => (
                <ScrollAnimate key={item.number} className="h-full min-h-0">
                  <div className="tech-card flex h-full flex-col gap-3 rounded-2xl border-2 border-primary/10 p-4 transition-all hover:border-primary/20 hover:shadow-glass-hover sm:p-5 md:p-6">
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                          <item.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                        </div>
                        <span className="font-serif text-xl font-bold tracking-wider aurora-gradient-text sm:text-2xl">
                          {item.number}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-primary sm:px-2.5 sm:py-1 sm:text-[10px]">
                          {item.category}
                        </span>
                        {item.badge && (
                          <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[9px] font-bold tracking-wider text-accent sm:px-2.5 sm:py-1 sm:text-[10px]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-sm font-bold tracking-wider text-foreground sm:text-base">
                      {item.title}
                    </h3>
                    <p className="flex-grow text-xs leading-relaxed tracking-wide text-muted-foreground sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <EstimateCta
          title="物流サービス お見積り・ご相談"
          description="物流業務、利用運送、EC支援など、まずはお気軽にお問い合わせください。無料でお見積りいたします。"
        />
      </main>
      <Footer />
    </>
  )
}
