import Botcollection from "./components/Botcollection";
import YourBotArmy from "./components/YourBotArmy";
import './App.css';
import { useEffect, useState } from "react";


function App() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);

  function handleArmyBots(bot) {
    setArmyBots([...armyBots, bot]);
  }

  function deleteArmyBot(bot) {
    const filteredBots = armyBots.filter((element) => {
      return element.id != bot.id;
    })

    setArmyBots(filteredBots);
  }

  useEffect(() => {
    fetch('https://json-server-vercel-2-xi.vercel.app/bots')
      .then(res => res.json())
      .then((res) => {
        setBots(res)
      })
    .catch(err => console.log(err.message))
  }, [])

  return (
    <>

      <YourBotArmy armybots={armyBots} deleteArmyBot={deleteArmyBot} />

      <section className='botCollection'>
        {bots.map((element) => {
          return <Botcollection key={element.id} bot={element} handleArmyBots={handleArmyBots}/>
        })}
      </section>
      
    </>
  );
}

export default App;
