import { useState } from "react";
import { Code2, Clock, MapPin, Users } from "lucide-react";
import { hackathons } from "@/data/hackathon";
import { SectionHeader } from "./SectionHeader";

export function Hackathon() {
    const [openKey, setOpenKey] = useState<string | null>(null);

    return (
        <section id="hackathons" className="section-pad">
            <div className="container-page">
                <SectionHeader
                    index="04 — Hackathons"
                    title="Hackathons"
                    blurb="Competitions where I've built, shipped, and collaborated under pressure."
                />

                <div
                    className={`mx-auto grid gap-6 ${
                        hackathons.length === 1
                            ? "max-w-2xl"
                            : "max-w-7xl lg:grid-cols-2"
                    }`}
                >
                    {hackathons.map((h) => {
                        const isOpen = openKey === h.name;

                        return (
                            <article
                                key={h.name}
                                onClick={() => setOpenKey(isOpen ? null : h.name)}
                                className={`group flex cursor-pointer flex-col overflow-hidden rounded-lg border bg-surface shadow-sm transition-all ${
                                    isOpen
                                        ? "border-primary"
                                        : "border-border hover:border-border-strong"
                                }`}
                            >
                                <div className="flex flex-1 flex-col gap-4 p-6">
                                    <header className="flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <div className="mb-1 flex items-center gap-2 font-mono text-xs text-syntax-comment">
                                                <Code2 className="h-4 w-4 text-syntax-fn" />
                                                <span>{h.event}</span>
                                            </div>

                                            <h3 className="text-xl font-semibold text-foreground">
                                                {h.name}
                                            </h3>
                                        </div>

                                        <span className="shrink-0 rounded-full border border-border bg-surface-elevated px-3 py-1 font-mono text-[11px] text-muted-foreground">
                      {h.date}
                    </span>
                                    </header>

                                    <p
                                        className={`text-pretty text-sm leading-relaxed text-muted-foreground ${
                                            isOpen
                                                ? ""
                                                : "line-clamp-2 group-hover:line-clamp-none"
                                        }`}
                                    >
                                        {h.tagline}
                                    </p>

                                    <div
                                        className={`grid transition-all duration-300 ${
                                            isOpen
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100"
                                        }`}
                                    >
                                        <div className="flex min-h-0 flex-col gap-5 overflow-hidden">
                                            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                                                {h.description}
                                            </p>

                                            <dl className="grid gap-3 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-syntax-string" />
                                                    <span className="font-mono">{h.duration}</span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4 text-syntax-var" />
                                                    <span className="font-mono">{h.venue}</span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-syntax-fn" />
                                                    <span className="font-mono">
                            {h.team} · representing {h.representing}
                          </span>
                                                </div>
                                            </dl>

                                            <div className="border-t border-border pt-3">
                        <span className="font-mono text-xs text-syntax-comment">
                          Organized by {h.organizer}
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}