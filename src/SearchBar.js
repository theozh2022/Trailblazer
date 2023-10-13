import React from "react"
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-title">Activity Search</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  )
}

export default SearchBar
