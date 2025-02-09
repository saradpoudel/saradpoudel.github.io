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
    title: "Junior Software Engineer ",
    company_name: "Data Secure VA",
    icon: "https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/34923054/dca1a0f9.png",
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Current",
    points: [
      
      "Spearheading the development of enterprise-grade automation solutions using Make (Integromat), n8n, and Copilot Studio, achieving 30% reduction in manual processes and enhanced operational workflows",
      "Architecting and implementing AI-powered voice customer support agents with Vapi integration, revolutionizing customer interactions through natural language processing and real-time response capabilities",
      "Designing and deploying complex integration architectures connecting multiple SaaS platforms (CRM, ERP), enabling seamless data synchronization and automated business processes",
      "Engineering custom Python-based AI agents to automate critical business functions including intelligent appointment scheduling, smart task management, and subscription handling",
      "Managing AWS EC2 infrastructure with 99.9% uptime through implementation of advanced monitoring systems and automated scaling protocols",
      "Developing and maintaining high-performance server automation solutions using Python and Bash scripting, resulting in 40% reduction in administrative overhead",
      "Building scalable RESTful APIs and managing robust database architectures (PostgreSQL, MySQL) to support business-critical applications",
    ],
  },

  {
    title: "Full Stack Software Developer",
    company_name: "Skillup Labs",
    icon: "https://avatars.githubusercontent.com/u/155071919?v=4",
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Sep 2024",
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

  {
    title: "Junior IT Technician",
    company_name: "Spotless Group",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQHbTH3igEB3oQ/company-logo_100_100/company-logo_100_100/0/1707084448207/spotless_logo?e=1744243200&v=beta&t=QoivQcI5hWNkxkMEpMlx-sOZ52DqYqE7Oh5J5ohYxKI",
    iconBg: "#E6DEDD",
    date: "May 2023 - Nov 2023",
    points: [

      "Delivered technical support for desktops, laptops, printers, and mobile devices, resolving issues promptly to maintain productivity.",
    "Monitored and managed Active Directory for user account setups, password resets, and security access, ensuring data integrity.",
    "Configured and deployed hardware (PCs, routers, and peripherals) and software applications to meet business requirements.",
    "Performed system upgrades, patch management, and routine maintenance, enhancing security and operational efficiency.",
    "Resolved network connectivity issues, including LAN/WAN troubleshooting and Wi-Fi optimization, reducing downtime by 20%.",
    "Maintained IT inventory and asset records, tracking hardware/software licenses for compliance and cost optimization.",
    "Supported video conferencing tools and remote desktop setups, enabling seamless hybrid work solutions for employees.",
    "Collaborated with IT teams to implement and document solutions for recurring issues, improving service response time."


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
