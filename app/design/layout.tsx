import type { Metadata } from "next";

const title = "Design & Experiments";
const description =
  "Design experiments, guidelines, and interface studies, small tools built to explore interaction and UI ideas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/design" },
  openGraph: { title, description, url: "/design" },
};

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
