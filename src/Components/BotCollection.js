import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, addToArmy, deleteBot}) => {
  return (
    <div className="bg-slate-600 rounded">
      <div>
        <h1 className="text-center text-transparent bg-clip-text bg-sky-400">All Bots</h1>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={()=>addToArmy(bot)} deleteBot={deleteBot}/>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
