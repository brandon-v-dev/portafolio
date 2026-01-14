import { Proyecto } from '../componentes/proyecto';
import '../stylesheet/proyectos.scss';
import { proyectos } from '../utils/proyectos';

export const Proyectos = () => {
  return (
    <div className='seccion-proyectos'>
      <h1 className='seccion-titulo source-sans-3-extrabold'>
        Proyectos realizados hasta la fecha
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
            detalles={p.detalles}
            features={p.features}
            tecnologias={p.tecnologias}
            className={index % 2 ? 'inverse' : ''}
          />
        )}
      </div>
    </div>
  )
}