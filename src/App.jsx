import { useState,useEffect } from 'react'
import './App.css'
import CountryCard from './components/CountryCard/CountryCard'
import Header from './components/Header/Header'
import Navbar from './components/NavBar/Navbar'
import { API_URL } from './utils/api'

function App() {
  const [news,setNews] = useState([])
  


  useEffect(() => {
    getCountries()
  
  
  }, [])
  
  
  const getCountries = async ()=>{
     const res = await fetch(`https://randomuser.me/api/?results=100`)
     const data = await res.json()
     console.log(data.results)
     setNews(data.results)
   
  }

  


  const getNewsByCategory = (category)=>{
    fetch(`https://randomuser.me/api/?results=100&gender=${category}`)
    .then(res =>res.json())
    .then(data =>{
      console.log(data.results)
      setNews(data.results)
    })
  }

  


  const getNewsByNumber = (number)=>{
    fetch(`https://randomuser.me/api/?results=${number}`)
    .then(res =>res.json())
    .then(data =>{
      console.log(data.results)
      setNews(data.results)
    })
  }


  return (
    <div className="App">
      <Header/>
      <Navbar getNewsByCategory={getNewsByCategory} getNewsByNumber={getNewsByNumber} />
      <div className="main-content">
        {
          news.map((n,i)=>(
            <CountryCard key={i} number={i+1} {...n} />
          ))

          
          
        }

      </div>
    </div>
  )
}

export default App
