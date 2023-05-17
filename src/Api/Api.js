import axios from "axios"

export  let getTrending = async(name) => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${name}/day?api_key=364d5c60ab33326723502b1a258dcb4a`)

    return data.results
  }
export  let getDetails= async(id,name) => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/${name}/${id}?api_key=364d5c60ab33326723502b1a258dcb4a`)
 
    return data
  }
export  let axoisPost= async(formData,endPoint) => {
    let {data} = await axios.post(`https://route-movies-api.vercel.app/${endPoint}`,formData)
 
    return data
  }