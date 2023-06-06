import viaje1 from '../images/viaje1.jpeg'
import viaje2 from '../images/viaje2.jpeg'
import viaje3 from '../images/viaje3.jpeg'
import viaje4 from '../images/viaje4.jpeg'
import viaje5 from '../images/viaje5.jpeg'
import viaje6 from '../images/viaje6.jpeg'
import viaje7 from '../images/viaje7.jpeg'
import Footer from '../components/Footer'
import Volver from '../components/Volver'


const Viajes = ()=> {
    return (
      <div className="viajes">
        <Volver/>
        <h2 className='titulo'>Viajá con nosotros</h2>
        <p className='subtitulo'>Viví la experiencia de viajar con la peña..</p>
        <ul className="slider">
          <li id="slide1">
            <img src={viaje1}/>
          </li>
          <li id="slide2">
            <img src={viaje2}/>
          </li>
          <li id="slide3">
            <img src={viaje3}/>
          </li>
          <li id="slide4">
            <img src={viaje4}/>
          </li>
          <li id="slide5">
            <img src={viaje5}/>
          </li>
          <li id="slide6">
            <img src={viaje6}/>
          </li>
          <li id="slide7">
            <img src={viaje7}/>
          </li>
        </ul>
        
        <ul className="menu">
          <li>
            <a href="#slide1">1</a>
          </li>
          <li>
            <a href="#slide2">2</a>
          </li>
          <li>
            <a href="#slide3">3</a>
          </li>
          <li>
            <a href="#slide4">4</a>
          </li>
          <li>
            <a href="#slide5">5</a>
          </li>
          <li>
            <a href="#slide6">6</a>
          </li>
          <li>
            <a href="#slide7">7</a>
          </li>
        </ul>

        <div className='info'>
          <h3>Información importante</h3>
          <p>-Los pagos de los viajes a la cancha son 48hs antes de partir</p>
          <p>-Si el pago no está realizado, no se guardará el lugar, sin excepción</p>
        </div>

        <div className='contacto'>
          <p>Contactanos para más info</p>
          <a href='https://api.whatsapp.com/send?phone=543402520117&text=Hola,%20quiero%20saber%20más%20sobre%20los%20viajes%20a%20la%20cancha%20💙💛💙'>
            <img src='https://www.svgrepo.com/show/475692/whatsapp-color.svg'/>WhatsApp
          </a>
        </div>

        <Footer/>
      </div>
    )
  }
  
  export default Viajes;