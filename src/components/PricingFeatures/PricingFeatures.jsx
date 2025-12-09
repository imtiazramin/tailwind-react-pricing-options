import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {

    return (
        <p className='flex py-4 text-amber-600'><CircleCheckBig className='mr-2.5'></CircleCheckBig>{feature}</p>
    );
};

export default PricingFeatures;