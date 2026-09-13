"use client"

import { useState } from "react"

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

const inquiryTypes = [
  "物流・発送代行の相談",
  "倉庫保管・流通加工の相談",
  "シール貼り・セット組み・内職作業の相談",
  "スポット出荷・急ぎ案件の相談",
  "その他",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      type: String(formData.get("type") || ""),
      message: String(formData.get("message") || ""),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error("送信に失敗しました")
      }

      // Google Tag Manager
      // 問い合わせ送信が成功した時だけ発火
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: "gami_contact_submit",
        })
      }

      setSubmitted(true)
      form.reset()
    } catch {
      setError(
        "送信できませんでした。お手数ですが、メールまたはお電話でご連絡ください。"
      )
    } finally {
      setIsSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-black/5 bg-white p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-10">
        <p className="text-2xl font-bold text-black">
          送信ありがとうございます
        </p>

        <p className="mt-4 text-sm leading-8 text-black/60">
          内容を確認のうえ、担当よりご連絡します。
        </p>

        <div className="mt-6 rounded-2xl bg-[#fbfaf7] p-5">
          <p className="text-xs leading-7 text-black/55">
            TEL：06-6115-9935
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-black/5 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-8"
    >
      <div className="mb-7 rounded-2xl border border-amber-500/10 bg-[#fbfaf7] p-5">
        <p className="text-sm font-bold leading-7 text-black">
          物流のご相談を中心に受け付けています
        </p>

        <p className="mt-2 text-xs leading-6 text-black/55">
          倉庫保管、発送代行、流通加工、内職作業、スポット出荷など、
          まずは現在の状況をお聞かせください。
        </p>
      </div>

      <div className="grid gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-black/70"
          >
            お名前 <span className="text-amber-500">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-base text-black outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10"
            placeholder="山田 太郎"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="company"
            className="text-sm font-medium text-black/70"
          >
            会社名 / 屋号
          </label>

          <input
            id="company"
            name="company"
            type="text"
            className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-base text-black outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10"
            placeholder="株式会社〇〇"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-black/70"
            >
              メールアドレス <span className="text-amber-500">*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-base text-black outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10"
              placeholder="example@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-black/70"
            >
              電話番号
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-base text-black outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10"
              placeholder="090-0000-0000"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="type"
            className="text-sm font-medium text-black/70"
          >
            相談内容 <span className="text-amber-500">*</span>
          </label>

          <select
            id="type"
            name="type"
            required
            defaultValue=""
            className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-base text-black outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10"
          >
            <option value="" disabled>
              選択してください
            </option>

            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-black/70"
          >
            詳細 <span className="text-amber-500">*</span>
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="resize-none rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-base leading-7 text-black outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10"
            placeholder="例：EC商品の発送代行を相談したいです。月間出荷数は〇件ほどで、保管と梱包もお願いしたいです。"
          />
        </div>

        {error && (
          <p className="rounded-2xl bg-red-50 px-4 py-3 text-center text-xs font-bold leading-6 text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSending}
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-amber-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? "送信中..." : "送信する"}
        </button>

        <p className="text-center text-xs leading-6 text-black/45">
          ※送信できない場合は、直接メールまたはお電話でご連絡ください。
        </p>
      </div>
    </form>
  )
}
