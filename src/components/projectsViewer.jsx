import "./projectsViewer.css";
import { ProjectObject } from "./projectObject";
import interfazBSP from "../assets/interfazBSP.jpg";
import { useState, useEffect } from "react";
import { image } from "framer-motion/client";
import { motion } from "framer-motion";

export function ProjectsViewer() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchRepos() {
      try {
        const request = await fetch(
          "https://api.github.com/users/TechnoJavBar/repos"
        );

        if (!request.ok) throw new Error("Error al cargar los repositorios");

        const data = await request.json();
        const filteredData = data.filter((repo) => !repo.fork);
        setRepos(filteredData);
      } catch (err) {
        console.log("error al cargar el repositorio: ", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="container-spinner">
        <motion.div
          className="spinner"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    );
  }
  return (
    <section className="projectsViewer">
      <h1>Mis Proyectos</h1>
      {/*TODO: cambiar color h1*/}
      <div className="container-projects">
        {repos.map((repo) => (
          <ProjectObject
            key={repo.id}
            title={repo.name}
            description={repo.description || "sin descripcion"}
            link1={""}
            link2={repo.html_url}
          />
        ))}
      </div>
    </section>
  );
}
