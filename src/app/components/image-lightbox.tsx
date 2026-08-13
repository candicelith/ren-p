"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../data/projects";
import { categoryLabels } from "../data/projects";

interface ImageLightboxProps {
  project: Project | null;
  onClose: () => void;
}

export function ImageLightbox({ project, onClose }: ImageLightboxProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogId = useId();

  useEffect(() => {
    if (project) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-ink/80 dark:bg-ink/90 motion-reduce:transition-none"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              ref={panelRef}
              id={dialogId}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${dialogId}-title`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-bone dark:bg-ink-soft rounded-lg border border-bone-line dark:border-ink-line motion-reduce:transition-none"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close image preview"
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-bone/90 dark:bg-ink/90 border border-bone-line dark:border-ink-line text-ink dark:text-bone-soft hover:border-rose hover:text-rose-deep dark:hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep transition-colors"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <div className="relative w-full aspect-[4/3] sm:aspect-video bg-bone-soft dark:bg-ink">
                <Image
                  src={project.image}
                  alt={`${project.title} — full ${categoryLabels[project.category]} preview`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    id={`${dialogId}-title`}
                    className="font-display text-2xl sm:text-3xl italic tracking-tight"
                  >
                    {project.title}
                  </h3>
                  <span className="shrink-0 text-xs uppercase tracking-wider text-rose-deep dark:text-blush mt-1.5">
                    {project.year}
                  </span>
                </div>

                <p className="mt-3 text-sm text-ink/70 dark:text-bone-soft/70 leading-relaxed">
                  {project.description}
                </p>

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
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
