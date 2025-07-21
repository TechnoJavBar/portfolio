import './navegator.css';

export function Navegator() {
    return (
        <nav className="navegator">
            <ul>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    )
}