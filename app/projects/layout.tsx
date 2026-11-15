import type { Metadata } from "next";

const title = "Design & Visual Work";
const description =
  "Design and visual work: brand systems, interfaces, and storefront design for e-commerce and D2C brands.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title, description, url: "/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
