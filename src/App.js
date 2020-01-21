import React from "react";
import "./App.css";
import "./components/styles/App.scss";
import Input from "./components/Input";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <section className="container">
        <Timer className="timer" />
        <Input className="input" />
      </section>
    </div>
  );
}

export default App;
