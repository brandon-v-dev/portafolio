import './App.scss';
import { Habilidades } from './rutas/habilidades';
import { Inicio } from './rutas/inicio';
import { Proyectos } from './rutas/proyectos';

import { Route, Routes, Link, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (
    <div className="portafolio">
      <header>
        <div className='foto'>
          foto
        </div>
        <p className='alice-regular mi-nombre'>Brandon Leyder</p>
        <p className='alice-regular descripcion'>Desarrollador web jr</p>
      </header>
      <div className='contenedor-principal'>
        <div className='btns'>
          <button className={location.pathname === '/' ? 'btn-seleccionado' : ''}>
            <Link to='/'>
              Inicio
            </Link>
          </button>
          <button className={location.pathname === '/proyectos' ? 'btn-seleccionado' : ''}>
            <Link to='/proyectos'>
              Proyectos
            </Link>
          </button>
          <button className={location.pathname === '/habilidades' ? 'btn-seleccionado' : ''}>
            <Link to='habilidades'>
              Habilidades
            </Link>
          </button>
        </div>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/proyectos' element={<Proyectos />}></Route>
          <Route path='/habilidades' element={<Habilidades />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
