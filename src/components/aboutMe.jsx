import './aboutMe.css'
import { motion} from 'framer-motion';

export function AboutMe() {
    return (
        <motion.div
        className="aboutMe"
        id='about'
        initial={{
            opacity: 0,
            x: -200
        }}
        whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.9, delay: 0.2, ease: 'easeInOut' }
        }}
        >
            <h2>Sobre mí</h2>
            <div>
                <p>
                    Soy un desarrollador web apasionado por crear experiencias digitales únicas. Con una sólida formación en HTML, CSS y JavaScript, me especializo en el desarrollo de aplicaciones web modernas y responsivas.
                </p>
                <p>
                    Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente. Siempre estoy buscando nuevos desafíos que me permitan crecer profesionalmente.
                </p>
            </div>
        </motion.div>
    )
}