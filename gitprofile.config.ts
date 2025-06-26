// gitprofile.config.ts

const CONFIG = {
  github: {
    username: "curiousbud", // Verify this is your exact GitHub username
  },

  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/curiousbud/curiousbud.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/curiousbud/D-Portfolio, then set base to '/D-Portfolio/'.
   */
  base: "/D-Portfolio/", // ← Check this matches your repo name

  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: "Github Projects",
      mode: "automatic", // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: "stars", // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ["curiousbud/gitprofile", "curiousbud/pandora"], // Updated to use your username
      },
    },
    external: {
      header: "My Projects",
      // You can uncomment and add your projects here
      projects: [
        // {
        //   title: 'Project Name',
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },

  seo: {
    title: "Areeb Khan",
    description:
      "Cybersecurity specialist focused on Vulnerability Assessment & Penetration Testing (VAPT) and AI-driven security solutions. Certified ethical hacker with advanced training in generative AI applications for threat detection. Combine technical expertise in Python, machine learning, and security frameworks with strong problem solving abilities.",
    imageURL: "", // Add a profile image URL here if you have one
  },

  social: {
    linkedin: "areeb-khan-8506a424b",
    x: "",
    mastodon: "",
    researchGate: "",
    facebook: "",
    instagram: "curious_bud",
    reddit: "https://www.reddit.com/user/Black_Badger-001/",
    threads: "",
    youtube: "", // example: 'pewdiepie'
    udemy: "",
    dribbble: "",
    behance: "",
    medium: "",
    dev: "curiousbud",
    stackoverflow: "15393425/areeb-khan", // example: '1/jeff-atwood'
    skype: "",
    telegram: "",
    website: "",
    phone: "",
    email: "akareeb662@gmail.com",
  },

  resume: {
    fileUrl: "https://drive.google.com/file/d/1gtc6jX0RsSROH06s1KsyhimR36BNeTVd/view?usp=sharing", // Make sure this link is publicly accessible
  },

  skills: [
    "Vulnerability Assessment & Penetration Testing",
    "Linux Security",
    "Python",
    "Network Security",
    "Web Application Security",
    "Ethical Hacking",
    "Kali Linux",
    "Wireshark",
    "Metasploit",
    "Nmap",
    "Burp Suite",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Machine Learning",
    "Data Analysis",
    "Critical Thinking",
    "Problem Solving",
  ],

  experiences: [
    // Uncomment and add your work experience here
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'September 2021',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
  ],

  certifications: [
    {
      name: "Ethical Hacking",
      body: "Completed structured course covering network security, cryptography, penetration testing, and vulnerability assessment at IIT Kharagpur",
      year: "NPTEL 2023",
      link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs94/Course/NPTEL24CS94S45350142203825778.pdf",
    },
    {
      name: "Tata Cybersecurity Security Analyst Job Simulation",
      body: "Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team.",
      year: "Forage 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_LexvXGSbMSFiotsrj_1749981172209_completion_certificate.pdf",
    },
    {
      name: "Foundation Course: Green Skills and AI",
      body: "Joint Shell India-Edunet Foundation initiative covering Python programming, machine learning, deep learning, generative AI, and data visualization",
      year: "Skills4Future 2024",
      link: "https://skills4future.in/certificate-verification-master-deck/S4F25_137645",
    },
  ],

  educations: [
    {
      institution: "Theem College of Engineering, Thane",
      degree: "B.E. Computer Engineering with Honours in Data Science",
      from: "2022",
      to: "2026",
    },
    {
      institution: "Hansraj Morarji Junior College",
      degree: "Higher Secondary Certificate (HSC) - Science Stream",
      from: "2018",
      to: "2020",
    },
    {
      institution: "Hansraj Morarji Public School",
      degree: "Secondary School Certificate (SSC)",
      from: "2017",
      to: "2019",
    },
  ],

  publications: [
    // Add your publications here if any
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    // },
  ],

  // Display articles from your medium, dev.to etc. account. (Optional)
  blog: {
    source: "dev", // medium | dev
    username: "curiousbud", // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },

  googleAnalytics: {
    id: "", // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },

  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: "",
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: "lofi",

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: "#fc055b",
      secondary: "#219aaf",
      accent: "#e8d03a",
      neutral: "#2A2730",
      "base-100": "#E3E3ED",
      "--rounded-box": "3rem",
      "--rounded-btn": "3rem",
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
}

export default CONFIG
