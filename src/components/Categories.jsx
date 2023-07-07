import React from 'react';
import '../styles/Categories.css'

const Categories = (props) => {
    return (
        <div className='contentCategoriesButton'>
            <select className='select' onChange={(e)=> props.setCategorie(e.target.value)}>
                <option value= ''>---</option>
                {props.categories.map((item) => 
                <option value={item}>{item}</option>)}
            </select>
            <button onClick={() => {props.setCategorie('')
                        document.querySelector('.select').value = ''}}>Réinitialiser</button>
        </div>
    );
};

export default Categories;