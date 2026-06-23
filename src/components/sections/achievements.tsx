import { Trophy } from "lucide-react";
import { achievements } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/animations";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal variant="fade-up" duration={0.6}>
          <div className="mb-16 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Achievements
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Notable mentions
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Placeholder entries below — swap in real wins, hackathons, or
              publications in{" "}
              <code className="font-mono text-accent">src/lib/content.ts</code>.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {achievements.map((item, i) => (
            <ScrollReveal
              key={item.title}
              variant="fade-up"
              delay={i * 0.1}
              duration={0.5}
            >
              <div
                className="plate flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Trophy className="size-4" />
                  </div>
                  <div>
                    <p className="font-display text-base font-medium">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground sm:text-right">
                  {item.date}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
