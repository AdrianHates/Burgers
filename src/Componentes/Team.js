function Team( { players } ) {
  return (
    <section id='team'>
      <h3>Our Team</h3>
      <h1>Meet Our Team</h1>
      <div id="players">
      {players.map((x,i)=><div key={i}>
        <img src={x.img} alt={x.nombre} />
        <div>
        <h2>{x.nombre}</h2>
        <h6>{x.cargo}</h6>
        </div>
        <div className='playersRedes'>
          <a href='/'><i className="fa fa-facebook" aria-hidden="true"></i></a>
          <a href='/'><i className="bi bi-twitter"></i></a>
          <a href='/'><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
          <a href='/'><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>
      </div>)}
    </div>
    </section>
  )
}

export default Team;