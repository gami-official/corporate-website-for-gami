import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "株式会社GAMI｜365日対応の発送代行・全国チャーター・化粧品物流",
  description: "大阪の自社倉庫GAMI OSAKA BASEを主軸に、福岡・神戸と連携。発送代行、教材・パンフレットの丁合・セット組み、検品、流通加工、365日対応、ダンボール単体見積りまで。導入事例・倉庫写真とともにご紹介します。",
  alternates: { canonical: "/" },
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
    title: "全国チャーター・輸送手配",
    text:
      "第一種貨物利用運送事業の登録を活かし、全国の輸送ネットワークでチャーター便を手配。軽貨物から大型車まで、荷物・車格・日時・積み降ろし条件に合わせて輸送を組み立てます。",
    points: [
      "国内輸送の手配",
      "物量に応じた配送方法の検討",
      "出荷・配送スケジュール調整",
      "協力運送会社との連携",
    ],
  },
  {
    number: "07",
    english: "EDUCATIONAL MATERIALS",
    title: "教材・パンフレットの発送",
    text: "学習塾・スクール・オンライン講座・セミナー運営会社様へ。教材やパンフレットの保管から丁合・折り・封入・セット組み・発送まで、必要な工程をまとめて承ります。",
    points: ["教材の丁合・内容照合・セット組み", "案内用紙の折り・封入・同梱", "受講者様・教室への個別発送", "定期発送・一斉発送・365日対応のご相談"],
  },
  {
    number: "08",
    english: "CARDBOARD & PACKAGING",
    title: "ダンボール・梱包資材",
    text: "ダンボールの価格に自信があります。近隣の提携ダンボール会社との連携で、安くご提供できる体制を整えています。ダンボールのみのお見積り・ご購入も歓迎。現在の単価や仕様をもとに、コスト削減をご提案します。",
    points: ["対象エリア：大阪・近隣府県", "ダンボール単体のお見積り・販売", "サイズ・硬さ・色・ロット数に合わせてご提案", "現在の購入価格・参考URLをもとに比較見積り"],
  },

]

const strengths = [
  {
    number: "01",
    title: "365日、事業に合わせて。",
    text: "土日祝・年末年始も見据えた出荷体制をご提案。現場との距離の近さを活かし、柔軟に対応します。",
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
    value: "保管・検品・教材丁合・加工・梱包・発送",
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
    src: "/images/warehouse-operations-clean.png",
    alt: "物流作業スペース",
    english: "OPERATIONS",
    caption: "作業スペース",
  },
  {
    src: "/images/warehouse-dispatch-clean.png",
    alt: "商品保管スペース",
    english: "STORAGE",
    caption: "商品保管",
  },
  {
    src: "/images/warehouse-overview-clean.png",
    alt: "倉庫の通路と保管スペース",
    english: "WAREHOUSE",
    caption: "保管スペース",
  },
  {
    src: "/images/warehouse-processing-clean.png",
    alt: "箱組立・流通加工の作業風景",
    english: "PROCESSING",
    caption: "箱組立・流通加工",
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
                365-DAY FULFILLMENT / GAMI
              </p>

              <p className="mt-5 inline-flex rounded-full border border-amber-300/50 bg-amber-300/10 px-4 py-2 text-sm font-bold leading-6 text-amber-200">365日対応。土日祝・年末年始の出荷もご相談ください。</p>
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
                土日祝・年末年始を含む365日の出荷体制を、ご依頼に合わせて整えます。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/company#contact"
                  className={button}
                >
                  365日対応・物流を相談する →
                </Link>

                <Link
                  href="/#services"
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
                土日祝・年末年始も相談可能
              </p>
            </div>
          </div>
        </section>

        <nav aria-label="トップページ内の案内" className="border-b border-black/10 bg-white">
          <div className={`${container} flex flex-wrap gap-2 py-4`}>
            {[["#operations-365","365日対応"],["#services","サービス"],["#educational-logistics","教材発送"],["#case-studies","導入事例"],["#warehouse","倉庫・アクセス"],["#cardboard","ダンボール見積り"]].map(([href,text])=><a key={href} href={href} className="inline-flex min-h-[44px] items-center rounded-full border border-black/10 px-4 py-2 text-xs font-bold text-zinc-700 transition hover:border-amber-400 hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">{text}</a>)}
          </div>
        </nav>

        {/* 365-DAY OPERATIONS */}
        <section id="operations-365" aria-labelledby="operations-heading" className="scroll-mt-24 py-16 sm:py-24">
          <div className={container}>
            <p className={label}>365-DAY OPERATIONS</p>
            <h2 id="operations-heading" className={heading}>土日祝も、年末年始も。<br />発送を止めない、365日対応。</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600">
              「土日祝に発送できない」「年末年始に出荷が止まる」。そんなお悩みに、GAMIの365日対応で応えます。
              EC商品や教材、美容商材など、事前に取り決めた作業内容・出荷条件に合わせて対応。
              カレンダーに合わせて発送を待つ運用から、お客様の事業に合わせた出荷体制へ。
              小さな組織だからこそ、お客様と現場が近く、細かな調整や改善提案まで一緒に進めます。
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[{title:"休日の注文も、次の出荷へ。",text:"平日までの出荷待ちを減らし、お客様に商品を届ける流れを整えます。"},{title:"年末年始も見据えた体制。",text:"必要な出荷日・件数・受付締切を事前に確認し、継続して任せられる運用をご提案します。"},{title:"365日対応と、細かな対応力。",text:"出荷するだけでなく、セット内容の確認や梱包の工夫、現場との連絡まで支えます。"}].map(item=><article key={item.title} className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><h3 className="font-bold leading-7">{item.title}</h3><p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p></article>)}
            </div>
            <details className="group mt-7 rounded-2xl border border-black/10 bg-white p-5 sm:p-7">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-amber-800 [&::-webkit-details-marker]:hidden">受付・作業・連絡の進め方を確認する<span aria-hidden="true" className="text-xl group-open:rotate-45">+</span></summary>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            </details>
            <p className="mt-5 text-xs leading-6 text-zinc-500">※365日対応は24時間受付・作業を意味するものではありません。出荷日・受付締切・当日出荷の条件・休日の作業体制・費用を案件ごとに事前に取り決めます。</p>
            <Link href="/company#contact" className={`${button} mt-6`}>365日対応・年末年始の出荷を相談する →</Link>
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
        <section id="services" aria-labelledby="services-heading" className="scroll-mt-24 bg-white py-16 sm:py-24">
          <div className={container}>
            <p className={label}>OUR SERVICES</p>
            <h2 id="services-heading" className={heading}>必要な物流業務を、<br />必要なだけ。</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600">保管から発送まで一括でのご依頼も、検品やセット組みなど一部の工程だけでも。必要なサービスを開いて、詳しい作業内容をご確認いただけます。</p>
            <div className="mt-8 grid items-start gap-4 sm:grid-cols-2">
              {services.map(service=>(
                <details id={`service-${service.number}`} key={service.number} className="group scroll-mt-24 rounded-2xl border border-black/10 bg-[#fafaf9] p-5 sm:p-6">
                  <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0"><span className="block text-[10px] font-bold tracking-[0.14em] text-amber-700">{service.number} / {service.english}</span><span className="mt-3 block text-lg font-bold leading-7 sm:text-xl">{service.title}</span></span>
                    <span aria-hidden="true" className="shrink-0 text-2xl text-amber-700 group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-5 border-t border-black/10 pt-5">
                    <p className="text-sm leading-8 text-zinc-600">{service.text}</p>
                    <ul className="mt-4 space-y-2">{service.points.map(point=><li key={point} className="flex items-start gap-3 text-sm leading-7"><span aria-hidden="true" className="text-amber-700">✓</span><span>{point}</span></li>)}</ul>
                    <Link href={service.number === "06" ? "/company?inquiry=transport#contact" : service.number === "08" ? "/company?inquiry=cardboard#contact" : service.number === "07" ? "/company?inquiry=education#contact" : "/company#contact"} className="mt-4 inline-flex min-h-[44px] items-center text-sm font-bold text-amber-800 underline underline-offset-4">この業務について相談する →</Link>
                  </div>
                </details>
              ))}
            </div>
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

        {/* WAREHOUSE & ACCESS */}
        <section id="warehouse" aria-labelledby="warehouse-heading" className="scroll-mt-24 bg-white py-16 sm:py-24">
          <div className={container}>
            <span id="osaka-base" className="block scroll-mt-24" />
            <span id="osaka" className="block scroll-mt-24" />
            <p className={label}>GAMI OSAKA BASE</p>
            <h2 id="warehouse-heading" className={heading}>御社の物流拠点を、<br />大阪に。</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600">大阪府守口市の約100坪の自社倉庫。1坪からの保管相談をはじめ、検品・加工・梱包・発送まで。自社で倉庫を新設せずに、お客様の物流拠点として活用いただくこともご相談可能です。</p>
            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-3">
              {photos.map(photo=>(
                <figure key={photo.src} className="overflow-hidden rounded-2xl border border-black/10 bg-[#fafaf9]">
                  <img src={photo.src} alt={photo.alt} width={900} height={675} loading="lazy" className="aspect-[4/3] w-full object-cover object-center" />
                  <figcaption className="px-4 py-3 text-xs font-semibold leading-6 sm:text-sm">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
            <details className="group mt-6 rounded-2xl border border-black/10 bg-[#fafaf9] p-5 sm:p-6">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold [&::-webkit-details-marker]:hidden">施設概要・拠点としての利用について<span aria-hidden="true" className="text-xl text-amber-700 group-open:rotate-45">+</span></summary>
              <dl className="mt-4">{warehouseInfo.map(item=><div key={item.label} className="grid grid-cols-[88px_minmax(0,1fr)] gap-3 border-t border-black/10 py-4 text-sm sm:grid-cols-[120px_minmax(0,1fr)]"><dt className="font-semibold text-zinc-500">{item.label}</dt><dd className="min-w-0 break-words leading-7">{item.value}</dd></div>)}</dl>
              <p className="mt-3 text-xs leading-6 text-zinc-500">※拠点名称の使用、保管条件、作業範囲、契約条件などは事前の取り決めによります。</p>
            </details>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <h3 className="text-lg font-bold sm:text-xl">大阪から、届けるまでの時間を短く。</h3>
              <p className="mt-4 text-sm leading-8 text-zinc-700">九州地方から関東地方までの幅広いエリアへ、基本的に翌日のお届けが可能です。調達先・作業内容・配送先を踏まえ、どこで作業し、どこから発送するかをご提案します。</p>
              <p className="mt-3 text-xs leading-6 text-zinc-600">※お届け日数は配送先・配送サービスにより異なります。道路状況、気象条件、繁忙期などにより遅延する場合があります。</p>
            </div>
            <div id="network" className="mt-8 scroll-mt-24">
              <h3 className="text-lg font-bold">大阪を主軸に、福岡・神戸の協力パートナーと連携。</h3>
              <p className="mt-3 text-sm leading-8 text-zinc-600">案件規模や作業内容に応じて、協力ネットワークを活かした体制を構築します。</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a href="https://www.maxexpress.co.jp/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-black/10 p-5 transition hover:border-amber-400"><span className="text-[10px] font-bold tracking-widest text-amber-700">FUKUOKA PARTNER</span><span className="mt-2 block text-sm font-bold">株式会社マックスエクスプレス ↗</span></a>
                <a href="https://www.s-grow.co.jp/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-black/10 p-5 transition hover:border-amber-400"><span className="text-[10px] font-bold tracking-widest text-amber-700">KOBE PARTNER</span><span className="mt-2 block text-sm font-bold">株式会社エスグロー ↗</span></a>
              </div>
            </div>
            <details id="access" className="group mt-6 scroll-mt-24 rounded-2xl border border-black/10 p-5 sm:p-6">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold [&::-webkit-details-marker]:hidden"><span>所在地・アクセス<span className="mt-1 block text-xs font-normal leading-6 text-zinc-600">〒570-0003 大阪府守口市大日町1-8-18</span></span><span aria-hidden="true" className="text-xl text-amber-700 group-open:rotate-45">+</span></summary>
              <iframe title="GAMI OSAKA BASEの所在地" src="https://www.google.com/maps?q=大阪府守口市大日町1-8-18&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-5 h-[260px] w-full rounded-2xl border-0 sm:h-[340px]" />
            </details>
            <Link href="/company#contact" className={`${button} mt-7`}>大阪拠点の利用を相談する →</Link>
          </div>
        </section>

        {/* COSMETICS & BEAUTY */}
        <section id="beauty-logistics" aria-labelledby="beauty-heading" className="scroll-mt-24 bg-[#fbfaf7] py-16 sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-2 lg:items-center`}>
            <div>
              <p className={label}>COSMETICS &amp; BEAUTY</p>
              <h2 id="beauty-heading" className={heading}>化粧品・美容商材の、<br />検品からセット組み、発送まで。</h2>
              <p className="mt-5 text-sm leading-8 text-zinc-600">大阪拠点の化粧品製造業許可を活かし、化粧品メーカー様・美容商材を扱う事業者様の作業をサポート。容器や商品の外観検品、数量・品番の確認、ギフトや販売用のセット組み、梱包・発送までご相談いただけます。</p>
              <p className="mt-3 text-sm leading-8 text-zinc-600">急な検品や発売前のセット作業なども、数量・納期・求められる品質基準を伺い、現場と一緒に進め方を考えます。</p>
              <p className="mt-3 text-xs leading-6 text-zinc-500">化粧品製造業許可：27CZ201072（大阪拠点）。作業内容と許可範囲を確認のうえ、対応をご案内します。</p>
              <Link href="/company?inquiry=beauty#contact" className={`${button} mt-6`}>化粧品・美容商材の作業を相談する →</Link>
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <img src="/images/case-inspection.png" alt="化粧品容器の検品を表現したイメージ" width={1536} height={1024} loading="lazy" className="aspect-[3/2] w-full object-cover" />
              <div className="p-6"><p className="text-xs text-zinc-500">画像はイメージです。</p><ul className="mt-4 grid gap-3 text-sm font-semibold leading-7 sm:grid-cols-2">{["容器・商品の外観検品", "数量・品番・付属品の確認", "美容商材のセット組み", "ギフトセット・同梱作業", "梱包・保管・発送", "作業に伴う輸送手配"].map(item=><li key={item}>✓ {item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        {/* NATIONWIDE CHARTER */}
        <section id="charter-transport" aria-labelledby="charter-heading" className="scroll-mt-24 bg-white py-16 sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-2`}>
            <div>
              <p className={label}>NATIONWIDE CHARTER TRANSPORT</p>
              <h2 id="charter-heading" className={heading}>全国のチャーター便を、<br />荷物に合う車格で手配。</h2>
              <p className="mt-5 text-sm leading-8 text-zinc-600">第一種貨物利用運送事業の登録と、全国の協力輸送ネットワークを活かし、軽貨物・2t・4t・大型車など、車格を問わずご相談を承ります。スポット輸送から定期便まで、集荷先・納品先・物量・日時に合わせて手配します。</p>
              <p className="mt-3 text-sm leading-8 text-zinc-600">「この区間はいくら？」「今の運賃を見直したい」も歓迎です。現在の運賃や希望予算が分かれば、比較しやすい条件でお見積りします。金額が未定でも、お気軽にご相談ください。</p>
              <p className="mt-3 text-xs leading-6 text-zinc-500">配車可否・料金は、空車状況、車両条件、日時、経路、積み降ろし作業などを確認してご案内します。</p>
              <Link href="/company?inquiry=transport#contact" className={`${button} mt-6`}>チャーター便・輸送費を見積もる →</Link>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <h3 className="text-xl font-bold">まずは、この条件をお知らせください。</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7">{["集荷先・納品先（市区町村まででも可）", "集荷日・納品日・時間帯", "荷物の種類・個数・寸法・総重量", "希望車格・車両設備（未定でも可）", "手積み・フォークリフトなどの作業条件", "現在の運賃・希望予算（任意）"].map(item=><li key={item}>✓ {item}</li>)}</ul>
              <p className="mt-5 text-xs leading-6 text-zinc-600">運賃は税込・税別、高速代や作業費の込み・別も分かると、より比較しやすくなります。</p>
            </div>
          </div>
        </section>

        {/* CARDBOARD QUOTE */}
        <section id="cardboard" aria-labelledby="cardboard-heading" className="scroll-mt-24 bg-zinc-950 py-16 text-white sm:py-24">
          <div className={`${container} grid gap-8 lg:grid-cols-2 lg:items-center`}>
            <div>
              <p className={labelDark}>PACKAGING COSTS</p>
              <h2 id="cardboard-heading" className={heading}>ダンボールを、もっと安く。<br />価格に自信があります。</h2>
              <p className="mt-5 text-sm leading-8 text-white/75">近隣の提携ダンボール会社との連携により、安くご提供できる体制を整えています。今お使いのダンボールと、ぜひ価格を比べてください。ダンボールのみのご購入も承ります。</p>
            </div>
            <div className="rounded-2xl border border-amber-400/35 bg-white/5 p-6 sm:p-8">
              <h3 className="text-xl font-bold leading-9 text-amber-300 sm:text-2xl">ダンボールだけの<br />お見積りも大歓迎。</h3>
              <p className="mt-4 text-sm leading-8 text-white/75">3辺合計サイズ・硬さ・色・現在の購入価格・ロット数を、分かる範囲でお知らせください。購入先や商品ページのURLがあれば、比較見積りの参考にいたします。</p>
              <p className="mt-4 rounded-xl border border-amber-400/40 bg-amber-400/10 p-4 text-sm font-bold leading-7 text-amber-200">対象エリア：大阪・近隣府県<br /><span className="text-xs font-normal">納品先・数量に応じて配送可否とお見積りを確認します。</span></p>
              <Link href="/company?inquiry=cardboard#contact" className={`${button} mt-6`}>ダンボールの見積りを依頼する →</Link>
              <p className="mt-3 text-xs leading-6 text-white/60">フォームで「ダンボール単体のお見積り」をお選びください。</p>
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

        {/* ENGLISH ENTRANCE */}
        <section className="bg-white py-12 sm:py-16">
          <div className={`${container} flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between`}>
            <div><p className={label}>JAPAN FULFILLMENT</p><h2 className="mt-3 text-xl font-bold sm:text-2xl">海外企業の日本国内物流も、ご相談ください。</h2><p lang="en" className="mt-3 text-sm leading-7 text-zinc-600">Warehousing, kitting, packing and domestic shipping in Japan.</p></div>
            <Link href="/international" className={`${button} shrink-0`}>ENGLISH / Japan Fulfillment →</Link>
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
              <Link href="/#operations-365" className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold hover:bg-white/10">365日対応の進め方を見る →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
