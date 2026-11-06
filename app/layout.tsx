import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Chat } from "@/components/ui/chat";
import { cn } from "@/lib/utils";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kshitij Khurrana, Full-Stack Developer",
  description:
    "Full-Stack Developer who designs and ships production e-commerce end to end.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        display.variable
      )}
    >
      <body className="min-h-screen overflow-x-hidden bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Chat />
        </ThemeProvider>
      </body>
    </html>
  );
}
