import Volver from '../components/Volver'
import Footer from '../components/Footer'
import { Carousel, Card } from 'react-bootstrap'
import solidaria1 from '../images/solidaria1.jpeg'
import solidaria2 from '../images/solidaria2.jpeg'
import solidaria3 from '../images/solidaria3.jpeg'
import solidaria4 from '../images/solidaria4.jpeg'
import solidaria5 from '../images/solidaria5.jpeg'
import solidaria6 from '../images/solidaria6.jpeg'
import solidaria7 from '../images/solidaria7.jpeg'
import solidaria8 from '../images/solidaria8.jpeg'
import solidaria9 from '../images/solidaria9.jpeg'
import solidaria10 from '../images/solidaria10.jpeg'

const Solidarias = ()=> {
    return (
      <div className="solidarias">
        <Volver/>
        <h2 className='titulo'>Jornadas solidarias</h2>
        <p className='subtitulo'>La peña realiza acciones y jornadas solidarias. Estamos comprometidos a ayudar, donar y colaborar con la sociedad sin importar los colores</p>

        {/* Carrusel 1 */}
        <Carousel className='carrusel'>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={solidaria1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={solidaria2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={solidaria3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={solidaria4}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={solidaria5}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <br/>

        {/* Carrusel 2 */}
        <Carousel className='carrusel'>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={solidaria6}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={solidaria7}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={solidaria8}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={solidaria9}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={solidaria10}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        {/* Cards */}

        <div className='cards container'>
          <div className='row'>
            <Card border="primary" className='columna col-12 col-md-4 card'>
              <Card.Header className='card-header'>Alimentos</Card.Header>
              <Card.Body>
                <Card.Title className='card-titulo'>Escuela 6194 Almafuerte - El ombú</Card.Title>
                <Card.Text>
                  Jornada "Día del niño". Se donaron regalos y muchos litros de leche.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card border="primary" className='columna col-12 col-md-4 card'>
              <Card.Header className='card-header'>Alimentos</Card.Header>
              <Card.Body>
                <Card.Title className='card-titulo'>Fabián Damelio</Card.Title>
                <Card.Text>
                  Fabián padece de una enfermedad neurodegenerativa (ELA). La peña colaboró con cajones de pollo para la gran exitosa pollada.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card border="primary" className='columna col-12 col-md-4 card'>
              <Card.Header className='card-header'>Medicamentos</Card.Header>
              <Card.Body>
                <Card.Title className='card-titulo'>Escuela 6194 Almafuerte - El ombú</Card.Title>
                <Card.Text>
                  Entregamos medicamentos para personas de todas las edades en Centro de Salud, ubicado en el interior de la institución.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>


        <Footer/>
      </div>
    )
  }
  
  export default Solidarias;