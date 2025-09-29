import {ImagenProfile} from "../components/imagenProfile.jsx";
import profilePic from "../assets/user.jpeg";
import {AboutMe} from "../components/aboutMe.jsx";
import "./aboutMePage.css";

export function AboutMePage(){
    return(
        <main className="aboutMePage">
            <ImagenProfile imagen={profilePic} alt="Foto de perfil"/>
            <AboutMe />
        </main>
    );
}