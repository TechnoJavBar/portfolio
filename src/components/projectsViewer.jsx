import "./projectsViewer.css";
import { ProjectObject } from "./projectObject";
import interfazBSP from "../assets/interfazBSP.jpg";
export function ProjectsViewer(){
    return(
        <section className="projectsViewer">
            <h1>Mis Proyectos</h1>{/*TODO: cambiar color h1*/}
            <div className="container-projects">
                <ProjectObject
                    image={interfazBSP}
                    title={"BarrancaSaludPlus"}
                    description={"Aplicación para la gestión de un centro de salud privado."}
                    link1={""}
                    link2={"/projects/portafolio"}/>
                <ProjectObject
                    image={interfazBSP}
                    title={"MariaFlorDeJara"}
                    description={"Catálogo online de diferentes productos."}
                    link1={""}
                    link2={"https://github.com/TechnoJavBar/frontendMariaFlorDeJara/tree/main/client"}
                />
            </div>
        </section>
    );
}