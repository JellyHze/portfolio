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
    suffix: "+",
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

    description:
      "Website portfolio modern untuk menampilkan profil, pengalaman, skill, dan project menggunakan teknologi frontend terbaru.",


    longDescription:
      "Personal Portfolio Website merupakan website pribadi yang dirancang sebagai media profesional untuk memperkenalkan kemampuan, pengalaman, dan project yang telah dibuat. Website ini menggunakan pendekatan component-based agar struktur kode mudah dikembangkan dan dipelihara.",


    image:"",


    tech:[
      "Next.js",
      "TypeScript",
      "Tailwind CSS"
    ],


    link:"#",

    repo:"#",

    status:"Frontend Engineering",


    features:[
      "Modern responsive interface",
      "Reusable component architecture",
      "Interactive animation",
      "SEO metadata implementation",
      "Dark futuristic design"
    ],


    challenges:[
      "Membuat struktur project yang scalable",
      "Menjaga performa website tetap ringan",
      "Membangun UI yang modern tetapi mudah digunakan"
    ],


    learnings:[
      "Next.js App Router",
      "Component based development",
      "TypeScript implementation",
      "Frontend architecture"
    ]

  },



  {
    title:"Hotel Reservation System",

    slug:"hotel-reservation-system",


    description:
      "Sistem reservasi hotel berbasis web dengan fitur registrasi user, pemesanan kamar, manajemen pembayaran, dan cetak bukti reservasi.",



    longDescription:
      "Hotel Reservation System merupakan aplikasi berbasis web yang dibuat untuk mengelola proses reservasi hotel mulai dari pembuatan akun user, pemesanan kamar, proses pembayaran melalui validasi staff, hingga pencetakan resi reservasi. Sistem ini menerapkan konsep role user dan staff untuk mengatur alur kerja aplikasi.",



    image:"",


    tech:[
      "PHP",
      "CodeIgniter",
      "HTML",
      "CSS",
      "Database"
    ],


    link:"#",

    repo:"#",

    status:"Full Stack",



    features:[
      "User authentication",
      "Hotel room reservation",
      "Staff payment validation",
      "Reservation status management",
      "Receipt printing"
    ],



    challenges:[
      "Membuat alur reservasi yang sesuai kebutuhan bisnis",
      "Mengatur hak akses user dan staff",
      "Mengelola data transaksi reservasi"
    ],



    learnings:[
      "Backend web development",
      "Database management",
      "Business process implementation",
      "Role based system"
    ]

  },




  {
    title:"Heart Valve Leakage Detection System",

    slug:"heart-valve-leakage-detection",


    description:
      "Sistem deteksi kebocoran katup jantung menggunakan pendekatan data mining dengan integrasi Laravel, Python, dan Flask API.",



    longDescription:
      "Heart Valve Leakage Detection System merupakan aplikasi berbasis web yang mengintegrasikan Laravel sebagai platform utama dengan Python melalui Flask API untuk menjalankan proses analisis menggunakan metode data mining. Sistem ini dibuat untuk membantu proses prediksi berdasarkan data yang diberikan pengguna.",



    image:"",


    tech:[
      "Laravel",
      "Python",
      "Flask API",
      "Data Mining"
    ],



    link:"#",

    repo:"#",

    status:"Machine Learning Integration",




    features:[
      "Laravel web interface",
      "Python data processing",
      "Flask API integration",
      "Prediction result display",
      "Machine learning workflow"
    ],



    challenges:[
      "Menghubungkan Laravel dengan Python",
      "Membangun komunikasi API",
      "Mengintegrasikan model analisis ke website"
    ],



    learnings:[
      "API integration",
      "Machine learning implementation",
      "Backend communication",
      "System integration"
    ]

  }

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