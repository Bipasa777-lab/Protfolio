import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Projects
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Specimens from the lab
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Seven shipped builds — spanning AI safety, healthcare, and cultural
            preservation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className="plate group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="mb-5 flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground/50 transition-colors group-hover:text-accent" />
              </div>

              <h3 className="font-display text-xl font-medium leading-snug">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.blurb}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-accent"
                  >
                    {tech}
                    {tech !== project.stack[project.stack.length - 1] && (
                      <span className="ml-2 text-muted-foreground">·</span>
                    )}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
