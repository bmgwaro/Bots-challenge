import React from 'react'

const BotCard = ({bot, onClick, deleteBot}) => {
  return (
    <div onClick={onClick} className="border border-black m-2 p-2 rounded-lg bg-orange-300">
      <p>Name: {bot.name}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armour: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Picture:</p>
      <img src={bot.avatar_url} alt='Not found' className='object-cover '></img>
      <button onClick={()=>deleteBot(bot)} className='bg-red-600 px-6 text-white'>X</button>
    </div>
  )
}

export default BotCard