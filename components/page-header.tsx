import { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#b2532e]">
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl font-normal tracking-tight text-[#1b1714] sm:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-[#56504a]">
          {description}
        </p>
      )}
    </div>
  );
}
