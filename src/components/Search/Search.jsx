import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import './Search.css'

const Search = ({getNewsBySearch}) => {
    const [input,setInput] = useState("")

    const submitHandler =(e)=>{
        e.preventDefault();
        getNewsBySearch(input)
    }

  return (
        <div className="search">
            <FaSearch size={20} color='white' />
            <form onSubmit={submitHandler}>
                <input type="text" value={input} placeholder="Search News..." onChange={(e)=>setInput(e.target.value)} />

            </form>
        </div>
  )
}

export default Search