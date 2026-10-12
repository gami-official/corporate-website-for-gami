import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FranchiseForm from "./franchise-form"

export const metadata: Metadata = {
  title: "ヘッドスパFC・開業の無料相談",
  description:
    "ヘッドスパ専門店ゆうのFC・開業相談。経験、希望エリア、予算に合わせて、技術研修・導入形態・運営支援をご案内します。検討段階でもご相談いただけます。",
  alternates: {
    canonical: "/franchise-contact",
  },
}

const consultationItems = [
  "未経験からの開業",
  "ウェット・ドライの選択",
  "必要な設備・初期費用",
  "自宅・空きスペース活用",
  "メニュー・価格設計",
  "集客・予約・運営",
]

export default function FranchiseContactPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-zinc-900">
      <Header />

      <main>
        <section className="bg-zinc-950 px-4 py-8 text-white sm:px-6 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/headspa-franchise"
              className="inline-flex min-h-[44px] items-center text-xs font-semibold text-white/75 underline underline-offset-4 hover:text-white"
            >
              ← FC・開業支援の案内へ
            </Link>

            <p className="mt-2 text-[11px] font-bold tracking-[0.12em] text-amber-300">
              FRANCHISE CONTACT
            </p>

            <h1 className="mt-3 text-[28px] font-bold leading-[1.5] tracking-tight sm:text-5xl">
              <span className="inline-block">ヘッドスパの開業、</span>
              <span className="inline-block">まずは無料相談。</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              経験・希望エリア・予算に合わせてご案内します。
              まだ検討段階でも、導入形態が未定でも大丈夫です。
            </p>

            <div className="mt-4 grid max-w-lg grid-cols-3 gap-2">
              {["先着5社限定", "検討段階もOK", "無理な営業なし"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-2 py-2 text-center text-[11px] font-semibold leading-5"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 sm:py-12">
          <div className="mx-auto grid max-w-6xl items-start gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="min-w-0 rounded-2xl border border-black/10 bg-white p-4 sm:p-6">
              <p className="text-[11px] font-bold tracking-[0.12em] text-amber-700">
                FREE CONSULTATION
              </p>

              <h2 className="mt-2 text-2xl font-bold leading-snug">
                無料相談フォーム
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                分かる範囲でご記入ください。
                開業方法・必要資金・支援内容を一緒に整理します。
              </p>

              <FranchiseForm />
            </section>

            <aside className="min-w-0 space-y-4">
              <section className="rounded-2xl border border-amber-100 bg-amber-50 p-4 sm:p-5">
                <h2 className="text-lg font-bold leading-7">
                  こんなことを相談できます。
                </h2>

                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {consultationItems.map((item) => (
                    <li
                      key={item}
                      className="min-w-0 rounded-lg bg-white px-3 py-3 text-sm leading-6"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-xs leading-6 text-zinc-600">
                  導入条件や支援範囲は個別に確認します。
                  相談だけでもご利用いただけます。
                </p>
              </section>

              <section className="rounded-2xl border border-black/10 bg-white p-4 sm:p-5">
                <h2 className="text-lg font-bold leading-7">
                  LINE・電話でも相談。
                </h2>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a
                    href="https://lin.ee/3QGIdCY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] items-center justify-center rounded-full bg-zinc-950 px-3 py-3 text-center text-sm font-bold text-white transition hover:bg-zinc-800"
                  >
                    LINEで相談
                  </a>

                  <a
                    href="tel:0661159935"
                    className="flex min-h-[48px] items-center justify-center rounded-full border border-black/15 px-3 py-3 text-center text-sm font-bold transition hover:bg-amber-50"
                  >
                    電話で相談
                  </a>
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  TEL：06-6115-9935
                </p>

                <a
                  href="mailto:k_fuchigami@gamigami.email"
                  className="mt-2 inline-flex min-h-[44px] items-center text-sm font-semibold underline underline-offset-4"
                >
                  メールで相談する
                </a>
              </section>

              <section className="rounded-2xl border border-black/10 bg-white p-4 sm:p-5">
                <h2 className="text-lg font-bold leading-7">
                  施術を予約したい方へ。
                </h2>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  こちらは加盟・開業相談の窓口です。
                  店舗メニューや施術予約は、ゆう公式サイトへ。
                </p>

                <a
                  href="https://www.yuheadspa.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold text-amber-800 underline underline-offset-4"
                >
                  ヘッドスパ専門店ゆう ↗
                </a>
              </section>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
