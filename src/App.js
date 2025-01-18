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
          <button className='btn-seleccionado'>Inicio</button>
          <button>Proyectos</button>
          <button>Habilidades</button>
        </div>
        {/* <Proyectos /> */}
        {/* <Inicio></Inicio> */}
        <Habilidades />
      </div>
    </div>
  );
}

export default App;
