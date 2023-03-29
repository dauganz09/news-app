import React from 'react'
import './CountryCard.css'

const CountryCard = ({name,location,email,login,phone,picture,number}) => {
  return (
    <div className="card">
      <div className="order">{number}</div>
      <div className="img-box">
      <img src={picture.large} alt="" />
      </div>
       
       <div className="info">
            <p>Name : {name.first} {name.last}</p>
            <p>Username : {login.username}</p>
            <p>Email: {email}</p>
            <p>Address: {location.city}, {location.state}, {location.country} {location.postcode}</p>
            <p>Contact #: {phone}</p>
       </div>
    </div>
  )
}

export default CountryCard