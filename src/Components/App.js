import { useEffect, useState } from "react";
import "../App.css";
import BotCollection from "./BotCollection";

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);
  return (
    <div className="App">
      <BotCollection bots={bots} />
    </div>
  );
}

export default App;
