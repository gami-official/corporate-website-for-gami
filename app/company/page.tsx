
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CredentialsSection } from "@/components/credentials-section"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "会社概要・物流のご相談｜株式会社GAMI",
  description:
    "株式会社GAMIの会社概要と物流相談。大阪府守口市の自社倉庫「GAMI OSAKA BASE」を主軸に、福岡・神戸の協力ネットワークと連携。1坪からの保管、発送代行、検品・梱包・流通加工、輸送手配までご相談いただけます。",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "会社概要・物流のご相談｜株式会社GAMI",
    description:
      "大阪の自社倉庫を拠点に、全国の物流課題に対応。保管・発送代行・検品・流通加工など、株式会社GAMIにご相談ください。",
    url: "/company",
    type: "website",
  },
}

const companyInfo = [
  { label: "会社名", value: "株式会社GAMI" },
  { label: "代表", value: "代表取締役 淵上 和博" },
  { label: "設立", value: "2025年6月17日" },
  {
    label: "主要事業",
    value:
      "物流運送・倉庫保管・発送代行・流通加工・内職作業",
  },
  {
    label: "関連事業",
    value: "ヘッドスパFC・開業支援",
  },
  {
    label: "メール",
    value: "k_fuchigami@gamigami.email",
  },
  { label: "TEL", value: "06-6115-9935" },
  { label: "FAX", value: "06-6115-9936" },
  {
    label: "古物商",
    value: "大阪府公安委員会許可 第62229R076690号",
  },
  {
    label: "化粧品製造",
    value: "化粧品製造業許可認証倉庫 27CZ201072",
  },
  {
    label: "利用運送",
    value:
      "第一種貨物利用運送事業・貨物自動車運送（近運自貨第1190号）",
  },
  {
    label: "インボイス",
    value: "T9120001277055",
  },
  {
    label: "大阪本社",
    value: "〒570-0003 大阪府守口市大日町1-8-18",
  },
  {
    label: "福岡支社",
    value: "〒819-0014 福岡県福岡市西区豊浜2-20-20-2",
  },
]

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.gamigami.net"
).replace(/\/$/, "")

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社GAMI",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description:
    "大阪府守口市の自社倉庫を主軸に、福岡・神戸の協力ネットワークと連携。物流運送、発送代行、倉庫保管、流通加工、内職作業に対応しています。",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+81-6-6115-9935",
    contactType: "customer service",
    email: "k_fuchigami@gamigami.email",
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
  knowsAbout: [
    "物流運送",
    "発送代行",
    "倉庫保管",
    "流通加工",
    "内職作業",
    "ヘッドスパ開業支援",
  ],
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
    <div className="min-h-screen bg-[#fbfaf7] text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Header />

      <main>
        {/* HERO - VIDEO BACKGROUND */}
        <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero-logistics.png"
            className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
            aria-hidden="true"
          >
            <source
              src="/video/hero-logistics.mp4"
              type="video/mp4"
            />
          </video>

          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
            <p className="text-[11px] font-bold tracking-[0.2em] text-amber-300 sm:text-sm">
              COMPANY
            </p>

            <h1 className="mt-5 text-[30px] font-bold leading-[1.35] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">
                物流を支える。
              </span>
              <span className="block">
                ビジネスを前へ。
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-white/85 sm:text-base sm:leading-9">
              大阪の自社倉庫「GAMI OSAKA BASE」を主軸に、
              福岡・神戸の協力ネットワークと連携。
              1坪からの倉庫保管、小ロット発送、
              検品・梱包・流通加工まで、
              事業の規模に合わせた物流体制をご提案します。
            </p>

            <div className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-zinc-950 transition hover:bg-amber-400"
              >
                見積り・物流相談
              </Link>

              <a
                href="tel:0661159935"
                className="flex min-h-[52px] flex-1 items-center justify-center rounded-full border border-white/40 bg-black/20 px-6 py-3 text-center text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                電話で相談
              </a>
            </div>

            <p className="mt-8 text-xs font-medium tracking-[0.16em] text-white/60">
              OSAKA · FUKUOKA · KOBE
            </p>
          </div>
        </section>

        {/* LOGISTICS BASE */}
        <section className="border-b border-black/5 bg-white px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <p className="text-[11px] font-bold tracking-[0.16em] text-amber-700">
              OUR LOGISTICS BASE
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              大阪を拠点に、全国へ。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              株式会社GAMIは、大阪府守口市の自社倉庫を
              物流事業の中心拠点としています。
              保管・発送代行・検品・流通加工などを提供し、
              案件に応じて福岡・神戸の物流協力会社と連携します。
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <article className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
                <p className="text-[10px] font-bold tracking-[0.14em] text-amber-800">
                  MAIN BASE / OWN WAREHOUSE
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  OSAKA
                </h3>

                <p className="mt-2 text-sm font-semibold">
                  GAMI OSAKA BASE
                </p>

                <p className="mt-3 text-xs leading-6 text-zinc-600">
                  大阪府守口市大日町1-8-18。
                  約100坪の自社倉庫を主軸に、
                  保管・検品・流通加工・発送業務を展開。
                </p>

                <Link
                  href="/warehouse"
                  className="mt-4 inline-flex min-h-[40px] items-center text-xs font-bold text-amber-800 underline underline-offset-4"
                >
                  大阪の物流拠点を見る →
                </Link>
              </article>

              <article className="rounded-2xl border border-black/10 bg-[#fbfaf7] p-5">
                <p className="text-[10px] font-bold tracking-[0.14em] text-zinc-500">
                  PARTNER NETWORK
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  FUKUOKA
                </h3>

                <p className="mt-2 text-sm font-semibold">
                  株式会社マックスエクスプレス
                </p>

                <p className="mt-3 text-xs leading-6 text-zinc-600">
                  福岡の物流協力会社。
                  案件規模や作業内容に応じて連携し、
                  柔軟な物流体制を構築します。
                </p>
              </article>

              <article className="rounded-2xl border border-black/10 bg-[#fbfaf7] p-5">
                <p className="text-[10px] font-bold tracking-[0.14em] text-zinc-500">
                  PARTNER NETWORK
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  KOBE
                </h3>

                <p className="mt-2 text-sm font-semibold">
                  株式会社エスグロー
                </p>

                <p className="mt-3 text-xs leading-6 text-zinc-600">
                  神戸の物流協力会社。
                  作業内容や配送条件に応じて連携し、
                  物流ネットワークを補完します。
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* COMPANY INFO */}
        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
          <p className="text-[11px] font-bold tracking-[0.12em] text-amber-700">
            COMPANY INFO
          </p>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            会社概要
          </h2>

          <dl className="mt-5 overflow-hidden rounded-2xl border border-black/10 bg-white">
            {companyInfo.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-[82px_minmax(0,1fr)] gap-3 px-4 py-3 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6 sm:px-6 sm:py-4 ${
                  index < companyInfo.length - 1
                    ? "border-b border-black/5"
                    : ""
                }`}
              >
                <dt className="text-xs font-semibold leading-6 text-zinc-500 sm:text-sm">
                  {row.label}
                </dt>

                <dd className="min-w-0 break-words text-sm leading-6 text-zinc-800 sm:leading-7">
                  {row.label === "メール" ? (
                    <a
                      href={`mailto:${row.value}`}
                      className="break-all underline underline-offset-4"
                    >
                      {row.value}
                    </a>
                  ) : row.label === "TEL" ? (
                    <a
                      href="tel:0661159935"
                      className="underline underline-offset-4"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href="/headspa-franchise"
            className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold text-amber-700 underline underline-offset-4"
          >
            ヘッドスパFC・開業支援 →
          </Link>
        </section>

        {/* PHILOSOPHY */}
        <section className="border-y border-black/5 bg-amber-50 px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl sm:grid sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-8">
            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] text-amber-700">
                PHILOSOPHY
              </p>

              <h2 className="mt-2 text-xl font-bold leading-7">
                〜上へ、前へ。〜
              </h2>
            </div>

            <div className="mt-3 text-sm leading-7 text-zinc-600 sm:mt-0">
              <p>
                小さな事業の最初の一歩から、
                取扱量が増えたときまで。
                困ったときに相談できる物流パートナーを目指します。
              </p>

              <p className="mt-2">
                すぐに答えが出ないご相談でも、まずご連絡。
                商品・数量・作業・納期を確認し、
                現場に合う方法を一緒に考えます。
              </p>

              <p className="mt-3 text-xs leading-6 text-zinc-500">
                ※土日祝の作業・出荷は事前相談により、
                対応内容や条件を個別に確認いたします。
              </p>
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <CredentialsSection />

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-bold tracking-[0.12em] text-amber-700">
              LOGISTICS CONTACT
            </p>

            <h2 className="mt-2 text-[23px] font-bold leading-[1.5] tracking-tight sm:text-4xl">
              <span className="inline-block">
                「これ頼める？」
              </span>
              <span className="inline-block">
                まずはご相談を。
              </span>
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-600">
              倉庫保管・発送代行・検品・梱包・流通加工・
              輸送手配など。
              小ロットやスポット案件、
              開始時期が未定のご相談も歓迎しています。
            </p>

            <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50 p-4">
              <p className="text-sm font-bold leading-6">
                分かる範囲の記入で大丈夫です。
              </p>

              <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm leading-6 text-zinc-600">
                <li>・商品・大きさ</li>
                <li>・保管量・発送数</li>
                <li>・作業・お困りごと</li>
                <li>・希望時期・納期</li>
              </ul>
            </div>

            <a
              href="tel:0661159935"
              className="mt-4 flex min-h-[48px] items-center justify-center rounded-full border border-black/15 bg-white px-3 py-3 text-center text-sm font-bold transition hover:bg-amber-50"
            >
              急ぎの相談：06-6115-9935
            </a>

            <div className="mt-5 min-w-0">
              <ContactForm />
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              ヘッドスパFCのご相談は、
              <Link
                href="/franchise-contact"
                className="font-semibold text-amber-700 underline underline-offset-4"
              >
                FC専用フォーム
              </Link>
              へ。
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
