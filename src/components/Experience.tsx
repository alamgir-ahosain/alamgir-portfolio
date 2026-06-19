import { Users } from "lucide-react";
import { timeline } from "@/data/experience";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-page">
        <SectionHeader
          index="06 — Volunteer Experience"
          title="Volunteer Experience"
          blurb="Community, leadership and impact work outside of code"
        />
        <ol className="relative space-y-8 border-l border-border pl-6">
          {timeline.map((item, i) => {
            const Icon = Users;
            const dotColor = "bg-accent";
            return (
              <li key={i} className="relative">
                <span
                  className={`absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full ${dotColor} ring-4 ring-background`}
                />
                <div className="rounded-lg border border-border bg-surface p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <h3 className="text-base font-semibold text-foreground">{item.role}</h3>
                    </div>
                    <span className="font-mono text-xs text-syntax-comment">{item.period}</span>
                  </div>
                  <div className="mt-1 font-mono text-xs text-syntax-fn">{item.org}</div>
                  <ul className="mt-3 space-y-1.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-syntax-string">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
