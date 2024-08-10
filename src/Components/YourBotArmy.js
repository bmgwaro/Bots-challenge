import BotArmy from "./BotArmy"

const YourBotArmy = ({army, removeFromArmy}) => {
  return (
    <div>
        <BotArmy army={army} removeFromArmy={removeFromArmy}/>
    </div>
  )
}

export default YourBotArmy