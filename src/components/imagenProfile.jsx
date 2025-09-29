import './imagenProfile.css'
import {motion} from 'framer-motion'

export function ImagenProfile({imagen, alt}) {
    return (
        <motion.div 
        className="presentacionImg"
        initial={{
            opacity: 0,
            scale: 0.5,
            x: 100
        }}
        whileInView={{
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.2, ease: 'easeInOut' }
        }}
        >
            <img src={imagen} alt={alt}></img>
        </motion.div>
    )
}