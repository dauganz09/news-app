import React from 'react'
import "./FilterResults.css"

const FilterResults = ({getNewsByNumber}) => {


  return (
    <select onChange={(e)=>getNewsByNumber(e.target.value)}>
         <option selected disabled>Show # users</option>
        <option value="50">All</option>
        <option value="30">30</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
       
        
       
    </select>
  )
}

export default FilterResults