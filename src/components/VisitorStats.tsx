import { useEffect, useState } from "react";
import { Eye, Globe2, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Geo = { country?: string; country_code?: string; city?: string } | null;

export function VisitorStats() {
  const [views, setViews] = useState<number | null>(null);
  const [geo, setGeo] = useState<Geo>(null);

  useEffect(() => {
    // Counter — back to counterapi.dev (not your site URL)
    fetch("https://6a34e00a9be617520b22d26c--lucent-dusk-345566.netlify.app/")
      .then((r) => r.json())
      .then((d) => setViews(typeof d?.count === "number" ? d.count : null))
      .catch(() => {});

    // freeipapi.com — free, no auth, no CORS issues on localhost or prod
    fetch("https://freeipapi.com/api/json")
      .then((r) => r.json())
      .then((d) => {
        if (d?.countryCode) {
          setGeo({
            country: d.countryName,
            country_code: d.countryCode,
            city: d.cityName,
          });
        }
      })
      .catch(() => {});
  }, []);

  const flag = geo?.country_code
    ? String.fromCodePoint(
        ...geo.country_code
          .toUpperCase()
          .split("")
          .map((c) => 127397 + c.charCodeAt(0)),
      )
    : "";

  return (
    <section id="stats" className="section-pad">
      <div className="container-page">
        <SectionHeader
          index="09 / summary"
          title="visitor_stats"
          blurb="A live tally of everyone who's stopped by — and a hello to wherever you're reading from."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          <Card icon={<Eye className="h-5 w-5 text-primary" />} label="total_views">
            <div className="font-mono text-3xl font-semibold text-foreground">
              {views === null ? "…" : views.toLocaleString()}
            </div>
            <div className="mt-1 font-mono text-[11px] text-syntax-comment">
              // people who visited this site
            </div>
          </Card>

          <Card icon={<Globe2 className="h-5 w-5 text-syntax-fn" />} label="your_country">
            <div className="flex items-center gap-2 text-2xl font-semibold text-foreground">
              <span className="text-3xl leading-none">{flag || "🌐"}</span>
              <span>{geo?.country ?? "—"}</span>
            </div>
            <div className="mt-1 font-mono text-[11px] text-syntax-comment">
              // detected from your IP
            </div>
          </Card>

          <Card icon={<MapPin className="h-5 w-5 text-syntax-var" />} label="your_city">
            <div className="text-2xl font-semibold text-foreground">{geo?.city ?? "—"}</div>
            <div className="mt-1 font-mono text-[11px] text-syntax-comment">
              // hello, friend 👋
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <div className="mb-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
        {icon}
        {label}
      </div>
      {children}
    </div>
  );
}