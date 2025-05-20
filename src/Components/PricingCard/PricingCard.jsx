import React from 'react';
import Features from './Features';


const PricingCard = ({pricing}) => {
    const {name,price,description,features} = pricing;
    return (
        <div className='flex flex-col border bg-amber-600 rounded-3xl p-5'>
            <div>
              <h1 className='text-7xl'>{name}</h1>
              <p className='text-3xl'>{price}</p>
        </div>
        <div className='bg-amber-300 rounded-3xl p-8 mt-5 flex-1 '>
            <p>{description}</p>
            {
                features.map((feature,index) => <Features key={index} feature={feature}></Features>)
            }
        </div>
        <button className="btn w-full">Purchase</button>
        </div>
       
        
    );
};

export default PricingCard;