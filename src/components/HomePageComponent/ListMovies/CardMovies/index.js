import { useState } from "react"
import { Modal } from "../../.."
import { NavLink } from 'react-router-dom'

const CardMovies = ({movie}) => {
  const [show, setShow] = useState(false)


  return (
    <div className="card-movies__wrapper">
        <div className="card-movies__poster" onClick={() => setShow(true)}>
          <img src={movie.Poster} alt={`${movie.Title}'s Poster`} />
        </div>
        <NavLink to={`/movie/${movie.imdbID}`}>
          <h4 className="card-movies__title">{movie.Title}</h4>
        </NavLink>
        <Modal onClose={() => setShow(false)} show={show}>
            <img src={movie.Poster} alt={`${movie.Title}'s Poster`} />
        </Modal>
    </div>
  )
}

export default CardMovies
