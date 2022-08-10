import { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setinputValue] = useState([]);

    const onInputChange = ({target}) => {
        setinputValue( target.value);        
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const inputValueClean = inputValue.toString().trim(); //valor si espacios
        if ( inputValueClean.length <= 1) return;        
        onNewCategory(inputValueClean);
        setinputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)}>
            <input  type="text" 
                    placeholder="Buscar gifs" 
                    value={ inputValue }
                    onChange = { (event) => onInputChange(event) }
            >
            </input>
        </form>
    )
}


