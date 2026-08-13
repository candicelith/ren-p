import { Ornament } from "./ornament";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 py-14 sm:py-20 border-t border-bone-line dark:border-ink-line"
    >
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-8 sm:gap-16">
        <div>
          <p
            aria-hidden="true"
            className="text-xs uppercase tracking-[0.25em] text-rose-deep dark:text-blush mb-4"
          >
            About
          </p>

          <h2
            id="about-heading"
            className="font-display text-3xl sm:text-4xl italic tracking-tight text-balance"
          >
            Hi, I&apos;m Irene.
          </h2>
        </div>

        <div className="max-w-prose space-y-5 text-base sm:text-[17px] text-ink/70 dark:text-bone-soft/70 leading-relaxed">
          <p>
            I&apos;m Irene, a{" "}
            <span className="font-display italic text-rose-deep dark:text-blush">
              Front-End Developer
            </span>{" "}
            with a passion for creating thoughtful and visually engaging digital
            experiences. I work primarily with modern web technologies like{" "}
            <span className="font-display italic text-rose-deep dark:text-blush">
              React
            </span>
            ,{" "}
            <span className="font-display italic text-rose-deep dark:text-blush">
              Next.js
            </span>
            , and{" "}
            <span className="font-display italic text-rose-deep dark:text-blush">
              TypeScript
            </span>
            , while also bringing my background in visual design and 3D art into
            the way I build interfaces.
          </p>

          <p>
            I enjoy turning ideas into polished, functional experiences, from
            shaping the visual direction and interaction to writing the code
            that brings everything together. I&apos;m naturally detail-oriented,
            curious, and always looking for ways to make things feel both
            intuitive and intentional.
          </p>

          <Ornament className="mt-8" />
        </div>
      </div>
    </section>
  );
}
