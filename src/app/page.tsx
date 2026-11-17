import Image from "next/image";
import { about, experience, projects, site, socials } from "@/content";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      {/* Nav */}
      <header className="sticky top-0 z-10 -mx-5 flex items-center justify-between bg-background/80 px-5 py-5 backdrop-blur sm:-mx-8 sm:px-8">
        <a href="#top" className="font-semibold tracking-tight">
          {site.name}
        </a>
        <nav className="flex gap-5 text-sm text-muted">
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="pb-20 pt-16 sm:pb-28 sm:pt-24">
          {site.available && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Open to work
            </p>
          )}
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            {site.intro}
          </h1>
          <p className="mt-6 text-muted">
            {site.role}
            {site.location && <> · {site.location}</>}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              See my work
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-20 py-16">
          <SectionTitle>Selected work</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => {
              const Card = p.href ? "a" : "div";
              return (
                <Card
                  key={p.title}
                  {...(p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {})}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-muted">
                        Add an image
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="font-medium">
                      {p.title}
                      {p.href && <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">↗</span>}
                    </h3>
                    <span className="text-sm text-muted">{p.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{p.summary}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full bg-surface px-2.5 py-0.5 text-xs text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 py-16">
          <SectionTitle>About</SectionTitle>
          <div className="grid gap-12 sm:grid-cols-[3fr_2fr]">
            <div className="space-y-4 text-lg leading-relaxed">
              {about.paragraphs.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
              <ul className="flex flex-wrap gap-2 pt-2">
                {about.skills.map((s) => (
                  <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm text-muted">Experience</h3>
              <ul className="divide-y divide-line border-y border-line">
                {experience.map((e, i) => (
                  <li key={i} className="flex justify-between gap-4 py-3">
                    <div>
                      <p className="font-medium">{e.role}</p>
                      <p className="text-sm text-muted">{e.company}</p>
                    </div>
                    <p className="shrink-0 text-sm text-muted">{e.period}</p>
                  </li>
                ))}
              </ul>
              {site.resumeUrl && (
                <a href={site.resumeUrl} className="mt-4 inline-block text-sm underline underline-offset-4">
                  Download résumé
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Have a project in mind? Let&apos;s talk.
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block break-all text-lg underline decoration-line underline-offset-8 hover:decoration-foreground sm:text-2xl"
          >
            {site.email}
          </a>
        </section>
      </main>

      <footer className="flex flex-col gap-4 border-t border-line py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <ul className="flex gap-5">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-foreground">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted">{children}</h2>;
}
