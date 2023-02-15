function Contacto() {
  return(
    <form id="contacto">
      <input placeholder="Name *" required />
      <input placeholder="E-mail *" required />
      <input placeholder="Phone *" />
      <textarea placeholder="Message" required />
      <button>SEND MESSAGE</button>
    </form>
  )
}

export default Contacto;