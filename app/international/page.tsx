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
  alternates: {
    canonical: "https://www.gamigami.net/international",
  },
  openGraph: {
    title: "Japan Fulfillment & 3PL | GAMI",
    description:
      "Warehousing, fulfillment, inspection, packing, labeling and nationwide shipping for international brands entering Japan.",
    url: "https://www.gamigami.net/international",
    siteName: "GAMI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.gamigami.net/images/warehouse-moriguchi-inside.jpg",
        width: 1200,
        height: 630,
        alt: "GAMI fulfillment warehouse in Moriguchi, Osaka, Japan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan Fulfillment & 3PL | GAMI",
    description:
      "Warehousing, fulfillment and nationwide shipping for international brands entering Japan.",
    images: [
      "https://www.gamigami.net/images/warehouse-moriguchi-inside.jpg",
    ],
  },
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

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GAMI Co., Ltd.",
  url: "https://www.gamigami.net",
  description:
    "GAMI provides fulfillment and 3PL services in Japan, including warehousing, inspection, labeling, packing and nationwide shipping.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1-8-18 Dainichicho",
    addressLocality: "Moriguchi",
    addressRegion: "Osaka",
    addressCountry: "JP",
  },
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
}

export default function InternationalPage() {
  return (
    <div
      lang="en"
      className="min-h-screen overflow-x-hidden bg-white text-zinc-950"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <Header />

      <main>
        {/* HERO — same background video as Japanese homepage */}
        <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero-logistics.png"
            className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
            aria-hidden="true"
          >
            <source src="/video/hero-logistics.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

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
                shipping — coordinated through our Osaka, Fukuoka and Kobe network.
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

        {/* OUR TEAM */}
        <section aria-labelledby="our-team-title" className="bg-white py-16 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Our Team</p>
              <h2 id="our-team-title" className="mt-4 text-[2rem] font-bold tracking-[-0.04em] sm:text-5xl">The People Behind GAMI</h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-zinc-600 sm:text-base">Your logistics partner, with real people you can trust.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <article className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm">
                <div className="flex h-80 items-center justify-center bg-white p-5 sm:h-96">
                  <Image src="/images/team-kazuhiro.jpg" alt="Pixel-art portrait of Kazuhiro Fuchigami" width={1024} height={1024} className="h-full w-full object-contain" />
                </div>
                <div className="border-t border-zinc-100 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">President &amp; CEO</p>
                  <h3 className="mt-2 text-2xl font-bold">Kazuhiro Fuchigami</h3>
                  <p className="mt-5 font-semibold text-zinc-900">Every shipment matters, no matter the size.</p>
                  <p className="mt-3 text-sm leading-8 text-zinc-600">We approach every project with care and responsibility, from small shipments to large-scale fulfillment operations. Our goal is to be a logistics partner you can always count on.</p>
                </div>
              </article>
              <article className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm">
                <div className="flex h-80 items-center justify-center bg-white p-5 sm:h-96">
                  <Image src="/images/team-mayu.png" alt="Pixel-art portrait of Mayu Kotera" width={1024} height={1536} className="h-full w-full object-contain" />
                </div>
                <div className="border-t border-zinc-100 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">Executive Managing Director</p>
                  <h3 className="mt-2 text-2xl font-bold">Mayu Kotera</h3>
                  <p className="mt-5 font-semibold text-zinc-900">Great service starts with great communication.</p>
                  <p className="mt-3 text-sm leading-8 text-zinc-600">We believe in clear communication, attention to detail, and flexible solutions. Even if your plans are still taking shape, we&apos;re here to help you find the right approach.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* JAPAN OPERATIONS NETWORK */}
        <section aria-labelledby="network-title" className="bg-amber-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Japan Operations Network</p>
            <h2 id="network-title" className="mt-4 text-[2rem] font-bold leading-tight tracking-tight sm:text-5xl">
              Connected across Osaka, Fukuoka &amp; Kobe.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600 sm:text-base">
              From small-volume fulfillment to large packing and shipping projects, GAMI coordinates operations through its own facilities and trusted partner companies, based on each project&apos;s requirements.
            </p>

            <div className="mt-9 grid gap-4 md:grid-cols-2">
              <article className="overflow-hidden rounded-3xl border border-amber-100 bg-white">
                <Image src="/images/warehouse-moriguchi.jpg" alt="GAMI Osaka Logistics Center exterior" width={960} height={600} className="h-48 w-full object-cover sm:h-56" />
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-bold tracking-widest text-amber-700">OSAKA · GAMI FACILITY</p>
                  <h3 className="mt-2 text-xl font-bold">Osaka Logistics Center</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">1-8-18 Dainichicho, Moriguchi, Osaka. Approximately 100 tsubo of warehouse space for storage, processing and shipping. Small-volume projects are welcome.</p>
                </div>
              </article>
              <article className="rounded-3xl border border-amber-100 bg-white p-5 sm:p-6">
                <p className="text-xs font-bold tracking-widest text-amber-700">FUKUOKA · GAMI FACILITY</p>
                <h3 className="mt-2 text-xl font-bold">Fukuoka Inspection Center</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">Inside A-produce, 1-21-9 Kanenokuma, Hakata-ku, Fukuoka City, Fukuoka. An inspection center supporting projects in coordination with our Osaka operations.</p>
              </article>
            </div>

            <div className="mt-5 rounded-3xl border border-amber-100 bg-white p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Partner Companies</p>
              <h3 className="mt-2 text-2xl font-bold">Trusted Logistics Partners</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">We work with partner companies according to the scale and operational needs of each project.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-[#fbfaf7]">
                  <Image src="/images/partner-maxexpress.png" alt="MAX EXPRESS logistics facility exterior" width={800} height={500} className="h-48 w-full object-cover sm:h-56" />
                  <div className="p-5">
                    <p className="text-xs font-bold text-amber-700">FUKUOKA · PARTNER</p>
                    <h4 className="mt-2 text-lg font-bold">MAX EXPRESS Co., Ltd.</h4>
                    <a href="https://www.maxexpress.co.jp/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm font-bold text-amber-800 underline underline-offset-4">Visit official website ↗</a>
                  </div>
                </article>
                <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-[#fbfaf7]">
                  <Image src="/images/partner-sgrow.png" alt="S-GROW company building exterior" width={280} height={280} className="h-48 w-full object-cover object-center sm:h-56" />
                  <div className="p-5">
                    <p className="text-xs font-bold text-amber-700">KOBE · PARTNER</p>
                    <h4 className="mt-2 text-lg font-bold">S-GROW Co., Ltd.</h4>
                    <a href="https://www.s-grow.co.jp/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm font-bold text-amber-800 underline underline-offset-4">Visit official website ↗</a>
                  </div>
                </article>
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
              Tell us about your products and your plans for Japan. We&apos;ll
              discuss a logistics setup that fits your business.
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
