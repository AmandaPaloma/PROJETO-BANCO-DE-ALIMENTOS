import DoacoesCard from './DoacoesCard';
import {useState, useEffect} from 'react'
import './CestasContainer.css'

function CestasContainer(){
    const [cestas,setCestas] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/baskets', {
            method:'GET',
            headers: {
                'Content-Type':'application.json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCestas(data)
        })
        .catch((err) => console.log(err))
    
    },[])

    return(
        <div className='cesta_container'>
            <h3>Cadastros</h3>        
        {cestas.length >0 ?
        ((cestas.map((cesta) => (
           < DoacoesCard 
           key={cesta.id}
           id={cesta.id}
           cpf={cesta.cpf}
           name={cesta.name}
           cestabasica={cesta.cestabasica}
           cestaverde={cesta.cestaverde}
           datacestabasica={cesta.datecestabasica}
           datacestaverde={cesta.datecestaverde}
           localcestabasica={cesta.localcestabasica}
           localcestaverde={cesta.localcestaverde}          

           />
        )))):<p>Não há cestas cadastradas</p>}
        </div>
    )
}


export default CestasContainer;
