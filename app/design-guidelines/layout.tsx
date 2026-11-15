import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Guidelines",
  description:
    "Web design guidelines and best practices for creating beautiful and functional interfaces.",
  alternates: { canonical: "/design-guidelines" },
};

export default function DesignGuidelinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
