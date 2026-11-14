import Image from "next/image";

/**
 * A tasteful browser-chrome frame around a live-site screenshot.
 * Keeps the editorial light system: warm chrome bar, mono URL pill.
 */
export function BrowserFrame({
  src,
  alt,
  label,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 760px",
  className = "",
}: {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-[#1b1714]/12 bg-white shadow-[0_24px_60px_-28px_rgba(27,23,20,0.4)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-[#1b1714]/[0.08] bg-[#f1ede6] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#dcd6cc]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#dcd6cc]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#dcd6cc]" />
        {label && (
          <span className="ml-3 truncate rounded-md bg-white/80 px-3 py-0.5 font-mono text-[11px] text-[#857b72]">
            {label}
          </span>
        )}
      </div>
      <div className="relative aspect-[1440/900] w-full bg-[#efece6]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </figure>
  );
}
