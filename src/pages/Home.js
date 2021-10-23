import { useEffect, useState, useRef} from "react"
import { ListMovies, SearchMovies } from "../components"
import { useDispatch, useSelector } from "react-redux"

import {getMovies} from '../redux/store/actions'

const Home = () => {
  const [ searchTerms, setSearch ] = useState('')
  const [page, setPage] = useState (1)
  const {movies, totalResults} = useSelector(state => state.getMoviesReducer)
  const dispatch = useDispatch()
  const loader = useRef(null)

  const handleSearch = e => {
    setSearch(e.target.value)
  }

  const handleObserver = (entities) => {
    const target = entities[0]
    console.log('target', target)
    if (target.isIntersecting) {
      setPage(current => current + 1)
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '10px',
      threshold: 1.0,
    }
    // initialize IntersectionObserver and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options)
    if (loader.current) {
      observer.observe(loader.current)
      
    }
  }, [])

  useEffect(() => {
    dispatch(getMovies(searchTerms, page))
  }, [dispatch, page, searchTerms])


  return (
  <div className="home-movies">
    <div className="container">
      <div className="home-movies__wrapper">
        <h1>YourMovies App</h1>
        <SearchMovies search={searchTerms} onSearch={handleSearch} />
      </div>
      <ListMovies movies={movies} totalResults={totalResults} loader={loader}/>
    </div>
  </div>
  )
}

export default Home
