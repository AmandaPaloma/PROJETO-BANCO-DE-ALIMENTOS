import React, { useState } from 'react';
import MaskedImput from '../layouts/form/MaskedInput';
import Submit from '../layouts/form/Submit';
import Input from '../layouts/form/Input';
import styles from "../beneficiarios/cadastrobeneficiarioform.module.css"
import Select from 'react-select'


function CadastroForm({handleSubmit,btnText,funcionarioData}){
  
    const unidade = [
        {label: 'CRAS Sul', value: 'CRAS Sul'}, 
        {label: 'CRAS Leste', value: 'CRAS Leste'}, 
        {label: 'CRAS Norte', value: 'CRAS Norte'}, 
        {label: 'CRAS Oeste', value: 'CRAS Oeste'}, 
        {label: 'BMA', value: 'CRAS BMA'}, 
    ]


    const perfil = [
        {label: 'Administrador', value: 'Administrador'}, 
        {label: 'Usuário BMA', value: 'Usuário BMA'}, 
        {label: 'Usuário CRAS', value: 'Usuário CRAS'}, 
    ]
    
    const situacao = [
        {label: 'Ativa', value: 'Ativa'}, 
        {label: 'Suspensa', value: 'Suspensa'}, 
        {label: 'Desativada', value: 'Desativada'}, 
    ]
    
    const handleSelectChange = (event) =>{
        console.log(event);
    } 

    const [funcionarios,setFuncionarios]=useState(funcionarioData || {});
  
    
    function handleChange(e) {
        setFuncionarios({...funcionarios, [e.target.name]: e.target.value })             
    }
    function submit(e) {
        e.preventDefault();
       
        handleSubmit(funcionarios);
    }  
    return(
        <form onSubmit= {submit} className={styles.benform}>
            <fieldset className={styles.dadospessoais}>
            <legend>Dados Funcionais</legend>    
            <div className={styles.identificacao}>

                <div >
               
                <Input
                                         
                    type="text" 
                    text="Nome"
                    name="name"
                    placeholder=""                                
                    handleOnChange={handleChange}                 
                />
                </div>

                <div>
                <MaskedImput
                    text="CPF"
                    name="CPF"
                    mask="999.999.999-99"
                    value={funcionarios.cpf}                    
                    onChange={handleChange}
                                                       
                />
                </div>

                <div >
                              <Input
                                        
                   type="text" 
                   text="Cargo"
                   name="cargo"
                   placeholder=""                                
                   handleOnChange={handleChange}                 
               />
               </div>
            
             
            </div>  
                
            <div className={styles.identificacao}>

                <div >
               
                <Input
                                         
                    type="text" 
                    text="Telefone"
                    name="telefone"
                    placeholder=""                                
                    handleOnChange={handleChange}                 
                />
                </div>


                <div >
                              <Input
                                        
                   type="text" 
                   text="E-mail"
                   name="email"
                   placeholder=""                                
                   handleOnChange={handleChange}                 
               />
               </div>
            
            </div>  

            </fieldset>     
            <fieldset className={styles.localizacao}>
            <legend>Perfil de Usuário</legend>  
            <div className={styles.identificacao}>


            <div>
        <label><b>Situação: </b></label>
<Select
options={situacao}
onChange={handleSelectChange}
/>
    </div>

<div>
        <label><b>Perfil de Acesso: </b></label>
<Select
options={perfil}
onChange={handleSelectChange}
/>
    </div>

<div>
        <label><b>Unidade: </b></label>
<Select
options={unidade}
onChange={handleSelectChange}
/>
    </div>

</div>  
            
            </fieldset>  
            <div className='submit'>
                <Submit text={btnText}/>
            </div>             

                                    
        </form>
    )
}

export default CadastroForm;