import { NavLink } from "react-router-dom";
import logo from '../images/logoPeña.jpeg'

const Home = ()=> {
    return (
      <div className="home">
        <ul className="home__navbar">
          <div className="home__navbar__container">
            <img src={logo} className="home__navbar__container__logo"/>
            <h3 className="home__navbar__container__titulo">Peña Arroyo Seco es de Boca</h3>
          </div>
          <NavLink className='home__navbar__link' to="/viajes">Viajá con la peña</NavLink>
          <NavLink className='home__navbar__link' to="/eventos">Eventos y jornadas</NavLink>
          <NavLink className='home__navbar__link' to="/obra">Avances de la obra</NavLink>
          <NavLink className='home__navbar__link' to="/indumentaria">Indumentaria</NavLink>
          <NavLink className='home__navbar__link' to="/hacete-socio">Hacete socio</NavLink>
        <div className="home__redes">
          <a href="https://www.instagram.com/arroyosecoesdeboca12/" target="_blank">
            Instagram
          </a>
          <a href="https://www.facebook.com/ARROYOSECOESDEBOCA" target="_blank">
            Facebook
          </a>
        </div>
        </ul>
      </div>
    )
  }
  
  export default Home;