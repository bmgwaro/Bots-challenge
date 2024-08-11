import BotArmy from "./BotArmy"

const YourBotArmy = ({army, removeFromArmy, deleteBot}) => {
  return (
    <div className="bg-slate-600 rounded">
        <BotArmy army={army} removeFromArmy={removeFromArmy} deleteBot={deleteBot}/>
    </div>
  )
}

export default YourBotArmy