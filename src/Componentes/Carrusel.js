function Carrusel( { elementos } ) {

  return(
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {elementos.map((x,i)=><button key={i} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${i}`} aria-label={`Slide ${i+1}`} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : undefined}></button> )}
      </div>
      <div className="carousel-inner">
        <div className="carousel-inner">
        {elementos.map((x,i)=><div key={i} className={i===0?"carousel-item active":"carousel-item"}>
          <img className="d-block w-100" src={x} alt={`${i} Slide`} />
        </div>)}      
        </div>
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