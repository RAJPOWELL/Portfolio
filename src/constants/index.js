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
    Compsoft,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "AI & ML Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analytics",
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
      title: "Machine Learning Engineer Intern",
      company_name: "Compsoft Technologies",
      icon: Compsoft,
      iconBg: "#383E56",
      date: "August 2023 - September 2023",
      points: [
        "Developed and deployed a machine learning model to predict crops based on environmental data using Python and Flask.",
        "Leveraged Docker for containerization, ensuring consistent environments across development, testing, and production stages.",
        "Enhanced application performance by 22% through automated testing and model optimization.",
        "Worked on integrating multiple machine learning algorithms like Random Forest and XGBoost to improve model accuracy and robustness.",
      ],
    },
    {
      title: "Software Engineer Virtual Experience",
      company_name: "JPMorgan Chase & Co.",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2024",
      points: [
        "Developed a Reward Value class for the Rewards Converter system, improving conversion accuracy between cash and airline miles.",
        "Conducted comprehensive unit testing, achieving a 97% test pass rate and enhancing system reliability.",
        "Reduced potential conversion errors by 100% through rigorous code debugging and testing.",
        "Worked with Java to improve system performance and reliability for a large-scale financial application.",
      ],
    },
    {
      title: "ML & Data Analytics Intern ",
      company_name: "Unified Mentor",
      icon: shopify,
      iconBg: "#383E56",
      date: "August 2024 - Present",
      points: [
        "Developed an interactive Power BI dashboard to visualize and analyze large-scale company data.",
        "Incorporated DAX queries to create custom metrics and insights, enhancing decision-making.",
        "Utilized Python for data processing, improving overall data pipeline efficiency.",
        "Collaborated with cross-functional teams to ensure accuracy in data reporting and visualization.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Voice Assistant with OpenAI's GPT-3 and IBM Watson",
      description:
        "Integrated OpenAI GPT-3 to process and analyze the transcribed text, enabling the assistant to understand and respond intelligently to a wide range of queries.The assistant converts its responses into speech using IBM Watson Text-to-Speech technology, providing a fully immersive voice interaction experience.",
      tags: [
        {
          name: "IBM Watson",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "GPT3",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://courses.cognitiveclass.ai/certificates/0d5bd2e173574971979e7538f4cddade",
    },
    {
      name: "Alzheimer’s Prediction Using Transfer Learning",
      description:
        "Built the project using Python, Flask, DNN models (CNN, InceptionV3, and SVM), TensorFlow, Ensemble Models, and SQL-lite, along with microservices tools such as Git, Docker, and Bash and other micro services tools such as Git, Docker & Bash. The ensemble model takes a MRI image as an input and extracts 23 features to classify the MRI image into one of the four categories (Non Demented, Mild Demented, Moderate Demented, Very mild Demented).",
      tags: [
        {
          name: "Ensemble Method",
          color: "blue-text-gradient",
        },
        {
          name: "DNN",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/RAJPOWELL/Alzheimer-Detection-Using-Hybrid-Approach.git",
    },
    {
      name: "Malicious URL Detector",
      description:
        "Implemented using technologies such as ReactJS, Python, Django, machine learning model such as Random Forest algorithm, XG-Boost Classifier and dataset of 12,000 links. Conducted an analysis of the provided link by leveraging 128 pre-defined features to assess its potential maliciousness and generate a score indicating the likelihood of the link being harmful.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Random Forest",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/RAJPOWELL/Malicious-URL-Identifier.git",
    },
  ];
  
  export const certifications = [
    {
      title: "Career Essentials in Data Analysis",
      provider: "Microsoft and LinkedIn",
      link: "https://shorturl.at/GZ6Tg",
      image: "src/assets/microsoft.png",  
    },
    {
      title: "Career Essentials in Generative AI",
      provider: "Microsoft and LinkedIn",
      link: "https://shorturl.at/zCo4P",
      image: "src/assets/microsoft.png",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      provider: "IBM",
      link: "https://shorturl.at/58OY5",
      image: "src/assets/ibm.png",
    },
    {
      title: "Full Stack Development with MERN",
      provider: "CISCO Thing Qbator",
      link: "https://shorturl.at/gIPqb",
      image: "src/assets/cisco.png",
    },
    {
      title: "Python for Data Science",
      provider: "IBM",
      link: "https://shorturl.at/yZzGO",
      image: "src/assets/ibm.png",
    },
    {
      title: "SQL and Relational Databases 101",
      provider: "IBM",
      link: "https://courses.cognitiveclass.ai/certificates/0d1cb47617c14060926fcb82dc9665c5",
      image: "src/assets/ibm.png",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };