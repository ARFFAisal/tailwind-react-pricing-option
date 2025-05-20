import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);

    console.log(pricingData);

    return (
        <div>
            <h1 className='text-7xl'>Get Our Membership</h1>
            <div className='grid md:grid-cols-3 gap-8 '>
                {
                    pricingData.map((pricing) => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
            
        </div>
    );
};

export default PricingOptions;