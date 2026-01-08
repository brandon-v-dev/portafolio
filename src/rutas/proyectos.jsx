import { Proyecto } from '../componentes/proyecto';
import '../stylesheet/proyectos.scss';
import weatherAppMockup from '../assets/proyectos/weatherApp/weather-app-shot2.png';
      // -Puedes ver el pronostico para los proximos cinco dias con una grafica que te detalla la temperatura en el transcurso del dia.

const proyectos = [
  {
    nombre: 'Aplicación del clima(weather app).',
    mockups: [
      weatherAppMockup
    ],
    link: 'https://weather-app-re-gilt.vercel.app/',
    descripcion: <p>
        Aplicación del clima, si te registras o no, da igual. La app permite usarla asi, sin más.
        Si te resgistras tus datos se almacenan en tu cuenta, de lo contrario se almacenan en tu dispositivo(localstorage).
        <br/><br/>
      </p>
  },
  {
    nombre: 'Gestor de tareas basada en kanban.',
    mockups: [],
    link: 'https://kanbax.vercel.app/',
    descripcion: <p>
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
      <h1 className='seccion-titulo alice-regular'>Mis proyectos</h1>
      <div className='proyectos'>
        {proyectos.map((p, index) => 
          <Proyecto 
            key={p.nombre} 
            nombreProyecto={p.nombre} 
            mockups={p.mockups} 
            link={p.link} 
            descripcion={p.descripcion} 
            className={index % 2 ? 'inverse' : ''}
          />
        )}
      </div>
    </div>
  )
}