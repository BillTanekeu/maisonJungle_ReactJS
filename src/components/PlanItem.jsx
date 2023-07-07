import React from 'react';
import '../styles/PlanItem.css';
import CareScale from '../styles/CareScale';

const PlanItem = (props) => {
    return (
        <li className='ContentPlanItem'>
            <span className='ItemPrice'>{props.plant.price} $</span>
            <img src={props.plant.cover} alt={props.plant.name} className='cover' />
            {props.plant.name}
            <div>
				<CareScale careType='water' scaleValue={props.plant.water} />
	    		<CareScale careType='light' scaleValue={props.plant.light} />
			</div>
            
        </li>
    );
};

export default PlanItem;