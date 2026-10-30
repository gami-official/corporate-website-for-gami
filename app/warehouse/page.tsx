
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "物流拠点・倉庫紹介｜GAMI LOGISTICS NETWORK",
  description:
    "福岡を主軸に、大阪・神戸と連携するGAMIの物流ネットワーク。大阪・守口の約100坪の倉庫では、1坪からの保管、検品、流通加工、梱包、発送代行に対応します。",
  alternates: {
    canonical: "/warehouse",
  },
}

const warehouseInfo = [
  { label: "所在地", value: "大阪府守口市大日町1-8-18" },
  { label: "倉庫面積", value: "約100坪" },
  { label: "保管対応", value: "1坪から相談可能" },
  { label: "対応業務", value: "保管・検品・加工・梱包・発送" },
  { label: "出荷対応", value: "365日対応（事前相談）" },
  { label: "案件規模", value: "小ロット・継続・スポット" },
]

const services = [
  { number: "01", title: "WAREHOUSING", ja: "倉庫保管", text: "商品や資材の保管。小ロットから継続的な在庫管理までご相談いただけます。" },
  { number: "02", title: "FULFILLMENT", ja: "発送代行", text: "EC商品の発送から企業向けの出荷、キャンペーン商品の一斉発送まで対応します。" },
  { number: "03", title: "INSPECTION", ja: "検品・品質確認", text: "数量確認、外観検査、出荷前チェックなど、必要な検品工程を組み込みます。" },
  { number: "04", title: "VALUE-ADDED", ja: "流通加工", text: "シール貼り、セット組み、封入、梱包などの作業を柔軟に組み合わせます。" },
]

const capabilities = [
  "倉庫保管",
  "発送代行",
  "商品検品",
  "梱包",
  "シール貼り",
  "セット組み",
  "封入作業",
  "内職作業",
  "流通加工",
  "EC物流",
  "スポット出荷",
  "化粧品関連作業",
]

const photos = [
  {
    src: "/images/warehouse-moriguchi.jpg",
    alt: "GAMI大阪・守口拠点の倉庫外観",
    caption: "EXTERIOR / 倉庫外観",
  },
  {
    src: "/images/warehouse-moriguchi-inside.jpg",
    alt: "GAMI大阪・守口拠点の倉庫内観",
    caption: "INTERIOR / 倉庫内観",
  },
  {
    src: "/images/warehouse-03.png",
    alt: "GAMIの梱包作業スペース",
    caption: "OPERATIONS / 作業スペース",
  },
  {
    src: "/images/warehouse-05.png",
    alt: "出荷前の商品保管スペース",
    caption: "STORAGE / 商品保管",
  },
]

const container = "mx-auto max-w-6xl px-4 sm:px-6"

const goldLabel =
  "text-[11px] font-bold tracking-[0.22em] text-amber-600"

const darkGoldLabel =
  "text-[11px] font-bold tracking-[0.22em] text-amber-400"

const heading =
  "mt-3 text-[27px] font-bold leading-[1.45] tracking-tight sm:text-4xl"

const primaryButton =
  "inline-flex min-h-[50px] items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-zinc-950 transition hover:bg-amber-400"

export default function WarehousePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-zinc-900">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
          <img
            src="/images/warehouse-moriguchi-inside.jpg"
            alt=""
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/55" />

          <div className={`${container} py-20 sm:py-28 lg:py-36`}>
            <p className={darkGoldLabel}>
              GAMI LOGISTICS NETWORK
            </p>

            <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-white/65">
              FUKUOKA / OSAKA / KOBE
            </p>

            <h1 className="mt-5 max-w-4xl text-[36px] font-black leading-[1.3] tracking-tight sm:text-6xl">
              預かるだけじゃない。
              <br />
              <span className="text-amber-400">
                動かすための拠点。
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
              福岡を主軸に、大阪・神戸と連携するGAMIの物流ネットワーク。
              保管・検品・流通加工・梱包・発送まで。
              必要な工程を、必要な規模で。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/company#contact"
                className={primaryButton}
              >
                物流・倉庫について相談する
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>

              <Link
                href="#network"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
              >
                拠点ネットワークを見る
              </Link>
            </div>
          </div>

          <div className="border-t border-white/15 bg-black/40">
            <div className={`${container} grid grid-cols-3 divide-x divide-white/15 py-5`}>
              <div className="px-2 text-center sm:px-5">
                <p className="text-xl font-black text-white sm:text-3xl">
                  100<span className="ml-1 text-xs sm:text-sm">坪</span>
                </p>
                <p className="mt-1 text-[10px] text-white/60 sm:text-xs">
                  大阪倉庫・約
                </p>
              </div>

              <div className="px-2 text-center sm:px-5">
                <p className="text-xl font-black text-white sm:text-3xl">
                  1<span className="ml-1 text-xs sm:text-sm">坪〜</span>
                </p>
                <p className="mt-1 text-[10px] text-white/60 sm:text-xs">
                  保管のご相談
                </p>
              </div>

              <div className="px-2 text-center sm:px-5">
                <p className="text-xl font-black text-white sm:text-3xl">
                  365<span className="ml-1 text-xs sm:text-sm">日</span>
                </p>
                <p className="mt-1 text-[10px] text-white/60 sm:text-xs">
                  条件に応じた出荷対応
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center`}>
            <div>
              <p className={goldLabel}>MORE THAN STORAGE</p>

              <h2 className={heading}>
                倉庫を持つことが、
                <br />
                目的じゃない。
              </h2>

              <p className="mt-5 text-sm leading-8 text-zinc-600">
                商品を預かるだけでは、物流は完成しません。
                検品し、加工し、梱包し、必要な場所へ届ける。
                GAMIはその一連の流れを、お客様の業務に合わせて組み立てます。
              </p>

              <p className="mt-4 text-sm leading-8 text-zinc-600">
                数箱の保管から、継続的な発送代行、
                大量の封入・セット組みまで。
                まずは必要な業務からご相談ください。
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src="/images/warehouse-moriguchi-inside.jpg"
                alt="GAMI大阪拠点の倉庫内観"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-xs font-bold tracking-[0.18em] text-amber-300">
                  GAMI OSAKA BASE
                </p>
                <p className="mt-1 text-sm text-white/85">
                  大阪府守口市
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NETWORK */}
        <section
          id="network"
          className="scroll-mt-24 bg-zinc-950 py-16 text-white sm:py-24"
        >
          <div className={container}>
            <p className={darkGoldLabel}>
              ONE NETWORK. FLEXIBLE SOLUTIONS.
            </p>

            <h2 className={heading}>
              福岡を主軸に、
              <br />
              大阪・神戸と連携。
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-8 text-white/65">
              GAMIは福岡を中心とした物流体制を構築し、
              大阪の自社拠点と神戸の提携ネットワークを活用。
              案件の内容・数量・納期に応じて、柔軟な運用をご提案します。
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <article className="relative overflow-hidden rounded-2xl border border-amber-500/50 bg-gradient-to-b from-amber-500/15 to-white/5 p-6">
                <div className="absolute right-4 top-3 text-6xl font-black text-white/5">
                  01
                </div>

                <p className="text-[10px] font-bold tracking-[0.2em] text-amber-400">
                  MAIN OPERATIONS
                </p>

                <h3 className="mt-7 text-3xl font-black tracking-wide">
                  FUKUOKA
                </h3>

                <p className="mt-2 text-base font-bold text-amber-300">
                  福岡・主軸拠点
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  GAMIの物流事業を支える中心拠点。
                  各地との連携を通じて、
                  多様な物流ニーズに対応します。
                </p>
              </article>

              <article className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6">
                <div className="absolute right-4 top-3 text-6xl font-black text-white/5">
                  02
                </div>

                <p className="text-[10px] font-bold tracking-[0.2em] text-white/50">
                  GAMI OPERATIONS
                </p>

                <h3 className="mt-7 text-3xl font-black tracking-wide">
                  OSAKA
                </h3>

                <p className="mt-2 text-base font-bold">
                  GAMI OSAKA BASE
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  大阪府守口市の約100坪の倉庫。
                  保管・検品・梱包・発送などの
                  物流業務に対応します。
                </p>
              </article>

              <article className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6">
                <div className="absolute right-4 top-3 text-6xl font-black text-white/5">
                  03
                </div>

                <p className="text-[10px] font-bold tracking-[0.2em] text-white/50">
                  PARTNER NETWORK
                </p>

                <h3 className="mt-7 text-3xl font-black tracking-wide">
                  KOBE
                </h3>

                <p className="mt-2 text-base font-bold">
                  神戸・提携拠点
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  案件に応じて連携する
                  物流パートナー。
                  必要な作業や運用体制を補完します。
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={goldLabel}>OUR CAPABILITIES</p>

            <h2 className={heading}>
              保管から発送まで。
              <br />
              必要な業務を、ひとつにつなぐ。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              単独の作業依頼から複数工程を組み合わせた物流業務まで、
              案件に合わせて柔軟に対応します。
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group rounded-2xl border border-black/10 bg-[#fafaf9] p-6 transition hover:border-amber-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[11px] font-bold tracking-[0.15em] text-amber-700">
                      {service.title}
                    </p>
                    <span className="text-3xl font-black text-zinc-200 transition group-hover:text-amber-200">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {service.ja}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-zinc-600"
                >
                  {capability}
                </span>
              ))}
            </div>

            <Link
              href="/logistics"
              className="mt-8 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4"
            >
              物流サービスを詳しく見る →
            </Link>
          </div>
        </section>

        {/* OSAKA BASE */}
        <section className="py-16 sm:py-24">
          <div className={container}>
            <p className={goldLabel}>GAMI OSAKA BASE</p>

            <h2 className={heading}>
              大阪・守口。
              <br />
              柔軟な物流を支える拠点。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              大阪府守口市にある約100坪の倉庫。
              1坪からの保管相談、検品・流通加工・梱包・発送など、
              小ロットから継続案件まで幅広くご相談いただけます。
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className="border-b border-black/10 bg-zinc-950 px-5 py-4">
                  <p className="text-xs font-bold tracking-[0.15em] text-amber-400">
                    FACILITY INFORMATION
                  </p>
                </div>

                <dl>
                  {warehouseInfo.map((item, index) => (
                    <div
                      key={item.label}
                      className={`grid grid-cols-[100px_1fr] gap-3 px-5 py-4 text-sm sm:grid-cols-[120px_1fr] ${
                        index > 0 ? "border-t border-black/5" : ""
                      }`}
                    >
                      <dt className="font-semibold text-zinc-500">
                        {item.label}
                      </dt>
                      <dd className="min-w-0 break-words font-medium text-zinc-800">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {photos.map((photo) => (
                  <figure
                    key={photo.src}
                    className="overflow-hidden rounded-2xl bg-zinc-900"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={640}
                      height={480}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <figcaption className="px-3 py-3 text-[10px] font-semibold leading-5 tracking-wide text-white/75 sm:text-xs">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FLEXIBILITY */}
        <section className="bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={goldLabel}>BUILT AROUND YOUR BUSINESS</p>

            <h2 className={heading}>
              決まった形に、
              <br />
              お客様を合わせない。
            </h2>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "小ロットから",
                  text: "段ボール数箱の保管や少量の発送もご相談いただけます。",
                },
                {
                  number: "02",
                  title: "作業単体でも",
                  text: "検品、シール貼り、セット組み、封入など、必要な工程だけでも対応します。",
                },
                {
                  number: "03",
                  title: "スポット案件にも",
                  text: "繁忙期の一時保管や大量発送など、案件に合わせた体制をご相談いただけます。",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-black/10 bg-[#fafaf9] p-6"
                >
                  <p className="text-xs font-bold tracking-[0.2em] text-amber-700">
                    {item.number}
                  </p>
                  <h3 className="mt-4 text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ACCESS */}
        <section className="py-16 sm:py-24">
          <div className={container}>
            <p className={goldLabel}>LOCATION & ACCESS</p>

            <h2 className={heading}>
              GAMI OSAKA BASE
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-600">
              〒570-0003 大阪府守口市大日町1-8-18
            </p>

            <iframe
              title="GAMI OSAKA BASEの所在地"
              src="https://www.google.com/maps?q=大阪府守口市大日町1-8-18&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-6 h-[260px] w-full rounded-2xl border-0 sm:h-[360px]"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-zinc-950 py-16 text-white sm:py-24">
          <div className={`${container} text-center`}>
            <p className={darkGoldLabel}>
              LET'S MOVE YOUR BUSINESS FORWARD
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.45] sm:text-5xl">
              物流の次の一手を、
              <br />
              GAMIと。
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/70">
              福岡を主軸に、大阪・神戸と連携。
              保管場所の確保から作業・発送のご相談まで、
              まずはお客様の課題をお聞かせください。
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/company#contact"
                className={primaryButton}
              >
                見積り・物流相談
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>

              <a
                href="tel:0661159935"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
              >
                電話で相談
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
