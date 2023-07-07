import React from 'react';
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const CareScale = (props) => {
    const scaletype = props.careType === 'light'?
                                    ( <img src={Sun} alt='soleil'/>):(<img src={Water} alt='pluie'/>)
    const rg =[1,2,3]
    return (
        <div>
            {rg.map((rangeElem) =>(
				props.scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaletype}</span>
				) : null)
			)}
        </div>
    );
};

export default CareScale;