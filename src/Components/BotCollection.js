import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, addToArmy}) => {
  return (
    <div>
      <div>
        <h1 className="text-center">Bots</h1>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={()=>addToArmy(bot)}/>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
