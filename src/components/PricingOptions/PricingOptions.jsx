import React, { use } from 'react';
import PricingCard from '../pricingCard/pricingCard';


const PricingOptions = ({pricingPromis}) => {
    const pricingData=use(pricingPromis)
   console.log(pricingData)
   
    return (
        <div>
            <h2 className='text-5xl text-center'>Get Our Membership</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mx-11'>
             {
               pricingData.map(pricing=>
                <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
              )
             }
          </div>
            

        </div>
    );
};

export default PricingOptions;