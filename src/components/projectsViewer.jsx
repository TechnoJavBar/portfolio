import "./css/projectsViewer.css";
import { ProjectObject } from "./projectObject";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import data from "../data/projectData.json";

export function ProjectsViewer() {

  return (
    <section className="projectsViewer">
      <h1>Mis Proyectos</h1>
      <div className="container-projects">
        {data.map((project, index) => (
          <ProjectObject
            key={index}
            img={project.img}
            title={project.name}
            description={project.descripcion || "sin descripcion"}
            link1={project.link1}
            link2={project.link2}
          />
        ))}
      </div>
    </section>
  );
}
