import './Input.css';

function Input({type, text, name, placeholder, handleOnChange,value}) {
    return (
        <div className='form_control'>
            <div>
                <label htmlFor={name}>{text}:</label>
            </div>
            
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                

            />
            
            
        </div>
    )
}

export default Input;