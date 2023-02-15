function Testimonios( { personas } ) {
  return (
    <div id='testimonios'>
      <h3>Testimonials</h3>
      <h1>Whats Clients Say?</h1>
      <div id="personas">
      {personas.map((x,i)=><div key={i}>
        <img src={x.img} alt={x.nombre} />
        <div>
        <p>{x.descripcion}</p>
        <h2>{x.nombre}</h2>
        </div>
      </div>)}
    </div>
    </div>
  )
}

export default Testimonios;