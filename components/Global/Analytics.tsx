"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { pageview } from "../../libs/gtm"

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      return pageview(pathname)
    }
  }, [pathname, searchParams])

  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
    return null
  }

}