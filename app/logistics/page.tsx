import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title:
    "物流サービス｜教材発送・発送代行・倉庫保管｜株式会社GAMI",
  description:
    "大阪の自社倉庫GAMI OSAKA BASEを主軸に、福岡・神戸の協力ネットワークと連携。倉庫保管、発送代行、教材の丁合・セット組み、検品、流通加工、輸送手配、ダンボール単体見積りまでご相談いただけます。",
  alternates: {
    canonical: "/logistics",
  },
}

const container = "mx-auto max-w-6xl px-4 sm:px-6"

const sectionSpace = "py-16 sm:py-24"

const goldLabel =
  "text-[11px] font-bold tracking-[0.18em] text-amber-700"

const darkGoldLabel =
  "text-[11px] font-bold tracking-[0.18em] text-amber-400"

const heading =
  "mt-3 text-[clamp(1.55rem,5.5vw,2.5rem)] font-bold leading-[1.45] tracking-tight"

const primaryButton =
  "inline-flex min-h-[50px] items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-zinc-950 transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"

const services = [
  {
    number: "01",
    english: "WAREHOUSING",
    title: "倉庫保管・在庫管理",
    text:
      "段ボール数箱から、EC商品の継続保管、資材の一時保管まで。1坪からの保管相談にも対応し、商品特性・数量・保管期間に合わせた運用をご提案します。",
    points: [
      "小ロット・1坪からの保管相談",
      "EC商品・販売在庫の保管",
      "一時保管・繁忙期の保管",
      "入出庫・在庫管理",
    ],
  },
  {
    number: "02",
    english: "FULFILLMENT",
    title: "発送代行・EC物流",
    text:
      "商品のピッキング、梱包、送り状作成、発送まで。ECの継続出荷から企業向け発送、キャンペーン商品の一斉発送までご相談いただけます。",
    points: [
      "ピッキング・梱包・発送",
      "EC・通販商品の出荷",
      "企業向け発送・一斉発送",
      "出荷データ・送り状対応",
    ],
  },
  {
    number: "03",
    english: "INSPECTION",
    title: "商品検品・品質確認",
    text:
      "入荷時や出荷前の商品確認、数量確認、外観検査など。必要な検品工程を組み込み、商品ごとの条件に合わせて作業を行います。",
    points: [
      "数量・品番確認",
      "外観・パッケージ確認",
      "出荷前チェック",
      "検品結果の管理・報告",
    ],
  },
  {
    number: "04",
    english: "VALUE-ADDED SERVICES",
    title: "流通加工・セット組み",
    text:
      "シール貼り、セット組み、封入、箱組立、包装などの手作業に対応。複数工程をまとめてご依頼いただくことも、作業単体でのご相談も可能です。",
    points: [
      "シール貼り・ラベル貼付",
      "セット組み・アッセンブリ",
      "封入・包装・箱組立",
      "内職作業・スポット作業",
    ],
  },
  {
    number: "05",
    english: "BULK OPERATIONS",
    title: "大量発送・スポット案件",
    text:
      "キャンペーン、販促物、カード・印刷物などの大量封入や一斉発送。数量・納期・資材・配送条件を確認し、案件ごとの作業体制を組み立てます。",
    points: [
      "大量封入・セット作業",
      "キャンペーン商品の発送",
      "販促物・印刷物の一斉発送",
      "繁忙期・短期案件の相談",
    ],
  },
  {
    number: "06",
    english: "TRANSPORTATION",
    title: "輸送手配・配送調整",
    text:
      "第一種貨物利用運送事業の登録を活かし、商品・物量・配送先・納期に応じた輸送方法を検討。物流作業から輸送手配までまとめてご相談いただけます。",
    points: [
      "国内輸送の手配",
      "物量に応じた配送方法の検討",
      "出荷・配送スケジュール調整",
      "協力運送会社との連携",
    ],
  },
  {
    number: "07",
    english: "EDUCATIONAL LOGISTICS",
    title: "教材・パンフレット発送",
    text: "学習塾・スクール・オンライン講座・セミナー運営会社様へ。教材の保管から丁合・セット組み、資料同梱、受講者や教室への発送まで、ご依頼に合わせて対応します。",
    points: ["教材の丁合・講座別セット組み", "案内状・パンフレットの同梱", "受講者への個別発送・一斉発送", "教室への指定部数での小分け発送"],
  },
  {
    number: "08",
    english: "PACKAGING MATERIALS",
    title: "ダンボール・梱包資材",
    text: "近隣の提携ダンボール会社との連携により、価格には自信があります。物流委託と合わせた相談はもちろん、ダンボール単体のお見積りも歓迎します。",
    points: ["ダンボール単体のお見積り", "サイズ・仕様・数量に合わせた提案", "梱包資材コストの見直し", "納品先・希望時期の相談"],
  },
]

const concerns = [
  "発送作業が追いつかない",
  "保管場所が足りない",
  "EC物流を外注したい",
  "検品・加工だけ任せたい",
  "繁忙期だけ依頼したい",
  "土日祝の出荷を相談したい",
  "大量の封入・発送を任せたい",
  "物流拠点を新たに確保したい",
  "教材の丁合・発送を任せたい",
  "教室へパンフレットを送りたい",
  "講座別に教材をセットしたい",
  "ダンボール代を見直したい",
]

const workItems = [
  "検品",
  "梱包",
  "シール貼り",
  "セット組み",
  "封入",
  "箱組立",
  "教材の丁合",
  "パンフレットの小分け",
  "ラベル貼付",
  "ピッキング",
  "発送代行",
  "流通加工",
]

const industries = [
  "EC・通販",
  "美容・化粧品",
  "アパレル",
  "食品関連",
  "輸入商材",
  "ふるさと納税",
  "販促物・印刷物",
  "カード・雑貨",
  "学習塾・スクール",
  "オンライン講座",
  "セミナー運営",
  "教育関連事業",
]

const gallery = [
  {
    src: "/images/warehouse-overview-clean.png",
    alt: "GAMIの倉庫全景",
    title: "WAREHOUSE",
    caption: "倉庫・保管スペース",
  },
  {
    src: "/images/warehouse-operations-clean.png",
    alt: "GAMIの梱包作業スペース",
    title: "OPERATIONS",
    caption: "梱包・作業スペース",
  },
  {
    src: "/images/warehouse-dispatch-clean.png",
    alt: "出荷前商品の保管スペース",
    title: "STORAGE",
    caption: "商品保管・出荷準備",
  },
  {
    src: "/images/warehouse-processing-clean.png",
    alt: "箱組立作業",
    title: "PROCESSING",
    caption: "箱組立・流通加工",
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

const steps = [
  {
    number: "01",
    title: "お問い合わせ",
    text:
      "商品・数量・希望時期・お困りごとをお知らせください。",
  },
  {
    number: "02",
    title: "内容・条件の確認",
    text:
      "保管量、作業内容、出荷頻度、配送条件などを整理します。",
  },
  {
    number: "03",
    title: "お見積り・運用設計",
    text:
      "作業工程や物流体制、費用、スケジュールをご提案します。",
  },
  {
    number: "04",
    title: "業務開始",
    text:
      "入庫・検品・加工・発送などの手順を決めて運用を開始します。",
  },
]

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] font-sans text-zinc-900">
      <Header />

      <main>
        {/* HERO VIDEO */}
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

          <div
            className={`${container} relative z-20 py-16 sm:py-24 lg:py-32`}
          >
            <div className="max-w-4xl">
              <p className={darkGoldLabel}>
                GAMI LOGISTICS SERVICES
              </p>

              <h1 className="mt-5 text-[clamp(2rem,7vw,4.2rem)] font-black leading-[1.35] tracking-tight">
                必要な物流を、
                <br />
                <span className="text-amber-400">
                  必要なだけ。
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
                大阪の自社倉庫を主軸に、
                福岡・神戸の協力ネットワークと連携。
                倉庫保管、発送代行、検品、流通加工、
                大量発送、輸送手配まで。
                お客様の業務に合わせた物流サービスをご提案します。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/company#contact"
                  className={primaryButton}
                >
                  見積り・物流相談 →
                </Link>

                <Link
                  href="#services"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
                >
                  サービス一覧を見る
                </Link>
              </div>

              <p className="mt-5 text-[11px] leading-6 text-white/60">
                ※休日出荷や特別な作業条件は、事前のご相談が必要です。
              </p>
            </div>
          </div>
        </section>

        <nav aria-label="目的からサービスを探す" className="border-b border-black/10 bg-white">
          <div className={`${container} flex flex-wrap gap-2 py-5`}>
            {[
              ["#services", "物流サービス一覧"],
              ["#educational-logistics", "教材・パンフレット発送"],
              ["#case-studies", "導入事例5件"],
              ["#operations-365", "365日対応"],
              ["#cardboard", "ダンボール見積り"],
            ].map(([href, text]) => <a key={href} href={href} className="inline-flex min-h-[44px] items-center rounded-full border border-black/10 px-4 py-2 text-xs font-bold text-zinc-700 transition hover:border-amber-400 hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">{text}</a>)}
          </div>
        </nav>

        {/* CHALLENGES */}
        <section className={sectionSpace}>
          <div className={container}>
            <p className={goldLabel}>
              YOUR CHALLENGES
            </p>

            <h2 className={heading}>
              こんな物流の課題、
              <br />
              ありませんか？
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              物流業務のすべてを任せる必要はありません。
              お困りの工程や不足している部分だけでも、
              お気軽にご相談ください。
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
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
          </div>
        </section>

        {/* SERVICE DETAILS */}
        <section
          id="services"
          className={`scroll-mt-24 bg-white ${sectionSpace}`}
        >
          <div className={container}>
            <p className={goldLabel}>
              OUR SERVICES
            </p>

            <h2 className={heading}>
              GAMIが対応する、
              <br />
              8つの物流サービス。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              保管・発送・検品・加工・輸送手配に加え、教材発送と梱包資材にも対応。
              案件に合わせて必要な工程を組み合わせ、
              物流業務をサポートします。
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group overflow-hidden rounded-2xl border border-black/10 bg-[#fafaf9] transition hover:border-amber-300 hover:shadow-lg"
                >
                  <div className="border-b border-black/10 bg-zinc-950 px-6 py-5 text-white">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[10px] font-bold tracking-[0.14em] text-amber-400">
                        {service.english}
                      </p>

                      <span className="text-2xl font-black text-white/30">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold leading-relaxed sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>

                  <div className="p-6">
                    <p className="text-sm leading-8 text-zinc-600">
                      {service.text}
                    </p>

                    <ul className="mt-5 space-y-3 border-t border-black/10 pt-5">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-7"
                        >
                          <span
                            aria-hidden="true"
                            className="shrink-0 font-bold text-amber-600"
                          >
                            ✓
                          </span>

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATIONAL LOGISTICS */}
        <section id="educational-logistics" aria-labelledby="education-heading" className="scroll-mt-24 bg-zinc-950 py-16 text-white sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-2 lg:items-center`}>
            <div>
              <p className={darkGoldLabel}>EDUCATIONAL LOGISTICS</p>
              <h2 id="education-heading" className={heading}>
                教材の準備と発送を任せて、<br />授業・講座の運営に集中。
              </h2>
              <p className="mt-5 text-sm leading-8 text-white/75">
                学習塾・スクール・オンライン講座・セミナー運営会社様へ。
                教材やパンフレットの保管、丁合・セット組み、梱包・発送まで、まとめてご相談いただけます。
              </p>
              <Link href="/company#contact" className={`${primaryButton} mt-7`}>教材・パンフレットの発送を相談する →</Link>
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

        {/* MANUAL OPERATIONS */}
        <section className={sectionSpace}>
          <div className={container}>
            <p className={goldLabel}>
              VALUE-ADDED OPERATIONS
            </p>

            <h2 className={heading}>
              細かな手作業も、
              <br />
              お任せください。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              物流は、商品を運ぶだけではありません。
              検品、ラベル貼り、セット組み、封入など、
              人の手が必要な工程にも対応します。
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {workItems.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[64px] items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-4 text-center text-sm font-bold"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-950 p-6 text-white sm:p-8">
              <p className={darkGoldLabel}>
                FLEXIBLE OPERATIONS
              </p>

              <h3 className="mt-3 text-xl font-bold leading-relaxed sm:text-2xl">
                「この作業だけお願いしたい」
                <br />
                そんなご相談も歓迎です。
              </h3>

              <p className="mt-4 text-sm leading-8 text-white/70">
                作業内容、数量、納期、商品仕様を確認し、
                ご依頼に合わせた作業方法をご提案します。
              </p>

              <Link
                href="/company#contact"
                className={`${primaryButton} mt-6`}
              >
                作業について相談する →
              </Link>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className={`bg-white ${sectionSpace}`}>
          <div className={container}>
            <p className={goldLabel}>
              INDUSTRIES
            </p>

            <h2 className={heading}>
              幅広い商品・業種の、
              <br />
              物流ニーズに対応。
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600">
              商品の特性や保管条件、数量、納期に応じて、
              適した作業・出荷体制を検討します。
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {industries.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[68px] items-center justify-center rounded-xl border border-black/10 bg-[#fafaf9] px-4 py-4 text-center text-sm font-bold"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-8 text-zinc-600">
              ふるさと納税返礼品の発送、美容商材の検品・セット組み、
              EC・アパレル商品の保管・発送、教材の丁合・発送など、
              多様な物流業務をご相談いただけます。
            </p>
          </div>
        </section>

        {/* CASE STUDY SLIDER — swipe, horizontal scroll and numbered links */}
        <section id="case-studies" aria-labelledby="cases-heading" className="scroll-mt-24 py-16 sm:py-24">
          <div className={container}>
            <p className={goldLabel}>OUR EXPERIENCE</p>
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

        {/* 365-DAY OPERATIONS */}
        <section id="operations-365" aria-labelledby="operations-heading" className="scroll-mt-24 py-16 sm:py-24">
          <div className={container}>
            <p className={goldLabel}>365-DAY OPERATIONS</p>
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
            <Link href="/company#contact" className={`${primaryButton} mt-6`}>土日祝の出荷・運用を相談する →</Link>
          </div>
        </section>

        {/* WAREHOUSE LINK */}
        <section className={sectionSpace}>
          <div className={container}>
            <div className="grid overflow-hidden rounded-2xl border border-black/10 bg-white lg:grid-cols-2">
              <div className="relative min-h-[240px] overflow-hidden bg-zinc-900 sm:min-h-[320px]">
                <img
                  src="/images/warehouse-moriguchi.jpg"
                  alt="GAMI OSAKA BASEの倉庫外観"
                  width={960}
                  height={600}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-9">
                <p className={goldLabel}>
                  GAMI OSAKA BASE
                </p>

                <h2 className={heading}>
                  御社の物流拠点を、
                  <br />
                  大阪に。
                </h2>

                <p className="mt-5 text-sm leading-8 text-zinc-600">
                  大阪府守口市にある約100坪のGAMI自社倉庫。
                  商品の保管・加工・発送だけでなく、
                  お客様の物流拠点として活用いただくこともご相談可能です。
                </p>

                <Link
                  href="/warehouse"
                  className="mt-6 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4"
                >
                  物流拠点・倉庫の詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className={`bg-white ${sectionSpace}`}>
          <div className={container}>
            <p className={goldLabel}>
              OPERATIONS GALLERY
            </p>

            <h2 className={heading}>
              倉庫・作業風景。
            </h2>

            <p className="mt-4 text-sm leading-8 text-zinc-600">
              保管・梱包・出荷など、物流業務を支える現場をご紹介します。
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {gallery.map((image) => (
                <figure
                  key={image.src}
                  className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#fafaf9]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={640}
                      height={480}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>

                  <figcaption className="flex min-h-[70px] flex-col justify-center bg-white px-3 py-3">
                    <span className="text-[9px] font-bold tracking-[0.1em] text-amber-700 sm:text-[10px]">
                      {image.title}
                    </span>

                    <span className="mt-1 text-xs font-semibold leading-5 text-zinc-800 sm:text-sm">
                      {image.caption}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CARDBOARD QUOTE */}
        <section id="cardboard" aria-labelledby="cardboard-heading" className="scroll-mt-24 bg-zinc-950 py-16 text-white sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-2 lg:items-center`}>
            <div>
              <p className={darkGoldLabel}>PACKAGING COSTS</p>
              <h2 id="cardboard-heading" className={heading}>そのダンボール代、<br />見直してみませんか？</h2>
              <p className="mt-5 text-sm leading-8 text-white/75">近隣の提携ダンボール会社との連携により、価格には自信があります。物流委託と合わせたご相談も、資材だけのご相談も歓迎です。</p>
            </div>
            <div className="rounded-2xl border border-amber-400/35 bg-white/5 p-6 sm:p-8">
              <h3 className="text-xl font-bold leading-9 text-amber-300 sm:text-2xl">ダンボールだけの<br />お見積りも大歓迎。</h3>
              <p className="mt-4 text-sm leading-8 text-white/75">今お使いのサイズ・仕様・数量・納品先を、分かる範囲でお知らせください。価格を比べて、驚いていただきたい。まずは一度、GAMIにご相談ください。</p>
              <Link href="/company#contact" className={`${primaryButton} mt-6`}>ダンボールの見積りを依頼する →</Link>
              <p className="mt-3 text-xs leading-6 text-white/60">ご相談内容に「ダンボール見積り」とご記入ください。</p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={sectionSpace}>
          <div className={container}>
            <p className={goldLabel}>
              HOW WE WORK
            </p>

            <h2 className={heading}>
              ご相談から、
              <br />
              業務開始まで。
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-black/10 bg-white p-6"
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

            <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <h3 className="text-lg font-bold leading-relaxed sm:text-xl">
                まだ条件が決まっていなくても、大丈夫。
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-8 text-zinc-600">
                商品・数量・保管の有無・作業内容・希望時期など、
                分かる範囲でお知らせください。
                必要な条件は一緒に整理できます。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/company#contact"
                  className={primaryButton}
                >
                  見積り・物流相談 →
                </Link>

                <a
                  href="tel:0661159935"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-bold transition hover:bg-amber-100"
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
