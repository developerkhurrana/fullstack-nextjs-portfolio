import type { Metadata } from "next";

const title = "Ethnics by Aravalli Case Study";
const description =
  "WordPress B2B case study: the website for Ethnics by Aravalli, a women's ethnic-wear manufacturer in Jaipur. A brand and catalog presence, a manufacturing showcase, SEO, and a wholesale-enquiry flow.";

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
