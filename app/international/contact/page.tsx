"use client"

import { FormEvent, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const inputClass =
  "w-full min-w-0 rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base text-zinc-950 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"

const services = [
  "Warehousing & Inventory Storage",
  "E-commerce Fulfillment & Domestic Shipping",
  "One-Time / Bulk Shipping Project",
  "PR Kits & Media Distribution",
  "Inspection, Labeling & Kitting",
  "Japan Market Entry Logistics",
  "Other / Not Sure Yet",
]

export default function InternationalContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setError("")

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mzdkjgwj", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        try {
          sessionStorage.setItem("gami_international_contact_success", "1")
        } catch {
          // Continue to the thank-you page even if storage is unavailable.
        }
        window.location.assign("/international/thank-you")
        return
      }

      setError("We could not send your inquiry. Please check your details and try again.")
    } catch {
      setError("We could not send your inquiry. Please try again in a moment.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-50 text-zinc-950">
      <Header />
      <main>
        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 sm:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Contact GAMI
            </p>
            <h1 className="mt-4 text-[clamp(2rem,8vw,3.5rem)] font-bold leading-[1.12] tracking-[-0.04em]">
              Let’s Discuss Your
              <br /> Japan Logistics Project.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">
              From one-time shipping campaigns to ongoing fulfillment, tell us what
              you need in Japan. Our Osaka-based team will review your inquiry.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-20">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-10">
            <div className="mb-8">
              <h2 className="text-xl font-bold sm:text-2xl">Tell Us About Your Project</h2>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Fields marked * are required. Estimates are fine if your plans
                are still taking shape.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="inquiry_source" value="International Website" />

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-bold">Company Name</label>
                <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} placeholder="Your company name" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold">Your Name *</label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold">Business Email *</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="name@company.com" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="country" className="mb-2 block text-sm font-bold">Country / Region *</label>
                  <input id="country" name="country" type="text" required autoComplete="country-name" className={inputClass} placeholder="e.g. United States" />
                </div>
                <div>
                  <label htmlFor="website" className="mb-2 block text-sm font-bold">Company Website</label>
                  <input id="website" name="website" type="url" inputMode="url" className={inputClass} placeholder="https://" />
                </div>
              </div>

              <fieldset>
                <legend className="mb-3 block text-sm font-bold">What Do You Need Help With?</legend>
                <p className="mb-3 text-xs text-zinc-500">Select all that apply.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <label key={service} className="flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border border-zinc-200 p-3.5 text-sm leading-6 transition hover:border-amber-400">
                      <input type="checkbox" name="services" value={service} className="mt-1 h-4 w-4 shrink-0 accent-amber-600" />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="project_type" className="mb-2 block text-sm font-bold">Project Type</label>
                  <select id="project_type" name="project_type" defaultValue="" className={inputClass}>
                    <option value="">Select project type</option>
                    <option value="One-time project">One-time project</option>
                    <option value="Ongoing fulfillment">Ongoing fulfillment</option>
                    <option value="Both / undecided">Both / undecided</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="product_category" className="mb-2 block text-sm font-bold">Product Category</label>
                  <select id="product_category" name="product_category" defaultValue="" className={inputClass}>
                    <option value="">Select a category</option>
                    <option>Fashion &amp; Apparel</option>
                    <option>Beauty &amp; Cosmetics</option>
                    <option>Consumer Goods</option>
                    <option>Food Products</option>
                    <option>E-commerce</option>
                    <option>Promotional / PR Materials</option>
                    <option>Trading Cards / Collectibles</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="monthly_orders" className="mb-2 block text-sm font-bold">Expected Monthly Orders</label>
                  <select id="monthly_orders" name="monthly_orders" defaultValue="" className={inputClass}>
                    <option value="">Select estimated volume</option>
                    <option value="Under 100">Under 100 orders</option>
                    <option value="100-500">100 – 500 orders</option>
                    <option value="500-1000">500 – 1,000 orders</option>
                    <option value="1000-5000">1,000 – 5,000 orders</option>
                    <option value="5000+">5,000+ orders</option>
                    <option value="One-time project">One-time project (not monthly)</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="total_shipments" className="mb-2 block text-sm font-bold">One-Time Project Quantity</label>
                  <input id="total_shipments" name="total_shipments" type="text" className={inputClass} placeholder="e.g. 500 / 25,000 parcels" />
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="mb-2 block text-sm font-bold">Preferred Start Date / Timeline</label>
                <input id="timeline" name="timeline" type="text" className={inputClass} placeholder="e.g. January 2027 / Flexible" />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold">How Can We Help? *</label>
                <textarea id="message" name="message" required className={`${inputClass} min-h-40 resize-y`} placeholder="Tell us about your products, where they will be shipped from, expected quantities, delivery destinations in Japan, and any special handling requirements." />
              </div>

              <p className="text-xs leading-6 text-zinc-500">
                Import procedures, customs clearance, shipping schedules and pricing
                are reviewed individually based on your project.
              </p>

              {error && <p role="alert" aria-live="polite" className="rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</p>}

              <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="min-h-14 w-full rounded-full bg-amber-500 px-7 py-4 text-base font-bold text-zinc-950 shadow-sm transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 disabled:cursor-not-allowed disabled:opacity-60">
                {isSubmitting ? "Sending your inquiry..." : "Send Your Inquiry"}
              </button>
            </form>

            <p className="mt-5 text-center text-xs leading-6 text-zinc-500">
              Your information will be used to respond to your inquiry.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/international" className="text-sm font-bold text-zinc-600 transition hover:text-amber-600">
              ← Back to Japan Fulfillment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
