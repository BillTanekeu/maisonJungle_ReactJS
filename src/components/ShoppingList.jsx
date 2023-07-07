import { plantList } from '../datas/plantList'
import PlanItem from './PlanItem';
import '../styles/ShoppingList.css'
import Categories from './Categories';
import { useEffect, useState } from 'react';

function ShoppingList(props) {
	
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	const verifyCat = function(item, cat){
		if(cat === '' || item === cat) return true
		return false
	}
/*
	useEffect(()=>{
		console.log('cat modif');
		console.log(document.querySelector('select').value)
		props.setCategorie(document.querySelector('select').value)
	},[props.cat])
*/
	//console.log(categories);

	const Buy = function(name , price){
		console.log(name,price);
		const pannier = props.cart 

		const estPresent = props.cart.find((plant) => plant.name === name)

		if(estPresent){
			const product = props.cart.filter((plant) => plant.name !== name)
			props.updateCart([...product, {name, price, amount: estPresent.amount + 1}])
			
		}
		else{
			props.updateCart([...props.cart, {name, price, amount: 1}])

		}

		//console.log('cart :', props.cart)
	}

	return (
		<div style={{width : '100%'}}>
			<Categories categories = {categories} setCategorie = {props.setCategorie} />
			<ul className='listPlant'>
				{plantList.map((item) =>
					verifyCat(item.category, props.cat)?
					<div className='contentItemButton'>	
						<PlanItem plant= {item} />
						<button className='ButtonAdd' onClick={() => Buy(item.name, item.price)}>Ajouter</button>
					</div>: null
				 )}
			</ul>		
        </div>
	)
}

export default ShoppingList