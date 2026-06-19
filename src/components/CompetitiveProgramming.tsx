import { ExternalLink } from "lucide-react";
import { cpStats } from "@/data/cp";
import { SectionHeader } from "./SectionHeader";
import { CodeForcesIcon, CodeChefIcon, VjudgeIcon } from "@/components/Icons";

const ACCENT = ["text-syntax-fn", "text-syntax-string", "text-syntax-var"];

const PLATFORM_ICONS = {
  Codeforces: CodeForcesIcon,
  CodeChef: CodeChefIcon,
  VJudge: VjudgeIcon,
} as const;

export function CompetitiveProgramming() {
  return (
    <section id="cp" className="section-pad">
      <div className="container-page">
        <SectionHeader
          index="04 — competitive"
          title="Competitive Programming"
          blurb="Years of practice across the big online judges - algorithms, data structures, and contest math."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cpStats.map((s, i) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-strong"
            >
              <div className="flex items-start justify-between">
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <div className="mt-4 font-mono text-xs text-muted-foreground">{s.platform}</div>
              <div className={`mt-1 font-mono text-3xl font-semibold ${ACCENT[i]}`}>{s.solved}</div>
              <div className="mt-1 text-xs text-syntax-comment">solved problems</div>
              <div className="mt-4 font-mono text-xs text-foreground">@{s.handle}</div>
            </a>
          ))}
      </div>
    </div>
    </section >
  );
}