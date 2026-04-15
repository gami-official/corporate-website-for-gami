import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimate } from "@/components/scroll-animate"
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  Globe,
  GraduationCap,
  HeartHandshake,
  Phone,
  Store,
  TrendingUp,
  UserRound,
  Wallet,
  ShieldCheck,
  Crown,
  Sparkles,
  Gem,
  MapPin,
  Clock3,
} from "lucide-react"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/lib/images"

const pagePath = "/headspa-franchise"
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gamigami.net"
const pageUrl = `${siteUrl}${pagePath}`

const YUU_INTERIOR_IMAGE =
  "https://www.yuheadspa.net/images/about-interior.png"
const YUU_LOGO_IMAGE =
  "https://www.yuheadspa.net/images/about-portrait.png"

export const metadata: Metadata = {
  title: "ヘッドスパ専門店ゆう フランチャイズ募集｜開業支援・経営支援｜株式会社GAMI",
  description:
    "ヘッドスパ専門店ゆう本店の実店舗ノウハウと、株式会社GAMIの経営・集客支援を掛け合わせたフランチャイズ募集ページ。ウェット・ドライ両対応、技術研修、ホームページ制作、SEO・MEO、導線設計まで一貫サポート。",
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
    "福岡 ヘッドスパ 開業",
    "高単価 ヘッドスパ",
  ],
  openGraph: {
    title: "ヘッドスパ専門店ゆう フランチャイズ募集｜株式会社GAMI",
    description:
      "技術指導はヘッドスパ専門店ゆう本店、運営・経営支援は株式会社GAMI。現場力と経営支援を掛け合わせ、全国で愛されるヘッドスパ事業を育てます。",
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
      "ヘッドスパ専門店ゆう本店オーナーが実践的に技術指導。机上ではなく、現場ベースで再現性を高めます。",
  },
  {
    icon: Briefcase,
    title: "GAMIによる経営・集客支援",
    description:
      "導入設計、価格設定、メニュー構築、運営相談、ホームページ制作、SEO・MEOまで、開業後の成果につながる導線づくりを支援します。",
  },
  {
    icon: GraduationCap,
    title: "実店舗ベースの研修",
    description:
      "既存の予約導線や店舗環境を活かしながら技術指導を実施。現場に近い流れで学べるのが強みです。",
  },
  {
    icon: Globe,
    title: "全国展開を前提にした設計",
    description:
      "ヘッドスパ専門店ゆう本店のブランド価値を広げながら、各エリアで継続的に選ばれる店舗づくりを目指します。",
  },
]

const audienceCards = [
  "ヘッドスパで独立・開業したい方",
  "既存サロンに高付加価値メニューを導入したい方",
  "技術だけでなく経営・集客もまとめて学びたい方",
]

const brandProofs = [
  {
    icon: Gem,
    title: "日常に静かな贅沢を",
    description:
      "価格競争ではなく、体験価値・世界観・満足度で選ばれるブランド設計を目指します。",
  },
  {
    icon: Crown,
    title: "完全個室・1日3名限定",
    description:
      "少人数制だからこそ、単価・満足度・再来店率を高めやすい高付加価値モデルです。",
  },
  {
    icon: Sparkles,
    title: "熟練のオールハンド",
    description:
      "専門店ならではの技術表現をFC側にも落とし込み、安売りに頼らない差別化を狙います。",
  },
]

const yuuFeatures = [
  {
    title: "実店舗のリアルな売上実績",
    description:
      "子育てをしながらの運営でも、初年度700万円、2年目以降は年商1000万円超えも目指せるモデルです。小規模でも高付加価値を打ち出しやすいのが特徴です。",
    icon: TrendingUp,
  },
  {
    title: "小規模でも成立するモデル",
    description:
      "テナントだけでなく、自宅やマンションの一室など、既存の空間を活用した低コスト開業も可能。実際に本店もこの形で運営しています。",
    icon: Wallet,
  },
  {
    title: "高単価 × 少人数モデル",
    description:
      "完全予約制・1日3名限定・高品質商材・高単価設計により、少ない人数でも売上を作るモデル。条件が整えば月商100万円以上も現実的に目指せます。",
    icon: Crown,
  },
  {
    title: "再現性のある仕組み",
    description:
      "技術だけでなく、価格設計・導線・運営方法まで含めて設計。属人化せず、他の地域でも再現できる形に落とし込んでいます。",
    icon: ShieldCheck,
  },
]

const formatTypes = [
  {
    title: "ウェット導入プラン",
    label: "美容師免許取得者向け",
    points: [
      "シャンプー台を活かした本格的なヘッドスパ導入",
      "高単価メニュー化・既存サロンへの追加導入に向く",
      "美容室・個室サロン・高付加価値店舗との相性が良い",
      "リピート導線を組みやすく、顧客単価を上げやすい",
    ],
  },
  {
    title: "ドライ導入プラン",
    label: "低リスクで始めやすい",
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
      "ブランド活用相談",
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
      "実店舗ベースで技術指導を行い、導入準備を進めます。接客や導線まで含めて整えていきます。",
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
    a: "ウェット導入は美容師免許取得者向けの想定です。導入前に適性確認を行い、ミスマッチを防ぎます。",
  },
  {
    q: "ホームページ制作は必須ですか？",
    a: "必須ではありません。ご自身で用意される場合はFC基本導入プラン、制作や導線まで任せたい場合はFCフルサポートプランが向いています。",
  },
  {
    q: "ロイヤリティはどう考えればいいですか？",
    a: "立ち上げ初期は定額の月額サポート型の方が分かりやすく、加盟のハードルも下げやすいです。個別相談の中で最適な設計をご案内します。",
  },
  {
    q: "どの地域でも加盟できますか？",
    a: "全国どこでもご相談は可能です。エリア重複を避けるため、一定の商圏保護を前提に個別相談でご案内します。",
  },
]

const shopLinks = [
  { name: "ヘッドスパ専門店ゆう本店", url: "https://www.yuheadspa.net/" },
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
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#1f2f4d] shadow-[0_12px_30px_rgba(255,255,255,0.18)] transition-all hover:translate-y-[-1px] hover:bg-white/90 sm:px-7"
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
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 sm:px-7"
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
        <section className="relative isolate overflow-hidden">
          <div className="relative min-h-[82vh]">
            <Image
              src={IMAGES.heroSpa}
              alt="ヘッドスパ専門店ゆう フランチャイズ"
              fill
              priority
              unoptimized
              className="object-cover object-[50%_28%] scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1221]/92 via-[#10203d]/76 to-[#223451]/52" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%),linear-gradient(to_bottom,rgba(8,12,22,0.12),rgba(8,12,22,0.68))]" />

            <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-6xl items-center px-4 py-20 sm:px-6 lg:px-8">
              <div className="max-w-3xl text-white">
                <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs tracking-[0.22em] text-white/90 backdrop-blur">
                  HEAD SPA FRANCHISE
                </p>

                <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.2] tracking-[0.05em] sm:text-5xl lg:text-6xl">
                  ヘッドスパ専門店ゆう
                  <br className="hidden sm:block" />
                  フランチャイズ募集
                </h1>

                <p className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs tracking-[0.15em] text-white/90">
                  先着5社限定で個別相談を受付中
                </p>

                <p className="mt-6 max-w-2xl text-[15px] leading-8 text-white/90 sm:text-base">
                  技術指導は
                  <span className="font-medium text-white">ヘッドスパ専門店ゆう本店</span>
                  、運営・経営支援は
                  <span className="font-medium text-white">株式会社GAMI</span>。
                  実店舗の再現性と、事業として伸ばすための導線設計を両立した
                  ヘッドスパフランチャイズモデルです。
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
                  <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur">
                    <p className="text-xs tracking-[0.18em] text-white/70">
                      技術指導
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6">
                      ゆう本店オーナーが
                      <br />
                      実践ベースで指導
                    </p>
                  </div>
                  <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur">
                    <p className="text-xs tracking-[0.18em] text-white/70">
                      経営支援
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6">
                      GAMIが運営・経営・
                      <br />
                      集客導線を支援
                    </p>
                  </div>
                  <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur">
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
                  <PrimaryButton href="/franchise-contact">
                    【無料】開業相談はこちら
                  </PrimaryButton>
                  <SecondaryButton href="https://lin.ee/3QGIdCY">
                    LINEで即相談
                  </SecondaryButton>
                  <SecondaryButton href="tel:0661159935">
                    電話で相談する
                  </SecondaryButton>
                </div>

                <p className="mt-5 text-xs leading-6 text-white/70">
                  ※無理な営業は一切ありません。まずは情報収集だけでも大丈夫です。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <div className="grid gap-4 md:grid-cols-3">
                {audienceCards.map((item) => (
                  <div
                    key={item}
                    className="tech-card rounded-[30px] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-7"
                  >
                    <p className="text-xs tracking-[0.18em] text-accent">
                      RECOMMENDED
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollAnimate>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="BRAND MESSAGE"
                title="“日常に静かな贅沢を”という価値を広げる。"
                catchCopy="ただの施術ではなく、空間・技術・体験まで含めたブランド設計。"
                className="mb-16"
              />
            </ScrollAnimate>

            <div className="grid gap-6 md:grid-cols-3">
              {brandProofs.map((item) => (
                <ScrollAnimate key={item.title}>
                  <div className="tech-card h-full rounded-[30px] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-7">
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

        <section className="section-gradient px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="FRANCHISE CONCEPT"
                title="技術と経営の両輪で、全国に広げる。"
                catchCopy="ヘッドスパ専門店の強みを活かした、再現性の高いヘッドスパ事業モデル。"
                className="mb-16"
              />
            </ScrollAnimate>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <ScrollAnimate>
                <div className="tech-card rounded-[30px] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-[28px] border border-border/70 bg-background/70 p-5">
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
                        完全個室・1日3名限定の高付加価値モデルを実店舗で運営しながら、
                        技術・接客・空間づくり・継続来店につながる実践的なノウハウを伝えます。
                      </p>
                    </div>

                    <div className="rounded-[28px] border border-border/70 bg-background/70 p-5">
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
                        FCページ制作、導線設計、ホームページ制作、SEO・MEO、
                        予約導線、経営相談まで一括で支援します。
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[28px] bg-[#21324f] p-5 text-white sm:p-6">
                    <div className="flex items-start gap-3">
                      <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-white/90" />
                      <div>
                        <h3 className="text-base font-medium tracking-[0.04em]">
                          このFCモデルの核
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/85">
                          「現場でできること」と「事業として伸ばすこと」を分けずに設計している点が強みです。
                          技術だけ、集客だけに偏らず、開業後に売上へつなげるための支援まで一体で行います。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>

              <ScrollAnimate>
                <div className="overflow-hidden rounded-[32px] border border-border/70 bg-background shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                  <div className="relative min-h-[460px]">
                    <Image
                      src={IMAGES.heroSpa}
                      alt="ヘッドスパ専門店ゆう本店の技術とブランドイメージ"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1726]/80 via-[#0f1726]/20 to-transparent" />
                    <div className="absolute bottom-0 p-6 text-white sm:p-8">
  <p className="text-xs tracking-[0.2em] text-white/70">
    FRANCHISE VISION
  </p>
  <h3 className="mt-2 font-serif text-2xl tracking-[0.05em]">
    ブランドを広げ、
    <br />
    本店の価値も高める。
  </h3>
  <p className="mt-3 text-sm leading-7 text-white/85">
    フランチャイズ展開を通じて、ヘッドスパ専門店ゆうの認知と信頼を広げ、
    ブランド全体の価値向上につなげていきます。
  </p>
</div>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="PROOF / BRAND"
                title="実在する店舗の空気感を、そのまま強みに。"
                catchCopy="実店舗として成立している空間・世界観・ブランド感があるから、言葉だけで終わらない。"
                className="mb-16"
              />
            </ScrollAnimate>

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <ScrollAnimate>
                <div className="overflow-hidden rounded-[32px] bg-background shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                  <img
                    src={YUU_INTERIOR_IMAGE}
                    alt="ヘッドスパ専門店ゆう本店の施術空間"
                    className="h-[430px] w-full scale-[1.02] object-cover transition-transform duration-700"
                  />
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-medium tracking-[0.04em]">
                      完全個室の施術空間
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      実際の本店では、完全個室・完全予約制・1日3名限定という運営設計で、
                      高付加価値な体験を提供しています。価格競争ではなく、
                      “ここで受けたい”と思われる空間づくりそのものが武器になります。
                    </p>
                  </div>
                </div>
              </ScrollAnimate>

              <div className="grid gap-6">
                <ScrollAnimate>
                  <div className="tech-card rounded-[30px] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
                    <div className="flex items-center gap-4">
                      <img
                        src={YUU_LOGO_IMAGE}
                        alt="ヘッドスパ専門店ゆう本店ロゴ"
                        className="h-20 w-20 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-xs tracking-[0.18em] text-accent">
                          OFFICIAL BRAND
                        </p>
                        <h3 className="mt-2 text-lg font-medium tracking-[0.04em]">
                          ヘッドスパ専門店ゆう本店
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      福岡市西区豊浜で運営されている、完全個室・1日3名限定のヘッドスパ専門店。
                      実在店舗の世界観があるからこそ、加盟検討者にも安心感を与えやすくなります。
                    </p>
                  </div>
                </ScrollAnimate>

                <ScrollAnimate>
                  <div className="rounded-[30px] bg-[#21324f] p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:p-8">
                    <p className="text-xs tracking-[0.18em] text-white/65">
                      STORE PROFILE
                    </p>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-white/82">
                      <div className="flex gap-3">
                        <MapPin className="mt-1 h-4 w-4 shrink-0 text-white/80" />
                        <p>福岡県福岡市西区豊浜2丁目20-20-2</p>
                      </div>
                      <div className="flex gap-3">
                        <Clock3 className="mt-1 h-4 w-4 shrink-0 text-white/80" />
                        <p>営業時間 9:30〜16:30 / 定休日 日曜日</p>
                      </div>
                      <div className="flex gap-3">
                        <Sparkles className="mt-1 h-4 w-4 shrink-0 text-white/80" />
                        <p>ヘッドスパ歴15年・高価格帯メニュー・完全個室運営</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <div className="mb-10">
                <p className="inline-flex rounded-full bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
                  実際の店舗実績に基づいたフランチャイズモデル
                </p>
                <h2 className="mt-5 text-2xl font-serif tracking-[0.05em] sm:text-3xl">
                  なぜヘッドスパ専門店ゆうなのか
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                  実際に運営している店舗のリアルな実績と、現場で再現できるモデルをベースに構築されています。
                </p>
              </div>
            </ScrollAnimate>

            <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
              <ScrollAnimate>
                <div className="relative overflow-hidden rounded-[32px] shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                  <img
                    src={YUU_INTERIOR_IMAGE}
                    alt="ヘッドスパ専門店ゆうの世界観"
                    className="h-full min-h-[520px] w-full scale-[1.02] object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1423]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-5 text-white sm:p-8">
  <p className="text-[11px] tracking-[0.18em] text-white/65 sm:text-xs">
    LUXURY × PRIVATE
  </p>
  <h3 className="mt-2 text-2xl font-medium leading-[1.35] tracking-[0.03em] sm:text-2xl">
    完全予約制・完全個室
    <br />
    1日3名限定モデル
  </h3>
  <p className="mt-3 text-sm leading-6 text-white/82 sm:leading-7">
    高級感・特別感・再来店につながる体験価値を重視し、
    少人数でも売上を作りやすい設計を目指します。
  </p>
</div>
                </div>
              </ScrollAnimate>

              <div className="grid gap-6 sm:grid-cols-2">
                {yuuFeatures.map((item) => (
                  <ScrollAnimate key={item.title}>
                    <div className="tech-card h-full rounded-[30px] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-7">
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
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="WHY CHOOSE US"
                title="選ばれる4つの理由"
                catchCopy="技術・ブランド・経営・集客を、別々ではなく一体で支援します。"
                className="mb-16"
              />
            </ScrollAnimate>

            <div className="grid gap-6 sm:grid-cols-2">
              {strengths.map((item) => (
                <ScrollAnimate key={item.title}>
                  <div className="tech-card h-full rounded-[30px] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-7">
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

        <section className="border-y border-border bg-secondary/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="WET / DRY"
                title="導入形態は2パターン"
                catchCopy="事業規模・設備・資格・目指す単価に応じて選べる設計です。"
                className="mb-16"
              />
            </ScrollAnimate>

            <div className="grid gap-6 lg:grid-cols-2">
              {formatTypes.map((type) => (
                <ScrollAnimate key={type.title}>
                  <div className="tech-card h-full rounded-[30px] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
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
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="PLAN / PRICE"
                title="料金体系は2プラン設計"
                catchCopy="加盟しやすさを残しつつ、必要に応じてサポートを広げられる形に。"
                className="mb-16"
              />
            </ScrollAnimate>

            <div className="grid gap-6 lg:grid-cols-2">
              {plans.map((plan, index) => (
                <ScrollAnimate key={plan.name}>
                  <div
                    className={`h-full rounded-[30px] border p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-8 ${
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

                    <p
                      className={`mt-5 text-xs leading-6 ${
                        index === 1 ? "text-white/65" : "text-muted-foreground"
                      }`}
                    >
                      ※導入形態や支援範囲により個別見積りとなります
                    </p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
              <ScrollAnimate>
                <div className="tech-card rounded-[30px] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
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
                <div className="rounded-[30px] bg-[#21324f] p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:p-8">
                  <p className="text-xs tracking-[0.18em] text-white/65">
                    LIMITED OFFER
                  </p>
                  <h3 className="mt-3 text-2xl font-medium tracking-[0.04em]">
                    初期展開につき、
                    <br />
                    先着5社限定で個別相談を受付中
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/82">
                    初期フェーズのため、エリアや導入形態を踏まえて個別にご案内しています。
                    ご希望地域によっては優先的にご相談を進められる場合があります。
                  </p>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <ScrollAnimate>
              <div className="mb-10 overflow-hidden rounded-[32px] shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <img
                  src={YUU_INTERIOR_IMAGE}
                  alt="高級感のあるヘッドスパ空間"
                  className="h-[320px] w-full scale-[1.02] object-cover transition-transform duration-700"
                />
              </div>
            </ScrollAnimate>

            <ScrollAnimate>
  <div className="rounded-[30px] bg-[#0f172a] p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:p-10">
    <p className="text-xs tracking-[0.2em] text-white/60">
      REVENUE MODEL
    </p>
    <h2 className="mt-3 text-3xl font-serif tracking-[0.05em]">
      売上イメージ
    </h2>

    <div className="mt-8 grid gap-6 text-center sm:grid-cols-3">
      <div>
        <p className="text-sm text-white/60">客単価</p>
        <p className="mt-2 text-2xl font-bold">20,000円</p>
      </div>
      <div>
        <p className="text-sm text-white/60">1日施術人数</p>
        <p className="mt-2 text-2xl font-bold">3名</p>
      </div>
      <div>
        <p className="text-sm text-white/60">日売上</p>
        <p className="mt-2 text-2xl font-bold text-[#f4c273]">
          約60,000円
        </p>
      </div>
    </div>

    <div className="mt-8 border-t border-white/10 pt-8 text-center">
      <p className="text-sm text-white/60">月売上（25日稼働想定）</p>
      <p className="mt-3 text-4xl font-bold text-[#f4c273]">
        約1,500,000円
      </p>
    </div>

    <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6">
      <h3 className="text-xl font-medium tracking-[0.04em]">
        小規模でも売上を作りやすい設計
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/82">
        条件が整えば、少人数・短時間でも売上を構築可能。
        高単価設計と再来店導線を組み合わせることで、
        無理のない運営モデルを目指せます。
      </p>
    </div>

    <p className="mt-6 text-xs text-white/60">
      ※実際の売上は立地・単価・稼働状況により変動します
    </p>
  </div>
</ScrollAnimate>
          </div>
        </section>

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
                title="技術研修は実店舗ベースで進める"
                catchCopy="現場の流れに近い状態で学べるから、導入後も再現しやすい。"
                className="mb-16 text-white [&_*]:text-white"
              />
            </ScrollAnimate>

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <ScrollAnimate>
                <div className="rounded-[30px] border border-white/12 bg-white/10 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur sm:p-8">
                  <div className="space-y-5">
                    <div className="flex gap-3">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-white/85" />
                      <p className="text-sm leading-7 text-white/85">
                        実店舗の流れ・接客・カウンセリング・空間演出まで含めて学べるため、
                        単なる技術講習で終わりにくいのが特徴です。
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-white/85" />
                      <p className="text-sm leading-7 text-white/85">
                        加盟検討者にとって「誰から、どこで学べるのか」が明確で、
                        安心して導入判断しやすくなります。
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-white/85" />
                      <p className="text-sm leading-7 text-white/85">
                        技術だけでなく、価格設計やリピート導線につながる考え方まで共有します。
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>

              <ScrollAnimate>
                <div className="rounded-[30px] border border-white/12 bg-white/10 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur sm:p-8">
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

        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="FLOW"
                title="加盟までの流れ"
                catchCopy="相談から開業後フォローまで、段階的に進められる設計です。"
                className="mb-16"
              />
            </ScrollAnimate>

            <div className="grid gap-6 lg:grid-cols-5">
              {flow.map((item) => (
                <ScrollAnimate key={item.step}>
                  <div className="tech-card h-full rounded-[30px] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-6">
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

        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <ScrollAnimate>
              <SectionHeading
                sub="FAQ"
                title="よくあるご質問"
                catchCopy="問い合わせ前に不安を解消しやすい内容を先回りで掲載。"
                className="mb-16"
              />
            </ScrollAnimate>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <ScrollAnimate key={faq.q}>
                  <div className="tech-card rounded-[30px] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-7">
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

        <section className="border-t border-border bg-secondary/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <ScrollAnimate>
              <SectionHeading
                sub="SHOP / BRAND"
                title="ブランドサイト"
                catchCopy="技術指導の背景となる店舗・ブランドの空気感もご確認いただけます。"
                className="mb-16"
              />
            </ScrollAnimate>

            <div className="flex justify-center">
              {shopLinks.map((shop) => (
                <a
                  key={shop.name}
                  href={shop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-card group flex w-full max-w-md flex-col gap-3 rounded-[30px] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all hover:translate-y-[-2px] sm:flex-row sm:items-center sm:justify-between sm:p-6"
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

        <section className="bg-[#223451] px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs tracking-[0.22em] text-white/70">
              HEAD SPA FRANCHISE CONTACT
            </p>

            <p className="mt-3 text-xs tracking-[0.18em] text-white/70">
              ※先着5社限定でのご案内となります
            </p>

            <h2 className="mt-4 font-serif text-3xl tracking-[0.05em] sm:text-4xl">
              まずは無料相談で、
              <br className="sm:hidden" />
              導入の可能性を整理できます
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">
              小規模開業・高単価設計・技術研修・集客導線まで、現状に合わせて個別にご提案します。
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              ウェット・ドライのどちらが合うか、必要な初期費用、導入までの流れを個別にご案内します。
              技術だけでなく、経営・導線・ホームページ・集客まで含めて、
              事業として成り立つヘッドスパ展開を一緒に設計します。
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/franchise-contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#223451] shadow-[0_12px_30px_rgba(255,255,255,0.18)] transition-all hover:bg-white/90"
              >
                無料で開業相談をする
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="https://lin.ee/3QGIdCY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                LINEで今すぐ相談
              </a>

              <a
                href="tel:0661159935"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                電話で相談する
              </a>
            </div>

            <p className="mt-4 text-xs leading-6 text-white/65">
              ご相談段階で費用はかかりません。導入可能性の確認だけでも歓迎しています。
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
