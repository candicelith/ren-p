import { Code2, Palette, Box, PenTool, Paintbrush } from "lucide-react";

import {
  siNextdotjs,
  siReact,
  siTypescript,
  siJavascript,
  siLaravel,
  siVuedotjs,
  siTailwindcss,
  siGit,
  siGithub,
  siGitlab,
  siFigma,
  siBlender,
  siDocker,
  siHtml5,
  siCss,
  siBootstrap,
} from "simple-icons";

import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import type { SimpleIcon } from "simple-icons";

type ToolIcon = SimpleIcon | ComponentType<LucideProps>;

// Purely decorative — the tool name is always rendered as visible text
// right next to the icon, so it's hidden from assistive tech entirely.
function BrandIcon({ icon, size = 17 }: { icon: ToolIcon; size?: number }) {
  if ("path" in icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d={icon.path} />
      </svg>
    );
  }

  const Icon = icon;
  return (
    <Icon size={size} strokeWidth={1.5} aria-hidden="true" focusable="false" />
  );
}

const groups = [
  {
    label: "Development",
    icon: Code2,
    items: [
      { name: "HTML", icon: siHtml5 },
      { name: "CSS", icon: siCss },
      { name: "JavaScript", icon: siJavascript },
      { name: "TypeScript", icon: siTypescript },
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Vue", icon: siVuedotjs },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "Bootstrap", icon: siBootstrap },
      { name: "Laravel", icon: siLaravel },
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "GitLab", icon: siGitlab },
      { name: "Docker", icon: siDocker },
    ],
  },
  {
    label: "Design",
    icon: Palette,
    items: [
      { name: "Figma", icon: siFigma },
      { name: "Canva", icon: PenTool },
    ],
  },
  {
    label: "3D & Creative",
    icon: Box,
    items: [
      { name: "Blender", icon: siBlender },
      { name: "MediBang Paint", icon: Paintbrush },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 py-14 sm:py-20 border-t border-bone-line dark:border-ink-line"
    >
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-rose-deep dark:text-blush mb-4">
          Toolkit
        </p>
        <h2
          id="skills-heading"
          className="font-display text-3xl sm:text-4xl italic tracking-tight"
        >
          Tools I use to make things.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((group, index) => {
          const GroupIcon = group.icon;
          const groupHeadingId = `skills-group-${group.label.replace(/\s+/g, "-").toLowerCase()}`;

          return (
            <section
              key={group.label}
              aria-labelledby={groupHeadingId}
              className={`border border-bone-line dark:border-ink-line rounded-lg p-6 hover:border-rose-deep/40 dark:hover:border-blush/40 transition-colors ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full border border-bone-line dark:border-ink-line flex items-center justify-center text-rose-deep dark:text-blush">
                  <GroupIcon size={17} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3
                  id={groupHeadingId}
                  className="text-xs uppercase tracking-[0.18em] text-ink/70 dark:text-bone-soft/70"
                >
                  {group.label}
                </h3>
              </div>

              <ul
                className={`grid gap-2 list-none ${
                  index === 0
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                    : "grid-cols-2"
                }`}
              >
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-md border border-transparent hover:border-bone-line dark:hover:border-ink-line hover:bg-bone-soft/40 dark:hover:bg-ink-soft/40 transition-colors"
                  >
                    <span className="shrink-0 text-ink/60 dark:text-bone-soft/60">
                      <BrandIcon icon={item.icon} size={17} />
                    </span>
                    <span className="text-sm text-ink/80 dark:text-bone-soft/80">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}
