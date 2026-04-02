import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "大阪の法人向け段ボール見積りなら株式会社GAMI",
  description:
    "大阪限定で法人向け段ボール見積りに対応。ミリ単位での作成、コスト見直し、梱包資材全体のご相談まで承ります。",
  keywords: [
    "大阪 段ボール",
    "段ボール 見積り 大阪",
    "法人向け 段ボール",
    "梱包資材 見積り",
    "段ボール オーダー 大阪",
  ],
}

const features = [
  "大阪限定・法人向け対応",
  "ミリ単位でサイズ指定可能",
  "コスト削減につながるご提案",
  "梱包資材全体の見直し相談にも対応",
]

const useCases = [
  "商品のサイズに合う段ボールを作りたい",
  "既存の段ボールコストを見直したい",
  "梱包資材全体をまとめて相談したい",
  "物流改善の入口として見積りを取りたい",
]

export default function DanboardPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main>
        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
            <p className="text-sm tracking-widest text-orange-400">
              DANBOARD / PACKING MATERIAL
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              大阪限定。
              <br />
              法人向け段ボール見積りに対応します。
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-300 md:text-base">
              株式会社GAMIでは、法人向けに段ボールの見積り・作成相談を承っています。
              ミリ単位での作成にも対応し、サイズ最適化や梱包資材コストの見直しまでご提案可能です。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-2xl bg-orange-500 px-8 py-4 text-base font-semibold text-white hover:bg-orange-600"
              >
                段ボール見積りを依頼する
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
            FEATURES
          </p>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900">
            GAMIの段ボール見積りが選ばれる理由
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-700">
            単なる箱の手配ではなく、物流改善の入口としてご相談いただけます。
            段ボール単体だけでなく、梱包資材全体の見直しにも対応します。
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((item) => (
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
              USE CASE
            </p>

            <h2 className="mt-3 text-3xl font-bold text-zinc-900">
              こんなご相談に対応しています
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {useCases.map((item) => (
                <div key={item} className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-sm leading-7 text-zinc-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-medium text-zinc-800">
              「サイズがまだ決まっていない」「まずは概算だけ知りたい」という段階でもご相談いただけます。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="rounded-[2rem] bg-zinc-900 px-8 py-14 text-white md:px-12 text-center">
            <p className="text-sm tracking-widest text-orange-400">
              CONTACT
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              まずは段ボール見積りからご相談ください
            </h2>

            <p className="mt-6 mx-auto max-w-2xl text-sm leading-8 text-zinc-300">
              コスト見直し、サイズ最適化、梱包資材全体の相談まで対応可能です。
              大阪の法人様向けに、最適なご提案を行います。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-2xl bg-orange-500 px-8 py-4 text-base font-semibold text-white hover:bg-orange-600"
              >
                無料で見積りを依頼する
              </Link>

              <Link
                href="tel:0661159935"
                className="rounded-2xl border border-white/20 px-8 py-4 text-base font-semibold text-white"
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
