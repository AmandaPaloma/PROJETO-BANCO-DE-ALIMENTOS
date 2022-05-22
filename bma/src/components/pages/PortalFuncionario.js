import LoginFunc from "../auth/login-funcionario";
import {motion} from 'framer-motion';

function PortalFuncionario (){
    return (
        <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0, transition: { duration: 0.3 } }}>
    <LoginFunc />
    </motion.div>
    )
}
export default PortalFuncionario; 