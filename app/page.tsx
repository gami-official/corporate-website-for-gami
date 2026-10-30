
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title:
    "発送代行・検品・物流倉庫｜福岡を主軸に全国対応｜株式会社GAMI",
  description:
    "福岡を主軸に、大阪・神戸の物流ネットワークと連携する株式会社GAMI。倉庫保管、検品、流通加工、梱包、発送代行から大規模な封入・一斉発送まで、小ロット・スポット案件もご相談ください。",
  alternates: {
    canonical: "/",
  },
}

const container = "mx-auto max-w-6xl px-4 sm:px-6"

const label =
  "text-[11px] font-bold tracking-[0.2em] text-amber-700"

const labelDark =
  "text-[11px] font-bold tracking-[0.2em] text-amber-400"

const heading =
  "mt-3 text-[27px] font-bold leading-[1.45] tracking-tight sm:text-4xl"

const primaryButton =
  "inline-flex min-h-[50px] items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-zinc-950 transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"

const concerns = [
  "段ボール数箱の保管",
  "小ロットの発送代行",
  "EC商品の保管・出荷",
  "土日祝の出荷相談",
  "検品・梱包だけの依頼",
  "急な出荷・繁忙期対応",
  "大量の封入・セット組み・発送",
]

const strengths = [
  {
    number: "01",
    title: "まず返す。すぐ動く。",
    text: "ご相談には迅速に対応。すぐに結論が出ない案件でも、まず状況を確認し、実現できる方法を考えます。",
  },
  {
    number: "02",
    title: "小ロットから大規模まで。",
    text: "段ボール数箱の保管から、大量の封入・梱包・一斉発送まで。規模に応じた運用をご提案します。",
  },
  {
    number: "03",
    title: "福岡を主軸に全国対応。",
    text: "福岡を中心に、大阪の自社拠点と神戸の提携ネットワークを活用。案件に応じて柔軟に連携します。",
  },
  {
    number: "04",
    title: "365日対応の物流体制。",
    text: "土日祝の出荷や繁忙期の作業にも、事前に取り決めた条件・体制に応じて対応します。",
  },
]

const services = [
  {
    number: "01",
    english: "WAREHOUSING",
    title: "倉庫保管",
    text: "1坪からの保管相談、EC在庫、一時保管など。商品・物量・期間に応じた保管体制をご提案します。",
  },
  {
    number: "02",
    english: "FULFILLMENT",
    title: "発送代行",
    text: "ピッキング・梱包・発送まで。ECの継続出荷から企業向けの発送業務までご相談いただけます。",
  },
  {
    number: "03",
    english: "INSPECTION & PROCESSING",
    title: "検品・流通加工",
    text: "商品検品、シール貼り、セット組み、封入、包装など。必要な工程だけのご依頼にも対応します。",
  },
  {
    number: "04",
    english: "BULK OPERATIONS",
    title: "大量発送・スポット案件",
    text: "キャンペーン商品の一斉発送、大量封入、繁忙期の作業など、案件に合わせた体制を検討します。",
  },
]

const achievements = [
  {
    title: "ふるさと納税",
    text: "返礼品の保管・加工・梱包・発送",
  },
  {
    title: "美容商材",
    text: "容器・パッケージの検品、セット組み",
  },
  {
    title: "EC・アパレル",
    text: "商品保管・梱包・継続的な発送",
  },
]

const steps = [
  {
    number: "01",
    title: "お問い合わせ",
    text: "商品・数量・希望時期・お困りごとをお知らせください。",
  },
  {
    number: "02",
    title: "お見積り・運用設計",
    text: "作業内容・保管条件・発送頻度などを確認します。",
  },
  {
    number: "03",
    title: "業務開始",
    text: "入庫・作業・出荷の手順を決めて運用を開始します。",
  },
]

const faqs = [
  {
    question: "発送件数が少なくても相談できますか？",
    answer:
      "はい。小ロット発送やECを始めたばかりの事業も歓迎しています。商品や数量に応じて対応方法をご相談します。",
  },
  {
    question: "段ボール数箱だけの保管も可能ですか？",
    answer:
      "はい。1坪程度の小規模保管もご相談いただけます。商品の大きさ・数量・保管期間をお知らせください。",
  },
  {
    question: "土日祝の発送にも対応していますか？",
    answer:
      "365日対応の物流体制があります。作業内容、出荷条件、締切、運用体制などは事前のご相談となります。",
  },
  {
    question: "検品や梱包だけでも依頼できますか？",
    answer:
      "はい。検品、シール貼り、セット組み、封入など、必要な工程だけでもご相談いただけます。",
  },
  {
    question: "大量の封入・一斉発送も相談できますか？",
    answer:
      "はい。数量、納期、商品仕様、配送条件などを確認し、自社拠点と協力パートナーによる対応体制をご提案します。",
  },
  {
    question: "海外企業から日本国内への発送も依頼できますか？",
    answer:
      "はい。日本国内での保管、梱包、セット組み、発送などについてご相談いただけます。案件の詳細を確認したうえでご案内します。",
  },
  {
    question: "物量や開始時期が未定でも大丈夫ですか？",
    answer:
      "はい。現時点で分かる範囲の情報をお知らせください。必要な条件を一緒に整理します。",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-zinc-900">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-logistics.png"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          >
            <source
              src="/video/hero-logistics.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />

          <div className={`${container} py-16 sm:py-24 lg:py-32`}>
            <div className="max-w-4xl">
              <p className={labelDark}>
                GAMI LOGISTICS SOLUTIONS
              </p>

              <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-white/65">
                FUKUOKA / OSAKA / KOBE
              </p>

              <h1 className="mt-5 text-[clamp(2.1rem,7vw,4.4rem)] font-black leading-[1.3] tracking-tight">
                物流を、
                <br />
                <span className="text-amber-400">
                  もっと自由に。
                </span>
              </h1>

              <p className="mt-5 text-lg font-bold leading-relaxed sm:text-2xl">
                まず返す。すぐ動く。
                <br />
                その先まで、やり切る。
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
                福岡を主軸に、大阪・神戸と連携。
                1坪からの保管、小ロットの発送代行、
                検品・流通加工から大規模な一斉発送まで。
                お客様の物流課題に、柔軟な実行力で応えます。
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "365日対応",
                  "1坪から相談",
                  "小ロット歓迎",
                  "大量発送対応",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[11px] font-semibold backdrop-blur-sm sm:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/company#contact"
                  className={primaryButton}
                >
                  見積り・物流相談
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  href="/logistics"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
                >
                  サービスを見る
                </Link>
              </div>

              <p className="mt-4 text-[11px] leading-6 text-white/60">
                ※365日対応は作業内容・出荷条件などの事前相談が必要です。
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center`}>
            <div>
              <p className={label}>WHAT WE DO</p>

              <h2 className={heading}>
                物流を、
                <br />
                事業の可能性に変える。
              </h2>

              <p className="mt-5 text-sm leading-8 text-zinc-600">
                倉庫を借りる。商品を検品する。
                セットを組む。発送する。
                物流の課題は、企業によって異なります。
              </p>

              <p className="mt-4 text-sm leading-8 text-zinc-600">
                GAMIは決まったサービスを押し付けるのではなく、
                お客様に必要な工程を組み合わせ、
                事業に合った物流の仕組みを考えます。
              </p>

              <p className="mt-4 text-sm font-bold leading-7 text-zinc-900">
                小さな相談にも、大きな案件にも。
                <br />
                必要なのは、動ける物流パートナーです。
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src="/images/warehouse-moriguchi-inside.jpg"
                alt="GAMIの物流倉庫内観"
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 sm:p-7">
                <p className="text-[11px] font-bold tracking-[0.2em] text-amber-300">
                  BUILT FOR YOUR BUSINESS
                </p>
                <p className="mt-2 text-lg font-bold text-white sm:text-2xl">
                  保管から発送まで。
                  <br />
                  必要な仕事を、確実に。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NETWORK */}
        <section
          className="bg-zinc-950 py-16 text-white sm:py-24"
          id="network"
        >
          <div className={container}>
            <p className={labelDark}>
              GAMI LOGISTICS NETWORK
            </p>

            <h2 className={heading}>
              福岡を主軸に、
              <br />
              大阪・神戸と連携。
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-8 text-white/70">
              GAMIの物流事業は福岡を主軸に展開。
              大阪の自社拠点、神戸の提携ネットワークと連携し、
              案件規模や作業内容に応じた物流体制を構築します。
            </p>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              <article className="relative overflow-hidden rounded-2xl border border-amber-500/50 bg-gradient-to-b from-amber-500/15 to-white/5 p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] text-amber-400">
                  MAIN OPERATIONS
                </p>

                <h3 className="mt-6 text-3xl font-black">
                  FUKUOKA
                </h3>

                <p className="mt-2 text-base font-bold text-amber-300">
                  福岡・主軸拠点
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  GAMIの物流事業を支える中心拠点。
                  協力パートナーとの連携を通じて、
                  多様な物流業務に対応します。
                </p>
              </article>

              <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/50">
                  GAMI OPERATIONS
                </p>

                <h3 className="mt-6 text-3xl font-black">
                  OSAKA
                </h3>

                <p className="mt-2 text-base font-bold">
                  GAMI OSAKA BASE
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  大阪府守口市の約100坪の倉庫。
                  保管・検品・加工・梱包・発送など、
                  必要な物流業務に対応します。
                </p>
              </article>

              <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/50">
                  PARTNER NETWORK
                </p>

                <h3 className="mt-6 text-3xl font-black">
                  KOBE
                </h3>

                <p className="mt-2 text-base font-bold">
                  神戸・提携ネットワーク
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  神戸の物流パートナーと連携。
                  案件の内容や物量に合わせて、
                  対応体制を補完します。
                </p>
              </article>
            </div>

            <Link
              href="/warehouse"
              className="mt-8 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-300 underline underline-offset-4"
            >
              GAMIの物流拠点を詳しく見る →
            </Link>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={label}>OUR SERVICES</p>

            <h2 className={heading}>
              保管・検品・加工・発送。
              <br />
              物流を、ひとつにつなぐ。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              必要な作業だけでも、まとめてのご依頼でも。
              お客様の業務に合わせた物流サービスをご提案します。
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group rounded-2xl border border-black/10 bg-[#fafaf9] p-6 transition hover:border-amber-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[10px] font-bold tracking-[0.16em] text-amber-700">
                      {service.english}
                    </p>
                    <span className="text-3xl font-black text-zinc-200 group-hover:text-amber-200">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/logistics"
              className="mt-8 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4"
            >
              物流サービス一覧を見る →
            </Link>
          </div>
        </section>

        {/* FLEXIBILITY */}
        <section className="py-16 sm:py-24">
          <div className={container}>
            <p className={label}>FLEXIBLE LOGISTICS</p>

            <h2 className={heading}>
              「こんな依頼でも？」
              <br />
              から、始めてください。
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-zinc-600">
              小さな案件、急ぎの案件、まだ条件が決まっていない案件も。
              まずはご相談ください。
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-3">
              {concerns.map((item) => (
                <li
                  key={item}
                  className="flex min-w-0 items-start gap-3 rounded-xl border border-black/10 bg-white p-4"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-bold text-amber-600"
                  >
                    ✓
                  </span>
                  <span className="text-sm font-semibold leading-6">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/company#contact"
              className={`${primaryButton} mt-8`}
            >
              対応できるか相談する →
            </Link>
          </div>
        </section>

        {/* WHY GAMI */}
        <section className="bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={label}>WHY GAMI</p>

            <h2 className={heading}>
              選ばれる理由は、
              <br />
              動けること。
            </h2>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-black/10 bg-[#fafaf9] p-6"
                >
                  <p className="text-xs font-bold tracking-[0.2em] text-amber-700">
                    {item.number}
                  </p>

                  <h3 className="mt-4 text-lg font-bold sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNATIONAL */}
        <section className="bg-zinc-950 py-16 text-white sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center`}>
            <div>
              <p className={labelDark}>
                INTERNATIONAL FULFILLMENT
              </p>

              <h2 className={heading}>
                日本に拠点がなくても、
                <br />
                日本国内の物流を。
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/70">
                海外企業の日本国内向け発送にも対応。
                商品の保管・セット組み・梱包・大量発送など、
                日本での物流オペレーションをご相談いただけます。
              </p>

              <p className="mt-4 text-sm font-semibold leading-7 text-amber-300">
                No Japan Office? We Handle It.
              </p>

              <Link
                href="/international"
                className={`${primaryButton} mt-7`}
              >
                Japan Fulfillment →
              </Link>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
              <p className="text-xs font-bold tracking-[0.18em] text-amber-400">
                JAPAN OPERATIONS
              </p>

              <div className="mt-6 space-y-5">
                {[
                  "Warehousing & Storage",
                  "Inspection & Kitting",
                  "Packing & Labeling",
                  "Bulk Mailing & Distribution",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-xs font-bold text-amber-400">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold text-white/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="py-16 sm:py-24">
          <div className={container}>
            <p className={label}>OUR EXPERIENCE</p>

            <h2 className={heading}>
              多様な商品と、
              <br />
              多様な物流ニーズに。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              商品特性や数量、納期、品質条件に応じて、
              案件ごとの作業・出荷体制を組み立てます。
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {achievements.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/10 bg-white p-6"
                >
                  <p className="text-xs font-bold text-amber-700">
                    0{index + 1}
                  </p>

                  <h3 className="mt-4 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-zinc-600">
              化粧品製造業許可・第一種貨物利用運送事業など、
              保有する許認可も活かして物流を支えます。
            </p>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={label}>TRUSTED PARTNERS</p>

            <h2 className={heading}>
              信頼できる仲間と、
              <br />
              対応力を広げる。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              GAMIは自社拠点だけでなく、
              福岡・神戸の協力パートナーとも連携。
              案件規模や作業内容に応じた物流体制をご提案します。
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-black/10 bg-[#fafaf9]">
                <img
                  src="/images/partner-maxexpress.png"
                  alt="株式会社マックスエクスプレスの物流施設"
                  width={800}
                  height={500}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-[11px] font-bold tracking-[0.18em] text-amber-700">
                    FUKUOKA PARTNER
                  </p>

                  <h3 className="mt-3 text-lg font-bold">
                    株式会社マックスエクスプレス
                  </h3>

                  <a
                    href="https://www.maxexpress.co.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4"
                  >
                    公式サイトを見る ↗
                  </a>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-black/10 bg-[#fafaf9]">
                <img
                  src="/images/partner-sgrow.png"
                  alt="株式会社エスグローの施設"
                  width={800}
                  height={500}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-[11px] font-bold tracking-[0.18em] text-amber-700">
                    KOBE PARTNER
                  </p>

                  <h3 className="mt-3 text-lg font-bold">
                    株式会社エスグロー
                  </h3>

                  <a
                    href="https://www.s-grow.co.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4"
                  >
                    公式サイトを見る ↗
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-16 sm:py-24">
          <div className={container}>
            <p className={label}>OUR TEAM</p>

            <h2 className={heading}>
              顔が見える、
              <br />
              物流パートナー。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              大切な商品を安心してお任せいただけるように。
              GAMIは一つひとつのご相談に、人が向き合います。
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className="flex h-64 items-center justify-center bg-[#fafaf9] sm:h-80">
                  <img
                    src="/images/team-kazuhiro.jpg"
                    alt="代表取締役社長 Kazuhiro Fuchigamiのイラスト"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold text-amber-700">
                    代表取締役社長
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Kazuhiro Fuchigami
                  </h3>

                  <p className="mt-4 text-base font-bold">
                    小さなご相談にも、大きな責任を。
                  </p>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    段ボール数箱の保管から大規模な発送案件まで、
                    一つひとつのご依頼に真剣に向き合います。
                    気軽に相談でき、安心して任せていただける会社を目指しています。
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className="flex h-64 items-center justify-center bg-[#fafaf9] sm:h-80">
                  <img
                    src="/images/team-mayu.png"
                    alt="専務取締役 Mayu Koteraのイラスト"
                    width={1024}
                    height={1536}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold text-amber-700">
                    専務取締役
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Mayu Kotera
                  </h3>

                  <p className="mt-4 text-base font-bold">
                    相談しやすさも、私たちのサービスです。
                  </p>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    物流のご相談が初めてでも、
                    まだ内容が決まっていなくても大丈夫です。
                    お客様とのコミュニケーションを大切にしながら、
                    最適な進め方を一緒に考えます。
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={label}>HOW WE WORK</p>

            <h2 className={heading}>
              ご相談から、
              <br />
              物流のスタートまで。
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-black/10 bg-[#fafaf9] p-6"
                >
                  <p className="text-3xl font-black text-amber-600">
                    {step.number}
                  </p>

                  <h3 className="mt-4 text-lg font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-amber-50 p-6 sm:p-8">
              <h3 className="text-lg font-bold">
                まだ条件が決まっていなくても、大丈夫。
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                商品・数量・保管の有無・作業内容・希望時期など、
                分かる範囲でお知らせください。
                必要な条件は一緒に整理できます。
              </p>

              <Link
                href="/company#contact"
                className={`${primaryButton} mt-5`}
              >
                物流の見積り・相談をする →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24">
          <div className={`${container} max-w-4xl`}>
            <p className={label}>FAQ</p>

            <h2 className={heading}>
              よくあるご質問。
            </h2>

            <div className="mt-8 space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-xl border border-black/10 bg-white px-5 py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold leading-7 [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl text-amber-700 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-4 border-t border-black/5 pt-4 text-sm leading-8 text-zinc-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-zinc-950 py-16 text-white sm:py-24">
          <div className={`${container} text-center`}>
            <p className={labelDark}>
              LET'S MOVE FORWARD
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.4] sm:text-5xl">
              その物流の課題、
              <br />
              GAMIに聞かせてください。
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70">
              福岡を主軸に、大阪・神戸と連携。
              小ロットの保管から大規模な発送業務まで、
              お客様に合った方法を一緒に考えます。
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/company#contact"
                className={primaryButton}
              >
                見積り・物流相談 →
              </Link>

              <a
                href="tel:0661159935"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
              >
                電話で相談
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
