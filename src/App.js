import './App.scss';
import { Habilidades } from './rutas/habilidades';
import { Inicio } from './rutas/inicio';
import { Proyectos } from './rutas/proyectos';
import { Contacto } from './rutas/contacto';

import { useLocation, NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {

  const location = useLocation();
  const hash = location.hash;

  const esLaSeccionActual = (seccion) => {
    const seccionActual = hash.replace('#', '');

    return seccionActual === seccion ? 'active-link' : '';
  }

  return (
    <nav>
      <ul className='source-sans-3-medium'>
        <li>
          <NavLink 
            to='/' 
            className={`${esLaSeccionActual('')}`}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='#proyectos' 
            className={`${esLaSeccionActual('proyectos')}`}
          > 
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='#habilidades' 
            className={`${esLaSeccionActual('habilidades')}`}
          >
            Habilidades
          </NavLink>  
        </li>
        <li>
          <NavLink 
            to='#contacto' 
            className={`${esLaSeccionActual('contacto')}`}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export const App = () => {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {

      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }, 0);
      }
    } else {
      const element = document.getElementById('inicio');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }, 0);
      }
    }
  }, [hash]);

  return (
    <main className="portafolio">
      <Navbar />
      <div className='contenedor-principal'>

        <Inicio />
        <Proyectos />
        <Habilidades />
        <Contacto />

      </div>
    </main>
  );
}