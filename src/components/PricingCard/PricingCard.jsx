import React from 'react';
import PricingFeatures from '../PricingFeatures/PricingFeatures';


const PricingCard = ({pricing}) => {   
   
   
    return (
        <div className='border bg-white p-5 rounded-2xl flex flex-col'> 
            <div>
                <h1 className='text-6xl py-4'>{pricing.title}</h1>
                <h2 className='text-3xl'>{pricing.price}</h2>
            </div>
            <div className='bg-amber-100 p-5 mt-7 rounded-2xl flex-1'>
                <p>{pricing.description}</p>
                {
                    pricing.features.map((feature,index)=> <PricingFeatures key={index} feature={feature}></PricingFeatures>)
                }
            </div>
        <button className="btn w-full mt-4">Subscribe</button>
            
        </div>
    );
};

export default PricingCard;