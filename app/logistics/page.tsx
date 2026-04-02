import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const coreServices = [
  {
    title: "定期・スポット問わず物流全体に対応",
    body: "物流の仕事は定期・スポットを問わず柔軟対応。保管・入出庫・検品・流通加工・配送まで一括で対応します。",
  },
  {
    title: "    body: "全国対応の利用運送ネットワーク",
    body: "軽貨物〜大型車まで全国手配可能。急な案件や波動のある案件にも柔軟に対応し、最適な輸送体制を構築します。",
  },
  {
    title: "流通加工・内職も一括対応",
    body: "セット組み、シール貼り、封入、梱包など、現場の人手不足を補う作業にも柔軟に対応します。",
  },
  {
    title: "化粧品対応倉庫",
    body: "化粧品製造業許可を取得した倉庫で、化粧品関連の保管・作業・提案まで視野に入れた対応が可能です。",
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
            <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm tracking-wide text-zinc-100">
              物流運送事業 / 定期・スポットどちらにも対応
            </p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  物流の仕事を、
                  <br />
                  定期でもスポットでも。
                  <br />
                  保管・加工・配送まで一括対応します。
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-200 md:text-lg">
                  株式会社GAMIは、物流業務全体を見てご提案する現場対応型の物流パートナーです。
                  利用運送を強みとし、全国各地へ軽貨物〜大型車まで手配可能。さらに、倉庫保管、流通加工、内職、
                  化粧品対応、段ボール提案までまとめてご相談いただけます。
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
                <p className="text-sm font-semibold tracking-wide text-orange-300">こんなご相談に対応</p>
                <div className="mt-5 space-y-3">
                  {transportCases.map((item) => (
                    <div key={item} className="rounded-2xl bg-black/20 px-4 py-4 text-sm leading-7 text-zinc-100">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              <div key={service.title} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
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
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">ACHIEVEMENTS</p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">取扱実績・対応分野</h2>
                <p className="mt-5 text-sm leading-7 text-zinc-600">
                  美容商材・アパレル・スパイス・ふるさと納税返礼品など、
  商材ごとの特性に合わせて保管・加工・出荷・配送まで対応します。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {achievements.map((item) => (
                    <span key={item} className="rounded-full bg-zinc-950 px-4 py-2 text-sm text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">POINT</p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">全国対応の利用運送ネットワーク</h2>
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
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-300">LIGHT WORK / INNER WORK</p>
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
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">COSMETICS WAREHOUSE</p>
              <h2 className="mt-3 text-3xl font-bold text-zinc-900">化粧品対応ができる倉庫を活かす</h2>
              <p className="mt-5 text-sm leading-7 text-zinc-600">
                化粧品製造業許可を取得した倉庫で作業している強みを活かし、化粧品関連の保管・作業・物流提案まで対応します。
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                他社と差別化しやすい領域として、今後さらに強く打ち出していけるポイントです。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">DANBOARD</p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">大阪限定｜法人向け段ボール無料見積り</h2>
<p className="mt-5 text-sm leading-7 text-zinc-700">
  段ボールを安く、ミリ単位で作成可能です。
  梱包資材コストの見直しや物流改善の入口として、まずは無料見積りからご相談ください。
</p>

                <p className="mt-4 text-sm font-medium text-zinc-800">
  「サイズがまだ決まっていない」「まずは概算だけ知りたい」という段階でもご相談いただけます。
</p>
                
                <div className="mt-6 space-y-3">
                  {packingFeatures.map((item) => (
                    <div key={item} className="rounded-2xl bg-white px-4 py-4 text-sm text-zinc-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex rounded-2xl bg-orange-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-orange-400"
                >
                  段ボール見積りを依頼する
                </Link>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">FLOW</p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">ご相談から運用開始まで</h2>
                <div className="mt-8 space-y-4">
                  {processSteps.map((item) => (
                    <div key={item.step} className="rounded-2xl border border-zinc-200 px-5 py-5">
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
          <div className="rounded-[2rem] bg-zinc-950 px-8 py-12 text-white md:px-12">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-300">CONTACT</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">物流の外注先をお探しなら、まずは無料でご相談ください</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
              定期案件・スポット案件を問わず、利用運送、倉庫保管、流通加工、内職、段ボール提案まで一括で対応可能です。
「どこまで任せられるか相談したい」という段階からでも、お気軽にご連絡ください。
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
                06-6115-9935
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
