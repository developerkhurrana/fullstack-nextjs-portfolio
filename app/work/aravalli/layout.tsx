import type { Metadata } from "next";

const title = "Aravalli Designs Case Study";
const description =
  "Case study: a custom B2B commerce platform (Ethnics by Aravalli) and a Shopify D2C brand (Ekohum) for Aravalli Designs, designed, built, and grown end to end.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/aravalli" },
  openGraph: {
    title,
    description,
    url: "/work/aravalli",
    images: ["/shots/ethnics.jpg"],
  },
};

export default function AravalliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
