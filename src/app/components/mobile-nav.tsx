"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "What I Do" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const dialogId = useId();

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Focus first link on open, return focus to button on close
  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
    } else {
      buttonRef.current?.focus();
    }
  }, [open]);

  // Escape to close, basic focus trap within the panel
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
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
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls={dialogId}
        aria-label="Open menu"
        className="w-9 h-9 flex items-center justify-center rounded-full border border-bone-line dark:border-ink-line text-ink dark:text-bone-soft hover:border-rose hover:text-rose-deep dark:hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink transition-colors"
      >
        <Menu size={18} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
              className="fixed inset-0 z-40 bg-ink/40 dark:bg-ink/70 motion-reduce:transition-none"
            />

            {/* Panel */}
            <motion.div
              ref={panelRef}
              id={dialogId}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-x-0 top-0 z-50 bg-bone dark:bg-ink border-b border-bone-line dark:border-ink-line motion-reduce:transition-none"
            >
              <div className="max-w-5xl mx-auto px-6 py-6">
                <div className="flex justify-between items-center mb-10">
                  <span className="font-display italic text-lg tracking-tight">
                    Irene
                  </span>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-bone-line dark:border-ink-line text-ink dark:text-bone-soft hover:border-rose hover:text-rose-deep dark:hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bone dark:focus-visible:ring-offset-ink transition-colors"
                  >
                    <X size={18} aria-hidden="true" />
                  </button>
                </div>

                <nav aria-label="Primary">
                  <ul className="list-none space-y-1">
                    {links.map((link, index) => (
                      <li key={link.href}>
                        <a
                          ref={index === 0 ? firstLinkRef : undefined}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="block py-3 font-display text-2xl italic tracking-tight text-ink dark:text-bone-soft hover:text-rose-deep dark:hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep rounded transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-10 pt-6 border-t border-bone-line dark:border-ink-line flex items-center justify-between">
                  <span className="text-sm text-ink/70 dark:text-bone-soft/70">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
