import React from 'react';
import Sidebar from './Sidebar';
import './PaginaPadrao.css';


function PaginaPadrao(){
    return(
        <>
            <div>
                <nav>          
                {Sidebar()}    
                        
                </nav>
            </div>
        
            <div className='container'>
                <h1>Página padrão</h1>
            </div>
        </>
    );
};

export default PaginaPadrao;
