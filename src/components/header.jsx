import "./css/header.css";
import { Link } from "react-router-dom";
import { ImagenProfile } from "./imagenProfile.jsx";
import profilePhoto from "../assets/fotoAntonioJavierBarrancajimenez.png";
import { IoSettingsOutline } from "react-icons/io5";

export function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-izda">
          <ImagenProfile imagen={profilePhoto} px={40} src="AJ" />
          <Link to={"/"}>Inicio</Link>
          <Link to={"/about"}>Sobre mí</Link>
          <Link to={"/projects"}>Proyectos</Link>
          <Link to={"/skills"}>Skills</Link>
          <Link to={"/contact"}>Contacto</Link>
        </div>
        <div className="nav-dcha">
          <Link to={"/config"}>
            <IoSettingsOutline />
          </Link>
          <h2>Javi TV</h2>
        </div>
      </nav>
    </header>
  );
}
