import './presentation.css'
import profilePhoto from '../assets/user.jpeg'
import { ImagenProfile } from './imagenProfile'
export function Presentation() {
    return (
        <div className="presentacion">
            <div className="presentacionInfo">
                <h1>Antonio Javier Barranca Jimenez</h1>
                <p>Desarrollador aplicaciones web</p>
            </div>
            <div className="presentacionImg">
                <ImagenProfile imagen={profilePhoto} alt="Foto de perfil Antonio Barranca" />
            </div>
        </div>
    )
}