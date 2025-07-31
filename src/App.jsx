import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Contacto from './pages/contacto'
import Rebirthing from './pages/rebirthingbreathwork';
import BiografiaHumana from './pages/biografiahumana';


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rebirthingbreathwork" element={<Rebirthing />} />
        <Route path="/biografiahumana" element={<BiografiaHumana />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
