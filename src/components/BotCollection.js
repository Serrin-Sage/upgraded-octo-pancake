import React from "react";
import BotCard from "./BotCard";

function BotCollection({ allBots, setBotArmy, setAllBots, setShowSpecs, setSelected }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {
          allBots.map((bot) => {
            return (
              <div key={bot.id}>
                <BotCard bot={bot} setBotArmy={setBotArmy} setAllBots={setAllBots} setShowSpecs={setShowSpecs} setSelected={setSelected} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default BotCollection;
