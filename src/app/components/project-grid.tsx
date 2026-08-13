"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categoryLabels, Category, Project } from "../data/projects";
import { ImageLightbox } from "./image-lightbox";

const tabs: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Graphic Design", value: "design" },
  { label: "3D Art", value: "3d" },
];

export function ProjectGrid() {
  const [active, setActive] = useState<Category | "all">("all");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const statusId = useId();

  const filtered =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  const activeLabel = tabs.find((tab) => tab.value === active)?.label ?? "All";

  return (
    <div>
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-rose-deep dark:text-blush mb-4">
          Selected Work
        </p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl italic tracking-tight">
            Things I&apos;ve made along the way.
          </h2>
          <p className="text-sm text-ink/70 dark:text-bone-soft/70 max-w-xs leading-relaxed">
            A collection of websites, visual experiments, and 3D work.
          </p>
        </div>
      </div>

      <div
        role="group"
        aria-label="Filter work by category"
        className="flex gap-2 mb-8 flex-wrap"
      >
        {tabs.map((tab) => {
          const isActive = active === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(tab.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink ${
                isActive
                  ? "bg-ink text-bone border-ink dark:bg-blush dark:text-ink dark:border-blush"
                  : "border-bone-line dark:border-ink-line text-ink/70 dark:text-bone-soft/70 hover:border-rose hover:text-rose-deep dark:hover:text-blush"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <p id={statusId} role="status" className="sr-only">
        Showing {filtered.length} {activeLabel}{" "}
        {filtered.length === 1 ? "project" : "projects"}.
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 motion-reduce:transition-none"
        >
          {filtered.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="group motion-reduce:transition-none"
            >
              <button
                type="button"
                onClick={() => setPreviewProject(project)}
                aria-label={`View full image of ${project.title}`}
                className="relative cursor-pointer block w-full overflow-hidden rounded-md border border-bone-line dark:border-ink-line group-hover:border-rose dark:group-hover:border-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink transition-colors"
              >
                <div className="aspect-[4/3] relative bg-bone-soft dark:bg-ink-soft">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${categoryLabels[project.category]} project preview`}
                    fill
                    className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:grayscale-0"
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduce:transition-none"
                />

                <span
                  aria-hidden="true"
                  className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.15em] text-bone bg-ink/60 dark:bg-ink/70 px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  View full image
                </span>
              </button>

              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl italic tracking-tight">
                    {project.title}
                  </h3>

                  <span className="shrink-0 text-xs uppercase tracking-wider text-rose-deep dark:text-blush mt-1">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm text-ink/70 dark:text-bone-soft/70 mt-1 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-[0.12em]">
                <span className="text-rose-deep dark:text-blush">
                  {categoryLabels[project.category]}
                </span>

                {project.stack.length > 0 && (
                  <>
                    <span
                      aria-hidden="true"
                      className="text-ink/30 dark:text-bone-soft/30"
                    >
                      /
                    </span>
                    <span className="text-ink/70 dark:text-bone-soft/70">
                      {project.stack.join(" · ")}
                    </span>
                  </>
                )}
              </div>

              {project.liveUrl && (
                <div className="mt-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-ink/30 dark:border-blush/30 text-xs uppercase tracking-[0.12em] text-ink/80 dark:text-bone-soft/80 hover:border-rose-deep hover:text-rose-deep dark:hover:border-blush dark:hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink transition-colors"
                  >
                    Live Demo
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p role="status" className="text-ink/70 dark:text-bone-soft/70 text-sm">
          No work in this category yet.
        </p>
      )}

      <ImageLightbox
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </div>
  );
}
