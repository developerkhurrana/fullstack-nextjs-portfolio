// Single source of truth for the canonical site URL and shared SEO copy.
// Override with NEXT_PUBLIC_SITE_URL once a custom domain is live.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kshitijkhurrana.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Kshitij Khurrana";

export const SITE_TITLE =
  "Kshitij Khurrana, Shopify & Full-Stack Developer";

export const SITE_DESCRIPTION =
  "Shopify and full-stack developer in Jaipur. I build Shopify storefronts for apparel brands, end-to-end web apps in Next.js and TypeScript, and the UI/UX and graphic design behind them.";
