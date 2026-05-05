import "./css/skills.css";
import { motion } from "framer-motion";
import data from "../data/skillsData.json";
import { SkillComponent } from './skillComponent';


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export function Skills() {


  return (
    <motion.div
      className="skills-container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h2 className="skills-title">💼 Mis skills</h2>
      <div className="skills-grid">
        {data.map((skill, index) => (
        <div className="skill-card" key={index}>
        <SkillComponent skill={skill}/>
        </div>

      ))}
      </div>
    </motion.div>
  );
}
