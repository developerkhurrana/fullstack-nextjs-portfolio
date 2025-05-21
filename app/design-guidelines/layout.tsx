import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Guidelines | Kshitij Khurrana",
  description:
    "Web design guidelines and best practices for creating beautiful and functional interfaces.",
};

export default function DesignGuidelinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
