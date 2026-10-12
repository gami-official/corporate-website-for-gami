import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IMAGES } from "@/lib/images"

export const metadata: Metadata = {
  title: "ヘッドスパ専門店ゆう｜FC・開業支援",
  description:
    "ヘッドスパ専門店ゆう本店の技術指導と、株式会社GAMIの経営・集客支援。ウェット・ドライの導入、技術研修、メニュー設計、ホームページ・予約導線まで開業を支援します。",
  alternates: {
    canonical: "/headspa-franchise",
  },
  openGraph: {
    title: "ヘッドスパ専門店ゆう｜FC・開業支援",
    description:
      "技術指導はゆう本店、経営・集客支援はGAMI。ヘッドスパの開業・導入を個別にご相談いただけます。",
    url: "/headspa-franchise",
    type: "website",
  },
}

const supportItems = [
  {
    title: "技術・接客研修",
    text: "ゆう本店による技術指導。カウンセリングと接客の流れも学びます。",
  },
  {
    title: "メニュー・価格",
    text: "施術内容、価格帯、客層、運営時間に合わせて設計を支援します。",
  },
  {
    title: "経営・運営相談",
    text: "開業準備から導入後の運営・改善まで、GAMIが相談に対応します。",
  },
  {
    title: "サイト・集客",
    text: "プランに応じてサイト制作、SEO・MEO初期設計、予約導線を整えます。",
  },
]

const formats = [
  {
    title: "ウェット",
    subtitle: "美容師免許取得者向け",
    text: "シャンプー台を活かした導入。既存美容室への追加メニューや、頭皮・髪のケアを重視する店舗向け。",
  },
  {
    title: "ドライ",
    subtitle: "省スペースでの導入",
    text: "新規開業や既存の空きスペース活用を相談可能。施術内容・必要設備・運営体制を個別に確認します。",
  },
]

const priceRows = [
  {
    label: "初期費用",
    basic: "55万円〜",
    full: "110万円〜",
  },
  {
    label: "月額",
    basic: "3.3万円〜",
    full: "5.5万円〜",
  },
  {
    label: "技術・接客研修",
    basic: "含む",
    full: "含む",
  },
  {
    label: "価格・メニュー設計",
    basic: "含む",
    full: "含む",
  },
  {
    label: "運営・経営相談",
    basic: "含む",
    full: "含む",
  },
  {
    label: "定期オンライン相談",
    basic: "含む",
    full: "含む",
  },
  {
    label: "導入後の改善支援",
    basic: "含む",
    full: "含む",
  },
  {
    label: "ホームページ制作",
    basic: "別途相談",
    full: "含む",
  },
  {
    label: "SEO・MEO初期設計",
    basic: "別途相談",
    full: "含む",
  },
  {
    label: "予約・問い合わせ導線",
    basic: "別途相談",
    full: "含む",
  },
]

const options = [
  "追加技術研修",
  "現地導入サポート",
  "LP追加制作",
  "Googleマップ対策",
  "撮影・写真の相談",
  "SNS・広告運用相談",
]

const flow = [
  {
    title: "無料相談",
    text: "希望エリア・経験・予算・開業時期を確認。",
  },
  {
    title: "個別提案",
    text: "導入形態と必要な支援内容をご案内。",
  },
  {
    title: "契約・設計",
    text: "費用・支援範囲・運営条件を確認。",
  },
  {
    title: "研修・準備",
    text: "技術研修、接客、メニュー、導線を整備。",
  },
  {
    title: "開業・支援",
    text: "導入後も運営相談と改善をサポート。",
  },
]

const faqs = [
  {
    question: "未経験でも相談できますか？",
    answer:
      "はい。経験や希望する施術内容を確認し、必要な研修・設備・運営体制を個別にご案内します。",
  },
  {
    question: "ウェット導入は誰でもできますか？",
    answer:
      "現在は美容師免許取得者向けの導入プランです。資格・設備・施術内容を確認してご案内します。",
  },
  {
    question: "サイト制作も依頼できますか？",
    answer:
      "はい。フルサポートプランではホームページ制作とSEO・MEO初期設計、予約・問い合わせ導線の整備を含みます。具体的な範囲は個別に確認します。",
  },
  {
    question: "月額費用には何が含まれますか？",
    answer:
      "プランに応じた運営・経営相談などのサポートをご案内しています。支援範囲や追加費用は契約前に確認します。",
  },
  {
    question: "どの地域でも相談できますか？",
    answer:
      "全国からご相談いただけます。希望エリアと既存店との関係を確認し、加盟条件をご案内します。",
  },
]

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://gamigami.net"
).replace(/\/$/, "")

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ヘッドスパ専門店ゆう FC・開業支援",
  serviceType: "ヘッドスパフランチャイズ・開業支援",
  url: `${siteUrl}/headspa-franchise`,
  provider: {
    "@type": "Organization",
    name: "株式会社GAMI",
    url: siteUrl,
  },
  areaServed: "日本",
  description:
    "ゆう本店の技術指導とGAMIの経営・集客支援を組み合わせた開業サポート。",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

const container = "mx-auto max-w-6xl px-4 sm:px-6"
const sectionSpace = "py-9 sm:py-14"
const eyebrow =
  "text-[11px] font-bold tracking-[0.12em] text-amber-700"
const heading =
  "mt-2 text-[23px] font-bold leading-[1.5] tracking-tight sm:text-4xl"
const primaryButton =
  "inline-flex min-h-[48px] items-center justify-center rounded-full bg-amber-500 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-amber-600"

export default function HeadSpaFranchisePage() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Header />

      <main>
        <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
          <img
            src={IMAGES.heroSpa}
            alt=""
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

          <div className={`${container} py-9 sm:py-16`}>
            <p className="text-[11px] font-bold tracking-[0.12em] text-amber-300">
              HEAD SPA FRANCHISE
            </p>

            <h1 className="mt-3 text-[28px] font-bold leading-[1.5] tracking-tight sm:text-5xl">
              <span className="inline-block">ヘッドスパ専門店ゆう</span>
              <span className="mt-1 block">FC・開業支援</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              技術指導はゆう本店、経営・集客支援はGAMI。
              施術だけでなく、メニュー・接客・運営・予約導線まで
              開業を支援します。
            </p>

            <p className="mt-4 text-xs font-semibold text-amber-300">
              先着5社限定で個別相談を受付中
            </p>

            <div className="mt-5 grid max-w-lg grid-cols-[1.35fr_1fr] gap-2">
              <Link
                href="/franchise-contact"
                className={primaryButton}
              >
                無料で開業相談
              </Link>
              <a
                href="https://www.yuheadspa.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] items-center justify-center rounded-full border border-white/40 px-3 py-3 text-center text-sm font-bold transition hover:bg-white/10"
              >
                ゆう公式サイト ↗
              </a>
            </div>
          </div>
        </section>

        <section className={sectionSpace}>
          <div className={container}>
            <p className={eyebrow}>BRAND & SUPPORT</p>
            <h2 className={heading}>
              <span className="inline-block">技術と経営、</span>
              <span className="inline-block">両方を支える。</span>
            </h2>

            <div className="mt-5 overflow-hidden rounded-2xl border border-black/10 bg-white">
              <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-3 p-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:p-6">
                <h3 className="text-sm font-bold leading-6 text-amber-700">
                  ゆう本店
                </h3>
                <p className="text-sm leading-7 text-zinc-600">
                  福岡の完全個室・1日3名限定の店舗。
                  実店舗の技術・接客・空間づくりをもとに研修します。
                </p>
              </div>
              <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-3 border-t border-black/5 p-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:p-6">
                <h3 className="text-sm font-bold leading-6 text-amber-700">
                  GAMI
                </h3>
                <p className="text-sm leading-7 text-zinc-600">
                  開業設計・運営相談・サイト制作・集客・予約導線を支援。
                  支援内容はプランに応じてご案内します。
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {supportItems.map((item) => (
                <article
                  key={item.title}
                  className="min-w-0 rounded-2xl border border-black/10 bg-white p-3 sm:p-5"
                >
                  <h3 className="text-base font-bold leading-6">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`bg-amber-50 ${sectionSpace}`}>
          <div className={container}>
            <p className={eyebrow}>WET / DRY</p>
            <h2 className={heading}>導入形態は、希望に合わせて。</h2>

            <div className="mt-5 grid grid-cols-2 gap-2 md:gap-4">
              {formats.map((item) => (
                <article
                  key={item.title}
                  className="min-w-0 rounded-2xl border border-amber-100 bg-white p-3 sm:p-6"
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-xs font-semibold leading-5 text-amber-700">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionSpace}>
          <div className={container}>
            <p className={eyebrow}>PLAN / PRICE</p>
            <h2 className={heading}>支援内容で選ぶ、2プラン。</h2>

            <div className="mt-5 overflow-hidden rounded-2xl border border-black/10 bg-white">
              <table className="w-full table-fixed border-collapse text-left text-sm">
                <caption className="sr-only">
                  FC基本導入とフルサポートの料金・支援内容比較
                </caption>
                <thead className="bg-zinc-950 text-white">
                  <tr>
                    <th
                      scope="col"
                      className="w-[38%] px-3 py-4 font-semibold"
                    >
                      項目
                    </th>
                    <th
                      scope="col"
                      className="w-[31%] px-2 py-4 text-center font-semibold"
                    >
                      基本導入
                    </th>
                    <th
                      scope="col"
                      className="w-[31%] px-2 py-4 text-center font-semibold text-amber-300"
                    >
                      フル支援
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-t border-black/10"
                    >
                      <th
                        scope="row"
                        className="break-words px-3 py-3 text-xs font-semibold leading-6 text-zinc-700 sm:text-sm"
                      >
                        {row.label}
                      </th>
                      <td className="break-words px-2 py-3 text-center text-sm leading-6">
                        {row.basic}
                      </td>
                      <td className="break-words bg-amber-50/60 px-2 py-3 text-center text-sm font-semibold leading-6">
                        {row.full}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs leading-6 text-zinc-500">
              ※現在の掲載料金です。導入形態・支援範囲により個別見積り。
              税の取扱い、店舗設備・物件・商材等の費用、追加支援の料金は、
              契約前に確認します。
            </p>

            <details className="mt-4 rounded-xl border border-black/10 bg-white p-4">
              <summary className="cursor-pointer text-sm font-bold leading-6">
                追加支援・オプションを見る
              </summary>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {options.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-amber-50 px-3 py-2 text-sm leading-6"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </details>

            <Link
              href="/franchise-contact"
              className={`${primaryButton} mt-5`}
            >
              自分に合うプランを相談する
            </Link>
          </div>
        </section>

        <section className={`bg-white ${sectionSpace}`}>
          <div className={container}>
            <p className={eyebrow}>FLOW</p>
            <h2 className={heading}>相談から開業まで。</h2>

            <ol className="mt-5 grid gap-2 md:grid-cols-2">
              {flow.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[26px_76px_minmax(0,1fr)] items-start gap-2 rounded-xl border border-black/10 bg-[#fbfaf7] p-4"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">
                    {index + 1}
                  </span>
                  <h3 className="text-sm font-bold leading-6">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-zinc-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={sectionSpace}>
          <div className={`${container} max-w-4xl`}>
            <p className={eyebrow}>FAQ</p>
            <h2 className={heading}>よくあるご質問。</h2>

            <div className="mt-5 space-y-2">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-black/10 bg-white px-4 py-3"
                >
                  <summary className="cursor-pointer text-sm font-bold leading-7">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={`bg-zinc-950 text-white ${sectionSpace}`}>
          <div className={container}>
            <p className="text-[11px] font-bold tracking-[0.12em] text-amber-300">
              FRANCHISE CONTACT
            </p>
            <h2 className={heading}>
              <span className="inline-block">開業のイメージから、</span>
              <span className="inline-block">相談できます。</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
              希望エリア・経験・予算・時期を、分かる範囲で。
              未定の項目も一緒に整理します。
              先着5社限定で個別相談を受付中です。
            </p>

            <div className="mt-5 grid max-w-lg grid-cols-[1.35fr_1fr] gap-2">
              <Link
                href="/franchise-contact"
                className={primaryButton}
              >
                無料で開業相談
              </Link>
              <a
                href="https://lin.ee/3QGIdCY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] items-center justify-center rounded-full border border-white/40 px-3 py-3 text-center text-sm font-bold transition hover:bg-white/10"
              >
                LINEで相談
              </a>
            </div>

            <a
              href="https://www.yuheadspa.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold text-white/85 underline underline-offset-4"
            >
              ヘッドスパ専門店ゆう 公式サイト ↗
            </a>

            <p className="mt-2 text-xs leading-6 text-white/65">
              店舗メニュー・施術予約は、ゆう公式サイトへ。
              開業のご相談段階では費用はかかりません。
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
