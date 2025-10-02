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
    color: "#ffffffff",
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
  // const [activeIndex, setActiveIndex] = useState(null);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === Skills.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? Skills.length - 1 : prev - 1));
  };


  // const handleClick = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  return (
    <>
      {/* <div className="skills-section" id="skills">
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
    </div> */}

      <div className="carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={current} // 👈 importante para evitar errores
          className="card"
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundColor: "black"}}
        >
          <motion.div
            className="content"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            {/* Icono */}
            <motion.div
              className="icon"
              variants={{
                rest: { opacity: 1, scale: 1 },
                hover: { opacity: 0, scale: 0.5 },
              }}
              transition={{ duration: 0.4 }}
              style={{ color: skills[current].color }}
            >
              {skills[current].icon}
            </motion.div>

            {/* Texto */}
            <motion.div
              className="text"
              variants={{
                rest: { opacity: 0, scale: 0.8 },
                hover: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              {skills[current].description}
            </motion.div>
          </motion.div>

          {/* <h3 className="skill-name" style={{ color: skills[current].color }}>
            {skills[current].name}
          </h3> */}
        </motion.div>
      </AnimatePresence>

      {/* Botones */}
      <button className="btn prev" onClick={prevSlide}>
        ◀
      </button>
      <button className="btn next" onClick={nextSlide}>
        ▶
      </button>

      {/* Indicadores */}
      <div className="indicators">
        {skills.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
            style={{
              background: current === index ? skills[index].color : "gray",
            }}
          ></span>
        ))}
      </div>
    </div>
    </>
  );
}
