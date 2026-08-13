export type Category = "web" | "design" | "3d";

export interface Project {
  title: string;
  category: Category;
  image: string;
  description: string;
  year: string;
  stack: string[];
  liveUrl?: string;
}

export const categoryLabels: Record<Category, string> = {
  web: "Web",
  design: "Graphic Design",
  "3d": "3D Art",
};

export const projects: Project[] = [
  {
    title: "Website Desa Ponggok Pacitan",
    category: "web",
    image: "/projects/web-1.png",
    description:
      "Village website for Ponggok, Pacitan, featuring a news portal, village profile, and public service information. Built with Next.js, React, and Tailwind CSS.",
    year: "2026",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ponggok-pacitan.com",
  },
  {
    title: "Pokari - Portal Karir Alumni",
    category: "web",
    image: "/projects/web-2.png",
    description:
      "A career management platform for TRPL UGM, designed to track alumni career development and help students discover relevant career opportunities. Built with Laravel and Tailwind CSS",
    year: "2024 - 2025",
    stack: ["Laravel", "Tailwind CSS"],
  },
  {
    title: "Sistem Informasi Manajemen Klinik Dokter Hewan",
    category: "web",
    image: "/projects/web-3.png",
    description:
      "A web-based management system for a veterinary clinic, designed to streamline patient records, appointments, and billing. Front-End built with Vue.js and Tailwind CSS.",
    year: "2024 - 2025",
    stack: ["Vue.js", "Tailwind CSS"],
    liveUrl: "https://madanavet.madanateknologi.web.id",
  },
  {
    title: "Photorealistic 3D Scene",
    category: "3d",
    image: "/projects/3d-1.png",
    description:
      "A photorealistic 3D scene created in Blender, showcasing advanced modeling, texturing, and lighting techniques to achieve a realistic visual representation. Made for mid-term project in Animation course.",
    year: "2025",
    stack: ["Blender", "Cycles"],
  },
];
