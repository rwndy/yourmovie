import CardMovies from "./CardMovies"
const ListMovies = ({movies, totalResults, loader}) => {

  return (
    <div className="movies-page">
      <div className="container">
        <div className="card-movies">
            {
              movies && movies.map((movie, idx) => (
                <CardMovies movie={movie} key={idx}/>
              ))
            }
            {
              movies && movies.length < parseInt(totalResults) 
              && <div ref={loader}></div>
            }
          
        </div>
      </div>
    </div>
  )
}

export default ListMovies
