import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Phone, MessageCircle, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "フランチャイズ専用お問い合わせ | 株式会社GAMI",
  description:
    "ヘッドスパ専門店ゆう フランチャイズ専用のお問い合わせページ。無料相談・資料請求・導入相談を受け付けています。",
  alternates: {
    canonical: "/franchise-contact",
  },
}

export default function FranchiseContactPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f8f6f2]">
        <section className="relative overflow-hidden bg-[#223451] px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/headspa-franchise"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              フランチャイズページに戻る
            </Link>

            <p className="mt-8 text-xs tracking-[0.22em] text-white/70">
              FRANCHISE CONTACT
            </p>

            <h1 className="mt-4 font-serif text-3xl tracking-[0.05em] sm:text-4xl">
              フランチャイズ専用
              <br className="sm:hidden" />
              お問い合わせ
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/85 sm:text-base">
              ヘッドスパ専門店ゆう フランチャイズについて、
              無料相談・資料請求・導入相談を受け付けています。
              ウェット / ドライの適性や、初期費用、導入の流れなどを個別にご案内します。
            </p>

            <div className="mt-8 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs tracking-[0.15em] text-white/90">
              先着5社限定で個別相談を受付中
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
                <h2 className="text-xl font-medium tracking-[0.04em] text-[#223451]">
                  こんなご相談が多いです
                </h2>
                <div className="mt-5 space-y-4">
                  {[
                    "自分に合う導入形態はウェットかドライか知りたい",
                    "どれくらいの費用で始められるか知りたい",
                    "自宅・マンション・空きスペースでも可能か相談したい",
                    "ホームページ制作まで依頼するべきか相談したい",
                    "まずは資料だけ見て検討したい",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#c89b55]" />
                      <p className="text-sm leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
                <h2 className="text-xl font-medium tracking-[0.04em] text-[#223451]">
                  他の相談方法
                </h2>

                <div className="mt-6 space-y-4">
                  <a
                    href="https://lin.ee/3QGIdCY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 transition hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-[#223451]" />
                      <div>
                        <p className="text-sm font-medium text-[#223451]">
                          LINEで相談
                        </p>
                        <p className="text-xs text-slate-500">
                          気軽に相談したい方向け
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:0661159935"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 transition hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#223451]" />
                      <div>
                        <p className="text-sm font-medium text-[#223451]">
                          電話で相談
                        </p>
                        <p className="text-xs text-slate-500">
                          すぐに話したい方向け
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-[#223451]" />
                <h2 className="text-xl font-medium tracking-[0.04em] text-[#223451]">
                  フランチャイズ専用フォーム
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                下記をご記入ください。内容を確認のうえ、順次ご連絡いたします。
              </p>

              <form
  className="mt-8 space-y-5"
  onSubmit={async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

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

    const res = await fetch("/api/franchise-contact", {
      method: "POST",
      body: JSON.stringify(data),
    })

    if (res.ok) {
      alert("送信完了しました！")
      e.currentTarget.reset()
    } else {
      alert("送信失敗しました")
    }
  }}
>
  {/* 名前 */}
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      お名前
    </label>
    <input
      name="name"
      type="text"
      placeholder="例：山田 太郎"
      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
    />
  </div>

  {/* 会社名 */}
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      会社名 / 屋号
    </label>
    <input
      name="company"
      type="text"
      placeholder="例：株式会社〇〇 / サロン〇〇"
      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
    />
  </div>

  {/* メール & 電話 */}
  <div className="grid gap-5 sm:grid-cols-2">
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        メールアドレス
      </label>
      <input
        name="email"
        type="email"
        placeholder="example@gmail.com"
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
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
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
      />
    </div>
  </div>

  {/* 導入形態 & プラン */}
  <div className="grid gap-5 sm:grid-cols-2">
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        希望導入形態
      </label>
      <select
        name="type"
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
      >
        <option>選択してください</option>
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
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
      >
        <option>選択してください</option>
        <option>FC基本導入プラン</option>
        <option>FCフルサポートプラン</option>
        <option>相談して決めたい</option>
      </select>
    </div>
  </div>

  {/* エリア */}
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      開業希望エリア
    </label>
    <input
      name="area"
      type="text"
      placeholder="例：福岡県福岡市 / 大阪府大阪市"
      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
    />
  </div>

  {/* 内容 */}
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      ご相談内容
    </label>
    <textarea
      name="message"
      rows={6}
      placeholder="例：自宅の一室で開業を検討しています。ウェットとドライどちらが向いているか知りたいです。"
      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
    />
  </div>

  {/* ボタン */}
  <button
    type="submit"
    className="inline-flex items-center justify-center rounded-full bg-[#223451] px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] transition hover:opacity-95"
  >
    フランチャイズ相談を送信する
  </button>

  <p className="text-xs leading-6 text-slate-500">
    ※送信できない場合は設定（API・Resend）を確認してください
  </p>
</form>
