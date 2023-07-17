import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Viajes from "./pages/Viajes";
import Obra from "./pages/Obra";
import Socio from "./pages/Socio";
import Eventos from "./pages/Eventos";
import Solidarias from "./pages/Solidarias";
import "./scss/index.scss"

const App = ()=> {
  return (
    <div className="app">
      <Routes>
        <Route path="/arroyo-seco-es-de-boca" element={<Home/>}/>
        <Route path="/viajes" element={<Viajes/>}/>
        <Route path="/eventos" element={<Eventos/>}/>
        <Route path="/obra" element={<Obra/>}/>
        <Route path="/solidarias" element={<Solidarias/>}/>
        <Route path="/hacete-socio" element={<Socio/>}/>
      </Routes>
    </div>
  )
}

export default App;
