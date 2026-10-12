import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "365日稼働の発送代行・物流倉庫｜1坪から対応",
  description:
    "大阪・福岡から全国対応。株式会社GAMIは365日稼働の物流体制で、1坪からの倉庫保管、小ロット発送、EC物流、検品・梱包・流通加工を支援。まず返す、すぐ動く。スモールビジネスの物流もお気軽にご相談ください。",
  alternates: {
    canonical: "/",
  },
}

const concerns = [
  "段ボール数箱だけ保管したい",
  "発送が少なくてもお願いしたい",
  "ECを始めたので物流を任せたい",
  "土日祝も出荷したい",
  "検品・梱包だけお願いしたい",
  "急な出荷や繁忙期に対応してほしい",
]

const strengths = [
  {
    number: "01",
    title: "365日、物流を動かす。",
    text: "土日祝の出荷や繁忙期にも、事前にご相談いただいた運用条件に合わせて対応。販売の機会を物流で支えます。",
  },
  {
    number: "02",
    title: "まず返す。すぐ動く。",
    text: "すぐに結論が出ない内容でも、まずご連絡。状況を確認し、対応できる方法をスピード感を持って考えます。",
  },
  {
    number: "03",
    title: "1坪から、一緒に育てる。",
    text: "小ロットの発送や段ボール数箱の保管も歓迎。始めたばかりの事業から、取扱量の増加まで相談できる物流パートナーを目指します。",
  },
]

const services = [
  {
    title: "倉庫保管",
    text: "1坪からの小規模保管、EC商品の在庫保管、繁忙期の一時保管などをご相談いただけます。",
  },
  {
    title: "発送代行・EC物流",
    text: "商品の保管・ピッキング・梱包・発送まで。出荷量や販売方法に合わせて運用をご提案します。",
  },
  {
    title: "検品・流通加工",
    text: "検品、シール貼り、セット組み、封入、梱包など、手作業を伴う工程にも対応します。",
  },
  {
    title: "スポット対応・輸送手配",
    text: "繁忙期の応援や一時的な出荷、法人向けの輸送手配など、必要な業務だけでもご相談ください。",
  },
]

const achievements = [
  {
    title: "ふるさと納税返礼品",
    text: "保管・流通加工・梱包・発送の一括対応。",
  },
  {
    title: "美容商材",
    text: "容器・パッケージの検品や商品セット組み。",
  },
  {
    title: "EC・アパレル",
    text: "EC商品の保管・梱包・継続的な発送業務。",
  },
]

const steps = [
  {
    title: "まずはご相談",
    text: "商品、物量、お困りごとを分かる範囲でお知らせください。",
  },
  {
    title: "条件確認・お見積り",
    text: "保管量、作業内容、出荷頻度、開始時期などを確認します。",
  },
  {
    title: "運用準備・開始",
    text: "入庫や出荷の手順を決め、合意した内容で運用を開始します。",
  },
]

const faqs = [
  {
    question: "発送件数が少なくても相談できますか？",
    answer:
      "はい。小ロットの発送や、ECを始めたばかりの事業も歓迎しています。商品や物量に合わせて対応方法をご相談します。",
  },
  {
    question: "段ボール数箱の保管でも大丈夫ですか？",
    answer:
      "はい。1坪程度の小規模保管もご相談いただけます。商品の大きさ・数量・保管期間をお知らせください。",
  },
  {
    question: "土日祝も出荷できますか？",
    answer:
      "365日稼働の物流体制で対応しています。出荷内容・締切・作業体制などの運用条件は、事前にご相談ください。",
  },
  {
    question: "料金や物量がまだ決まっていなくても相談できますか？",
    answer:
      "はい。まずは現在のお困りごとをお知らせください。必要な条件を一緒に整理し、お見積りをご案内します。",
  },
  {
    question: "検品や梱包だけでも依頼できますか？",
    answer:
      "はい。検品、シール貼り、セット組み、封入など、一部の工程だけでもご相談いただけます。",
  },
  {
    question: "急ぎの案件も相談できますか？",
    answer:
      "はい。希望日、商品、数量、作業内容をお知らせください。状況を確認し、対応可否と進め方をご案内します。",
  },
]

const primaryButton =
  "inline-flex min-h-[52px] items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"

const secondaryButton =
  "inline-flex min-h-[52px] items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-center text-sm font-bold text-zinc-900 transition hover:bg-amber-50"

const container = "mx-auto max-w-6xl px-5 sm:px-6"
const sectionTitle =
  "mt-3 text-3xl font-bold leading-snug tracking-tight sm:text-4xl"

export default function HomePage() {
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
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />

          <div className={`${container} py-14 sm:py-20 lg:py-24`}>
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.18em] text-amber-300">
                大阪・福岡から全国へ｜GAMI LOGISTICS
              </p>

              <h1 className="mt-6 text-[2.25rem] font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                365日、
                <br />
                物流を止めない。
              </h1>

              <p className="mt-5 text-2xl font-bold leading-snug text-amber-300 sm:text-3xl">
                まず返す。すぐ動く。
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/85">
                1坪から、スモールビジネスを支える。
                <br />
                倉庫保管・発送代行・検品・流通加工まで。
                <br />
                小さなご依頼も、急なお困りごとも、
                <br className="sm:hidden" />
                まずGAMIにご相談ください。
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["365日稼働", "1坪から", "小ロット歓迎", "全国対応"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/company#contact" className={primaryButton}>
                  物流の見積り・相談をする
                </Link>

                <a
                  href="tel:0661159935"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/40 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
                >
                  電話で相談：06-6115-9935
                </a>
              </div>

              <p className="mt-4 text-xs leading-6 text-white/65">
                ※365日対応は、出荷内容・作業内容・運用条件を事前にご相談ください。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 py-14 sm:py-20">
          <div className={container}>
            <p className="text-xs font-bold tracking-widest text-amber-700">
              SMALL BUSINESS
            </p>
            <h2 className={sectionTitle}>
              「この量でも頼める？」
              <br />
              その相談から、歓迎します。
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600">
              物量が少ないからと、遠慮する必要はありません。
              必要な業務だけでも、開始時期が未定でも、
              まずはお困りごとをお聞かせください。
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {concerns.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-white p-5"
                >
                  <span className="shrink-0 font-bold text-amber-600">
                    ✓
                  </span>
                  <p className="text-sm font-semibold leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/company#contact"
                className={`${primaryButton} w-full sm:w-auto`}
              >
                「これ頼める？」を相談する
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className={container}>
            <p className="text-xs font-bold tracking-widest text-amber-700">
              WHY GAMI
            </p>
            <h2 className={sectionTitle}>
              事業の規模に合わせて、
              <br />
              物流を支える。
            </h2>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {strengths.map((item) => (
                <article
                  key={item.number}
                  className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8"
                >
                  <p className="text-sm font-bold text-amber-600">
                    {item.number}
                  </p>
                  <h3 className="mt-4 text-xl font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 py-14 text-white sm:py-20">
          <div className={container}>
            <p className="text-xs font-bold tracking-widest text-amber-300">
              SERVICES
            </p>
            <h2 className={sectionTitle}>
              保管・加工・発送・輸送。
              <br />
              必要なところから任せられる。
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {services.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/logistics"
              className="mt-7 inline-flex min-h-[48px] items-center gap-3 text-sm font-bold text-amber-300 underline underline-offset-4"
            >
              物流サービスを詳しく見る
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className={container}>
            <p className="text-xs font-bold tracking-widest text-amber-700">
              EXPERIENCE
            </p>
            <h2 className={sectionTitle}>物流・発送・加工の実績。</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {achievements.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-white p-6"
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-600">
              美容商材の検品・セット組みなど、細かな手作業にも対応。
              化粧品製造業許可・第一種貨物利用運送事業など、
              業務に必要な許認可を活かして物流を支えます。
            </p>
          </div>
        </section>

        <section className="bg-amber-50 py-14 sm:py-20">
          <div className={container}>
            <p className="text-xs font-bold tracking-widest text-amber-700">
              LOGISTICS BASE
            </p>
            <h2 className={sectionTitle}>大阪・福岡から、全国へ。</h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-3xl border border-amber-100 bg-white">
                <img
                  src="/images/warehouse-moriguchi.jpg"
                  alt="株式会社GAMIの大阪物流センター"
                  width={960}
                  height={600}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-bold text-amber-700">OSAKA</p>
                  <h3 className="mt-2 text-2xl font-bold">
                    大阪物流センター
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    大阪府守口市大日町1-8-18
                    <br />
                    約100坪の倉庫を拠点に、保管・検品・流通加工・発送に対応。
                    1坪からの保管もご相談いただけます。
                  </p>
                </div>
              </article>

              <article className="flex flex-col justify-center rounded-3xl border border-amber-100 bg-white p-6 sm:p-8">
                <p className="text-xs font-bold text-amber-700">FUKUOKA</p>
                <h3 className="mt-2 text-2xl font-bold">
                  福岡物流センター
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  福岡市中央区の物流拠点。
                  大阪物流センターと連携し、
                  商品や配送先、必要な作業に合わせて運用をご相談します。
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  全国への発送・輸送手配も対応。
                  ご希望の配送条件をお知らせください。
                </p>
                <Link
                  href="/warehouse"
                  className={`${secondaryButton} mt-7`}
                >
                  倉庫・物流拠点を見る
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className={container}>
            <p className="text-xs font-bold tracking-widest text-amber-700">
              HOW TO START
            </p>
            <h2 className={sectionTitle}>ご相談から、物流の開始まで。</h2>

            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map((item, index) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-white p-6"
                >
                  <p className="text-sm font-bold text-amber-600">
                    STEP {index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-2xl bg-amber-50 p-6">
              <p className="font-bold">相談前の資料準備は、完璧でなくてOK。</p>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                「何の商品か」「だいたいの数量」「お願いしたい作業」
                「希望時期」が分かると、ご案内がスムーズです。
                未定の項目は、相談しながら整理できます。
              </p>
              <Link
                href="/company#contact"
                className={`${primaryButton} mt-5 w-full sm:w-auto`}
              >
                物流の見積り・相談をする
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className={`${container} max-w-4xl`}>
            <p className="text-xs font-bold tracking-widest text-amber-700">
              FAQ
            </p>
            <h2 className={sectionTitle}>相談前のよくあるご質問。</h2>

            <div className="mt-8 space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-black/10 bg-[#fbfaf7] p-5"
                >
                  <summary className="cursor-pointer text-sm font-bold leading-7">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className={container}>
            <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10">
              <p className="text-xs font-bold tracking-widest text-amber-700">
                HEAD SPA FRANCHISE
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
                ヘッドスパの開業・運営も支援。
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
                ヘッドスパ専門店ゆうの技術指導と、
                GAMIの経営・集客支援を組み合わせた開業サポート。
                加盟・開業をご検討の方は、FC専用ページをご覧ください。
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/headspa-franchise"
                  className={secondaryButton}
                >
                  ヘッドスパFC・開業支援を見る
                </Link>
                <a
                  href="https://www.yuheadspa.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryButton}
                >
                  ヘッドスパ専門店ゆう 公式サイト ↗
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
