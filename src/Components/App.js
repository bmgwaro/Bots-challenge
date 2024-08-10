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

  

  const deleteBot=(bot)=>{
      fetch(`http://localhost:3000/bots/${bot.id}`, {
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
      })
      .then(res=>res.json())
      .then(()=>{
        setBots((prevBots)=>prevBots.filter((b)=>b.id !== bot.id))
        setArmy((prevArmy)=>prevArmy.filter((armybot)=>armybot.id!==bot.id))
      })
  }

  return (
    <div className="flex">
      <div className="border border-black m-2 rounded-lg w-1/2">
        <BotCollection bots={bots} addToArmy={addToArmy} deleteBot={deleteBot}/>
      </div>
      <div className="border border-black m-2 rounded-lg w-1/2">
        <YourBotArmy army={army} removeFromArmy={removeFromArmy} deleteBot={deleteBot}/>
      </div>
    </div>
  );
}

export default App;
