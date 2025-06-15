// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'curiousbud', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/D-Portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  //   external: {
  //     header: 'My Projects',
  //     // To hide the `External Projects` section, keep it empty.
  //     projects: [
  //       {
  //         title: 'Project Name',
  //         description:
  //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //         imageUrl:
  //           'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
  //         link: 'https://example.com',
  //       },
  //       {
  //         title: 'Project Name',
  //         description:
  //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //         imageUrl:
  //           'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
  //         link: 'https://example.com',
  //       },
  //     ],
  //   },
  // },
  seo: {
    title: 'Areeb Khan',
    description: 'Cybersecurity specialist focused on Vulnerability Assessment & Penetration Testing (VAPT) and AI-driven security solutions. Certified ethical hacker with advanced training in generative AI applications for threat detection. Combine technical expertise in Python, machine learning, and security frameworks with strong problem solving abilities.',
    imageURL: '',
  },
  social: {
    linkedin: 'areeb-khan-8506a424b',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'curious_bud',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'curiousbud',
    stackoverflow: '15393425/areeb-khan', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'akareeb662@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1gtc6jX0RsSROH06s1KsyhimR36BNeTVd/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  "skills": {
    "technical": [
      {
        "name": "Vulnerability Assessment & Penetration Testing",
        "level": "Advanced",
        "applications": [
          "Network security audits",
          "Web application testing",
          "Security vulnerability identification"
        ]
      },
      {
        "name": "Linux Security",
        "level": "Intermediate",
        "applications": [
          "System hardening",
          "Kali Linux for penetration testing",
          "Server security configuration"
        ]
      },
      {
        "name": "Python for Security",
        "level": "Advanced",
        "applications": [
          "Security automation scripts",
          "AI-driven threat detection",
          "Data analysis for vulnerability patterns"
        ]
      },
      {
        "name": "Web Technologies",
        "level": "Intermediate",
        "applications": [
          "Secure frontend development",
          "XSS/CSRF prevention",
          "Security headers implementation"
        ],
        "technologies": ["HTML5", "CSS3", "JavaScript"]
      }
    ],
    "professional": [
      {
        "name": "Critical Thinking",
        "applications": [
          "Security risk analysis",
          "Attack vector evaluation",
          "Solution optimization"
        ]
      },
      {
        "name": "Problem Solving",
        "applications": [
          "Vulnerability remediation",
          "Security incident response",
          "System hardening strategies"
        ]
      },
      {
        "name": "Strategic Planning",
        "applications": [
          "Security roadmap development",
          "Resource allocation for security projects",
          "Long-term security architecture"
        ]
      },
      {
        "name": "Communications",
        "applications": [
          "Security reports presentation",
          "Stakeholder alignment",
          "Technical documentation"
        ]
      }
    ],
    "tools": [
      "Wireshark",
      "Metasploit",
      "Nmap",
      "Burp Suite"
    ]
  }
  // experiences: [
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'September 2021',
  //     to: 'Present',
  //     companyLink: 'https://example.com',
  //   },
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //     companyLink: 'https://example.com',
  //   },
  // ],
 certifications: [
    {
      name: 'Ethical Hacking',
      body: 'Completed structured course covering network security, cryptography, penetration testing, and vulnerability assessment at IIT Kharagpur',
      year: '2023',  // Replace with actual completion year
      link: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs94/Course/NPTEL24CS94S45350142203825778.pdf',  // Add your certificate link
    },
    {
      name: 'Tata Cybersecurity Security Analyst Job Simulation',
      body: 'Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team.',
      year: '2025',  // Replace with actual completion year
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_LexvXGSbMSFiotsrj_1749981172209_completion_certificate.pdf',  // Add your certificate link
    },
    {
      name: 'Foundation Course: Green Skills and AI',
      body: 'Joint Shell India-Edunet Foundation initiative covering Python programming, machine learning, deep learning, generative AI, and data visualization',
      year: '2024',  // Replace with actual completion year
      link: 'https://skills4future.in/certificate-verification-master-deck/S4F25_137645',  // Add your certificate link
    },
  ],
  education: [
    {
      institution: 'Theem College of Engineering, Thane',
      degree: 'B.E. Computer Engineering with Honours in Data Science',
      field: 'Computer Engineering',
      grade: '7.78 CGPA',
      start: '2022',  // Replace with actual start year
      end: '2026',
      location: 'Thane, Maharashtra',
    },
    {
      institution: 'Hansraj Morarji Junior College',
      degree: 'Higher Secondary Certificate (HSC)',
      field: 'Science Stream',
      grade: '78%',
      start: '2018',  // Replace with actual start year
      end: '2020',
      location: 'Mumbai, Maharashtra',
    },
    {
      institution: 'Hansraj Morarji Public School',
      degree: 'Secondary School Certificate (SSC)',
      field: 'General Education',
      grade: '75%',
      start: '2017',  // Replace with actual start year
      end: '2019',
      location: 'Mumbai, Maharashtra',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'lofi',

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
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
