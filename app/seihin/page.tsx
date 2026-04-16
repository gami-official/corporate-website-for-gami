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
  CircleDollarSign,
  Clock,
  UserCheck,
  Gem,
  Shield,
  MapPin,
  Store,
  Truck,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/lib/images"
import { SeihinRecordCard } from "@/components/seihin-record-card"
import { FlowTabs } from "@/components/flow-tabs"

export const metadata: Metadata = {
  title: "遺品整理・生前整理｜大阪・福岡で整理から買取まで対応｜株式会社GAMI",
  description:
    "大阪・福岡で遺品整理・生前整理をご検討なら株式会社GAMIへ。遺品整理士・生前整理アドバイザーが在籍し、整理・片付け・仕分けから買取まで丁寧に対応。大阪は出張型、福岡本店は店舗型でご相談いただけます。",
  keywords: [
    "遺品整理 大阪",
    "生前整理 大阪",
    "遺品整理 福岡",
    "生前整理 福岡",
    "整理買取 大阪",
    "遺品整理士",
    "生前整理アドバイザー",
    "古物商",
    "出張買取 大阪",
    "店舗買取 福岡",
  ],
  openGraph: {
    title: "整理買取事業 | 株式会社GAMI",
    description:
      "整理から買取まで一括対応。遺品整理士・生前整理アドバイザーが在籍し、大切な想い出に寄り添いながら丁寧にサポートいたします。",
    url: "/seihin",
    type: "website",
  },
  alternates: {
    canonical: "/seihin",
  },
}

function renderDescription(
  text: string,
  noBreakPhrases?: string[]
): React.ReactNode {
  if (!noBreakPhrases?.length) return text
  const phrase = noBreakPhrases[0]
  if (!text.includes(phrase)) {
    return renderDescription(text, noBreakPhrases.slice(1))
  }
  const [before, after] = text.split(phrase)
  return (
    <>
      {renderDescription(before, noBreakPhrases.slice(1))}
      <span className="whitespace-nowrap">{phrase}</span>
      {renderDescription(after, noBreakPhrases.slice(1))}
    </>
  )
}

const whyChooseUs = [
  {
    icon: UserCheck,
    title: "遺品整理士・生前整理アドバイザー在籍",
    description:
      "丁寧な仕分けと寄り添う姿勢を大切に、残すもの・供養するもの・お譲りするものを心を込めて整理します。",
  },
  {
    icon: Clock,
    title: "最短即日対応も可能",
    description:
      "お急ぎのご依頼にも可能な限り対応。まずは現地確認・ご相談から柔軟に進めます。",
  },
  {
    icon: Shield,
    title: "無料査定・追加費用なし",
    description:
      "出張査定やご相談は無料。整理・買取ともに内容を確認した上でご案内するので安心です。",
  },
  {
    icon: Gem,
    title: "ブランド・貴金属・骨董も相談可能",
    description:
      "時計・宝石・着物・美術品など幅広く対応。価値のあるものは適正価格で買取いたします。",
  },
  {
    icon: CircleDollarSign,
    title: "整理の中で買取まで一括対応",
    description:
      "整理だけでなく、必要に応じて買取までまとめてご相談可能。処分費用の軽減につながるケースもあります。",
  },
]

const values = [
  {
    icon: Heart,
    title: "遺品整理・生前整理",
    description:
      "ご遺族やご本人の気持ちを最優先に、一つひとつの品物に込められた想い出を大切にしながら丁寧に整理いたします。",
  },
  {
    icon: HandHeart,
    title: "片付け・仕分け・整理 全般",
    description:
      "経験豊富なスタッフが礼節を持って作業にあたります。残すもの・供養するもの・お譲りするものを丁寧に整理いたします。",
    noBreakPhrases: ["残すもの・供養するもの・お譲りするもの"],
  },
  {
    icon: Recycle,
    title: "整理後の買取にも対応",
    description:
      "古物商許可を活かし、貴金属・時計などのお品物を一点一点丁寧に査定。価値のあるものは適正価格で買取し、ご家族の費用負担軽減にもつなげます。",
  },
  {
    icon: ShieldCheck,
    title: "資格保有の安心対応",
    description:
      "遺品整理士・生前整理アドバイザー・古物商許可を保有。法令を遵守した適正な作業をお約束します。",
  },
]

const supportTypes = [
  {
    icon: Truck,
    title: "整理買取専門店ゆう大阪店",
    sub: "出張型対応",
    description:
      "ご自宅へ伺い、遺品整理・生前整理から買取まで一括対応。運び出しやその場での確認が必要なケースに向いています。",
    point1: "大阪エリア中心に出張対応",
    point2: "整理から買取までまとめて相談可能",
    point3: "お急ぎの案件も相談しやすい",
  },
  {
    icon: Store,
    title: "整理買取専門店ゆう本店",
    sub: "店舗型対応",
    description:
      "ヘッドスパ専門店ゆうの店舗内で、完全予約制の店舗型対応。持ち込み査定や落ち着いて相談したい方に向いています。",
    point1: "福岡本店で完全予約制対応",
    point2: "持ち込みでじっくり相談できる",
    point3: "安心感を重視したい方におすすめ",
  },
]

const flowOrganize = [
  {
    step: "01",
    title: "ご相談・お見積り",
    description:
      "お電話・LINE・フォームからご連絡ください。現地見積りや事前相談は無料です。",
  },
  {
    step: "02",
    title: "作業日の調整",
    description:
      "ご都合に合わせて作業日を決定。急ぎのご依頼にも可能な限り対応します。",
  },
  {
    step: "03",
    title: "整理・片付け作業",
    description:
      "丁寧に整理を行います。残すもの・供養するもの・お譲りするものを分類します。",
    noBreakPhrases: ["残すもの・供養するもの・お譲りするもの"],
  },
  {
    step: "04",
    title: "完了・ご報告",
    description:
      "作業完了後、清掃まで行いご報告。必要に応じて供養の手配もいたします。",
  },
]

const flowBuy = [
  {
    step: "01",
    title: "お問い合わせ・事前確認",
    description:
      "お電話・LINE・フォームから品物の情報をお送りください。写真でも事前確認が可能です。",
  },
  {
    step: "02",
    title: "出張査定または店舗査定",
    description:
      "大阪は出張型、福岡本店は店舗型で対応。品物の状態を確認し、査定金額をご提示します。",
  },
  {
    step: "03",
    title: "金額のご確認・ご承諾",
    description:
      "提示金額にご納得いただけましたら買取成立。無理な押し付けは一切ありません。",
  },
  {
    step: "04",
    title: "お支払い",
    description:
      "内容確定後にお支払いとなります。量が多い場合や高額の場合も、状況に応じて丁寧にご案内いたします。",
  },
]

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gamigami.net"

const seihinServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "遺品整理・生前整理・整理買取サービス",
  provider: {
    "@type": "Organization",
    name: "株式会社GAMI",
    url: siteUrl,
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "大阪",
    },
    {
      "@type": "AdministrativeArea",
      name: "福岡",
    },
  ],
  description:
    "遺品整理・生前整理を入口に、整理・片付け・仕分けから買取まで一括対応するサービス。",
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
      name: "遺品整理・生前整理",
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
        <section className="relative flex min-h-[68vh] items-end">
          <Image
            src={IMAGES.heroSeihin}
            alt="遺品整理・生前整理"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:pt-32">
            <div className="max-w-2xl [text-shadow:0_1px_2px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.45)]">
              <p className="font-mono text-lg font-medium uppercase tracking-[0.3em] text-white sm:text-xl md:text-2xl">
                ORGANIZE / BUY
              </p>
              <h1 className="mt-3 font-serif text-2xl font-bold tracking-wider text-white sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
                遺品整理・生前整理
              </h1>
              <p className="mt-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium tracking-wider text-white backdrop-blur-sm">
                整理から買取まで一括対応
              </p>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed tracking-wide text-white sm:text-base">
                大切な想い出に寄り添いながら、整理・片付け・仕分けから買取まで丁寧にサポートいたします。
                大阪は出張型、福岡本店は店舗型でご相談いただけます。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:0661159935"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg"
                >
                  <Phone className="h-4 w-4" />
                  電話で相談する
                </a>
                <a
                  href="https://lin.ee/3QGIdCY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white/20"
                >
                  LINEで相談する
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/30 px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="安心と信頼"
                title="当社の整理サービスが選ばれる5つの理由"
                catchCopy=""
                className="mb-12"
              />
            </ScrollAnimate>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <ScrollAnimate key={item.title} className="h-full">
                  <div className="tech-card flex h-full flex-col rounded-2xl border-2 border-amber-500/20 bg-white p-6 shadow-lg transition-all hover:border-amber-500/40 hover:shadow-xl sm:p-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15">
                      <item.icon className="h-7 w-7 text-amber-600" />
                    </div>
                    <h3 className="mt-4 font-semibold tracking-wider text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-grow text-sm leading-relaxed tracking-wide text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gradient px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="対応方法"
                title="2つの対応方法からお選びいただけます"
                catchCopy="出張型と店舗型、それぞれの強みを活かしてご相談内容に合わせたご案内を行います。"
                className="mb-16"
              />
            </ScrollAnimate>

            <div className="grid gap-8 sm:grid-cols-2">
              {supportTypes.map((item) => (
                <ScrollAnimate key={item.title} className="h-full">
                  <div className="tech-card flex h-full flex-col rounded-2xl border border-amber-500/20 bg-white p-6 shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15">
                      <item.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                      {item.sub}
                    </p>
                    <h3 className="mt-2 text-lg font-bold tracking-wider text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-5 space-y-2 text-sm text-foreground">
                      <p>・{item.point1}</p>
                      <p>・{item.point2}</p>
                      <p>・{item.point3}</p>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gradient px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="サービス内容"
                title="遺品整理・生前整理を中心に対応"
                catchCopy="まずは整理のご相談から。必要に応じて買取までまとめて対応いたします。"
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
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-medium tracking-wider text-foreground">
                        {v.title}
                      </h3>
                      <p className="mt-1 flex-grow text-sm leading-relaxed tracking-wide text-muted-foreground">
                        {renderDescription(
                          v.description,
                          "noBreakPhrases" in v ? v.noBreakPhrases : undefined
                        )}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <a
                          href="tel:0661159935"
                          className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg active:scale-95"
                        >
                          <Phone className="h-4 w-4" />
                          まずは無料相談
                        </a>
                        <Link
                          href="/company#contact"
                          className="inline-flex items-center gap-2 rounded-full border-2 border-amber-500 bg-transparent px-4 py-2.5 text-sm font-bold text-amber-600 transition-colors hover:bg-amber-500/10"
                        >
                          フォームで問い合わせ
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-gradient-to-b from-navy/5 to-transparent px-4 py-20 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <ScrollAnimate>
              <div className="license-frame mb-10 rounded-xl p-6 text-center sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-navy">
                  古物商許可・資格
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

        <section className="border-t border-border bg-secondary/50 px-4 py-24 sm:px-6 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <ScrollAnimate>
              <SectionHeading
                sub="ご利用手順"
                title="ご利用の流れ"
                catchCopy=""
                className="mb-16"
              />
            </ScrollAnimate>
            <FlowTabs flowOrganize={flowOrganize} flowBuy={flowBuy} />
            <p className="mt-8 text-sm text-navy">
              ※遺品整理・生前整理のご相談を中心に、必要に応じて買取も対応いたします。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
          <ScrollAnimate>
            <SectionHeading
              sub="対応エリア・拠点"
              title="大阪・福岡で対応しています"
              catchCopy=""
              className="mb-10"
            />
          </ScrollAnimate>

          <ScrollAnimate>
            <div className="mx-auto max-w-lg">
              <div className="relative overflow-hidden rounded-2xl shadow-glass">
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

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2">
            <ScrollAnimate>
              <div className="tech-card rounded-2xl border border-amber-500/20 p-6 shadow-lg">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-amber-600" />
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
                    大阪店 / 出張型
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  〒570-0003
                  <br />
                  大阪府守口市大日町1-8-18
                </p>
                <a
                  href="tel:06-6115-9935"
                  className="mt-3 block text-sm font-medium text-foreground transition-colors hover:text-amber-600"
                >
                  TEL: 06-6115-9935
                </a>
                <a
                  href="https://lin.ee/3QGIdCY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-sm font-medium text-foreground transition-colors hover:text-amber-600"
                >
                  LINE相談
                </a>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  ご自宅へ伺い、整理から買取まで一括でご相談いただけます。
                </p>
              </div>
            </ScrollAnimate>

            <ScrollAnimate>
              <div className="tech-card rounded-2xl border border-amber-500/20 p-6 shadow-lg">
                <div className="flex items-center gap-2">
                  <Store className="h-5 w-5 text-amber-600" />
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
                    福岡本店 / 店舗型
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  〒819-0165
                  <br />
                  福岡県福岡市西区豊浜2-20-20-2
                </p>
                <a
                  href="tel:092-284-9392"
                  className="mt-3 block text-sm font-medium text-foreground transition-colors hover:text-amber-600"
                >
                  TEL: 092-284-9392
                </a>
                <a
                  href="https://line.me/ti/p/seirikaitoriyu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-sm font-medium text-foreground transition-colors hover:text-amber-600"
                >
                  LINE ID: seirikaitoriyu
                </a>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  ヘッドスパ専門店ゆうの店舗内で、完全予約制の店舗型対応を行っています。
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </section>

        <section className="section-gradient px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="実績"
                title="最近の買取実績"
                catchCopy="整理の中で査定できるものが見つかるケースもあります。まずはお気軽にご相談ください。"
                className="mb-12"
              />
            </ScrollAnimate>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  image: "/images/seihin-furniture-01.png.png",
                  item: "古い家具・食器類",
                  voice:
                    "思い出の食器棚とテーブルを査定していただきました。想定より高く買い取っていただき、感謝しています。",
                },
                {
                  image: "/images/seihin-furniture-02.png.png",
                  item: "ブランド時計",
                  voice:
                    "父の形見の時計を適正価格で引き取っていただき、安心しました。丁寧な対応ありがとうございました。",
                },
                {
                  image: "/images/seihin-furniture-03.png.png",
                  item: "趣味のコレクション",
                  voice:
                    "切手やコインなど、長年集めたコレクションをまとめて査定。専門的な知識で適正な価格を提示いただきました。",
                },
              ].map((record) => (
                <ScrollAnimate key={record.item} className="h-full">
                  <SeihinRecordCard
                    image={record.image}
                    item={record.item}
                    voice={record.voice}
                  />
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/50 px-4 py-16 sm:px-6">
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

        <section className="bg-[#2d3e5e] px-6 py-14 text-center text-white">
          <h2 className="mb-4.5 text-[26px] font-medium tracking-[0.08em]">
            遺品整理・生前整理 お見積り・ご相談
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[14.5px] leading-[1.9] text-[#d0d9e8]">
            整理から買取まで一括でご相談いただけます。まずはお気軽にお問い合わせください。無料でお見積り・ご相談いたします。
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
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.09 4.18 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 17z" />
              </svg>
              06-6115-9935
            </a>
            <a
              href="https://lin.ee/3QGIdCY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[50px] border-[1.5px] border-white/65 bg-transparent px-7 py-3.5 text-sm font-normal text-white transition-all hover:bg-white/15 hover:border-white"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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
