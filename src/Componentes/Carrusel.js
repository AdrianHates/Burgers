function Carrusel( { elementos, onClick } ) {

  return(
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {elementos.map((x,i)=><button key={i} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${i}`} aria-label={`Slide ${i+1}`} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : undefined}></button> )}
      </div>
      {/*<div className="carousel-inner">
        <div className="carousel-inner">
        {elementos.map((x,i)=><div key={i} className={i===0?"carousel-item active":"carousel-item"}>
          <img className="d-block w-100" src={x} alt={`${i} Slide`} />
        </div>)}      
        </div>
      </div>*/}
      <div className="carousel-inner">
        {elementos.map((x,i)=><div key={i} className={i===0?"carousel-item active":"carousel-item"}>
          <img className="d-block w-100" src={x.url} alt={`${i} Slide`} />
          <div style={{textAlign:'left',height:'30rem'}} class="carousel-caption d-none d-md-block">
          {i===1?<h3 style={{fontStyle:'italic'}}>Best Offer</h3>:''}
          <h3>{x.texto}</h3>
          <h1 style={{fontSize:'3.5rem'}}>{x.titulo}</h1>
          <div style={{display: 'flex'}}>
          <h2 style={{fontSize:'3.5rem', color: '#ffcc00'}}>${x.precio}</h2>
          {i===1?<h3 style={{textDecoration:'underline'}}>$29.00</h3>:''}
          </div>
          <button onClick={onClick} style={{border:'none', borderRadius:'.1rem', padding:'.5rem 2rem', backgroundColor:'red', color:'white', fontWeight:'500'}}>BUY NOW</button>
      </div>
        </div>)}      
        </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carrusel;




