import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects, type ProjectCategory } from "@/data/projects";
import { SectionHeader } from "./SectionHeader";

const ACCENT_DOT: Record<string, string> = {
  primary: "bg-primary",
  accent: "bg-accent",
  keyword: "bg-syntax-keyword",
  var: "bg-syntax-var",
};

type Filter = "All" | ProjectCategory;
const FILTERS: Filter[] = ["All", "Academic", "Software", "Hardware"];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const expanded = projects.flatMap((p) =>
    p.categories.map((cat) => ({ ...p, _cat: cat, _key: `${p.title}-${cat}` })),
  );
  const visible =
    filter === "All" ? expanded : expanded.filter((p) => p._cat === filter);

  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <SectionHeader
          index="03 — Projects"
          title="Projects"
          blurb="Selected backend work — APIs, real-time systems, and the engineering practices around them."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => {
            const active = filter === f;
            const count =
              f === "All"
                ? expanded.length
                : expanded.filter((p) => p._cat === f).length;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border-strong bg-surface text-foreground hover:bg-secondary"
                }`}
              >
                <span>{f === "All" ? "All Projects" : f}</span>
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] ${
                    active ? "bg-primary-foreground/20" : "bg-surface-elevated text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border bg-surface p-8 text-center font-mono text-sm text-muted-foreground">
            No {filter.toLowerCase()} projects yet — check back soon.
          </p>
        ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {visible.map((p) => (
            <article key={p._key} className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-colors hover:border-border-strong">
              {/* <div className="aspect-[16/8] w-full overflow-hidden border-b border-border bg-surface-elevated">
                <img
                  src={p.cover}
                  alt={`${p.title} cover`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div> */}
              <div className="flex flex-1 flex-col gap-5 p-6">
                <header>
                  <div className="mb-2 font-mono text-xs text-syntax-comment">{p.date}</div>
                  <h3 className="text-2xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </header>

                <ul className="space-y-1.5 font-mono text-sm">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-muted-foreground">
                      <span className="text-syntax-string">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-surface-elevated px-2 py-0.5 font-mono text-[11px] text-syntax-fn"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border-strong bg-surface px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:bg-secondary"
                    >
                      {l.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
