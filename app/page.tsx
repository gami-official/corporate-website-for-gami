import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main>
        {/* HERO */}
        <section className="bg-zinc-950 text-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              物流を軸に、
              <br />
              事業を広げる会社
            </h1>
            <p className="mt-6 text-zinc-300 max-w-2xl">
              株式会社GAMIは物流事業を中心に、
              倉庫保管・流通加工・配送・整理事業・
              ヘッドスパフランチャイズ事業を展開しています。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-orange-500 px-6 py-3 rounded-xl font-semibold"
              >
                無料相談
              </Link>
              <Link
                href="/logistics"
                className="border border-white/30 px-6 py-3 rounded-xl"
              >
                物流を見る
              </Link>
            </div>
          </div>
        </section>

        {/* BUSINESS STRUCTURE */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">事業内容</h2>
            <p className="mt-4 text-zinc-600">
              株式会社GAMIは3つの事業を軸に展開しています
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold text-lg">物流事業（60%）</h3>
                <p className="mt-3 text-sm text-zinc-600">
                  保管・加工・配送まで一括対応
                </p>
              </div>

              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold text-lg">FC事業（30%）</h3>
                <p className="mt-3 text-sm text-zinc-600">
                  ヘッドスパ専門店ゆうの展開
                </p>
              </div>

              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold text-lg">整理・買取（10%）</h3>
                <p className="mt-3 text-sm text-zinc-600">
                  遺品整理・生前整理から買取まで対応
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOGISTICS MAIN */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">物流を主軸に展開</h2>
            <p className="mt-6 text-zinc-600 max-w-2xl">
              GAMIでは、物流業務を単体で請けるのではなく、
              倉庫保管・流通加工・内職・配送まで一括で対応。
              現場ベースで柔軟に対応できる体制を整えています。
            </p>

            <Link
              href="/logistics"
              className="inline-block mt-6 text-orange-500 font-semibold"
            >
              物流サービス詳細 →
            </Link>
          </div>
        </section>

        {/* WAREHOUSE */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">倉庫紹介</h2>
            <p className="mt-4 text-zinc-600">
              案件に応じて最適な倉庫をご提案します
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <img src="/images/moriguchi-warehouse.jpg" className="h-[240px] w-full object-cover rounded-2xl" />
              <img src="/images/osaka-minami-warehouse.jpg" className="h-[240px] w-full object-cover rounded-2xl" />
              <img src="/images/moriguchi-inside.jpg" className="h-[240px] w-full object-cover rounded-2xl" />
              <img src="/images/osaka-minami-inside.jpg" className="h-[240px] w-full object-cover rounded-2xl" />
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
                  保管・加工・配送・内職までワンストップ対応
                </p>
              </div>

              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold">全国対応</h3>
                <p className="text-sm mt-2 text-zinc-600">
                  利用運送により全国へ柔軟に対応可能
                </p>
              </div>

              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold">現場対応力</h3>
                <p className="text-sm mt-2 text-zinc-600">
                  スポット・急ぎ案件にも対応
                </p>
              </div>

              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold">化粧品対応</h3>
                <p className="text-sm mt-2 text-zinc-600">
                  化粧品製造業許可を活かした対応
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OTHER BUSINESS */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">関連事業</h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold">整理・買取事業</h3>
                <p className="text-sm mt-2 text-zinc-600">
                  遺品整理・生前整理を入口に買取まで対応
                </p>
                <Link href="/seihin" className="text-orange-500 text-sm mt-3 inline-block">
                  詳しく見る →
                </Link>
              </div>

              <div className="border p-6 rounded-2xl">
                <h3 className="font-bold">FC事業</h3>
                <p className="text-sm mt-2 text-zinc-600">
                  ヘッドスパ専門店ゆうのフランチャイズ展開
                </p>
                <Link href="/headspa-franchise" className="text-orange-500 text-sm mt-3 inline-block">
                  詳しく見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-zinc-900 text-white py-20 text-center">
          <h2 className="text-3xl font-bold">
            物流・整理・事業のご相談はこちら
          </h2>

          <p className="mt-4 text-zinc-300">
            定期・スポット問わずお気軽にご相談ください
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 bg-orange-500 px-8 py-4 rounded-xl font-semibold"
          >
            無料相談する
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
