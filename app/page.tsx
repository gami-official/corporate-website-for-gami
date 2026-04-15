import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "株式会社GAMI｜物流運送・保管・流通加工・発送代行を一括対応",
  description:
    "株式会社GAMIは大阪を拠点に、物流運送・倉庫保管・流通加工・発送代行・内職・梱包資材まで一括対応。利用運送から倉庫保管、段ボール見積り、ヘッドスパフランチャイズ、遺品整理・生前整理まで展開しています。",
}

const logisticsFeatures = [
  "物流業務は定期・スポットのどちらにも柔軟対応",
  "軽貨物〜大型車まで全国手配可能",
  "入出庫・保管・検品・流通加工まで一括対応",
  "内職・セット組み・シール貼り・封入作業にも対応",
  "化粧品製造業許可を取得した倉庫で対応可能",
  "段ボールをミリ単位で低コスト製作",
]

const achievements = [
  "美容商材",
  "アパレル",
  "スパイス",
  "ふるさと納税返礼品",
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

const logisticsServices = [
  {
    title: "物流案件の定期・スポット対応",
    body: "物流業務は定期案件から急なスポット案件まで対応。商材や物量、納品条件に合わせて最適な体制をご提案します。",
  },
  {
    title: "利用運送手配",
    body: "全国対応で軽貨物から大型車まで手配可能。エリア・物量・納期に応じて最適化します。",
  },
  {
    title: "倉庫保管・入出庫管理",
    body: "保管、検品、ピッキング、出荷まで一貫対応。物流現場の手間を減らします。",
  },
  {
    title: "流通加工・内職",
    body: "セット組み、ラベル貼り、封入、梱包などの軽作業を物流と合わせて対応できます。",
  },
  {
    title: "化粧品関連作業",
    body: "化粧品製造業許可取得倉庫の強みを活かし、化粧品関連の作業にも対応します。",
  },
  {
    title: "段ボール・梱包資材",
    body: "法人向けに、低コストかつミリ単位で調整できる段ボール・資材をご提案します。",
  },
]

const processSteps = [
  "お問い合わせ",
  "ヒアリング",
  "ご提案・お見積り",
  "手配・運用開始",
  "継続改善",
]

const businessRatio = [
  {
    title: "物流運送事業",
    body: "株式会社GAMIの主軸事業。利用運送、倉庫保管、流通加工、発送代行まで一括対応します。",
    href: "/logistics",
    button: "物流サービスを見る",
  },
  {
    title: "ヘッドスパフランチャイズ事業",
    body: "ヘッドスパ専門店ゆうの実店舗運営実績を活かし、開業・運営を支援するフランチャイズ事業です。",
    href: "/headspa-franchise",
    button: "フランチャイズを見る",
  },
  {
    title: "遺品整理・生前整理事業",
    body: "整理を入口に、出張対応・店舗対応・買取まで一括でご相談いただける事業です。",
    href: "/seihin",
    button: "整理・買取サービスを見る",
  },
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
              物を止めない物流を
              <br />
              現場で支えるパートナー
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-200 md:text-base">
              株式会社GAMIは、物流運送事業を主軸に、
              <br className="hidden md:block" />
              保管・配送・流通加工・内職・発送代行・梱包資材まで一括対応。
              <br />
              スポット案件から定期案件まで、現場に合った体制をご提案します。
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
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-100">
              MAIN BUSINESS
            </p>

            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              物流・輸送・保管・資材まで一括対応
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

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
              BUSINESS STRUCTURE
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              株式会社GAMIの事業構成
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              株式会社GAMIは、物流運送事業を主軸に、
              ヘッドスパフランチャイズ事業、遺品整理・生前整理事業を展開しています。
              まずは主力である物流を明確に打ち出し、その上で関連事業へ自然にご案内できる構成にしています。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {businessRatio.map((business) => (
              <div
                key={business.title}
                className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-zinc-900">{business.title}</h3>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-bold text-orange-600">
                    {business.ratio}
                  </span>
                </div>
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

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
              LOGISTICS FIRST
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              物流運送事業を主軸にしたサービス構成
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              株式会社GAMIの主軸は物流運送事業です。
              配送だけでなく、保管・加工・資材提案まで含めて、
              現場で本当に必要な機能をまとめてご提供します。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {logisticsServices.map((service) => (
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
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                FEATURES
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
              {logisticsFeatures.map((feature) => (
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
                  PHOTO SPACE
                </p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">
                  倉庫写真掲載エリア
                </h2>
                <p className="mt-5 text-sm leading-7 text-zinc-600">
                  ここには後ほど、守口倉庫・大阪南倉庫の外観や内観写真を掲載してください。
                  写真が入ることで、法人のお客様に対する信頼感が一気に高まります。
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white text-sm text-zinc-400">
                    守口倉庫 写真
                  </div>
                  <div className="flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white text-sm text-zinc-400">
                    大阪南倉庫 写真
                  </div>
                  <div className="flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white text-sm text-zinc-400">
                    倉庫内観 写真
                  </div>
                  <div className="flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white text-sm text-zinc-400">
                    作業風景 写真
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
                  OTHER BUSINESS
                </p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">関連事業について</h2>

                <div className="mt-8 space-y-6">
                  <div className="rounded-2xl border border-zinc-200 p-5">
                    <h3 className="text-xl font-bold text-zinc-900">
                      ヘッドスパフランチャイズ事業
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                      ヘッドスパ専門店ゆうの実店舗運営をもとに、
                      開業・運営・ブランディングまで支援するフランチャイズ事業です。
                      収益性と将来性の両面からご相談いただけます。
                    </p>
                    <Link
                      href="/headspa-franchise"
                      className="mt-4 inline-block text-sm font-semibold text-orange-500"
                    >
                      ヘッドスパ専門店ゆうフランチャイズを見る →
                    </Link>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 p-5">
                    <h3 className="text-xl font-bold text-zinc-900">
                      遺品整理・生前整理事業
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                      整理買取専門店ゆう大阪店は出張型、
                      整理買取専門店ゆう本店はヘッドスパ専門店ゆう店舗内での店舗型として展開。
                      遺品整理・生前整理を入口に、必要に応じて買取まで一括で対応します。
                    </p>
                    <Link
                      href="/seihin"
                      className="mt-4 inline-block text-sm font-semibold text-orange-500"
                    >
                      整理・買取サービスを見る →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div>
            <p className="text-sm font-semibold tracking-widest text-orange-500">
              MAIN SERVICE
            </p>

            <h2 className="mt-3 text-3xl font-bold text-zinc-900">
              株式会社GAMIの主力サービス
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-700">
              物流を主軸に、内職・軽作業、段ボール見積り、フランチャイズ、
              遺品整理・生前整理まで展開しています。
              課題に合わせて、必要なサービスページをご覧ください。
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-3xl border bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900">物流運送事業</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-700">
                  定期・スポットを問わず、保管・加工・配送まで一括対応。
                  全国対応の利用運送ネットワークで最適な物流体制をご提案します。
                </p>
                <Link
                  href="/logistics"
                  className="mt-6 inline-block rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white"
                >
                  物流ページを見る
                </Link>
              </div>

              <div className="rounded-3xl border bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900">内職・軽作業</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-700">
                  シール貼り・封入・セット組み・検品・梱包など、
                  人手が必要な軽作業も物流とまとめて委託できます。
                </p>
                <Link
                  href="/naishoku"
                  className="mt-6 inline-block rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white"
                >
                  内職ページを見る
                </Link>
              </div>

              <div className="rounded-3xl border bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900">段ボール見積り</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-700">
                  大阪限定で法人向け段ボール見積りに対応。
                  ミリ単位での作成や梱包資材コストの見直しもご相談いただけます。
                </p>
                <Link
                  href="/danbo"
                  className="mt-6 inline-block rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white"
                >
                  段ボールページを見る
                </Link>
              </div>

              <div className="rounded-3xl border bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900">整理・買取サービス</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-700">
                  遺品整理・生前整理を入口に、出張対応・店舗対応・買取まで一括でご相談いただけます。
                </p>
                <Link
                  href="/seihin"
                  className="mt-6 inline-block rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white"
                >
                  整理サービスを見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 px-6 py-16 text-center">
          <h2 className="mb-6 text-2xl font-bold">無料見積もり・ご相談はこちら</h2>

          <form className="mx-auto max-w-xl space-y-4">
            <input
              type="text"
              placeholder="会社名"
              className="w-full rounded border p-3"
            />
            <input
              type="text"
              placeholder="お名前"
              className="w-full rounded border p-3"
            />
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full rounded border p-3"
            />
            <textarea
              placeholder="ご相談内容"
              className="h-32 w-full rounded border p-3"
            />
            <button
              type="submit"
              className="rounded bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-400"
            >
              無料で相談する
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            ※相談だけでもOK・しつこい営業は一切ありません
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="rounded-[2rem] bg-zinc-950 px-8 py-12 text-white md:px-12">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-300">
              CONTACT
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              物流のご相談・お見積りは無料です
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
              物流業務は定期案件・スポット案件を問わず、
              利用運送、倉庫保管、流通加工、内職、段ボール見積りまで対応可能です。
              <br />
              まずは現状とご希望をお聞かせください。
              <br />
              株式会社GAMIが最適な形をご提案します。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-2xl bg-orange-500 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-orange-400"
              >
                無料見積りはこちら
              </Link>
              <Link
                href="tel:0661159935"
                className="rounded-2xl border border-white/20 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
              >
                電話で相談する
              </Link>
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
