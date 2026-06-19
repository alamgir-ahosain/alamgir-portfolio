import { useEffect, useState } from "react";
import { Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";




const LINES = [
  { cmd: "whoami", out: "alamgir hosain" },
  { cmd: "cat role.txt", out: "backend developer · java & spring boot" },
  // { cmd: "cat focus.txt", out: "modern engineering practices · devops" },
];

function useTypewriter() {
  const [lineIdx, setLineIdx] = useState(0);
  const [phase, setPhase] = useState<"cmd" | "out" | "pause">("cmd");
  const [text, setText] = useState("");

  useEffect(() => {
    if (lineIdx >= LINES.length) return;
    const target = phase === "cmd" ? LINES[lineIdx].cmd : LINES[lineIdx].out;
    if (text.length < target.length) {
      const t = setTimeout(() => setText(target.slice(0, text.length + 1)), phase === "cmd" ? 55 : 22);
      return () => clearTimeout(t);
    }
    if (phase === "cmd") {
      const t = setTimeout(() => {
        setPhase("out");
        setText("");
      }, 250);
      return () => clearTimeout(t);
    }
    if (phase === "out") {
      const t = setTimeout(() => {
        setPhase("pause");
      }, 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((i) => i + 1);
      setPhase("cmd");
      setText("");
    }, 200);
    return () => clearTimeout(t);
  }, [text, phase, lineIdx]);

  return { lineIdx, phase, text };
}

function Prompt() {
  return (
    <span>
      <span className="text-syntax-string">alamgir@linux</span>
      <span className="text-foreground">:</span>
      <span className="text-syntax-fn">~</span>
      <span className="text-foreground"># </span>
    </span>
  );
}

export function Hero() {
  const { lineIdx, phase, text } = useTypewriter();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="container-page relative grid gap-10 pt-16 pb-20 md:grid-cols-[1.1fr_1fr] md:gap-12 md:pt-24 md:pb-28">
        <div className="flex flex-col justify-center">
          {/* <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> available for backend roles · summer 2026
          </p> */}

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            <span className="text-foreground">{profile.name}</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {/* <span className="text-syntax-comment font-mono">{"// "}</span> */}
            <b>Computer Science</b> {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="h-4 w-4" />
             Download Resume
            </a>
          </div>

          {/* <div className="mt-8 flex items-center justify-center gap-4 text-muted-foreground">
            <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-foreground">
              <Mail className="h-5 w-5" />
            </a>
          </div> */}
        </div>
          {/* Linux terminal window */}
        <div className="code-window">
          <div className="code-window-header">
            {/* <span className="traffic-light bg-destructive" /> */}
            {/* <span className="traffic-light bg-syntax-var" /> */}
            {/* <span className="traffic-light bg-accent" /> */}
            <span className="ml-2">alamgir@linux: ~ — bash</span>
          </div>
          <pre className="overflow-hidden p-5 font-mono text-sm leading-relaxed">
            {LINES.slice(0, lineIdx).map((l, i) => (
              <div key={i}>
                <div>
                  <Prompt />
                  <span className="text-foreground">{l.cmd}</span>
                </div>
                <div className="text-syntax-string">{l.out}</div>
              </div>
            ))}
            {lineIdx < LINES.length && (
              <div>
                <div>
                  <Prompt />
                  <span className="text-foreground">{phase === "cmd" ? text : LINES[lineIdx].cmd}</span>
                  {phase === "cmd" && <span className="caret" />}
                </div>
                {phase !== "cmd" && (
                  <div className="text-syntax-string">
                    {text}
                    {phase === "out" && <span className="caret" />}
                  </div>
                )}
              </div>
            )}
            {lineIdx >= LINES.length && (
              <div>
                <Prompt />
                <span className="caret" />
              </div>
            )}
          </pre>
        </div>
      </div>
    </section>
  );
}