import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";
import { useState, useEffect } from 'react'

function BotsPage() {
  //start here with your code for step one
  const [allBots, setAllBots] = useState([])
  const [botArmy, setBotArmy] = useState([])
  const [showSpecs, setShowSpecs] = useState(false)
  const [selected, setSelected] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => {
        setAllBots(data)
      })
  }, [])

  return (
    <div>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} setAllBots={setAllBots} />
      {showSpecs ?
        <BotSpecs setShowSpecs={setShowSpecs} selected={selected} setSelected={setSelected} setBotArmy={setBotArmy} setAllBots={setAllBots} />
        :
        <BotCollection
          allBots={allBots}
          setBotArmy={setBotArmy}
          setAllBots={setAllBots}
          setShowSpecs={setShowSpecs}
          setSelected={setSelected}
        />
      }
    </div>
  )
}

export default BotsPage;
