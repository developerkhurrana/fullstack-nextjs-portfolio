import type { Metadata } from "next";

const title = "Sparkframe AI Case Study";
const description =
  "AI SaaS case study: Sparkframe, an AI product-photography tool I designed, built, and ship solo. Next.js and TypeScript front end, an AI image pipeline, and accounts and billing, end to end.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/sparkframe" },
  openGraph: {
    title,
    description,
    url: "/work/sparkframe",
    images: ["/shots/sparkframe.jpg"],
  },
};

export default function SparkframeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
