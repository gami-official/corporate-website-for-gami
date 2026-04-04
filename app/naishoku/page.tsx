import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "内職・軽作業の外注なら株式会社GAMI｜大阪対応",
  description:
    "セット組み・シール貼り・封入・検品・梱包など、内職・軽作業の外注に対応。物流と組み合わせた一括委託も可能です。",
}

const workItems = [
  "セット組み・アソート作業",
  "シール貼り・ラベル貼付",
  "封入・梱包作業",
  "検品・仕分け作業",
  "発送前の流通加工",
  "物流と合わせた一括委託",
]

const strengths = [
  {
    title: "物流とまとめて任せられる",
    body: "内職・軽作業だけでなく、保管・流通加工・発送まで一括で対応できるため、手配がシンプルになります。",
  },
  {
    title: "人手不足を補える",
    body: "社内で対応しきれないセット組み、封入、検品などを外注することで、現場負担を軽減できます。",
  },
  {
    title: "小ロットから相談しやすい",
    body: "まずは少量から相談したい、スポットで依頼したいという案件にも柔軟に対応します。",
  },
  {
    title: "作業から発送までスムーズ",
    body: "作業後の出荷や配送までつなげられるため、別業者への引き継ぎが不要です。",
  },
]

export default function NaishokuPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main>
        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
            <p className="text-sm tracking-widest text-orange-400">
              LIGHT WORK / INNER WORK
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              内職・軽作業の外注も、
              <br />
              まとめてお任せください。
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-300 md:text-base">
              セット組み・シール貼り・封入・検品・梱包など、
              人手が必要な軽作業をまとめて対応します。
              物流と組み合わせることで、作業から発送まで効率よく一括委託できます。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-2xl bg-orange-500 px-8 py-4 text-base font-semibold text-white hover:bg-orange-600"
              >
                内職・軽作業の相談をする
              </Link>

              <Link
                href="tel:0661159935"
                className="rounded-2xl border border-white/20 px-8 py-4 text-base font-semibold text-white"
              >
                電話で相談する
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <p className="text-sm font-semibold tracking-widest text-orange-500">
            WORK ITEMS
          </p>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900">
            対応できる作業内容
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-700">
            単純作業から発送前の軽作業まで、現場に合わせて柔軟に対応します。
            「社内では手が足りない」「短期間だけ外注したい」といったご相談も可能です。
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border px-5 py-4 text-sm text-zinc-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-50">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
            <p className="text-sm font-semibold tracking-widest text-orange-500">
              STRENGTH
            </p>

            <h2 className="mt-3 text-3xl font-bold text-zinc-900">
              GAMIの内職・軽作業が選ばれる理由
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item.title} className="rounded-2xl border bg-white p-6">
                  <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-700">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="rounded-[2rem] bg-zinc-900 px-8 py-14 text-white md:px-12 text-center">
            <p className="text-sm tracking-widest text-orange-400">
              CONTACT
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              まずは作業内容をご相談ください
            </h2>

            <p className="mt-6 mx-auto max-w-2xl text-sm leading-8 text-zinc-300">
              作業内容がまだ整理できていない段階でも大丈夫です。
              必要な工程や数量、発送の有無などをお聞きしながら、最適な形をご提案します。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-2xl bg-orange-500 px-8 py-4 text-base font-semibold text-white hover:bg-orange-600"
              >
                無料で相談する
              </Link>

              <Link
                href="tel:0661159935"
                className="rounded-2xl border border-white/20 px-8 py-4 text-base font-semibold text-white"
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
