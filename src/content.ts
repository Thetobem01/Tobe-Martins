// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your portfolio.
//  Every word, link and image on the site is read from here.
//  Lines marked TODO need your input before you go live.
// ─────────────────────────────────────────────────────────────

const framerSite = "https://tobemartinsportfolio.framer.website";
const img = (path: string) => `https://framerusercontent.com/${path}`;

export const site = {
  name: "Tobe Martins",
  fullName: "Tobechukwu Martins Iheanetu",
  logo: img("images/3dpALmvrIR88qPmbDlYoTyJSig.png"),
  // Where every "Contact" / "Start a Project" button goes.
  // Use "mailto:you@email.com" or a contact/booking page.
  contactUrl: `${framerSite}/contact`, // TODO: check this page exists, or use your email
  metaTitle: "Tobe Martins — Digital Designer",
  metaDescription:
    "Digital designer in Norwich, England with 5+ years designing world-class websites and products.",
};

export const socials = [
  // TODO: replace with your profile links
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
];

export const hero = {
  portrait: img("assets/Jzq93XImTcQCYHUsSHU2zC4.jpg"),
  badge: "Hi I'm ThetobeGphx 👋",
  title: "I create web apps and sites to leave you amazed..",
  text: "Digital designer living in Norwich, England, with 5+ years of experience designing world-class websites and products.",
};

export const tools = ["Figma", "Framer", "Rive", "Maze", "Spline", "Photoshop", "Illustrator"];

export type Project = {
  title: string;
  label: string;
  description: string;
  image: string;
  fit?: "cover" | "contain"; // "contain" for phone screens / logos so nothing is cropped
  href: string; // case study link — leave empty to hide the button
  cta?: string;
  stats?: { label: string; value: string }[]; // optional results, e.g. { label: "Conversion", value: "4.5%" }
};

export const projects: Project[] = [
  {
    title: "Synako",
    label: "Web design",
    description: "Designed & implemented new Healthcare booking platform.",
    image: img("assets/HtEUBqmJ3ibtF6juPAhRDI6wgU.png"),
    href: `${framerSite}/work/synako-desktop-project1`,
  },
  {
    title: "Luxtrade",
    label: "UX/UI design",
    description: "Nigeria's first multi-purpose finance app.",
    image: img("assets/6cwOu6QF2zJNqWdGtIgmClToRwg.svg"),
    fit: "contain",
    href: `${framerSite}/work/luxtrade-app-project1`,
  },
  {
    title: "MUVE",
    label: "UX/UI design",
    description: "Making the world more mindful.",
    image: img("assets/w1lSOiCOXLHcDTP3qTFwesRyTsg.png"),
    fit: "contain",
    href: `${framerSite}/work/move-app-project2`,
  },
  {
    title: "Moodboard",
    label: "Logo design",
    description: "Restructuring and creating logos for clients and companies.",
    image: img("assets/BUof0ORm1nvu7BoAvI6SZhoSfx0.png"),
    href: `${framerSite}/work/logos-flyers`,
    cta: "View More",
  },
];

export const services = {
  title: "What I do",
  intro:
    "From wireframes to user journeys, I use UX techniques and polished visual design to deliver world-class experiences — then prototype and test to find out what works.",
  items: [
    { title: "Web Projects", image: img("assets/c0bDdo9AANYuPZc4RIN6iUNqc8.png") },
    { title: "Brand/Logo Creation", image: img("assets/XrurXGRtJfNXEUJGzZAtYRDkcY.png") },
  ],
};

export const skills = [
  "UX Design",
  "UI Design",
  "UX Research",
  "Prototyping",
  "Workshops",
  "Collaboration",
  "Web Design",
  "Logo Design",
  "No-Code",
  "User Testing",
];

export const pricing = {
  title: "Pricing",
  intro: "Here are my most common expertises - contact me to build something great.",
  plans: [
    { title: "UX/UI Design", description: "Turn your app into a masterpiece.", includes: "Wireframes · UX Research · UI Design", price: "From $1000" },
    { title: "Web design", description: "Landing page to boost conversions", includes: "Figma designs · User testing · Web Design", price: "From $1000" },
    { title: "Web design & Implementation", description: "Ready website for you", includes: "No-code implementation · User testing · Web Design", price: "From $2000" },
  ],
};

// TODO: replace with real quotes from real clients — these came from the Framer
// template (same "Jennifer R." on every card). Empty list = section hidden.
export const testimonials = [
  {
    quote:
      "Working with Tobe was an absolute game-changer for our company. Their keen eye for detail and innovative approach to product design elevated our brand to new heights.",
    author: "Jennifer R. — CEO Techstart",
  },
  {
    quote:
      "Their creativity knows no bounds, and their designs have helped us differentiate ourselves in a competitive market. From concept to execution, Tobe exceeded our expectations at every step of the way.",
    author: "Jennifer R. — CEO Techstart",
  },
];

export const faq = [
  {
    q: "What is your design process?",
    a: "I start with UX research — surveys, user interviews and data — then move through wireframes and user journeys, polished UI design, and prototypes to gather feedback quickly before anything is built.",
  },
  {
    q: "What tools and software do you use for UX design?",
    a: "Figma for UX/UI design and prototyping, Framer for web design and development, Rive for interactive animations, Maze for unmoderated testing and Spline for 3D — plus Photoshop and Illustrator.",
  },
  {
    q: "How do you measure the success of your UX designs?",
    a: "Through user testing and the data: I test prototypes with real users and follow how people use the product to find out what works and what doesn't.",
  },
];

export const blog = {
  url: `${framerSite}/blog`, // leave empty to hide the Blog section
  // TODO: check these match your real posts
  posts: [
    { date: "2023-09-05", title: "The Importance of User Testing in Product Development" },
    { date: "2023-09-04", title: "UX/UI Trends to Watch for in 2023" },
    { date: "2023-09-03", title: "Creating Accessible Websites: A Guide for Designers" },
  ],
};

export const footer = {
  title: "Have a project in mind? Let's build something great.",
  button: "Start a Project",
};
