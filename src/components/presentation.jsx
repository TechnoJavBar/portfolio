import './presentation.css'
import profilePhoto from '../assets/user.jpeg'
export function Presentation() {
    return (
        <div className="presentacion">
            <div className="presentacionInfo">
                <h1>Antonio Javier Barranca Jimenez</h1>
                <p>Desarrollador aplicaciones web</p>
            </div>
            <div className="presentacionImg">
                <img src={profilePhoto} alt="Profile"></img>
            </div>
        </div>
    )
}