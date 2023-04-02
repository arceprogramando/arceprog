import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import { Navbar, Home, Features, Product, Clients } from "./components"
const App = () => {
  return (
    <>
      <div >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/features" element={<Features />} />
            <Route exact path="/product" element={<Product />} />
            <Route exact path="/clients" element={<Clients />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App