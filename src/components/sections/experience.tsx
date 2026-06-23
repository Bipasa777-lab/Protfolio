import { internship, skills } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Experience
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Where the hands-on work happened
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.6fr_0.4fr]">
          {/* Timeline entry */}
          <div className="relative border-l border-border pl-8">
            <span className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-accent" />
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {internship.period}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium">
              {internship.role}
            </h3>
            <p className="mt-1 text-accent">
              {internship.company}{" "}
              <span className="text-muted-foreground">· {internship.location}</span>
            </p>

            <ul className="mt-6 space-y-3">
              {internship.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills ledger */}
          <div className="plate rounded-2xl p-6">
            <p className="font-display text-base font-medium">Toolkit</p>
            <div className="mt-5 space-y-5">
              {skills.map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {group.label}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
