import { FaGithub } from 'react-icons/fa';
import '../stylesheet/inicio.scss';
import { AiFillLinkedin } from 'react-icons/ai';

export const Inicio = () => {

    return (
        <section id='inicio' className='seccion-sobre-mi source-sans-3-regular'>

            <div className='cuadro-con-saludo'>
                <h2>
                    ¡HOLA! SOY BRANDON VELAZQUEZ
                </h2>
                <div className='iconos'>
                    <a 
                        href='https://www.linkedin.com/in/brandon-vel%C3%A1zquez-661a69337/'
                        target='_blank'
                    >
                        <span>
                            <AiFillLinkedin />
                        </span>
                    </a>
                    <a 
                        href='https://github.com/brandon-v-dev'
                        target='_blank'
                    >
                        <span>
                            <FaGithub />
                        </span>
                    </a>
                </div>
            </div>
            <div className='contenedor'>
                
                <h2 className='source-sans-3-extrabold'>
                    Desarrollador Web Junior 
                </h2>
                <p className='texto-sobre-mi'>
                    Autodidacta que cada dia pone su granito de arena para poder de mejorar. Ahora mismo soy front-end junior, pero mi proposito es ser full-stack para poder desarrollar proyectos completos.
                </p>
            </div>
            
            {/* <div className='contenedor sugerencia'>
                
            </div> */}
        </section>
    )
}