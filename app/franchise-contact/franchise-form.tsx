"use client"

import { useState } from "react"

export default function FranchiseForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatusMessage("")

        const form = e.currentTarget
        const formData = new FormData(form)

        const data = {
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          type: formData.get("type"),
          plan: formData.get("plan"),
          area: formData.get("area"),
          message: formData.get("message"),
        }

        try {
          const res = await fetch("/api/franchise-contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })

          if (res.ok) {
            setStatusMessage("送信完了しました。内容を確認のうえ順次ご連絡いたします。")
            form.reset()
          } else {
            setStatusMessage("送信に失敗しました。時間をおいて再度お試しください。")
          }
        } catch (error) {
          setStatusMessage("通信エラーが発生しました。時間をおいて再度お試しください。")
        } finally {
          setIsSubmitting(false)
        }
      }}
    >
      <div className="rounded-2xl bg-[#f8f6f2] p-4">
        <p className="text-sm font-medium text-[#223451]">
          まずは無料相談からで大丈夫です
        </p>
        <p className="mt-2 text-xs leading-6 text-slate-600">
          無理な営業は行いません。開業方法・必要資金・導入形態の向き不向きなど、現状に合わせてご案内します。
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          お名前 <span className="text-[#b6802e]">*</span>
        </label>
        <input
          name="name"
          type="text"
          required
          placeholder="例：山田 太郎"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#223451] focus:ring-2 focus:ring-[#223451]/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          会社名 / 屋号
        </label>
        <input
          name="company"
          type="text"
          placeholder="例：株式会社〇〇 / サロン〇〇"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#223451] focus:ring-2 focus:ring-[#223451]/10"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            メールアドレス <span className="text-[#b6802e]">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="example@gmail.com"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#223451] focus:ring-2 focus:ring-[#223451]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            電話番号
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="09012345678"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#223451] focus:ring-2 focus:ring-[#223451]/10"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            希望導入形態
          </label>
          <select
            name="type"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#223451] focus:ring-2 focus:ring-[#223451]/10"
            defaultValue="選択してください"
          >
            <option disabled>選択してください</option>
            <option>ウェット導入プラン</option>
            <option>ドライ導入プラン</option>
            <option>まだ決まっていない</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            希望プラン
          </label>
          <select
            name="plan"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#223451] focus:ring-2 focus:ring-[#223451]/10"
            defaultValue="選択してください"
          >
            <option disabled>選択してください</option>
            <option>FC基本導入プラン</option>
            <option>FCフルサポートプラン</option>
            <option>相談して決めたい</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          開業希望エリア
        </label>
        <input
          name="area"
          type="text"
          placeholder="例：福岡県福岡市 / 大阪府大阪市"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#223451] focus:ring-2 focus:ring-[#223451]/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          ご相談内容 <span className="text-[#b6802e]">*</span>
        </label>
        <textarea
          name="message"
          rows={6}
          required
          placeholder="例：自宅の一室で開業を検討しています。ウェットとドライどちらが向いているか知りたいです。"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#223451] focus:ring-2 focus:ring-[#223451]/10"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full bg-[#223451] px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "送信中..." : "無料で相談してみる（30秒入力）"}
      </button>

      {statusMessage ? (
        <p className="text-sm leading-7 text-[#223451]">{statusMessage}</p>
      ) : (
        <p className="text-xs leading-6 text-slate-500">
          ※ご相談段階で費用はかかりません。送信できない場合は設定をご確認ください。
        </p>
      )}
    </form>
  )
}
