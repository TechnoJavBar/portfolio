import { Link } from "react-router-dom";
import "./css/projectObject.css";
import { FaGithub, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export function ProjectObject({ key, img, title, description, link1, link2 }) {
  return (
    <motion.div
      className="projectObject"
      key={key}
      whileHover={{
        scale: 1.07, // Un escalado más sutil suele verse mejor
        zIndex: 50, // Imprescindible para que pase por encima de todo
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{
        backgroundColor: "#141414",
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 10%, transparent 60%), url('${img}')`,
      }}
    >
      <div className="project-content">
        <h2>{title}</h2>

        <p>{description}</p>

        <div className="link-container">
          {/* Botón principal: Blanco estilo "Play" */}
          <Link to={link2} className="link link-primary">
            <FaPlay /> Ver
          </Link>

          {/* Botón secundario: Gris/Transparente estilo "Info" */}
          <Link to={link1} className="link link-secondary">
            <FaGithub /> GitHub
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
