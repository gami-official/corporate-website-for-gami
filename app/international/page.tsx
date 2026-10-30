
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title:
    "Japan Fulfillment & 3PL | Osaka Warehouse & Nationwide Shipping | GAMI",
  description:
    "GAMI provides fulfillment and 3PL services in Japan from its own warehouse in Osaka, supported by logistics partners in Fukuoka and Kobe. Warehousing, inspection, labeling, kitting, packing and nationwide shipping for international brands.",
  keywords: [
    "Japan fulfillment",
    "3PL Japan",
    "Japan warehouse",
    "Osaka warehouse",
    "warehousing Japan",
    "fulfillment center Japan",
    "Japan logistics partner",
    "shipping in Japan",
    "Japan market entry logistics",
    "ecommerce fulfillment Japan",
  ],
  alternates: {
    canonical: "https://www.gamigami.net/international",
  },
  openGraph: {
    title: "Japan Fulfillment & 3PL | GAMI",
    description:
      "Osaka-based warehousing, fulfillment, inspection, packing and nationwide shipping for international brands.",
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
      "Warehousing, fulfillment and nationwide shipping from Osaka, Japan.",
    images: [
      "https://www.gamigami.net/images/warehouse-moriguchi-inside.jpg",
    ],
  },
}

const services = [
  {
    number: "01",
    title: "Warehousing",
    body:
      "Flexible inventory storage at our own warehouse in Osaka, supporting international brands entering or expanding in Japan.",
  },
  {
    number: "02",
    title: "Fulfillment",
    body:
      "Order handling, picking, packing and shipping for day-to-day ecommerce and business fulfillment operations.",
  },
  {
    number: "03",
    title: "Inspection & Labeling",
    body:
      "Product inspection, labeling, repacking, inserts, kitting and detailed value-added logistics services.",
  },
  {
    number: "04",
    title: "Nationwide Shipping",
    body:
      "Domestic shipping throughout Japan, coordinated from our Osaka base and supported by our logistics network.",
  },
]

const strengths = [
  {
    title: "Flexible Start",
    body:
      "We welcome inquiries from growing brands with smaller inventory volumes, as well as companies planning larger logistics projects.",
  },
  {
    title: "One-Stop Operations",
    body:
      "Warehousing, inspection, labeling, packing and domestic shipping can be coordinated through one logistics partner.",
  },
  {
    title: "Flexible Scheduling",
    body:
      "We plan operations around project requirements. Weekend and holiday handling may be arranged through advance consultation.",
  },
  {
    title: "Hands-On Support",
    body:
      "Our strengths include detailed manual work such as inspection, inserts, labeling, kitting and customized packing.",
  },
]

const projectCapabilities = [
  {
    title: "Storage & Pick/Pack",
    body:
      "Inventory storage, order picking, packing, shipment preparation and domestic delivery coordination.",
  },
  {
    title: "Inspection & Kitting",
    body:
      "Product inspection, labeling, inserts, set assembly, repacking and quality checks.",
  },
  {
    title: "Bulk Mailing Projects",
    body:
      "Large-volume packing, promotional inserts, campaign dispatch and shipping coordination.",
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

const steps = [
  {
    step: "01",
    title: "Tell Us About Your Business",
    body:
      "Share your product details, expected inventory, order volume and plans for the Japanese market.",
  },
  {
    step: "02",
    title: "Build Your Japan Logistics Plan",
    body:
      "We review warehousing, fulfillment, inspection, packing, shipping and any special requirements.",
  },
  {
    step: "03",
    title: "Receive Your Products in Japan",
    body:
      "Your products are delivered to the agreed receiving location, with our Osaka warehouse serving as the main logistics base.",
  },
  {
    step: "04",
    title: "Start Shipping Across Japan",
    body:
      "We coordinate fulfillment and domestic shipping according to the agreed operating plan.",
  },
]

const faq = [
  {
    q: "Can international companies contact GAMI directly?",
    a:
      "Yes. International brands and companies are welcome to contact us directly about logistics and fulfillment operations in Japan.",
  },
  {
    q: "Can you support a small launch in Japan?",
    a:
      "Yes. We can discuss flexible logistics arrangements for brands starting with smaller inventory or order volumes.",
  },
  {
    q: "Where is your main warehouse located?",
    a:
      "Our main warehouse, GAMI OSAKA BASE, is located at 1-8-18 Dainichicho, Moriguchi, Osaka, Japan. It is our own facility with approximately 100 tsubo of warehouse space.",
  },
  {
    q: "Do you have logistics partners outside Osaka?",
    a:
      "Yes. Our Osaka-based operations are supported by partner companies in Fukuoka and Kobe. The operational arrangement depends on each project's requirements.",
  },
  {
    q: "Can you ship throughout Japan?",
    a:
      "Yes. We support domestic shipping to destinations throughout Japan, subject to the agreed shipping method and service conditions.",
  },
  {
    q: "Can you handle labeling, inspection and repacking?",
    a:
      "Yes. We provide detailed value-added services including inspection, labeling, packing, inserts, kitting and repacking.",
  },
  {
    q: "Do you operate on weekends and holidays?",
    a:
      "Weekend and holiday operations may be available by prior arrangement. Please contact us in advance to discuss your schedule and requirements.",
  },
  {
    q: "Can we contact you before our Japan launch is finalized?",
    a:
      "Absolutely. We welcome early inquiries so we can discuss your logistics requirements before your Japan market entry.",
  },
]

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GAMI Co., Ltd.",
  url: "https://www.gamigami.net",
  description:
    "Osaka-based fulfillment and 3PL services in Japan, including warehousing, inspection, labeling, packing and nationwide shipping.",
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
        {/* HERO */}
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
            <source
              src="/video/hero-logistics.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 sm:text-sm sm:tracking-[0.28em]">
                Japan Fulfillment & 3PL
              </p>

              <h1 className="mx-auto mt-6 max-w-5xl text-[2.4rem] font-bold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Your Logistics Partner
                <span className="block text-amber-400">
                  in Japan.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-8 text-white/75 sm:text-lg sm:leading-9">
                Based at our own warehouse in Osaka,
                GAMI provides flexible fulfillment and
                3PL services for international brands.
                From small shipments to large-scale projects,
                we coordinate warehousing, packing and
                nationwide shipping with trusted partners
                in Fukuoka and Kobe.
              </p>

              <div className="mx-auto mt-9 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
                <Link
                  href="/international/contact"
                  className="rounded-full bg-amber-500 px-8 py-4 text-center text-sm font-bold text-zinc-950 shadow-lg transition hover:bg-amber-400"
                >
                  Request a Logistics Quote
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
                  ["OSAKA", "Our own main warehouse"],
                  ["100", "Approx. warehouse tsubo"],
                  ["FLEX", "Small to large projects"],
                  ["JAPAN", "Nationwide shipping"],
                ].map(([big, small]) => (
                  <div
                    key={big}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-5 backdrop-blur"
                  >
                    <p className="text-xl font-bold text-amber-300 sm:text-2xl">
                      {big}
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-white/60 sm:text-xs">
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
                  Expanding into Japan should not require
                  building your own logistics operation
                  from day one. GAMI supports international
                  brands through its Osaka-based warehouse
                  and fulfillment operations.
                </p>

                <p className="mt-5 text-[15px] leading-8 text-zinc-600 sm:text-base sm:leading-9">
                  Send your inventory to Japan and let
                  our team coordinate storage, inspection,
                  labeling, packing and domestic shipping
                  while you focus on sales, marketing
                  and growing your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="scroll-mt-24 bg-zinc-100 py-16 sm:py-28"
        >
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
                <article
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY GAMI */}
        <section
          id="why-gami"
          className="scroll-mt-24 bg-zinc-950 py-16 text-white sm:py-28"
        >
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
                  Our Osaka warehouse serves as the
                  operational foundation for flexible
                  fulfillment, supported by trusted
                  logistics partners when needed.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {strengths.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6"
                  >
                    <h3 className="text-xl font-bold text-amber-300">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/65">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT CAPABILITIES */}
        <section
          aria-labelledby="capabilities-title"
          className="bg-zinc-100 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              Flexible Project Support
            </p>

            <h2
              id="capabilities-title"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl"
            >
              From everyday orders to
              <br />
              campaign-scale fulfillment.
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600 sm:text-base">
              We discuss shipment volume, packaging requirements,
              timelines and handling needs before proposing
              a practical Japan logistics setup.
              Service scope and schedules are confirmed
              for each project.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projectCapabilities.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-white p-6">
              <h3 className="text-lg font-bold">
                What to include in your inquiry
              </h3>

              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Product type, estimated quantity,
                storage needs, packing or inspection
                requirements, shipping destinations
                and target dates. Estimates are possible
                even if some details are not finalized.
              </p>

              <Link
                href="/international/contact"
                className="mt-5 inline-flex min-h-11 items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-400"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>

        {/* OUR TEAM */}
        <section
          aria-labelledby="our-team-title"
          className="bg-white py-16 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                Our Team
              </p>

              <h2
                id="our-team-title"
                className="mt-4 text-[2rem] font-bold tracking-[-0.04em] sm:text-5xl"
              >
                The People Behind GAMI
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-zinc-600 sm:text-base">
                Your logistics partner, with real people you can trust.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <article className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm">
                <div className="flex h-80 items-center justify-center bg-white p-5 sm:h-96">
                  <Image
                    src="/images/team-kazuhiro.jpg"
                    alt="Pixel-art portrait of Kazuhiro Fuchigami"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="border-t border-zinc-100 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                    President &amp; CEO
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Kazuhiro Fuchigami
                  </h3>

                  <p className="mt-5 font-semibold text-zinc-900">
                    Every shipment matters, no matter the size.
                  </p>

                  <p className="mt-3 text-sm leading-8 text-zinc-600">
                    We approach every project with care and
                    responsibility, from small shipments to
                    large-scale fulfillment operations.
                    Our goal is to be a logistics partner
                    you can always count on.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm">
                <div className="flex h-80 items-center justify-center bg-white p-5 sm:h-96">
                  <Image
                    src="/images/team-mayu.png"
                    alt="Pixel-art portrait of Mayu Kotera"
                    width={1024}
                    height={1536}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="border-t border-zinc-100 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                    Executive Managing Director
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Mayu Kotera
                  </h3>

                  <p className="mt-5 font-semibold text-zinc-900">
                    Great service starts with great communication.
                  </p>

                  <p className="mt-3 text-sm leading-8 text-zinc-600">
                    We believe in clear communication,
                    attention to detail, and flexible solutions.
                    Even if your plans are still taking shape,
                    we&apos;re here to help you find
                    the right approach.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* JAPAN OPERATIONS NETWORK */}
        <section
          aria-labelledby="network-title"
          className="bg-amber-50 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              Japan Operations Network
            </p>

            <h2
              id="network-title"
              className="mt-4 text-[2rem] font-bold leading-tight tracking-tight sm:text-5xl"
            >
              Osaka at the center.
              <br />
              Connected across Japan.
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600 sm:text-base">
              GAMI operates from its own warehouse in Osaka,
              supported by independent logistics partners
              in Fukuoka and Kobe. We coordinate the most
              suitable operating structure according to
              each project&apos;s scale and requirements.
            </p>

            {/* MAIN OSAKA FACILITY */}
            <article className="mt-9 overflow-hidden rounded-3xl border border-amber-300 bg-white shadow-sm">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-64 sm:min-h-80">
                  <Image
                    src="/images/warehouse-moriguchi.jpg"
                    alt="GAMI OSAKA BASE warehouse exterior in Moriguchi, Osaka"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
                    Main Operations · GAMI-Owned Warehouse
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight">
                    GAMI OSAKA BASE
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-zinc-800">
                    Moriguchi, Osaka, Japan
                  </p>

                  <p className="mt-4 text-sm leading-8 text-zinc-600">
                    Our main logistics facility provides
                    approximately 100 tsubo of warehouse
                    space for inventory storage, inspection,
                    packing, value-added processing and
                    domestic shipping operations.
                  </p>

                  <p className="mt-4 text-sm font-semibold text-zinc-800">
                    1-8-18 Dainichicho, Moriguchi, Osaka
                  </p>

                  <Link
                    href="/warehouse"
                    className="mt-6 inline-flex min-h-11 w-fit items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-400"
                  >
                    Explore Our Osaka Warehouse
                  </Link>
                </div>
              </div>
            </article>

            {/* PARTNER NETWORK */}
            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                Partner Companies
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Trusted Logistics Partners
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-8 text-zinc-600">
                We collaborate with independent partner
                companies according to each project&apos;s
                operational needs. These facilities
                are part of our cooperation network,
                not GAMI-owned warehouses.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {/* FUKUOKA */}
                <article className="overflow-hidden rounded-3xl border border-amber-100 bg-white">
                  <div className="relative h-52 sm:h-60">
                    <Image
                      src="/images/partner-maxexpress.png"
                      alt="MAX EXPRESS logistics partner in Fukuoka"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-700">
                      Fukuoka · Logistics Partner
                    </p>

                    <h4 className="mt-3 text-xl font-bold">
                      MAX EXPRESS Co., Ltd.
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                      Our logistics partner in Fukuoka,
                      supporting flexible project coordination
                      according to operational requirements.
                    </p>

                    <a
                      href="https://www.maxexpress.co.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex min-h-11 items-center text-sm font-bold text-amber-800 underline underline-offset-4"
                    >
                      Visit Official Website ↗
                    </a>
                  </div>
                </article>

                {/* KOBE */}
                <article className="overflow-hidden rounded-3xl border border-amber-100 bg-white">
                  <div className="relative h-52 sm:h-60">
                    <Image
                      src="/images/partner-sgrow.png"
                      alt="S-GROW logistics partner in Kobe"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-700">
                      Kobe · Logistics Partner
                    </p>

                    <h4 className="mt-3 text-xl font-bold">
                      S-GROW Co., Ltd.
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                      Our logistics partner in Kobe,
                      supporting projects through
                      coordinated logistics operations
                      and distribution arrangements.
                    </p>

                    <a
                      href="https://www.s-grow.co.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex min-h-11 items-center text-sm font-bold text-amber-800 underline underline-offset-4"
                    >
                      Visit Official Website ↗
                    </a>
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
                <article
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OSAKA WAREHOUSE */}
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

                  <p className="mt-6 text-sm leading-8 text-white/70 sm:text-base">
                    An Osaka-based logistics partner
                    with its own warehouse and a flexible
                    network for projects across Japan.
                  </p>
                </div>

                <div>
                  <Image
                    src="/images/warehouse-moriguchi-inside.jpg"
                    alt="Inside GAMI OSAKA BASE warehouse in Moriguchi, Osaka"
                    width={900}
                    height={600}
                    className="mb-6 w-full rounded-2xl object-cover shadow-lg"
                  />

                  <p className="text-sm leading-8 text-white/70 sm:text-base">
                    Our main warehouse is located in
                    Moriguchi, Osaka. From receiving
                    and storage to value-added processing
                    and domestic shipping, GAMI provides
                    an operational base for brands
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
        <section
          id="faq"
          className="scroll-mt-24 bg-zinc-100 py-16 sm:py-28"
        >
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
                <article
                  key={item.q}
                  className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-base font-bold leading-7 sm:text-lg">
                    {item.q}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.a}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-zinc-950 text-white">
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Let&apos;s Work Together
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-[2.2rem] font-bold leading-[1.1] tracking-[-0.045em] sm:text-6xl">
              Ready to launch
              <br />
              in Japan?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-white/70 sm:text-base">
              Tell us about your products and plans
              for Japan. We&apos;ll discuss a logistics
              setup that fits your business,
              starting from our Osaka operations.
            </p>

            <div className="mx-auto mt-9 max-w-sm">
              <Link
                href="/international/contact"
                className="block rounded-full bg-amber-500 px-8 py-4 text-center text-sm font-bold text-zinc-950 shadow-lg transition hover:bg-amber-400"
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
