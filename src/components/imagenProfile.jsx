import './imagenProfile.css'

export function ImagenProfile({imagen, alt}) {
    return (
        <div className="presentacionImg">
            <img src={imagen} alt={alt}></img>
        </div>
    )
}