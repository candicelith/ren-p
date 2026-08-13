import { ThemeToggle } from "./components/theme-toggle";
import { MobileNav } from "./components/mobile-nav";
import { ProjectGrid } from "./components/project-grid";
import { Ornament } from "./components/ornament";
import { About } from "./components/about";
import { WhatIDo } from "./components/what-i-do";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { ContactCta } from "./components/contact-cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <a
        href="#main-content"
        className="
          sr-only
          focus:not-sr-only
          focus:fixed
          focus:left-4
          focus:top-4
          focus:z-50
          focus:rounded-md
          focus:bg-ink
          focus:px-4
          focus:py-2
          focus:text-bone
          focus:outline-none
          focus:ring-2
          focus:ring-rose-deep
        "
      >
        Skip to main content
      </a>

      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <nav
          aria-label="Main navigation"
          className="flex justify-between items-center py-8"
        >
          <a
            href="/"
            aria-label="Irene — Home"
            className="font-display italic text-lg tracking-tight rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink"
          >
            Irene
          </a>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-6">
            <a
              href="#work"
              className="text-sm text-ink/70 dark:text-bone-soft/70 hover:text-rose-deep dark:hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink rounded transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm text-ink/70 dark:text-bone-soft/70 hover:text-rose-deep dark:hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink rounded transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-ink/70 dark:text-bone-soft/70 hover:text-rose-deep dark:hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink rounded transition-colors"
            >
              Contact
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle stays visible, hamburger opens the rest */}
          <div className="flex sm:hidden items-center gap-3">
            <ThemeToggle />
            <MobileNav />
          </div>
        </nav>

        <section
          id="main-content"
          tabIndex={-1}
          aria-labelledby="hero-heading"
          className="relative py-14 sm:py-20 outline-none"
        >
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-bone-line dark:border-ink-line">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-rose-deep dark:bg-blush opacity-75 motion-safe:animate-ping motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-deep dark:bg-blush" />
            </span>
            <span className="text-xs text-ink/70 dark:text-bone-soft/70">
              Available for freelance work
            </span>
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-rose-deep dark:text-blush mb-6">
            Portfolio — Front-End Development · Design · 3D
          </p>

          <h1
            id="hero-heading"
            className="font-display text-5xl sm:text-7xl italic font-medium tracking-tight text-balance max-w-3xl leading-[1.05]"
          >
            Designing details that linger.
          </h1>

          <p className="mt-6 text-ink/70 dark:text-bone-soft/70 max-w-md leading-relaxed">
            I&apos;m a Front-End Developer who builds websites, shapes visual
            identities, and explores 3D art. Bringing technology and visual
            storytelling together through thoughtful details.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-bone dark:bg-blush dark:text-ink text-sm font-medium hover:bg-ink/85 dark:hover:bg-blush/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink transition-colors"
            >
              View my work
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/30 dark:border-blush/30 text-sm font-medium text-ink/80 dark:text-bone-soft/80 hover:border-rose-deep hover:text-rose-deep dark:hover:border-blush dark:hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink transition-colors"
            >
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <Ornament className="mt-16" />

          {/* Scroll cue — decorative, hidden from AT and skipped for reduced motion */}
          <div
            aria-hidden="true"
            className="hidden sm:flex mt-16 items-center gap-3 text-ink/40 dark:text-bone-soft/40"
          >
            <span className="w-8 h-px bg-ink/20 dark:bg-bone-soft/20" />
            <span className="text-xs uppercase tracking-[0.2em] motion-safe:animate-bounce motion-reduce:animate-none">
              Scroll
            </span>
          </div>
        </section>

        <About />
        <WhatIDo />

        <section
          id="work"
          aria-labelledby="work-heading"
          className="scroll-mt-20 py-14 sm:py-20 border-t border-bone-line dark:border-ink-line"
        >
          <ProjectGrid />
        </section>

        <Experience />
        <Skills />
        <ContactCta />

        <footer className="border-t border-bone-line dark:border-ink-line py-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-ink/70 dark:text-bone-soft/70">
          <span>
            © {new Date().getFullYear()} Irene. Made with care
            <span aria-hidden="true"> ❤️ ☕</span>
          </span>

          <nav aria-label="Social media links">
            <ul className="flex gap-6 list-none">
              <li>
                <a
                  href="#"
                  className="hover:text-rose-deep dark:hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink rounded transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-deep dark:hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink rounded transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-deep dark:hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink rounded transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </main>
  );
}
