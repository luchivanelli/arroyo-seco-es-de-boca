import Volver from '../components/Volver'
import Footer from '../components/Footer'
import { useFormik } from 'formik'


const Socio = ()=> {

    const enviarMensaje = (values)=> {
      const {nombre, dni, direccion, localidad, telefono, pago} = values
      const mensaje = `Nombre:%20${nombre}, %20DNI:%20${dni}, %20Dirección:%20${direccion}, %20Localidad:%20${localidad}, %20Teléfono:%20${telefono}, %20Medio de pago:%20${pago},`
      window.location.href = `https://api.whatsapp.com/send?phone=543400537393&text=Hola,%20quiero%20hacerme%20socio%20de%20la%20peña.%20Estos%20son%20mis%20datos%20${mensaje}`
    }

    const formik = useFormik({
      initialValues: {
        nombre: '',
        dni: '',
        direccion: '',
        localidad: '',
        telefono: '',
        pago: 'Efectivo'
      },
      onSubmit: (values)=> enviarMensaje(values)
    })

    return (
      <div className="socio">
        <Volver/>
        <h1 className='socio__titulo'>¿Cómo hacerme socio?</h1>
        <section className='socio__adherente'>
          <h3>Socio adherente</h3>
          <div className='socio__adherente__pasos'>
            <h5>Para hacerte socio adherente del club:</h5>
            <ul>
              <li>💙 Entrá a la página: https://soysocio.bocajuniors.com.ar/</li>
              <li>💙 Seguí los pasos indicados</li>
              <li>💙 Una vez realizado, revisá tu mail para obtener tu número de socio</li>
              <li>💙 Si deseas obtener el carnet, la peña gestiona el tramite para que puedas tenerlo en mano</li>
              <li>💙 ¿Necesitas ayuda? <a href='https://api.whatsapp.com/send?phone=543402658558&'>Comunicate con nosotros</a></li>
            </ul>
          </div>
        </section>
        <section className='socio__peña'>
          <h3>Socio de la peña</h3>
          <h5>Para hacerte socio de la peña, completá los datos:</h5>
          <form className='socio__peña__form' onSubmit={formik.handleSubmit}>
            <div className='socio__peña__form__div'>
              <label>Nombre completo:</label>
              <input type='text' {...formik.getFieldProps('nombre')} required></input>
            </div>
            <div className='socio__peña__form__div'>
              <label>DNI:</label>
              <input type='text' {...formik.getFieldProps('dni')} required></input>
            </div>
            <div className='socio__peña__form__div'>
              <label>Dirección:</label>
              <input type='text' {...formik.getFieldProps('direccion')} required></input>
            </div>
            <div className='socio__peña__form__div'>
              <label>Localidad:</label>
              <input type='text' {...formik.getFieldProps('localidad')} required></input>
            </div>
            <div className='socio__peña__form__div'>
              <label>Teléfono:</label>
              <input type='text' {...formik.getFieldProps('telefono')} required></input>
            </div>
            <div className='socio__peña__form__div'>
              <label>Medio de pago:</label>
              <select type='select' {...formik.getFieldProps('pago')}>
                <option>Efectivo</option>
                <option>Transferecia bancaria</option>
                <option>Débito automático</option>
              </select>
            </div>
            <button type='submit'>Finalizar</button>
          </form>
        </section>
        <Footer/>
      </div>
    )
  }
  
  export default Socio;