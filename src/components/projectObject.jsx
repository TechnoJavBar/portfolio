import { Link } from "react-router-dom";
import "./projectObject.css";
import { FaGithub } from "react-icons/fa";
import {motion} from "framer-motion";

export function ProjectObject({key, image, title, description, link1, link2}){
    return(
        <motion.div 
        className="projectObject"
        key={key}
        whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
        }}
        >
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={link1} className="link">Ver Proyecto</Link>
            <Link to={link2} className="link"><FaGithub style={{width:"20px", height:"auto", color:"#ffff"}}/> Ver Código</Link>
        </motion.div>
    );
}