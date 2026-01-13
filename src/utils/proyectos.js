import weatherAppMockup from '../assets/proyectos/weatherApp/weather-app-shot2.png';
import kanbanAppMockup from '../assets/proyectos/kanban/kanban-shot.png';
import modvaultMockup from '../assets/proyectos/modvault/modvault-shot.png';
import { FaReact } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiSupabaseFill } from 'react-icons/ri';
import { IoLogoFirebase } from 'react-icons/io5';
import { TiWeatherCloudy } from 'react-icons/ti';

export const proyectos = [
  {
    id: 'modvault-app',
    nombre: 'ModVault',
    mockups: [
      modvaultMockup
    ],
    link: 'https://modvault.vercel.app/',
    descripcion: (
      <p>
        ModVault es una red social pequeña que he creado para que la comunidad gamer pueda 
        compartirse listas de mods facilmente.
        <br />
      </p>
    ),
    detalles: (
      <p>
        Este proyecto es una herramienta con la finalidad de compartir 
        listas de mods de manera fácil y rapida. Ya que cuando la lista de mods para un juego se vuelve muy grande, 
        por lo general la gente para poder compartir la lista con sus amigos o comunidad, recurren a crear un pdf con un listado de los nombres 
        de cada mod y el enlace en donde descargar dicho mod.
        <br />
        <br />
        Con mi proyecto solo tienen ir a su gestor de mods que están usando y exportar su lista mediante un archivo que el propio gestor construye,
        luego deben importar ese archivo en mi proyecto y los mods se añadiran en forma de card con su nombre y enlace.
        <br />
        Ahora simplemente deben compartir su perfil o el enlace directo de su lista de mods y listo.
      </p>
    ),
    features: [
      'Autenticación',
      'Notificaciones internas (In App)',
      'Sección de comentarios para cada lista', 
      'Copiar listas de otros usuarios a tu propio perfil',
      'Editor de texto enriquecido para descripción de listas',
      'Personalización de perfil', 
      'Modo oscuro/claro', 
    ],
    tecnologias: [
        <><FaReact /> React</>,
        <><BiLogoTypescript /> Typescript</>,
        <><RiSupabaseFill /> Supabase como backend</>,
    ]
  },
  {
    id: 'weather-app',
    nombre: 'Aplicación Del Clima',
    mockups: [
      weatherAppMockup
    ],
    link: 'https://weather-app-re-gilt.vercel.app/',
    descripcion: (
      <p>
        Aplicación del clima, si te registras o no, da igual. La app puede usarse asi, sin más.
        Si te resgistras tus datos se almacenan en tu cuenta, de lo contrario se almacenan en tu dispositivo(localstorage).
        <br/><br/>
      </p>
    ),
    detalles: (
        <p>
            Una aplicación del clima que desarrollé para mejorar mis habilidades, famirializandome más con react y su ecosistema de teconlogías y librerías.
        </p>
    ),
    features: [
        'Autenticación',
        'Pronóstico para los proximos 5 dias mediante una gráfica intuitiva',
        'Imagenes dinámicas que reflejan el pronostico',
        'Velocidad y grado de viento',
        'Calidad del aire',
    ],
    tecnologias: [
        <><FaReact /> React</>,
        <><BiLogoTypescript /> Typescript</>,
        <><IoLogoFirebase /> Firebase como backend</>,
        <><TiWeatherCloudy /> Api de OpenWeatherMap</>
    ]
  },
  {
    id: 'kanban-app',
    nombre: 'Gestor De Tareas Basada En Kanban.',
    mockups: [kanbanAppMockup],
    link: 'https://kanbax.vercel.app/',
    descripcion: (
      <p>
        Inspirada en Trello, esta herramienta de productividad permite gestionar flujos de trabajo y las tareas del día a día mediante tableros, listas y tarjetas. 
      </p>
    ),
    detalles: (
      <p>
        Buscaba un proyecto para poner a prubea mis habilidades de programación en aquel entonces.
        Enotonces pensé en Trello y creí que sería un buen desafío desarrollar un proyecto similar.
        <br />
        Asi que en otras palabras, este proyecto está hecho con la finalidad de seguir mejorando mis habilidades como desarrollador web.
        <br />
        Y puede usarse sin autenticarse, usando el modo demo que usa localstorage. Aunque algunas funcionalidades no estarían disponibles en este modo. 
      </p>
    ),
    features: ['Autenticación', 'Modo demo', 'Drag & Drop', 'Personalización de tarjetas', 'estados de tareas'],
    tecnologias: [
      <><FaReact /> React</>,
      <><BiLogoTypescript /> Typescript</>,
      <><IoLogoFirebase /> Firebase como backend</>
    ]
  }
];