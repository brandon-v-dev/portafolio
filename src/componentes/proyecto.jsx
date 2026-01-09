import { forwardRef, useRef, useState } from 'react';
import '../stylesheet/proyecto.scss';

const ModalDetalles = forwardRef(({id, cerrar, nombreProyecto, detalles}, ref) => {

  return (
    <dialog ref={ref} id={id}>
      <header>
        <h1>
          {nombreProyecto}
        </h1>
      </header>
      {id}
      <button onClick={cerrar}>cerrar</button>
    </dialog>
  )
});

export const Proyecto = ({id, nombreProyecto, mockups, link, descripcion, detalles, className}) => {
  const dialogRef = useRef(null);

  const abrirModal = () => {
    dialogRef.current.showModal();
  }

  const cerrarModal = () => {
    dialogRef.current.close();
  }

  return (
    <article className={`proyecto ${className}`}>
      <div className='text'>
        <div className='wrapper'>
          <h2 className='titulo alice-bold'>
            {nombreProyecto}
          </h2>
          <div className='descripcion-contenedor source-sans-3-regular'>
            {descripcion}
          </div>
        </div>
        
        <footer>
          <button 
            className='btn-abrir-detalles source-sans-3-semibold'
            onClick={abrirModal}
          >
            Detalles
          </button>
          <button className='btn-ir-al-proyecto source-sans-3-semibold'>
            Ir al proyecto
          </button>
        </footer>
      </div>
      <div className='img-wrapper'>
        {mockups.map(m => 
          <img 
            src={m}
          />
        )}
      </div>

      <ModalDetalles 
        ref={dialogRef}
        id={id}
        cerrar={cerrarModal}
        nombreProyecto={nombreProyecto}
        detalles={detalles}
      />
    </article>
  )
}