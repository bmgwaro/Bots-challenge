import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots }) => {
  return (
    <div>
      <div className="w-1/2 border border-black m-2 rounded-lg">
      <h1 className="text-center">Bots</h1>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
