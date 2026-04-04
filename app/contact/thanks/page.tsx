import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "送信完了 | 株式会社GAMI",
  description: "お問い合わせの送信が完了しました。",
}

export default function ContactThanksPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-10 shadow-sm">
          <p className="mb-3 text-sm font-semibold tracking-widest text-orange-500">
            THANK YOU
          </p>

          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            お問い合わせありがとうございます
          </h1>

          <p className="mb-8 leading-8 text-zinc-600">
            送信を受け付けました。<br />
            内容を確認のうえ、担当者より順次ご連絡いたします。<br />
            お急ぎの場合は、お電話でもお気軽にご相談ください。
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-block rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white"
            >
              トップページへ戻る
            </Link>

            <Link
              href="tel:0661159935"
              className="inline-block rounded-2xl border border-zinc-300 px-6 py-3 font-semibold text-zinc-900"
            >
              電話で相談する
            </Link>
          </div>

          <p className="mt-6 text-sm text-zinc-500">
            TEL: 06-6115-9935
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
