import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Inicio, Productos, Clientes, Caracteristicas } from "./components"
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-primary w-full overflow-hidden text-lime-900 min-h-screen" >
          <div className="container max-w-5xl  mx-auto   flex justify-between">
              <Navbar />
          </div>
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/caracteristicas" element={<Caracteristicas />} />
            <Route exact path="/productos" element={<Productos />} />
            <Route exact path="/clientes" element={<Clientes />} />
          </Routes>


          <Footer />
        </div>


      </BrowserRouter>
    </>
  )
}

export default App