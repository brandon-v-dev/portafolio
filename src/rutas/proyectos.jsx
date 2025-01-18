import { Proyecto } from '../componentes/proyecto';
import '../stylesheet/proyectos.scss';

const proyectos = [
  {
    nombre: 'Aplicación del clima(weather app).',
    img: '/imgs/img-weather-app.png',
    link: 'https://weather-app-re-gilt.vercel.app/',
    detalles: <p className='montserrat'>
      Mi primer app y proyecto medianamente grande, cuenta con las funciones más importantes que cualquier
      app del clima necesita tener como:
      <br/><br/>
        - Guardar y cambiar tu localidad para acceder de forma predeterminada, 
        tanto si usas la app con una cuenta registrada o sin resgistrarte(Te puedes registrar).
        <br/><br/>
        -Funciona sin registrarse. Si te resgistras tus datos se almacenan en tu cuenta, 
        de lo contrario se almacenan en tu dispositivo(localstorage).
        <br/><br/>
        -Puedes ver el pronostico para los proximos cinco dias con una grafica que te detalla la temperatura en el transcurso del dia.
    </p>
  }
];

export const Proyectos = () => {
  return (
    <div className='seccion-proyectos'>
      <h2>Proyectos</h2>

      <div className='proyectos'>
        {proyectos.map((p) => {
          return <Proyecto key={p.nombre} nombreProyecto={p.nombre} img={p.img} link={p.link} detalles={p.detalles} />
        })}
      </div>
    </div>
  )
}

{/* <div className='proyecto'>
          <p className='nombre-proyecto montserrat'>Aplicación del clima(weather app).</p>
          <img src='/imgs/img-weather-app.png' alt='weather app' />
          <span className='link-proyecto'>https://weather-app-re-gilt.vercel.app/</span>
          <button className='montserrat'>Ver detalles</button>
        </div> */}