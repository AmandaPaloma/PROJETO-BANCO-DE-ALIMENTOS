import { BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import LoginBen from "./components/auth/login-beneficiario";
import LoginFunc from "./components/auth/login-funcionario";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/Auth";
import CentraldeCestas from "./components/pages/central de cestas/CentraldeCestas";

const AppRoutes =()=> {
    const Private = ({children}) => {
        const {authenticated,loading} = useContext(AuthContext);
        if (loading) {
            return <div className="loading">Carregando...</div>;
        }
        if (!authenticated) { 
            return <Navigate to ="/login"/>
         } return children
    }
        
  
    
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginFunc/>}/>
                    <Route path="/loginbeneficiario" element={<LoginBen/>}/>
                    <Route path="/CentraldeCestas" element={<Private><CentraldeCestas/></Private>} />
                    
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;