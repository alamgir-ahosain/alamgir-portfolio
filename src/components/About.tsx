import { GraduationCap, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <SectionHeader index="01 — About" title="About me" />
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
            <p className="text-base leading-relaxed text-foreground">
              I'm {profile.name}, a final-year Computer Science &amp; Engineering
              undergrad at {profile.education.school}. I build reliable backend
              systems with Java and Spring Boot, with a focus on clean APIs,
              meaningful tests, containerized deploys, and CI/CD that catches
              issues before users do.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Lately I've been going deeper into DevOps — Docker, GitHub Actions,
              and Linux tooling. Outside of code I write technical blogs and help
              lead a campus cleanliness club focused on environmental impact.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-surface p-4">
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                <span className="text-primary"><GraduationCap className="h-4 w-4" /></span>
                Education
              </div>
              <div className="space-y-1 text-sm text-foreground">
                <div className="font-semibold">{profile.education.degree}</div>
                <div className="text-muted-foreground">{profile.education.school}</div>
                <div className="text-xs text-muted-foreground">{profile.education.period}</div>
                <div className="font-mono text-xs text-syntax-comment">CGPA {profile.education.cgpa}</div>
              </div>
            </div>
            <Fact
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value={profile.location}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({
  icon,
  label,
  value,
  meta,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  meta?: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
        <span className="text-primary">{icon}</span>
        {label}
      </div>
      <div className="text-sm text-foreground">{value}</div>
      {meta && <div className="mt-1 font-mono text-xs text-syntax-comment">{meta}</div>}
    </div>
  );
}
