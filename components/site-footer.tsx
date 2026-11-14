import { Github, Linkedin, Mail } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917972816234?text=" +
  encodeURIComponent(
    "Hi Kshitij! I found your portfolio and would love to connect about a project or role."
  );

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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
    <footer className="border-t border-[#1b1714]/10 bg-[#faf8f4]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-10 py-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9a9087]">
              Contact
            </p>
            <a
              href="mailto:thekshitijkhurrana@gmail.com"
              className="group mt-4 inline-flex items-center gap-2 font-[family-name:var(--font-serif)] text-3xl font-normal tracking-tight text-[#1b1714] sm:text-4xl"
            >
              Let&apos;s build something{" "}
              <span className="italic text-[#b2532e]">good.</span>
            </a>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a
                href="mailto:thekshitijkhurrana@gmail.com"
                className="text-[#1b1714] underline decoration-[#1b1714]/20 underline-offset-4 transition-colors hover:decoration-[#1b1714]"
              >
                thekshitijkhurrana@gmail.com
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1b1714] px-4 py-2 text-sm font-medium text-[#faf8f4] tactile"
              >
                <WhatsAppIcon className="h-[16px] w-[16px]" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-[#1b1714]/15 text-[#6b635a] transition-colors hover:border-[#1b1714]/40 hover:text-[#1b1714]"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#1b1714]/10 py-6 text-xs text-[#9a9087] sm:flex-row">
          <p>© {new Date().getFullYear()} Kshitij Khurrana</p>
          <p className="font-mono uppercase tracking-[0.14em]">
            Jaipur, India
          </p>
        </div>
      </div>
    </footer>
  );
}
