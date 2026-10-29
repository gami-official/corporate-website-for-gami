import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "365日稼働の発送代行・物流倉庫｜1坪から対応",
  description:
    "大阪・福岡から全国対応。365日稼働、1坪からの倉庫保管、小ロット発送、検品・梱包・流通加工。まず返す、すぐ動く。株式会社GAMIがスモールビジネスの物流を支えます。",
  alternates: {
    canonical: "/",
  },
}

const concerns = [
  "段ボール数箱の保管",
  "少量の発送代行",
  "EC立ち上げの物流",
  "土日祝の出荷",
  "検品・梱包だけ",
  "急な出荷・繁忙期",
]

const strengths = [
  {
    number: "01",
    title: "365日対応",
    text: "土日祝の出荷や繁忙期も、事前に決めた運用条件に合わせて対応します。",
  },
  {
    number: "02",
    title: "まず返す",
    text: "すぐに結論が出ない内容でも、まずご連絡。対応できる方法を迅速に考えます。",
  },
  {
    number: "03",
    title: "1坪から",
    text: "段ボール数箱の保管や小ロット発送も歓迎。事業の成長に合わせて支えます。",
  },
]

const services = [
  {
    number: "01",
    title: "倉庫保管",
    text: "1坪からの保管、EC在庫、一時保管を相談できます。",
  },
  {
    number: "02",
    title: "発送代行",
    text: "保管・ピッキング・梱包・発送まで、EC物流を支援。",
  },
  {
    number: "03",
    title: "検品・加工",
    text: "検品、シール貼り、セット組み、封入などに対応。",
  },
  {
    number: "04",
    title: "スポット・輸送",
    text: "繁忙期の応援、一時的な出荷、全国への輸送手配。",
  },
]

const achievements = [
  {
    title: "ふるさと納税",
    text: "返礼品の保管・加工・梱包・発送。",
  },
  {
    title: "美容商材",
    text: "容器・パッケージ検品、セット組み。",
  },
  {
    title: "EC・アパレル",
    text: "商品の保管・梱包・継続的な発送。",
  },
]

const steps = [
  {
    title: "ご相談",
    text: "商品・物量・お困りごとを、分かる範囲で。",
  },
  {
    title: "お見積り",
    text: "作業内容・出荷頻度・開始時期を確認。",
  },
  {
    title: "運用開始",
    text: "入庫・出荷の手順を決めてスタート。",
  },
]

const faqs = [
  {
    question: "発送件数が少なくても大丈夫？",
    answer:
      "はい。小ロット発送や、ECを始めたばかりの事業も歓迎しています。商品・物量に合わせて対応方法をご相談します。",
  },
  {
    question: "段ボール数箱だけ保管できる？",
    answer:
      "はい。1坪程度の小規模保管もご相談いただけます。商品の大きさ・数量・保管期間をお知らせください。",
  },
  {
    question: "土日祝も出荷できる？",
    answer:
      "365日稼働の物流体制で対応しています。出荷内容・締切・作業体制などの条件は、事前にご相談ください。",
  },
  {
    question: "物量や開始時期が未定でも相談できる？",
    answer:
      "はい。現在のお困りごとをお知らせください。必要な条件を一緒に整理し、お見積りをご案内します。",
  },
  {
    question: "検品・梱包だけでもお願いできる？",
    answer:
      "はい。検品、シール貼り、セット組み、封入など、一部の工程だけでもご相談いただけます。",
  },
  {
    question: "急ぎの案件にも対応できる？",
    answer:
      "希望日、商品、数量、作業内容をお知らせください。状況を確認し、対応可否と進め方をご案内します。",
  },
]

const container = "mx-auto max-w-6xl px-4 sm:px-6"
const sectionSpace = "py-9 sm:py-14"
const eyebrow =
  "text-[11px] font-bold tracking-[0.12em] text-amber-700"
const heading =
  "mt-2 text-[23px] font-bold leading-[1.5] tracking-tight sm:text-4xl"
const primaryButton =
  "inline-flex min-h-[48px] items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
const secondaryButton =
  "inline-flex min-h-[48px] items-center justify-center rounded-full border border-black/15 bg-white px-5 py-3 text-center text-sm font-bold text-zinc-900 transition hover:bg-amber-50"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-zinc-900">
      <Header />

      <main>
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

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />

          <div className={`${container} py-9 sm:py-16 lg:py-20`}>
            <div className="max-w-4xl">
              <p className="text-[11px] font-bold tracking-[0.12em] text-amber-300 sm:text-sm">
                大阪・福岡から全国へ
              </p>

              <h1 className="mt-4 text-[clamp(1.625rem,7.5vw,2.5rem)] font-bold leading-[1.35] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="inline-block">365日、</span>
                <span className="inline-block">物流を止めない。</span>
              </h1>

              <p className="mt-3 text-xl font-bold leading-snug text-amber-300 sm:text-3xl">
                まず返す。すぐ動く。
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                1坪から、スモールビジネスを支える。
                保管・発送・検品・流通加工まで、
                小さなご依頼も歓迎します。
              </p>

              <div className="mt-5 grid max-w-lg grid-cols-4 gap-1.5">
                {["365日稼働", "1坪から", "小ロット", "全国対応"].map(
                  (item) => (
                    <span
                      key={item}
                      className="flex min-h-[34px] items-center justify-center rounded-lg border border-white/20 bg-white/10 px-1 py-2 text-center text-[11px] font-semibold sm:text-xs"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-5 grid max-w-lg grid-cols-[1.35fr_1fr] gap-2">
                <Link
                  href="/company#contact"
                  className={`${primaryButton} px-3`}
                >
                  見積り・物流相談
                </Link>

                <a
                  href="tel:0661159935"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/40 bg-black/15 px-3 py-3 text-sm font-bold transition hover:bg-white/10"
                >
                  電話で相談
                </a>
              </div>

              <p className="mt-3 max-w-xl text-[11px] leading-5 text-white/70">
                ※365日対応は、作業内容・出荷条件を事前にご相談ください。
              </p>
            </div>
          </div>
        </section>

        <section className={`bg-amber-50 ${sectionSpace}`}>
          <div className={container}>
            <p className={eyebrow}>SMALL BUSINESS</p>

            <h2 className={heading}>
              <span className="inline-block">小さな物流も、</span>
              <span className="inline-block">大歓迎。</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
              「この量でも頼める？」から相談できます。
              必要な作業だけでも、開始時期が未定でも大丈夫です。
            </p>

            <ul className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-3">
              {concerns.map((item) => (
                <li
                  key={item}
                  className="flex min-w-0 items-start gap-2 rounded-xl border border-amber-100 bg-white px-3 py-3"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-amber-600"
                  >
                    ✓
                  </span>
                  <span className="min-w-0 text-sm font-semibold leading-6">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/company#contact"
              className={`${primaryButton} mt-5`}
            >
              「これ頼める？」を相談する
            </Link>
          </div>
        </section>

        <section className={sectionSpace}>
          <div className={container}>
            <p className={eyebrow}>WHY GAMI</p>
            <h2 className={heading}>
              <span className="inline-block">物流の困りごとに、</span>
              <span className="inline-block">すぐ向き合う。</span>
            </h2>

            <div className="mt-5 grid gap-2 lg:grid-cols-3 lg:gap-4">
              {strengths.map((item) => (
                <article
                  key={item.number}
                  className="grid min-w-0 grid-cols-[78px_minmax(0,1fr)] items-start gap-3 rounded-2xl border border-black/5 bg-white p-4 lg:block lg:p-6"
                >
                  <div>
                    <p className="text-xs font-bold text-amber-600">
                      {item.number}
                    </p>
                    <h3 className="mt-1 text-sm font-bold leading-6 lg:mt-3 lg:text-xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 lg:mt-3 lg:leading-7">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GAMI management introduction */}
        <section className={`bg-white ${sectionSpace}`} aria-labelledby="team-heading">
          <div className={container}>
            <p className={eyebrow}>OUR TEAM</p>
            <h2 id="team-heading" className={heading}>顔が見える、物流パートナー。</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600">
              大切な商品を安心してお任せいただけるように。GAMIは、一つひとつのご相談に人が向き合い、丁寧にお応えします。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:gap-6">
              <article className="overflow-hidden rounded-2xl border border-black/10 bg-[#fbfaf7]">
                <div className="flex h-64 items-center justify-center bg-white sm:h-80">
                  <img src="/images/team-kazuhiro.jpg" alt="代表取締役社長 Kazuhiro Fuchigamiのドット絵" width={1024} height={1024} loading="lazy" className="h-full w-full object-contain" />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-bold tracking-wide text-amber-700">代表取締役社長</p>
                  <h3 className="mt-1 text-xl font-bold">Kazuhiro Fuchigami</h3>
                  <p className="mt-3 text-base font-bold">小さなご相談にも、大きな責任を。</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">段ボール数箱の保管から大規模な発送案件まで、一つひとつのご依頼に真剣に向き合います。気軽に相談でき、安心して任せていただける会社を目指しています。</p>
                </div>
              </article>
              <article className="overflow-hidden rounded-2xl border border-black/10 bg-[#fbfaf7]">
                <div className="flex h-64 items-center justify-center bg-white sm:h-80">
                  <img src="/images/team-mayu.png" alt="専務取締役 Mayu Koteraのドット絵" width={1024} height={1536} loading="lazy" className="h-full w-full object-contain" />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-bold tracking-wide text-amber-700">専務取締役</p>
                  <h3 className="mt-1 text-xl font-bold">Mayu Kotera</h3>
                  <p className="mt-3 text-base font-bold">相談しやすさも、私たちのサービスです。</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">物流のご相談が初めてでも、まだ内容が決まっていなくても大丈夫です。お客様とのコミュニケーションを大切にしながら、最適な進め方を一緒に考えます。</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={`bg-zinc-950 text-white ${sectionSpace}`}>
          <div className={container}>
            <p className="text-[11px] font-bold tracking-[0.12em] text-amber-300">
              SERVICES
            </p>

            <h2 className={heading}>
              <span className="inline-block">保管・加工・発送。</span>
              <span className="inline-block">必要な業務から。</span>
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
              {services.map((item) => (
                <article
                  key={item.number}
                  className="min-w-0 rounded-2xl border border-white/15 bg-white/5 p-3 sm:p-5"
                >
                  <p className="text-xs font-bold text-amber-300">
                    {item.number}
                  </p>
                  <h3 className="mt-2 text-[15px] font-bold leading-6 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/logistics"
              className="mt-4 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-300 underline underline-offset-4"
            >
              物流サービスを詳しく見る →
            </Link>
          </div>
        </section>

        <section className={sectionSpace}>
          <div className={container}>
            <p className={eyebrow}>EXPERIENCE</p>
            <h2 className={heading}>物流・発送・加工の実績。</h2>

            <div className="mt-5 overflow-hidden rounded-2xl border border-black/10 bg-white">
              {achievements.map((item, index) => (
                <article
                  key={item.title}
                  className={`grid grid-cols-[100px_minmax(0,1fr)] gap-3 px-4 py-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:px-6 ${
                    index > 0 ? "border-t border-black/5" : ""
                  }`}
                >
                  <h3 className="text-sm font-bold leading-6">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-zinc-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              化粧品製造業許可・第一種貨物利用運送事業など、
              許認可を活かして物流を支えます。
            </p>
          </div>
        </section>

        <section className={`bg-amber-50 ${sectionSpace}`}>
          <div className={container}>
            <p className={eyebrow}>LOGISTICS BASE & PARTNERS</p>
            <h2 className={heading}>大阪・福岡から、全国へ。</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600">
              小ロットの保管・発送から大規模な封入・梱包・発送まで。自社拠点と協力パートナー企業が連携し、案件に合わせた物流体制をご提案します。
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-amber-100 bg-white">
                <div className="grid grid-cols-[32%_minmax(0,1fr)]">
                  <img src="/images/warehouse-moriguchi.jpg" alt="GAMI大阪物流センター" width={960} height={600} loading="lazy" className="h-full min-h-[150px] w-full object-cover" />
                  <div className="min-w-0 p-4 sm:p-5">
                    <p className="text-[11px] font-bold text-amber-700">OSAKA</p>
                    <h3 className="mt-1 text-base font-bold leading-6 sm:text-xl">大阪物流センター</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">守口市大日町1-8-18。約100坪の倉庫で、保管・加工・発送に対応。1坪から相談できます。</p>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-amber-100 bg-white p-4 sm:p-5">
                <p className="text-[11px] font-bold text-amber-700">FUKUOKA</p>
                <h3 className="mt-1 text-base font-bold leading-6 sm:text-xl">福岡物流センター</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">福岡市中央区の物流拠点。大阪と連携し、商品・配送先・作業内容に合わせて運用をご相談します。</p>
              </article>
            </div>

            <div className="mt-4 rounded-2xl border border-amber-100 bg-white p-4 sm:p-6">
              <p className={eyebrow}>PARTNER COMPANIES</p>
              <h3 className="mt-2 text-lg font-bold sm:text-2xl">協力パートナー企業</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">案件の規模や作業内容に応じて、協力パートナー企業と連携します。</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <article className="overflow-hidden rounded-xl border border-black/10 bg-[#fbfaf7]">
                  <img src="/images/partner-maxexpress.png" alt="株式会社マックスエクスプレス 福岡の物流施設外観" width={800} height={500} loading="lazy" className="h-44 w-full object-cover sm:h-52" />
                  <div className="p-4">
                    <p className="text-xs font-bold text-amber-700">福岡 / FUKUOKA</p>
                    <h4 className="mt-1 text-base font-bold">株式会社マックスエクスプレス</h4>
                    <a href="https://www.maxexpress.co.jp/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-10 items-center text-sm font-semibold text-amber-800 underline underline-offset-4">公式サイトを見る ↗</a>
                  </div>
                </article>
                <article className="overflow-hidden rounded-xl border border-black/10 bg-[#fbfaf7]">
                  <img src="/images/partner-sgrow.png" alt="株式会社エスグロー 神戸の建物外観" width={280} height={280} loading="lazy" className="h-44 w-full object-cover object-center sm:h-52" />
                  <div className="p-4">
                    <p className="text-xs font-bold text-amber-700">神戸 / KOBE</p>
                    <h4 className="mt-1 text-base font-bold">株式会社エスグロー</h4>
                    <a href="https://www.s-grow.co.jp/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-10 items-center text-sm font-semibold text-amber-800 underline underline-offset-4">公式サイトを見る ↗</a>
                  </div>
                </article>
              </div>
            </div>

            <Link href="/warehouse" className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-amber-800 underline underline-offset-4">
              倉庫・物流拠点を詳しく見る →
            </Link>
          </div>
        </section>

        <section className={sectionSpace}>
          <div className={container}>
            <p className={eyebrow}>HOW TO START</p>
            <h2 className={heading}>相談から開始まで、3ステップ。</h2>

            <ol className="mt-5 grid gap-2 md:grid-cols-3">
              {steps.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[28px_70px_minmax(0,1fr)] items-start gap-2 rounded-xl border border-black/5 bg-white p-4 md:grid-cols-[28px_minmax(0,1fr)]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-sm font-bold text-amber-700">
                    {index + 1}
                  </span>
                  <h3 className="text-sm font-bold leading-7">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-zinc-600 md:col-start-2">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-5 rounded-2xl bg-amber-50 p-4 sm:p-6">
              <p className="text-base font-bold leading-7">
                まだ決まっていなくても、大丈夫。
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                商品・数量・作業内容・希望時期を、
                分かる範囲でお知らせください。
                未定の項目は、一緒に整理できます。
              </p>
              <Link
                href="/company#contact"
                className={`${primaryButton} mt-4`}
              >
                物流の見積り・相談をする
              </Link>
            </div>
          </div>
        </section>

        <section className={`bg-white ${sectionSpace}`}>
          <div className={`${container} max-w-4xl`}>
            <p className={eyebrow}>FAQ</p>
            <h2 className={heading}>よくあるご質問。</h2>

            <div className="mt-5 space-y-2">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-black/10 bg-[#fbfaf7] px-4 py-3"
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

        <section className={sectionSpace}>
          <div className={container}>
            <div className="rounded-2xl border border-black/10 bg-white p-5 sm:p-8">
              <p className={eyebrow}>HEAD SPA FRANCHISE</p>
              <h2 className="mt-2 text-xl font-bold leading-relaxed sm:text-3xl">
                <span className="inline-block">ヘッドスパの</span>
                <span className="inline-block">開業・運営も支援。</span>
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
                ゆうの技術指導と、GAMIの経営・集客支援を
                組み合わせた開業サポートです。
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                <Link
                  href="/headspa-franchise"
                  className={`${secondaryButton} px-3`}
                >
                  FC・開業支援
                </Link>
                <a
                  href="https://www.yuheadspa.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${secondaryButton} px-3`}
                  aria-label="ヘッドスパ専門店ゆう公式サイトを別タブで開く"
                >
                  ゆう公式サイト ↗
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
