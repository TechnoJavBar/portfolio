import './contactForm.css'
import { useForm } from "react-hook-form"

export function ContactForm()
{
const {
    register, 
    handleSubmit, 
    formState:{errors},
    reset,
    } = useForm();

const onSubmit = handleSubmit((data) =>{
    reset();
    alert("Formulario enviado");
    console.log(data);
});


    return(
        <div>
            <div className='containerForm'>
                <form className='form' onSubmit={onSubmit}>
                    <div className="form-row">
                        <div className='form-control'>
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                {...register('name', {
                                required: "El nombre es obligatorio",
                                pattern: {
                                    message: "El nombre no es válido"
                                }
                                })}
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>

                        <div className={`form-control${errors.email ? " error" : ""}`}>
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                {...register('email', {
                                required: "El e-mail es obligatorio",
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: "El e-mail no es válido"
                                }
                                
                                })}
                                
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className='form-control'>
                        <textarea 
                        placeholder="Tu mensaje" 
                        rows={3} 
                        {...register('text', 
                            {
                                required: "debe escribir un mensaje", 
                                pattern: {
                                            message: "debe escribir un mensaje"
                                        }
                            })
                        }
                        />
                        {errors.text && <p>{errors.text.message}</p>}
                    </div>
                    <button type="submit">Contactar</button>
                </form>
            </div>
        </div>
    )
}