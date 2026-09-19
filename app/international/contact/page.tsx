import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Contact GAMI | Japan Fulfillment & 3PL",
  description:
    "Contact GAMI about warehousing, fulfillment, inspection, packing and nationwide shipping services in Japan.",
}

export default function InternationalContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />

      <main>
        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 sm:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Contact GAMI
            </p>

            <h1 className="mt-4 text-[2.2rem] font-bold leading-[1.1] tracking-[-0.045em] sm:text-5xl">
              Start Your Japan
              <br className="sm:hidden" /> Operations.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
              Tell us about your brand, products and plans for Japan.
              Our team will review your requirements and contact you.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-20">
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm sm:p-10">
            <form
              action="https://formspree.io/f/mzdkjgwj"
              method="POST"
              acceptCharset="UTF-8"
              encType="application/x-www-form-urlencoded"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_next"
                value="https://gamigami.net/international"
              />

              <input
                type="hidden"
                name="inquiry_source"
                value="International Website"
              />

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Company Name
                </label>
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Your Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Business Email *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  placeholder="name@company.com"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Country / Region *
                  </label>
                  <input
                    name="country"
                    type="text"
                    required
                    autoComplete="country-name"
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    placeholder="e.g. United States"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Company Website
                  </label>
                  <input
                    name="website"
                    type="url"
                    inputMode="url"
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    placeholder="https://"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Product Category
                </label>
                <select
                  name="product_category"
                  defaultValue=""
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Fashion & Apparel">
                    Fashion & Apparel
                  </option>
                  <option value="Beauty & Cosmetics">
                    Beauty & Cosmetics
                  </option>
                  <option value="Consumer Goods">
                    Consumer Goods
                  </option>
                  <option value="Food Products">
                    Food Products
                  </option>
                  <option value="E-commerce">
                    E-commerce
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Expected Monthly Orders
                </label>
                <select
                  name="monthly_orders"
                  defaultValue=""
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                >
                  <option value="" disabled>
                    Select estimated volume
                  </option>
                  <option value="Under 100">Under 100 orders</option>
                  <option value="100-500">100 – 500 orders</option>
                  <option value="500-1000">500 – 1,000 orders</option>
                  <option value="1000-5000">1,000 – 5,000 orders</option>
                  <option value="5000+">5,000+ orders</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  How Can We Help? *
                </label>
                <textarea
                  name="message"
                  required
                  className="min-h-40 w-full resize-y rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  placeholder="Tell us about your products, inventory, expected launch date and logistics requirements in Japan."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-amber-500 px-7 py-4 text-base font-bold text-white shadow-lg transition hover:bg-amber-400"
              >
                Send Inquiry
              </button>
            </form>

            <p className="mt-5 text-center text-xs leading-6 text-zinc-500">
              Your information will only be used to respond to your inquiry.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/international"
              className="text-sm font-bold text-zinc-600 transition hover:text-amber-600"
            >
              ← Back to Japan Fulfillment
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
