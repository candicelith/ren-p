const disciplines = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building responsive websites and digital experiences with thoughtful interactions, clean interfaces, and maintainable code.",
  },
  {
    number: "02",
    title: "Visual Design",
    description:
      "Exploring layouts, typography, visual identities, and interface systems that give digital products their character.",
  },
  {
    number: "03",
    title: "3D Art",
    description:
      "Creating 3D objects, scenes, and small animation experiments to explore form, lighting, and visual storytelling.",
  },
];

export function WhatIDo() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 py-14 sm:py-20 border-t border-bone-line dark:border-ink-line"
    >
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-rose-deep dark:text-blush mb-4">
          What I Do
        </p>

        <h2
          id="services-heading"
          className="font-display text-3xl sm:text-4xl italic tracking-tight"
        >
          A little bit of code, design, and play.
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-8">
        {disciplines.map((item) => (
          <article
            key={item.number}
            className="group border-t border-bone-line dark:border-ink-line pt-5"
          >
            <div className="flex items-start justify-between gap-4">
              <span
                className="font-display italic text-3xl dark:text-blush/70 text-rose-deep/70"
                aria-hidden="true"
              >
                {item.number}
              </span>

              {/* <span className="text-[10px] uppercase tracking-[0.18em] text-ink/60 dark:text-bone-soft/60">
                {item.tools}
              </span> */}
            </div>

            <h3 className="mt-6 font-display text-2xl italic tracking-tight">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-ink/70 dark:text-bone-soft/70 leading-relaxed">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
