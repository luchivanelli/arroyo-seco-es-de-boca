import img from '../images/boca.jpg'
import Volver from '../components/Volver'
import Footer from '../components/Footer'

const Eventos = ()=> {
    return (
      <div className="eventos">
        <Volver/>
        <h1 className="eventos__titulo">Próximos eventos</h1>
        <section className="eventos__section">
          <h3>Cena aniversario: 11 años de pasión</h3>
          <h5>Sorteos, visita de dirigentes y más...</h5>
          <div className="eventos__section__info">
            <img src={img}/>
            <ul>
              <li>
                <p>💙 24 de junio - 21:00 hs</p>
              </li>
              <li>
                <p>💙 Centro de jubilados - H. Yrigoyen 531</p>
              </li>
              <li>
                <p>💙 $4000 mayores - $3000 menores</p>
              </li>
              <li>
                <p>💙 Pollo con ensalada - bebida - postre</p>
              </li>
            </ul>
          </div>
          <div className="eventos__section__reservas">
            <h3>Reservas</h3>
            <a href='https://api.whatsapp.com/send?phone=543402570877&text=Hola,%20quiero%20hacer%20una%20reserva%20para%20la%20cena%20aniversario%20💙💛💙'>
              Arroyo Seco (Juan Gabriel)
            </a>
            <a href='https://api.whatsapp.com/send?phone=543364610691&text=Hola,%20quiero%20hacer%20una%20reserva%20para%20la%20cena%20aniversario%20💙💛💙'>
              Villa Constitución (Micaela)
            </a>
            <a href='https://api.whatsapp.com/send?phone=543402446816&text=Hola,%20quiero%20hacer%20una%20reserva%20para%20la%20cena%20aniversario%20💙💛💙'>
              Fighiera (Aron)
            </a>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
  
  export default Eventos;