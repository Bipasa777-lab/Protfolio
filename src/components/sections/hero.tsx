import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 78% 18%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 size-[480px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--accent)" }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy column */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="rule w-10" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Catalogue No. SDE-2026
            </span>
          </div>

          <h1 className="font-display text-balance text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name.split(" ")[0]}{" "}
            <span className="accent-gradient-text">{profile.name.split(" ")[1]}</span>
          </h1>

          <p className="mt-4 font-display text-xl text-muted-foreground sm:text-2xl">
            {profile.role} — Fresher
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="#projects">
                View the work
                <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-3.5 text-accent" />
            {profile.location}
          </div>
        </div>

        {/* Portrait plate column */}
        <div className="relative mx-auto w-full max-w-sm group">
          {/* Ambient radial glows on all sides */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] opacity-60 blur-2xl transition-all duration-700 ease-out group-hover:opacity-90 group-hover:scale-110"
            style={{
              background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)"
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-12 -z-20 rounded-[3rem] opacity-35 blur-3xl transition-all duration-700 ease-out group-hover:opacity-60"
            style={{
              background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 65%)"
            }}
          />

          <div className="plate relative overflow-hidden rounded-2xl p-3 shadow-2xl shadow-black/10">
            {/* Gallery photo corners */}
            <div className="absolute top-4 left-4 z-10 size-4 border-t-2 border-l-2 border-accent rounded-tl" />
            <div className="absolute top-4 right-4 z-10 size-4 border-t-2 border-r-2 border-accent rounded-tr" />
            <div className="absolute bottom-4 left-4 z-10 size-4 border-b-2 border-l-2 border-accent rounded-bl" />
            <div className="absolute bottom-4 right-4 z-10 size-4 border-b-2 border-r-2 border-accent rounded-br" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted border border-border/20">
              <Image
                src="/images/bips.png"
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-[1.02]"
              />
              {/* Shimmer sweep reflection on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            </div>
          </div>

          {/* Plate caption, like a museum label */}
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <div>
              <p className="font-display text-sm font-medium">{profile.name}</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Est. 2023 — present
              </p>
            </div>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
              Open to work
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
