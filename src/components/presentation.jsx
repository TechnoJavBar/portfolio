import "./presentation.css";
import profilePhoto from "../assets/fotoAntonioJavierBarrancajimenez.png";
import { ImagenProfile } from "./imagenProfile";
import { DonwloadCVButton } from "../components/downloadCVButton";
export function Presentation() {
  return (
    <div className="presentacion">
      <div className="presentacionInfo">
        <h1>Antonio Javier Barranca Jimenez</h1>
        <p>Desarrollador aplicaciones web</p>
        <DonwloadCVButton />
      </div>
      <div>
        <ImagenProfile
          imagen={profilePhoto}
          alt="Foto de perfil Antonio Barranca"
        />
      </div>
    </div>
  );
}
