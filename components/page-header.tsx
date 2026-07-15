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
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}
