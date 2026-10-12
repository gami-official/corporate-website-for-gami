import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CredentialsSection } from "@/components/credentials-section"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "会社概要・物流のご相談",
  description:
    "株式会社GAMIの会社概要と物流相談。大阪・福岡から全国対応。365日稼働、1坪からの保管、小ロット発送、検品・梱包・流通加工をご相談いただけます。",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "会社概要・物流のご相談｜株式会社GAMI",
    description:
      "365日、物流を止めない。まず返す。すぐ動く。1坪からスモールビジネスを支える株式会社GAMI。",
    url: "/company",
    type: "website",
  },
}

const companyInfo = [
  { label: "会社名", value: "株式会社GAMI" },
  { label: "代表取締役", value: "淵上 和博" },
  { label: "設立", value: "2025年6月17日" },
  {
    label: "主要事業",
    value:
      "物流運送事業・倉庫保管・発送代行・流通加工・内職作業",
  },
  {
    label: "開業・運営支援",
    value: "ヘッドスパFC事業",
  },
  {
    label: "メールアドレス",
    value: "k_fuchigami@gamigami.email",
  },
  { label: "TEL", value: "06-6115-9935" },
  { label: "FAX", value: "06-6115-9936" },
  {
    label: "古物商許可",
    value: "大阪府公安委員会許可 第62229R076690号",
  },
  {
    label: "化粧品製造業許可",
    value: "認証倉庫 許可番号 27CZ201072",
  },
  {
    label: "第一種貨物利用運送事業",
    value: "貨物自動車運送（近運自貨第1190号）",
  },
  {
    label: "インボイス登録番号",
    value: "T9120001277055",
  },
  {
    label: "所在地（大阪本社）",
    value: "〒570-0003 大阪府守口市大日町1-8-18",
  },
  {
    label: "所在地（福岡支社）",
    value: "〒819-0014 福岡県福岡市西区豊浜2-20-20-2",
  },
]

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://gamigami.net"
).replace(/\/$/, "")

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社GAMI",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description:
    "大阪・福岡を拠点に、物流運送、発送代行、倉庫保管、流通加工、内職作業に対応しています。",
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
        <section className="bg-zinc-950 px-5 py-14 text-white sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold tracking-widest text-amber-300">
              COMPANY
            </p>

            <h1 className="mt-5 text-3xl font-bold leading-snug sm:text-5xl">
              物流を支える。
              <br />
              ビジネスを前へ。
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
              365日、物流を止めない。まず返す。すぐ動く。
              <br />
              株式会社GAMIは、1坪からの保管、
              小ロット発送、検品・流通加工まで、
              事業の規模に合わせて物流を支えます。
            </p>

            <Link
              href="#contact"
              className="mt-7 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-amber-600 sm:w-auto"
            >
              物流の見積り・相談をする
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-20">
          <p className="text-xs font-bold tracking-widest text-amber-700">
            COMPANY INFO
          </p>
          <h2 className="mt-3 text-3xl font-bold">会社概要</h2>

          <dl className="mt-8 overflow-hidden rounded-3xl border border-black/10 bg-white">
            {companyInfo.map((row, index) => (
              <div
                key={row.label}
                className={`flex flex-col gap-2 px-5 py-5 sm:flex-row sm:gap-8 sm:px-8 ${
                  index < companyInfo.length - 1
                    ? "border-b border-black/5"
                    : ""
                }`}
              >
                <dt className="shrink-0 text-sm font-semibold text-zinc-500 sm:w-44">
                  {row.label}
                </dt>

                <dd className="min-w-0 break-words text-sm leading-7 text-zinc-800">
                  {row.label === "メールアドレス" ? (
                    <a
                      href={`mailto:${row.value}`}
                      className="underline underline-offset-4"
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
            className="mt-5 inline-flex min-h-[44px] items-center text-sm font-semibold text-amber-700 underline underline-offset-4"
          >
            ヘッドスパFC・開業支援はこちら →
          </Link>
        </section>

        <section className="border-y border-black/5 bg-amber-50 px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-amber-700">
              PHILOSOPHY
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              〜上へ、前へ。〜
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-600">
              小さな事業の最初の一歩から、
              取扱量が増えたときの物流まで。
              困ったときに相談できるパートナーであることを
              大切にしています。
            </p>

            <p className="mt-4 text-base leading-8 text-zinc-600">
              すぐに答えが出ないご相談でも、まずご連絡。
              商品、数量、作業、納期を確認し、
              現場に合う方法を一緒に考えます。
            </p>

            <p className="mt-4 text-xs leading-6 text-zinc-500">
              ※365日対応をご希望の場合は、
              作業内容や出荷条件を事前にご相談ください。
            </p>
          </div>
        </section>

        <CredentialsSection />

        <section
          id="contact"
          className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-amber-700">
              LOGISTICS CONTACT
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-snug sm:text-4xl">
              「これ頼める？」
              <br />
              まずはご相談ください。
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-600">
              倉庫保管・発送代行・検品・梱包・流通加工・
              スポット出荷・輸送手配など。
              物量が少ない場合や、開始時期が未定でも歓迎です。
            </p>

            <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-5">
              <p className="text-sm font-bold">
                内容欄に、分かる範囲でお知らせください。
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-zinc-600">
                <li>商品の種類・大きさ</li>
                <li>保管量・発送件数の目安</li>
                <li>お願いしたい作業・お困りごと</li>
                <li>開始希望時期・ご希望の納期</li>
              </ul>
              <p className="mt-3 text-xs leading-6 text-zinc-500">
                未定の項目は「未定」で大丈夫です。
              </p>
            </div>

            <a
              href="tel:0661159935"
              className="mt-6 flex min-h-[52px] items-center justify-center rounded-full border border-black/15 bg-white px-4 py-3 text-center text-sm font-bold transition hover:bg-amber-50"
            >
              急ぎの物流相談：06-6115-9935
            </a>

            <div className="mt-8 min-w-0">
              <ContactForm />
            </div>

            <p className="mt-6 text-sm leading-7 text-zinc-600">
              ヘッドスパFCのご相談は、
              <Link
                href="/franchise-contact"
                className="font-semibold text-amber-700 underline underline-offset-4"
              >
                FC専用フォーム
              </Link>
              をご利用ください。
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
