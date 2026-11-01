import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MetricsBar } from "@/components/metrics-bar"

export const metadata: Metadata = {
  title:
    "365-Day Japan Fulfillment & 3PL | Osaka Warehouse | GAMI",
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
    image: "warehouse-interior-nesting.png",
    title: "Warehousing",
    body:
      "Flexible inventory storage at our own warehouse in Osaka, supporting international brands entering or expanding in Japan.",
  },
  {
    number: "02",
    image: "section-365-fulfillment.png",
    title: "Fulfillment",
    body:
      "Order handling, picking, packing and shipping for day-to-day ecommerce and business fulfillment operations.",
  },
  {
    number: "03",
    image: "case-inspection.png",
    title: "Inspection & Labeling",
    body:
      "Product inspection, labeling, repacking, inserts, kitting and detailed value-added logistics services.",
  },
  {
    number: "04",
    image: "section-japan-fulfillment.png",
    title: "Nationwide Shipping",
    body:
      "Domestic shipping throughout Japan, coordinated from our Osaka base and supported by our logistics network.",
  },
  {
    number: "05",
    image: "section-education-kitting.png",
    title: "Educational Materials",
    body: "Collating course materials, assembling kits, adding inserts and shipping to learners or distributing brochures in specified quantities to schools and learning centers.",
  },
  {
    number: "06",
    image: "section-cardboard-supply.png",
    title: "Packaging Materials",
    body: "Competitive cardboard box pricing through a nearby packaging partner. Box-only orders are welcome for delivery in Osaka and neighboring prefectures. Share your specifications, current unit price and order quantity for a comparable quote.",
  },  {
    number: "07",
    image: "case-inspection.png",
    title: "Cosmetics & Beauty Products",
    body: "Container and product inspection, kitting, gift sets, packing and domestic shipping. Our Osaka facility holds a cosmetics manufacturing license; we confirm the requested work against its permitted scope.",
  },
  {
    number: "08",
    image: "charter-transport.png",
    title: "Nationwide Charter Transport",
    body: "Charter transport across Japan through our carrier network, from light vehicles to large trucks. Pickup, delivery, cargo and vehicle requirements are reviewed before quotation.",
  },

]

const caseStudies = [
  {
    "id": "apparel",
    "industry": "Apparel Business",
    "image": "/images/case-apparel.png",
    "alt": "Illustration of caps and apparel being packed",
    "title": "From two days to next-day delivery.",
    "summary": "Moving sorting and dispatch to Osaka, alongside same-day dispatch, shortened delivery times for eligible destinations.",
    "paragraphs": [
      "This customer previously received products from a manufacturer in the Kanto region at a Kyushu base, sorted the products and shipped them to customers. Some destinations required two days for delivery.",
      "GAMI moved sorting and dispatch to Osaka and combined this with same-day dispatch. Destinations that previously required two days could then be served with next-day delivery, helping improve the customer experience."
    ]
  },
  {
    "id": "distribution",
    "industry": "Kyushu-Based Business",
    "image": "/images/case-distribution.png",
    "alt": "Conceptual image of regional distribution from Osaka",
    "title": "A business in Kyushu. A logistics base in Osaka.",
    "summary": "A dispatch location closer to key destinations helped resolve delivery lead-time challenges.",
    "paragraphs": [
      "The customer sources products in Kyushu and ships to the Chugoku, Kansai and Kanto regions. Delivery times from the previous arrangement presented a challenge.",
      "GAMI supports logistics operations from Osaka, aligning the dispatch location with the customer’s main delivery areas."
    ]
  },
  {
    "id": "rice",
    "industry": "Food Business Handling Regional Donation Gifts",
    "image": "/images/case-rice.png",
    "alt": "Illustration of rice and shipping cartons",
    "title": "Delivering rice gifts sooner, with less uncertainty.",
    "summary": "Processing and dispatch in Osaka helped gifts reach recipients sooner and reduced the need for delivery-status inquiries.",
    "paragraphs": [
      "Rice from the Chugoku region was previously sent to Kyushu for processing before being shipped to recipients.",
      "GAMI arranged processing and dispatch in Osaka to shorten the route to recipients in Kansai and Kanto. Earlier delivery helps reduce uncertainty for recipients and the customer’s workload in answering delivery-status inquiries."
    ]
  },
  {
    "id": "beauty",
    "industry": "Beauty Products Business",
    "image": "/images/case-beauty.png",
    "alt": "Illustration of beauty products being carefully packed",
    "title": "More than 365-day availability.",
    "summary": "Responsive communication and practical suggestions support greater operational flexibility.",
    "paragraphs": [
      "Outsourcing dispatch on a 365-day basis gave the customer more flexibility in running its business.",
      "GAMI responds promptly, coordinates with the operational team and suggests practical improvements. Close communication between the customer and the people handling the products supports attention to detail."
    ]
  },
  {
    "id": "inspection",
    "industry": "Cosmetics Manufacturer",
    "image": "/images/case-inspection.png",
    "alt": "Illustration of cosmetic container inspection",
    "title": "An urgent inspection. A deadline met.",
    "summary": "Urgent container inspection was completed in time; inspection work now continues in Osaka and Kyushu.",
    "paragraphs": [
      "A cosmetics manufacturer in Kyushu requested urgent container inspection. GAMI responded quickly and worked to the customer’s required inspection standard and deadline.",
      "Inspection work continues in Osaka and Kyushu. GAMI can also arrange domestic transportation with attention to cost, and discuss set assembly in Osaka within its cosmetics manufacturing license scope."
    ]
  }
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
    title: "365-Day Fulfillment",
    body:
      "Keep dispatch moving through weekends, public holidays and the New Year period. We agree on operating days, cutoffs, staffing and fees for your project in advance.",
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
  "Schools & Learning Centers",
  "Online Courses & Seminars",
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
    q: "Can you inspect and assemble cosmetics and beauty product sets?",
    a: "Yes. We can discuss container inspection, appearance and quantity checks, kitting, gift sets, packing and domestic shipping. Our Osaka facility holds cosmetics manufacturing license 27CZ201072. We review the requested work and applicable license scope before confirming availability.",
  },
  {
    q: "Can you arrange charter transport across Japan?",
    a: "Yes. Through our nationwide carrier network and Type I Freight Forwarding Business registration, we can discuss light vehicles, 2-ton and 4-ton trucks, large trucks and other vehicle requirements. Availability and pricing depend on the route, dates, cargo, vehicle equipment and loading or unloading conditions.",
  },
  {
    q: "Do we need to share our current logistics costs?",
    a: "No. Current fees, unit prices and target budgets are optional. Sharing them, including whether tax, tolls and handling are included, helps us prepare a comparable quote. You can still request a quote without providing pricing.",
  },
  {
    q: "Can you prepare and ship course materials?",
    a: "Yes. We can discuss storage, collation, course-specific kits, inserts, packing and domestic shipping to learners or learning centers. Printed materials can be delivered directly from your printing company to the agreed receiving location.",
  },
  {
    q: "Can we request a quotation for cardboard boxes only?",
    a: "Yes. Box-only orders are available for Osaka and neighboring prefectures, subject to delivery location and quantity. We offer competitive pricing through a nearby cardboard supplier. Share total dimensions (length + width + height), strength, color, quantity, timing and delivery location. Your current unit price and a product URL are helpful if available, but optional.",
  },
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
    q: "Can you provide fulfillment 365 days a year, including New Year holidays?",
    a:
      "Yes. We offer 365-day fulfillment arrangements, including weekends, public holidays and the New Year period. Dispatch days, order cutoffs, staffing, same-day dispatch conditions and fees are agreed for each project. This does not mean 24-hour operations or guaranteed delivery every day; carrier schedules and destination conditions also apply.",
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

function SectionImage({ src, alt, dark = false }: { src: string; alt: string; dark?: boolean }) {
  return <figure className="mt-7 overflow-hidden rounded-2xl"><img src={`/images/${src}`} alt={alt} width={1536} height={1024} loading="lazy" className="aspect-[16/9] w-full object-cover" /><figcaption className={`pt-2 text-[11px] leading-6 ${dark ? "text-white/60" : "text-zinc-500"}`}>Service illustration.</figcaption></figure>
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
                365-Day Japan Fulfillment & 3PL
              </p>

              <p className="mx-auto mt-4 w-fit max-w-full whitespace-nowrap rounded-full border border-amber-300/50 bg-amber-300/10 px-3 py-2 text-[11px] font-bold leading-5 text-amber-200 sm:text-sm">365-day fulfillment by arrangement.</p>
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


            </div>
          </div>
        </section>

        <MetricsBar language="en" />

        {/* 365-DAY FULFILLMENT */}
        <section id="operations-365" aria-labelledby="operations-365-title" className="scroll-mt-24 bg-amber-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">365-Day Fulfillment</p>
            <h2 id="operations-365-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">Your business keeps moving.<br />Your fulfillment should, too.</h2>
            <SectionImage src="section-365-fulfillment.png" alt="Order preparation and dispatch throughout the year" />
            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600 sm:text-base">Weekend orders and holiday demand should be part of your fulfillment plan. GAMI offers 365-day operating arrangements, including weekends, public holidays and the New Year period, with the dispatch schedule and working conditions agreed in advance.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">{[
              ["Reduce waits for the next business day", "Coordinate dispatch days around your ecommerce, course materials or beauty product business."],
              ["Plan beyond the holiday calendar", "Agree on order cutoffs, expected volumes and staffing before weekends, peak periods and New Year holidays."],
              ["A small team, close to your operations", "Direct communication, careful kitting and packing, and practical suggestions support more than dispatch alone."],
            ].map(([title,body])=><article key={title} className="rounded-2xl border border-amber-200 bg-white p-6"><h3 className="font-bold leading-7">{title}</h3><p className="mt-3 text-sm leading-8 text-zinc-600">{body}</p></article>)}</div>
            <Link href="/international/contact?inquiry=operations-365" className="mt-7 inline-flex min-h-12 items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-amber-400">Discuss 365-Day Fulfillment →</Link>
            <p className="mt-4 max-w-3xl text-xs leading-6 text-zinc-600">Operating days, cutoffs, same-day dispatch conditions, staffing and fees are agreed for each project. 365-day arrangements do not mean 24-hour operations or guaranteed delivery every day. Carrier schedules and destination conditions also apply.</p>
          </div>
        </section>

        {/* OSAKA LEAD TIME ADVANTAGE */}
        <section id="osaka-leadtime" aria-labelledby="leadtime-title" className="scroll-mt-24 bg-white py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-12">
            <div><p className="text-xs font-bold uppercase tracking-widest text-amber-700">The Osaka Advantage</p><h2 id="leadtime-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">A shorter path<br />to your customers.</h2><p className="mt-5 text-sm leading-8 text-zinc-600">Osaka is well positioned for next-day delivery to many destinations from Kyushu to Kanto. Combined with same-day dispatch under an agreed operating plan, this can reduce the time between an order and its arrival.</p><p className="mt-3 text-sm leading-8 text-zinc-600">Earlier arrival can help customers feel reassured and improve their purchasing experience. Choose a dispatch base around your delivery destinations, even if your business or suppliers are based elsewhere.</p><ol className="mt-6 space-y-3">{[["Receive shipping instructions","Agree on volumes, packing requirements and order cutoffs."],["Dispatch from Osaka","Coordinate inspection, kitting, packing and same-day dispatch under the agreed conditions."],["Next-day routes from Kyushu to Kanto","Arrange delivery to eligible destinations using the selected carrier and service."]].map(([title,body],i)=><li key={title} className="rounded-xl border border-amber-200 bg-amber-50 p-4"><h3 className="text-sm font-bold">0{i+1} · {title}</h3><p className="mt-2 text-xs leading-6 text-zinc-600">{body}</p></li>)}</ol><Link href="/international/contact" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-amber-400">Discuss Delivery Times &amp; Dispatch →</Link></div>
            <figure className="min-w-0"><Image src="/images/osaka-leadtime-map-en.png" alt="Illustrative routes from Osaka to Kyushu, Chugoku, Shikoku, Chubu and Kanto" width={2400} height={2000} sizes="(max-width: 1024px) 100vw, 50vw" className="h-auto w-full rounded-2xl border border-amber-200" /><figcaption className="mt-3 text-xs leading-6 text-zinc-600">Illustrative routes, not guaranteed delivery coverage. Transit times vary by carrier, destination, cutoff, service and island restrictions. Road conditions, weather and peak demand may cause delays.</figcaption></figure>
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
                <SectionImage src="section-japan-fulfillment.png" alt="Receiving inventory and preparing domestic fulfillment in Japan" />
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

            <p className="mt-5 text-center text-xs text-zinc-500">Images illustrate our services.</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-7"
                >
                  <img src={`/images/${service.image}`} alt={`${service.title} illustration`} width={480} height={320} loading="lazy" className="mb-5 aspect-[3/2] w-full rounded-2xl object-cover" />
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

                <SectionImage src="section-logistics-team.png" alt="Hands-on coordination between a customer and logistics team" dark />
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

        {/* EDUCATIONAL MATERIALS */}
        <section id="educational-logistics" aria-labelledby="educational-title" className="scroll-mt-24 bg-zinc-950 py-16 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-12">
            <div><p className="text-xs font-bold uppercase tracking-widest text-amber-300">Educational Materials</p><h2 id="educational-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Focus on your classes.<br />We prepare and ship the materials.</h2><p className="mt-5 text-sm leading-8 text-white/75">From course workbooks to brochures, we can coordinate storage, collation, folded inserts, kitting and packing. Ship to individual learners or distribute specified quantities to schools and learning centers.</p><Link href="/international/contact?inquiry=education" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-amber-400">Discuss Educational Materials →</Link></div>
            <div><SectionImage src="section-education-kitting.png" alt="Collating course workbooks and preparing learning kits" dark /></div>
          </div>
        </section>

        {/* COSMETICS & CHARTER TRANSPORT */}
        <section aria-labelledby="specialist-services-title" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Specialist Services</p>
            <h2 id="specialist-services-title" className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Detailed product handling.<br />Transport across Japan.</h2>
            <div className="mt-9 grid gap-6 lg:grid-cols-2">
              <article id="beauty-logistics" className="scroll-mt-24 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
<SectionImage src="case-inspection.png" alt="Cosmetic container inspection and kitting" />
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700">Cosmetics &amp; Beauty</p>
                <h3 className="mt-4 text-2xl font-bold leading-tight">Inspection, kitting and dispatch for beauty products.</h3>
                <p className="mt-4 text-sm leading-8 text-zinc-600">Our Osaka facility holds cosmetics manufacturing license 27CZ201072. We support cosmetics and beauty businesses with container and product inspection, quantity and SKU checks, set assembly, gift kits, packing and domestic shipping.</p>
                <p className="mt-3 text-sm leading-8 text-zinc-600">Share the products, quantity, inspection criteria and deadline. We coordinate the requested work with our operations team and confirm availability within the license scope.</p>
                <Link href="/international/contact?inquiry=beauty" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-amber-400">Discuss Cosmetics &amp; Beauty Work →</Link>
              </article>
              <article id="charter-transport" className="scroll-mt-24 rounded-3xl bg-zinc-950 p-6 text-white sm:p-8">
                <figure className="mb-6 overflow-hidden rounded-2xl"><Image src="/images/charter-transport.png" alt="Illustration of light, medium and large freight vehicles" width={1536} height={1024} sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[16/9] w-full object-cover" /><figcaption className="pt-2 text-xs leading-6 text-white/60">Transport illustration; vehicles shown are not a GAMI-owned fleet.</figcaption></figure>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-300">Nationwide Charter Transport</p>
                <h3 className="mt-4 text-2xl font-bold leading-tight">The right vehicle for your shipment, across Japan.</h3>
                <p className="mt-4 text-sm leading-8 text-white/75">Our Type I Freight Forwarding Business registration and nationwide carrier network support charter transport arrangements, from light vehicles to 2-ton, 4-ton and large trucks. One-off and regular transport requests are welcome.</p>
                <p className="mt-3 text-sm leading-8 text-white/75">Tell us the pickup and delivery locations, dates, cargo dimensions and weight, preferred vehicle and loading conditions. Current freight rates and target budgets are welcome but optional.</p>
                <p className="mt-3 text-xs leading-6 text-white/60">Availability and rates are confirmed after reviewing the route, schedule, vehicle equipment and handling requirements.</p>
                <Link href="/international/contact?inquiry=transport" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-amber-400">Request a Transport Quote →</Link>
              </article>
            </div>
          </div>
        </section>

        <section id="packaging-materials" aria-labelledby="packaging-title" className="scroll-mt-24 bg-amber-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
<SectionImage src="section-cardboard-supply.png" alt="Plain corrugated cartons in different sizes and specifications" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">Competitive Cardboard Box Pricing</p>
            <h2 id="packaging-title" className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Lower packaging costs.<br />Box-only orders welcome.</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600">Our nearby cardboard supplier helps us offer competitive prices. Share the total of three dimensions, strength, color and lot size. A current unit price and product or supplier URL can help us compare specifications, if available.</p>
            <p className="mt-4 font-bold text-amber-900">Delivery area: Osaka and neighboring prefectures.</p>
            <p className="mt-2 text-xs leading-6 text-zinc-600">Delivery availability and pricing depend on location, specifications and order quantity.</p>
            <Link href="/international/contact?inquiry=cardboard" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-amber-400">Request a Cardboard Box Quote →</Link>
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

        {/* CUSTOMER CASE STUDIES */}
        <section id="case-studies" aria-labelledby="cases-heading" className="scroll-mt-24 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Customer Stories</p>
            <h2 id="cases-heading" className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">Practical changes.<br />Better logistics.</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600">Anonymized examples of how GAMI helps customers rethink dispatch locations, manual operations and daily communication.</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p id="case-slide-help" className="text-xs leading-6 text-zinc-500">Swipe or scroll horizontally to explore →</p>
              <nav aria-label="Select a customer story" className="flex gap-2">
                {caseStudies.map((item,index)=><a key={item.id} href={`#case-${item.id}`} aria-label={`Story ${index+1}: ${item.industry}`} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-xs font-bold hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">0{index+1}</a>)}
              </nav>
            </div>
            <div role="region" aria-label="Five customer stories" aria-describedby="case-slide-help" tabIndex={0} className="mt-5 flex snap-x snap-mandatory items-start gap-5 overflow-x-auto overscroll-x-contain rounded-2xl pb-6 motion-safe:scroll-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">
              {caseStudies.map((item,index)=>(
                <article id={`case-${item.id}`} key={item.id} className="w-[88%] min-w-0 shrink-0 snap-start scroll-mt-28 overflow-hidden rounded-3xl border border-zinc-200 bg-white sm:w-[65%] lg:w-[48%]">
                  <figure><Image src={item.image} alt={item.alt} width={1536} height={1024} sizes="(max-width: 640px) 88vw, (max-width: 1024px) 65vw, 48vw" className="aspect-[3/2] w-full object-cover" /><figcaption className="px-6 pt-2 text-[11px] text-zinc-500">Illustrative image</figcaption></figure>
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-bold tracking-widest text-amber-700">CASE 0{index+1}</p>
                    <p className="mt-2 text-xs font-semibold leading-6 text-zinc-500">{item.industry}</p>
                    <h3 className="mt-3 text-xl font-bold leading-8">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-600">{item.summary}</p>
                    <details className="group mt-5 border-t border-zinc-200 pt-3"><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-amber-800 [&::-webkit-details-marker]:hidden">Read the story<span aria-hidden="true" className="text-xl group-open:rotate-45">+</span></summary><div className="mt-3 space-y-4">{item.paragraphs.map(p=><p key={p} className="text-sm leading-8 text-zinc-600">{p}</p>)}</div></details>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-3 text-xs leading-6 text-zinc-500">Customer and brand names are withheld. Delivery times and operating arrangements relate to each case; availability depends on destination, carrier and agreed conditions.</p>
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

                  <div id="access" className="mt-5 scroll-mt-24"><h4 className="text-sm font-bold">Location &amp; Access</h4><iframe title="GAMI OSAKA BASE location" src="https://www.google.com/maps?q=1-8-18+Dainichicho+Moriguchi+Osaka+Japan&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-3 h-[240px] w-full rounded-xl border-0" /><a href="https://www.google.com/maps/search/?api=1&query=1-8-18+Dainichicho+Moriguchi+Osaka+Japan" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center text-sm font-bold text-amber-800 underline underline-offset-4">Open Google Maps ↗</a></div>
                  <Link
                    href="/#warehouse"
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
                    src="/images/warehouse-interior-nesting.png"
                    alt="Edited illustration of warehouse operations with blue nesting racks and a brown mezzanine"
                    width={1024}
                    height={1024}
                    className="mb-3 aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
                  />

                  <p className="mb-5 text-xs leading-6 text-white/60">Edited image illustrating the intended warehouse layout.</p>

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

        {/* OPERATIONS GALLERY */}
        <section aria-labelledby="gallery-heading" className="bg-zinc-100 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Operations Gallery</p>
            <h2 id="gallery-heading" className="mt-4 text-3xl font-bold sm:text-5xl">A closer look at operations.</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                ["warehouse-interior-nesting.png", "Warehouse Layout (Illustration)"],
                ["warehouse-operations-clean.png", "Packing Workspace"],
                ["warehouse-dispatch-clean.png", "Dispatch Preparation"],
                ["warehouse-processing-clean.png", "Carton Assembly"],
              ].map(([filename,caption])=>(
                <figure key={filename} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                  <Image src={`/images/${filename}`} alt={caption} width={900} height={675} sizes="(max-width: 1024px) 50vw, 25vw" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="px-4 py-4 text-xs font-semibold leading-6 sm:text-sm">{caption}</figcaption>
                </figure>
              ))}
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

            <div className="mx-auto max-w-3xl"><SectionImage src="section-logistics-consultation.png" alt="A practical conversation about packing and logistics requirements" dark /></div>
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
