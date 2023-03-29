import React from 'react'
import "./Filter.css"

const Filter = ({getNewsByCategory}) => {


  return (
    <select onChange={(e)=>getNewsByCategory(e.target.value)}>
       
        <option value="" selected>All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
       
        
       
    </select>
  )
}

export default Filter