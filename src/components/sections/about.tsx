import { GraduationCap } from "lucide-react";
import { profile, education } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              About
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Reading the field notes
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              {profile.about}
            </p>

            <div className="plate flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <p className="font-display text-base font-medium">
                    {education.degree}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {education.school} · {education.detail}
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground sm:text-right">
                {education.period}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
