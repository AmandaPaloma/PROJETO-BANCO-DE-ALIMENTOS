import React from 'react';
import Sidebar from '../../layouts/sidebar/Sidebar';
import './CentraldeCestas.css';
import CestasForm from '../../cestas/CestasForm';
import CestasContainer from '../../cestas/CestasContainer';





function CentraldeCestas() {
   

    function createPost(doacoes) {
            
        
        fetch('http://localhost:5000/baskets', {
            method:'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(doacoes),
        })
        .then((resp) => resp.json)
        .catch((err) => console.log(err))
    }

    
    return(
        <>
            <nav>
                <Sidebar/>
            </nav>
            
            <div className='content'>
                <div className='formtitle'>               
                 <h1>Cadastro de Doações</h1>
                </div>
 
                <div className='projectform'>
                    <CestasForm handleSubmit={createPost} btnText="Cadastrar"/>
                </div>
                <div className='cestas'>
                   
                    <CestasContainer/>
                </div>
            </div>
            
        </>
    );
}

export default CentraldeCestas;