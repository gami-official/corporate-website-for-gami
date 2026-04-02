import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

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

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-500 blur-3xl" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-400 blur-3xl" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-28">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm tracking-wide text-zinc-100">
                物流運送事業を主軸に、保管・加工・配送を一括対応
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                物流・保管・配送・加工を一社で。
                <br />
                株式会社GAMIは、現場対応に強い物流パートナーです。
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-200 md:text-lg">
                物流業務は定期案件・スポット案件のどちらにも対応し、利用運送、倉庫保管、流通加工、内職、段ボール提案まで一括でご相談いただけます。美容商材・アパレル・スパイス・ふるさと納税返礼品など、多様な商材に対応してきた実績を活かし、物流課題をスピードと柔軟性で解決します。
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
                  className="rounded-2xl border border-white/30 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
                >
                  電話で相談する
                </Link>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {logisticsFeatures.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-100 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-semibold tracking-wide text-orange-300">主なご相談内容</p>
              <div className="mt-5 space-y-4">
                {[
                  "定期配送・スポット配送の委託先を探している",
                  "全国手配できる利用運送会社にまとめたい",
                  "倉庫保管と流通加工を一括で任せたい",
                  "化粧品関連の作業ができる倉庫を探している",
                  "段ボールや梱包資材のコストを見直したい",
                  "内職・軽作業の案件を依頼したい",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-black/20 px-4 py-4 text-sm leading-7 text-zinc-100">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-white px-5 py-5 text-zinc-900">
                <p className="text-sm font-semibold text-zinc-500">お問い合わせ</p>
                <p className="mt-2 text-2xl font-bold">06-6115-9935</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  法人物流、段ボール見積り、流通加工のご相談はお気軽にご連絡ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">LOGISTICS FIRST</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">物流運送事業を主軸にしたサービス構成へ再設計</h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              株式会社GAMIの主軸は物流運送事業です。配送だけでなく、保管・加工・資材提案まで含めて、
              現場で本当に必要な機能をまとめてご提供します。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {logisticsServices.map((service) => (
              <div key={service.title} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{service.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">WHY GAMI</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">GAMIが選ばれる理由</h2>
              <p className="mt-5 text-base leading-8 text-zinc-600">
                利用運送、倉庫保管、流通加工、化粧品対応、段ボール提案まで、単発ではなく全体最適でご提案します。
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {strengths.map((strength) => (
                <div key={strength.title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-zinc-100">
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
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-300">ACHIEVEMENTS</p>
              <h2 className="mt-3 text-3xl font-bold">実績・対応分野</h2>
              <p className="mt-5 text-sm leading-7 text-zinc-300">
                美容・食品・アパレル・ギフトなど、多様な商材の物流に対応。商材ごとの特性に合わせて最適な運用を行います。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {achievements.map((item) => (
                  <span key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8">
              <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">DANBOARD / PACKAGING</p>
              <h2 className="mt-3 text-3xl font-bold text-zinc-900">段ボール販売を入口に、無料見積りへ</h2>
              <p className="mt-5 text-sm leading-7 text-zinc-700">
                大阪限定で、法人向け段ボール販売を強化。安く、ミリ単位で作成できる強みを活かし、
                物流改善の入口としてご相談を受けられる設計にします。
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

        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">FLOW</p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">ご依頼の流れ</h2>
                <div className="mt-8 grid gap-4">
                  {processSteps.map((step, index) => (
                    <div key={step} className="flex items-center gap-4 rounded-2xl border border-zinc-200 px-5 py-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <p className="text-base font-medium text-zinc-800">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-500">OTHER BUSINESS</p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-900">他事業について</h2>

                <div className="mt-8 space-y-6">
                  <div className="rounded-2xl border border-zinc-200 p-5">
                    <h3 className="text-xl font-bold text-zinc-900">ヘッドスパ事業（20%）</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                      スクール・フランチャイズ展開を強化しつつ、ヘッドスパ専門店ゆう本店への導線を整えます。
                    </p>
                    <Link href="https://www.yuheadspa.net" className="mt-4 inline-block text-sm font-semibold text-orange-500">
                      ヘッドスパ専門店ゆう本店を見る →
                    </Link>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 p-5">
                    <h3 className="text-xl font-bold text-zinc-900">遺品整理・生前整理事業（10%）</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                      大阪は訪問買取に特化、福岡は店舗型で完全予約制。整理だけでなく、買取へつながる導線を重視します。
                    </p>
                    <Link href="/seihin" className="mt-4 inline-block text-sm font-semibold text-orange-500">
                      整理・買取サービスを見る →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="rounded-[2rem] bg-zinc-950 px-8 py-12 text-white md:px-12">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-300">CONTACT</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">物流のご相談・お見積りは無料です</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
              物流業務は定期案件・スポット案件を問わず、利用運送、倉庫保管、流通加工、内職、段ボール見積りまで対応可能です。まずは現状とご希望をお聞かせください。株式会社GAMIが最適な形をご提案します。
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
