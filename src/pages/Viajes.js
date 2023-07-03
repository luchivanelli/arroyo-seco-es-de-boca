import viaje1 from '../images/viaje1.jpeg'
import viaje2 from '../images/viaje2.jpeg'
import viaje3 from '../images/viaje3.jpeg'
import viaje4 from '../images/viaje4.jpeg'
import viaje5 from '../images/viaje5.jpeg'
import viaje6 from '../images/viaje6.jpeg'
import viaje7 from '../images/viaje7.jpeg'
import Footer from '../components/Footer'
import Volver from '../components/Volver'
import { Carousel } from 'react-bootstrap'


const Viajes = ()=> {
    return (
      <div className="viajes">
        <Volver/>
        <h2 className='titulo'>Viajá con nosotros</h2>
        <p className='subtitulo'>Viví la experiencia de viajar con la peña..</p>
        <Carousel className='carrusel'>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={viaje1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={viaje2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={viaje3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={viaje4}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={viaje5}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={viaje6}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={viaje7}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

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