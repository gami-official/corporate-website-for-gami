"use client"

import { useId, useState } from "react"
import type { FormEvent } from "react"

const inputClass =
  "w-full min-w-0 rounded-xl border border-black/15 bg-white px-3 py-3 text-base text-zinc-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"

export default function FranchiseForm() {
  const id = useId()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setError("")

    const form = event.currentTarget
    const formData = new FormData(form)

    const data = {
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      type: String(formData.get("type") || ""),
      plan: String(formData.get("plan") || ""),
      area: String(formData.get("area") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    }

    if (!data.name || !data.email || !data.message) {
      setError("お名前・メールアドレス・ご相談内容をご入力ください。")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/franchise-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("送信に失敗しました")
      }

      const result = await response.json()

      if (result.success !== true) {
        throw new Error("送信を確認できませんでした")
      }

      setSubmitted(true)
      form.reset()
    } catch {
      setError(
        "送信できませんでした。再度お試しいただくか、下記のメール・電話からご連絡ください。"
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="mt-5 rounded-2xl border border-amber-100 bg-amber-50 p-5"
      >
        <h3 className="text-xl font-bold leading-7">
          開業相談を受け付けました。
        </h3>
        <p className="mt-3 text-sm leading-7 text-zinc-600">
          内容を確認し、担当よりご連絡します。
          お急ぎの場合は、お電話でもご相談いただけます。
        </p>
        <a
          href="tel:0661159935"
          className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold underline underline-offset-4"
        >
          06-6115-9935
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      className="mt-5 min-w-0"
    >
      <fieldset
        disabled={isSubmitting}
        className="min-w-0 space-y-4"
      >
        <legend className="sr-only">ヘッドスパFCの無料相談</legend>

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
            placeholder="山田 太郎"
            className={inputClass}
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
            placeholder="個人での開業相談も歓迎です"
            className={inputClass}
          />
        </div>

        <div className="grid min-w-0 gap-4 sm:grid-cols-2">
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
              placeholder="example@example.com"
              className={inputClass}
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
              placeholder="090-0000-0000"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-3">
          <div className="min-w-0">
            <label
              htmlFor={`${id}-type`}
              className="mb-2 block text-sm font-semibold"
            >
              希望形態
            </label>
            <select
              id={`${id}-type`}
              name="type"
              defaultValue=""
              className={inputClass}
            >
              <option value="">未定・相談したい</option>
              <option value="ウェット導入プラン">ウェット</option>
              <option value="ドライ導入プラン">ドライ</option>
            </select>
          </div>

          <div className="min-w-0">
            <label
              htmlFor={`${id}-plan`}
              className="mb-2 block text-sm font-semibold"
            >
              希望プラン
            </label>
            <select
              id={`${id}-plan`}
              name="plan"
              defaultValue=""
              className={inputClass}
            >
              <option value="">未定・相談したい</option>
              <option value="FC基本導入プラン">基本導入</option>
              <option value="FCフルサポートプラン">
                フルサポート
              </option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor={`${id}-area`}
            className="mb-2 block text-sm font-semibold"
          >
            開業希望エリア（任意）
          </label>
          <input
            id={`${id}-area`}
            name="area"
            type="text"
            maxLength={200}
            placeholder="大阪市・福岡市など。未定でもOK"
            className={inputClass}
          />
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
            rows={5}
            required
            maxLength={10000}
            placeholder={
              "例：自宅の一室で開業を検討しています。\n経験：未経験\n予算：未定\n開業時期：来年を希望\n\n導入方法と必要な費用を知りたいです。"
            }
            className={`${inputClass} resize-y leading-7`}
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
          className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-zinc-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "送信中…" : "無料で開業相談をする"}
        </button>
      </fieldset>

      <p className="mt-3 text-xs leading-6 text-zinc-500">
        ご相談段階で費用はかかりません。
        入力情報は、ご相談への対応・連絡に使用します。
      </p>

      <div className="mt-4 border-t border-black/10 pt-3">
        <p className="text-xs leading-6 text-zinc-500">
          送信できない場合はこちら。
        </p>
        <div className="flex flex-wrap gap-x-5">
          <a
            href="tel:0661159935"
            className="inline-flex min-h-[44px] items-center text-sm font-semibold underline underline-offset-4"
          >
            電話で相談
          </a>
          <a
            href="mailto:k_fuchigami@gamigami.email"
            className="inline-flex min-h-[44px] items-center text-sm font-semibold underline underline-offset-4"
          >
            メールで相談
          </a>
        </div>
      </div>
    </form>
  )
}
