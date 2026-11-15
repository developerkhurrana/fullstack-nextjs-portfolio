import type { Metadata } from "next";

const title = "About";
const description =
  "Full-Stack Developer and UI/UX Designer in Jaipur who designs and ships production e-commerce end to end, from a B2B platform on Next.js, TypeScript, and MongoDB to Shopify D2C storefronts and the marketing behind them.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
