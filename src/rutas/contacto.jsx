import { MdEmail } from 'react-icons/md';
import '../stylesheet/contacto.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const metodosDeContactos = [
    {
        metodo: 'brandondev63@gmail.com',
        icono: <MdEmail />,
        link: 'mailto:brandondev63@gmail.com'
    },
    {
        metodo: 'Linkedin',
        icono: <FaLinkedin />,
        link: 'https://www.linkedin.com/in/brandon-vel%C3%A1zquez-661a69337/'
    },
    {
        metodo: 'Github',
        icono: <FaGithub />,
        link: 'https://github.com/brandon-v-dev'
    }
];

export const Contacto = () => {

    return (
        <section id='contacto' className='seccion-contacto'>
            <h1 className='source-sans-3-semibold'>
                Contacto
            </h1>
            <p className='introduccion-contacto source-sans-3-semibold'>
                Estoy abierto a nuevas oportunidades y proyectos. 
                Si tienes una consulta o simplemente quieres saludar, no dudes en escribirme.
            </p>

            <div className='metodos-de-contacto'>
                {metodosDeContactos.map((m, index) => 
                    <a 
                        key={index}
                        href={m.link} 
                        target={m.link.startsWith('http') ? '_blank' : '_self'}
                        rel='noreferrer'
                        className='contacto'>
                        <span aria-hidden={true} className='icono'>{m.icono}</span>
                        <span className='text source-sans-3-regular'>{m.metodo}</span>
                    </a>
                )}
            </div>
        </section>
    )
}
