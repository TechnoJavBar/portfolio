import './css/imagenProfile.css'
import {motion} from 'framer-motion'

export function ImagenProfile({imagen, alt, px}) {
    return (
        <motion.div
            className="nav-profile-wrapper"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.3}}
            style={{
                width: px,
                height: px
            }}
        >
        <img src={imagen} alt={alt} className='nav-profile-img'/>    
        </motion.div>
    )
}