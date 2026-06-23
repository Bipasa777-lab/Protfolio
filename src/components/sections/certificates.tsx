import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/lib/content";

export function Certificates() {
  return (
    <section id="certificates" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Certificates
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Credentials on file
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Placeholder entries below — swap in your real certificates in{" "}
            <code className="font-mono text-accent">src/lib/content.ts</code>.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <a
              key={cert.title + cert.issuer}
              href={cert.credentialUrl ?? "#"}
              className="plate group flex flex-col gap-4 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Award className="size-4" />
                </div>
                <ExternalLink className="size-3.5 text-muted-foreground/50 transition-colors group-hover:text-accent" />
              </div>
              <div>
                <p className="font-display text-base font-medium leading-snug">
                  {cert.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
              <p className="mt-auto font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {cert.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
