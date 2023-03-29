import React from 'react'
import "./Filter.css"

const Filter = ({getNewsByCategory}) => {


  return (
    <select onChange={(e)=>getNewsByCategory(e.target.value)}>
        <option selected disabled>Filter by Category</option>
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
       
        
       
    </select>
  )
}

export default Filter