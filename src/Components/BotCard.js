import React from 'react'

const BotCard = ({bot}) => {
  return (
    <div className="border border-black m-2 p-2 rounded-lg">
      <p>Name: {bot.name}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armour: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Picture:</p>
      <img src={bot.avatar_url} alt='Not found'></img>
    </div>
  )
}

export default BotCard