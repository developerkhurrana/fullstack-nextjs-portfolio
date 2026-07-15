import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/developerkhurrana",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kshitij-khurrana",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:thekshitijkhurrana@gmail.com",
    icon: Mail,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="text-sm text-amber-400/80">Let&apos;s build something</p>
            <a
              href="mailto:thekshitijkhurrana@gmail.com"
              className="group mt-3 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              thekshitijkhurrana@gmail.com
              <ArrowUpRight className="h-5 w-5 text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-400" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-white/25 hover:text-white"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Kshitij Khurrana. All rights reserved.</p>
          <Link
            href="/design-guidelines"
            className="transition-colors hover:text-neutral-300"
          >
            Design Guidelines
          </Link>
        </div>
      </div>
    </footer>
  );
}
