import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import TheHeader from "./components/TheHeader";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <TheHeader />
      <Homepage />
      <Counter />
    </>
  );
}

export default App;
