
"use client"

import { useEffect, useId, useState } from "react"
import type { FormEvent } from "react"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

type Language = "ja" | "en"
type ContactFormProps = { language?: Language }

const inquiryTypes = [
  {
    value: "販路拡大・ビジネスマッチングの相談",
    ja: "販路拡大・ビジネスマッチングの相談",
    en: "Sales channel expansion / business matching",
  },
  {
    value: "協業・パートナーシップの相談",
    ja: "協業・パートナーシップの相談",
    en: "Business collaboration / partnership",
  },
  {
    value: "物流・発送代行の相談",
    ja: "物流・発送代行の相談",
    en: "Logistics and fulfillment",
  },
  { value: "365日対応・土日祝・年末年始の出荷相談", ja: "365日対応・土日祝・年末年始の出荷相談", en: "365-day fulfillment / weekend and New Year dispatch" },
  {
    value: "倉庫保管・流通加工の相談",
    ja: "倉庫保管・流通加工の相談",
    en: "Warehousing and value-added services",
  },
  {
    value: "教材・パンフレット発送の相談",
    ja: "教材・パンフレット発送の相談",
    en: "Educational materials and brochure fulfillment",
  },
  {
    value: "検品・品質チェックの相談",
    ja: "検品・品質チェックの相談",
    en: "Inspection and quality checks",
  },
  { value: "化粧品・美容商材の検品・セット組み", ja: "化粧品・美容商材の検品・セット組み", en: "Cosmetics and beauty product inspection / kitting" },
  {
    value: "シール貼り・セット組み・内職作業の相談",
    ja: "シール貼り・セット組み・内職作業の相談",
    en: "Labeling, kitting and assembly",
  },
  {
    value: "大量発送・封入・梱包の相談",
    ja: "大量発送・封入・梱包の相談",
    en: "High-volume mailing, inserting and packing",
  },
  {
    value: "スポット出荷・急ぎ案件の相談",
    ja: "スポット出荷・急ぎ案件の相談",
    en: "One-time or urgent shipments",
  },
  { value: "全国チャーター・輸送費のお見積り", ja: "全国チャーター・輸送費のお見積り", en: "Nationwide charter transport / freight quote" },
  {
    value: "ダンボール単体のお見積り",
    ja: "ダンボール単体のお見積り",
    en: "Cardboard boxes only — request a quote",
  },
  {
    value: "依頼内容がまだ決まっていない",
    ja: "依頼内容がまだ決まっていない",
    en: "Requirements not yet finalized",
  },
  {
    value: "その他の物流相談",
    ja: "その他の物流相談",
    en: "Other logistics inquiries",
  },
]

const cardboardFields = [
  { name: "box_size", ja: "3辺合計サイズ（cm）", en: "Total of three sides (cm)", placeholderJa: "例：60cm／80cm／100cm", placeholderEn: "e.g. 60 cm / 80 cm / 100 cm" },
  { name: "box_dimensions", ja: "縦・横・高さ（分かれば）", en: "Dimensions, if known", placeholderJa: "例：外寸 300×200×100mm", placeholderEn: "e.g. external 300 × 200 × 100 mm" },
  { name: "box_strength", ja: "硬さ・厚さ・材質", en: "Strength, thickness and material", placeholderJa: "例：硬め／Aフルート／不明", placeholderEn: "e.g. strong / A flute / unknown" },
  { name: "box_color", ja: "色・印刷の有無", en: "Color and printing", placeholderJa: "例：茶色・印刷なし／白色", placeholderEn: "e.g. brown, unprinted / white" },
  { name: "box_price", ja: "現在の購入単価（円／枚）", en: "Current unit price (JPY per box)", placeholderJa: "例：1枚45円（税込・送料込み）", placeholderEn: "e.g. JPY 45, including tax and delivery" },
  { name: "box_lot", ja: "ロット数・1回の購入枚数", en: "Lot size / quantity per order", placeholderJa: "例：1回500枚、月2回購入", placeholderEn: "e.g. 500 boxes per order, twice a month" },
  { name: "box_url", ja: "現在の商品・購入先URL", en: "Current product or supplier URL", placeholderJa: "https://example.com/product", placeholderEn: "https://example.com/product" },
  { name: "box_destination", ja: "納品先（府県・市区町村）", en: "Delivery location", placeholderJa: "例：大阪府守口市", placeholderEn: "e.g. Moriguchi, Osaka" },
  { name: "box_date", ja: "希望納期", en: "Required delivery date", placeholderJa: "例：来月上旬／未定", placeholderEn: "e.g. early next month / undecided" }
]

const transportFields = [
  {
    "name": "transport_from",
    "ja": "集荷先",
    "en": "Pickup location",
    "placeholderJa": "例：大阪府守口市／事業所・倉庫",
    "placeholderEn": "City, address or facility"
  },
  {
    "name": "transport_to",
    "ja": "納品先",
    "en": "Delivery location",
    "placeholderJa": "例：東京都江東区／倉庫",
    "placeholderEn": "City, address or facility"
  },
  {
    "name": "transport_pickup",
    "ja": "集荷希望日・時間",
    "en": "Pickup date and time",
    "placeholderJa": "例：11月10日 午前／未定",
    "placeholderEn": "Date, time window or undecided"
  },
  {
    "name": "transport_delivery",
    "ja": "納品希望日・時間",
    "en": "Delivery date and time",
    "placeholderJa": "例：翌日10時必着／時間指定なし",
    "placeholderEn": "Deadline or time window"
  },
  {
    "name": "transport_goods",
    "ja": "荷物・数量・寸法・総重量",
    "en": "Cargo, quantity, dimensions and total weight",
    "placeholderJa": "例：雑貨10パレット、1,100×1,100mm、計3t",
    "placeholderEn": "Goods, packages, dimensions, total weight"
  },
  {
    "name": "transport_vehicle",
    "ja": "希望車格・設備",
    "en": "Vehicle size and equipment",
    "placeholderJa": "例：軽貨物／2t／4t／大型、ウイング・ゲート車／未定",
    "placeholderEn": "Light van / 2t / 4t / large, wing body / tail lift / undecided"
  },
  {
    "name": "transport_handling",
    "ja": "積み降ろし・現地条件",
    "en": "Loading, unloading and site conditions",
    "placeholderJa": "例：両側フォークリフト／手積み／高さ制限",
    "placeholderEn": "Forklift / manual handling / access restrictions"
  },
  {
    "name": "transport_frequency",
    "ja": "頻度・台数",
    "en": "Frequency and vehicle count",
    "placeholderJa": "例：単発1台／毎週月曜1台",
    "placeholderEn": "One-off or regular schedule, vehicle count"
  }
]

const beautyFields = [
  {
    "name": "beauty_product",
    "ja": "商品・容器の種類",
    "en": "Products or containers",
    "placeholderJa": "例：化粧水容器／美容液／ヘアケア商材",
    "placeholderEn": "Bottles / serums / hair care products"
  },
  {
    "name": "beauty_work",
    "ja": "希望作業",
    "en": "Requested services",
    "placeholderJa": "例：外観検品、3点セット組み、梱包・発送",
    "placeholderEn": "Inspection, three-item kits, packing and shipping"
  },
  {
    "name": "beauty_quantity",
    "ja": "数量・品種数・頻度",
    "en": "Quantity, SKUs and frequency",
    "placeholderJa": "例：3品種・計5,000個、単発",
    "placeholderEn": "3 SKUs, 5,000 units, one-off"
  },
  {
    "name": "beauty_quality",
    "ja": "検品基準・作業手順",
    "en": "Inspection criteria and work instructions",
    "placeholderJa": "例：傷・汚れ確認、見本あり／相談したい",
    "placeholderEn": "Defect criteria, reference samples or advice needed"
  },
  {
    "name": "beauty_date",
    "ja": "入荷予定・希望納期",
    "en": "Arrival date and deadline",
    "placeholderJa": "例：11月15日入荷、11月末完了希望",
    "placeholderEn": "Expected arrival and completion dates"
  },
  {
    "name": "beauty_materials",
    "ja": "資材・保管・発送の条件",
    "en": "Materials, storage and shipping",
    "placeholderJa": "例：箱は支給、作業後に一括納品",
    "placeholderEn": "Supplied packaging, storage needs, delivery method"
  }
]

const priceFields = [
  {
    "name": "current_price",
    "ja": "現在の料金・単価（分かれば）",
    "en": "Current fee or unit price, if available",
    "placeholderJa": "例：1便50,000円／1個30円／月20万円",
    "placeholderEn": "e.g. JPY 50,000/trip, 30/item or 200,000/month"
  },
  {
    "name": "target_budget",
    "ja": "希望予算・目安（あれば）",
    "en": "Target budget, if any",
    "placeholderJa": "例：1便45,000円程度／未定",
    "placeholderEn": "e.g. around JPY 45,000/trip or undecided"
  },
  {
    "name": "price_scope",
    "ja": "料金に含まれる内容",
    "en": "What the price includes",
    "placeholderJa": "例：税別・高速代別／送料込み／作業費のみ",
    "placeholderEn": "Tax, tolls, delivery, handling and other inclusions"
  }
]

const inputClass =
  "w-full min-w-0 rounded-xl border border-black/15 bg-white px-4 py-3 text-base text-black outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"

const logiUrl =
  "https://nishinihon-logi.jp/?utm_source=gami&utm_medium=referral&utm_campaign=logistics_contact"

const copy = {
  ja: {
    title: "小さなご依頼も、大規模案件も。まずはご相談ください。",
    intro:
      "物流・資材のお見積りから販路拡大・協業のご相談まで。内容が未定でも大丈夫です。会社名と電話番号は任意です。",
    legend: "物流・販路拡大・協業のご相談フォーム",
    name: "お名前（必須）",
    namePlaceholder: "山田 太郎",
    company: "会社名・屋号（任意）",
    companyPlaceholder: "個人事業の方もご相談いただけます",
    email: "メールアドレス（必須）",
    phone: "電話番号（任意）",
    type: "相談の種類（必須）",
    choose: "選択してください",
    message: "ご相談内容（必須）",
    messagePlaceholder:
      "例：商品の検品・梱包・発送を相談したいです。\n商品：雑貨\n数量：月50件／一括10万件など\n作業：検品・セット組み・封入\n希望時期：未定\n\n分かる範囲の記入で大丈夫です。",
    missing:
      "お名前・メールアドレス・相談の種類・ご相談内容をご入力ください。",
    failed:
      "送信できませんでした。再度お試しいただくか、下記のメール・電話からご連絡ください。",
    sending: "送信中…",
    submit: "この内容で問い合わせる",
    privacy:
      "入力いただいた情報は、ご相談への対応・連絡に使用します。",
    fallback: "お急ぎの場合や送信できない場合はこちら。",
    phoneLink: "電話：06-6115-9935",
    mailLink: "メール：k_fuchigami@gamigami.email",
    success: "ご相談を受け付けました。",
    successDescription:
      "内容を確認し、担当よりご連絡します。お急ぎの場合は、お電話でもご相談いただけます。",
    asideTitle: "物流の依頼先選びから相談したい方へ",
    asideDescription:
      "対応エリアや作業内容など、条件に合う依頼先を探したい場合は、GAMIが運営する「西日本ロジナビ」もご活用ください。",
    asideLink: "西日本ロジナビを見る ↗",
  },
  en: {
    title:
      "From small shipments to large-scale projects — talk to us.",
    intro:
      "Ask about logistics, sales channels or business partnerships. Early-stage inquiries are welcome. Company name and phone number are optional.",
    legend: "Logistics and business partnership inquiry form",
    name: "Your name (required)",
    namePlaceholder: "Your full name",
    company: "Company name (optional)",
    companyPlaceholder: "Company or business name",
    email: "Email address (required)",
    phone: "Phone number (optional)",
    type: "Inquiry type (required)",
    choose: "Please select",
    message: "Project details (required)",
    messagePlaceholder:
      "For example:\nProducts: Trading cards or merchandise\nVolume: 50 orders/month or 100,000 mailings\nServices: Inspection, packing and domestic shipping\nTarget start date: To be confirmed\n\nPlease share whatever details are available.",
    missing:
      "Please enter your name, email address, inquiry type and project details.",
    failed:
      "We could not send your inquiry. Please try again or contact us by email or phone.",
    sending: "Sending…",
    submit: "Send inquiry",
    privacy:
      "We use the information you provide to respond to your inquiry.",
    fallback:
      "For urgent inquiries or if the form does not work:",
    phoneLink: "Phone: +81-6-6115-9935",
    mailLink: "Email: k_fuchigami@gamigami.email",
    success:
      "Thank you. Your inquiry has been received.",
    successDescription:
      "Our team will review your request and get back to you. For urgent matters, please call us.",
    asideTitle:
      "Looking for a logistics provider in Japan?",
    asideDescription:
      "You can also explore Nishinihon Logi Navi, a logistics directory operated by GAMI (Japanese-language website).",
    asideLink: "Visit Nishinihon Logi Navi ↗",
  },
} as const

export function ContactForm({
  language = "ja",
}: ContactFormProps) {
  const id = useId()
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState("")
  const t = copy[language]
  const [inquiryType, setInquiryType] = useState("")
  const isCardboardQuote = inquiryType === "ダンボール単体のお見積り"
  const isTransportQuote = inquiryType === "全国チャーター・輸送費のお見積り"
  const isBeautyQuote = inquiryType === "化粧品・美容商材の検品・セット組み"
  const isSpecialQuote = isCardboardQuote || isTransportQuote || isBeautyQuote
  const isBusinessInquiry = inquiryType === "販路拡大・ビジネスマッチングの相談" || inquiryType === "協業・パートナーシップの相談"
  const projectFields = isTransportQuote ? transportFields : isBeautyQuote ? beautyFields : []

  useEffect(() => {
    const selections: Record<string, string> = {
      "operations-365": "365日対応・土日祝・年末年始の出荷相談",
      transport: "全国チャーター・輸送費のお見積り",
      beauty: "化粧品・美容商材の検品・セット組み",
      cardboard: "ダンボール単体のお見積り",
      education: "教材・パンフレット発送の相談",
      matching: "販路拡大・ビジネスマッチングの相談",
      business: "販路拡大・ビジネスマッチングの相談",
      growth: "販路拡大・ビジネスマッチングの相談",
      partnership: "協業・パートナーシップの相談",
      collaboration: "協業・パートナーシップの相談",
    }
    const applyInquiry = () => {
      const value = selections[new URLSearchParams(window.location.search).get("inquiry") || ""]
      if (value) setInquiryType(value)
    }
    applyInquiry()
    window.addEventListener("popstate", applyInquiry)
    return () => window.removeEventListener("popstate", applyInquiry)
  }, [])

  const messagePlaceholder = isCardboardQuote
    ? language === "ja"
      ? "例：ダンボールのみの見積りを希望します。\n箱の内寸：縦×横×高さ（mm）／宅配60サイズなど\n必要数量：500枚\n納品先：大阪府守口市\n希望納期：未定\n印刷の有無：なし\n\nサイズが未定でも、入れる商品や現在の箱について分かる範囲でお知らせください。"
      : "Please quote cardboard boxes only.\nInternal dimensions (L × W × H, mm):\nQuantity:\nDelivery location:\nRequired delivery date:\nPrinting requirements:\n\nIf dimensions are undecided, please describe your products or current boxes."
    : isBusinessInquiry
      ? language === "ja"
        ? "例：自社商品の新たな販売先を探しています。\n商品・サービス：\n希望する取引先・協業内容：\n現在の販路・課題：\n希望時期：未定\n\n分かる範囲でご記入ください。ご紹介や取引成立をお約束するものではありません。"
        : "For example:\nProducts or services:\nPartners or sales channels sought:\nCurrent challenges:\nPreferred timing:\n\nPlease share what you know. Introductions and business outcomes are not guaranteed."
      : t.messagePlaceholder

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()
    if (isSending) return

    const form = event.currentTarget
    const formData = new FormData(form)

    const notes = String(formData.get("message") || "").trim()
    const detailFields = isCardboardQuote ? cardboardFields : projectFields
    const detailLines = [...detailFields, ...priceFields].flatMap((field) => {
      const value = String(formData.get(field.name) || "").trim()
      return value ? [`${field[language]}: ${value}`] : []
    })
    const quotedDetails = detailLines.join("\n")
    const combinedMessage = [notes, quotedDetails].filter(Boolean).join("\n\n")
    const payload = {
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      type: String(formData.get("type") || ""),
      message: combinedMessage || (isSpecialQuote ? (language === "ja" ? `${inquiryType}について相談希望。詳細は担当者と相談したいです。` : "Quote requested. I would like to discuss the details with your team.") : ""),
    }

    if (
      !payload.name ||
      !payload.email ||
      !payload.type ||
      !payload.message ||
      (!isSpecialQuote && !notes)
    ) {
      setError(t.missing)
      return
    }

    setIsSending(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      const result: { success?: boolean } =
        await response.json()

      if (result.success !== true) {
        throw new Error("Submission not confirmed")
      }

      // 既存のGTMイベントを維持
      // GTM側でgenerate_leadを設定する
      // 二重計測を防ぐため別イベントは送信しない
      window.dataLayer = window.dataLayer || []

      window.dataLayer.push({
        event: "gami_contact_submit",
        form_language: language,
        inquiry_type: payload.type,
        form_name: "logistics_contact",
      })

      setSubmitted(true)
      form.reset()
      setInquiryType("")
    } catch {
      setError(t.failed)
    } finally {
      setIsSending(false)
    }
  }

  function trackLogiClick() {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "gami_loginavi_click",
      link_url: logiUrl,
    })
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        lang={language}
        className="rounded-3xl border border-black/10 bg-white p-6 text-center sm:p-10"
      >
        <h3 className="text-2xl font-bold leading-snug">
          {t.success}
        </h3>

        <p className="mt-4 text-sm leading-7 text-zinc-600">
          {t.successDescription}
        </p>

        <a
          href="tel:0661159935"
          className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full border border-black/15 px-6 py-3 text-sm font-bold"
        >
          {language === "ja"
            ? "06-6115-9935"
            : "+81-6-6115-9935"}
        </a>
      </div>
    )
  }

  return (
    <div className="min-w-0" lang={language}>
      <form
        onSubmit={handleSubmit}
        aria-busy={isSending}
        className="min-w-0 rounded-3xl border border-black/10 bg-white p-5 sm:p-8"
      >
        <div className="mb-7 rounded-2xl bg-amber-50 p-5">
          <h3 className="text-base font-bold leading-7">
            {t.title}
          </h3>

          <p className="mt-2 text-sm leading-7 text-zinc-600">
            {t.intro}
          </p>
        </div>

        <fieldset
          disabled={isSending}
          className="min-w-0 space-y-5"
        >
          <legend className="sr-only">
            {t.legend}
          </legend>

          <div>
            <label
              htmlFor={`${id}-name`}
              className="mb-2 block text-sm font-semibold"
            >
              {t.name}
            </label>

            <input
              id={`${id}-name`}
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              className={inputClass}
              placeholder={t.namePlaceholder}
            />
          </div>

          <div>
            <label
              htmlFor={`${id}-company`}
              className="mb-2 block text-sm font-semibold"
            >
              {t.company}
            </label>

            <input
              id={`${id}-company`}
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={200}
              className={inputClass}
              placeholder={t.companyPlaceholder}
            />
          </div>

          <div className="grid min-w-0 gap-5 sm:grid-cols-2">
            <div className="min-w-0">
              <label
                htmlFor={`${id}-email`}
                className="mb-2 block text-sm font-semibold"
              >
                {t.email}
              </label>

              <input
                id={`${id}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className={inputClass}
                placeholder="example@example.com"
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor={`${id}-phone`}
                className="mb-2 block text-sm font-semibold"
              >
                {t.phone}
              </label>

              <input
                id={`${id}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                className={inputClass}
                placeholder={
                  language === "ja"
                    ? "090-0000-0000"
                    : "+1 555 000 0000"
                }
              />
            </div>
          </div>

          <div className="min-w-0">
            <label
              htmlFor={`${id}-type`}
              className="mb-2 block text-sm font-semibold"
            >
              {t.type}
            </label>

            <select
              id={`${id}-type`}
              name="type"
              required
              value={inquiryType}
              onChange={(event) => setInquiryType(event.target.value)}
              className={inputClass}
            >
              <option value="" disabled>
                {t.choose}
              </option>

              {inquiryTypes.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item[language]}
                </option>
              ))}
            </select>
          </div>

          {isCardboardQuote && (
            <div className="space-y-5 rounded-2xl border border-amber-200 bg-amber-50/50 p-4 sm:p-5">
              <div>
                <h4 className="text-base font-bold leading-7">
                  {language === "ja" ? "価格に自信。ダンボールだけのお見積りも歓迎します。" : "Competitive prices. Box-only quote requests are welcome."}
                </h4>
                <p className="mt-2 text-sm font-bold leading-7 text-amber-900">
                  {language === "ja" ? "対象エリア：大阪・近隣府県" : "Service area: Osaka and neighboring prefectures"}
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  {language === "ja" ? "以下はすべて任意です。現在お使いの仕様・価格を分かる範囲でお知らせください。3辺合計は縦＋横＋高さです。購入実績がなくてもご相談いただけます。納品先・数量に応じて配送可否を確認します。" : "All fields below are optional. Share your current specifications and prices where available. The total size is length + width + height. New purchases are also welcome. Delivery availability depends on location and quantity."}
                </p>
              </div>
              <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                {cardboardFields.map((field) => (
                  <div key={field.name} className={field.name === "box_url" ? "min-w-0 sm:col-span-2" : "min-w-0"}>
                    <label htmlFor={`${id}-${field.name}`} className="mb-2 block text-sm font-semibold">
                      {field[language]}{language === "ja" ? "（任意）" : " (optional)"}
                    </label>
                    <input id={`${id}-${field.name}`} name={field.name} type={field.name === "box_url" ? "url" : "text"} maxLength={field.name === "box_url" ? 1500 : 200} className={inputClass} placeholder={language === "ja" ? field.placeholderJa : field.placeholderEn} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {(isTransportQuote || isBeautyQuote) && (
            <div className="space-y-5 rounded-2xl border border-amber-200 bg-amber-50/50 p-4 sm:p-5">
              <h4 className="text-base font-bold">{language === "ja" ? (isTransportQuote ? "チャーター便・輸送のお見積り条件" : "化粧品・美容商材の作業条件") : (isTransportQuote ? "Transport details" : "Cosmetics and beauty project details")}</h4>
              <p className="text-sm leading-7 text-zinc-600">{language === "ja" ? "すべて任意です。分かる範囲だけご入力ください。未定の項目は担当者と相談できます。" : "All fields are optional. Share what you know; we can discuss undecided details."}</p>
              <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                {projectFields.map(field => (
                  <div key={field.name} className="min-w-0">
                    <label htmlFor={`${id}-${field.name}`} className="mb-2 block text-sm font-semibold">{field[language]}{language === "ja" ? "（任意）" : " (optional)"}</label>
                    <input id={`${id}-${field.name}`} name={field.name} type="text" maxLength={400} className={inputClass} placeholder={language === "ja" ? field.placeholderJa : field.placeholderEn} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <details key={inquiryType} className="rounded-2xl border border-black/10 bg-[#fafaf9] p-4 sm:p-5">
            <summary className="cursor-pointer text-sm font-bold leading-7">{language === "ja" ? "現在の料金・希望予算を伝える（任意）＋" : "Share current pricing or a target budget (optional) +"}</summary>
            <p className="mt-3 text-sm leading-7 text-zinc-600">{language === "ja" ? "比較しやすいお見積りの参考にします。差し支えなければ、現在の料金やご希望の目安をお知らせください。未記入でもご相談・お見積りいただけます。" : "This helps us prepare a comparable quote. Share current pricing or a target only if comfortable. You can request a quote without providing either."}</p>
            <div className="mt-4 grid min-w-0 gap-5 sm:grid-cols-2">
              {priceFields.filter(field => !isCardboardQuote || field.name !== "current_price").map(field => (
                <div key={field.name} className="min-w-0">
                  <label htmlFor={`${id}-${field.name}`} className="mb-2 block text-sm font-semibold">{field[language]}{language === "ja" ? "（任意）" : " (optional)"}</label>
                  <input id={`${id}-${field.name}`} name={field.name} type="text" maxLength={300} className={inputClass} placeholder={language === "ja" ? field.placeholderJa : field.placeholderEn} />
                </div>
              ))}
            </div>
          </details>

          <div>
            <label
              htmlFor={`${id}-message`}
              className="mb-2 block text-sm font-semibold"
            >
              {isSpecialQuote ? (language === "ja" ? "その他のご要望（任意）" : "Additional notes (optional)") : t.message}
            </label>

            <textarea
              id={`${id}-message`}
              name="message"
              required={!isSpecialQuote}
              rows={6}
              maxLength={5000}
              className={`${inputClass} resize-y leading-7`}
              placeholder={isSpecialQuote ? (language === "ja" ? "補足や現在お困りのこと、ご希望などがあればお知らせください。" : "Tell us about intended use, printing or other requirements.") : messagePlaceholder}
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-xl bg-red-50 p-4 text-sm leading-7 text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="flex min-h-[54px] w-full items-center justify-center rounded-full bg-amber-500 px-5 py-4 text-sm font-bold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? t.sending : t.submit}
          </button>
        </fieldset>

        <p className="mt-4 text-xs leading-6 text-zinc-500">
          {t.privacy}
        </p>

        <div className="mt-5 border-t border-black/10 pt-5 text-sm leading-7">
          <p className="text-zinc-600">
            {t.fallback}
          </p>

          <a
            href="tel:0661159935"
            className="mt-2 inline-block font-semibold underline underline-offset-4"
          >
            {t.phoneLink}
          </a>

          <br />

          <a
            href="mailto:k_fuchigami@gamigami.email"
            className="inline-block break-all font-semibold underline underline-offset-4"
          >
            {t.mailLink}
          </a>
        </div>
      </form>

      <aside className="mt-6 rounded-2xl border border-black/10 bg-[#f8f8f6] p-5 sm:p-6">
        <h3 className="text-base font-bold leading-7">
          {t.asideTitle}
        </h3>

        <p className="mt-3 text-sm leading-7 text-zinc-600">
          {t.asideDescription}
        </p>

        <a
          href={logiUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackLogiClick}
          className="mt-4 inline-flex min-h-[48px] items-center text-sm font-semibold text-zinc-800 underline underline-offset-4"
        >
          {t.asideLink}
        </a>
      </aside>
    </div>
  )
}
