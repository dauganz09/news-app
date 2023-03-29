import React from 'react'
import Filter from '../Filter/Filter'
import FilterResults from '../FilterResults/FilterResults'
import Search from '../Search/Search'
import "./NavBar.css"

const Navbar = ({getNewsByCategory,getNewsByNumber}) => {
  return (
    <div className="navbar">
      <FilterResults getNewsByNumber={getNewsByNumber}/>
       <Filter getNewsByCategory={getNewsByCategory} />
    </div>
  )
}

export default Navbar