import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  vuejs,
  jetts,
  humanica,
  codecamp,
  ecomadmin,
  jobseekr,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UX/UI Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Business Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Fitness and Lifestyle group Thailand",
    icon: jetts,
    iconBg: "#383E56",
    date: "Jan 2021 - April 2021",
    points: [
      "Doing Day by Day Tasks, support HR Team.",
      "Preparing document for new employee",
      "Observing in Meeting room",
      "Organizing the resume of all candidates",
    ],
  },
  {
    title: "Associate Consultant",
    company_name: "Humanica public company limited",
    icon: humanica,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jan 2023",
    points: [
      "Preparing ,processing data for monthly payroll",
      "Collaborating with client including HR team, operations, and area manager",
      "Import the client data to our system Or Export the data to third-party organization",
      "Making manpower and payroll report to HR",
    ],
  },
  {
    title: "Part-time TA for codecamp thailand",
    company_name: "Software Park Thailand",
    icon: codecamp,
    iconBg: "#383E56",
    date: "July 2022 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Louis proved me wrong.",
    name: "Elon Musk",
    designation: "CEO",
    company: "SpaceX",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Louis does.",
    name: "John Doe",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Louis optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lalisa",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce Dashboard Admin",
    description:
      "Web-based platform that making for user who want to create own store. after you created your store. you can add products to the store.Add Also add the details of products.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "typescipt",
        color: "green-text-gradient",
      },
      {
        name: "radix-ui",
        color: "pink-text-gradient",
      },
    ],
    image: ecomadmin,
    source_code_link: "https://github.com/phoonsakkun/ecommerce-admin.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobseekr,
    source_code_link: "https://github.com/phoonsakkun/jobseekr-frontend.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
