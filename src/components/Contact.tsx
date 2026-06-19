import { useState, type FormEvent } from "react";

import { Globe, Mail, MapPin, PenSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";


import { profile } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Hello from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const input =
    "w-full rounded-md border border-border bg-background/60 px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <SectionHeader 
        index="07 — contact" 
        title="Get In Touch"           
        blurb="Feel free to reach out for collaborations, opportunities, or just to say hello!"
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-lg border border-border bg-surface shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4 p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1.5">
                  <span className="font-mono text-xs text-muted-foreground">name</span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="your name"
                    className={input}
                  />
                </label>
                <label className="space-y-1.5">
                  <span className="font-mono text-xs text-muted-foreground">email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={input}
                  />
                </label>
              </div>
              <label className="block space-y-1.5">
                <span className="font-mono text-xs text-muted-foreground">subject</span>
                <input
                  required
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="what's this about?"
                  className={input}
                />
              </label>
              <label className="block space-y-1.5">
                <span className="font-mono text-xs text-muted-foreground">message</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="say hello..."
                  className={`${input} resize-none`}
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                send_message()
              </button>
            </form>
          </div>

          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-md border border-border bg-surface p-4 transition-colors hover:border-border-strong"
            >
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <div className="font-mono text-[11px] text-muted-foreground">email</div>
                <div className="text-sm text-foreground break-all">{profile.email}</div>
              </div>
            </a>
           
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-md border border-border bg-surface p-4 transition-colors hover:border-border-strong"
            >
              <GithubIcon className="h-5 w-5 text-foreground" />
              <div>
                <div className="font-mono text-[11px] text-muted-foreground">github</div>
                <div className="text-sm text-foreground">{profile.handles.github}</div>
              </div>
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-md border border-border bg-surface p-4 transition-colors hover:border-border-strong"
            >
              <LinkedinIcon className="h-5 w-5 text-syntax-fn" />
              <div>
                <div className="font-mono text-[11px] text-muted-foreground">linkedin</div>
                <div className="text-sm text-foreground">{profile.handles.linkedin}</div>
              </div>
            </a>
            <a
              href={profile.social.website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-md border border-border bg-surface p-4 transition-colors hover:border-border-strong"
            >
              <Globe className="h-5 w-5 text-primary" />
              <div>
                <div className="font-mono text-[11px] text-muted-foreground">website</div>
                <div className="text-sm text-foreground break-all">{profile.social.website.replace(/^https?:\/\//, "")}</div>
              </div>
            </a>
            <a
              href={profile.social.medium}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-md border border-border bg-surface p-4 transition-colors hover:border-border-strong"
            >
              <PenSquare className="h-5 w-5 text-syntax-var" />
              <div>
                <div className="font-mono text-[11px] text-muted-foreground">medium</div>
                <div className="text-sm text-foreground">{profile.handles.medium}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
