import '../stylesheet/contacto.scss';

export const Contacto = () => {
    return (
        <div className='seccion-contacto'>
            <p className='introduccion-contacto montserrat-bold'>
            Estoy abierto a nuevas oportunidades y proyectos. 
            Si tienes una consulta o simplemente quieres saludar, no dudes en escribirme.
            </p>

            <div className='metodos-de-contacto'>
                <div className='contacto'>
                    <img src='/imgs/iconos/icon-email.svg' alt='icono email' />
                    <p className='montserrat'>leyderlevel1@gmail.com</p>
                </div>
                <div className='contacto'>
                    <img src='/imgs/iconos/icon-linkedin.svg' alt='icono email' />
                    <a className='montserrat' href='https://www.linkedin.com/in/brandon-vel%C3%A1zquez-661a69337/'>
                        Mi perfil en linkedin
                    </a>
                </div>
                <div className='contacto'>
                    <img src='/imgs/iconos/icon-github.svg' alt='icono email' />
                    <a className='montserrat' href='https://github.com/brandon-v-dev'>
                        Mi Github
                    </a>
                </div>
            </div>
        </div>
    )
}