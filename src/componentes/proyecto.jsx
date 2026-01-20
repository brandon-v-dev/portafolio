import { forwardRef, useRef, useState } from 'react';
import '../stylesheet/proyecto.scss';

const ModalDetalles = forwardRef(({ id, cerrar, nombreProyecto, detalles, features, tecnologias }, ref) => {
  return (
    <dialog ref={ref} id={id} onClose={cerrar} onClick={(e) => e.target === ref.current && cerrar()}>
      <div className='modal-contenedor'>
        <header className='modal-header'>
          <h2 className='source-sans-3-extrabold'>
            {nombreProyecto}
          </h2>
          <button className='btn-cerrar' onClick={cerrar}>
            &times;
          </button>
        </header>

        <section className='modal-body source-sans-3-regular'>
          <div className='detalles-texto'>
            <h3>Sobre el proyecto</h3>
            {detalles}
          </div>

          <div className='seccion-caracteristicas'>
            <h3>Caracteristicas importantes</h3>
            <div className="features-grid">

              {features?.map((feature, index) => (
                <span key={index} className="feature-tag">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className='tecnologias-usadas'>
            <h3>Tecnologías usadas</h3>

            <div>
              {tecnologias?.map((t, index) => (
                <span key={index}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <footer className="modal-footer">
          <button className="source-sans-3-semibold" onClick={cerrar}>
            Entendido
          </button>
        </footer>
      </div>
    </dialog>
  );
});

export const Proyecto = ({id, nombreProyecto, mockups, link, descripcion, detalles, features, tecnologias, className}) => {
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
            className='btn-abrir-detalles source-sans-3-regular'
            onClick={abrirModal}
          >
            Detalles
          </button>
          <button className='btn-ir-al-proyecto source-sans-3-regular'>
            <a href={link} target='_blank'>Ir al proyecto</a>
          </button>
        </footer>
      </div>
      <div className='img-wrapper'>
        <h2 className='titulo alice-bold'>
          {nombreProyecto}
        </h2>
        {mockups.map((m, index) => 
          <img 
            key={index}
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
        features={features}
        tecnologias={tecnologias}
      />

    </article>
  )
}