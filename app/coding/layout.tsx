import type { Metadata } from "next";

const title = "Code & Builds";
const description =
  "Full-stack engineering: custom e-commerce platforms, Shopify storefronts, and production apps built with Next.js, TypeScript, and MongoDB, from live client work to builds that sharpened the craft.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/coding" },
  openGraph: { title, description, url: "/coding" },
};

export default function CodingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
