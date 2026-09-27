import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Script from "next/script"

export const metadata = {
  title: "Thank You | GAMI Japan Fulfillment",
  description: "Thank you for contacting GAMI.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function InternationalThankYouPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
              'send_to': 'AW-18448548394/iHBSCIrd9ocdEKqE-txE',
              'value': 1.0,
              'currency': 'JPY'
            });
          }
        `}
      </Script>

      <Header />

      <main>
        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Thank You
            </p>

            <h1 className="mt-4 text-[2.2rem] font-bold leading-[1.1] tracking-[-0.045em] sm:text-5xl">
              Your Inquiry Has
              <br className="sm:hidden" /> Been Sent.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
              Thank you for contacting GAMI.
              Our team will review your inquiry and get back to you.
            </p>

            <div className="mt-8">
              <Link
                href="/international"
                className="inline-flex rounded-full bg-amber-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-amber-400"
              >
                Back to Japan Fulfillment
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
