import { SiCss3, SiFirebase, SiGithub, SiHtml5, SiJavascript, SiRedux, SiTypescript } from 'react-icons/si';
import '../stylesheet/habilidades.scss';
import { FaReact } from 'react-icons/fa';
// import '../stylesheet/habilidades.scss';

const listaHabilidades = [
  {
    titulo: 'Fundamentos Web',
    iconos: [<SiHtml5 key="html" />, <SiCss3 key="css" />],
    descripcion: <>Maquetación semántica enfocada en <strong>SEO y accesibilidad</strong>. Dominio de Flexbox, CSS Grid y diseño responsivo adaptado a cualquier dispositivo.</>,
    claseIcono: ''
  },
  {
    titulo: 'JavaScript Vanilla',
    iconos: [<SiJavascript key="js" />],
    descripcion: <>Uso avanzado de <strong>ES6+</strong> y manipulación eficiente del <strong>DOM</strong>. Experiencia trabajando con programación asíncrona y consumo de APIs REST.</>,
    claseIcono: 'color-js'
  },
  {
    titulo: 'React.js',
    iconos: [<FaReact key="react" />],
    descripcion: (
      <>
        Desarrollo de componentes funcionales y uso de Hooks (useState, useEffect, useMemo).
        <br />
        Renderizado condicional y manejo de rutas con React Router.
      </>
    ),
    claseIcono: 'color-react'
  },
  {
    titulo: 'TypeScript',
    iconos: [<SiTypescript key="ts" />],
    descripcion: <>Tipado estático para asegurar la integridad de datos y mejorar la mantenibilidad del código en proyectos escalables.</>,
    claseIcono: 'color-ts'
  },
  {
    titulo: 'Gestión de Estado',
    iconos: [<SiRedux key="redux" />],
    descripcion: <>Arquitectura de estados globales utilizando <strong>Redux Toolkit</strong> y <strong>Zustand</strong> para un flujo de datos predecible y eficiente.</>,
    claseIcono: 'color-redux'
  },
  {
    titulo: 'Ecosistema y Herramientas',
    iconos: [<SiGithub key="github" />, <SiFirebase key="firebase" />],
    descripcion: <>Control de versiones con <strong>Git/GitHub</strong>. Estilizado con <strong>SASS/Bootstrap</strong> e integración básica de backend con <strong>Firebase</strong> y <strong>Supabase</strong>.</>,
    claseIcono: 'color-fb'
  }
];

export const Habilidades = () => {
  return (
    <section id='habilidades' className='seccion-habilidades'>
      <header className='introduccion-habilidad source-sans-3-semibold'>
        {/* <h2>
          Desarrollador Frontend con bases sólidas en JavaScript moderno (ES6+), manipulación del DOM y maquetación.
        </h2> */}

        <h2>Habilidades</h2>
      </header>

      <div className='habilidades'>
        {listaHabilidades.map((habilidad, index) => (
          <div className={`habilidad-contenedor ${habilidad.claseIcono}`} key={index}>
            <div className='titulo alice-semibold'>
              <div className='iconos-wrap'>
                {habilidad.iconos.map((Icono, idx) => (
                  <span key={idx} className={`icono-tech ${habilidad.claseIcono}`}>
                    {Icono}
                  </span>
                ))}
              </div>
              <p className='tecnologia-nombre source-sans-3-semibold'>
                {habilidad.titulo}
              </p>
            </div>
            <p className='descripcion-habilidad source-sans-3-regular body-text'>
              {habilidad.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};