
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title:
    "物流サービス｜発送代行・倉庫保管・流通加工｜株式会社GAMI",
  description:
    "大阪の自社倉庫GAMI OSAKA BASEを主軸に、福岡・神戸の協力ネットワークと連携。倉庫保管、発送代行、検品、シール貼り、セット組み、封入、大量発送、輸送手配まで幅広くご相談いただけます。",
  alternates: {
    canonical: "/logistics",
  },
}

const container = "mx-auto max-w-6xl px-4 sm:px-6"

const sectionSpace = "py-16 sm:py-24"

const goldLabel =
  "text-[11px] font-bold tracking-[0.18em] text-amber-700"

const darkGoldLabel =
  "text-[11px] font-bold tracking-[0.18em] text-amber-400"

const heading =
  "mt-3 text-[clamp(1.55rem,5.5vw,2.5rem)] font-bold leading-[1.45] tracking-tight"

const primaryButton =
  "inline-flex min-h-[50px] items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-zinc-950 transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"

const services = [
  {
    number: "01",
    english: "WAREHOUSING",
    title: "倉庫保管・在庫管理",
    text:
      "段ボール数箱から、EC商品の継続保管、資材の一時保管まで。1坪からの保管相談にも対応し、商品特性・数量・保管期間に合わせた運用をご提案します。",
    points: [
      "小ロット・1坪からの保管相談",
      "EC商品・販売在庫の保管",
      "一時保管・繁忙期の保管",
      "入出庫・在庫管理",
    ],
  },
  {
    number: "02",
    english: "FULFILLMENT",
    title: "発送代行・EC物流",
    text:
      "商品のピッキング、梱包、送り状作成、発送まで。ECの継続出荷から企業向け発送、キャンペーン商品の一斉発送までご相談いただけます。",
    points: [
      "ピッキング・梱包・発送",
      "EC・通販商品の出荷",
      "企業向け発送・一斉発送",
      "出荷データ・送り状対応",
    ],
  },
  {
    number: "03",
    english: "INSPECTION",
    title: "商品検品・品質確認",
    text:
      "入荷時や出荷前の商品確認、数量確認、外観検査など。必要な検品工程を組み込み、商品ごとの条件に合わせて作業を行います。",
    points: [
      "数量・品番確認",
      "外観・パッケージ確認",
      "出荷前チェック",
      "検品結果の管理・報告",
    ],
  },
  {
    number: "04",
    english: "VALUE-ADDED SERVICES",
    title: "流通加工・セット組み",
    text:
      "シール貼り、セット組み、封入、箱組立、包装などの手作業に対応。複数工程をまとめてご依頼いただくことも、作業単体でのご相談も可能です。",
    points: [
      "シール貼り・ラベル貼付",
      "セット組み・アッセンブリ",
      "封入・包装・箱組立",
      "内職作業・スポット作業",
    ],
  },
  {
    number: "05",
    english: "BULK OPERATIONS",
    title: "大量発送・スポット案件",
    text:
      "キャンペーン、販促物、カード・印刷物などの大量封入や一斉発送。数量・納期・資材・配送条件を確認し、案件ごとの作業体制を組み立てます。",
    points: [
      "大量封入・セット作業",
      "キャンペーン商品の発送",
      "販促物・印刷物の一斉発送",
      "繁忙期・短期案件の相談",
    ],
  },
  {
    number: "06",
    english: "TRANSPORTATION",
    title: "輸送手配・配送調整",
    text:
      "第一種貨物利用運送事業の登録を活かし、商品・物量・配送先・納期に応じた輸送方法を検討。物流作業から輸送手配までまとめてご相談いただけます。",
    points: [
      "国内輸送の手配",
      "物量に応じた配送方法の検討",
      "出荷・配送スケジュール調整",
      "協力運送会社との連携",
    ],
  },
]

const concerns = [
  "発送作業が追いつかない",
  "保管場所が足りない",
  "EC物流を外注したい",
  "検品・加工だけ任せたい",
  "繁忙期だけ依頼したい",
  "土日祝の出荷を相談したい",
  "大量の封入・発送を任せたい",
  "物流拠点を新たに確保したい",
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
  "ラベル貼付",
  "ピッキング",
  "発送代行",
  "流通加工",
]

const industries = [
  "EC・通販",
  "美容・化粧品",
  "アパレル",
  "食品関連",
  "輸入商材",
  "ふるさと納税",
  "販促物・印刷物",
  "カード・雑貨",
]

const gallery = [
  {
    src: "/images/warehouse-01.png",
    alt: "GAMIの倉庫全景",
    title: "WAREHOUSE",
    caption: "倉庫・保管スペース",
  },
  {
    src: "/images/warehouse-03.png",
    alt: "GAMIの梱包作業スペース",
    title: "OPERATIONS",
    caption: "梱包・作業スペース",
  },
  {
    src: "/images/warehouse-05.png",
    alt: "出荷前商品の保管スペース",
    title: "STORAGE",
    caption: "商品保管・出荷準備",
  },
  {
    src: "/images/warehouse-07.png",
    alt: "箱組立作業",
    title: "PROCESSING",
    caption: "箱組立・流通加工",
  },
]

const steps = [
  {
    number: "01",
    title: "お問い合わせ",
    text:
      "商品・数量・希望時期・お困りごとをお知らせください。",
  },
  {
    number: "02",
    title: "内容・条件の確認",
    text:
      "保管量、作業内容、出荷頻度、配送条件などを整理します。",
  },
  {
    number: "03",
    title: "お見積り・運用設計",
    text:
      "作業工程や物流体制、費用、スケジュールをご提案します。",
  },
  {
    number: "04",
    title: "業務開始",
    text:
      "入庫・検品・加工・発送などの手順を決めて運用を開始します。",
  },
]

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] font-sans text-zinc-900">
      <Header />

      <main>
        {/* HERO VIDEO */}
        <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-logistics.png"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          >
            <source
              src="/video/hero-logistics.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />

          <div
            className={`${container} relative z-20 py-16 sm:py-24 lg:py-32`}
          >
            <div className="max-w-4xl">
              <p className={darkGoldLabel}>
                GAMI LOGISTICS SERVICES
              </p>

              <h1 className="mt-5 text-[clamp(2rem,7vw,4.2rem)] font-black leading-[1.35] tracking-tight">
                必要な物流を、
                <br />
                <span className="text-amber-400">
                  必要なだけ。
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
                大阪の自社倉庫を主軸に、
                福岡・神戸の協力ネットワークと連携。
                倉庫保管、発送代行、検品、流通加工、
                大量発送、輸送手配まで。
                お客様の業務に合わせた物流サービスをご提案します。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/company#contact"
                  className={primaryButton}
                >
                  見積り・物流相談 →
                </Link>

                <Link
                  href="#services"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
                >
                  サービス一覧を見る
                </Link>
              </div>

              <p className="mt-5 text-[11px] leading-6 text-white/60">
                ※休日出荷や特別な作業条件は、事前のご相談が必要です。
              </p>
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className={sectionSpace}>
          <div className={container}>
            <p className={goldLabel}>
              YOUR CHALLENGES
            </p>

            <h2 className={heading}>
              こんな物流の課題、
              <br />
              ありませんか？
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              物流業務のすべてを任せる必要はありません。
              お困りの工程や不足している部分だけでも、
              お気軽にご相談ください。
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
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
          </div>
        </section>

        {/* SERVICE DETAILS */}
        <section
          id="services"
          className={`scroll-mt-24 bg-white ${sectionSpace}`}
        >
          <div className={container}>
            <p className={goldLabel}>
              OUR SERVICES
            </p>

            <h2 className={heading}>
              GAMIが対応する、
              <br />
              6つの物流サービス。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              保管・発送・検品・加工・大量発送・輸送手配。
              案件に合わせて必要な工程を組み合わせ、
              物流業務をサポートします。
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group overflow-hidden rounded-2xl border border-black/10 bg-[#fafaf9] transition hover:border-amber-300 hover:shadow-lg"
                >
                  <div className="border-b border-black/10 bg-zinc-950 px-6 py-5 text-white">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[10px] font-bold tracking-[0.14em] text-amber-400">
                        {service.english}
                      </p>

                      <span className="text-2xl font-black text-white/30">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold leading-relaxed sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>

                  <div className="p-6">
                    <p className="text-sm leading-8 text-zinc-600">
                      {service.text}
                    </p>

                    <ul className="mt-5 space-y-3 border-t border-black/10 pt-5">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-7"
                        >
                          <span
                            aria-hidden="true"
                            className="shrink-0 font-bold text-amber-600"
                          >
                            ✓
                          </span>

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MANUAL OPERATIONS */}
        <section className={sectionSpace}>
          <div className={container}>
            <p className={goldLabel}>
              VALUE-ADDED OPERATIONS
            </p>

            <h2 className={heading}>
              細かな手作業も、
              <br />
              お任せください。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              物流は、商品を運ぶだけではありません。
              検品、ラベル貼り、セット組み、封入など、
              人の手が必要な工程にも対応します。
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {workItems.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[64px] items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-4 text-center text-sm font-bold"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-950 p-6 text-white sm:p-8">
              <p className={darkGoldLabel}>
                FLEXIBLE OPERATIONS
              </p>

              <h3 className="mt-3 text-xl font-bold leading-relaxed sm:text-2xl">
                「この作業だけお願いしたい」
                <br />
                そんなご相談も歓迎です。
              </h3>

              <p className="mt-4 text-sm leading-8 text-white/70">
                作業内容、数量、納期、商品仕様を確認し、
                ご依頼に合わせた作業方法をご提案します。
              </p>

              <Link
                href="/company#contact"
                className={`${primaryButton} mt-6`}
              >
                作業について相談する →
              </Link>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className={`bg-white ${sectionSpace}`}>
          <div className={container}>
            <p className={goldLabel}>
              INDUSTRIES
            </p>

            <h2 className={heading}>
              幅広い商品・業種の、
              <br />
              物流ニーズに対応。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              商品の特性や保管条件、数量、納期に応じて、
              適した作業・出荷体制を検討します。
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {industries.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[68px] items-center justify-center rounded-xl border border-black/10 bg-[#fafaf9] px-4 py-4 text-center text-sm font-bold"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-8 text-zinc-600">
              ふるさと納税返礼品の発送、美容商材の検品・セット組み、
              EC・アパレル商品の保管・発送など、
              多様な物流業務をご相談いただけます。
            </p>
          </div>
        </section>

        {/* WAREHOUSE LINK */}
        <section className={sectionSpace}>
          <div className={container}>
            <div className="grid overflow-hidden rounded-2xl border border-black/10 bg-white lg:grid-cols-2">
              <div className="relative min-h-[240px] overflow-hidden bg-zinc-900 sm:min-h-[320px]">
                <img
                  src="/images/warehouse-moriguchi.jpg"
                  alt="GAMI OSAKA BASEの倉庫外観"
                  width={960}
                  height={600}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-9">
                <p className={goldLabel}>
                  GAMI OSAKA BASE
                </p>

                <h2 className={heading}>
                  御社の物流拠点を、
                  <br />
                  大阪に。
                </h2>

                <p className="mt-5 text-sm leading-8 text-zinc-600">
                  大阪府守口市にある約100坪のGAMI自社倉庫。
                  商品の保管・加工・発送だけでなく、
                  お客様の物流拠点として活用いただくこともご相談可能です。
                </p>

                <Link
                  href="/warehouse"
                  className="mt-6 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4"
                >
                  物流拠点・倉庫の詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className={`bg-white ${sectionSpace}`}>
          <div className={container}>
            <p className={goldLabel}>
              OPERATIONS GALLERY
            </p>

            <h2 className={heading}>
              倉庫・作業風景。
            </h2>

            <p className="mt-4 text-sm leading-8 text-zinc-600">
              保管・梱包・出荷など、物流業務を支える現場をご紹介します。
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {gallery.map((image) => (
                <figure
                  key={image.src}
                  className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#fafaf9]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={640}
                      height={480}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full scale-[1.15] object-cover object-top"
                    />
                  </div>

                  <figcaption className="flex min-h-[70px] flex-col justify-center bg-white px-3 py-3">
                    <span className="text-[9px] font-bold tracking-[0.1em] text-amber-700 sm:text-[10px]">
                      {image.title}
                    </span>

                    <span className="mt-1 text-xs font-semibold leading-5 text-zinc-800 sm:text-sm">
                      {image.caption}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={sectionSpace}>
          <div className={container}>
            <p className={goldLabel}>
              HOW WE WORK
            </p>

            <h2 className={heading}>
              ご相談から、
              <br />
              業務開始まで。
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-black/10 bg-white p-6"
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

            <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <h3 className="text-lg font-bold leading-relaxed sm:text-xl">
                まだ条件が決まっていなくても、大丈夫。
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-8 text-zinc-600">
                商品・数量・保管の有無・作業内容・希望時期など、
                分かる範囲でお知らせください。
                必要な条件は一緒に整理できます。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/company#contact"
                  className={primaryButton}
                >
                  見積り・物流相談 →
                </Link>

                <a
                  href="tel:0661159935"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-bold transition hover:bg-amber-100"
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
