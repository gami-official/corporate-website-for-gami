import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "倉庫紹介｜大阪・守口の物流倉庫",
  description:
    "大阪府守口市大日町1-8-18の約100坪倉庫。1坪からの保管、小ロット発送、検品・梱包・流通加工に対応。福岡・神戸の提携ネットワークも活用し、全国の物流を支えます。",
  alternates: {
    canonical: "/warehouse",
  },
}

const warehouseInfo = [
  {
    label: "所在地",
    value: "大阪府守口市大日町1-8-18",
  },
  {
    label: "面積",
    value: "約100坪",
  },
  {
    label: "保管",
    value: "1坪から相談可能",
  },
  {
    label: "作業",
    value: "保管・検品・加工・梱包・発送",
  },
  {
    label: "出荷",
    value: "365日対応。運用条件は事前相談",
  },
  {
    label: "案件",
    value: "小ロット・継続・スポット",
  },
]

const services = [
  "倉庫保管",
  "発送代行",
  "検品",
  "梱包",
  "シール貼り",
  "セット組み",
  "封入",
  "内職作業",
  "流通加工",
  "EC物流",
  "スポット出荷",
  "化粧品関連作業",
]

const strengths = [
  {
    title: "少量から",
    text: "段ボール数箱の保管や、少量の発送もご相談ください。",
  },
  {
    title: "作業だけ",
    text: "検品・シール貼り・セット組みなど、必要な工程だけでも対応。",
  },
  {
    title: "繁忙期も",
    text: "一時的な保管や出荷、繁忙期の作業も条件に合わせてご相談。",
  },
]

const photos = [
  {
    src: "/images/warehouse-moriguchi.jpg",
    alt: "GAMI守口倉庫の外観",
    caption: "守口倉庫・外観",
  },
  {
    src: "/images/warehouse-moriguchi-inside.jpg",
    alt: "GAMI守口倉庫の内観",
    caption: "守口倉庫・内観",
  },
  {
    src: "/images/warehouse-03.png",
    alt: "梱包作業スペース",
    caption: "梱包作業スペース",
  },
  {
    src: "/images/warehouse-05.png",
    alt: "出荷前商品の保管",
    caption: "出荷前商品の保管",
  },
]

const container = "mx-auto max-w-6xl px-4 sm:px-6"
const sectionSpace = "py-9 sm:py-14"
const eyebrow =
  "text-[11px] font-bold tracking-[0.12em] text-amber-700"
const heading =
  "mt-2 text-[23px] font-bold leading-[1.5] tracking-tight sm:text-4xl"
const primaryButton =
  "inline-flex min-h-[48px] items-center justify-center rounded-full bg-amber-500 px-3 py-3 text-center text-sm font-bold text-white transition hover:bg-amber-600"

export default function WarehousePage() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-zinc-900">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
          <img
            src="/images/warehouse-moriguchi-inside.jpg"
            alt=""
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />

          <div className={`${container} py-9 sm:py-16`}>
            <p className="text-[11px] font-bold tracking-[0.12em] text-amber-300">
              OSAKA / MORIGUCHI WAREHOUSE
            </p>

            <h1 className="mt-3 text-[28px] font-bold leading-[1.5] tracking-tight sm:text-5xl">
              <span className="inline-block">約100坪の倉庫。</span>
              <span className="inline-block">1坪から相談。</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              大阪・守口を拠点に、保管・検品・加工・梱包・発送まで。
              小ロットから継続案件、繁忙期のスポット対応まで
              ご相談いただけます。
            </p>

            <div className="mt-5 grid max-w-lg grid-cols-[1.35fr_1fr] gap-2">
              <Link
                href="/company#contact"
                className={primaryButton}
              >
                保管・作業を相談
              </Link>
              <a
                href="tel:0661159935"
                className="flex min-h-[48px] items-center justify-center rounded-full border border-white/40 px-3 py-3 text-sm font-bold transition hover:bg-white/10"
              >
                電話で相談
              </a>
            </div>
          </div>
        </section>

        <section className={sectionSpace}>
          <div className={container}>
            <p className={eyebrow}>WAREHOUSE INFO</p>
            <h2 className={heading}>大阪物流センター・守口倉庫。</h2>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <dl className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                {warehouseInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className={`grid grid-cols-[64px_minmax(0,1fr)] gap-3 px-4 py-3 sm:grid-cols-[90px_minmax(0,1fr)] sm:px-5 ${
                      index > 0 ? "border-t border-black/5" : ""
                    }`}
                  >
                    <dt className="text-sm font-semibold leading-6 text-zinc-500">
                      {item.label}
                    </dt>
                    <dd className="min-w-0 break-words text-sm leading-6 text-zinc-800">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 sm:p-6">
                <h3 className="text-lg font-bold leading-7">
                  必要な場所と作業から。
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  「少しだけ保管したい」「発送を任せたい」
                  「検品だけお願いしたい」など、
                  現在の状況に合わせてご相談ください。
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  商品・数量・希望時期が分かると、ご案内がスムーズです。
                  未定の項目は、一緒に整理できます。
                </p>
                <Link
                  href="/company#contact"
                  className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold text-amber-800 underline underline-offset-4"
                >
                  対応できるか相談する →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={`bg-white ${sectionSpace}`}>
          <div className={container}>
            <p className={eyebrow}>PHOTO</p>
            <h2 className={heading}>実際の倉庫・作業スペース。</h2>

            <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {photos.map((photo) => (
                <figure
                  key={photo.src}
                  className="overflow-hidden rounded-xl border border-black/10 bg-white"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={640}
                    height={480}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="px-3 py-2 text-xs leading-5 text-zinc-600">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={`bg-amber-50 ${sectionSpace}`}>
          <div className={container}>
            <p className={eyebrow}>SERVICES</p>
            <h2 className={heading}>対応できる倉庫作業。</h2>

            <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="rounded-xl border border-amber-100 bg-white px-3 py-3 text-center text-sm font-semibold leading-6"
                >
                  {service}
                </li>
              ))}
            </ul>

            <Link
              href="/logistics"
              className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold text-amber-800 underline underline-offset-4"
            >
              物流サービスを詳しく見る →
            </Link>
          </div>
        </section>

        <section className={sectionSpace}>
          <div className={container}>
            <p className={eyebrow}>FLEXIBLE SUPPORT</p>
            <h2 className={heading}>小ロット・スポットも歓迎。</h2>

            <div className="mt-5 grid gap-2 lg:grid-cols-3">
              {strengths.map((item) => (
                <article
                  key={item.title}
                  className="grid grid-cols-[70px_minmax(0,1fr)] items-start gap-3 rounded-xl border border-black/10 bg-white p-4 lg:block lg:p-5"
                >
                  <h3 className="text-sm font-bold leading-6 text-amber-700 lg:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-zinc-600 lg:mt-3">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`bg-zinc-950 text-white ${sectionSpace}`}>
          <div className={container}>
            <p className="text-[11px] font-bold tracking-[0.12em] text-amber-300">
              NETWORK
            </p>
            <h2 className={heading}>
              <span className="inline-block">拠点・提携ネットワークで、</span>
              <span className="inline-block">全国へ。</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
              大阪を中心に、福岡の物流拠点や神戸の提携倉庫も活用。
              商品・物量・配送エリアに合わせて物流体制をご相談します。
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {["大阪・守口", "福岡", "神戸・提携"].map((area) => (
                <div
                  key={area}
                  className="rounded-xl border border-white/15 bg-white/5 px-2 py-3 text-center text-sm font-semibold"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionSpace}>
          <div className={container}>
            <p className={eyebrow}>ACCESS</p>
            <h2 className={heading}>大阪物流センター所在地。</h2>

            <p className="mt-3 text-sm leading-7 text-zinc-600">
              大阪府守口市大日町1-8-18
            </p>

            <iframe
              title="GAMI大阪物流センターの所在地"
              src="https://www.google.com/maps?q=大阪府守口市大日町1-8-18&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-4 h-[200px] w-full rounded-2xl border-0 sm:h-[300px]"
            />

            <div className="mt-5 rounded-2xl bg-amber-50 p-4 sm:p-6">
              <h3 className="text-lg font-bold leading-7">
                保管も、作業も、まず相談。
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                小ロットから継続案件まで。
                商品・数量・作業内容・希望時期をお知らせください。
              </p>
              <div className="mt-4 grid max-w-lg grid-cols-[1.35fr_1fr] gap-2">
                <Link
                  href="/company#contact"
                  className={primaryButton}
                >
                  見積り・物流相談
                </Link>
                <a
                  href="tel:0661159935"
                  className="flex min-h-[48px] items-center justify-center rounded-full border border-black/15 bg-white px-3 py-3 text-sm font-bold transition hover:bg-amber-100"
                >
                  電話で相談
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
