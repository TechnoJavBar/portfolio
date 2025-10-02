import { useState } from "react";
import { DiReact, DiJsBadge, DiHtml5, DiGithubBadge, DiCss3, DiPython, DiBootstrap, DiDatabase, DiDjango, DiDocker, DiEclipse, DiGit, DiLinux, DiVisualstudio, DiWindows, DiMysql } from "react-icons/di";
import "./skills.css";

import { FaHeart, FaStar, FaSmile } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    name: "React",
    icon: <DiReact size={60} />,
    color: "#61DBFB",
    description: "Librería para construir interfaces de usuario reactivas.",
  },
  {
    name: "Python",
    icon: <DiPython size={60} />,
    color: "#f6f60cff",
    description: "Lenguaje de programación versátil y fácil de aprender.",
  },
  {
    name: "HTML5",
    icon: <DiHtml5 size={60} />,
    color: "#E34F26",
    description: "Lenguaje de marcado para estructurar contenido web.",
  },
  {
    name: "CSS3",
    icon: <DiCss3 size={60} />,
    color: "#264de4",
    description: "Lenguaje de estilos para diseñar páginas web.",
  },
  {
    name: "JavaScript",
    icon: <DiJsBadge size={60} />,
    color: "#F0DB4F",
    description: "Lenguaje de programación del lado del cliente (y servidor).",
  },
  {
    name: "Github",
    icon: <DiGithubBadge size={60} />,
    color: "#868686ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Bootstrap5",
    icon: <DiBootstrap size={60} />,
    color: "#b105f5ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "SQL",
    icon: <DiDatabase size={60} />,
    color: "#21910aff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Django",
    icon: <DiDjango size={60} />,
    color: "#0f4504ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Docker",
    icon: <DiDocker size={60} />,
    color: "#2542faff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Eclipse",
    icon: <DiEclipse size={60} />,
    color: "#af25faff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Git",
    icon: <DiGit size={60} />,
    color: "#ffa200ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Linux",
    icon: <DiLinux size={60} />,
    color: "#000000ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "VSCode",
    icon: <DiVisualstudio size={60} />,
    color: "#09bcf8ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "Windows",
    icon: <DiWindows size={60} />,
    color: "#002ba0ff",
    description: "Sistema de control de versiones distribuido.",
  },
  {
    name: "MySQL",
    icon: <DiMysql size={60} />,
    color: "#6a90f6ff",
    description: "Sistema de control de versiones distribuido.",
  },
];

export function Skills() {
 const [active, setActive] = useState(null);

  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="skill-card"
          layoutId={`card-${index}`} // 👈 permite transiciones suaves
          style={{ borderColor: skill.color }}
          onClick={() => setActive(index)}
          whileHover={{ scale: 1.05 }}
        >
          {skill.icon}
          <h4 style={{ color: skill.color }}>{skill.name}</h4>
        </motion.div>
      ))}

      {/* Panel expandido */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="expanded-card"
              layoutId={`card-${active}`} // 👈 conecta con la card
              style={{ borderColor: skills[active].color }}
            >
              {skills[active].icon}
              <h2 style={{ color: skills[active].color }}>
                {skills[active].name}
              </h2>
              <p>{skills[active].description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
