import "./css/skillComponent.css"
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import * as Tb from "react-icons/tb";
import * as Bi from "react-icons/bi";
import * as Di from "react-icons/di";
import * as Bs from "react-icons/bs";

export const SkillComponent = ({skill}) => {

  const {icon, color, name} = skill;
  // Combinamos las librerías en un solo objeto para buscar
  const Icons = { ...Fa, ...Si, ...Tb, ...Bi, ...Di, ...Bs };
  
  // Seleccionamos el componente dinámicamente basado en el string del JSON
  const IconSelected = Icons[icon];

  return (
    <div className="skill-app-card" style={{backgroundColor: `${color}80`}}>
      <div className="icon-box" >
        {IconSelected ? (
          <IconSelected style={{color: color}} />
        ) : (
          <span>?</span>
        )}
      </div>
      <span className="icon-name">{name}</span>
    </div>
  );
}
