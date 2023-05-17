import React, { useEffect, useState } from 'react'
import { getDetails } from '../Api/Api'
import Loading from './Loading'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {

    const [details,setDetails] =useState(null)
    const {id,media} = useParams()
    console.log(id)
    let getData = async() => {
     let details = await getDetails(id,media)
     setDetails(details)
    }
    useEffect(() => {
      getData()
    } ,[])
    console.log(details)
  return (
    <>
    {details ? <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img className='w-100' src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} alt="" />
            </div>
            <div className="col-md-8">
                <div>
                    <h2>{details.title} {details.name}</h2>
                    {details.genres.map((item , index) => {
                        return (
                            <span className={`badge bg-info p-2 me-3`} key={item.id}>{item.name}</span>
                        )
                    })}
                    <ul>
                       <li>{details.vote_average}</li>
                       <li>{details.vote_count}</li>
                       <li>{details.release_date}</li>
                    </ul>
                    <p>{details.overview}</p>
                </div>
            </div>
        </div>
    </div>: <Loading/>}
      
    </>
  )
}
