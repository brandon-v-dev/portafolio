import { Proyecto } from '../componentes/proyecto';
import '../stylesheet/proyectos.scss';
import weatherAppMockup from '../assets/proyectos/weatherApp/weather-app-shot2.png';
import kanbanAppMockup from '../assets/proyectos/kanban/kanban-shot.png';
      // -Puedes ver el pronostico para los proximos cinco dias con una grafica que te detalla la temperatura en el transcurso del dia.

      // Actualmente estoy trabajando en este proyecto, es un proyecto personal que me ayuda a mejorar mis habilidades en el desarrollo web.
      // <br></br>
      // Esta app esta basada en el metodo kanban, puedes crear tableros, listas y tareas.

      // <br/><br/>
      // -Hasta el momento puedes en cuanto a <span style={{fontWeight: 'bold'}}>tableros</span>: Crear tableros.
      // <br/><br/>
      // -En cuanto a <span style={{fontWeight: 'bold'}}>listas</span>: Copiar listas, moverlas con drag and drop o manualmente especificando en que posicion quieres mover una lista, tambien puedes cambiar su color y editar su nombre.
      // <br/><br/>
      // -En cuanto a <span style={{fontWeight: 'bold'}}>tareas</span>: Mover tareas entre listas, editar su nombre, elimianarlas, cambiar su color y marcarlas como completadas, colocarle un color de portada, modificar ese color de portada(dentro de poco podrás colocarle una imagen de portada).
      // <br></br>
      // <span style={{fontWeight: 'bold'}}>
      //   Te invito a que pruebes la app y me des tu opinión. Aunque por el momento quizás no tengas una buena experiencia de usuario,
      //   estoy trabajando en ello para que lo sea. Gracias por tu tiempo! :).
const proyectos = [
  {
    id: 'weather-app',
    nombre: 'Aplicación Del Clima',
    mockups: [
      weatherAppMockup
    ],
    link: 'https://weather-app-re-gilt.vercel.app/',
    descripcion: <p>
        Aplicación del clima, si te registras o no, da igual. La app puede usarse asi, sin más.
        Si te resgistras tus datos se almacenan en tu cuenta, de lo contrario se almacenan en tu dispositivo(localstorage).
        <br/><br/>
      </p>
  },
  {
    id: 'kanban-app',
    nombre: 'Gestor De Tareas Basada En Kanban.',
    mockups: [kanbanAppMockup],
    link: 'https://kanbax.vercel.app/',
    descripcion: (
      <p>
        Inspirada en Trello, esta herramienta de productividad permite gestionar flujos de trabajo mediante tableros dinámicos. 
        Incluye funcionalidades avanzadas de <strong>drag and drop</strong>, personalización estética de listas y tareas, 
        y una gestión intuitiva de estados para optimizar la organización personal o de equipos.
      </p>
    )
  }
];

export const Proyectos = () => {
  return (
    <div className='seccion-proyectos'>
      <h1 className='seccion-titulo source-sans-3-extrabold'>
        Mis Proyectos
      </h1>
      <div className='proyectos'>
        {proyectos.map((p, index) => 
          <Proyecto 
            key={p.id} 
            id={p.id}
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