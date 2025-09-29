import { useState } from "react";
import { DiReact, DiJsBadge, DiHtml5, DiGithubBadge, DiCss3, DiPython, DiBootstrap, DiDatabase, DiDjango, DiDocker, DiEclipse, DiGit, DiLinux, DiVisualstudio, DiWindows, DiMysql } from "react-icons/di";
import "./skills.css";
import {motion} from "framer-motion";

const skills = [
  {
    name: "React",
    icon: <DiReact size={40} />,
    color: "#61DBFB",
    description: "Librería para construir interfaces de usuario reactivas.",
  },
  {
    name: "Python",
    icon: <DiPython size={40} />,
    color: "#f6f60cff",
    description: "Lenguaje de programación versátil y fácil de aprender.",
  },
  {
    name: "HTML5",
    icon: <DiHtml5 size={40} />,
    color: "#E34F26",
    description: "Lenguaje de marcado para estructurar contenido web.",
  },
  {
    name: "CSS3",
    icon: <DiCss3 size={40} />,
    color: "#264de4",
    description: "Lenguaje de estilos para diseñar páginas web.",
  },
  {
    name: "JavaScript",
    icon: <DiJsBadge size={40} />,
    color: "#F0DB4F",
    description: "Lenguaje de programación del lado del cliente (y servidor).",
  },
  {
    name: "Github",
    icon: <DiGithubBadge size={40} />,
    color: "#868686ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Bootstrap5",
    icon: <DiBootstrap size={40} />,
    color: "#b105f5ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "SQL",
    icon: <DiDatabase size={40} />,
    color: "#21910aff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Django",
    icon: <DiDjango size={40} />,
    color: "#0f4504ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Docker",
    icon: <DiDocker size={40} />,
    color: "#2542faff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Eclipse",
    icon: <DiEclipse size={40} />,
    color: "#af25faff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Git",
    icon: <DiGit size={40} />,
    color: "#ffa200ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Linux",
    icon: <DiLinux size={40} />,
    color: "#ffffffff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "VSCode",
    icon: <DiVisualstudio size={40} />,
    color: "#09bcf8ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Windows",
    icon: <DiWindows size={40} />,
    color: "#002ba0ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "MySQL",
    icon: <DiMysql size={40} />,
    color: "#6a90f6ff",
    description: "Sistema de control de versiones distribuido.",
  },
];

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="skills-section" id="skills">
        <div className="skills-grid">
        {
            skills.map((skill) => (
                <motion.div 
                className="skill-card" 
                key={skill.name} 
                style={{ backgroundColor: skill.color }} 
                onHoverStart={() => handleClick(skill.name)}
                onHoverEnd={() => handleClick(null)}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                    <div className="skill-front">
                        {skill.icon}
                    </div>
                    {activeIndex === skill.name && (
                    <div className="skill-back" style={{ backgroundColor: skill.color }}>
                     <p>{skill.description}</p>
                    </div>
                    )}
                </motion.div>
            ))
        }
        </div>
    </div>
  );
}
