import { Link } from 'react-router-dom';
import '../stylesheet/inicio.scss';

export const Inicio = () => {
    return (
        <div className='seccion-sobre-mi source-sans-3-regular'>
            <div className='contenedor'>
                <h2 className='source-sans-3-extrabold'>
                    Desarrollador de software, específicamente en el área del desarrollo web 
                </h2>
                <p className='texto-sobre-mi'>
                    Soy autodidacta y cada dia pongo mi granito de arena para poder de mejorar. Ahora mismo soy front-end junior, pero mi proposito es ser full-stack para poder desarrollar proyectos completos.
                </p>
            </div>
            <div className='contenedor'>
                <p className='texto-sobre-mi'>
                    Actualmente me dedico a la construcción de interfaces bonitas, 
                    funcionales e intituivas junto a tecnologias como html, css, javascript y bibliotecas como react.
                    <br />
                    La finalidad es simple: <strong>generar una buena experiencia de usuario.</strong>
                </p>
            </div>
            <div className='contenedor'>
                <p className='texto-sobre-mi'>
                    Soy una persona que está en constante aprendizaje para mejorar 
                    mis habilidades y estoy buscando oportunidades para crecer 
                    profesionalmente <strong>
                    mientras aporto valor a los equipos en los que colabore.
                    </strong>
                </p>
            </div>
            <div className='contenedor sugerencia'>
                <p className='texto-sobre-mi'>
                    Dirigete a la sección de <Link to='/proyectos'>Proyectos</Link> para ver algo de lo que he construido.
                    Saludos! :)
                </p>
            </div>
        </div>
    )
}