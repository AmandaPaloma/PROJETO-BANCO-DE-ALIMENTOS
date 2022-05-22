import { BrowserRouter as Router } from 'react-router-dom'
import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import AnimatedRoutes from './components/layouts/AnimatedRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {


  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
       <AnimatedRoutes />
      </Container>
      <Footer />
    </Router>

  )
}

export default App;
