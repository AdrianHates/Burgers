import './App.css';
import React, { useState, useEffect } from 'react'
import Encabezado from './Componentes/Encabezado'
import Carrusel from './Componentes/Carrusel'
import Form from './Componentes/Form'
import Cuadricula from './Componentes/Cuadricula'
import Testimonios from './Componentes/Testimonios'
import Team from './Componentes/Team'
import Atencion from './Componentes/Atencion'
import Footer from './Componentes/Footer'
/*Data*/
import productosD from './Datos/productosD'
import playersD from './Datos/playersD'
import Contacto from './Componentes/Contacto'
import logoBurger from './svg/logoBurger.svg'
import icono from './icone-logo-whatsapp-vert.png'

const imagenes = require.context('./imagenes',true);
const gente = require.context('./gente',true);

function mapear(array) {
  let result = array.map((x, i) => {
    let a = {};
    a.categoria = x.categoria
    a.img = imagenes(`./menu${i + 1}.jpg`);
    a.titulo = x.titulo;
    a.descripcion = x.descripcion;
    a.precio = x.precio;
    return a;
  })
  return result
}

function App() {

  const elementos = [{
    url: 'https://technocio.com/wp-content/uploads/2020/05/hamburguesa.jpg',
    texto: 'Express food to raise your mood!',
    titulo: 'Mexican Burger',
    precio: 14.99
  }, {
    url: 'https://estaticos-cdn.elperiodico.com/clip/1a0a98f5-754d-49f3-a3dd-455d1b98203e_alta-libre-aspect-ratio_default_0.jpg',
  texto: 'Enjoy this amazing offer, which includes our Standard Taco and Mexican Sauce.',
  titulo: 'Double Snack Menu',
  precio: 40.99
  }]
  
  const productos = mapear(productosD)
  const [prod, setProd] = useState(productos)
  const cuadriculaBotones = document.querySelectorAll('.cuadriculaBotones')

  function filtrar(event) {

    let targeando = event.currentTarget
    cuadriculaBotones.forEach(x=>{
      x.style.textDecoration='none'
      x.classList.remove('activo')})
    if(targeando.id==='all') {
      setProd(productos)
    } else {
    let filtro = productos.filter(x=>x.categoria===targeando.id)
    setProd(filtro)
    };
    targeando.style='text-decoration: underline var(--dorado) .3rem; text-underline-offset: .75rem'
    targeando.classList.add('activo')
  }
  
  const personas = [{
    descripcion: 'When a beautiful design is combined with powerful technology, it truly is an artwork. I love how my website operates and looks with this theme. Thank you for the awesome ...',
    nombre: 'Jenny Perez'
  },{
    descripcion: 'When a beautiful design is combined with powerful technology, it truly is an artwork. I love how my website operates and looks with this theme. Thank you for the awesome ...',
    nombre: 'Samantha Partida'
  }, {
    descripcion: 'When a beautiful design is combined with powerful technology, it truly is an artwork. I love how my website operates and looks with this theme. Thank you for the awesome ...',
    nombre: 'Lorena Garza'
  }].map((x,i)=>{
    let b = {};
    b.img = gente(`./gente${i+1}.jpg`);
    b.nombre = x.nombre;
    b.descripcion = x.descripcion;
    return b;
  })

  useEffect(()=>{
    const cuadriculaBotones = document.querySelectorAll('.cuadriculaBotones')
    cuadriculaBotones.forEach(x=>{
      x.addEventListener('mouseover',(e)=>{ 
        let a = e.currentTarget;
        a.style='text-decoration: underline var(--dorado) .3rem; text-underline-offset: .75rem' 
             
      });
      x.addEventListener('mouseout',(e)=> {
        let a = e.currentTarget
        if(!a.classList.contains('activo')){
        a.style='text-decoration: none'
        }
      })      
    })
  },[])

  function Oculto() {
    let a = document.getElementById('efectoOculto')
    a.style.transitionDuration='500ms'
    if(a.style.height==='7rem') {
    a.style.height='0';    
    } else {
      a.style.height='7rem'
    }
  }

  useEffect(function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new window.google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new window.google.maps.Marker({
      position: coord,
      map: map
    });
},[])

function eventoModal() {
  let a = document.getElementById('contModal')
  let b = document.getElementById('capa')
  let body = document.querySelector('body')
  a.style.display='flex';
  b.style.display='flex';
  body.style.overflow='hidden'

  
  
}

function cerrarModal() {
  let a = document.getElementById('contModal')
  let b = document.getElementById('capa')
  let body = document.querySelector('body')
  a.style.display='none'
  b.style.display='none'
  body.style.overflow='visible'
}

  return (
    <div className="App">
      <div id='envolt'>
        <Encabezado logo={logoBurger} onClick={Oculto}/>
        <div id="efectoOculto">
          <ul>
            <li><a href='#encargado'>About</a></li>
            <li><a href='#cuadricula'>Pricing</a></li>
            <li><a href='#contact-us'>Contacts</a></li>
            <li>All Blocks</li>
          </ul>
        </div>
      </div>
      <Carrusel elementos={elementos} onClick={eventoModal}/>
      
      <div id="encargado">
        
          <img src="https://template79170.motopreview.com/mt-demo/79100/79170/mt-content/uploads/2019/03/mt-1781-home-chef.jpg" alt="encargado" />
          <div>
            <h1>Jack Winsly</h1>
            <h3>Head Chef</h3>
            <p>Welcome to Burger King website. Here we try to share our vision about food quality, our mission about
customer’s satisfaction and introducing services that we provide for each one of you.</p>
            <p>We offer fast food, served fresh with the highest quality of ingredients: fresh, handcut chicken, buns baked fresh in our own bakeries and the most delicious hot dogs with a variety of toppings.</p>
            <img alt="firma" src="https://img.freepik.com/vector-premium/firma-manual-documentos-sobre-fondo-blanco-letras-caligrafia-dibujadas-mano_81863-5612.jpg?" />
          </div>
        
        <Form />
      </div>
      
      <Cuadricula productos={prod} onClick={filtrar} />
      <Testimonios personas={personas} />
      <Team players={playersD} />
      <Atencion />
      <div id='contact-us'>
        <h3>Get In Touch</h3>
        <h1>Contact Us</h1>
        <div>
          <Contacto />
          <div id='map'></div>
        </div>
      </div>
      <Footer logo={logoBurger} />
      <div id='capa'>
      </div>
      <div id='contModal'>
      <Form id='modal' />
      <button class="close-button" onClick={cerrarModal}>Cerrar &times;</button>
      </div>
      <a href='https://wa.me/15551234567'><img id='ws' alt='ws' src={icono} /></a>
    </div>
  );
}

export default App;
