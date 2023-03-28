import React from 'react'
import './CountryCard.css'

const CountryCard = ({urlToImage,source,author,description,publishedAt}) => {
  return (
    <div className="card">
        <img src={urlToImage} alt="" />
       <div className="info">
            <p>Source : {source.name}</p>
            <p>Author : {author || '' }</p>
            <p>Description: {description}</p>
            <p>Published at: {publishedAt.toLocaleString()}</p>
            
            

       </div>
    </div>
  )
}

export default CountryCard