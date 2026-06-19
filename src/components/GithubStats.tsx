import { } from "lucide-react";            // remove Github from here
import { GithubIcon } from "@/components/Icons";

import { profile } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";

export function GithubStats() {
  const user = profile.handles.github;
  const theme = "tokyonight";

  return (
    <section id="github" className="section-pad">
      <div className="container-page">
        <SectionHeader
          index="04 / github"
          title="github_activity"
          blurb="Live contribution graph and language breakdown, pulled from GitHub."
        />

        <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <div className="code-window p-5">
            <a
              href={`https://github.com/${user}`}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <img
                alt={`${user} GitHub contribution streak`}
                loading="lazy"
                className="mx-auto w-full max-w-2xl"
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=${theme}&hide_border=true&background=222831`}
              />
            </a>
          </div>
          <div className="code-window p-5">
            <a
              href={`https://github.com/${user}`}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <img
                alt={`${user} top languages`}
                loading="lazy"
                className="mx-auto w-full max-w-md"
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=${theme}&hide_border=true&bg_color=222831`}
              />
            </a>
          </div>
        </div>

        <div className="mt-5 code-window p-5">
          <a href={`https://github.com/${user}`} target="_blank" rel="noreferrer" className="block">
            <img
              alt={`${user} GitHub stats`}
              loading="lazy"
              className="mx-auto w-full max-w-3xl"
              src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=${theme}&hide_border=true&bg_color=222831&include_all_commits=true&count_private=true`}
            />
          </a>
        </div>

        <div className="mt-6 text-center">
          <a
            href={`https://github.com/${user}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-4 py-2 font-mono text-xs text-foreground transition-colors hover:bg-secondary"
          >
            <GithubIcon className="h-4 w-4" />
            github.com/{user}
          </a>
        </div>
      </div>
    </section>
  );
}
