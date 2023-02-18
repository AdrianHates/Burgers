function Form() {
  return(
    <form style={{width:'25rem', padding:'1rem 3rem', height: '37.5rem'}} className="form">
      <h1>Take a Reservation</h1>
      <input placeholder="Name *" required />
      <input placeholder="E-mail *" required />
      <input placeholder="Phone *" required />
      <input placeholder="Data, Time *" required />
      <textarea style={{ height:'10rem' }} placeholder="Message" required />
      <button style={{ padding: '.7rem 0'}}>ORDER NOW</button>
    </form>
  )
}

export default Form;