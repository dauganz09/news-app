import React from 'react'
import Filter from '../Filter/Filter'
import Search from '../Search/Search'
import "./NavBar.css"

const Navbar = ({getNewsByCategory,getNewsBySearch}) => {
  return (
    <div className="navbar">
       <Search getNewsBySearch={getNewsBySearch}/>
       <Filter getNewsByCategory={getNewsByCategory} />
    </div>
  )
}

export default Navbar