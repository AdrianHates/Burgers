function Encabezado ( { logo } ) {
  return(
    <div id='encabezado'>
      <div className='logo'>
        <img alt='logo' src={logo} />
        <div>
          <p>Cangre</p>
          <h5>Burger</h5>
        </div>
      </div>
      <div id='vinculos'>
        <div id='secciones'>
          <ul>
            <li><a href='#encargado'>About</a></li>
            <li><a href='#cuadricula'>Pricing</a></li>
            <li><a href='#contact-us'>Contacts</a></li>
            <li>All Blocks</li>
          </ul>
        </div>
        <div id='redes'>
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="bi bi-twitter"></i>
          <i className="fa fa-pinterest-p" aria-hidden="true"></i>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default Encabezado;