import React, { useState } from 'react';
import MaskedImput from '../layouts/form/MaskedInput';
import Submit from '../layouts/form/Submit';
import Input from '../layouts/form/Input';
import styles from "../beneficiarios/cadastrobeneficiarioform.module.css"



function CadastroForm({handleSubmit,btnText,funcionarioData}){
  

    

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


<div >

<Input
                         
    type="text" 
    text="Situação"
    name="situação"
    placeholder=""                                
    handleOnChange={handleChange}                 
/>
</div>

<div >

<Input
                         
    type="text" 
    text="Perfil de Acesso"
    name="perfil de acesso"
    placeholder=""                                
    handleOnChange={handleChange}                 
/>
</div>

<div >
              <Input
                        
   type="text" 
   text="Unidade"
   name="unidade"
   placeholder=""                                
   handleOnChange={handleChange}    
   
   
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