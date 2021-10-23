import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './redux/store'
import { Home, DetailPage } from './pages'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movie/:detail" component={DetailPage} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
