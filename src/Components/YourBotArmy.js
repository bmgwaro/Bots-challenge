import BotArmy from "./BotArmy"

const YourBotArmy = ({army, removeFromArmy, deleteBot}) => {
  return (
    <div>
        <BotArmy army={army} removeFromArmy={removeFromArmy} deleteBot={deleteBot}/>
    </div>
  )
}

export default YourBotArmy