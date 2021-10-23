import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

const DetailComponent = () => {
  const [detailMovies, setDetailMovies] = useState({})
  let { detail } = useParams()

  const fetchDetailMovie = async id => {
   try {
     const response = await axios({
       method: 'GET',
       url: `https://www.omdbapi.com/?i=${id}&plot=full&apikey=faf7e5bb`
     })
     const result = await response.data
     setDetailMovies(result)
   } catch (error) {
     console.error(error)
   }
  }

  useEffect(() => {
    fetchDetailMovie(detail)
  }, [detail])

  return (
    <div className="detail-movie">
      <div className="container">
        <div className="detail-movie__row">
          <div className="detail-movie__poster">
            <img src={detailMovies.Poster} alt={`Poster's ${detailMovies.Title}`}/>
          </div>

          <div className="detail-movie__content">
            <h1 className="detail-movie__content--title">{detailMovies.Title}</h1>
            <h3 className="detail-movie__content--year">Year: {detailMovies.Year}</h3>
            <h3 className="detail-movie__content--runtime">Runtime: {detailMovies.Runtime}</h3>
            <h3 className="detail-movie__content--genre">Genre: {detailMovies.Genre}</h3>
            <h3 className="detail-movie__content--director">Director: {detailMovies.Director}</h3>
            <h3 className="detail-movie__content--actors">Actors: {detailMovies.Actors}</h3>
            <h3 className="detail-movie__content--writer">Writer: {detailMovies.Writer}</h3>
            <p className="detail-movie__content--plot"> {detailMovies.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailComponent
