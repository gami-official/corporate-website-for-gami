import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "株式会社GAMI｜物流運送・倉庫保管・流通加工を一括対応",
  description:
    "株式会社GAMIは大阪を拠点に、物流運送・倉庫保管・流通加工・発送代行・内職・梱包資材まで一括対応。物流を主軸に、ヘッドスパフランチャイズ事業、遺品整理・生前整理事業も展開しています。",
}

const businessCards = [
  {
    title: "物流運送事業",
    lead: "GAMIの主軸事業",
    body: "利用運送、倉庫保管、流通加工、発送代行まで一括対応。定期案件からスポット案件まで、現場に合った物流体制をご提案します。",
    href: "/logistics",
    button: "物流サービスを見る",
  },
  {
    title: "ヘッドスパフランチャイズ事業",
    lead: "実店舗実績を活かした展開",
    body: "ヘッドスパ専門店ゆう本店の実績をもとに、開業・技術・経営・集客まで支援するフランチャイズ事業です。",
    href: "/headspa-franchise",
    button: "フランチャイズを見る",
  },
  {
    title: "遺品整理・生前整理事業",
    lead: "整理を入口にした相談導線",
    body: "遺品整理・生前整理を入口に、出張対応・店舗対応・買取まで一括でご相談いただける事業です。",
    href: "/seihin",
    button: "整理・買取サービスを見る",
  },
]

const logisticsHighlights = [
  "物流業務は定期・スポットのどちらにも柔軟対応",
  "軽貨物〜大型車まで全国手配可能",
  "入出庫・保管・検品・流通加工まで一括対応",
  "内職・セット組み・シール貼り・封入作業にも対応",
  "化粧品製造業許可を取得した倉庫で対応可能",
  "段ボールをミリ単位で低コスト製作",
]

const strengths = [
  {
    title: "ワンストップ対応",
    body: "保管・流通加工・配送・資材提案まで一社で完結。複数業者に依頼する手間とコストを抑えられます。",
  },
  {
    title: "利用運送を強化",
    body: "全国各地へ軽貨物から大型車まで最適手配。急な配送や波動のある案件にも柔軟に対応します。",
  },
  {
    title: "現場対応力",
    body: "定期案件はもちろん、スポット案件や突発対応にもスピーディーに対応。現場起点で動けるのが強みです。",
  },
  {
    title: "化粧品対応倉庫",
    body: "化粧品製造業許可を取得した倉庫で、製造・充填・包装・保管まで視野に入れたご提案が可能です。",
  },
  {
    title: "内職・流通加工対応",
    body: "検品、セット組み、シール貼り、封入作業などを組み合わせ、物流全体の効率化を支援します。",
  },
  {
    title: "段ボールの価格提案",
    body: "大阪限定で法人向けに段ボール販売を展開。ミリ単位の別注にも対応し、無料見積りへつなげやすい入口商品です。",
  },
]

const achievements = [
  "美容商材",
  "アパレル",
  "スパイス",
  "ふるさと納税返礼品",
]

const warehousePoints = [
  {
    title: "守口倉庫",
    body: "小規模案件や機密性の高い保管に適した拠点。柔軟な対応がしやすく、細かな運用相談にも向いています。",
  },
  {
    title: "大阪南倉庫",
    body: "長期保管・大量保管・パレット運用に対応しやすい拠点。案件規模に応じた最適配置が可能です。",
  },
]

const serviceLinks = [
  {
    title: "物流運送事業",
    body: "定期・スポットを問わず、保管・加工・配送まで一括対応。全国対応の利用運送ネットワークで最適な物流体制をご提案します。",
    href: "/logistics",
    button: "物流ページを見る",
  },
  {
    title: "内職・軽作業",
    body: "シール貼り・封入・セット組み・検品・梱包など、人手が必要な軽作業も物流とまとめて委託できます。",
    href: "/naishoku",
    button: "内職ページを見る",
  },
  {
    title: "段ボール見積り",
    body: "大阪限定で法人向け段ボール見積りに対応。ミリ単位での作成や梱包資材コストの見直しもご相談いただけます。",
    href: "/danbo",
    button: "段ボールページを見る",
  },
  {
    title: "整理・買取サービス",
    body: "遺品整理・生前整理を入口に、出張対応・店舗対応・買取まで一括でご相談いただけます。",
    href: "/seihin",
    button: "整理サービスを見る",
  },
]

const processSteps = [
  "お問い合わせ",
  "ヒアリング",
  "ご提案・お見積り",
  "手配・運用開始",
  "継続改善",
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main>
        <section className="relative h-[90vh] w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/video/hero-logistics.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
            <p className="text-sm font-semibold tracking-[0.25em] text-orange-300">
              LOGISTICS / WAREHOUSE / TRANSPORTATION
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              物を止めない物流を、
              <br />
              現場で支えるパートナー
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-200 md:text-base">
              株式会社GAMIは物流運送事業を主軸に、
              <br className="hidden md:block" />
              倉庫保管・流通加工・発送代行・内職・梱包資材まで一括対応。
              <br />
              定期案件からスポット案件まで、現場に合った最適な体制をご提案します。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-2xl bg-orange-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-orange-400"
              >
                無料見積りはこちら
              </Link>

              <Link
                href="tel:0661159935"
                className="rounded-2xl border border-white/30 px-6 py-4 text-center text-white transition hover:bg-white/10"
              >
                電話で相談する
              </Link>

              <Link
                href="/logistics"
                className="rounded-2xl bg-orange-600 px-6 py-4 text-center font-bold text-white transition hover:bg-orange-500"
              >
                物流サービスを見る
              </Link>
            </div>

            <p className="mt-5 text-xs leading-6 text-white/70">
              倉庫・配送・流通加工・段ボールまでまとめて相談可能です
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
              BUSINESS
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              株式会社GAMIの事業内容
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              株式会社GAMIは物流運送事業を主軸に、
              ヘッドスパフランチャイズ事業、遺品整理・生前整理事業を展開しています。
              まずは主力である物流を中心に、必要に応じて各事業へご案内できる構成です。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {businessCards.map((business) => (
              <div
                key={business.title}
                className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-orange-500">
                  {business.lead}
                </p>
                <h3 className="mt-3 text-xl font-bold text-zinc-900">{business.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{business.body}</p>
                <Link
                  href={business.href}
                  className="mt-6 inline-flex rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
                >
                  {business.button}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-100">
              MAIN BUSINESS
            </p>

            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              GAMIの主軸は物流運送事業です
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/90 md:text-base">
              保管・配送・流通加工・内職・段ボールまでまとめてお任せください。
              <br />
              複数業者に分ける手間をなくし、コスト削減と業務効率化を実現します。
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/logistics"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
              >
                物流サービスを見る
              </Link>

              <Link
                href="/danbo"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
              >
                段ボール見積りを依頼する
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                今すぐ無料で相談する
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/70">
              ※「まずは相談だけ」でもOKです。お気軽にお問い合わせください。
            </p>
          </div>
        </section>

        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                LOGISTICS
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                物流業務の対応範囲
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-600">
                定期案件もスポット案件も、現場の課題に合わせて柔軟に対応。
                入出庫から配送、内職、梱包資材まで、物流に関わる周辺業務もまとめてご相談いただけます。
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {logisticsHighlights.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl bg-white px-5 py-4 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-100"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                  WAREHOUSE
                </p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">
                  倉庫体制のご紹介
                </h2>
                <p className="mt-5 text-sm leading-7 text-zinc-600">
                  価格は案件ごとに異なるため公開していませんが、
                  取り扱い商材や保管量、運用方法に応じて最適な拠点と体制をご提案します。
                </p>

                <div className="mt-8 space-y-5">
                  {warehousePoints.map((warehouse) => (
                    <div
                      key={warehouse.title}
                      className="rounded-2xl border border-zinc-200 p-5"
                    >
                      <h3 className="text-lg font-bold text-zinc-900">{warehouse.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">{warehouse.body}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/logistics"
                  className="mt-8 inline-flex rounded-2xl bg-zinc-950 px-6 py-4 text-base font-semibold text-white transition hover:bg-zinc-800"
                >
                  倉庫・物流の詳細を見る
                </Link>
              </div>

              <div className="rounded-3xl bg-zinc-50 p-8">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                  WAREHOUSE PHOTO
                </p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">
                  倉庫写真
                </h2>
                <p className="mt-5 text-sm leading-7 text-zinc-600">
                  守口倉庫・大阪南倉庫の外観や内観をご紹介します。
                  写真が入ることで、法人のお客様に対する信頼感が高まります。
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <img
                    src="/images/moriguchi-warehouse.jpg"
                    alt="守口倉庫 外観"
                    className="h-[200px] w-full rounded-2xl object-cover"
                  />
                  <img
                    src="/images/osaka-minami-warehouse.jpg"
                    alt="大阪南倉庫 外観"
                    className="h-[200px] w-full rounded-2xl object-cover"
                  />
                  <img
                    src="/images/moriguchi-inside.jpg"
                    alt="守口倉庫 内観"
                    className="h-[200px] w-full rounded-2xl object-cover"
                  />
                  <img
                    src="/images/osaka-minami-inside.jpg"
                    alt="大阪南倉庫 内観"
                    className="h-[200px] w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                WHY GAMI
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                GAMIが選ばれる理由
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-600">
                物流作業・利用運送、倉庫保管、流通加工、化粧品対応、段ボール提案まで、
                単発ではなく全体最適でご提案します。
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {strengths.map((strength) => (
                <div
                  key={strength.title}
                  className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-zinc-100"
                >
                  <h3 className="text-xl font-bold text-zinc-900">{strength.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">{strength.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl bg-zinc-950 p-8 text-white">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-300">
                ACHIEVEMENTS
              </p>
              <h2 className="mt-3 text-3xl font-bold">実績・対応分野</h2>
              <p className="mt-5 text-sm leading-7 text-zinc-300">
                美容・食品・アパレル・ギフトなど、多様な商材の物流に対応。
                <br />
                商材ごとの特性に合わせて最適な運用を行います。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {achievements.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                DANBOARD / PACKAGING
              </p>
              <h2 className="mt-3 text-3xl font-bold text-zinc-900">
                段ボール販売を入口に、無料見積りへ
              </h2>
              <p className="mt-5 text-sm leading-7 text-zinc-700">
                大阪限定で、法人向け段ボール販売を強化。安く、ミリ単位で作成できる強みを活かし、
                物流改善の入口としてご相談を受けられる設計にしています。
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                <li>・ミリ単位で別注可能</li>
                <li>・法人向けの低コスト提案</li>
                <li>・梱包資材全体の見直し相談にも対応</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-2xl bg-orange-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-orange-400"
              >
                段ボールの無料見積りはこちら
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div>
            <p className="text-sm font-semibold tracking-widest text-orange-500">
              MAIN SERVICE
            </p>

            <h2 className="mt-3 text-3xl font-bold text-zinc-900">
              主要サービス一覧
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-700">
              物流を主軸に、内職・軽作業、段ボール見積り、フランチャイズ、
              遺品整理・生前整理まで展開しています。課題に合わせて必要なページをご覧ください。
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {serviceLinks.map((service) => (
                <div key={service.title} className="rounded-3xl border bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-zinc-900">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-700">{service.body}</p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-block rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white"
                  >
                    {service.button}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">FLOW</p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">ご依頼の流れ</h2>
                <div className="mt-8 grid gap-4">
                  {processSteps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-2xl border border-zinc-200 px-5 py-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <p className="text-base font-medium text-zinc-800">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                  CONTACT
                </p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">まずは無料でご相談ください</h2>
                <p className="mt-5 text-sm leading-7 text-zinc-600">
                  物流業務は定期案件・スポット案件を問わず、
                  利用運送、倉庫保管、流通加工、内職、段ボール見積りまで対応可能です。
                  現状やご希望をお聞かせいただければ、最適な形をご提案します。
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="rounded-2xl bg-orange-500 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-orange-400"
                  >
                    無料見積りはこちら
                  </Link>
                  <Link
                    href="tel:0661159935"
                    className="rounded-2xl border border-zinc-300 px-6 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-zinc-50"
                  >
                    電話で相談する
                  </Link>
                </div>

                <p className="mt-4 text-xs leading-6 text-zinc-500">
                  ※相談だけでもOKです。しつこい営業は一切ありません。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl font-bold">関連事業のご案内</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              株式会社GAMIでは、物流運送事業を主軸に、
              ヘッドスパフランチャイズ事業や関連事業も展開しています。
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900">ヘッドスパ専門店ゆう</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  完全個室・1日3名限定で運営するヘッドスパ専門店。
                  実店舗としての運営実績が、フランチャイズ事業の土台になっています。
                </p>
                <a
                  href="https://www.yuheadspa.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-sm font-semibold text-orange-500"
                >
                  ヘッドスパ専門店ゆうを見る →
                </a>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900">A-PRODUCE株式会社</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  中古車販売・レッカー・軽運送・物流まで対応する関連事業。
                  事業連携を通じて、幅広いご相談に対応しています。
                </p>
                <a
                  href="https://www.a-produce.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-sm font-semibold text-orange-500"
                >
                  A-PRODUCEサイトを見る →
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
