import "./projectsViewer.css";
import { ProjectObject } from "./projectObject";
import interfazBSP from "../assets/interfazBSP.jpg";
import {useState, useEffect} from "react"
import { image } from "framer-motion/client";

export function ProjectsViewer(){
    const [repos, setRepos]  = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        fetch("https://api.github.com/users/TechnoJavBar/repos")
        .then((res) => res.json())
        .then((data) => {
            const filtered  = data.filter(
                // (repos) => !repos.fork && repos.description
                 (repos) => !repos.fork
            );
            setRepos(filtered);
        })
        .catch((err) => console.log("error al cargar el repositorio: ", err))
        .finally(()=> setLoading(false));
    }, []);

    if ( loading ) return(<p>Cargando Proyectos...</p>);
    return(
        <section className="projectsViewer">
            <h1>Mis Proyectos</h1>{/*TODO: cambiar color h1*/}
            <div className="container-projects">
                {repos.map((repo) =>(
                    <ProjectObject key={repo.id} image="" title={repo.name} description={repo.description || "sin descripcion"} link1={""} link2={repo.html_url}/>
                ))}
            </div>
        </section>
    );
}