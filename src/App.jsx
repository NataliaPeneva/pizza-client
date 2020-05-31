import React from "react"
import PizzaComponent from "./components/PizzaComponent"
import ExtrasComponent from "./components/ExtrasComponent"
import ServicesComponent from "./components/ServicesComponent"

function App() {
  return (
    <div>
      <div className="App">
        <PizzaComponent />
      </div>
      <br />
      <div className="App">
        <ExtrasComponent />
      </div>
      <br />
      <div className="App">
        <ServicesComponent />
      </div>
    </div>
  )
}

export default App
