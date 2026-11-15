import type { Metadata } from "next";

const title = "Ekohum Case Study";
const description =
  "Case study: Ekohum, a D2C ethnic-wear brand on Shopify, storefront design and build plus the social media marketing that grew its engagement and following.";

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
