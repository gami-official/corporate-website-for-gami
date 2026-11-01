import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "発送代行・倉庫保管・物流サービス｜大阪を主軸に全国対応｜株式会社GAMI",
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
    english: "WAREHOUSING",
    title: "倉庫保管",
    text: "1坪からの保管相談、EC在庫、一時保管など。商品・数量・期間に合わせた保管をご提案します。",
  },
  {
    english: "FULFILLMENT",
    title: "発送代行",
    text: "ピッキング・梱包・発送まで。継続的なEC出荷から企業向け発送まで対応します。",
  },
  {
    english: "INSPECTION & PROCESSING",
    title: "検品・流通加工",
    text: "商品検品、シール貼り、セット組み、封入、包装など、必要な工程だけでもご相談可能です。",
  },
  {
    english: "BULK OPERATIONS",
    title: "大量発送・スポット案件",
    text: "キャンペーン商品の一斉発送、大量封入、繁忙期の作業など、案件に応じた体制を構築します。",
  },
  {
    english: "EDUCATIONAL LOGISTICS",
    title: "教材・パンフレット発送",
    text: "学習塾・スクール・オンライン講座向け。教材の丁合・セット組みから、受講者への発送、教室への小分け発送まで対応します。",
  },
  {
    english: "PACKAGING MATERIALS",
    title: "ダンボール・梱包資材",
    text: "近隣の提携ダンボール会社との連携で、資材コストの見直しをご提案。ダンボールだけのお見積りも大歓迎です。",
  },
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

const concerns = [
  "段ボール数箱の保管",
  "小ロットの発送代行",
  "EC商品の保管・出荷",
  "土日祝の出荷相談",
  "検品・梱包だけの依頼",
  "急な出荷・繁忙期対応",
  "大量の封入・セット組み・発送",
  "自社物流拠点の確保",
  "教材の丁合・セット組み・発送",
  "教室へのパンフレット小分け発送",
  "オンライン講座の教材発送",
  "ダンボール単体のお見積り",
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

const steps = [
  {
    number: "01",
    title: "お問い合わせ",
    text: "商品・数量・希望時期・お困りごとをお知らせください。",
  },
  {
    number: "02",
    title: "お見積り・運用設計",
    text: "作業内容・保管条件・発送頻度などを確認します。",
  },
  {
    number: "03",
    title: "業務開始",
    text: "入庫・作業・出荷の手順を決めて運用を開始します。",
  },
]

const faqs = [
  {
    question: "教材の丁合や、教室への小分け発送も依頼できますか？",
    answer: "はい。学習塾・スクール・オンライン講座向けに、教材の丁合・セット組み、案内状などの同梱、受講者への発送、パンフレットの指定部数での小分け発送をご相談いただけます。印刷会社からの直送・保管も含めて対応方法をご提案します。",
  },
  {
    question: "ダンボールだけでも見積りを依頼できますか？",
    answer: "はい。ダンボール単体のお見積りも大歓迎です。サイズ・仕様・数量・納品先を分かる範囲でお知らせください。近隣の提携ダンボール会社との連携を活かし、ご提案します。",
  },
  {
    question: "発送件数が少なくても相談できますか？",
    answer:
      "はい。小ロット発送やECを始めたばかりの事業も歓迎しています。商品や数量に応じて対応方法をご提案します。",
  },
  {
    question: "段ボール数箱だけの保管も可能ですか？",
    answer:
      "はい。1坪程度の小規模保管もご相談いただけます。商品の大きさ・数量・保管期間をお知らせください。",
  },
  {
    question: "土日祝の発送にも対応していますか？",
    answer:
      "365日対応の物流体制があります。作業内容、出荷条件、締切、運用体制などは事前のご相談となります。",
  },
  {
    question: "検品や梱包だけでも依頼できますか？",
    answer:
      "はい。検品、シール貼り、セット組み、封入など、必要な工程だけでもご相談いただけます。",
  },
  {
    question: "大量の封入・一斉発送も相談できますか？",
    answer:
      "はい。数量、納期、商品仕様、配送条件などを確認し、対応体制をご提案します。",
  },
  {
    question: "海外企業から日本国内への発送も依頼できますか？",
    answer:
      "はい。日本国内での保管、梱包、セット組み、発送などについてご相談いただけます。",
  },
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

        {/* OSAKA BASE */}
        <section className="py-16 sm:py-24">
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
                GAMI OSAKA BASEは、大阪府守口市にある
                約100坪の自社倉庫。
                お客様の事業に合わせて、
                御社の物流拠点としてご活用いただくことも
                ご相談いただけます。
              </p>

              <p className="mt-4 text-sm leading-8 text-zinc-600">
                自社で倉庫を新設せずに、
                保管・在庫管理・検品・梱包・発送を一体化。
                利用方法や運用範囲は個別に設計します。
              </p>

              <Link
                href="/warehouse"
                className="mt-6 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4"
              >
                GAMIの物流拠点を見る →
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

        {/* NETWORK */}
        <section
          id="network"
          className="bg-zinc-950 py-16 text-white sm:py-24"
        >
          <div className={container}>
            <p className={labelDark}>
              GAMI LOGISTICS NETWORK
            </p>

            <h2 className={heading}>
              大阪を主軸に、
              <br />
              福岡・神戸と連携。
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-8 text-white/70">
              GAMIの物流事業は、大阪の自社倉庫
              「GAMI OSAKA BASE」を主軸に展開。
              福岡・神戸の協力パートナーと連携し、
              案件規模や作業内容に応じた物流体制を構築します。
            </p>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-amber-500/50 bg-gradient-to-b from-amber-500/15 to-white/5 p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] text-amber-400">
                  MAIN OPERATIONS
                </p>

                <h3 className="mt-6 text-3xl font-black">
                  OSAKA
                </h3>

                <p className="mt-2 text-base font-bold text-amber-300">
                  GAMI OSAKA BASE
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  大阪府守口市の約100坪の自社倉庫。
                  GAMIの物流事業を支える主軸拠点として、
                  保管・検品・流通加工・発送に対応します。
                </p>
              </article>

              <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/50">
                  PARTNER NETWORK
                </p>

                <h3 className="mt-6 text-3xl font-black">
                  FUKUOKA
                </h3>

                <p className="mt-2 text-base font-bold">
                  福岡・協力ネットワーク
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  福岡の物流パートナーと連携。
                  案件規模や作業内容に合わせて、
                  保管・加工・発送などの物流業務を支えます。
                </p>
              </article>

              <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/50">
                  PARTNER NETWORK
                </p>

                <h3 className="mt-6 text-3xl font-black">
                  KOBE
                </h3>

                <p className="mt-2 text-base font-bold">
                  神戸・協力ネットワーク
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  神戸の物流パートナーと連携。
                  案件の内容や物量に合わせて、
                  対応体制を構築します。
                </p>
              </article>
            </div>

            <Link
              href="/warehouse"
              className="mt-8 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-300 underline underline-offset-4"
            >
              物流拠点の詳細を見る →
            </Link>
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
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {service.text}
                  </p>
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

        {/* EDUCATIONAL LOGISTICS */}
        <section id="educational-logistics" aria-labelledby="education-heading" className="scroll-mt-24 bg-zinc-950 py-16 text-white sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-2 lg:items-center`}>
            <div>
              <p className={labelDark}>EDUCATIONAL LOGISTICS</p>
              <h2 id="education-heading" className={heading}>
                教材の準備と発送を任せて、<br />授業・講座の運営に集中。
              </h2>
              <p className="mt-5 text-sm leading-8 text-white/75">
                学習塾・スクール・オンライン講座・セミナー運営会社様へ。
                教材やパンフレットの保管、丁合・セット組み、梱包・発送まで、まとめてご相談いただけます。
              </p>
              <Link href="/company#contact" className={`${button} mt-7`}>教材・パンフレットの発送を相談する →</Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "教材の丁合・セット組み", text: "講座・コースごとに必要な教材を順番にまとめ、案内状なども同梱。" },
                { title: "受講者への個別発送", text: "継続的な教材発送や、開講に合わせた一斉発送をご相談いただけます。" },
                { title: "教室への小分け発送", text: "パンフレットなどを指定部数に分けて、全国の教室・拠点へ発送。" },
                { title: "印刷会社から直送・保管", text: "入荷後の保管から作業・出荷まで、必要な工程を組み立てます。" },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <h3 className="text-base font-bold text-amber-300">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FLEXIBILITY */}
        <section className="py-16 sm:py-24">
          <div className={container}>
            <p className={label}>
              FLEXIBLE LOGISTICS
            </p>

            <h2 className={heading}>
              「こんな依頼でも？」
              <br />
              から、始めてください。
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-zinc-600">
              小さな案件、急ぎの案件、
              まだ条件が決まっていない案件も。
              まずはご相談ください。
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {concerns.map((item) => (
                <li
                  key={item}
                  className="flex min-w-0 items-start gap-3 rounded-xl border border-black/10 bg-white p-4"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-bold text-amber-600"
                  >
                    ✓
                  </span>

                  <span className="text-sm font-semibold leading-6">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/company#contact"
              className={`${button} mt-8`}
            >
              対応できるか相談する →
            </Link>
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

        {/* 365-DAY OPERATIONS */}
        <section id="operations-365" aria-labelledby="operations-heading" className="scroll-mt-24 py-16 sm:py-24">
          <div className={container}>
            <p className={label}>365-DAY OPERATIONS</p>
            <h2 id="operations-heading" className={heading}>365日対応を、<br />御社に合う運用で。</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600">
              土日祝の出荷も、事前に取り決めた作業内容・運用条件に応じて対応。
              出荷する日だけでなく、受付・作業・連絡の流れまで、お客様と一緒に整えます。
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "必要な出荷日を確認", text: "平日・土日祝を含め、出荷を希望する日や頻度を伺います。" },
                { title: "受付と出荷の流れを設計", text: "商品・件数・作業内容に合わせ、発送指示の方法や受付締切を取り決めます。" },
                { title: "セット組みと確認手順", text: "同梱物や梱包方法を確認し、事前準備を含めた作業の進め方を決めます。" },
                { title: "連絡・繁忙期対応を相談", text: "日々の連絡方法と、出荷が増える時期・数量を確認し、対応体制を調整します。" },
              ].map((item, index) => (
                <article key={item.title} className="rounded-2xl border border-black/10 bg-white p-6">
                  <p className="text-xs font-bold tracking-[0.18em] text-amber-700">0{index + 1}</p>
                  <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-zinc-500">※即日出荷・365日対応の条件は、案件ごとに事前に取り決めます。</p>
            <Link href="/company#contact" className={`${button} mt-6`}>土日祝の出荷・運用を相談する →</Link>
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
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <h3 className="text-lg font-bold sm:text-xl">大阪から、届けるまでの時間を短く。</h3>
              <p className="mt-4 text-sm leading-8 text-zinc-700">
                大阪を発送拠点とすることで、九州地方から関東地方までの幅広いエリアへ、基本的に翌日のお届けが可能です。
                調達先・作業内容・配送先を踏まえ、どこで作業し、どこから発送するかをご提案します。
              </p>
              <p className="mt-3 text-xs leading-6 text-zinc-600">※お届け日数は配送先・配送サービスにより異なります。道路状況、気象条件、繁忙期などにより遅延する場合があります。</p>
            </div>
          </div>
        </section>

        {/* CARDBOARD QUOTE */}
        <section id="cardboard" aria-labelledby="cardboard-heading" className="scroll-mt-24 bg-zinc-950 py-16 text-white sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-2 lg:items-center`}>
            <div>
              <p className={labelDark}>PACKAGING COSTS</p>
              <h2 id="cardboard-heading" className={heading}>そのダンボール代、<br />見直してみませんか？</h2>
              <p className="mt-5 text-sm leading-8 text-white/75">近隣の提携ダンボール会社との連携により、価格には自信があります。物流委託と合わせたご相談も、資材だけのご相談も歓迎です。</p>
            </div>
            <div className="rounded-2xl border border-amber-400/35 bg-white/5 p-6 sm:p-8">
              <h3 className="text-xl font-bold leading-9 text-amber-300 sm:text-2xl">ダンボールだけの<br />お見積りも大歓迎。</h3>
              <p className="mt-4 text-sm leading-8 text-white/75">今お使いのサイズ・仕様・数量・納品先を、分かる範囲でお知らせください。価格を比べて、驚いていただきたい。まずは一度、GAMIにご相談ください。</p>
              <Link href="/company#contact" className={`${button} mt-6`}>ダンボールの見積りを依頼する →</Link>
              <p className="mt-3 text-xs leading-6 text-white/60">ご相談内容に「ダンボール見積り」とご記入ください。</p>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={label}>
              TRUSTED PARTNERS
            </p>

            <h2 className={heading}>
              信頼できる仲間と、
              <br />
              対応力を広げる。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              大阪の自社倉庫を中心に、
              福岡・神戸の協力パートナーとも連携。
              案件規模や作業内容に応じた物流体制をご提案します。
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-black/10 bg-[#fafaf9]">
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

              <article className="overflow-hidden rounded-2xl border border-black/10 bg-[#fafaf9]">
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

        {/* PROCESS */}
        <section className="bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={label}>
              HOW WE WORK
            </p>

            <h2 className={heading}>
              ご相談から、
              <br />
              物流のスタートまで。
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-black/10 bg-[#fafaf9] p-6"
                >
                  <p className="text-3xl font-black text-amber-600">
                    {step.number}
                  </p>

                  <h3 className="mt-4 text-lg font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24">
          <div className={`${container} max-w-4xl`}>
            <p className={label}>
              FAQ
            </p>

            <h2 className={heading}>
              よくあるご質問。
            </h2>

            <div className="mt-8 space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-xl border border-black/10 bg-white px-5 py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold leading-7 [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl text-amber-700 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-4 border-t border-black/5 pt-4 text-sm leading-8 text-zinc-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
