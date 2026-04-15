import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main>
        {/* HERO */}
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

          <div className="relative z-10 flex h-full items-center justify-center px-5 text-white">
            <div className="w-full max-w-[360px] text-center sm:max-w-4xl">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-orange-300 sm:text-sm">
                LOGISTICS / WAREHOUSE / TRANSPORTATION
              </p>

            <h1 className="mt-4 text-[clamp(2.4rem,7vw,4.5rem)] font-bold leading-[1.15] tracking-[-0.02em] whitespace-nowrap sm:whitespace-normal">
  物流を止めない<br />
  現場で支えるパートナー
</h1>

              <p className="mt-5 text-sm leading-8 text-gray-200 sm:mx-auto sm:max-w-3xl sm:text-base">
                株式会社GAMIは物流運送事業を主軸に、
                倉庫保管・流通加工・発送代行・内職・梱包資材まで一括対応。
                定期案件からスポット案件まで、
                現場に合った最適な体制をご提案します。
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-orange-500 px-6 py-4 text-lg font-semibold text-white"
                >
                  無料見積りはこちら
                </Link>

                <Link
                  href="tel:0661159935"
                  className="rounded-2xl border border-white/30 px-6 py-4 text-lg text-white"
                >
                  電話で相談する
                </Link>

                <Link
                  href="/logistics"
                  className="rounded-2xl bg-orange-600 px-6 py-4 text-lg font-bold text-white"
                >
                  物流サービスを見る
                </Link>
              </div>

              <p className="mt-5 text-xs text-white/70 sm:text-sm">
                倉庫・配送・流通加工・段ボールまでまとめて相談可能です
              </p>
            </div>
          </div>
        </section>

        {/* BUSINESS */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">事業内容</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold text-lg">物流事業（主軸）</h3>
                <p className="text-sm mt-3 text-zinc-600">
                  保管・加工・配送まで一括対応
                </p>
              </div>

              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold text-lg">FC事業</h3>
                <p className="text-sm mt-3 text-zinc-600">
                  ヘッドスパ専門店の展開
                </p>
              </div>

              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold text-lg">整理・買取</h3>
                <p className="text-sm mt-3 text-zinc-600">
                  遺品整理・生前整理対応
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOGISTICS */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">物流を主軸に展開</h2>

            <p className="mt-6 text-zinc-600 max-w-2xl">
              倉庫保管・流通加工・配送・内職まで一括対応。
              複数業者に分ける必要がなく、コスト削減と効率化を実現します。
            </p>

            <Link
              href="/logistics"
              className="inline-block mt-6 text-orange-500 font-semibold"
            >
              詳しく見る →
            </Link>
          </div>
        </section>

        {/* WAREHOUSE */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">倉庫紹介</h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <img src="/images/moriguchi-warehouse.jpg" className="h-[220px] w-full object-cover rounded-2xl" />
              <img src="/images/moriguchi-inside.jpg" className="h-[220px] w-full object-cover rounded-2xl" />
              <img src="/images/osaka-minami-warehouse.jpg" className="h-[220px] w-full object-cover rounded-2xl" />
              <img src="/images/osaka-minami-inside.jpg" className="h-[220px] w-full object-cover rounded-2xl" />
            </div>
          </div>
        </section>

        {/* STRENGTH */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">GAMIの強み</h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold">一括対応</h3>
                <p className="text-sm mt-2 text-zinc-600">
                  保管・加工・配送をまとめて対応
                </p>
              </div>

              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold">全国対応</h3>
                <p className="text-sm mt-2 text-zinc-600">
                  利用運送で全国対応可能
                </p>
              </div>

              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold">現場対応力</h3>
                <p className="text-sm mt-2 text-zinc-600">
                  スポット案件にも柔軟対応
                </p>
              </div>

              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold">化粧品対応</h3>
                <p className="text-sm mt-2 text-zinc-600">
                  製造業許可対応
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-zinc-900 text-white py-20 text-center">
          <h2 className="text-3xl font-bold">
            物流のご相談はこちら
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-6 bg-orange-500 px-8 py-4 rounded-xl font-semibold"
          >
            無料見積りする
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
