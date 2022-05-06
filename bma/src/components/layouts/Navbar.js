import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import Logo_bma from '../../img/logo_bma.png'
import { FaUserCircle } from 'react-icons/fa';
import { RiUserSettingsLine } from 'react-icons/ri';
import { RiGroupLine } from 'react-icons/ri';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/" />
                <img className={styles.logo} src={Logo_bma} alt="BMA"/>

                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/SobreNos">Sobre Nós</Link></li>
                    <li className={styles.item}><Link to="/Parceiros">Parceiros</Link></li>
                    <li className={styles.person_icon}><RiUserSettingsLine/> </li>
                    <li className={styles.txtBtn}><Link to="/PortalFuncionario">Portal do Funcionário</Link></li> 
                    <li className={styles.person_icon}><RiGroupLine/> </li>
                    <li className={styles.txtBtn}><Link to="/PortalBeneficiario">Portal do Beneficiário</Link></li>
                    
                </ul>

            </Container>
        </nav>
    )


}

export default Navbar; 