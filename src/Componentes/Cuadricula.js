function Cuadricula( { productos, onClick } ) {
  return(
    <section id="cuadricula">
    <h3>Our Product</h3>
    <h2>Our Menu</h2>
    <div id="cuadriculaBotones">
      <button className='cuadriculaBotones' id='all' onClick={onClick}>ALL</button>
      <button className='cuadriculaBotones' id='burgers' onClick={onClick}>BURGERS</button>
      <button className='cuadriculaBotones' id='drinks' onClick={onClick}>DRINKS</button>
      <button className='cuadriculaBotones' id='snacks' onClick={onClick}>SNACKS</button>
    </div>
    <div id="columnas">
      {productos.map((x,i)=><div key={i}>
        <img src={x.img} alt={x.titulo} />
        <h3>{x.titulo}</h3>
        <p>{x.descripcion}</p>
        <div>${x.precio}.00</div>
      </div>)}
    </div>
  </section>
  )
  
}

export default Cuadricula;