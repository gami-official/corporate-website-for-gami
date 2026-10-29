
"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function ConversionTracker() {
  useEffect(() => {
    const key = "gami_international_contact_success"

    try {
      const submitted = sessionStorage.getItem(key)

      if (submitted !== "1") {
        return
      }

      // Remove first to prevent duplicate tracking
      sessionStorage.removeItem(key)

      window.dataLayer = window.dataLayer || []

      window.dataLayer.push({
        event: "gami_contact_submit",
        form_language: "en",
        form_name: "international_contact",
      })
    } catch (error) {
      console.error("Conversion tracking failed", error)
    }
  }, [])

  return null
}
