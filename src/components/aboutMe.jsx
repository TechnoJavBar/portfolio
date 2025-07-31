import './aboutMe.css'
import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export function AboutMe() {
    return (
        <div
        className="aboutMe"
        id='about'
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
        </div>
    )
}