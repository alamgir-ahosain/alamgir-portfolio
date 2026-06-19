import { useEffect, useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import { certifications, type Certification } from "@/data/certifications";
import { SectionHeader } from "./SectionHeader";

export function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="certifications" className="section-pad">
      <div className="container-page">
        <SectionHeader
          index="07 / learning"
          title="certifications"
          blurb="Short courses I've completed to keep sharpening fundamentals. Click any card to enlarge."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-border-strong"
            >
              <button
                type="button"
                onClick={() => setActive(c)}
                className="overflow-hidden rounded-md border border-border bg-background/40"
                aria-label={`Enlarge ${c.title}`}
              >
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-32 w-full object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-32 items-center justify-center">
                    <Award className="h-8 w-8 text-syntax-var" />
                  </div>
                )}
              </button>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-md border border-border-strong bg-background px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:bg-secondary"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  visit certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg border border-border bg-surface p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 rounded-md bg-background/70 p-1.5 text-foreground hover:bg-secondary"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            {active.image && (
              <img
                src={active.image}
                alt={active.title}
                className="mx-auto max-h-[70vh] w-auto rounded-md object-contain"
              />
            )}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{active.title}</h3>
                <p className="font-mono text-xs text-muted-foreground">{active.issuer}</p>
              </div>
              {active.url && (
                <a
                  href={active.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-background px-3 py-1.5 font-mono text-xs text-foreground hover:bg-secondary"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  view credential
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
