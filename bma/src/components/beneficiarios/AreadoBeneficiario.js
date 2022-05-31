import React from 'react';
import Sidebar from '../layouts/sidebar/Sidebar';
import CadastroForm from './CadastroForm';
import styles from'./AreadoBeneficiario.module.css';

function AreadoBeneficiario(){
    
    function createBenef(beneficiarios) {
        fetch('http://localhost:5000/beneficiarios', {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(beneficiarios),
        })
        .then((resp)=> resp.json)
        
        .catch((err)=>console.log(err))
        
        
    }

    return(
        <>
            <nav>
                <Sidebar/>
            </nav>
            
            <div className={styles.content}>
                <div className={styles.formtitle}>               
                 <h1>Cadastro Beneficiário</h1>
                 
                </div>
 
                <div className={styles.beneficiariosform}>
                    <CadastroForm handleSubmit={createBenef} btnText="Cadastrar"/>
                </div>
                
            </div>
            
        </>
    )
}

export default AreadoBeneficiario;