import ClevertechLogo from "../images/logos/clevertech.png";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import ParabolLogo from "../images/logos/parabol.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Dalphon Orechi",
  initials: "DO",
  location: "Nairobi, Kenya, EAT",
  locationLink: "https://www.google.com/maps/place/Nairobi",
  about:
    "I am an Telecommunications engineer turned data analyst. I enjoy working with data and gaining insights from it.",
  summary:
    "A self-driven individual continuously advancing skills in data analysis, statistical methods, and machine learning. Aiming to utilize expertise in programming, data visualization, and manipulation to convert raw data into actionable insights for effective decision-making within organizations.",
  avatarUrl: '../images/user-3.jpg',
  personalWebsiteUrl: "https://dalphonorechi.com",
  contact: {
    email: "info@dalphonorechi.com",
    tel: "+254716109218",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dalphonorechi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dalphon-orechi-1109821aa/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/dalphonorechi",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Multimedia University of Kenya",
      degree: "Bachelor of Electrical and Telecommunication Engineering",
      start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "SAFA",
      link: "",
      badges: ["On site"],
      title: "Data Analyst",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "Automating reports and creating data pipelines.",
    },
    {
      company: "Prospect 33",
      link: "https://prospect33.com",
      badges: ["Remote"],
      title: "Data Scientist",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "I developed expertise in Data Science Fundamentals, including data and databases, SQL, Python, ETL/ELT, and applied data science techniques. My skills extended to Data Governance, Master Data Management, and Data Quality Framework, along with honing Project Management skills in planning, Agile methodology, and project control.",
    },
    {
      company: "Articus Networks Limited",
      link: "",
      badges: ["On Site"],
      title: "Network Engineer Intern",
      logo: ClevertechLogo,
      start: "2021",
      end: "2021",
      description:
        "Gained expertise in splicing and managing fiber cables at ATBs and FATs, and my role included providing technical field support to ensure reliable network connectivity.",
    },
    {
      company: "Fiberlink Limited",
      link: "https://www.linkd.co.ke/",
      badges: ['On Site'],
      title: "Network Intern",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2021",
      description:
        "I ensured seamless internet connectivity for clients by configuring radios and routers, managing cable infrastructure, performing maintenance tasks, and troubleshooting connectivity issues while delivering excellent customer care.",
    }
  ],
  skills: [
    "Python",
    "MySQL",
    "Scikit-Learn",
    "Tableau",
    "Jupyter Notebooks",
    "AWS Cloud",
  ],
  projects: [
    {
      title: "SuperStore Sales Dashboard",
      techStack: [
        "Side Project",
        "Power BI",
        "Data Analysis",
        "Data Visualization",
      ],
      description: "Data Analysis of SuperStore Data Using Power BI.",
      logo: '',
      link: {
        label: "SuperStore Sales Dashboard",
        href: "https://github.com/dalphonorechi/SuperStore-Sales-Dashboard",
      },
    },
    {
      title: "Signup Flow Optimization using SQL and Tableau",
      techStack: ["Side Project", "Tableau", "Python", "SQL", "Data Visualization"],
      description:
        "The project identifies potential issues in website registration processes, utilizing real data from 365's website visitors. Through practical use cases and tools like SQL and Tableau, I conduct in-depth optimization analyses, creating insightful visualizations to pinpoint obstacles in the sign-up flow. The goal is to identify specific challenges and propose actionable solutions for a smoother user experience.",
      logo: '',
      link: {
        label: "365 Data Science",
        href: "https://www.linkedin.com/posts/dalphon-orechi-1109821aa_certificate-of-achievement-sign-up-flow-activity-7131967677874515968-uplc/",
      },
    },
    {
      title: "Predicting Type of Wine: RED or WHITE",
      techStack: ["Side Project", "Python", "Data Visualization","Data Cleaning","EDA"],
      description:
        "This project predicts the type of wine, red or white",
      logo: '',
      link: {
        label: "github.com",
        href: "https://github.com/dalphonorechi/Wine-Type",
      },
    }
  ],
} as const;
