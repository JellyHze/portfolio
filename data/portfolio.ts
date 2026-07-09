import type { Project } from "@/types/portfolio";

export const profile = {
  name: "Kadek Dwiyana Pernanda",
  role: "Frontend Developer",
  location: "Indonesia",
  email: "kadekpernanda@gmail.com",
  github: "https://github.com/JellyHze",
  instagram: "https://instagram.com/kadekpernanda",

  tagline:
    "Saya membangun website modern, responsif, cepat, dan mudah digunakan dengan Next.js, React, TypeScript, dan Tailwind CSS.",

  description:
    "Saya adalah Frontend Developer yang memiliki ketertarikan pada pengembangan website modern, bersih, responsif, dan mudah dikembangkan. Saya fokus membangun antarmuka yang nyaman digunakan, memiliki struktur kode yang rapi, serta memperhatikan performa, maintainability, dan pengalaman pengguna.",

  resumeUrl: "/cv.pdf",
};

export const heroRoles = [
  "Frontend Developer",
  "Next.js Developer",
  "Web Developer",
  "UI Enthusiast",
];

export const stats = [
  {
    value: "5+",
    label: "Project Practice",
  },
  {
    value: "3+",
    label: "Tech Stack",
  },
  {
    value: "100%",
    label: "Responsive",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Responsive Design", "UI Design"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "NPM"],
  },
];

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    slug: "personal-portfolio",
    description:
      "Website portfolio pribadi yang dibangun menggunakan Next.js, TypeScript, dan Tailwind CSS.",
    longDescription:
      "Personal Portfolio Website adalah project portfolio pribadi yang dibuat untuk menampilkan profil, skill, pengalaman, pendidikan, project, dan kontak dalam satu website yang modern, responsif, dan mudah dikembangkan. Project ini dirancang dengan pendekatan component-based agar struktur kode lebih rapi dan mudah dirawat.",
    image:"",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
    repo: "#",
    status: "Featured",
    features: [
      "Responsive layout untuk desktop dan mobile",
      "Dark mode design dengan gradient dan glow effect",
      "Reusable components agar mudah dikembangkan",
      "Project preview card dengan tampilan mockup browser",
      "SEO metadata dasar untuk kebutuhan portfolio",
    ],
    challenges: [
      "Membuat struktur folder yang rapi dan mudah dirawat",
      "Menjaga tampilan tetap modern tanpa membuat website terlalu berat",
      "Membuat komponen yang reusable dan konsisten",
    ],
    learnings: [
      "Memahami struktur Next.js App Router",
      "Membuat UI dengan Tailwind CSS",
      "Memisahkan data dan tampilan agar project maintainable",
      "Menjalankan build check sebelum push atau deploy",
    ],
  },
  {
    title: "Modern Landing Page",
    slug: "modern-landing-page",
    description:
      "Landing page modern dengan tampilan clean, responsive layout, dan fokus pada penyampaian informasi secara jelas.",
    longDescription:
      "Modern Landing Page adalah konsep halaman promosi digital yang dirancang untuk menampilkan informasi produk, jasa, atau personal branding secara singkat, jelas, dan menarik. Fokus utama project ini adalah membuat tampilan yang rapi, cepat dipahami, dan nyaman diakses dari berbagai perangkat.",
    image:"",
    tech: ["React", "Tailwind CSS"],
    link: "#",
    repo: "#",
    status: "Practice",
    features: [
      "Hero section yang jelas dan menarik",
      "Responsive section layout",
      "CTA button untuk mendorong interaksi user",
      "Struktur komponen yang sederhana dan mudah dikembangkan",
    ],
    challenges: [
      "Membuat tampilan tetap sederhana tetapi terlihat profesional",
      "Menentukan hierarki visual agar informasi mudah dibaca",
    ],
    learnings: [
      "Membuat layout landing page",
      "Mengatur spacing, typography, dan responsive design",
      "Membuat desain yang fokus pada kebutuhan user",
    ],
  },
  {
    title: "Dashboard UI Concept",
    slug: "dashboard-ui-concept",
    description:
      "Konsep tampilan dashboard sederhana dengan card statistik, layout responsif, dan struktur komponen yang mudah digunakan kembali.",
    longDescription:
      "Dashboard UI Concept adalah eksplorasi tampilan dashboard untuk menampilkan data secara ringkas melalui card statistik, section informasi, dan layout yang responsif. Project ini berfokus pada pembuatan UI yang bersih, informatif, dan mudah dikembangkan menjadi aplikasi yang lebih kompleks.",
    image: "",
    tech: ["Next.js", "Tailwind CSS"],
    link: "#",
    repo: "#",
    status: "Practice",
    features: [
      "Card statistik",
      "Layout responsif",
      "Komponen UI reusable",
      "Tampilan dark dashboard modern",
    ],
    challenges: [
      "Membuat informasi terlihat padat tetapi tetap mudah dibaca",
      "Menjaga konsistensi spacing dan ukuran komponen",
    ],
    learnings: [
      "Mendesain dashboard sederhana",
      "Membuat struktur card dan layout grid",
      "Menjaga konsistensi UI dengan Tailwind CSS",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const experiences = [
  {
    role: "Frontend Developer",
    company: "Personal Project",
    period: "2018 - Present",
    description:
      "Membangun beberapa project berbasis web menggunakan Next.js, React, TypeScript, dan Tailwind CSS.",
  },
  {
    role: "Web Development Learner",
    company: "Independent Learning",
    period: "2021 - Present",
    description:
      "Mempelajari dasar-dasar pengembangan website, version control menggunakan Git, dan deployment berbasis GitHub.",
  },
];

export const education = [
  {
    school: "Politeknik Negeri Bali",
    major: "Diploma IV Teknologi Rekayasa Perangkat Lunak",
    period: "2021 - 2025",
    description:
      "Fokus pada pengembangan skill teknologi, pemrograman web, dan pembuatan project digital.",
  },
];

export const services = [
  {
    title: "Website Portfolio",
    description:
      "Membuat website portfolio personal yang modern, responsif, dan mudah dikembangkan.",
  },
  {
    title: "Landing Page",
    description:
      "Membuat landing page untuk promosi produk, personal branding, atau bisnis sederhana.",
  },
  {
    title: "Frontend UI",
    description:
      "Membangun tampilan website yang bersih, nyaman digunakan, dan mobile friendly.",
  },
];