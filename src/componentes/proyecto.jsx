import { useRef, useState } from 'react';
import '../stylesheet/proyecto.scss';

export const Proyecto = ({nombreProyecto, img, link, detalles}) => {
  const [detallesAbierto, setDetallesAbierto] = useState(false);
  const refCollapse = useRef(null);

  const handleCollapse = () => {
    setDetallesAbierto(!detallesAbierto);
    const isDetallesAbierto = !detallesAbierto;
    const detalles = refCollapse.current;

    if (isDetallesAbierto) {
      detalles.style.gridTemplateRows = '1fr'
    } else {
      detalles.style.gridTemplateRows = '0fr';
    }
  }

    return (
        <div className='proyecto'>
          <p className='nombre-proyecto montserrat'>{nombreProyecto}</p>
          <img src={img} alt='weather app' />
          <span className='link-proyecto'>{link}</span>
          <button 
          className={`montserrat btn-detalle ${detallesAbierto ? 'detalles-abierto' : 'detalles-cerrado'}`} 
          onClick={handleCollapse}>

          {detallesAbierto ? 'Cerrar' : 'ver detalles'}

          </button>
          <div className='detalles' ref={refCollapse}>
            <div className='inner'>{detalles}</div>
          </div>
        </div>
    )
}