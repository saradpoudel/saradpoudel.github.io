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
  tailwind,
  nodejs,
  git,
  figma,
  blog,
  movieapp,
  splitcost,
  calculator,
  ToDo,
  imagelayout,
  threejs

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
    title: "Javascript Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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

];

const experiences = [



  {
    title: "Full Stack Software Developer",
    company_name: "Skillup Labs",
    icon: "https://avatars.githubusercontent.com/u/155071919?v=4",
    iconBg: "#E6DEDD",
    date: "March 2024 - Sep 2024",
    points: [

      "Designed and implemented interactive front-end components using JavaScript, React.js and TypeScript, enhancing user experience.",
      "Built scalable back-end services with Node.js and Express.js, ensuring seamless API integrations.",
      "Contributed to database design and query optimization using SQL Server, enhancing data integrity and system reliability.",
      "Deployed applications on AWS and Azure, implementing load balancing and monitoring to ensure scalability and availability under varying workloads.",
      "Designed RESTful APIs and optimized database operations with MS SQL Server and MongoDB.",
      "Developed microservices to enhance modularity and scalability, supporting NFP clients’ evolving requirements.",
      "Utilized Docker for containerized application deployment and GitHub for version control and collaboration.",
      "Automated deployments via CI/CD pipelines with Azure DevOps and PowerShell.",
      "Conducted rigorous unit and integration testing, improving application reliability and user satisfaction.",
      "Managed and optimized relational databases (PostgreSQL, MySQL), writing efficient queries to support high-performing applications and data integrity.",
      "Utilized Git for version control and branch management, maintaining a structured codebase and collaborating on feature development in a team setting.",
      "Collaborated with cross-functional teams in an Agile environment, contributing to sprint planning and code reviews."


    ],
  },
];
const educations = [
  {
    degree: "Bachelor in Information Technology",
    school: "Kent Institute",
    year: "2023 - 2024",
    Slocation: "sydney, Australia",
    icon: "https://kent.edu.au/wp-content/uploads/Kent-Institute-Logo.png",
    iconBg: "#E6DEDD",
  },
  {
    degree: "Bachelor in IT",
    school: "Victorian Institute of Technology",
    year: "2021 - 2023",
    location: "Sydney, Australia",
    icon: "https://www.vit.edu.au/assets/logo.png",
    iconBg: "#E6DEDD",
  }
]
const testimonials = [
  {
    testimonial:
      "Sarad is a top developer—energetic, motivated, and adept at tackling challenges. He consistently delivers high-quality work on time.",
    name: "Nabin Singh",
    designation: "Mentor",
    company: "Skillup Labs",
    url: "https://www.linkedin.com/in/nabinsingh/",
    image: "https://media.licdn.com/dms/image/C5603AQFYZUGwpAeKjA/profile-displayphoto-shrink_200_200/0/1590555681223?e=1718236800&v=beta&t=4CO6uwQDloBr2LJey1g1OQcYKoritMhf6q9U8XsOSn0",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sarad does.",
    name: "Sushil Poudel",
    designation: "CEO",
    company: "Pkr tech service ",
    url: "https://www.linkedin.com/in/dollarboysushil/",
    image: "https://media.licdn.com/dms/image/D5603AQHvSX7FV7Y9Cw/profile-displayphoto-shrink_100_100/0/1697834949432?e=1718236800&v=beta&t=xTq41NU1YLpsqZFmVuLeGgp0vPviBWvftyeaxsLl8nE",
  },
  {
    testimonial:
      "After Sarad optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Khadka",
    designation: "Manager",
    company: "Neplalese Foodary",
    url: "",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/actress-5691543-4741084.png",
  },
];

const projects = [
  {
    name: "Full Stack Blog Site",
    description:
      "Developed and deployed a full-stack blog site (https://blog.saradpoudel.com.au/) using the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "white-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://blog.saradpoudel.com.au/",
  },
  {
    name: "Movie Search App",
    description:
      "Developed a movie search web app using the TMDb API, showcasing skills in API data fetching, dynamic UI creation with JavaScript, and presenting engaging movie.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "white-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "https://github.com/saradpoudel/Movie-Search-App",
  },
  {
    name: "Split-Cost App",
    description:
      "Developed a web tool to simplify splitting costs among friends using javascript. You can add expenses, assign shares, and calculate settlements. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: splitcost,
    source_code_link: "ttps://github.com/saradpoudel/Split-Cost",
  },
  {
    name: "Scientific Calculator",
    description:
      "Created a full-featured scientific calculator app. It handles various mathematical functions and ensures accurate calculations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/saradpoudel/calculator",
  },
  {
    name: "To Do App",
    description:
      "Built a web app to manage to-do lists. You can show, add, delete, and mark tasks as complete. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ToDo,
    source_code_link: "https://github.com/saradpoudel/TO-DO-lists",
  },
  {
    name: "Image Layout App ",
    description:
      "Developed an app using JavaScript to dynamically create and arrange image layouts.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: imagelayout,
    source_code_link: "https://github.com/saradpoudel/image-layout",
  },
];

export { services, technologies, experiences, testimonials, projects, educations };
