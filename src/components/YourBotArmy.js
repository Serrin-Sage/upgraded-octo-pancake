import React from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function YourBotArmy({ botArmy, setBotArmy, setAllBots }) {
  //your bot army code here...
  const removeFromArmy = (clickedBot) => {
    setBotArmy((prevState) => {
      return [...prevState.filter((unit) => {
        return unit.id !== clickedBot.id
      })]
    })
    setAllBots((prevState) => {
      return [...prevState, clickedBot]
    })
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
            botArmy.map((bot) => {
              return (
                <div key={bot.id} className="single-bot">
                  <div
                    className="ui card"
                    key={bot.id}
                    onClick={() => removeFromArmy(bot)}
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
                        <div className="ui center aligned segment basic">
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
