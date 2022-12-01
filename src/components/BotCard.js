import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, setBotArmy, setAllBots, setShowSpecs, setSelected }) {

  const addToArmy = (clickedBot) => {
    setBotArmy((prevState) => {
      if (prevState.includes(clickedBot)) return [...prevState]
      return [...prevState, clickedBot]
    })
  }

  const viewBotSpecs = (clickedBot) => {
    // console.log(clickedBot)
    setSelected((prevState) => {
      return [...prevState, clickedBot]
    })
    setShowSpecs(current => !current)
  }

  const destroyBot = (clickedBot) => {
    setBotArmy((prevState) => {
      return [...prevState.filter((unit) => {
        return unit.id !== clickedBot.id
      })]
    })

    setAllBots((prevState) => {
      return [...prevState.filter((unit) => {
        return unit.id !== clickedBot.id
      })]
    })

    fetch(`http://localhost:8002/bots/${clickedBot.id}`, {
      method: "DELETE"
    })
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        //CHANGE THIS BACK TO addToArmy if unable to complete Advanced Deliverable
        onClick={() => viewBotSpecs(bot)}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>

          </span>
        </div>
      </div>
      <div className="ui center aligned segment basic">
        <button
          className="ui mini red button"
          onClick={() =>
            destroyBot(bot)
          }
        >
          x
        </button>
      </div>
    </div>
  );
}

export default BotCard;
