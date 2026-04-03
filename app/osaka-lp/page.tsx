import Link from "next/link"

export const metadata = {
  title: "大阪で物流・倉庫・内職をまとめて依頼｜株式会社GAMI",
  description:
    "大阪で物流・保管・配送・内職・段ボールまで一括対応。法人向けにコスト削減と業務効率化を実現。無料相談受付中。",
}

export default function OsakaLP() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">

      {/* ファーストビュー */}
      <section className="bg-black text-white px-6 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          大阪の物流業務を、
          <br />
          一括で任せませんか？
        </h1>

        <p className="mt-6 text-zinc-300 max-w-2xl mx-auto">
          保管・配送・内職・段ボールまでまとめて対応。
          バラバラだった業務を一本化し、コスト削減と効率化を実現します。
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-orange-500 px-8 py-4 rounded-xl font-bold"
          >
            無料で相談する
          </Link>

          <Link
            href="tel:0661159935"
            className="border border-white px-8 py-4 rounded-xl"
          >
            電話で相談
          </Link>
        </div>
      </section>

      {/* 悩み */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center">
          こんな課題ありませんか？
        </h2>

        <ul className="mt-8 space-y-4 text-zinc-700">
          <li>・物流会社と内職業者がバラバラ</li>
          <li>・大阪でまとめて任せられる会社がない</li>
          <li>・段ボールや資材コストが高い</li>
          <li>・急な案件に対応できない</li>
        </ul>
      </section>

      {/* 解決 */}
      <section className="bg-orange-500 text-white px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          すべてまとめて解決できます
        </h2>

        <p className="mt-6 max-w-2xl mx-auto">
          株式会社GAMIは、
          物流・内職・段ボールを一括対応。
          業者を分ける必要がなくなります。
        </p>
      </section>

      {/* 強み */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center">
          選ばれる理由
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">一括対応</h3>
            <p className="mt-2 text-sm text-zinc-600">
              物流・内職・段ボールをまとめて依頼可能
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">大阪対応</h3>
            <p className="mt-2 text-sm text-zinc-600">
              大阪エリアの法人案件に対応
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">コスト削減</h3>
            <p className="mt-2 text-sm text-zinc-600">
              業者一本化で無駄を削減
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">柔軟対応</h3>
            <p className="mt-2 text-sm text-zinc-600">
              スポット・継続どちらもOK
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          今すぐご相談ください
        </h2>

        <p className="mt-4 text-zinc-400">
          相談だけでもOKです
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-orange-500 px-8 py-4 rounded-xl font-bold"
          >
            無料相談はこちら
          </Link>

          <Link
            href="tel:0661159935"
            className="border border-white px-8 py-4 rounded-xl"
          >
            06-6115-9935
          </Link>
        </div>
      </section>

    </div>
  )
}
