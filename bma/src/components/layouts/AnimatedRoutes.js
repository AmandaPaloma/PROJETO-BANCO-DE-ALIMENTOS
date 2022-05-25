import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import PortalBeneficiario from '../pages/PortalBeneficiario'
import PortalFuncionario from '../pages/PortalFuncionario'
import Home from '../pages/Home'
import SobreNos from '../pages/SobreNos'
import Parceiros from '../pages/Parceiros'
import {AnimatePresence} from 'framer-motion'
import AppRoutes from'../../AppRoutes'
import CentraldeCestas from '../pages/central de cestas/CentraldeCestas'
import PaginaPadrao from '../pages/central de cestas/PaginaPadrao'
import { AuthProvider } from '../../context/Auth'

function AnimatedRoutes() {
    const location = useLocation();
return (
    <AnimatePresence>
    <AuthProvider>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} />
    <Route path="/SobreNos" element={<SobreNos/>} />
    <Route path="/Parceiros" element={<Parceiros/>} />
    <Route path="/PortalFuncionario" element={<PortalFuncionario />} />
    <Route path="/PortalBeneficiario" element={<PortalBeneficiario />} />
    <Route path="/CentraldeCestas" element={<CentraldeCestas/>} />
    <Route path="/PaginaPadrao" element={<PaginaPadrao/>}/>
  </Routes>
  </AuthProvider>
  </AnimatePresence>
  
)

}
export default AnimatedRoutes