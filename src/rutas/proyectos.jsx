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
  },
  {
    nombre: 'Gestor de tareas basada en kanban.',
    img: '/imgs/kanbax.png',
    link: 'https://kanbax.vercel.app/',
    detalles: <p className='montserrat'>
      Actualmente estoy trabajando en este proyecto, es un proyecto personal que me ayuda a mejorar mis habilidades en el desarrollo web.
      <br></br>
      Esta app esta basada en el metodo kanban, puedes crear tableros, listas y tareas.

      <br/><br/>
      -Hasta el momento puedes en cuanto a <span style={{fontWeight: 'bold'}}>tableros</span>: Crear tableros.
      <br/><br/>
      -En cuanto a <span style={{fontWeight: 'bold'}}>listas</span>: Copiar listas, moverlas con drag and drop o manualmente especificando en que posicion quieres mover una lista, tambien puedes cambiar su color y editar su nombre.
      <br/><br/>
      -En cuanto a <span style={{fontWeight: 'bold'}}>tareas</span>: Mover tareas entre listas, editar su nombre, elimianarlas, cambiar su color y marcarlas como completadas, colocarle un color de portada, modificar ese color de portada(dentro de poco podrás colocarle una imagen de portada).
      <br></br>
      <span style={{fontWeight: 'bold'}}>
        Te invito a que pruebes la app y me des tu opinión. Aunque por el momento quizás no tengas una buena experiencia de usuario,
        estoy trabajando en ello para que lo sea. Gracias por tu tiempo! :).
      </span>
    </p>
  }
];

export const Proyectos = () => {
  return (
    <div className='seccion-proyectos'>
      <h2>Mis proyectos</h2>
      <div className='proyectos'>
        {proyectos.map((p) => {
          return <Proyecto key={p.nombre} nombreProyecto={p.nombre} img={p.img} link={p.link} detalles={p.detalles} />
        })}
      </div>
    </div>
  )
}