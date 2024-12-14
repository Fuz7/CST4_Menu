import { useState } from "react";
import "./App.css";
import CardSection from "./components/CardSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-[100vh] bg-black flex flex-col bg- items-center text-white 
    font-SpecialElite text-[76px]">
      <h2 className="mt-[50px] leading-[1.1] ">CST 4</h2>
      <h1 className="">Compilation Of Solution</h1>
      <CardSection />
    </div>
  );
}

export default App;
