import React from "react";

import AddTask from "./components/AddTask/AddTask"
import { Counter } from "./components/Counter";

function App() {
  return <div>
  
   <AddTask data="tasks"/>
   <Counter/>

   
  </div>;
}

export default App;
