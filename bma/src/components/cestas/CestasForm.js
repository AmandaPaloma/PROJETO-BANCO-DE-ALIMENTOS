import Input from '../layouts/form/Input';
import './CestasForm.css';
import Checkbox from '../layouts/form/Checkbox'
import Submit from '../layouts/form/Submit';
import { useEffect, useState } from 'react';
import MaskedImput from '../layouts/form/MaskedInput';






function CestasForm({handleSubmit, btnText, doacoesData}) {
    
    const [doacoes, setDoacoes] = useState(doacoesData || {});
    const [cbasica,setCbasica]=useState(false)
    const [cverde,setCverde]=useState(false)
    const [data, setData] = useState([]);
           
    const convertToArray =(obj)=>{
        const array = [obj];
        return array;
    }
             

    
   const submitHandler= (e) => {
       
        e.preventDefault();

        const cpf = e.target.value; 
        const name= document.querySelector('input[name="name"]')       
             
        
        fetch(`http://localhost:5000/beneficiarios?CPF=${cpf}`, {
            method: 'GET',
            headers:{
                'Content-Type':'aplication/json',

            },
            
        })
            
            .then((resp) => resp.json())
            .then((data)=> {
                
                setData(data)
               
                
                
                
             
                
            })
            .catch((err) => console.log(err))
        
        
        }                      
                        
        function submit(e) {
             e.preventDefault();
            
             handleSubmit(doacoes);
         }
                
         function handleChange(e) {
             setDoacoes({...doacoes, [e.target.name]: e.target.value })             
         }  
         
        
            
         function handleInputChange(e){
            const target=e.target;
            const value= target.type === 'checkbox' ?  target.value:target.checked ;
            const name = target.name;
            
            setDoacoes({...doacoes,[name]:value});

                      
        }
        
        const includeCestabasica = () => {
        
            setCbasica(!cbasica)
            
        }
        const includeCestaverde = () => {
        
            setCverde(!cverde)
            
        }   
       
                      
              
         return (
             
             <form onSubmit = {submit} className='form'>
                 <fieldset className='identificacao' >
                     <legend>Identificação</legend>
                     <div className='buscacpf'>
                        <MaskedImput
                        text="CPF"
                        name="cpf"
                        mask="999.999.999-99"
                        value={doacoes.cpf}
                        onChange={handleChange}
                        onBlur={submitHandler}                                    
                        />
                         
                                      
                    </div>                   
                   
                   <div className='resultado-buscaCPF'>
                   
                        {data.length > 0 ? (
                            data.map((name)=> (
                                <Input
                                    key={name.id}      
                                    type="text" 
                                    text="Nome do Beneficiário"
                                    name={name.name}
                                    value={name.name}                                                      
                                    handleOnChange={{handleChange}}
                                    />
                        ))):(<Input
                            type="text"
                            text="Nome do Beneficiário"
                            placeholder=""
                        />)}
                       
                    </div>              
                   
                 </fieldset>       
                     
                        
                 
                         
                                            
                   
                 <fieldset className='baskets'>
                    <legend> Tipo de Cesta</legend>
                <div className='checkbox'>
                    <div>   
                        <Checkbox 
                            type="checkbox" 
                            text="Cesta Básica"
                            name="cestabasica"
                            value="sim"                                    
                            handleOnChange={handleInputChange}
                            handleClick={includeCestabasica}                  
                        />
                    </div>  
                    {cbasica && (
                     <div>
                        <Input 
                            type="number" 
                            text="Quantidade"
                            name="quantcestabasica"
                            placeholder="0"
                            handleOnChange={handleChange}
                            
                        />
                        <Input 
                            type="date" 
                            text="Próxima Retirada"
                            name="datecestabasica"
                            placeholder=""
                            handleOnChange={handleChange}
                            
                        />
                        <Input 
                            type="text" 
                            text="Local de Retirada"
                            name="localcestabasica"
                            placeholder="Insira o local de retirada"
                            handleOnChange={handleChange}
                            
                        />
                        </div>
                     )}
                     
                </div>
     
                 <div className='checkbox'>
                 <div>
                    <Checkbox
                        type="checkbox" 
                        text="Cesta Verde"
                        name="cestaverde"
                        value="sim"
                        handleClick={includeCestaverde}                                
                        handleOnChange={handleInputChange}                    
                        />
                  </div>   
                {cverde && (
                 <div>    
                     <Input 
                         type="number" 
                         text="Quantidade"
                         name="quantcestaverde"
                         placeholder="0"
                         handleOnChange={handleChange}
                         
                     />               
                 
                     <Input 
                         type="date" 
                         text="Próxima Retirada"
                         name="datecestaverde"
                         placeholder=""
                         handleOnChange={handleChange}
                         
                     />                
                                  
                
                     <Input 
                         type="text" 
                         text="Local de Retirada"
                         name="localcestaverde"
                         placeholder="Insira o local de retirada"
                         handleOnChange={handleChange}
                         
                     />
                 </div>)}  
                     
                 </div>
                 </fieldset>
                 <div className='submit'>
                     <Submit text={btnText}/>
                </div>
         </form>
        
          
         )
     }
     export default CestasForm;
                     
                     
                 
                 
            
                
                               
                
                
        
        
    
   

    

    
    
    
