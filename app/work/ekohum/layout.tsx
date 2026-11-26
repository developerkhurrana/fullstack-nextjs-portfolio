import type { Metadata } from "next";

const title = "Ekohum Shopify Case Study";
const description =
  "Shopify case study: Ekohum, a women's ethnic-wear brand. Theme customization in Liquid, a 260+ style catalog with collections and filters, product pages built to convert, and on-store SEO.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/ekohum" },
  openGraph: {
    title,
    description,
    url: "/work/ekohum",
    images: ["/shots/ekohum.jpg"],
  },
};

export default function EkohumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
