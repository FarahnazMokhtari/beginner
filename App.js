import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [getExcuse, setGetExcuse] = useState("");

  const getFetch = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGetExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={() => getFetch("party")}>Party</button>
      <button onClick={() => getFetch("family")}>Family</button>
      <button onClick={() => getFetch("office")}>Office</button>
      <h1>{getExcuse}</h1>
    </div>
  );
}

export default App;
