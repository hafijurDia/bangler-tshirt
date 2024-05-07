import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const ring = "dimond";
  const [money, setMoney] = useState(0);
  return (
    <div className="home">
      <h2>Practice Context API</h2>
      <div className="border">
        <h2>Grandpa</h2>
        <p>Has money: {money}</p>
      </div>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="golden ring">
          <div className="flex">
            <Father></Father>
            <Uncle></Uncle>
          </div>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
