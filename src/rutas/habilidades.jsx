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
          <p className='montserrat descripcion-habilidad'>
            Hace relativamente poco aprendi react y desde entonces me he dado cuenta de la importancia 
            de dominar estas tecnologias, ya que mantienen codigo limpio y legible, haciendo más fácil escribir 
            y reutilizar componentes.
            <br /> <br />
            Aún me ando famiriliazando con el entorno de react, algunos de los hooks que domino son: 
            useState, useForms, useRef, useContext, useEffect. Tambien conozco useMemo y 
            useCallback pero hasta el momento no he visto necesario usarlos
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
              Redux toolkit
            </p>
          </div>
          
          <p className='montserrat descripcion-habilidad'>
            Redux la he usado para hacer proyectos interactivos como la weather app y evitar pasar props innecesarias.
          </p>
        </div>

        <div className='habilidad-contenedor'>
          <p className='montserrat-bold tecnologia-nombre'>
            Otros
          </p>
          <p className='montserrat descripcion-habilidad'>
            Git y Github básico. Bootstrap, sass. Recurisividad. En una ocasión usé firebase para poder tener usuarios en una app (weather app).
             Aprendo rapido;)
          </p>
        </div>
      </div>
    </div>
  )
}