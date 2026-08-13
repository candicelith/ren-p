import { Ornament } from "./ornament";

export function ContactCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 py-20 sm:py-24 border-t border-bone-line dark:border-ink-line text-center"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-rose-deep dark:text-blush mb-6">
        Get in touch
      </p>

      <h2
        id="contact-heading"
        className="font-display text-4xl sm:text-6xl italic tracking-tight text-balance max-w-2xl mx-auto leading-[1.1]"
      >
        Let&apos;s make something worth remembering.
      </h2>

      <p className="mt-6 text-ink/70 dark:text-bone-soft/70 max-w-md mx-auto leading-relaxed">
        Have an idea, a project, or simply something you&apos;d like to talk
        through? I&apos;d love to hear about it.
      </p>

      <Ornament className="mx-auto mt-10" />

      <a
        href="mailto:talithatyas@gmail.com"
        className="inline-block mt-10 px-8 py-3 rounded-full border border-ink dark:border-blush text-ink dark:text-blush font-medium hover:bg-ink hover:text-bone dark:hover:bg-blush dark:hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink transition-colors"
      >
        Email me at talithatyas@gmail.com
      </a>
    </section>
  );
}
