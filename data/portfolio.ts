import type { Project } from "@/types/portfolio";

export const profile = {
  name: "Kadek Dwiyana Pernanda",

  role: "Web Developer",

  location: "Indonesia",

  email: "kadekpernanda@gmail.com",

  github: "https://github.com/JellyHze",

  instagram: "https://instagram.com/kadekpernanda",


  tagline:
    "Saya membangun website modern dan sistem digital dengan fokus pada frontend engineering, full-stack development, serta integrasi teknologi.",


  description:
    "Saya adalah Web Developer yang memiliki pengalaman dalam membangun website modern, sistem informasi, dan aplikasi berbasis teknologi. Saya berfokus pada pembuatan antarmuka yang nyaman digunakan, struktur kode yang rapi, performa yang baik, serta integrasi backend dan teknologi machine learning.",


  resumeUrl: "/cv.pdf",
};

export const heroRoles = [
  "Web Developer",
  "Frontend Engineer",
  "Full-Stack Developer",
  "Machine Learning Integration",
];

export const stats = [
  {
    value: 3,
    suffix: "",
    label: "Major Projects",
    description:
      "Project website dan sistem yang dikembangkan",
  },

  {
    value: 8,
    suffix: "+",
    label: "Technologies",
    description:
      "Frontend, backend, dan machine learning tools",
  },

  {
    value: 100,
    suffix: "%",
    label: "Development Focus",
    description:
      "Clean code, maintainability, dan user experience",
  },
];

export const skills = [
  {
    category: "Frontend Engineering",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },

  {
    category: "Backend Development",
    items: [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "REST API",
      "Database",
    ],
  },

  {
    category: "Integration & Tools",
    items: [
      "Python",
      "Flask API",
      "Git",
      "GitHub",
      "VS Code",
      "NPM",
    ],
  },
];

export const projects: Project[] = [

{
  title: "Personal Portfolio Website",

  slug: "personal-portfolio",

  status: "Frontend Engineering",


  description:
    "Website portfolio pribadi untuk menampilkan profil, pengalaman, skill, dan project yang telah dikembangkan.",


  longDescription:
    "Personal Portfolio Website merupakan website portfolio pribadi yang dikembangkan menggunakan pendekatan modern dengan component-based architecture agar memiliki struktur kode yang rapi, scalable, dan mudah dikembangkan.",
  
  image:"/projects/portfolio/portfolio1.jpeg",

  images:[
    "/projects/portfolio/portfolio1.jpeg",
    "/projects/portfolio/portfolio2.jpeg",
  ],


  tech:[
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],


  link:"#",

  repo:"#",



  overview:
    "Website ini dibuat sebagai media personal branding untuk menampilkan pengalaman, kemampuan teknis, serta project yang pernah dikembangkan dalam satu platform modern.",



  role:
    "Full Stack Web Developer yang bertanggung jawab dalam proses perancangan UI, implementasi component, pengembangan fitur, hingga optimasi struktur aplikasi.",



  features:[
    "Responsive design untuk berbagai perangkat",
    "Dynamic project showcase",
    "Reusable component architecture",
    "Animated user interface",
    "Project detail page menggunakan dynamic routing",
  ],



  implementation:[
    "Menggunakan Next.js sebagai framework utama aplikasi",
    "Membangun interface menggunakan React component",
    "Menggunakan TypeScript untuk meningkatkan maintainability",
    "Menggunakan Tailwind CSS untuk styling system",
  ],



  challenges:[
    "Membangun desain modern dengan performa tetap optimal",
    "Membuat struktur komponen yang mudah dikembangkan",
    "Mengatur reusable component agar kode tetap bersih",
  ],



  learnings:[
    "Modern frontend development workflow",
    "Component-based architecture",
    "Clean code implementation",
    "Responsive web development",
  ],
},

{
  title:"Hotel Reservation System",

  slug:"hotel-reservation-system",

  status:"Full Stack Web Application",


  description:
  "Aplikasi reservasi hotel berbasis web dengan sistem user dan staff.",


  longDescription:
  "Hotel Reservation System merupakan aplikasi berbasis web yang dikembangkan untuk mengelola proses reservasi hotel mulai dari registrasi pengguna, pemesanan kamar, konfirmasi pembayaran, hingga pembuatan bukti reservasi.",


    image:"/projects/hotel/hotel1.jpeg",

    images:[
      "/projects/hotel/hotel1.jpeg",
      "/projects/hotel/hotel2.jpeg",
    ],


  tech:[
  "PHP",
  "CodeIgniter",
  "HTML",
  "CSS",
  "Database",
  ],


  link:"#",

  repo:"#",



  overview:
  "Sistem ini dibuat untuk membantu digitalisasi proses reservasi hotel serta mempermudah pengelolaan transaksi oleh pengguna dan staff.",



  role:
  "Full Stack Web Developer yang mengembangkan frontend, backend logic, database workflow, serta sistem administrasi staff.",



  features:[
  "User registration dan authentication",
  "Manajemen data kamar",
  "Sistem reservasi hotel",
  "Pengelolaan status pembayaran",
  "Dashboard staff",
  "Cetak bukti reservasi",
  ],



  implementation:[
  "Membangun backend menggunakan PHP CodeIgniter",
  "Membuat database untuk user, kamar, dan transaksi",
  "Mengimplementasikan alur reservasi dari user hingga staff",
  "Membangun interface menggunakan HTML dan CSS",
  ],



  challenges:[
  "Mengelola perubahan status transaksi pembayaran",
  "Membuat sinkronisasi data antara user dan staff",
  "Merancang database agar mendukung proses reservasi",
  ],



  learnings:[
  "Pengembangan sistem informasi berbasis web",
  "Database relationship management",
  "Backend workflow design",
  "Business process implementation",
  ],

},



{

  title:"Heart Valve Leakage Detection System",

  slug:"heart-valve-leakage-detection",

  status:"Machine Learning Integration",


  description:
  "Aplikasi web untuk membantu analisis kebocoran katup jantung menggunakan pendekatan data mining.",


  longDescription:
  "Heart Valve Leakage Detection System merupakan aplikasi berbasis web yang mengintegrasikan Laravel, Python, dan Flask API untuk menghubungkan sistem web dengan proses analisis data mining.",


    image:"/projects/heart-valve/heart-valve1.jpeg",

    images:[
      "/projects/heart-valve/heart-valve1.jpeg",
      "/projects/heart-valve/heart-valve2.jpeg",
    ],


  tech:[
  "Laravel",
  "Python",
  "Flask API",
  "Data Mining",
  "Database",
  ],


  link:"#",

  repo:"#",



  overview:
  "Sistem ini dikembangkan untuk membantu proses analisis awal kebocoran katup jantung melalui pengolahan data dan menampilkan hasil analisis melalui aplikasi web.",



  role:
  "Full Stack Developer yang bertanggung jawab dalam pengembangan website, integrasi API, serta komunikasi antara Laravel dengan Python model.",



  features:[
  "Input data pemeriksaan",
  "Pengolahan data menggunakan model analisis",
  "Integrasi Laravel dengan Flask API",
  "Menampilkan hasil prediksi",
  "Riwayat hasil pemeriksaan",
  ],



  implementation:[
  "Membangun aplikasi web menggunakan Laravel",
  "Membuat API menggunakan Flask untuk komunikasi sistem",
  "Menghubungkan proses Python dengan aplikasi web",
  "Mengelola alur input hingga output hasil analisis",
  ],



  challenges:[
  "Mengintegrasikan dua teknologi berbeda Laravel dan Python",
  "Mengelola komunikasi data melalui API",
  "Membuat sistem analisis dapat digunakan melalui interface web",
  ],



  learnings:[
  "REST API implementation",
  "Machine learning deployment workflow",
  "Backend integration",
  "Data-driven application development",
  ],


},
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const experiences = [
  {
    role: "Web Developer",
    company: "Personal Projects",
    period: "2018 - Present",

    description:
      "Mengembangkan berbagai aplikasi web menggunakan teknologi frontend modern, backend framework, database, serta integrasi API untuk menghasilkan sistem digital yang fungsional.",
  },

  {
    role: "Full-Stack Development Learner",
    company: "Independent Learning",
    period: "2021 - Present",

    description:
      "Mempelajari pengembangan aplikasi web secara end-to-end mulai dari pembuatan interface, backend logic, database management, deployment, hingga integrasi teknologi machine learning.",
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
    title: "Modern Website Development",

    description:
      "Membangun website modern dengan desain responsif, performa baik, dan struktur kode yang mudah dikembangkan.",
  },

  {
    title: "Full-Stack Web System",

    description:
      "Mengembangkan sistem website lengkap mulai dari frontend, backend, database, hingga pengelolaan alur bisnis aplikasi.",
  },

  {
    title: "API & Technology Integration",

    description:
      "Menghubungkan berbagai teknologi seperti API, backend service, dan machine learning agar dapat berjalan dalam satu sistem.",
  },
];