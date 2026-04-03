import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "無料見積もり・お問い合わせ | 株式会社GAMI",
  description:
    "株式会社GAMIの物流・内職・段ボール・ヘッドスパ・生前整理・遺品整理に関するお問い合わせページです。",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          無料見積もり・お問い合わせ
        </h1>

        <p className="text-zinc-600 mb-8">
          物流業務のご相談を中心に、各事業のお問い合わせを受け付けています。
          相談だけでも問題ありません。お気軽にご連絡ください。
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">会社名</label>
            <input
              type="text"
              className="w-full rounded-xl border border-zinc-300 px-4 py-3"
              placeholder="株式会社〇〇"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">お名前</label>
            <input
              type="text"
              className="w-full rounded-xl border border-zinc-300 px-4 py-3"
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">メールアドレス</label>
            <input
              type="email"
              className="w-full rounded-xl border border-zinc-300 px-4 py-3"
              placeholder="example@gamigami.net"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">電話番号</label>
            <input
              type="text"
              className="w-full rounded-xl border border-zinc-300 px-4 py-3"
              placeholder="090-1234-5678"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">お問い合わせ内容</label>
            <textarea
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 h-40"
              placeholder="ご相談内容をご記入ください"
            />
          </div>

          <button
            type="submit"
            className="rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white"
          >
            送信する
          </button>
        </form>

        <p className="text-sm text-zinc-500 mt-4">
          ※ しつこい営業は一切ありません。まずはご相談だけでも大丈夫です。
        </p>
      </main>

      <Footer />
    </div>
  )
}
