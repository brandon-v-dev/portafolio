import { Link } from 'react-router-dom';
import '../stylesheet/inicio.scss';

export const Inicio = () => {
    return (
        <div className='seccion-sobre-mi source-sans-3-regular'>
            <p className='texto-sobre-mi'>
                Hola!, soy una persona nueva en el mundo del desarrollo de software, específicamente en el área del desarrollo web.
                Soy autodidacta y cada dia pongo mi granito de arena para poder de mejorar. Ahora mismo soy front-end junior, pero mi proposito es ser full-stack para poder desarrollar proyectos completos.
            </p>
            <p className='texto-sobre-mi'>
                Actualmente me dedico a la construcción de interfaces bonitas, 
                funcionales e intituivas junto a tecnologias como html, css, javascript y bibliotecas como react.
                <br />
                La finalidad es simple: <span>generar una buena experiencia de usuario.</span>
                {/* <br></br>
                <br></br> */}
            </p>
            <p className='texto-sobre-mi'>
                Soy una persona que está en constante aprendizaje para mejorar 
                mis habilidades y estoy buscando oportunidades para crecer 
                profesionalmente <span>
                mientras aporto valor a los equipos en los que colabore.
                </span>
            </p>
            <p className='sugerencia'>
                Dirigete a la sección de <Link to='/proyectos'>Proyectos</Link> para ver algo de lo que he construido.
                Saludos! :)
            </p>
        </div>
    )
}