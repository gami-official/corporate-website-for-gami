import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Japan Fulfillment & 3PL | Warehousing & Shipping in Japan | GAMI",
  description:
    "GAMI provides flexible fulfillment and 3PL services in Japan for international brands. Warehousing, inspection, packing, labeling and nationwide shipping from Osaka, Japan.",
  keywords: [
    "Japan fulfillment",
    "3PL Japan",
    "Japan warehouse",
    "warehousing Japan",
    "fulfillment center Japan",
    "Japan logistics partner",
    "shipping in Japan",
    "Japan market entry logistics",
    "ecommerce fulfillment Japan",
    "Osaka warehouse",
  ],
}

const services = [
  {
    number: "01",
    title: "Warehousing",
    body: "Flexible storage solutions in Osaka for international brands entering or expanding in the Japanese market.",
  },
  {
    number: "02",
    title: "Fulfillment",
    body: "From order handling and picking to packing and shipping, we support your day-to-day fulfillment operations in Japan.",
  },
  {
    number: "03",
    title: "Inspection & Labeling",
    body: "Product inspection, labeling, repacking, inserts, kitting and other detailed value-added logistics services.",
  },
  {
    number: "04",
    title: "Nationwide Shipping",
    body: "We ship orders from our logistics base in Osaka to customers and business locations throughout Japan.",
  },
]

const strengths = [
  {
    title: "Flexible Start",
    body: "Talk to us even if you are starting with a limited amount of inventory. We support growing brands with flexible logistics operations.",
  },
  {
    title: "One-Stop Operations",
    body: "Storage, inspection, labeling, packing and domestic shipping can all be coordinated through one logistics partner.",
  },
  {
    title: "365-Day Operations",
    body: "Our logistics operations are designed to support fast-moving ecommerce and businesses that require flexibility throughout the year.",
  },
  {
    title: "Hands-On Support",
    body: "We are strong in detailed manual work including inspection, labeling, inserts, kitting and customized packing.",
  },
]

const steps = [
  {
    step: "01",
    title: "Tell Us About Your Business",
    body: "Share your products, expected inventory, order volume and your plans for the Japanese market.",
  },
  {
    step: "02",
    title: "Build Your Japan Logistics Plan",
    body: "We review storage, fulfillment, packing, shipping and any additional operational requirements.",
  },
  {
    step: "03",
    title: "Receive Your Products in Japan",
    body: "Your inventory is delivered to our logistics base in Osaka and prepared for domestic operations.",
  },
  {
    step: "04",
    title: "Start Shipping Across Japan",
    body: "We handle fulfillment and shipping so you can focus on growing your brand and sales in Japan.",
  },
]

const industries = [
  "E-commerce",
  "Fashion & Apparel",
  "Beauty & Cosmetics",
  "Consumer Goods",
  "Imported Products",
  "Food Products",
  "Startups",
  "International Brands",
]

const faq = [
  {
    q: "Can international companies contact GAMI directly?",
    a: "Yes. International brands and companies are welcome to contact us directly about logistics and fulfillment operations in Japan.",
  },
  {
    q: "Can you support a small launch in Japan?",
    a: "Yes. We can discuss flexible logistics arrangements for brands starting with smaller inventory or order volumes.",
  },
  {
    q: "Where is your warehouse located?",
    a: "Our main logistics base is located in Moriguchi, Osaka, with convenient access to the wider Kansai region and nationwide distribution networks.",
  },
  {
    q: "Can you ship throughout Japan?",
    a: "Yes. We support domestic shipping to destinations throughout Japan.",
  },
  {
    q: "Can you handle labeling, inspection and repacking?",
    a: "Yes. We provide detailed value-added services including inspection, labeling, packing, inserts, kitting and repacking.",
  },
  {
    q: "Can we contact you before our Japan launch is finalized?",
    a: "Absolutely. You can contact us while planning your Japan market entry so we can discuss the logistics setup in advance.",
  },
]
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GAMI Co., Ltd.",
  url: "https://www.gamigami.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1-8-18 Dainichicho",
    addressLocality: "Moriguchi",
    addressRegion: "Osaka",
    addressCountry: "JP",
  },
  description:
    "GAMI provides fulfillment and 3PL services in Japan, including warehousing, inspection, labeling, packing and nationwide shipping.",
}
export default function InternationalPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-950">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-zinc-950 text-white">
          <div className="absolute inset-0">
            <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />
            <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 sm:text-sm sm:tracking-[0.28em]">
                Japan Fulfillment & 3PL
              </p>

              <h1 className="mx-auto mt-6 max-w-5xl text-[2.4rem] font-bold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Launch Your Brand
                <span className="block text-amber-400">in Japan.</span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-8 text-white/70 sm:text-lg sm:leading-9">
                Your logistics partner for entering the Japanese market.
                Warehousing, fulfillment, inspection, packing and nationwide
                shipping — handled from Osaka, Japan.
              </p>

              <div className="mx-auto mt-9 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
                <Link
                  href="/international/contact"
                  className="rounded-full bg-amber-500 px-8 py-4 text-center text-sm font-bold text-white shadow-lg transition hover:bg-amber-400"
                >
                  Start Your Japan Operations
                </Link>

                <a
                  href="#services"
                  className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Our Services
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["OSAKA", "Japan logistics base"],
                  ["365", "Day operations"],
                  ["SMALL", "Flexible start"],
                  ["JAPAN", "Nationwide shipping"],
                ].map(([big, small]) => (
                  <div
                    key={big}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-5 backdrop-blur"
                  >
                    <p className="text-xl font-bold text-amber-300 sm:text-2xl">
                      {big}
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-white/55 sm:text-xs">
                      {small}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                  Your Gateway to Japan
                </p>

                <h2 className="mt-4 text-[2rem] font-bold leading-[1.18] tracking-[-0.04em] sm:text-5xl">
                  Sell in Japan.
                  <br />
                  We handle the logistics.
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-8 text-zinc-600 sm:text-base sm:leading-9">
                  Expanding into Japan should not require building your own
                  logistics operation from day one. GAMI supports international
                  brands with practical, flexible fulfillment services from
                  Osaka.
                </p>

                <p className="mt-5 text-[15px] leading-8 text-zinc-600 sm:text-base sm:leading-9">
                  Send your inventory to Japan and let our team handle storage,
                  inspection, labeling, packing and domestic shipping while you
                  focus on sales, marketing and growing your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-zinc-100 py-16 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                Services
              </p>

              <h2 className="mt-4 text-[2rem] font-bold leading-[1.2] tracking-[-0.04em] sm:text-5xl">
                Everything you need
                <br className="sm:hidden" /> to fulfill in Japan.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-zinc-600 sm:text-base">
                One logistics partner for your Japanese operations.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-7"
                >
                  <p className="text-sm font-bold text-amber-600">
                    {service.number}
                  </p>

                  <h3 className="mt-5 text-xl font-bold tracking-[-0.02em]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-600">
                    {service.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY GAMI */}
        <section id="why-gami" className="bg-zinc-950 py-16 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                  Why GAMI
                </p>

                <h2 className="mt-4 text-[2rem] font-bold leading-[1.2] tracking-[-0.04em] sm:text-5xl">
                  A flexible partner
                  <br />
                  on the ground in Japan.
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-8 text-white/65 sm:text-base">
                  We combine warehouse operations with detailed hands-on
                  fulfillment work to support brands at different stages of
                  their Japan expansion.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {strengths.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6"
                  >
                    <h3 className="text-xl font-bold text-amber-300">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/65">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                Built for Growing Brands
              </p>

              <h2 className="mt-4 text-[2rem] font-bold leading-[1.2] tracking-[-0.04em] sm:text-5xl">
                Who we support.
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {industries.map((item) => (
                <div
                  key={item}
                  className="flex min-h-24 items-center justify-center rounded-3xl border border-zinc-200 bg-white px-3 py-5 text-center shadow-sm"
                >
                  <p className="text-sm font-bold leading-6 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FLOW */}
        <section className="bg-zinc-100 py-16 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                How It Works
              </p>

              <h2 className="mt-4 text-[2rem] font-bold leading-[1.2] tracking-[-0.04em] sm:text-5xl">
                From overseas
                <br className="sm:hidden" /> to customers in Japan.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-bold text-amber-600">
                    STEP {item.step}
                  </p>

                  <h3 className="mt-4 text-lg font-bold leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OSAKA */}
        <section className="py-16 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <div className="overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                    Osaka, Japan
                  </p>

                  <h2 className="mt-4 text-[2rem] font-bold leading-[1.2] tracking-[-0.04em] sm:text-5xl">
                    Your logistics base
                    <br />
                    in Japan.
                  </h2>
                </div>

                <div>
                  <Image
  src="/images/warehouse-moriguchi-inside.jpg"
  alt="GAMI fulfillment warehouse in Moriguchi, Osaka, Japan"
  width={900}
  height={600}
  className="mb-6 w-full rounded-2xl object-cover shadow-lg"
/>
                  
                  <p className="text-sm leading-8 text-white/65 sm:text-base">
                    Our main warehouse is located in Moriguchi, Osaka. From
                    receiving and storage to value-added work and domestic
                    shipping, GAMI provides an operational base for brands
                    building their business in Japan.
                  </p>

                  <p className="mt-5 text-sm font-bold leading-7 text-white">
                    1-8-18 Dainichicho, Moriguchi,
                    <br className="sm:hidden" /> Osaka, Japan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-zinc-100 py-16 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                FAQ
              </p>

              <h2 className="mt-4 text-[2rem] font-bold tracking-[-0.04em] sm:text-5xl">
                Questions from international brands.
              </h2>
            </div>

            <div className="mt-10 space-y-3">
              {faq.map((item) => (
                <div
                  key={item.q}
                  className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-base font-bold leading-7 sm:text-lg">
                    {item.q}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-zinc-950 text-white">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Let&apos;s Work Together
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-[2.2rem] font-bold leading-[1.1] tracking-[-0.045em] sm:text-6xl">
              Ready to launch
              <br />
              in Japan?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-white/65 sm:text-base">
              Tell us about your products and your plans for Japan.
              We&apos;ll discuss a logistics setup that fits your business.
            </p>

            <div className="mx-auto mt-9 max-w-sm">
              <Link
                href="/international/contact"
                className="block rounded-full bg-amber-500 px-8 py-4 text-center text-sm font-bold text-white shadow-lg transition hover:bg-amber-400"
              >
                Contact GAMI
              </Link>
            </div>

            <p className="mt-6 text-xs leading-6 text-white/40">
              GAMI Co., Ltd. · Osaka, Japan
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
