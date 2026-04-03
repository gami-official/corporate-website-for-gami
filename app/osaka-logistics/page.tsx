import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "大阪の物流会社｜保管・配送・内職・段ボールまで一括対応｜株式会社GAMI",
  description:
    "大阪で物流会社をお探しなら株式会社GAMI。保管・配送・流通加工・内職・段ボール見積りまで一括対応。法人向けにコスト削減と業務効率化を実現します。",
  keywords: [
    "大阪 物流",
    "大阪 物流会社",
    "大阪 倉庫 配送",
    "大阪 内職 外注",
    "大阪 段ボール 見積り",
    "大阪 流通加工",
    "大阪 物流 外注",
  ],
}

const strengths = [
  {
    title: "物流・内職・段ボールを一括対応",
    body: "保管・配送だけでなく、流通加工・内職・段ボール提案までまとめて相談できます。複数業者に分ける手間を減らし、管理コストも抑えられます。",
  },
  {
    title: "大阪拠点から法人案件に対応",
    body: "大阪エリアの法人向けに、物流・配送・軽作業・梱包資材の見直しまで対応。継続案件もスポット案件もご相談可能です。",
  },
  {
    title: "全国配送手配も可能",
    body: "大阪だけでなく、全国各地への配送手配にも対応。軽貨物から大型車まで、案件内容に合わせて最適な輸送体制を組みます。",
  },
  {
    title: "人手不足を補う軽作業対応",
    body: "シール貼り・封入・セット組み・検品・梱包など、手作業が必要な業務も対応可能。物流と一体化することで効率的な運用ができます。",
  },
]

const serviceItems = [
  "倉庫保管・在庫管理",
  "配送・利用運送手配",
  "流通加工・セット組み",
  "シール貼り・封入・検品",
  "法人向け段ボール見積り",
  "スポット・定期案件対応",
]

const problems = [
  "倉庫と配送をまとめて任せたい",
  "大阪で物流会社を探している",
  "内職・軽作業まで一括で頼みたい",
  "段ボールや梱包資材のコストを見直したい",
  "急な案件や波動のある案件にも対応してほしい",
  "複数業者に分かれている業務を整理したい",
]

export default function OsakaLogisticsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-500 blur-3xl" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-400 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
            <div>
              <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-zinc-200 backdrop-blur">
                大阪の法人向け物流・保管・配送・内職・段ボール対応
              </p>

              <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight md:text-5xl">
                大阪の物流業務を、
                <br />
                保管・配送・内職・段ボールまで
                <br />
                一括対応します。
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-200 md:text-lg">
                株式会社GAMIは、大阪エリアの法人向けに、
                保管・配送・流通加工・軽作業・段ボール見積りまで一括対応。
                複数業者に分かれている業務をまとめ、コスト削減と業務効率化を実現します。
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-400"
                >
                  無料で相談する
                </Link>
                <Link
                  href="/danbo"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  段ボール見積りを依頼する
                </Link>
              </div>

              <p className="mt-4 text-sm text-zinc-300">
                最短当日対応・継続案件 / スポット案件どちらもご相談可能
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-semibold tracking-wide text-orange-300">
                OSAKA LOGISTICS
              </p>
              <div className="mt-5 space-y-4">
                {problems.map((item) => (
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
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold md:text-3xl">
              大阪で物流会社を探している法人様へ
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90 md:text-base">
              物流だけでなく、内職・軽作業・段ボール見積りまで一括対応できます。
              現場で発生する細かな業務も含めてまとめて任せたい企業様に最適です。
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-orange-600"
              >
                無料で相談する
              </Link>
              <Link
                href="/naishoku"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white"
              >
                内職サービスを見る
              </Link>
              <Link
                href="/logistics"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white"
              >
                物流ページを見る
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
              STRENGTH
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              大阪で選ばれる理由
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              倉庫・配送・内職・段ボール提案を別々に依頼するのではなく、
              一社でまとめて相談できることが株式会社GAMIの強みです。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {strengths.map((item) => (
              <div key={item.title} className="rounded-3xl border bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-700">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-50 py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">
                SERVICE
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                大阪で対応できる業務
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border bg-white px-5 py-5 text-sm font-medium text-zinc-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="rounded-[2rem] bg-zinc-950 px-8 py-12 text-white md:px-12">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-300">
              CONTACT
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              大阪の物流・内職・段ボールのご相談は無料です
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
              継続案件、スポット案件、倉庫・配送・内職のまとめ依頼まで柔軟に対応します。
              まずは現状の課題やご希望条件をお聞かせください。
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-400"
              >
                無料相談はこちら
              </Link>
              <Link
                href="tel:0661159935"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
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
