import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import PortalBeneficiario from './components/pages/PortalBeneficiario'
import PortalFuncionario from './components/pages/PortalFuncionario'
import SobreNos from './components/pages/SobreNos'
import Parceiros from './components/pages/Parceiros'
import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreNos" element={<SobreNos/>} />
          <Route path="/Parceiros" element={<Parceiros/>} />
          <Route path="/PortalFuncionario" element={<PortalFuncionario />} />
          <Route path="/PortalBeneficiario" element={<PortalBeneficiario />} />
        </Routes>
      </Container>

      <Footer/>
    </Router>

  )
}

export default App;
