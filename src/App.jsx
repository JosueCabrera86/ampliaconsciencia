import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from '.pages/home';
import Contacto from '.pages/contacto'
import Rebirthing from './pages/rebirthing';
import BiografiaHumana from './pages/biografia';


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/rebirthing" element={<Rebirthing />} />
        <Route path="/biografia" element={<BiografiaHumana />} />
        <Route path="/contacto" element={<Contacto />} />


      </Routes>
      <Footer />
    </>
  )
}

export default App
