import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    const giveToGrandpa = () => {
        const sendMoney = money + 1000;
        setMoney(sendMoney);
    }
    return (
        <div>
            <h2 className='border'>Uncle</h2>
            <p>Grandpa money: {money} </p>
            <button onClick={() => giveToGrandpa()}>Send 1000tk</button>
            <Cousin></Cousin>
        </div>
    );
};

export default Uncle;