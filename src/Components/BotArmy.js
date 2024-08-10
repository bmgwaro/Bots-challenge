import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

const BotArmy = ({army}) => {

  return (
      <div>
        <div >
          <h1 className="text-center">Your Bot Army</h1>
          {army.map((bot, index) => (
             <BotCard  key={index} bot={bot} />
          ))}
        </div>
      </div>
  );
};

export default BotArmy;
