import React from 'react';
import Sidebar from '../layouts/sidebar/Sidebar';
import CadastroForm from './CadastroForm';
import styles from'../beneficiarios/AreadoBeneficiario.module.css';


function Funcionario(){
    
    function createFunc(funcionarios) {
        fetch('http://localhost:5000/funcionarios', {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(funcionarios),
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
                 <h1>Cadastro Funcionário</h1>
                 
                </div>
 
                <div className={styles.beneficiariosform}>
                    <CadastroForm handleSubmit={createFunc} btnText="Cadastrar"/>
                </div>
                
            </div>
            
        </>
    )
}

export default Funcionario;