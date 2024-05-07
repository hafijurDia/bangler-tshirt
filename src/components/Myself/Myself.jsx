import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = ({ring}) => {
    const ringdiomn = useContext(RingContext);
    return (
        <div>
            <h2 className='border'>Myself</h2>
            <p>{ring}</p>
            <p>From Context: {ringdiomn}</p>
        </div>
    );
};

export default Myself;