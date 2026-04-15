import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "大阪の物流会社｜保管・流通加工・発送代行なら株式会社GAMI",
  description:
    "株式会社GAMIは大阪を拠点に、物流運送・倉庫保管・流通加工・発送代行・内職・梱包資材まで一括対応。定期案件からスポット案件まで、現場に合わせた物流体制をご提案します。",
  keywords: [
    "物流会社 大阪",
    "発送代行 大阪",
    "物流 outsourcing",
    "流通加工 大阪",
    "倉庫 保管 大阪",
    "利用運送 大阪",
    "内職 外注 大阪",
    "梱包 代行 大阪",
  ],
}

const coreServices = [
  {
    title: "物流業務を丸ごと任せられる体制",
    body: "定期・スポットを問わず、保管・入出庫・検品・流通加工・配送まで一括対応。複数業者に分ける手間をなくし、効率化とコスト削減を実現します。",
  },
  {
    title: "全国対応の利用運送ネットワーク",
    body: "軽貨物から大型車まで、全国各地へ最適な車両を手配可能。急な配送や波動のある案件にも柔軟に対応します。",
  },
  {
    title: "内職・流通加工まで一括対応",
    body: "セット組み・シール貼り・封入・梱包・検品など、人手が必要な作業も倉庫内で対応可能。作業から発送までをまとめて任せられます。",
  },
  {
    title: "化粧品対応可能な倉庫",
    body: "化粧品製造業許可を取得した倉庫で、製造・充填・包装・保管まで対応。品質管理が求められる商材も安心してお任せいただけます。",
  },
]

const achievements = [
  "美容商材",
  "アパレル",
  "スパイス",
  "ふるさと納税返礼品",
]

const transportCases = [
  "定期案件の見直しや外注先の切り替え",
  "急なスポット案件や繁忙期対応",
  "軽貨物〜大型車の手配が必要な案件",
  "保管と配送をまとめて任せたい案件",
  "流通加工や内職作業を含む案件",
  "化粧品関連の保管・作業が必要な案件",
]

const packingFeatures = [
  "大阪限定・法人向け対応",
  "ミリ単位で段ボールを作成可能",
  "コスト削減につながるご提案",
  "梱包資材全体の見直し相談にも対応",
]

const processSteps = [
  {
    step: "01",
    title: "お問い合わせ",
    body: "物流内容、物量、納期、ご希望の運用をお聞かせください。ざっくりしたご相談段階でも問題ありません。",
  },
  {
    step: "02",
    title: "ヒアリング・現状確認",
    body: "現在の課題、配送条件、保管の有無、流通加工の必要性などを整理し、最適な形を検討します。",
  },
  {
    step: "03",
    title: "ご提案・お見積り",
    body: "利用運送、倉庫保管、内職、段ボール提案まで含めて、必要な内容をまとめてご提案します。",
  },
  {
    step: "04",
    title: "手配・運用開始",
    body: "案件に応じて、軽貨物から大型車まで手配し、保管・加工・配送をスムーズにスタートします。",
  },
]

const warehousePoints = [
  {
    title: "守口倉庫",
    body: "小規模案件や機密性の高い保管に適した拠点です。細かな運用相談や柔軟な対応がしやすく、商材に合わせた保管設計にも向いています。",
  },
  {
    title: "大阪南倉庫",
    body: "長期保管・大量保管・パレット運用に対応しやすい拠点です。案件規模に応じて最適な保管体制をご提案できます。",
  },
]

const strengths = [
  {
    title: "ワンストップ対応",
    body: "保管・流通加工・配送・資材提案まで一括対応。複数業者に分ける手間とコストを削減できます。",
  },
  {
    title: "全国対応の利用運送",
    body: "軽貨物から大型車まで、全国に最適な車両を手配可能。急な案件や波動にも柔軟に対応します。",
  },
  {
    title: "現場対応力",
    body: "定期・スポット問わず、現場起点で柔軟に対応。スピードと実行力が強みです。",
  },
  {
    title: "化粧品対応倉庫",
    body: "化粧品製造業許可を取得した倉庫で対応。品質管理が求められる商材も安心してお任せいただけます。",
  },
]

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-950 text-white">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-orange-500 blur-3xl" />
            <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-amber-400 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold tracking-[0.22em] text-orange-300">
                  LOGISTICS / WAREHOUSE / TRANSPORTATION
                </p>
                <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  物流の仕事を、
                  <br />
                  定期でもスポットでも。
                  <br />
                  保管・加工・配送まで一括対応します。
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-200 md:text-lg">
                  株式会社GAMIは、物流業務全体を見てご提案する現場対応型の物流パートナーです。
                  利用運送を強みとし、全国各地へ軽貨物〜大型車まで手配可能。
                  さらに、倉庫保管、流通加工、内職、化粧品対応、段ボール提案までまとめてご相談いただけます。
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="rounded-2xl bg-orange-500 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-orange-400"
                  >
                    最短当日対応｜無料見積りはこちら
                  </Link>
                  <Link
                    href="tel:0661159935"
                    className="rounded-2xl border border-white/20 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
                  >
                    まずは電話で相談する
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm font-semibold tracking-wide text-orange-300">
                  こんなご相談に対応
                </p>
                <div className="mt-5 space-y-3">
                  {transportCases.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-black/20 px-4 py-4 text-sm leading-7 text-zinc-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold md:text-3xl">
              人手不足の軽作業・内職外注もまとめて対応します
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/90 md:text-base">
              シール貼り・封入・セット組み・検品など、手作業が必要な業務もまとめてお任せください。
              物流と一体化することで、コスト削減と業務効率化を同時に実現できます。
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/naishoku"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
              >
                内職・軽作業の詳細を見る
              </Link>

              <Link
                href="/danbo"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
              >
                段ボール見積りを依頼する
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                物流の無料相談はこちら
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/70">
              ※「内職だけ相談したい」でもOKです。まずはお気軽にご相談ください。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">SERVICE</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">GAMIの物流サービス</h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              配送だけではなく、物流全体の設計・運用まで見て対応できるのがGAMIの強みです。
              定期案件、スポット案件、保管、流通加工、内職まで一貫してご相談いただけます。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-zinc-900">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{service.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                  ACHIEVEMENTS
                </p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">取扱実績・対応分野</h2>
                <p className="mt-5 text-sm leading-7 text-zinc-600">
                  美容商材・アパレル・スパイス・ふるさと納税返礼品など、
                  商材ごとの特性に合わせて保管・加工・出荷・配送まで対応します。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {achievements.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-950 px-4 py-2 text-sm text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">POINT</p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">
                  全国対応の利用運送ネットワーク
                </h2>
                <p className="mt-5 text-sm leading-7 text-zinc-700">
                  軽貨物〜大型車まで、案件内容に応じて最適な車両を全国で手配可能です。
                  急な案件や波動のある案件にも柔軟に対応します。
                </p>
                <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                  <li>・全国各地へ対応可能</li>
                  <li>・軽貨物〜大型車まで手配</li>
                  <li>・定期案件・スポット案件どちらにも柔軟対応</li>
                  <li>・急な依頼や繁忙期の波動にも対応</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl bg-zinc-950 p-8 text-white">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-300">
                LIGHT WORK / INNER WORK
              </p>
              <h2 className="mt-3 text-3xl font-bold">内職・流通加工の外注も対応</h2>
              <p className="mt-5 text-sm leading-7 text-zinc-300">
                セット組み、シール貼り、封入、梱包など、手作業が必要な工程にも対応。
                小ロットから大量ロットまで、物流と合わせて効率的に運用できます。
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-200">
                <li>・検品</li>
                <li>・セット組み</li>
                <li>・シール貼り</li>
                <li>・封入・梱包作業</li>
              </ul>
              <Link
                href="/naishoku"
                className="mt-8 inline-flex rounded-2xl bg-orange-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-orange-400"
              >
                内職・軽作業の詳細を見る
              </Link>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                COSMETICS WAREHOUSE
              </p>
              <h2 className="mt-3 text-3xl font-bold text-zinc-900">
                化粧品対応ができる倉庫を活かす
              </h2>
              <p className="mt-5 text-sm leading-7 text-zinc-600">
                化粧品製造業許可を取得した倉庫で作業している強みを活かし、
                化粧品関連の保管・作業・物流提案まで対応します。
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                他社と差別化しやすい領域として、今後さらに強く打ち出していけるポイントです。
              </p>
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
                  href="/contact"
                  className="mt-8 inline-flex rounded-2xl bg-zinc-950 px-6 py-4 text-base font-semibold text-white transition hover:bg-zinc-800"
                >
                  倉庫・物流について相談する
                </Link>
              </div>

              <div className="rounded-3xl bg-zinc-50 p-8">
  <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
    PHOTO SPACE
  </p>
  <h2 className="mt-3 text-3xl font-bold text-zinc-900">
    倉庫写真
  </h2>
  <p className="mt-5 text-sm leading-7 text-zinc-600">
    守口倉庫・大阪南倉庫の外観や内観をご紹介します。
    写真が入ることで、法人のお客様に対する信頼感が一気に高まります。
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

                <p className="mt-5 text-xs leading-6 text-zinc-500">
                  ※次の修正で実画像に差し替えればOKです。今は枠だけ入れておけば十分です。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">DANBOARD</p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">
                  大阪限定｜法人向け段ボール無料見積り
                </h2>
                <p className="mt-5 text-sm leading-7 text-zinc-700">
                  段ボールを安く、ミリ単位で作成可能です。
                  梱包資材コストの見直しや物流改善の入口として、
                  まずは専用ページから無料見積りをご依頼ください。
                </p>

                <p className="mt-4 text-sm font-medium text-zinc-800">
                  「サイズがまだ決まっていない」「まずは概算だけ知りたい」という段階でもご相談いただけます。
                </p>

                <div className="mt-6 space-y-3">
                  {packingFeatures.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white px-4 py-4 text-sm text-zinc-700 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/danbo"
                  className="mt-8 inline-flex rounded-2xl bg-orange-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-orange-400"
                >
                  段ボール見積りページへ
                </Link>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">FLOW</p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">ご相談から運用開始まで</h2>
                <div className="mt-8 space-y-4">
                  {processSteps.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-2xl border border-zinc-200 px-5 py-5"
                    >
                      <p className="text-sm font-semibold text-orange-500">{item.step}</p>
                      <h3 className="mt-2 text-lg font-bold text-zinc-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-600">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div>
            <p className="text-sm font-semibold tracking-widest text-orange-500">STRENGTH</p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-900">
              株式会社GAMIが選ばれる理由
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-700">
              単なる運送ではなく、物流全体を最適化するパートナーとして、
              現場に寄り添った提案とスピード対応で選ばれています。
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div key={strength.title} className="rounded-2xl border p-6">
                  <h3 className="font-semibold text-zinc-900">{strength.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-700">{strength.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10 lg:px-12">
            <p className="text-sm tracking-widest text-orange-400">CONTACT</p>

            <h2 className="mt-4 text-3xl font-bold">
              物流の外注先をお探しなら、まずはご相談ください
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-300">
              定期案件・スポット案件を問わず、最適な物流体制をご提案します。
              <br />
              「どこまで任せられるか相談したい」という段階でも問題ありません。
              <br />
              まずは無料見積りからお気軽にご相談ください。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-2xl bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-600"
              >
                無料見積りはこちら
              </Link>

              <Link
                href="tel:0661159935"
                className="rounded-2xl border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                電話で相談する
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
