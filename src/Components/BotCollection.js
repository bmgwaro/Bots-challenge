import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, addToArmy, deleteBot}) => {
  return (
    <div>
      <div>
        <h1 className="text-center">Bots</h1>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={()=>addToArmy(bot)} deleteBot={deleteBot}/>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
