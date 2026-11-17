// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your portfolio.
//  Everything on the site is read from here — paste your text,
//  links and projects below. Lines marked TODO are placeholders.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Tobe Martins",
  role: "Product Designer", // TODO: your title
  location: "Lagos, Nigeria", // TODO: or remove
  email: "hello@example.com", // TODO: your contact email
  intro:
    "I design clear, useful digital products — from first sketch to shipped interface.", // TODO
  available: true, // shows the "Open to work" badge
  resumeUrl: "", // TODO: link to a PDF, or leave empty to hide
};

export const socials: { label: string; href: string }[] = [
  // TODO: replace with your real profiles (delete any you don't use)
  { label: "LinkedIn", href: "https://linkedin.com/in/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
  { label: "GitHub", href: "https://github.com/" },
];

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  year: string;
  href?: string; // case study or live link
  image?: string; // put images in /public/projects and use "/projects/name.jpg"
};

export const projects: Project[] = [
  // TODO: paste your work here — copy a block to add another project
  {
    title: "Project One",
    summary: "One or two sentences on the problem, your role and the result.",
    tags: ["UX research", "UI design"],
    year: "2026",
    href: "",
  },
  {
    title: "Project Two",
    summary: "One or two sentences on the problem, your role and the result.",
    tags: ["Mobile app", "Design system"],
    year: "2025",
  },
  {
    title: "Project Three",
    summary: "One or two sentences on the problem, your role and the result.",
    tags: ["Web", "Branding"],
    year: "2025",
  },
  {
    title: "Project Four",
    summary: "One or two sentences on the problem, your role and the result.",
    tags: ["Dashboard", "Prototyping"],
    year: "2024",
  },
];

export const about = {
  paragraphs: [
    // TODO: your story, one string per paragraph
    "Write a short paragraph about who you are and how you work.",
    "Add a second paragraph about what you're looking for or excited by.",
  ],
  skills: ["Figma", "Framer", "Prototyping", "User research", "Design systems"], // TODO
};

export const experience: {
  company: string;
  role: string;
  period: string;
}[] = [
  // TODO: most recent first
  { company: "Company Name", role: "Your role", period: "2024 — Now" },
  { company: "Company Name", role: "Your role", period: "2022 — 2024" },
];
