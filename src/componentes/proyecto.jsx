import { useRef, useState } from 'react';
import '../stylesheet/proyecto.scss';

// export const Proyecto = ({nombreProyecto, img, link, detalles}) => {
//   const [detallesAbierto, setDetallesAbierto] = useState(false);
//   const refCollapse = useRef(null);

//   const handleCollapse = () => {
//     setDetallesAbierto(!detallesAbierto);
//     const isDetallesAbierto = !detallesAbierto;
//     const detalles = refCollapse.current;

//     if (isDetallesAbierto) {
//       detalles.style.gridTemplateRows = '1fr'
//     } else {
//       detalles.style.gridTemplateRows = '0fr';
//     }
//   }

//   return (
//     <div className='proyecto'>
//       <p className='nombre-proyecto montserrat'>{nombreProyecto}</p>
//       <img src={img} alt={img} className='img_proyecto' />
//       {/* <span className='link-proyecto'><a href='https://weather-app-re-gilt.vercel.app/'>{link}</a></span> */}
      
//       <div className='btns-proyecto'>
//         <button 
//         className={`montserrat btn-detalle ${detallesAbierto ? 'detalles-abierto' : 'detalles-cerrado'}`} 
//         onClick={handleCollapse}>

//         {detallesAbierto ? 'Cerrar' : 'ver detalles'}

//         </button>
//         <a className='montserrat' href={link} target='_blank' rel='noreferrer'>
//           <span>Ir al proyecto</span>
//           <img src='/imgs/iconos/icon-portafolio.svg' alt="" />
//         </a>
//       </div>
      
//       <div className='detalles' ref={refCollapse}>
//         <div className='inner'>{detalles}</div>
//       </div>
//     </div>
//   )
// }

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
    <article className='proyecto'>
      <div className='text'>
        <h1 className='titulo'>{nombreProyecto}</h1>
        <div className='descripcion'>
          {detalles}
        </div>
      </div>
      <div className='img-wrapper'>
        <img 
          src={img}
        />
      </div>
    </article>
  )
}