import React from 'react';
import './Checkbox.css';

    function Checkbox({type, text, name,checked,value,handleOnChange,handleClick}) {
                        
        return (
            <div className='checkbox_control'>
                <div>
                    <label htmlFor={name}>{text}</label>
                </div>
                    
                <input 
                    type={type}
                    name={name}
                    id={name}
                    checked={checked}
                    value={value}
                    onChange={handleOnChange}
                    onClick={handleClick}
                                                                                  
        
                    />
                    
                    
                </div>
            )
        }
        
        export default Checkbox;
    
