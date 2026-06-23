import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Contact
        </span>
        <h2 className="mt-4 font-display text-balance text-4xl font-medium tracking-tight sm:text-5xl">
          Let&apos;s build something
          <span className="accent-gradient-text"> worth shipping</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground">
          Open to SDE roles, internships, and collaborations. I usually reply
          within a day.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href={`mailto:${profile.email}`}>
              <Mail className="size-4" />
              {profile.email}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <Phone className="size-4" />
              {profile.phone}
            </a>
          </Button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Github className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin className="size-4" />
          </a>
        </div>
      </div>

      <footer className="mx-auto mt-28 max-w-6xl px-6">
        <div className="rule" />
        <div className="flex flex-col items-center justify-between gap-3 py-8 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </section>
  );
}
