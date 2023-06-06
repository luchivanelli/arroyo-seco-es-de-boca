import Volver from '../components/Volver'
import Footer from '../components/Footer'

import obraterminada from '../images/peñaterminada.jpeg'
import img2 from '../images/obra2.jpeg'
import img3 from '../images/obra3.jpeg'
import img4 from '../images/obra4.jpeg'
import img5 from '../images/obra5.jpeg'
import img6 from '../images/obra6.jpeg'
import img7 from '../images/obra7.jpeg'
import img8 from '../images/obra8.jpeg'
import img9 from '../images/obra9.jpeg'
import img10 from '../images/obra10.jpeg'

const Obra = ()=> {
    return (
      <div className="obra">
        <Volver/>
        <h1>Avances de la sede social</h1>
        <div className='obra__galeria'>
          <img src={img3} className='img3'></img>
          <img src={img2} className='img2'></img>
          <img src={img4} className='img4'></img>
          <img src={img7} className='img7'></img>
          <img src={img8} className='img8'></img>
          <img src={img6} className='img6'></img>
          <img src={img9} className='img9'></img>
          <img src={img5} className='img5'></img>
          <img src={img10} className='img10'></img>
        </div>
        <div className='obra__terminada'>
        <h3>Trabajamos día a día, con esfuerzo, dedicación y las ganas de hacer historia. La peña crece y estamos cada vez más cerca de cumplir el sueño de todos.</h3>
        <img src={obraterminada}/>
        </div>
        
        <Footer/>
      </div>
    )
  }
  
  export default Obra;