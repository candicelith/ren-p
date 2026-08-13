const experiences = [
  {
    year: "Jan — Jun 2026",
    role: "Front-End Developer Intern",
    place: "PT Madana Innovation Technology",
    description:
      "Built responsive and interactive web interfaces using Vue.js, while implementing GitLab CI/CD pipelines to automate build, testing, and deployment workflows.",
  },
  {
    year: "Aug — Dec 2025",
    role: "Front-End Developer",
    place: "Proyek Mandiri Lintas Disiplin",
    description:
      "Translated UI/UX designs into responsive web interfaces using Next.js, React, and Tailwind CSS, while collaborating with other developers through Git.",
  },
  {
    year: "Aug — Dec 2025",
    role: "Full-Stack Developer",
    place: "Proyek Konstruksi dan Evolusi Perangkat Lunak",
    description:
      "Designed relational databases, developed Laravel REST APIs and business logic, and built responsive front-end interfaces with Vue.js and GitLab CI/CD.",
  },
  {
    year: "Feb 2025 — Feb 2026",
    role: "Vice Head — Animation Division",
    place: "Komunitas Mahasiswa TIK UGM",
    description:
      "Co-leading the animation division, mentoring members in Blender-based 3D modeling, rigging, and animation, and producing short animations from story development to final rendering.",
  },
  {
    year: "Oct — Nov 2025",
    role: "Computer Vision Annotator",
    place: "Dolfin",
    description:
      "Annotated and validated image datasets for computer vision projects, maintaining accuracy and consistency while collaborating with project teams to resolve annotation issues.",
  },
  {
    year: "Aug — Nov 2024",
    role: "Design, Documentation & Decoration Staff",
    place: "Tech Enthusiast Day 2024",
    description:
      "Contributed to the event's visual identity through color direction, Instagram content, promotional posters, and event documentation.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 py-14 sm:py-20 border-t border-bone-line dark:border-ink-line"
    >
      <div className="grid sm:grid-cols-[1fr_1.8fr] gap-10 sm:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-rose-deep dark:text-blush mb-4">
            Experience
          </p>

          <h2
            id="experience-heading"
            className="font-display text-3xl sm:text-4xl italic tracking-tight"
          >
            Things I&apos;ve worked on.
          </h2>
        </div>

        <ol className="list-none">
          {experiences.map((experience, index) => (
            <li
              key={`${experience.role}-${index}`}
              className="py-6 first:pt-0 last:pb-0 border-b last:border-b-0 border-bone-line dark:border-ink-line"
            >
              <article className="grid sm:grid-cols-[120px_1fr] gap-4">
                <span className="text-xs uppercase tracking-wider text-ink/70 dark:text-bone-soft/70">
                  {experience.year}
                </span>

                <div>
                  <h3 className="font-display text-2xl italic tracking-tight">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-sm text-rose-deep dark:text-blush">
                    {experience.place}
                  </p>

                  <p className="mt-3 text-sm text-ink/70 dark:text-bone-soft/70 leading-relaxed max-w-lg">
                    {experience.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
