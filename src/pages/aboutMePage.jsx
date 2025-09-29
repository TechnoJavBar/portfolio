import {ImagenProfile} from "../components/imagenProfile.jsx";
import profilePic from "../assets/user.jpeg";
import {AboutMe} from "../components/aboutMe.jsx";

export function AboutMePage(){
    return(
        <main>
            <ImagenProfile imagen={profilePic} alt="Foto de perfil"/>
            <AboutMe />
        </main>
    );
}