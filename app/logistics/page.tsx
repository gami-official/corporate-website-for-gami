import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title:
    "物流サービス｜教材発送・発送代行・倉庫保管｜株式会社GAMI",
  description:
    "大阪の自社倉庫GAMI OSAKA BASEを主軸に、福岡・神戸の協力ネットワークと連携。倉庫保管、発送代行、教材の丁合・セット組み、検品、流通加工、輸送手配、ダンボール単体見積りまでご相談いただけます。",
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
                このページでは、依頼できる作業と、教材発送・365日対応・資材見積りの進め方をご案内します。
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

        <nav aria-label="目的からサービスを探す" className="border-b border-black/10 bg-white">
          <div className={`${container} flex flex-wrap gap-2 py-5`}>
            {[
              ["#services", "物流サービス一覧"],
              ["#educational-logistics", "教材・パンフレット発送"],
              ["/#case-studies", "導入事例を見る"],
              ["#operations-365", "365日対応"],
              ["#cardboard", "ダンボール見積り"],
            ].map(([href, text]) => <a key={href} href={href} className="inline-flex min-h-[44px] items-center rounded-full border border-black/10 px-4 py-2 text-xs font-bold text-zinc-700 transition hover:border-amber-400 hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">{text}</a>)}
          </div>
        </nav>

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
              6つの基本業務。
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
                  id={`service-${service.number}`}
                  className="scroll-mt-24 group overflow-hidden rounded-2xl border border-black/10 bg-[#fafaf9] transition hover:border-amber-300 hover:shadow-lg"
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

        {/* EDUCATIONAL LOGISTICS */}
        <section id="educational-logistics" aria-labelledby="education-heading" className="scroll-mt-24 bg-zinc-950 py-16 text-white sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-2 lg:items-center`}>
            <div>
              <p className={darkGoldLabel}>EDUCATIONAL LOGISTICS</p>
              <h2 id="education-heading" className={heading}>
                教材の準備と発送を任せて、<br />授業・講座の運営に集中。
              </h2>
              <p className="mt-5 text-sm leading-8 text-white/75">
                学習塾・スクール・オンライン講座・セミナー運営会社様へ。
                教材やパンフレットの保管、丁合・セット組み、梱包・発送まで、まとめてご相談いただけます。
              </p>
              <Link href="/company#contact" className={`${primaryButton} mt-7`}>教材・パンフレットの発送を相談する →</Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "教材の丁合・セット組み", text: "講座・コースごとに必要な教材を順番にまとめ、案内状なども同梱。" },
                { title: "受講者への個別発送", text: "継続的な教材発送や、開講に合わせた一斉発送をご相談いただけます。" },
                { title: "教室への小分け発送", text: "パンフレットなどを指定部数に分けて、全国の教室・拠点へ発送。" },
                { title: "印刷会社から直送・保管", text: "入荷後の保管から作業・出荷まで、必要な工程を組み立てます。" },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <h3 className="text-base font-bold text-amber-300">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 365-DAY OPERATIONS */}
        <section id="operations-365" aria-labelledby="operations-heading" className="scroll-mt-24 py-16 sm:py-24">
          <div className={container}>
            <p className={goldLabel}>365-DAY OPERATIONS</p>
            <h2 id="operations-heading" className={heading}>365日対応を、<br />御社に合う運用で。</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600">
              土日祝の出荷も、事前に取り決めた作業内容・運用条件に応じて対応。
              出荷する日だけでなく、受付・作業・連絡の流れまで、お客様と一緒に整えます。
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "必要な出荷日を確認", text: "平日・土日祝を含め、出荷を希望する日や頻度を伺います。" },
                { title: "受付と出荷の流れを設計", text: "商品・件数・作業内容に合わせ、発送指示の方法や受付締切を取り決めます。" },
                { title: "セット組みと確認手順", text: "同梱物や梱包方法を確認し、事前準備を含めた作業の進め方を決めます。" },
                { title: "連絡・繁忙期対応を相談", text: "日々の連絡方法と、出荷が増える時期・数量を確認し、対応体制を調整します。" },
              ].map((item, index) => (
                <article key={item.title} className="rounded-2xl border border-black/10 bg-white p-6">
                  <p className="text-xs font-bold tracking-[0.18em] text-amber-700">0{index + 1}</p>
                  <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-zinc-500">※即日出荷・365日対応の条件は、案件ごとに事前に取り決めます。</p>
            <Link href="/company#contact" className={`${primaryButton} mt-6`}>土日祝の出荷・運用を相談する →</Link>
          </div>
        </section>

        {/* CARDBOARD QUOTE */}
        <section id="cardboard" aria-labelledby="cardboard-heading" className="scroll-mt-24 bg-zinc-950 py-16 text-white sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-2 lg:items-center`}>
            <div>
              <p className={darkGoldLabel}>PACKAGING COSTS</p>
              <h2 id="cardboard-heading" className={heading}>そのダンボール代、<br />見直してみませんか？</h2>
              <p className="mt-5 text-sm leading-8 text-white/75">近隣の提携ダンボール会社との連携により、価格には自信があります。物流委託と合わせたご相談も、資材だけのご相談も歓迎です。</p>
            </div>
            <div className="rounded-2xl border border-amber-400/35 bg-white/5 p-6 sm:p-8">
              <h3 className="text-xl font-bold leading-9 text-amber-300 sm:text-2xl">ダンボールだけの<br />お見積りも大歓迎。</h3>
              <p className="mt-4 text-sm leading-8 text-white/75">今お使いのサイズ・仕様・数量・納品先を、分かる範囲でお知らせください。価格を比べて、驚いていただきたい。まずは一度、GAMIにご相談ください。</p>
              <Link href="/company#contact" className={`${primaryButton} mt-6`}>ダンボールの見積りを依頼する →</Link>
              <p className="mt-3 text-xs leading-6 text-white/60">ご相談内容に「ダンボール見積り」とご記入ください。</p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className={`scroll-mt-24 ${sectionSpace}`}>
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
        {/* RELATED INFORMATION */}
        <section aria-label="関連ページ" className="border-t border-black/10 bg-white py-10">
          <div className={`${container} grid gap-4 sm:grid-cols-2`}>
            <Link href="/#case-studies" className="rounded-2xl border border-black/10 p-6 transition hover:border-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">
              <span className="text-xs font-bold tracking-widest text-amber-700">CUSTOMER STORIES</span>
              <span className="mt-3 block text-lg font-bold">実際の物流改善事例を見る →</span>
              <span className="mt-2 block text-sm leading-7 text-zinc-600">お客様の課題にどう応えたか、トップページの5事例でご紹介します。</span>
            </Link>
            <Link href="/warehouse" className="rounded-2xl border border-black/10 p-6 transition hover:border-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">
              <span className="text-xs font-bold tracking-widest text-amber-700">FACILITY & NETWORK</span>
              <span className="mt-3 block text-lg font-bold">倉庫・作業風景・アクセスを見る →</span>
              <span className="mt-2 block text-sm leading-7 text-zinc-600">大阪の自社倉庫と、福岡・神戸の協力ネットワークをご紹介します。</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
