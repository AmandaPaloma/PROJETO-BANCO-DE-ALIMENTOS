import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import Logo_bma from '../../img/logo_bma.png'
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/" />
                <img src={Logo_bma} alt="BMA"/>

                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/SobreNos">Sobre Nós</Link></li>
                    <li className={styles.item}><Link to="/Parceiros">Parceiros</Link></li>
                    <li className={styles.item}><Link to="/PortalBeneficiario">Portal do Beneficiário</Link></li>
                    <li className={styles.person_icon}><FaUserCircle/> </li>
                    <li className={styles.item}><Link to="/PortalFuncionario">Portal do Funcionário</Link></li>
                    
                </ul>

            </Container>
        </nav>
    )


}

export default Navbar; 