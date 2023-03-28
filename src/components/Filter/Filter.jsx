import React from 'react'
import "./Filter.css"

const Filter = ({getNewsByCategory}) => {


  return (
    <select onChange={(e)=>getNewsByCategory(e.target.value)}>
        <option selected disabled>Filter by Category</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
        
       
    </select>
  )
}

export default Filter