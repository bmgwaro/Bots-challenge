import { useEffect, useState } from "react";
import "../App.css";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find((armybot) => armybot.id === bot.id)) {
      setArmy((prevArmy) => [...prevArmy, bot]);
    }
  };

  const removeFromArmy=(bot)=>{
    setArmy((prevArmy)=>prevArmy.filter((armybot)=>armybot.id!==bot.id))
  }

  return (
    <div className="flex">
      <div className="border border-black m-2 rounded-lg w-1/2">
        <BotCollection bots={bots} addToArmy={addToArmy} />
      </div>
      <div className="border border-black m-2 rounded-lg w-1/2">
        <YourBotArmy army={army} removeFromArmy={removeFromArmy}/>
      </div>
    </div>
  );
}

export default App;
