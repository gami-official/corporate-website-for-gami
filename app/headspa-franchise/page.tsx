import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimate } from "@/components/scroll-animate"
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  HeartHandshake,
  MapPinned,
  Phone,
  Sparkles,
  Store,
  UserRound,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/lib/images"

const pagePath = "/headspa-franchise"
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gamigami.net"
const pageUrl = `${siteUrl}${pagePath}`

export const metadata: Metadata = {
  title:
    "ヘッドスパ専門店ゆう フランチャイズ募集 | 株式会社GAMI",
  description:
    "ヘッドスパ専門店ゆう本店の技術指導と、株式会社GAMIの経営・集客支援を掛け合わせたフランチャイズ募集ページ。ウェット・ドライ両対応、開業支援、ホームページ制作、SEO/MEOまで一貫サポート。",
  keywords: [
    "ヘッドスパ フランチャイズ",
    "ヘッドスパ 開業",
    "ドライヘッドスパ フランチャイズ",
    "ヘッドスパ 独立",
    "ヘッドスパ 経営コンサル",
    "ヘッドスパ 開業支援",
    "ヘッドスパ専門店ゆう",
    "株式会社GAMI",
    "美容師向け フランチャイズ",
    "ヘッドスパ ホームページ制作",
  ],
  openGraph: {
    title: "ヘッドスパ専門店ゆう フランチャイズ募集 | 株式会社GAMI",
    description:
      "技術指導はヘッドスパ専門店ゆう本店、大阪店。<br />
      運営・経営支援は株式会社GAMI。<br />
      現場力と経営支援を掛け合わせ、<br />
      全国で愛されるヘッドスパ事業を育てます。",
    url: pagePath,
    type: "website",
  },
  alternates: {
    canonical: pagePath,
  },
}

const strengths = [
  {
    icon: UserRound,
    title: "現役オーナーによる技術指導",
    description:
      "外部講師として、ヘッドスパ専門店ゆう本店オーナー・淵上ゆうが実践的に技術指導。机上ではなく、現場ベースで再現性を高めます。",
  },
  {
    icon: Briefcase,
    title: "GAMIによる経営・集客支援",
    description:
      "導入設計、価格設定、メニュー構築、運営相談、ホームページ制作、SEO・MEOまで、開業後の成果につながる導線づくりを支援します。",
  },
  {
    icon: GraduationCap,
    title: "予約枠を活かした実店舗研修",
    description:
      "既存の予約システムや空き枠を有効活用しながら技術指導を実施。実際の店舗環境に近い流れで学べるのが強みです。",
  },
  {
    icon: Globe,
    title: "全国展開を前提にした設計",
    description:
      "ヘッドスパ専門店ゆう本店のブランド価値を広げながら、各エリアで継続的に選ばれる店舗づくりを目指します。",
  },
]

const formatTypes = [
  {
    title: "ウェット導入プラン",
    label: "美容師免許取得者限定",
    points: [
      "シャンプー台を活かした本格的なヘッドスパ導入",
      "高単価メニュー化・既存サロンへの追加導入に向く",
      "美容室・個室サロン・高付加価値店舗との相性が良い",
      "リピート導線を組みやすく、顧客単価を上げやすい",
    ],
  },
  {
    title: "ドライ導入プラン",
    label: "美容師免許の有無問わず、低リスクで始めやすい",
    points: [
      "省スペースでも始めやすく、初期投資を抑えやすい",
      "異業種参入・新規開業・空きスペース活用にも対応",
      "イベント・福利厚生・単独業態など展開の幅が広い",
      "導入スピードを上げやすく、早期立ち上げに向く",
    ],
  },
]

const plans = [
  {
    name: "FC基本導入プラン",
    price: "初期費用 55万円〜 / 月額 3.3万円〜",
    lead: "技術指導と経営コンサルを中心に導入したい方向け",
    features: [
      "ヘッドスパ専門店ゆうブランド活用相談",
      "初期技術研修・接客指導",
      "価格設計・メニュー設計支援",
      "運営・経営コンサル",
      "定期オンライン相談",
      "導入後の改善アドバイス",
    ],
  },
  {
    name: "FCフルサポートプラン",
    price: "初期費用 110万円〜 / 月額 5.5万円〜",
    lead: "技術から集客導線までまとめて任せたい方向け",
    features: [
      "FC基本導入プランの全内容",
      "ホームページ制作",
      "SEO初期設計",
      "MEO初期設計",
      "予約導線設計・問い合わせ導線整備",
      "販促・運用の初期アドバイス",
    ],
  },
]

const options = [
  "追加技術研修",
  "現地導入サポート",
  "LP追加制作",
  "Googleビジネスプロフィール最適化",
  "写真導線・撮影ディレクション相談",
  "SNS・広告運用相談",
]

const flow = [
  {
    step: "01",
    title: "無料相談・資料請求",
    description:
      "まずは現状やご希望をヒアリングし、ウェット・ドライの適性や導入イメージをご案内します。",
  },
  {
    step: "02",
    title: "個別提案",
    description:
      "ご予算・エリア・導入形態に応じて、基本導入プランまたはフルサポートプランをご提案します。",
  },
  {
    step: "03",
    title: "契約・初期設計",
    description:
      "ブランド方針、導入内容、運営体制、価格帯、導線設計などを整理し、実行計画を固めます。",
  },
  {
    step: "04",
    title: "技術研修・運営準備",
    description:
      "ヘッドスパ専門店ゆう本店の空き枠や既存予約導線を活かしながら、実店舗ベースで技術指導を行います。",
  },
  {
    step: "05",
    title: "開業・導入後フォロー",
    description:
      "開業後も運営相談、改善提案、必要に応じた追加支援を継続し、事業の安定化を目指します。",
  },
]

const faqs = [
  {
    q: "未経験でも相談できますか？",
    a: "はい。ドライ導入は比較的始めやすく、未経験の方の相談にも対応しやすい設計です。技術・導線・運営面まで段階的にご案内します。",
  },
  {
    q: "ウェット導入は誰でもできますか？",
    a: "ウェット導入は美容師免許取得者限定の想定です。ページ上でもその前提を明確にし、導入前に適性確認を行うのがおすすめです。",
  },
  {
    q: "ホームページ制作は必須ですか？",
    a: "必須ではありません。ご自身で用意される場合はFC基本導入プラン、制作や導線まで任せたい場合はFCフルサポートプランが向いています。",
  },
  {
    q: "ロイヤリティはどう考えればいいですか？",
    a: "立ち上げ初期は高い売上連動型より、定額の月額サポート型の方が分かりやすく、加盟のハードルも下げやすいです。",
  },
  {
    q: "どの地域でも加盟できますか？",
    a: "エリアの重複を避けるため、一定の商圏保護を前提に個別相談制にするのがおすすめです。",
  },
]

const shopLinks = [
  { name: "ヘッドスパ専門店ゆう本店", url: "https://www.yuheadspa.net/" },
  { name: "大阪店", url: "https://www.yuheadspa-osaka.net/" },
]

const franchisePageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ヘッドスパ専門店ゆう フランチャイズ募集",
  serviceType: "ヘッドスパフランチャイズ・開業支援",
  url: pageUrl,
  provider: {
    "@type": "Organization",
    name: "株式会社GAMI",
    url: siteUrl,
  },
  description:
    "ヘッドスパ専門店ゆう本店の技術指導と株式会社GAMIの経営・集客支援を組み合わせたフランチャイズ募集。ウェット・ドライ両対応、技術研修、運営支援、ホームページ制作まで一貫対応。",
  areaServed: "日本",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
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
      name: "ヘッドスパフランチャイズ",
      item: pageUrl,
    },
  ],
}

function PrimaryButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f2f4d] transition-all hover:translate-y-[-1px] hover:bg-white/90 sm:px-7"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}

function SecondaryButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 sm:px-7"
    >
      {children}
    </a>
  )
}

export default function HeadSpaFranchisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(franchisePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <div className="relative min-h-[78vh]">
            <Image
              src={IMAGES.heroSpa}
              alt="ヘッドスパ専門店ゆう フランチャイズ"
              fill
              priority
              unoptimized
              className="object-cover object-[50%_28%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e1830]/88 via-[#15284a]/72 to-[#1d3156]/50" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,12,22,0.12),rgba(8,12,22,0.58))]" />

            <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl items-center px-4 py-20 sm:px-6 lg:px-8">
              <div className="max-w-3xl text-white">
                <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs tracking-[0.22em] text-white/90 backdrop-blur">
                  HEAD SPA FRANCHISE
                </p>

                <h1 className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-[0.04em] sm:text-4xl lg:text-5xl">
                  ヘッドスパ専門店ゆう
                  <br className="hidden sm:block" />
                  フランチャイズ募集
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                  技術指導は
                  <span className="font-medium text-white">
                    ヘッドスパ専門店ゆう本店
                  </span>
                  、
                  運営・経営支援は
                  <span className="font-medium text-white">株式会社GAMI</span>
                  。
                  現場力と事業設計の両面から、
                  全国で愛されるヘッドスパ事業づくりを支援します。
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs tracking-[0.18em] text-white/70">
                      技術指導
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6">
                      ヘッドスパ専門店ゆう本店
                      <br />
                      淵上ゆうオーナー起用
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs tracking-[0.18em] text-white/70">
                      経営支援
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6">
                      GAMIが運営・経営・
                      <br />
                      集客導線を支援
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs tracking-[0.18em] text-white/70">
                      導入形態
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6">
                      ウェット / ドライ
                      <br />
                      2パターンに対応
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <PrimaryButton href="/company#contact">
                    無料相談をする
                  </PrimaryButton>
                  <SecondaryButton href="https://lin.ee/3QGIdCY">
                    LINEで相談する
                  </SecondaryButton>
                  <SecondaryButton href="tel:0661159935">
                    電話で相談する
                  </SecondaryButton>
                </div>

                <p className="mt-5 text-xs leading-6 text-white/70">
                  まずは資料請求・無料相談からご案内可能です。エリアや導入形態に応じて個別提案いたします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="section-gradient px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="FRANCHISE CONCEPT"
                title="技術と経営の両輪で、全国に広げる。"
                catchCopy="夫婦それぞれの強みを活かした、再現性の高いヘッドスパ事業モデル。"
                className="mb-14"
              />
            </ScrollAnimate>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <ScrollAnimate>
                <div className="tech-card rounded-3xl p-6 sm:p-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-border/70 bg-background/70 p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                          <Store className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs tracking-[0.18em] text-muted-foreground">
                            BRAND / FIELD
                          </p>
                          <h3 className="mt-1 text-lg font-medium">
                            ヘッドスパ専門店ゆう本店
                          </h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        妻が経営する現場ブランドとして、
                        技術・接客・空間づくり・継続来店につながる
                        実践的なノウハウを伝えます。
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/70 bg-background/70 p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                          <Building2 className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs tracking-[0.18em] text-muted-foreground">
                            MANAGEMENT / STRATEGY
                          </p>
                          <h3 className="mt-1 text-lg font-medium">
                            株式会社GAMI
                          </h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        夫が経営する事業支援会社として、
                        運営・経営コンサル・ホームページ制作・SEO・MEO・
                        導線設計までまとめて支援します。
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-[#21324f] p-5 text-white sm:p-6">
                    <div className="flex items-start gap-3">
                      <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-white/90" />
                      <div>
                        <h3 className="text-base font-medium tracking-[0.04em]">
                          このFCモデルの核
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/85">
                          現場を知る「ヘッドスパ専門店ゆう本店」と、
                          事業設計を担う「株式会社GAMI」が連携することで、
                          技術だけ・集客だけに偏らない、
                          実務に強いフランチャイズモデルを目指します。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>

              <ScrollAnimate>
                <div className="overflow-hidden rounded-3xl border border-border/70 bg-background">
                  <div className="relative min-h-[420px]">
                    <Image
                      src={IMAGES.heroSpa}
                      alt="ヘッドスパ専門店ゆう本店の技術とブランドイメージ"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1726]/78 via-[#0f1726]/20 to-transparent" />
                    <div className="absolute bottom-0 p-6 text-white sm:p-8">
                      <p className="text-xs tracking-[0.2em] text-white/70">
                        FRANCHISE VISION
                      </p>
                      <h3 className="mt-2 font-serif text-2xl tracking-[0.05em]">
                        ブランドを広げ、
                        本店の価値も高める。
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/85">
                        全国展開を通じて、ヘッドスパ専門店ゆう本店の認知と信頼を広げ、
                        本店へのアクセスやブランド価値の向上にもつなげていきます。
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="WHY CHOOSE US"
                title="選ばれる4つの理由"
                catchCopy="技術・ブランド・経営・集客を、別々ではなく一体で支援します。"
                className="mb-14"
              />
            </ScrollAnimate>

            <div className="grid gap-6 sm:grid-cols-2">
              {strengths.map((item) => (
                <ScrollAnimate key={item.title}>
                  <div className="tech-card h-full rounded-3xl p-6 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="mt-5 text-lg font-medium tracking-[0.04em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        {/* Wet / Dry */}
        <section className="border-y border-border bg-secondary/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="WET / DRY"
                title="導入形態は2パターン"
                catchCopy="事業規模・設備・資格・目指す単価に応じて選べる設計。"
                className="mb-14"
              />
            </ScrollAnimate>

            <div className="grid gap-6 lg:grid-cols-2">
              {formatTypes.map((type) => (
                <ScrollAnimate key={type.title}>
                  <div className="tech-card h-full rounded-3xl p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-medium tracking-[0.04em]">
                        {type.title}
                      </h3>
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {type.label}
                      </span>
                    </div>
                    <div className="mt-6 space-y-4">
                      {type.points.map((point) => (
                        <div key={point} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <p className="text-sm leading-7 text-muted-foreground">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>

            <ScrollAnimate>
              <div className="mt-8 rounded-3xl border border-[#c89b55]/25 bg-[#fff9f0] p-5 text-[#5f4520] sm:p-6">
                <div className="flex gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#b6802e]" />
                
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </section>

        {/* Plans */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="PLAN / PRICE"
                title="料金体系は2プラン設計"
                catchCopy="加盟しやすさを残しつつ、必要に応じてサポートを広げられる形に。"
                className="mb-14"
              />
            </ScrollAnimate>

            <div className="grid gap-6 lg:grid-cols-2">
              {plans.map((plan, index) => (
                <ScrollAnimate key={plan.name}>
                  <div
                    className={`h-full rounded-3xl border p-6 sm:p-8 ${
                      index === 1
                        ? "border-[#21324f] bg-[#21324f] text-white"
                        : "border-border bg-background"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className={`text-xs tracking-[0.18em] ${
                            index === 1 ? "text-white/65" : "text-muted-foreground"
                          }`}
                        >
                          {index === 0 ? "STANDARD" : "FULL SUPPORT"}
                        </p>
                        <h3 className="mt-2 text-2xl font-medium tracking-[0.04em]">
                          {plan.name}
                        </h3>
                      </div>
                      <CircleDollarSign
                        className={`h-7 w-7 shrink-0 ${
                          index === 1 ? "text-white/85" : "text-accent"
                        }`}
                      />
                    </div>

                    <p
                      className={`mt-5 text-lg font-medium ${
                        index === 1 ? "text-white" : "text-foreground"
                      }`}
                    >
                      {plan.price}
                    </p>

                    <p
                      className={`mt-3 text-sm leading-7 ${
                        index === 1 ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {plan.lead}
                    </p>

                    <div className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex gap-3">
                          <CheckCircle2
                            className={`mt-0.5 h-5 w-5 shrink-0 ${
                              index === 1 ? "text-white/85" : "text-accent"
                            }`}
                          />
                          <p
                            className={`text-sm leading-7 ${
                              index === 1 ? "text-white/88" : "text-muted-foreground"
                            }`}
                          >
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
              <ScrollAnimate>
                <div className="tech-card rounded-3xl p-6 sm:p-8">
                  <h3 className="text-xl font-medium tracking-[0.04em]">
                    オプション提案
                  </h3>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {options.map((option) => (
                      <div
                        key={option}
                        className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm text-muted-foreground"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimate>

              <ScrollAnimate>
                <div className="rounded-3xl border border-[#c89b55]/25 bg-[#fff9f0] p-6 sm:p-8">
                  <div className="flex items-start gap-3">
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-[#b6802e]" />
                    <div>
                      <h3 className="text-xl font-medium tracking-[0.04em] text-[#5f4520]">
                        料金表示の考え方
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#6f5733]">
                        ページ上では
                        「55万円〜」「110万円〜」のように
                        下限表示にしておき、
                        ウェット / ドライ、店舗状況、制作範囲、
                        追加支援の有無によって個別見積りにするのがおすすめです。
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[#6f5733]">
                        また、立ち上げ初期は
                        <span className="font-medium text-[#5f4520]">
                          売上連動ロイヤリティより、定額月額型
                        </span>
                        の方が分かりやすく、
                        加盟障壁を下げながら展開しやすいです。
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </section>

        {/* Training */}
        <section className="relative overflow-hidden bg-[#182742] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={IMAGES.heroSpa}
              alt="ヘッドスパ技術研修"
              fill
              unoptimized
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-[#182742]/90" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="TRAINING SYSTEM"
                title="技術研修は“空き枠活用型”が強み"
                catchCopy="ヘッドスパ専門店ゆう本店の既存予約システムを活かした、実店舗ベースの実践研修。"
                className="mb-14 text-white [&_*]:text-white"
              />
            </ScrollAnimate>

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <ScrollAnimate>
                <div className="rounded-3xl border border-white/12 bg-white/8 p-6 backdrop-blur sm:p-8">
                  <div className="space-y-5">
                    <div className="flex gap-3">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-white/85" />
                      <p className="text-sm leading-7 text-white/85">
                        ヘッドスパ専門店ゆう本店の
                        <span className="font-medium text-white">
                          空き枠・既存予約導線
                        </span>
                        を有効活用しながら技術指導を行うことで、
                        実務感のある学びに近づけます。
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-white/85" />
                      <p className="text-sm leading-7 text-white/85">
                        単なるスクール形式ではなく、
                        現場の流れ・接客・カウンセリング・空間演出も含めて
                        体感しながら学べるのが大きな強みです。
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-white/85" />
                      <p className="text-sm leading-7 text-white/85">
                        本店ブランドの信頼感をそのまま活かしやすく、
                        加盟検討者にとっても
                        「誰から、どこで学べるのか」が明確になります。
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>

              <ScrollAnimate>
                <div className="rounded-3xl border border-white/12 bg-white/8 p-6 backdrop-blur sm:p-8">
                  <h3 className="text-xl font-medium tracking-[0.04em]">
                    研修でカバーしたい項目
                  </h3>
                  <div className="mt-6 space-y-3">
                    {[
                      "技術の基本手順",
                      "カウンセリングの流れ",
                      "単価設計とメニュー化",
                      "空間づくり・見せ方",
                      "継続来店につながる接客",
                      "導入後の改善ポイント",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white/85" />
                        <p className="text-sm leading-7 text-white/85">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </section>

        {/* Flow */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="FLOW"
                title="加盟までの流れ"
                catchCopy="相談から開業後フォローまで、段階的に進められる設計です。"
                className="mb-14"
              />
            </ScrollAnimate>

            <div className="grid gap-6 lg:grid-cols-5">
              {flow.map((item) => (
                <ScrollAnimate key={item.step}>
                  <div className="tech-card h-full rounded-3xl p-5 sm:p-6">
                    <p className="text-xs tracking-[0.2em] text-accent">
                      STEP {item.step}
                    </p>
                    <h3 className="mt-3 text-lg font-medium tracking-[0.04em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        {/* Area / Brand */}
        <section className="border-y border-border bg-secondary/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-2">
              <ScrollAnimate>
                <div className="tech-card h-full rounded-3xl p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10">
                      <MapPinned className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-medium tracking-[0.04em]">
                      エリア戦略の提案
                    </h3>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    加盟を取りやすくするためにも、
                    「1エリア1加盟を基本」「商圏は個別相談」
                    のような一定の保護ルールを用意するのがおすすめです。
                    これにより、先行加盟の魅力を高めやすくなります。
                  </p>
                </div>
              </ScrollAnimate>

              <ScrollAnimate>
                <div className="tech-card h-full rounded-3xl p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10">
                      <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-medium tracking-[0.04em]">
                      ブランド価値の広がり
                    </h3>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    フランチャイズ展開は加盟獲得だけでなく、
                    ヘッドスパ専門店ゆう本店の認知拡大にも直結します。
                    全国展開の文脈を持つことで、本店自体の信頼性や話題性も高めやすくなります。
                  </p>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <ScrollAnimate>
              <SectionHeading
                sub="FAQ"
                title="よくあるご質問"
                catchCopy="問い合わせ前に不安を解消しやすい内容を先回りで掲載。"
                className="mb-14"
              />
            </ScrollAnimate>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <ScrollAnimate key={faq.q}>
                  <div className="tech-card rounded-3xl p-6 sm:p-7">
                    <h3 className="text-base font-medium tracking-[0.03em]">
                      {faq.q}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        {/* Shop Links */}
        <section className="border-t border-border bg-secondary/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <ScrollAnimate>
              <SectionHeading
                sub="SHOP / BRAND"
                title="ブランドサイト"
                catchCopy="技術指導の背景となる店舗・ブランドの空気感もご確認いただけます。"
                className="mb-14"
              />
            </ScrollAnimate>

            <div className="grid gap-6 md:grid-cols-2">
              {shopLinks.map((shop) => (
                <a
                  key={shop.name}
                  href={shop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-card group flex flex-col gap-3 rounded-3xl p-5 transition-all hover:translate-y-[-2px] sm:flex-row sm:items-center sm:justify-between sm:p-6"
                >
                  <div>
                    <p className="text-xs tracking-[0.18em] text-muted-foreground">
                      OFFICIAL SITE
                    </p>
                    <p className="mt-2 text-lg font-medium tracking-[0.04em] text-foreground">
                      {shop.name}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#223451] px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs tracking-[0.22em] text-white/70">
              HEAD SPA FRANCHISE CONTACT
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-[0.05em] sm:text-4xl">
              全国展開に向けた
              <br className="sm:hidden" />
              加盟相談を受付中です
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              技術だけでなく、経営・導線・ホームページ・集客まで含めて、
              事業として成り立つヘッドスパ展開を一緒に設計します。
              まずは無料相談、または資料請求からご連絡ください。
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/company#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#223451] transition-all hover:bg-white/90"
              >
                無料相談をする
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="https://lin.ee/3QGIdCY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                LINEで相談する
              </a>

              <a
                href="tel:0661159935"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                電話で相談する
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
