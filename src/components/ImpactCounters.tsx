import { useEffect, useRef, useState } from "react";
import { impactStats } from "@/data/experience";

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return val;
}

function StatCell({ value, label, start }: { value: string; label: string; start: boolean }) {
  const num = parseInt(value, 10);
  const suffix = value.replace(/\d/g, "");
  const animated = useCountUp(num, start);
  return (
    <div className="bg-surface p-8 text-center">
      <div className="font-mono text-4xl font-semibold text-accent md:text-5xl">
        {animated}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function ImpactCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setInView(true), io.disconnect()),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12">
      <div className="container-page">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {impactStats.map((s) => (
            <StatCell key={s.label} value={s.value} label={s.label} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
