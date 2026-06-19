import { skillGroups } from "@/data/skills";
import { SectionHeader } from "./SectionHeader";

const ACCENTS = [
  "text-syntax-fn",
  "text-syntax-string",
  "text-syntax-keyword",
  "text-syntax-var",
  "text-syntax-number",
  "text-accent",
  "text-primary",
];

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-page">
        <SectionHeader
          index="02 / skills"
          title="skills"
          blurb="Tools and technologies I reach for, grouped by where they live in the stack."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, gi) => (
            <div key={g.category} className="rounded-lg border border-border bg-surface p-5">
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <h3 className="font-mono text-sm text-foreground">{g.category}</h3>
                <span className={`font-mono text-xs ${ACCENTS[gi % ACCENTS.length]}`}>
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
