import { Link } from 'react-router-dom';
import '../stylesheet/inicio.scss';

export const Inicio = () => {
    return (
        <div className='seccion-sobre-mi source-sans-3-regular'>
            <p className='texto-sobre-mi'>
                <span className='source-sans-3-extrabold'>
                    Desarrollador de software, específicamente en el área del desarrollo web 
                </span>
                {/* <br /> */}
                Soy autodidacta y cada dia pongo mi granito de arena para poder de mejorar. Ahora mismo soy front-end junior, pero mi proposito es ser full-stack para poder desarrollar proyectos completos.
            </p>
            <p className='texto-sobre-mi'>
                Actualmente me dedico a la construcción de interfaces bonitas, 
                funcionales e intituivas junto a tecnologias como html, css, javascript y bibliotecas como react.
                <br />
                La finalidad es simple: <strong>generar una buena experiencia de usuario.</strong>
            </p>
            <p className='texto-sobre-mi'>
                Soy una persona que está en constante aprendizaje para mejorar 
                mis habilidades y estoy buscando oportunidades para crecer 
                profesionalmente <strong>
                mientras aporto valor a los equipos en los que colabore.
                </strong>
            </p>
            <p className='sugerencia'>
                Dirigete a la sección de <Link to='/proyectos'>Proyectos</Link> para ver algo de lo que he construido.
                Saludos! :)
            </p>
        </div>
    )
}