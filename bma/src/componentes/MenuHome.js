import logo_bma from"../img/logo_bma1.png"
import styles from "./MenuHome.module.css";

function MenuHome() {
    return (
        <div id= "Menu">
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#21715B"}}>
                    <img src={logo_bma} width="35" height="35" alt="Logo_Bma"></img>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sobre Nós</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Parceiros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Portal do Beneficiário</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Portal do Funcionário
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Cadastro Beneficiário</a>
                                <a class="dropdown-item" href="#">Entrega de Cesta</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )

}

export default MenuHome;
