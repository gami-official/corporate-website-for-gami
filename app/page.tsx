import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "株式会社GAMI｜大阪から支える発送代行・教材発送・物流サービス",
  description:
    "大阪府守口市の自社倉庫GAMI OSAKA BASEを主軸に、福岡・神戸の協力ネットワークと連携。倉庫保管、発送代行、教材の丁合・セット組み、検品、流通加工、ダンボール単体見積りまで株式会社GAMIにご相談ください。",
  alternates: {
    canonical: "/",
  },
}

const container = "mx-auto max-w-6xl px-4 sm:px-6"

const label =
  "text-[11px] font-bold tracking-[0.18em] text-amber-700"

const labelDark =
  "text-[11px] font-bold tracking-[0.18em] text-amber-400"

const heading =
  "mt-3 text-[clamp(1.55rem,5.5vw,2.5rem)] font-bold leading-[1.45] tracking-tight"

const button =
  "inline-flex min-h-[50px] items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-zinc-950 transition hover:bg-amber-400"

const services = [
  {
    "english": "WAREHOUSING",
    "title": "倉庫保管",
    "text": "1坪からの保管、一時保管、継続的な在庫保管をご相談いただけます。",
    "href": "/logistics#service-01"
  },
  {
    "english": "FULFILLMENT",
    "title": "発送代行",
    "text": "日々の出荷から一斉発送まで。ピッキング・梱包・発送をまとめて。",
    "href": "/logistics#service-02"
  },
  {
    "english": "INSPECTION & PROCESSING",
    "title": "検品・流通加工",
    "text": "検品、シール貼り、セット組み、封入など、必要な工程から。",
    "href": "/logistics#service-03"
  },
  {
    "english": "EDUCATIONAL LOGISTICS",
    "title": "教材・パンフレット発送",
    "text": "学習塾・スクール・オンライン講座向けに、丁合・セット組み・発送を。",
    "href": "/logistics#educational-logistics"
  },
  {
    "english": "PACKAGING MATERIALS",
    "title": "ダンボール見積り",
    "text": "価格に自信があります。ダンボールだけのお見積りも大歓迎です。",
    "href": "/logistics#cardboard"
  },
  {
    "english": "PROJECT SUPPORT",
    "title": "大量発送・輸送手配",
    "text": "大量封入、スポット案件、国内輸送まで、案件に合わせてご提案。",
    "href": "/logistics#service-05"
  }
]

const strengths = [
  {
    number: "01",
    title: "まず返す。すぐ動く。",
    text: "ご相談には迅速に対応。状況を確認し、実現できる方法を考えます。",
  },
  {
    number: "02",
    title: "小ロットから大規模まで。",
    text: "段ボール数箱の保管から、大量の封入・梱包・一斉発送まで対応をご提案します。",
  },
  {
    number: "03",
    title: "大阪の自社倉庫が主軸。",
    text: "GAMI OSAKA BASEを中心に、福岡・神戸の協力ネットワークと連携します。",
  },
  {
    number: "04",
    title: "御社の物流拠点として。",
    text: "GAMIの大阪倉庫を、お客様自身の物流拠点として活用することもご相談可能です。",
  },
]

const caseStudies = [
  {
    "id": "apparel",
    "industry": "アパレル販売事業者様",
    "image": "/images/case-apparel.png",
    "alt": "帽子・衣類の梱包を表現したイメージ",
    "title": "届くまでの2日を、1日へ。",
    "summary": "大阪での仕分けと即日出荷を組み合わせ、お届けまでの時間を短縮しました。",
    "paragraphs": [
      "関東地方のメーカーから商品を九州地方へ送り、サイズやカラーなどを組み合わせて発送していたお客様。従来の九州地方の拠点では、お届けまでに2日かかる配送先がありました。",
      "GAMIでは、商品の組み合わせ作業と発送を大阪で実施。即日出荷の運用と合わせて、従来2日かかっていた配送先へのお届けを翌日へと短縮しました。",
      "商品を早く出荷し、届け先に近い場所から発送する。その両方を整えることで、注文から到着までの時間を短縮。購入した商品を楽しみに待つお客様の満足度につながっています。"
    ]
  },
  {
    "id": "distribution",
    "industry": "九州地方の事業者様",
    "image": "/images/case-distribution.png",
    "alt": "大阪を拠点に各地へ届ける物流のイメージ",
    "title": "会社は九州地方に。物流拠点は大阪へ。",
    "summary": "主要な届け先に合わせて出荷拠点を見直し、配送リードタイムの課題を解消しました。",
    "paragraphs": [
      "九州地方で調達した商品を、中国地方・関西地方・関東地方へ発送しているお客様。主要な届け先が九州地方の外にあるため、配送にかかる時間が課題となっていました。",
      "そこで、大阪に物流拠点を設け、発送の流れを見直しました。GAMIが大阪での物流業務を担うことで、主要な配送エリアへのリードタイムの問題を解消しています。",
      "会社の所在地と、商品を発送する場所は、それぞれに適した場所を選べます。GAMIの大阪拠点を活用し、届け先に合わせた出荷体制を整えています。"
    ]
  },
  {
    "id": "rice",
    "industry": "ふるさと納税返礼品を扱う食品事業者様",
    "image": "/images/case-rice.png",
    "alt": "お米の返礼品と発送用ダンボールのイメージ",
    "title": "返礼品を、もっと早く。待つ間の不安を減らす。",
    "summary": "大阪で作業・発送する体制に変え、寄附者様の安心と配送確認の負担軽減につなげています。",
    "paragraphs": [
      "中国地方のお米を九州地方へ運び、作業してから各地へ発送していた食品事業者様。関西地方・関東地方の寄附者様へ届けるまでの流れに、改善の余地がありました。",
      "GAMIでは、大阪で作業・発送する体制を整備。中国地方から九州地方を経由していた流れを見直し、関西地方・関東地方の寄附者様へ、より早く届けられるよう手配しています。",
      "返礼品の到着を待つ時間が長くなると、配送状況への不安や確認のお問い合わせにつながります。早く届ける体制づくりは、寄附者様の安心につながり、配送確認に対応するお客様側の負担軽減にも役立っています。"
    ]
  },
  {
    "id": "beauty",
    "industry": "美容関連事業者様",
    "image": "/images/case-beauty.png",
    "alt": "美容商材を丁寧に梱包するイメージ",
    "title": "365日対応の、その先へ。相談と現場が近い物流。",
    "summary": "出荷できる日を増やし、素早いレスポンスと細かな提案で日々の運営を支えています。",
    "paragraphs": [
      "出荷業務を365日委託することで、事業運営の自由度を高めたお客様。日々の発送を任せられる体制に加えて、GAMIの提案や柔軟な対応も喜んでいただいています。",
      "ご相談には素早く応え、必要に応じて現場と調整。ご依頼どおりに作業を進めるだけでなく、より進めやすい方法があれば、GAMIからも提案しています。",
      "小さな組織だからこそ、細かなご要望にも目を配れる。相談する相手と実際に商品を扱う現場が近く、話が届きやすい。その距離の近さを活かし、一つひとつの作業や日々のやり取りまで大切にしています。"
    ]
  },
  {
    "id": "inspection",
    "industry": "化粧品メーカー様",
    "image": "/images/case-inspection.png",
    "alt": "手袋を着けて化粧品容器を検品するイメージ",
    "title": "急な検品にも、すぐ動く。品質と納期に向き合う。",
    "summary": "急ぎの容器検品を納期までに対応。現在も大阪と九州地方で検品を行っています。",
    "paragraphs": [
      "九州地方の化粧品メーカー様から、急ぎの容器検品をご依頼いただきました。限られた時間の中で、お客様が求める検品水準に応えられるよう、速やかに対応を進めました。",
      "求められる品質と納期の両方に向き合い、細部まで確認しながら作業を実施。必要な納期に間に合わせることができ、現在も大阪と九州地方で容器検品を行っています。",
      "検品に伴う輸送も、第一種貨物利用運送事業の登録を持つGAMIが手配。作業と輸送をまとめて相談でき、輸送コストにも配慮したご提案が可能です。",
      "さらに大阪では、化粧品製造業の許可を活かし、セット組みなどもご相談いただけます。検品から加工、輸送まで、必要な工程をつなぎ、お客様の商品づくりを支えています。"
    ]
  }
]

export default function HomePage() {
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

          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/45" />

          <div className={`${container} relative z-20 py-16 sm:py-24 lg:py-32`}>
            <div className="max-w-4xl">
              <p className={labelDark}>
                GAMI LOGISTICS SOLUTIONS
              </p>

              <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-white/65">
                OSAKA / FUKUOKA / KOBE
              </p>

              <h1 className="mt-5 text-[clamp(2.1rem,7vw,4.4rem)] font-black leading-[1.3] tracking-tight">
                物流を、
                <br />
                <span className="text-amber-400">
                  もっと自由に。
                </span>
              </h1>

              <p className="mt-5 text-lg font-bold leading-relaxed sm:text-2xl">
                まず返す。すぐ動く。
                <br />
                その先まで、やり切る。
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
                大阪の自社倉庫を主軸に、福岡・神戸と連携。
                1坪からの保管、小ロットの発送代行、
                検品・流通加工から大規模な一斉発送まで。
                お客様の物流課題に、柔軟な実行力で応えます。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/company#contact"
                  className={button}
                >
                  見積り・物流相談 →
                </Link>

                <Link
                  href="/logistics"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
                >
                  サービスを見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* NUMBER BLOCKS */}
        <section
          aria-label="GAMIの物流対応力"
          className="bg-[#0b0b0b] text-white"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/20 border-t border-white/15 px-2 py-6 sm:px-6 sm:py-9">
            <div className="min-w-0 px-2 text-center sm:px-5">
              <p className="whitespace-nowrap text-[clamp(1.5rem,5vw,2.8rem)] font-bold leading-none tabular-nums">
                100
                <span className="ml-1 text-[11px] font-semibold text-amber-400 sm:text-sm">
                  坪
                </span>
              </p>
              <p className="mt-2 text-[10px] leading-4 text-white/65 sm:text-xs">
                大阪自社倉庫・約
              </p>
            </div>

            <div className="min-w-0 px-2 text-center sm:px-5">
              <p className="whitespace-nowrap text-[clamp(1.5rem,5vw,2.8rem)] font-bold leading-none tabular-nums">
                1
                <span className="ml-1 text-[11px] font-semibold text-amber-400 sm:text-sm">
                  坪〜
                </span>
              </p>
              <p className="mt-2 text-[10px] leading-4 text-white/65 sm:text-xs">
                小規模保管も相談可能
              </p>
            </div>

            <div className="min-w-0 px-2 text-center sm:px-5">
              <p className="whitespace-nowrap text-[clamp(1.5rem,5vw,2.8rem)] font-bold leading-none tabular-nums">
                365
                <span className="ml-1 text-[11px] font-semibold text-amber-400 sm:text-sm">
                  日
                </span>
              </p>
              <p className="mt-2 text-[10px] leading-4 text-white/65 sm:text-xs">
                条件に応じた出荷対応
              </p>
            </div>
          </div>
        </section>

        {/* WHY GAMI */}
        <section className="bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={label}>
              WHY GAMI
            </p>

            <h2 className={heading}>
              選ばれる理由は、
              <br />
              動けること。
            </h2>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-black/10 bg-[#fafaf9] p-6"
                >
                  <p className="text-xs font-bold tracking-[0.2em] text-amber-700">
                    {item.number}
                  </p>

                  <h3 className="mt-4 text-lg font-bold sm:text-xl">
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

        {/* SERVICES */}
        <section className="bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={label}>
              OUR SERVICES
            </p>

            <h2 className={heading}>
              必要な物流業務を、
              <br />
              必要なだけ。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              一部の工程だけでも、一括でのご依頼でも。
              お客様の業務に合わせたサービスをご提案します。
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <article
                  key={service.english}
                  className="rounded-2xl border border-black/10 bg-[#fafaf9] p-6 transition hover:border-amber-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[10px] font-bold tracking-[0.16em] text-amber-700">
                      {service.english}
                    </p>

                    <span className="text-3xl font-black text-zinc-200">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    <Link href={service.href} className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">{service.title}</Link>
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {service.text}
                  </p>
                  <Link href={service.href} className="mt-4 inline-flex min-h-[44px] items-center text-xs font-bold text-amber-800 underline underline-offset-4">詳しいサービス内容を見る →</Link>
                </article>
              ))}
            </div>

            <Link
              href="/logistics"
              className="mt-8 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4"
            >
              物流サービス一覧を見る →
            </Link>
          </div>
        </section>

        {/* CASE STUDY SLIDER — swipe, horizontal scroll and numbered links */}
        <section id="case-studies" aria-labelledby="cases-heading" className="scroll-mt-24 py-16 sm:py-24">
          <div className={container}>
            <p className={label}>OUR EXPERIENCE</p>
            <h2 id="cases-heading" className={heading}>物流を変えると、<br />事業の動きが変わる。</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600">
              商品を扱う場所、出荷するタイミング、日々の連絡の取り方。
              お客様ごとの課題に向き合い、商品が届くまでの流れを整えています。
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p id="case-slide-help" className="text-xs leading-6 text-zinc-500">横にスワイプ・スクロールしてご覧ください →</p>
              <nav aria-label="導入事例を選択" className="flex gap-2">
                {caseStudies.map((item, index) => (
                  <a key={item.id} href={`#case-${item.id}`} aria-label={`事例${index + 1}：${item.industry}へ`} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-xs font-bold text-zinc-700 transition hover:border-amber-500 hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">
                    0{index + 1}
                  </a>
                ))}
              </nav>
            </div>
            <div role="region" aria-label="導入事例5件のスライド" aria-describedby="case-slide-help" tabIndex={0} className="mt-5 flex snap-x snap-mandatory items-start gap-5 overflow-x-auto overscroll-x-contain rounded-2xl pb-6 motion-safe:scroll-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">
              {caseStudies.map((item, index) => (
                <article id={`case-${item.id}`} key={item.id} aria-labelledby={`case-heading-${item.id}`} className="w-[88%] min-w-0 shrink-0 snap-start scroll-mt-28 overflow-hidden rounded-2xl border border-black/10 bg-white sm:w-[65%] lg:w-[48%]">
                  <figure>
                    <img src={item.image} alt={item.alt} width={1536} height={1024} loading="lazy" className="aspect-[3/2] w-full object-cover" />
                    <figcaption className="px-5 pt-2 text-[11px] text-zinc-500">画像はイメージです</figcaption>
                  </figure>
                  <div className="p-5 sm:p-7">
                    <p className="text-[11px] font-bold tracking-[0.12em] text-amber-700">CASE 0{index + 1}</p>
                    <p className="mt-2 text-xs font-semibold leading-6 text-zinc-500">{item.industry}</p>
                    <h3 id={`case-heading-${item.id}`} className="mt-3 text-lg font-bold leading-8 sm:text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{item.summary}</p>
                    <details className="group mt-5 border-t border-black/10 pt-4">
                      <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-amber-800 [&::-webkit-details-marker]:hidden">
                        詳しいエピソードを読む
                        <span aria-hidden="true" className="text-xl group-open:rotate-45">+</span>
                      </summary>
                      <div className="mt-3 space-y-4">
                        {item.paragraphs.map((paragraph) => <p key={paragraph} className="text-sm leading-8 text-zinc-600">{paragraph}</p>)}
                      </div>
                    </details>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-3 text-xs leading-6 text-zinc-500">※お客様名・ブランド名は非公開です。配送日数・対応条件は、各事例における内容です。</p>
            <Link href="/company#contact" className={`${button} mt-6`}>自社の物流について相談する →</Link>
          </div>
        </section>

        {/* OSAKA BASE */}
        <section id="osaka-base" className="scroll-mt-24 py-16 sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-2 lg:items-center`}>
            <div>
              <p className={label}>
                GAMI OSAKA BASE
              </p>

              <h2 className={heading}>
                御社の物流拠点を、
                <br />
                大阪に。
              </h2>

              <p className="mt-5 text-sm leading-8 text-zinc-600">
                大阪府守口市の約100坪の自社倉庫「GAMI OSAKA BASE」。
                福岡・神戸の協力パートナーとも連携し、案件に合う体制を組み立てます。
              </p>

              <p className="mt-4 text-sm leading-8 text-zinc-600">倉庫の設備・保管スペース・作業風景・所在地は、物流拠点ページでご紹介します。</p>

              <Link
                href="/warehouse"
                className="mt-6 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4"
              >
                施設・作業写真・アクセスを見る →
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src="/images/warehouse-moriguchi-inside.jpg"
                alt="GAMI OSAKA BASEの倉庫内観"
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 sm:p-7">
                <p className="text-[11px] font-bold tracking-[0.2em] text-amber-300">
                  YOUR LOGISTICS BASE
                </p>

                <p className="mt-2 text-lg font-bold text-white sm:text-2xl">
                  GAMIの倉庫を、
                  <br />
                  御社の物流拠点に。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNATIONAL */}
        <section className="bg-zinc-950 py-16 text-white sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-2 lg:items-center`}>
            <div>
              <p className={labelDark}>
                INTERNATIONAL FULFILLMENT
              </p>

              <h2 className={heading}>
                日本に拠点がなくても、
                <br />
                日本国内の物流を。
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/70">
                海外企業の日本国内向け発送にも対応。
                商品の保管・セット組み・梱包・大量発送など、
                日本での物流オペレーションをご相談いただけます。
              </p>

              <p className="mt-4 text-sm font-semibold text-amber-300">
                No Japan Office? We Handle It.
              </p>

              <Link
                href="/international"
                className={`${button} mt-7`}
              >
                Japan Fulfillment →
              </Link>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
              <p className="text-xs font-bold tracking-[0.18em] text-amber-400">
                JAPAN OPERATIONS
              </p>

              <div className="mt-6 space-y-5">
                {[
                  "Warehousing & Storage",
                  "Inspection & Kitting",
                  "Packing & Labeling",
                  "Bulk Mailing & Distribution",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-xs font-bold text-amber-400">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-semibold text-white/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-16 sm:py-24">
          <div className={container}>
            <p className={label}>
              OUR TEAM
            </p>

            <h2 className={heading}>
              顔が見える、
              <br />
              物流パートナー。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              大切な商品を安心してお任せいただけるように。
              GAMIは一つひとつのご相談に、人が向き合います。
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className="flex h-64 items-center justify-center bg-[#fafaf9] sm:h-80">
                  <img
                    src="/images/team-kazuhiro.jpg"
                    alt="代表取締役社長 Kazuhiro Fuchigami"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold text-amber-700">
                    代表取締役社長
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Kazuhiro Fuchigami
                  </h3>

                  <p className="mt-4 text-base font-bold">
                    小さなご相談にも、大きな責任を。
                  </p>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    段ボール数箱の保管から大規模な発送案件まで、
                    一つひとつのご依頼に真剣に向き合います。
                    気軽に相談でき、安心して任せていただける会社を目指しています。
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className="flex h-64 items-center justify-center bg-[#fafaf9] sm:h-80">
                  <img
                    src="/images/team-mayu.png"
                    alt="専務取締役 Mayu Kotera"
                    width={1024}
                    height={1536}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold text-amber-700">
                    専務取締役
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Mayu Kotera
                  </h3>

                  <p className="mt-4 text-base font-bold">
                    相談しやすさも、私たちのサービスです。
                  </p>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    物流のご相談が初めてでも、
                    まだ内容が決まっていなくても大丈夫です。
                    お客様とのコミュニケーションを大切にしながら、
                    最適な進め方を一緒に考えます。
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section aria-labelledby="next-step-heading" className="bg-zinc-950 py-16 text-white sm:py-24">
          <div className={container}>
            <p className={labelDark}>LET’S TALK</p>
            <h2 id="next-step-heading" className={heading}>「これ頼める？」<br />その一言から、始めましょう。</h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/75">商品・数量・希望時期を、分かる範囲でお知らせください。具体的な作業内容や費用は、お客様のご要望を伺いながら整理します。</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/company#contact" className={button}>見積り・物流相談 →</Link>
              <Link href="/logistics#operations-365" className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold hover:bg-white/10">365日対応の進め方を見る →</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
