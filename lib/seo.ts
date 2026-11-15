// Single source of truth for the canonical site URL and shared SEO copy.
// Override with NEXT_PUBLIC_SITE_URL once a custom domain is live.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kshitijkhurrana.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Kshitij Khurrana";

export const SITE_TITLE =
  "Kshitij Khurrana, Full-Stack Developer & UI/UX Designer";

export const SITE_DESCRIPTION =
  "Full-stack developer and UI/UX designer in Jaipur who designs, builds, and grows e-commerce end to end: custom B2B platforms, Shopify D2C storefronts, and the marketing behind them.";
