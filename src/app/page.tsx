/* eslint-disable @next/next/no-img-element */
import {
  blog,
  faq,
  footer,
  hero,
  pricing,
  projects,
  services,
  site,
  skills,
  socials,
  testimonials,
  tools,
} from "@/content";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  ...(blog.url ? [{ label: "Blog", href: "#blog" }] : []),
];

const formatDate = (d: string) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export default function Home() {
  return (
    <>
      <header className="wrap">
        <a href="#top" aria-label="Home">
          <img src={site.logo} alt={site.name} />
        </a>
        <nav aria-label="Main navigation">
          {nav.map((n) => (
            <a key={n.label} href={n.href}>
              {n.label}
            </a>
          ))}
          <a className="button" href={site.contactUrl}>
            Start a Project
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <img className="portrait" src={hero.portrait} alt={site.name} />
          <span className="expert">{hero.badge}</span>
          <h1>{hero.title}</h1>
          <p>{hero.text}</p>
          <div className="actions">
            <a className="button dark" href="#work">
              My works
            </a>
            <a className="button" href={site.contactUrl}>
              Get in touch
            </a>
          </div>
        </section>

        <div className="wrap tools" aria-label="Design tools">
          {tools.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <section className="wrap cases" id="work" aria-label="Case studies">
          {projects.map((p, i) => (
            <article key={p.title} className={`case case-${i % 4}`}>
              <div className="case-copy">
                <span className="case-label">{p.label}</span>
                <h2>{p.title}</h2>
                <p>{p.description}</p>
                {p.href && (
                  <a className="button dark" href={p.href}>
                    {p.cta ?? "View Case Study"}
                  </a>
                )}
              </div>
              <div>
                <img
                  className={`case-image${p.fit === "contain" ? " contain" : ""}`}
                  src={p.image}
                  alt={p.title}
                />
                {p.stats && (
                  <div className="stats">
                    {p.stats.map((s) => (
                      <div key={s.label}>
                        {s.label}
                        <strong>{s.value}</strong>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="wrap section">
          <h2>{services.title}</h2>
          <p className="process-copy">{services.intro}</p>
          <div className="process-track">
            {services.items.map((s) => (
              <figure key={s.title} className="process-card">
                <img src={s.image} alt={s.title} />
                <figcaption>{s.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="skills" className="wrap section">
          <h2>Skills</h2>
          <div className="chips">
            {skills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </section>

        <section id="pricing" className="wrap section">
          <h2>{pricing.title}</h2>
          <p className="process-copy section-intro">{pricing.intro}</p>
          {pricing.plans.map((p) => (
            <div key={p.title} className="experience">
              <div>
                {p.title}
                <small>{p.description}</small>
              </div>
              <div>
                {p.price}
                <small>{p.includes}</small>
              </div>
            </div>
          ))}
          <div className="center more">
            <a className="button dark" href={site.contactUrl}>
              Contact me
            </a>
          </div>
        </section>

        {testimonials.length > 0 && (
          <section className="wrap section">
            <h2>Testimonials</h2>
            <div className="quotes">
              {testimonials.map((t, i) => (
                <blockquote key={i}>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                  <footer>{t.author}</footer>
                </blockquote>
              ))}
            </div>
          </section>
        )}

        <section id="faq" className="wrap section">
          <h2>Frequently asked questions</h2>
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {blog.url && (
          <section id="blog" className="wrap section blog">
            <h2>Blog</h2>
            {blog.posts.map((post) => (
              <a key={post.title} className="blog-row" href={blog.url}>
                <div className="thumb" aria-hidden="true" />
                <div>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <h3>{post.title}</h3>
                </div>
              </a>
            ))}
            <div className="center more">
              <a className="button" href={blog.url}>
                View More
              </a>
            </div>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <h2>{footer.title}</h2>
          <a className="button" href={site.contactUrl}>
            {footer.button}
          </a>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {site.name}. Designed by {site.fullName}
            </span>
            <div className="social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
