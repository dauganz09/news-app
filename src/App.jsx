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
  
  
  const getCountries = ()=>{
     fetch(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=fffd8756c99940b68765700f58e5616f`)
    .then(res =>res.json())
    .then(data =>{
      console.log(data.articles)
      setNews(data.articles)
    })
   
  }

  
  const getNewsBySearch = (search)=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${search}&apiKey=fffd8756c99940b68765700f58e5616f`)
    .then(res =>res.json())
    .then(data =>{
      console.log(data.articles)
      setNews(data.articles)
    })
  }


  const getNewsByCategory = (category)=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=fffd8756c99940b68765700f58e5616f`)
    .then(res =>res.json())
    .then(data =>{
      console.log(data.articles)
      setNews(data.articles)
    })
  }

  return (
    <div className="App">
      <Header/>
      <Navbar getNewsByCategory={getNewsByCategory} getNewsBySearch={getNewsBySearch}/>
      <div className="main-content">
        {
          news.map((n,i)=>(
            <CountryCard key={i} {...n} />
          ))

          
          
        }

      </div>
    </div>
  )
}

export default App
