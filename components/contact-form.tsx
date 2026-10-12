"use client"

import { useId, useState } from "react"
import type { FormEvent } from "react"

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
  "依頼内容がまだ決まっていない",
  "その他の物流相談",
]

const inputClass =
  "w-full min-w-0 rounded-xl border border-black/15 bg-white px-4 py-3 text-base text-black outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"

const logiUrl =
  "https://nishinihon-logi.jp/?utm_source=gami&utm_medium=referral&utm_campaign=logistics_contact"

export function ContactForm() {
  const id = useId()
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSending) return

    setIsSending(true)
    setError("")

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

    if (!payload.name || !payload.email || !payload.message) {
      setError("お名前・メールアドレス・ご相談内容をご入力ください。")
      setIsSending(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("送信に失敗しました")
      }

      const result = await response.json()

      if (result.success !== true) {
        throw new Error("送信を確認できませんでした")
      }

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "gami_contact_submit",
      })

      setSubmitted(true)
      form.reset()
    } catch {
      setError(
        "送信できませんでした。再度お試しいただくか、下記のメール・電話からご連絡ください。"
      )
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
        className="rounded-3xl border border-black/10 bg-white p-6 text-center sm:p-10"
      >
        <h3 className="text-2xl font-bold leading-snug">
          ご相談を受け付けました。
        </h3>

        <p className="mt-4 text-sm leading-7 text-zinc-600">
          内容を確認し、担当よりご連絡します。
          <br />
          お急ぎの場合は、お電話でもご相談いただけます。
        </p>

        <a
          href="tel:0661159935"
          className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full border border-black/15 px-6 py-3 text-sm font-bold"
        >
          06-6115-9935
        </a>
      </div>
    )
  }

  return (
    <div className="min-w-0">
      <form
        onSubmit={handleSubmit}
        aria-busy={isSending}
        className="min-w-0 rounded-3xl border border-black/10 bg-white p-5 sm:p-8"
      >
        <div className="mb-7 rounded-2xl bg-amber-50 p-5">
          <h3 className="text-base font-bold leading-7">
            小さなご依頼も、まずはご相談ください。
          </h3>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            物量や開始時期が未定でも大丈夫。
            会社名と電話番号は任意です。
          </p>
        </div>

        <fieldset disabled={isSending} className="min-w-0 space-y-5">
          <legend className="sr-only">物流のご相談フォーム</legend>

          <div>
            <label
              htmlFor={`${id}-name`}
              className="mb-2 block text-sm font-semibold"
            >
              お名前（必須）
            </label>
            <input
              id={`${id}-name`}
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              className={inputClass}
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label
              htmlFor={`${id}-company`}
              className="mb-2 block text-sm font-semibold"
            >
              会社名・屋号（任意）
            </label>
            <input
              id={`${id}-company`}
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={200}
              className={inputClass}
              placeholder="個人事業の方もご相談いただけます"
            />
          </div>

          <div className="grid min-w-0 gap-5 sm:grid-cols-2">
            <div className="min-w-0">
              <label
                htmlFor={`${id}-email`}
                className="mb-2 block text-sm font-semibold"
              >
                メールアドレス（必須）
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
                電話番号（任意）
              </label>
              <input
                id={`${id}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                className={inputClass}
                placeholder="090-0000-0000"
              />
            </div>
          </div>

          <div className="min-w-0">
            <label
              htmlFor={`${id}-type`}
              className="mb-2 block text-sm font-semibold"
            >
              相談の種類（必須）
            </label>
            <select
              id={`${id}-type`}
              name="type"
              required
              defaultValue=""
              className={inputClass}
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

          <div>
            <label
              htmlFor={`${id}-message`}
              className="mb-2 block text-sm font-semibold"
            >
              ご相談内容（必須）
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              required
              rows={6}
              maxLength={10000}
              className={`${inputClass} resize-y leading-7`}
              placeholder={
                "例：EC商品の保管と発送を相談したいです。\n商品：雑貨\n保管量：段ボール10箱ほど\n発送：月50件ほど\n開始時期：未定\n\n分かる範囲の記入で大丈夫です。"
              }
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
            className="flex min-h-[54px] w-full items-center justify-center rounded-full bg-amber-500 px-5 py-4 text-sm font-bold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? "送信中…" : "この内容で物流を相談する"}
          </button>
        </fieldset>

        <p className="mt-4 text-xs leading-6 text-zinc-500">
          入力いただいた情報は、ご相談への対応・連絡に使用します。
        </p>

        <div className="mt-5 border-t border-black/10 pt-5 text-sm leading-7">
          <p className="text-zinc-600">
            お急ぎの場合や送信できない場合はこちら。
          </p>
          <a
            href="tel:0661159935"
            className="mt-2 inline-block font-semibold underline underline-offset-4"
          >
            電話：06-6115-9935
          </a>
          <br />
          <a
            href="mailto:k_fuchigami@gamigami.email"
            className="inline-block break-all font-semibold underline underline-offset-4"
          >
            メール：k_fuchigami@gamigami.email
          </a>
        </div>
      </form>

      <aside className="mt-6 rounded-2xl border border-black/10 bg-[#f8f8f6] p-5 sm:p-6">
        <h3 className="text-base font-bold leading-7">
          物流の依頼先選びから相談したい方へ
        </h3>
        <p className="mt-3 text-sm leading-7 text-zinc-600">
          対応エリアや作業内容など、条件に合う依頼先を
          探したい場合は、GAMIが運営する
          「西日本ロジナビ」もご活用ください。
        </p>
        <a
          href={logiUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackLogiClick}
          className="mt-4 inline-flex min-h-[48px] items-center text-sm font-semibold text-zinc-800 underline underline-offset-4"
        >
          西日本ロジナビを見る ↗
        </a>
      </aside>
    </div>
  )
}
