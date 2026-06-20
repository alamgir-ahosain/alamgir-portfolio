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
const FILTERS: Filter[] = ["All", "Software","Academic", "Hardware"];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openKey, setOpenKey] = useState<string | null>(null);
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
          blurb="A collection of my software, academic, and hardware projects"
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
                className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border-strong bg-surface text-foreground hover:bg-secondary"
                  }`}
              >
                <span>{f === "All" ? "All Projects" : f}</span>
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] ${active ? "bg-primary-foreground/20" : "bg-surface-elevated text-muted-foreground"
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
            {visible.map((p) => {
              const isOpen = openKey === p._key;
              return (
                <article
                  key={p._key}
                  onClick={() => setOpenKey(isOpen ? null : p._key)}
                  className={`group flex cursor-pointer flex-col overflow-hidden rounded-lg border bg-surface shadow-sm transition-all ${isOpen ? "border-primary" : "border-border hover:border-border-strong"
                    }`}
                >
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <header className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="mb-1 font-mono text-xs text-syntax-comment">{p.date}</div>
                        <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                      </div>
                      <span className="shrink-0 rounded-full border border-border bg-surface-elevated px-3 py-1 font-mono text-[11px] text-muted-foreground">
                        {p._cat}
                      </span>
                    </header>

                    <p
                      className={`text-pretty text-sm leading-relaxed text-muted-foreground ${isOpen ? "" : "line-clamp-2 group-hover:line-clamp-none"
                        }`}
                    >
                      {p.description}
                    </p>

                    <div
                      className={`grid transition-all duration-300 ${isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100"
                        }`}
                    >
                      <div className="flex min-h-1 flex-col gap-5 overflow-hidden">
                        {p.highlights.length > 0 && (
                          <ul className="flex flex-col gap-1">
                            {p.highlights.map((h) => (
                              <li
                                key={h}
                                className="flex items-start gap-2 font-mono text-[13px] text-muted-foreground"
                              >
                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}
                        <ul className="flex flex-wrap gap-1.5">
                          {p.tech.map((t) => (
                            <li
                              key={t}
                              className="rounded-full border border-border bg-surface-elevated px-2.5 py-0.5 font-mono text-[11px] text-syntax-fn"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>



                        <div className="flex flex-wrap gap-2 border-t border-border pt-3">
                          {p.links.map((l) => (
                            <a
                              key={l.label}
                              href={l.url}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 rounded-md border border-border-strong bg-surface px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:bg-secondary"
                            >
                              {l.label}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
