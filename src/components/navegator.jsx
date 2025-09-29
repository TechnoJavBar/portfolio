import './navegator.css';
import { Link } from 'react-router-dom';

export function Navegator() {
    return (
        <nav className="navegator">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Sobre mí</Link></li>
                <li><Link to="/skills">Habilidades</Link></li>
                <li><Link to="/projects">Proyectos</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    )
}