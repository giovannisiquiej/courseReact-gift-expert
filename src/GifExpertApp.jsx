import { useState } from "react"
import { AddCategory, GifGrid } from './components';

//React-App-Curso API-Key   --  7icsG6SxsFINjTg7ADxWBYbIFXsrO7qM


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        
        //transfiere los valores del arreglo a minuscula
        const lowerCategories = categories.map(element => {
            return element.toLowerCase();
        });

        //valida que la categoria no exista
        if (lowerCategories.includes(newCategory.toLowerCase())) return;

        //recibe los datos de la nueva categoria y lo inserta en el arreglo
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            
            {/* renderiza el input de la categoria y recibe los datos */}
            <AddCategory  onNewCategory={ categoryValue => onAddCategory(categoryValue)} />

            {/* muestra todas las categorias */}
            {
                categories.map( category => (
                    <GifGrid key={category} category={category}/>                    
                ))
            }

        </>
    )
}