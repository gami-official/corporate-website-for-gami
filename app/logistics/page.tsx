import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "物流サービス｜発送代行・倉庫保管・流通加工",
  description:
    "大阪・福岡から全国対応。365日稼働、1坪からの倉庫保管、小ロット発送、検品・梱包・シール貼り・セット組み・輸送手配まで。株式会社GAMIがスモールビジネスの物流を支えます。",
  alternates: {
    canonical: "/logistics",
  },
}

const services = [
  {
    number: "01",
    title: "倉庫保管",
    text: "1坪からの小規模保管、EC在庫、一時保管に対応。商品・数量・期間に合わせてご相談します。",
  },
  {
    number: "02",
    title: "発送代行",
    text: "ピッキング・梱包・発送を代行。出荷頻度や販売方法に合わせて運用をご提案します。",
  },
  {
    number: "03",
    title: "検品・流通加工",
    text: "検品、シール貼り、セット組み、封入、梱包など。必要な作業だけでもご相談ください。",
  },
  {
    number: "04",
    title: "輸送手配",
    text: "第一種貨物利用運送事業の登録を活かし、商品・数量・配送先に合う輸送方法をご相談します。",
  },
]

const concerns = [
  "発送が追いつかない",
  "保管場所が足りない",
  "EC物流を外注したい",
  "加工だけ任せたい",
  "繁忙期を手伝ってほしい",
  "土日祝も出荷したい",
]

const strengths = [
  {
    title: "365日対応",
    text: "休日出荷や繁忙期も、事前に決めた運用条件に合わせて対応。",
  },
  {
    title: "まず返す",
    text: "急な相談にも、まず状況を確認。対応可否と進め方を迅速にご案内。",
  },
  {
    title: "小ロット歓迎",
    text: "段ボール数箱の保管や少量発送から、事業の成長に合わせて支援。",
  },
  {
    title: "作業をまとめる",
    text: "保管・検品・加工・梱包・発送まで、一括でも一部だけでも相談可能。",
  },
]

const workItems = [
  "検品",
  "梱包",
  "シール貼り",
  "セット組み",
  "封入",
  "箱組立",
  "内職作業",
  "スポット出荷",
]

const industries = [
  "EC・通販",
  "美容・化粧品",
  "アパレル",
  "食品関連",
  "輸入商材",
  "ふるさと納税",
]

const gallery = [
  {
    src: "/images/warehouse-01.png",
    alt: "GAMIの倉庫全景",
  },
  {
    src: "/images/warehouse-03.png",
    alt: "梱包作業スペース",
  },
  {
    src: "/images/warehouse-05.png",
    alt: "出荷前商品の保管",
  },
  {
    src: "/images/warehouse-07.png",
    alt: "箱組立作業",
  },
]

const steps = [
  {
    title: "ご相談",
    text: "商品・物量・作業内容・希望時期をお知らせください。",
  },
  {
    title: "条件確認",
    text: "保管量・出荷頻度・配送条件を整理します。",
  },
  {
    title: "お見積り",
    text: "必要な作業と運用条件に合わせてご提案します。",
  },
  {
    title: "運用開始",
    text: "入庫・加工・出荷の手順を決めて開始します。",
  },
]

const container = "mx-auto max-w-6xl px-4 sm:px-6"
const sectionSpace = "py-9 sm:py-14"
const eyebrow =
  "text-[11px] font-bold tracking-[0.12em] text-amber-700"
const heading =
  "mt-2 text-[23px] font-bold leading-[1.5] tracking-tight sm:text-4xl"
const primaryButton =
  "inline-flex min-h-[48px] items-center justify-center rounded-full bg-amber-500 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-amber-600"

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-zinc-900">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
          <img
            src="/images/hero-logistics.png"
            alt=""
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />

          <div className={`${container} py-9 sm:py-16`}>
            <p className="text-[11px] font-bold tracking-[0.12em] text-amber-300">
              LOGISTICS SERVICES
            </p>

            <h1 className="mt-3 text-[28px] font-bold leading-[1.5] tracking-tight sm:text-5xl">
              <span className="inline-block">保管から発送まで、</span>
              <span className="inline-block">GAMIへ。</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              365日対応。まず返す。1坪から。
              小ロット発送・検品・流通加工・輸送手配まで、
              必要な業務からご相談いただけます。
            </p>

            <div className="mt-5 grid max-w-lg grid-cols-[1.35fr_1fr] gap-2">
              <Link
                href="/company#contact"
                className={primaryButton}
              >
                見積り・物流相談
              </Link>

              <a
                href="tel:0661159935"
                className="flex min-h-[48px] items-center justify-center rounded-full border border-white/40 px-3 py-3 text-sm font-bold transition hover:bg-white/10"
              >
                電話で相談
              </a>
            </div>

            <p className="mt-3 max-w-xl text-[11px] leading-5 text-white/70">
              ※365日対応は、作業内容・締切・出荷条件を事前にご相談ください。
            </p>
          </div>
        </section>

        <section className={`bg-amber-50 ${sectionSpace}`}>
          <div className={container}>
            <p className={eyebrow}>YOUR CHALLENGES</p>
            <h2 className={heading}>こんなお困りごとに。</h2>

            <ul className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-3">
              {concerns.map((item) => (
                <li
                  key={item}
                  className="flex min-w-0 items-start gap-2 rounded-xl border border-amber-100 bg-white p-3"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-amber-600"
                  >
                    ✓
                  </span>
                  <span className="text-sm font-semibold leading-6">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={sectionSpace}>
          <div className={container}>
            <p className={eyebrow}>SERVICES</p>
            <h2 className={heading}>
              <span className="inline-block">必要な作業から、</span>
              <span className="inline-block">まとめて任せられる。</span>
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
              {services.map((item) => (
                <article
                  key={item.number}
                  className="min-w-0 rounded-2xl border border-black/10 bg-white p-3 sm:p-5"
                >
                  <p className="text-xs font-bold text-amber-600">
                    {item.number}
                  </p>
                  <h3 className="mt-2 text-base font-bold leading-6 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-amber-50 p-4 sm:p-5">
              <h3 className="text-base font-bold">
                細かな手作業にも対応。
              </h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {workItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold leading-6"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={`bg-zinc-950 text-white ${sectionSpace}`}>
          <div className={container}>
            <p className="text-[11px] font-bold tracking-[0.12em] text-amber-300">
              WHY GAMI
            </p>
            <h2 className={heading}>
              <span className="inline-block">小さなご依頼も、</span>
              <span className="inline-block">急なご相談も。</span>
            </h2>

            <div className="mt-5 grid gap-2 md:grid-cols-2">
              {strengths.map((item) => (
                <article
                  key={item.title}
                  className="grid grid-cols-[88px_minmax(0,1fr)] items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-4"
                >
                  <h3 className="text-sm font-bold leading-6 text-amber-300">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/80">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/company#contact"
              className={`${primaryButton} mt-5`}
            >
              対応できるか相談する
            </Link>
          </div>
        </section>

        <section className={sectionSpace}>
          <div className={container}>
            <p className={eyebrow}>INDUSTRIES</p>
            <h2 className={heading}>幅広い事業の物流を支援。</h2>

            <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {industries.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-black/10 bg-white px-3 py-3 text-center text-sm font-semibold leading-6"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              ふるさと納税返礼品の発送、美容商材の検品・セット組み、
              EC・アパレル商品の保管・発送などに対応しています。
              商品ごとの保管条件・作業条件は個別に確認します。
            </p>
          </div>
        </section>

        <section className={`bg-amber-50 ${sectionSpace}`}>
          <div className={container}>
            <p className={eyebrow}>WAREHOUSE</p>
            <h2 className={heading}>
              <span className="inline-block">大阪・守口の倉庫から、</span>
              <span className="inline-block">全国へ。</span>
            </h2>

            <div className="mt-5 overflow-hidden rounded-2xl border border-amber-100 bg-white">
              <div className="grid grid-cols-[32%_minmax(0,1fr)] sm:grid-cols-2">
                <img
                  src="/images/warehouse-moriguchi.jpg"
                  alt="GAMI守口倉庫の外観"
                  width={960}
                  height={600}
                  loading="lazy"
                  className="h-full min-h-[160px] w-full object-cover"
                />
                <div className="min-w-0 p-4 sm:p-6">
                  <h3 className="text-base font-bold leading-6 sm:text-xl">
                    約100坪・1坪から相談可能
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    大阪府守口市大日町1-8-18。
                    保管・検品・加工・梱包・発送まで、
                    商品と物量に合わせて運用します。
                  </p>
                  <Link
                    href="/warehouse"
                    className="mt-2 inline-flex min-h-[44px] items-center text-sm font-semibold text-amber-800 underline underline-offset-4"
                  >
                    倉庫紹介を見る →
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              福岡の物流拠点や提携ネットワークとも連携。
              配送先・数量・必要な作業に合わせて、
              発送・輸送方法をご相談いただけます。
            </p>
          </div>
        </section>

        <section className={sectionSpace}>
          <div className={container}>
            <p className={eyebrow}>GALLERY</p>
            <h2 className={heading}>実際の倉庫・作業風景。</h2>

            <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {gallery.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-xl border border-black/10 bg-white"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={640}
                    height={480}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="px-3 py-2 text-xs leading-5 text-zinc-600">
                    {image.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={`bg-white ${sectionSpace}`}>
          <div className={container}>
            <p className={eyebrow}>FLOW</p>
            <h2 className={heading}>ご相談から、運用開始まで。</h2>

            <ol className="mt-5 grid gap-2 md:grid-cols-2">
              {steps.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[26px_70px_minmax(0,1fr)] items-start gap-2 rounded-xl border border-black/10 bg-[#fbfaf7] p-4"
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

            <div className="mt-5 rounded-2xl bg-amber-50 p-4 sm:p-6">
              <h3 className="text-base font-bold leading-7">
                条件が未定でも、お気軽に。
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                商品・数量・作業内容・希望時期を、分かる範囲で
                お知らせください。小ロットやスポット案件も歓迎です。
              </p>

              <div className="mt-4 grid max-w-lg grid-cols-[1.35fr_1fr] gap-2">
                <Link
                  href="/company#contact"
                  className={primaryButton}
                >
                  見積り・物流相談
                </Link>
                <a
                  href="tel:0661159935"
                  className="flex min-h-[48px] items-center justify-center rounded-full border border-black/15 bg-white px-3 py-3 text-sm font-bold transition hover:bg-amber-100"
                >
                  電話で相談
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
