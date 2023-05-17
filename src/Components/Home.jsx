import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from './Item'
import { getTrending } from '../Api/Api'
import Loading from './Loading'

export default function Home() {
  const [movies,setMovies] =useState([])

  let getData = async() => {
   let movies = await getTrending('movie')
    setMovies(movies)
  }
  useEffect(() => {
    getData()
  } ,[])
  return (
    <>
    {
      movies.length !== 0 ? <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-4">
            <div className="brdr w-25"></div>
            <h2 className=''>Trending <br /> Movies <br /> To Watch Now</h2>
            <p>Most Watched Movies by days</p>
            <div className="brdr w-100"></div>
          </div>
          { movies.map((movie) => {
            return <Item key={movie.id} data={movie}/>
          }) }
        </div>
      </div>
      </> : <Loading/>
    }
      
    </>
  )
}
