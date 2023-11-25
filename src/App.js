import "./App.css"
import React from "react"
import USMap from "./USMap"
import SearchBar from "./SearchBar"

function App() {
  return (
    <div className="App">
      <div className="top-bar"></div>
      <h1>Trailblazer - National Park Service</h1>
      <USMap />
      <SearchBar />
    </div>
  )
}

export default App
