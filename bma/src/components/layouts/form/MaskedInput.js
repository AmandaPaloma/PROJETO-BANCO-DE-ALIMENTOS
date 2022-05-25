import React from 'react';
import './Input.css';
import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace (/[^0-9]/g,'');

function MaskedImput ({value, onChange,name,mask,text,onBlur,handleonchange}) {
    
    function handleChange(event){
        onChange({
            ...event,
            target:{
                ...event.target,
                name,
                value: onlyNumbers(event.target.value),
            }
        })

    }
    return(
        <div className='form_control'>
        <div>
            <label htmlFor={name}>{text}:</label>
        </div>

        <InputMask 
        name={name}
        mask={mask}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        
        
        />
        </div>
    )
}

export default MaskedImput;