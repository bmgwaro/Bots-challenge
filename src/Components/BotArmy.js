import BotCard from "./BotCard";

const BotArmy = ({army, removeFromArmy, deleteBot}) => {

  return (
      <div >
        <div >
          <h1 className="text-center text-transparent bg-clip-text bg-sky-400">Your Bot Army</h1>
          {army.map((bot, index) => (
             <BotCard onClick={()=>removeFromArmy(bot)} key={index} bot={bot} deleteBot={deleteBot}/>
          ))}
        </div>
      </div>
  );
};

export default BotArmy;
