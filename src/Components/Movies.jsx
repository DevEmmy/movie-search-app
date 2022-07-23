import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { DisplayContainer, MoviesContainer } from './global.styles'

const Movies = () => {

  const [movies,setMovies] = useState([])
  const [searchKeyword, setSearchKeyword] = useState(null)

  const apiKey = process.env.API_KEY
  const searchMovie = async ()=>{
    await axios.get(`https://www.omdbapi.com/?s=${searchKeyword}&apikey=`)
    .then(resp => {
       console.log(resp.data.Search);
       if(resp.data.Search){
        setMovies(resp.data);
       }
      })
    .catch(err => console.log(err))
  }

  const searchRef = useRef()

  const handleForm = (e)=>{
    e.preventDefault()
    setSearchKeyword(searchRef.current.value)
    setTimeout(()=>searchMovie(), 2000)
    // searchMovie()
  }
  
  const scrollRef = useRef()
    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behaviour: "smooth"})
    }, [movies])
  return (
    <MoviesContainer>
      <form className="search" onSubmit={(e)=>handleForm(e)}>
        <label htmlFor="">Search</label>
        <input type="text" placeholder='search your movie here ...' ref={searchRef} onChange={handleForm}/>
      </form>


      {
        movies.Search && 
        <DisplayContainer>
        <div className="categories">
          <h3>Movies</h3>
          <div className="movies" ref={scrollRef}>
            {
              movies?.Search?.map((movie, index)=> {
                return(
                  <>
                   {
                    movie.Poster && movie.Title &&  <div className="movie" key={index} style={{background: `url(${movie.Poster})`}} >
                    <p>{movie.Title}</p>
                    {/* <div className="darkBg"/> */}
                  </div>
                  }
                  </>
                )
              })
            }
        </div>
        </div>
        </DisplayContainer>
      }
      
    </MoviesContainer>
  )
}

export default Movies