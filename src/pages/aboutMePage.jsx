import {AboutMe} from "../components/aboutMe.jsx";
import {ImagenProfile} from "../components/imagenProfile.jsx";
import profilePic from "../assets/fotoAntonioJavierBarrancajimenez.png";
import "./css/aboutMePage.css";

export function AboutMePage(){
    return(
        <main className="aboutMePage">
            <ImagenProfile imagen={profilePic} px={250} alt="Foto de perfil"/>
            <AboutMe />
        </main>
    );
}