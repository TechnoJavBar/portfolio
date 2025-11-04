import { Link } from "react-router-dom";
import "./projectObject.css";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export function ProjectObject({ key, title, description, link1, link2 }) {
  return (
    <motion.div
      className="projectObject"
      key={key}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        transition: { duration: 0.3 },
      }}
      style={{
        background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
        borderRadius: "18px",
        padding: "2rem",
        margin: "1rem 0",
        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
        border: "1px solid #333",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "1.7rem",
          fontWeight: "700",
          marginBottom: "0.7rem",
          letterSpacing: "1px",
          background: "linear-gradient(90deg, #ff8c00, #ff0080)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: "1.2rem",
          color: "#e0e0e0",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        {/* <Link
          to={link1}
          className="link"
          style={{
            background: "linear-gradient(90deg, #ff8c00, #ff0080)",
            color: "#fff",
            padding: "0.6rem 1rem",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(255,140,0,0.15)",
            transition: "background 0.2s",
            border: "none",
          }}
        >
          Ver Proyecto
        </Link> */}
        <Link
          to={link2}
          className="link"
          style={{
            background: "#222",
            color: "#fff",
            padding: "0.6rem 1rem",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            border: "none",
          }}
        >
          <FaGithub style={{ width: "22px", height: "22px", color: "#fff" }} />
          Ver Código
        </Link>
      </div>
    </motion.div>
  );
}
