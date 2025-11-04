import { useState } from "react";
import {
  FaReact,
  FaPython,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaJava,
  FaLinux,
  FaGitlab,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDocker,
  FaRaspberryPi,
  FaBootstrap,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiDjango,
  SiFramer,
  SiMysql,
  SiGmail,
  SiApacheopenoffice,
  SiGooglegemini,
  SiEclipseide,
  SiNeo4J,
  SiVirtualbox,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandOffice } from "react-icons/tb";
import "./skills.css";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact className="react-icon" /> },
  { name: "Python", icon: <FaPython className="python-icon" /> },
  { name: "JavaScript", icon: <FaJs className="js-icon" /> },
  { name: "HTML5", icon: <FaHtml5 className="html-icon" /> },
  { name: "CSS3", icon: <FaCss3Alt className="css-icon" /> },
  { name: "Node.js", icon: <FaNodeJs className="node-icon" /> },
  { name: "Django", icon: <SiDjango className="django-icon" /> },
  { name: "Framer Motion", icon: <SiFramer className="framer-icon" /> },
  { name: "Java", icon: <FaJava className="java-icon" /> },
  { name: "Linux", icon: <FaLinux className="linux-icon" /> },
  { name: "GitLab", icon: <FaGitlab className="gitlab-icon" /> },
  { name: "Git", icon: <FaGitAlt className="git-icon" /> },
  { name: "github", icon: <FaGithub className="github-icon" /> },
  { name: "AWS", icon: <FaAws className="aws-icon" /> },
  { name: "Docker", icon: <FaDocker className="docker-icon" /> },
  { name: "Raspberry Pi", icon: <FaRaspberryPi className="raspberry-icon" /> },
  { name: "MySQL", icon: <SiMysql className="mysql-icon" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="bootstrap-icon" /> },
  { name: "Gmail", icon: <SiGmail className="gmail-icon" /> },
  { name: "Windows", icon: <FaMicrosoft className="microsoft-icon" /> },
  { name: "Microsoft Office", icon: <TbBrandOffice className="office-icon" /> },
  { name: "OpenOffice", icon: <SiApacheopenoffice className="apache-icon" /> },
  { name: "Google Gemini", icon: <SiGooglegemini className="gemini-icon" /> },
  { name: "Eclipse IDE", icon: <SiEclipseide className="eclipse-icon" /> },
  {
    name: "Visual Studio Code",
    icon: <BiLogoVisualStudio className="vsc-icon" />,
  },
  {
    name: "Visual Studio",
    icon: <DiVisualstudio className="visualstudio-icon" />,
  },
  {
    name: "Neo4j",
    icon: <SiNeo4J className="neo4j-icon" />,
  },
  {
    name: "XML",
    icon: <BsFiletypeXml className="xml-icon" />,
  },
  {
    name: "VirtualBox",
    icon: <SiVirtualbox className="virtualbox-icon" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  const [active, setActive] = useState(null);

  return (
    // <div className="skills-grid">
    //   {skills.map((skill, index) => (
    //     <motion.div
    //       key={index}
    //       className="skill-card"
    //       layoutId={`card-${index}`} // 👈 permite transiciones suaves
    //       style={{ borderColor: skill.color }}
    //       onClick={() => setActive(index)}
    //       whileHover={{ scale: 1.05 }}
    //     >
    //       {skill.icon}
    //       <h4 style={{ color: skill.color }}>{skill.name}</h4>
    //     </motion.div>
    //   ))}

    //   {/* Panel expandido */}
    //   <AnimatePresence>
    //     {active !== null && (
    //       <motion.div
    //         className="overlay"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         onClick={() => setActive(null)}
    //       >
    //         <motion.div
    //           className="expanded-card"
    //           layoutId={`card-${active}`} // 👈 conecta con la card
    //           style={{ borderColor: skills[active].color }}
    //         >
    //           {skills[active].icon}
    //           <h2 style={{ color: skills[active].color }}>
    //             {skills[active].name}
    //           </h2>
    //           <p>{skills[active].description}</p>
    //         </motion.div>
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </div>
    <motion.div
      className="skills-container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h2 className="skills-title">💼 Habilidades</h2>
      <motion.ul className="skills-grid" variants={container}>
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="skill-card"
          >
            <motion.div
              className="skill-icon"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill.icon}
            </motion.div>
            <span className="skill-name">{skill.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
