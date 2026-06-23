# Bipasa Saha — Portfolio

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and a
shadcn-style component layer. Light and dark themes included, toggle in
the top-right corner.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add your photo

The hero section currently shows a placeholder silhouette plate. To add
your real photo:

1. Drop your photo at `public/images/portrait.jpg` (a portrait/4:5 crop
   works best, square is fine too).
2. Open `src/components/sections/hero.tsx` and find this block:

   ```tsx
   {/* Swap this block for: <Image src="/images/portrait.jpg" alt={profile.name} fill className="object-cover" /> */}
   <div className="flex h-full w-full items-center justify-center">
     ...silhouette svg...
   </div>
   ```

3. Replace it with:

   ```tsx
   import Image from "next/image";
   // ...
   <Image
     src="/images/portrait.jpg"
     alt={profile.name}
     fill
     className="object-cover"
     priority
   />
   ```

## Edit your content

Everything — bio, education, internship bullet points, projects, skills,
certificates, and achievements — lives in one file:

```
src/lib/content.ts
```

Edit the arrays/objects there; the page re-renders automatically.

**Certificates and achievements are placeholders** since your CV didn't
list specific ones — replace the placeholder `title` / `issuer` / `date`
/ `credentialUrl` fields with your real entries, or delete entries you
don't need.

## Customize the theme

Colors, fonts, and spacing tokens are defined in
`src/app/globals.css` under `:root` (light theme) and `.dark` (dark
theme). Change a hex value there and it updates everywhere.

## Deploy

The easiest path is Vercel — push this folder to a GitHub repo and
import it at vercel.com/new, or run:

```bash
npm install -g vercel
vercel
```

It also builds to a static-friendly output, so Netlify, Cloudflare
Pages, or any Node host works too:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx        — fonts, theme provider, metadata
    page.tsx           — composes all sections
    globals.css        — design tokens (colors, fonts, theme)
  components/
    navbar.tsx
    theme-toggle.tsx
    theme-provider.tsx
    ui/                — button, badge (shadcn-style primitives)
    sections/
      hero.tsx
      about.tsx
      experience.tsx
      projects.tsx
      certificates.tsx
      achievements.tsx
      contact.tsx
  lib/
    content.ts          — ALL editable text/data lives here
    utils.ts            — cn() class merge helper
```
