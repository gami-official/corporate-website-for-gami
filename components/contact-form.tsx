"use client"

import { useState } from "react"

const CONTACT_EMAIL = "f_fuchigami@gamigami.email"

const inquiryTypes = [
  "物流に関するお問い合わせ",
  "ヘッドスパ事業に関するお問い合わせ",
  "整理買取事業に関するお問い合わせ",
  "梱包資材に関するお問い合わせ",
  "その他",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border/60 bg-card p-10 text-center shadow-glass">
        <p className="font-serif text-xl tracking-wider text-foreground">
          送信ありがとうございます
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          内容を確認のうえ、担当よりご連絡します。
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          送信先: {CONTACT_EMAIL}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          TEL: 06-6115-9935 / FAX: 06-6115-9936
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-6"
    >
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          お名前 <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-glass outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="山田 太郎"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          メールアドレス <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-glass outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="info@gamigami.net"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          お電話番号
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-glass outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="090-0000-0000"
        />
      </div>

      {/* Inquiry Type */}
      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="text-sm font-medium text-foreground">
          お問い合わせ種別 <span className="text-destructive">*</span>
        </label>
        <select
          id="type"
          name="type"
          required
          className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-glass outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          defaultValue=""
        >
          <option value="" disabled>
            選択してください
          </option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          お問い合わせ内容 <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-glass outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full aurora-gradient rounded-xl px-8 py-3 text-sm font-medium tracking-widest text-white transition-all active:scale-95 sm:w-auto sm:hover:scale-105 sm:hover:shadow-glass-hover touch-manipulation"
      >
        送信する
      </button>
    </form>
  )
}
