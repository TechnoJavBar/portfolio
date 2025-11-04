import "./navegator.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { linearGradient } from "framer-motion/client";

const buttonsVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },

  tap: {
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

export function Navegator() {
  return (
    // <nav className="navegator">
    //     <ul>
    //         <li><Link to="/">Inicio</Link></li>
    //         <li><Link to="/about">Sobre mí</Link></li>
    //         <li><Link to="/skills">Habilidades</Link></li>
    //         <li><Link to="/projects">Proyectos</Link></li>
    //         <li><Link to="/contact">Contacto</Link></li>
    //     </ul>
    // </nav>
    <nav className="navegator">
      <ul>
        <motion.li
          variants={buttonsVariants}
          whileHover="hover"
          whileTap="tap"
          className="nav-item"
        >
          <Link to="/">Inicio</Link>
        </motion.li>
        <motion.li
          variants={buttonsVariants}
          whileHover="hover"
          whileTap="tap"
          className="nav-item"
        >
          <Link to="/about">Sobre mí</Link>
        </motion.li>
        <motion.li
          variants={buttonsVariants}
          whileHover="hover"
          whileTap="tap"
          className="nav-item"
        >
          <Link to="/skills">Habilidades</Link>
        </motion.li>
        <motion.li
          variants={buttonsVariants}
          whileHover="hover"
          whileTap="tap"
          className="nav-item"
        >
          <Link to="/projects">Proyectos</Link>
        </motion.li>
        <motion.li
          variants={buttonsVariants}
          whileHover="hover"
          whileTap="tap"
          className="nav-item"
        >
          <Link to="/contact">Contacto</Link>
        </motion.li>
      </ul>
    </nav>
  );
}
