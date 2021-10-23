import { DetailComponent } from "../components"
import { useHistory } from "react-router"
const DetailPage = () => {
  
  const history = useHistory()

  return (
    <>
      <div className="container">
        <h1 title="back to home" className="home-title" onClick={() => history.push('/')}>YourMovies App</h1>
      </div>
      <DetailComponent />
    </>
  )
}

export default DetailPage
