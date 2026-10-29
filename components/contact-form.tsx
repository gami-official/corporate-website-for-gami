
"use client"

import { useId, useState } from "react"
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
    value: "物流・発送代行の相談",
    ja: "物流・発送代行の相談",
    en: "Logistics and fulfillment",
  },
  {
    value: "倉庫保管・流通加工の相談",
    ja: "倉庫保管・流通加工の相談",
    en: "Warehousing and value-added services",
  },
  {
    value: "検品・品質チェックの相談",
    ja: "検品・品質チェックの相談",
    en: "Inspection and quality checks",
  },
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

const inputClass =
  "w-full min-w-0 rounded-xl border border-black/15 bg-white px-4 py-3 text-base text-black outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"

const logiUrl =
  "https://nishinihon-logi.jp/?utm_source=gami&utm_medium=referral&utm_campaign=logistics_contact"

const copy = {
  ja: {
    title: "小さなご依頼も、大規模案件も。まずはご相談ください。",
    intro:
      "物量や開始時期が未定でも大丈夫。会社名と電話番号は任意です。",
    legend: "物流のご相談フォーム",
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
    submit: "この内容で物流を相談する",
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
      "Estimated volumes and start dates are welcome. Company name and phone number are optional.",
    legend: "Logistics inquiry form",
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
    submit: "Send logistics inquiry",
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

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()
    if (isSending) return

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      type: String(formData.get("type") || ""),
      message: String(formData.get("message") || "").trim(),
    }

    if (
      !payload.name ||
      !payload.email ||
      !payload.type ||
      !payload.message
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
              defaultValue=""
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

          <div>
            <label
              htmlFor={`${id}-message`}
              className="mb-2 block text-sm font-semibold"
            >
              {t.message}
            </label>

            <textarea
              id={`${id}-message`}
              name="message"
              required
              rows={6}
              maxLength={10000}
              className={`${inputClass} resize-y leading-7`}
              placeholder={t.messagePlaceholder}
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
