import React, { useContext } from 'react';
import Myself from '../Myself/Myself';
import { MoneyContext } from '../Grandpa/Grandpa';

const Father = () => {
    const grandpaMoney = useContext(MoneyContext);
    return (
        <div>
            <h2 className='border'>Father</h2>
            <small>{grandpaMoney}</small>
            <Myself></Myself>
        </div>
    );
};

export default Father;