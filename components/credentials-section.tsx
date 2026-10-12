import { ShieldCheck } from "lucide-react"

const credentials = [
  "第一種貨物利用運送事業（貨物自動車運送／近運自貨第1190号）",
  "化粧品製造業許可認証倉庫（許可番号 27CZ201072）",
  "古物商 大阪府公安委員会許可 第62229R076690号",
  "運行管理者（貨物）",
  "第一種衛生管理者",
  "インボイス登録番号 T9120001277055",
]

export function CredentialsSection() {
  return (
    <section className="border-t border-black/5 bg-[#f8f8f6] px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold tracking-widest text-amber-700">
          LICENSE / QUALIFICATION
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-snug text-black sm:text-4xl">
          資格・許認可
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
          物流業務に関する許認可と、
          運営を支える資格・登録情報をご案内します。
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {credentials.map((item) => (
            <li
              key={item}
              className="flex min-w-0 items-start gap-3 rounded-2xl border border-black/5 bg-white p-5 sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50">
                <ShieldCheck
                  aria-hidden="true"
                  className="h-5 w-5 text-amber-600"
                />
              </div>

              <span className="min-w-0 break-words text-sm leading-7 text-zinc-700">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
