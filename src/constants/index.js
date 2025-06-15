export const myProjects = [
  {
    id: 1,
    title: "Infi-Money",
    description: "A 3D, interactive, and responsive portfolio built with React and Three.js to showcase my skills, projects, and contact details.",
    subDescription: [
      "Built using React, Tailwind CSS, and Framer Motion.",
      "Used Three.js with React Three Fiber for interactive globe visualization.",
      "Fully responsive design with animated sections and reusable components."
    ],
    image: "/assets/projects/image1.png",
    href: "", // You can insert your live link if hosted
    logo: "/assets/logos/react.svg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Tailwind CSS", path: "/assets/logos/tailwind.svg" },
      { id: 3, name: "Three.js", path: "/assets/logos/threejs.svg" }
    ]
  },
  {
    id: 2,
    title: "Customer Churn Prediction (Internship)",
    description: "A machine learning project to predict customer churn using supervised learning models, built during my internship at Embrizon Technologies.",
    subDescription: [
      "Used classification algorithms like Decision Trees and Random Forest.",
      "Performed data preprocessing, feature engineering, and evaluation.",
      "Gained hands-on experience with Python, Pandas, and Scikit-learn."
    ],
    image: "/assets/projects/mlproject.png",
    href: "", // optional GitHub repo or Colab link
    logo: "/assets/logos/python.svg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Scikit-learn", path: "/assets/logos/sklearn.svg" },
      { id: 3, name: "Pandas", path: "/assets/logos/pandas.svg" }
    ]
  },
  {
    id: 3,
    title: "Frontend Development Tasks (Linkerr Internship)",
    description: "Worked on responsive components and real-time user interaction during my internship at Linkerr.",
    subDescription: [
      "Used React to build dynamic UI components.",
      "Contributed to project layout and routing.",
      "Collaborated with team on a real-world product."
    ],
    image: "/assets/projects/linkerr.png",
    href: "",
    logo: "/assets/logos/react.svg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" }
    ]
  }
];

export const mySocials = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saran-kumar-a33344268/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/Saran0602A",
    icon: "/assets/socials/github-mark.svg",
  }
];
