import '../stylesheet/habilidades.scss';

export const Habilidades = () => {
  return (
    <div className='seccion-habilidades'>
      {/* <h2 className='alice'>Mis habilidades</h2> */}

      <p className='introduccion-habilidad montserrat-bold'>
      Conozco y comprendo las bases de la programación, anteriormente he trabajado en proyectos personales y practicas con solamente html, css y js vanilla. Por lo tanto sé del dom, manipularlo y trabajar ‘nativamente’. 
      </p>

      <div className='habilidades'>
        <div className='habilidad-contenedor'>
          <div className='titulo'>
          <img src='/imgs/iconos/icon-react.svg' alt='icono de react'></img>

            <p className='montserrat-bold tecnologia-nombre'>
              React
            </p>
          </div>
          <p className='montserrat descripcion-habilidad'> {/* IMPORTANTE: VENDERME MÁS PARA GANAR LA ATENCION DE RECLUTADORES*/}
            Tengo conociemientos solidos en react, he trabajado en proyectos personales y practicas
            con esta libreria. <span className='montserrat-medium'>Me gusta trabajar con react porque me permite </span>
            escribir codigo limpio y escalable, ademas de que me permite crear interfaces de usuario de manera eficiente y modular.
            <br /> <br />
          </p>
        </div>

        <div className='habilidad-contenedor'>
          
          <div className='titulo'>
            <img src='/imgs/iconos/icon-typescript.svg'></img>
          <p className='montserrat-bold tecnologia-nombre'>
            Typescript
          </p>
          </div>
          <p className='montserrat descripcion-habilidad'>
            Aprendizaje en curso tambien, utilizo typescript para <span className='montserrat-medium'>escribir codigo organizado y 
            escalable</span>, desde que aprendí del tipado, me acostumbré a usarlo y ahora se me hace raro 
            escribir codigo sin tipar nada o sin saber que espera una función :’).
          </p>
        </div>

        <div className='habilidad-contenedor'>
          <div className='titulo'>
            <img src='/imgs/iconos/icon-redux.svg' alt='icono de redux' />
            <p className='montserrat-bold tecnologia-nombre'>
              Redux toolkit y zustand
            </p>
          </div>
          
          <p className='montserrat descripcion-habilidad'>
            {/* He usado zustand y redux, para hacer proyectos interactivos y evitar pasar props innecesarias. */}
            He trabajado con redux toolkit y zustand, me gusta trabajar con zustand porque
            me permite tener un estado global y manejarlo de forma eficiente, ademas de que me permite
            escribir menos codigo y mantener una estructura clara en mis aplicaciones.
          </p>
        </div>

        <div className='habilidad-contenedor'>
          <div className='titulo'>
            <p className='montserrat-bold tecnologia-nombre'>
              Otros
            </p>
          </div>
          <p className='montserrat descripcion-habilidad'>
            Git y Github básico. Bootstrap, sass. Recurisividad. En una ocasión usé firebase para poder tener usuarios en una app (weather app).
          </p>
        </div>
      </div>
    </div>
  )
}