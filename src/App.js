import './App.scss';
import { Habilidades } from './rutas/habilidades';
import { Inicio } from './rutas/inicio';
import { Proyectos } from './rutas/proyectos';
import { Contacto } from './rutas/contacto';

import { Route, Routes, Link, useLocation, NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <ul className='montserrat-400'>
        <li>
          <NavLink to='/' className={({ isActive }) => isActive ? "active-link" : ""} end>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to='/proyectos' className={({ isActive }) => isActive ? "active-link" : ""} end> 
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink to='/habilidades' className={({ isActive }) => isActive ? "active-link" : ""} end>
            Habilidades
          </NavLink>  
        </li>
        <li>
          <NavLink to='/contacto' className={({ isActive }) => isActive ? "active-link" : ""} end>
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export const App = () => {

  const location = useLocation();

  return (
    <main className="portafolio">
      <header>
        <div className='foto'>
          foto
        </div>
        <p className='alice-regular mi-nombre'>Brandon Leyder</p>
        <p className='alice-regular descripcion'>Desarrollador web jr</p>
      </header>
      <Navbar>
        
      </Navbar>
      <div className='contenedor-principal'>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/proyectos' element={<Proyectos />}></Route>
          <Route path='/habilidades' element={<Habilidades />}/>
          <Route path='/contacto' element={<Contacto />}></Route>
        </Routes>
      </div>
    </main>
  );
}