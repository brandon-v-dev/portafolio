import './App.scss';
import { Habilidades } from './rutas/habilidades';
import { Inicio } from './rutas/inicio';
import { Proyectos } from './rutas/proyectos';

import { Route, Routes, Link } from 'react-router-dom';

function App() {
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
          <button className='btn-seleccionado'>
            <Link to='/'>
              Inicio
            </Link>
          </button>
          <button>
            <Link to='/proyectos'>
              Proyectos
            </Link>
          </button>
          <button>
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
