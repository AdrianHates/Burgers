function Footer ( { logo } ) {
  return(
    <div className='footer'>
      <div className='logo'>
        <img alt='logo' src={logo} />
        <div>
          <p>Cangre</p>
          <h5>Burger</h5>
        </div>
      </div>
      <div id='vinculosFooter'>
        <div id='redes'>
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="bi bi-twitter"></i>
          <i className="fa fa-pinterest-p" aria-hidden="true"></i>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </div>
      </div>
      <div>Copyright © 2019 Burger Prince.</div>
    </div>
  )
}

export default Footer;