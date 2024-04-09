import './App.css';
import Cajas from './componentes/caja';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import PC1 component
import PC1 from './componentes/PC1';
import Contenedor from './componentes/contenedor';

function App() {
  return (
    <div className="App">
      <Router>
                <Routes>
                <Route
                        exact
                        path="/"
                        element={<Contenedor/>}
                    />
                <Route
                        exact
                        path="/pc1"
                        element={<PC1
                                  imagen = 'pc1.jpg'
                                  altImagen = 'Foto de una PC de estudio'
                                  titulo = 'PC estudio'
                                  texto = 'La PC1 posee el siguiente hardware:
                                  Tipo de procesador Intel Core i5 2400 de 4 núcleos y 3.1 GHz
                                  Tamaño del disco duro 480 GB SSD
                                  Memoria RAM: 16 GB DDR3.
                                  Placa de video onboard Intel HD 2000
                                  Conectividad: Salida de video VGA y HDMI
                                  Gabinete Atx (modelo a disponibilidad de stock) Con una fuente de 500W.
                                  Monitor Led Daewoo/ Lg de 19 pulgadas. 
                                  incluye un kit de teclado y mouse
                          
                                  Software:
                                  Sistema operativo:
                                  Descubre nuestras computadoras con Linux y programas básicos preinstalados.
                                  Linux ofrece seguridad, estabilidad y personalización.'
                                  precio = '$
                                  463.890' />}
                    />
                </Routes>
    
      
      </Router>
    </div>
  );
}

export default App;
