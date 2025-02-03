/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Haris's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Syed Haris Portfolio",
    type: "website",
    url: "https://github.com/SyedHaris2/",
  },
};

//Home Page
const greeting = {
  title: "Syed Haris",
  logo_name: "Syed Haris",
  // nickname: "layman_brother",
  subTitle:
    "Full Stack Developer with expertise in Flutter and the MERN stack (MongoDB, Express.js, React.js, Node.js). Passionate about creating scalable, high-performance applications while constantly learning and exploring new technologies to deliver innovative and impactful solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1pVpXPb2bUSlbfiXE47ZM8J_cDSuwVh70/view?usp=drive_link",
  portfolio_repository: "https://github.com/SyedHaris2",
  githubProfile: "https://github.com/SyedHaris2/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/SyedHaris2",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/syed-haris09/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:haris.codes17@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux Next.js",
        "⚡ Developing mobile applications using Flutter",
        "⚡ Creating application backend in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing knowledge and interest in creating highly scalable, production-ready models for various deep learning and statistical use cases",
        "⚡ Enthusiastic about exploring Computer Vision and Natural Language Processing (NLP) projects and gaining hands-on experience in these domains",
        "⚡ Strong interest in AI and new technology fields",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Knowledge of working with various cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        //  "⚡ Deploying deep learning models on cloud to use on mobile devices",
        //  "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Shah Abdul Latif University, Khairpur",
      subtitle: "BS in Computer Science",
      logo_path: "SALU_Logo.png",
      alt_name: "SALU",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied computer science subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://www.salu.edu.pk/",
    },

    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React Frontend",
      subtitle: "- Anton Voroniuk, Dmytro Vasyliev",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1fSk_iANjD6wu9lyNeU7z1-YGpyyBSTkf/view?usp=drive_link",
      alt_name: "Udemy",
      color_code: "#8C151599",
    },
    {
      title: "Machine Learning",
      subtitle: "- EdYoda for Business",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1m-tacJIO8JNDA2E6G0UfzM0OBJe3OkWA/view?usp=drive_link",
      alt_name: "Machine Learning",
      color_code: "#00000099",
    },
    {
      title: "Wordpress",
      subtitle: "- DigiSkills",
      logo_path: "digi.png",
      certificate_link:
        "https://drive.google.com/file/d/1FYiRYxByGViN43qBfWAY9iw9bkhBGQLv/view?usp=drive_link",
      alt_name: "DigiSkills",
      color_code: "#0C9D5899",
    },
    {
      title: "Natural Language Processing",
      subtitle: "-  Shan Singh",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1yf0qsCsynV6Lv3cdWsjOJvK4FgFHMUiG/view?usp=drive_link",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
    {
      title: "Dart Advanced",
      subtitle: "- Brain Cairns",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/19ROjCw6JhLO2kcw7CWMeBcdjOp4OxAjQ/view?usp=drive_link",
      alt_name: "Udemy",
      color_code: "#D83B0199",
    },
    {
      title: "NodeJS with express, socket io and MongoDB",
      subtitle: "- Kim Chen",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1vuFSeLaVETu4Hr_LZHWoJtmE9vw36cax/view?usp=drive_link",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
    {
      title: "JavaScript and CSS",
      subtitle: "- Proper Dot Institute",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/14MlMh45VA54WHrXOlsUXqmJ5eR9gMmzd/view?usp=drive_link",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  // subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Flutter Intern",
          company: "MetaSense Technology",
          // company_url: "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "metas.png",
          duration: "July 2022 - Oct 2022",
          location: "Work From Home",
          description:
            "Developed mobile apps using Flutter at MetaSense Technology, integrating Firebase and optimizing performance for a better user experience.",
          color: "#000000",
        },
        // {
        //   title: "Associate AI Engineer",
        //   company: "Legato Health Technology",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - Aug 2021",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Flutter Intern",
          company: "MetaSense Technology",
          // company_url: "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "metas.png",
          duration: "July 2022 - Oct 2022",
          location: "Work From Home",
          description:
            "Developed mobile apps using Flutter at MetaSense Technology, integrating Firebase and optimizing performance for a better user experience.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Teaching Assistant ", // Add "(Volunteer)" for clarity
          company: "Govt Islamia Sc College Computer Science Department",
          //  company_url: "#", // Add college URL if available
          logo_path: "colg.png",
          duration: "March 2023 - Present",
          location: "Sukkur, Pakistan",
          description:
            "Mentored 50+ computer science students in programming fundamentals, achieving 95% grade improvement rate. Managed IT infrastructure reducing system downtime by 20%. Conducted technical workshops and resolved 90% of student/faculty tech issues within 24 hours.",
          color: "#2E4053", //
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description: "Some of my published Articles, Blogs and Research.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    {
      id: "",
      name: "",
      createdAt: "",
      description: "",
      url: "#",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    // profile_image_path: "animated_ashutosh.png",
    profile_image_path: "output.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with MERN, Flutter,and Cloud Development.",
  },
  blogSection: {
    title: "Enjoy Coding.",
    //subtitle: "Enjoy Coding.",
    //  link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Sukkur, Sindh, Pakistan",
    locality: "Sukkur",
    country: "Pakistan",
    province: "Sindh",
    postalCode: "65200",
    streetAddress: "Sukkur",
    avatar_image_path: "address_image.svg",

    location_map_link:
      "https://satellites.pro/Google_plan/Sukkur_map#google_vignette",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
