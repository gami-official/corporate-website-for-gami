
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "物流拠点・倉庫紹介｜GAMI LOGISTICS NETWORK",
  description:
    "大阪の自社倉庫を主軸に、福岡・神戸の協力ネットワークと連携するGAMIの物流ネットワーク。大阪府守口市の約100坪の自社倉庫は、お客様の物流拠点としても活用可能。倉庫保管、検品、流通加工、梱包、発送代行をご相談いただけます。",
  alternates: {
    canonical: "/warehouse",
  },
}

const container = "mx-auto max-w-6xl px-4 sm:px-6"

const goldLabel =
  "text-[11px] font-bold tracking-[0.18em] text-amber-700"

const darkGoldLabel =
  "text-[11px] font-bold tracking-[0.18em] text-amber-400"

const heading =
  "mt-3 text-[clamp(1.55rem,5.5vw,2.5rem)] font-bold leading-[1.45] tracking-tight"

const primaryButton =
  "inline-flex min-h-[50px] items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-zinc-950 transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"

const warehouseInfo = [
  {
    label: "拠点名",
    value: "GAMI OSAKA BASE",
  },
  {
    label: "所在地",
    value: "大阪府守口市大日町1-8-18",
  },
  {
    label: "倉庫面積",
    value: "約100坪",
  },
  {
    label: "保管対応",
    value: "1坪から相談可能",
  },
  {
    label: "対応業務",
    value: "保管・検品・加工・梱包・発送",
  },
  {
    label: "出荷対応",
    value: "365日対応（事前相談・条件による）",
  },
  {
    label: "利用形態",
    value: "お客様の物流拠点としての利用も相談可能",
  },
  {
    label: "案件規模",
    value: "小ロット・継続・スポット",
  },
]

const network = [
  {
    english: "OSAKA",
    type: "MAIN OPERATIONS / OWN WAREHOUSE",
    title: "GAMI OSAKA BASE",
    text: "大阪府守口市の約100坪の自社倉庫。GAMIの物流事業の主軸として、保管・検品・加工・発送を担います。",
    featured: true,
  },
  {
    english: "FUKUOKA",
    type: "PARTNER NETWORK",
    title: "福岡・協力ネットワーク",
    text: "福岡の物流パートナーと連携し、案件規模や作業内容に応じた物流体制を支えます。",
    featured: false,
  },
  {
    english: "KOBE",
    type: "PARTNER NETWORK",
    title: "神戸・協力ネットワーク",
    text: "神戸の物流パートナーと連携し、物量・作業内容・納期に合わせて物流体制を補完します。",
    featured: false,
  },
]

const photos = [
  {
    src: "/images/warehouse-moriguchi.jpg",
    alt: "GAMI OSAKA BASEの倉庫外観",
    english: "EXTERIOR",
    caption: "倉庫外観",
  },
  {
    src: "/images/warehouse-moriguchi-inside.jpg",
    alt: "GAMI OSAKA BASEの倉庫内観",
    english: "INTERIOR",
    caption: "倉庫内観",
  },
  {
    src: "/images/warehouse-03.png",
    alt: "物流作業スペース",
    english: "OPERATIONS",
    caption: "作業スペース",
  },
  {
    src: "/images/warehouse-05.png",
    alt: "商品保管スペース",
    english: "STORAGE",
    caption: "商品保管",
  },
]

const uses = [
  {
    number: "01",
    title: "自社物流拠点として",
    text: "GAMIの倉庫を、お客様の物流拠点としてご利用いただく形をご相談いただけます。拠点としての運用範囲や名称の使用なども個別に調整します。",
  },
  {
    number: "02",
    title: "在庫保管・発送拠点として",
    text: "商品の保管から在庫管理、ピッキング、梱包、発送まで。継続的な出荷体制を事業に合わせて設計します。",
  },
  {
    number: "03",
    title: "一時保管・作業拠点として",
    text: "キャンペーン、繁忙期、スポット案件などに伴う一時保管や検品・セット組み・封入作業もご相談いただけます。",
  },
]

export default function WarehousePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] font-sans text-zinc-900">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-logistics.png"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          >
            <source
              src="/video/hero-logistics.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />

          <div className={`${container} relative z-20 py-16 sm:py-24 lg:py-32`}>
            <div className="max-w-4xl">
              <p className={darkGoldLabel}>
                GAMI LOGISTICS NETWORK
              </p>

              <p className="mt-4 text-xs font-semibold tracking-[0.12em] text-white/65">
                OSAKA / FUKUOKA / KOBE
              </p>

              <h1 className="mt-5 text-[clamp(2rem,7vw,4.2rem)] font-black leading-[1.35] tracking-tight">
                物流を支える、
                <br />
                <span className="text-amber-400">
                  確かな拠点。
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
                大阪の自社倉庫「GAMI OSAKA BASE」を主軸に、福岡・神戸の協力ネットワークと連携。
                お客様の事業に合わせた物流拠点・運用体制をご提案します。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#osaka"
                  className={primaryButton}
                >
                  大阪の自社倉庫を見る →
                </Link>

                <Link
                  href="#network"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
                >
                  拠点ネットワーク
                </Link>
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
              OUR LOGISTICS NETWORK
            </p>

            <h2 className={heading}>
              事業に合わせて、
              <br />
              拠点をつなぐ。
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-8 text-white/70">
              大阪の自社倉庫を物流事業の主軸に、
              福岡・神戸の協力ネットワークと連携。
              それぞれの役割を活かして、案件に適した体制を組み立てます。
            </p>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {network.map((item) => (
                <article
                  key={item.english}
                  className={`relative overflow-hidden rounded-2xl border p-6 ${
                    item.featured
                      ? "border-amber-500/50 bg-gradient-to-b from-amber-500/15 to-white/5"
                      : "border-white/15 bg-white/5"
                  }`}
                >
                  <p
                    className={`text-[10px] font-bold tracking-[0.16em] ${
                      item.featured
                        ? "text-amber-400"
                        : "text-white/50"
                    }`}
                  >
                    {item.type}
                  </p>

                  <h3 className="mt-6 text-3xl font-black tracking-wide">
                    {item.english}
                  </h3>

                  <p
                    className={`mt-2 text-base font-bold ${
                      item.featured
                        ? "text-amber-300"
                        : "text-white"
                    }`}
                  >
                    {item.title}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OSAKA BASE */}
        <section
          id="osaka"
          className="scroll-mt-24 py-16 sm:py-24"
        >
          <div className={container}>
            <p className={goldLabel}>
              GAMI OSAKA BASE
            </p>

            <h2 className={heading}>
              御社の物流拠点を、
              <br />
              大阪に。
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600">
              大阪府守口市にある約100坪のGAMI自社倉庫。
              1坪からの保管相談をはじめ、
              商品の検品・加工・梱包・発送など、
              事業に必要な物流業務に対応します。
            </p>

            <div className="mt-8 rounded-2xl border border-amber-300/50 bg-amber-50 p-6 sm:p-8">
              <p className="text-[11px] font-bold tracking-[0.18em] text-amber-800">
                YOUR OWN LOGISTICS BASE
              </p>

              <h3 className="mt-3 text-xl font-bold leading-relaxed sm:text-2xl">
                GAMIの倉庫を、
                <br />
                お客様の物流拠点として。
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-700">
                自社で新たな倉庫を構えることなく、
                GAMI OSAKA BASEをお客様の物流拠点として
                活用いただくことも可能です。
                対外的な拠点名称の使用を含め、
                利用形態や業務範囲は個別にご相談いただけます。
              </p>

              <p className="mt-3 text-xs leading-6 text-zinc-500">
                ※拠点名称の使用、保管条件、作業範囲、契約条件等は事前の取り決めによります。
              </p>

              <Link
                href="/company#contact"
                className={`${primaryButton} mt-6`}
              >
                自社拠点としての利用を相談 →
              </Link>
            </div>

            {/* FACILITY INFORMATION */}
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
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
                      className={`grid grid-cols-[88px_minmax(0,1fr)] gap-3 px-4 py-4 text-sm sm:grid-cols-[120px_minmax(0,1fr)] sm:px-5 ${
                        index > 0
                          ? "border-t border-black/5"
                          : ""
                      }`}
                    >
                      <dt className="font-semibold text-zinc-500">
                        {item.label}
                      </dt>

                      <dd className="min-w-0 break-words font-medium leading-7 text-zinc-800">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* PHOTO GALLERY */}
              <div className="grid grid-cols-2 content-start gap-3">
                {photos.map((photo) => (
                  <figure
                    key={photo.src}
                    className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-black/10 bg-white"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-200">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        width={640}
                        height={480}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>

                    <figcaption className="flex min-h-[66px] flex-col justify-center px-3 py-3">
                      <span className="text-[9px] font-bold tracking-[0.08em] text-amber-700 sm:text-[10px]">
                        {photo.english}
                      </span>

                      <span className="mt-1 text-xs font-semibold leading-5 text-zinc-800 sm:text-sm">
                        {photo.caption}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO USE */}
        <section className="bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={goldLabel}>
              HOW TO USE OUR BASE
            </p>

            <h2 className={heading}>
              倉庫の使い方も、
              <br />
              事業に合わせて。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              保管場所の確保だけでなく、
              お客様の物流体制の一部として、
              さまざまな活用方法をご相談いただけます。
            </p>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {uses.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-black/10 bg-[#fafaf9] p-6"
                >
                  <p className="text-xs font-bold tracking-[0.2em] text-amber-700">
                    {item.number}
                  </p>

                  <h3 className="mt-4 text-lg font-bold leading-relaxed">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/logistics"
              className="mt-8 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4"
            >
              対応できる物流サービスを見る →
            </Link>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-16 sm:py-24">
          <div className={container}>
            <p className={goldLabel}>
              LOGISTICS PARTNERS
            </p>

            <h2 className={heading}>
              自社拠点と、
              <br />
              信頼できる協力ネットワーク。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              福岡・神戸の物流パートナーとも連携し、
              案件の規模や内容に応じた対応体制を構築します。
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <img
                  src="/images/partner-maxexpress.png"
                  alt="株式会社マックスエクスプレスの物流施設"
                  width={800}
                  height={500}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-[11px] font-bold tracking-[0.18em] text-amber-700">
                    FUKUOKA PARTNER
                  </p>

                  <h3 className="mt-3 text-lg font-bold">
                    株式会社マックスエクスプレス
                  </h3>

                  <a
                    href="https://www.maxexpress.co.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4"
                  >
                    公式サイトを見る ↗
                  </a>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <img
                  src="/images/partner-sgrow.png"
                  alt="株式会社エスグローの物流施設"
                  width={800}
                  height={500}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-[11px] font-bold tracking-[0.18em] text-amber-700">
                    KOBE PARTNER
                  </p>

                  <h3 className="mt-3 text-lg font-bold">
                    株式会社エスグロー
                  </h3>

                  <a
                    href="https://www.s-grow.co.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4"
                  >
                    公式サイトを見る ↗
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ACCESS */}
        <section className="bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={goldLabel}>
              LOCATION & ACCESS
            </p>

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
      </main>

      <Footer />
    </div>
  )
}
