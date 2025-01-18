import '../stylesheet/habilidades.scss';

export const Habilidades = () => {
  return (
    <seccion className='seccion-habilidades'>
      <h2 className='alice'>Mis habilidades</h2>

      <p className='introduccion-habilidad montserrat-bold'>
      Comprendo las bases de la programación, anteriormente he trabajado en proyectos personales y practicas con solamente html, css y js vanilla. Por lo tanto sé del dom, manipularlo y trabajar ‘nativamente’. 
      </p>

      <div className='habilidad-contenedor'>
        <p className='montserrat-bold tecnologia-nombre'>
          React
        </p>
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
        <p className='montserrat-bold tecnologia-nombre'>
          Typescript
        </p>
        <p className='montserrat descripcion-habilidad'>
          Aprendizaje en curso tambien, utilizo typescript para <span className='montserrat-medium'>escribir codigo organizado y 
          escalable</span>, desde que aprendí del tipado, me acostumbré a usarlo y ahora se me hace raro 
          escribir codigo sin tipar nada o sin saber que espera una función :’).
        </p>
      </div>

      <div className='habilidad-contenedor'>
        <p className='montserrat-bold tecnologia-nombre'>
          Redux toolkit
        </p>
        <p className='montserrat descripcion-habilidad'>
          Redux la he usado para hacer proyectos interactivos como la weather app y evitar pasar props innecesarias.
        </p>
      </div>
    </seccion>
  )
}