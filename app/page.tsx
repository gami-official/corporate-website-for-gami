import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "株式会社GAMI｜物流運送・倉庫保管・流通加工を一括対応",
  description:
    "株式会社GAMIは大阪を拠点に、物流運送・倉庫保管・流通加工・発送代行・内職・梱包資材まで一括対応。物流を主軸に、ヘッドスパフランチャイズ事業、整理買取事業も展開しています。",
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
    title: "ヘッドスパ事業",
    lead: "実店舗実績を活かした展開",
    body: "ヘッドスパ専門店ゆう本店の実績をもとに、開業・技術・経営・集客まで支援するフランチャイズ事業です。",
    href: "/headspa-franchise",
    button: "フランチャイズを見る",
  },
  {
    title: "整理買取事業",
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
]

const achievements = [
  "美容商材",
  "アパレル",
  "食品",
  "ギフト商品",
  "EC商品",
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

const recommendedFor = [
  {
    title: "倉庫を外注したい企業様",
    body: "保管スペースや管理コストを見直したい場合におすすめです。",
  },
  {
    title: "発送業務を任せたい企業様",
    body: "出荷作業や梱包作業の手間を減らしたい場合に向いています。",
  },
  {
    title: "物流コストを下げたい企業様",
    body: "無駄な工程や外注コストを整理したい場合にご相談いただけます。",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main>
       <section className="relative h-[65vh] min-h-[520px] w-full overflow-hidden sm:h-[75vh] sm:min-h-[620px]">

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

  <div className="relative z-10 flex h-full items-center justify-center px-5 text-white">
    <div className="w-full max-w-[360px] text-center sm:max-w-4xl">

      <p className="text-[11px] font-semibold tracking-[0.16em] text-orange-300 sm:text-sm">
        LOGISTICS / WAREHOUSE / TRANSPORTATION
      </p>

      <h1 className="mt-4 text-[clamp(1.8rem,5.5vw,4rem)] font-bold leading-[1.2] tracking-[-0.02em]">
        物流を止めない。<br />
        現場で支えるパートナー
      </h1>

      <p className="mt-5 text-sm leading-7 text-gray-200 sm:mx-auto sm:max-w-2xl sm:text-base">
        倉庫保管・流通加工・配送・内職・段ボールまで一括対応。
        定期案件からスポット案件まで、現場に合った最適な体制をご提案します。
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">

        <Link
          href="/contact"
          className="rounded-2xl bg-orange-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-orange-400"
        >
          無料見積りはこちら
        </Link>

        <Link
          href="tel:0661159935"
          className="rounded-2xl border border-white/30 px-6 py-4 text-base text-white transition hover:bg-white/10"
        >
          電話で相談する
        </Link>

      </div>

      <p className="mt-4 text-xs text-white/70">
        倉庫・配送・流通加工までまとめて対応可能
      </p>

    </div>
  </div>
</section>
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                BUSINESS
              </p>
              <h2 className="mt-3 text-3xl font-bold">株式会社GAMIの事業内容</h2>
              <p className="mt-5 text-base leading-8 text-zinc-600">
                株式会社GAMIは物流運送事業を主軸に、
                ヘッドスパ事業、整理買取事業を展開しています。
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
          </div>
        </section>

        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                MAIN BUSINESS
              </p>
              <h2 className="mt-3 text-3xl font-bold">GAMIの主軸は物流運送事業です</h2>
              <p className="mt-5 text-base leading-8 text-zinc-600">
                倉庫保管・流通加工・配送・内職・段ボールまで一括対応。
                複数業者に分ける必要がなく、コスト削減と業務効率化を実現します。
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

            <div className="mt-8">
              <Link
                href="/logistics"
                className="inline-flex rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                物流サービスの詳細を見る
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-center">
              こんな企業様におすすめ
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {recommendedFor.map((item) => (
                <div key={item.title} className="rounded-2xl border p-6">
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm text-zinc-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                  WAREHOUSE
                </p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">倉庫体制のご紹介</h2>
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
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">倉庫写真</h2>
                <p className="mt-5 text-sm leading-7 text-zinc-600">
                  守口倉庫・大阪南倉庫の外観や内観をご紹介します。
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <img
                    src="/images/moriguchi-warehouse.jpg"
                    alt="守口倉庫 外観"
                    className="h-[200px] w-full rounded-2xl object-cover"
                  />
                  <img
                    src="/images/moriguchi-inside.jpg"
                    alt="守口倉庫 内観"
                    className="h-[200px] w-full rounded-2xl object-cover"
                  />
                  <img
                    src="/images/osaka-minami-warehouse.jpg"
                    alt="大阪南倉庫 外観"
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

        <section className="bg-zinc-50 py-16">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-2xl font-bold">対応実績・取扱い商材</h2>
            <p className="mt-4 text-zinc-600">
              多様な商材の物流に対応しています
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {achievements.map((item) => (
                <span
                  key={item}
                  className="rounded-full border bg-white px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                WHY GAMI
              </p>
              <h2 className="mt-3 text-3xl font-bold">GAMIが選ばれる理由</h2>
              <p className="mt-5 text-base leading-8 text-zinc-600">
                物流作業・利用運送、倉庫保管、流通加工、化粧品対応、段ボール提案まで、
                単発ではなく全体最適でご提案します。
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">主要サービス一覧</h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-700">
              物流を主軸に、内職・軽作業、段ボール見積り、ヘッドスパフランチャイズ、
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
          <div className="mx-auto max-w-6xl px-6">
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
                    最短当日で無料見積り
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
              ヘッドスパ事業や関連事業も展開しています。
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
