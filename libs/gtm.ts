type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer

export const GTM_ID = process.env.GA4_MEASUREMENT_ID;

export const pageview = (url: string, content: string, page: string) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
      content_category: content,
      page_category: page
    })
  } else {
    console.log({
      event: "pageview",
      page: url,
    })
  }
}