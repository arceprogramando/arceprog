import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from './style'
import { Navbar, Inicio, Productos, Clientes, Caracteristicas } from "./components"


const App = () => {
  return (
    <>

      <BrowserRouter>
        <div className="bg-primary w-full overflow-hidden text-lime-900 min-h-screen" >
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/inicio" element={<Inicio />} />
            <Route exact path="/caracteristicas" element={<Caracteristicas />} />
            <Route exact path="/productos" element={<Productos />} />
            <Route exact path="/clientes" element={<Clientes />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App