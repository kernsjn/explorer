import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <h1>BATTLESTAR GALACTICA</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">ALL PEOPLE</Link>
            </li>
            <li>
              <Link to="/1">ALL PLACES</Link>
            </li>
            <li>
              <Link to="/2">ADD PLACE</Link>
            </li>
            <li>
              <Link to="/3">ADD PERSON</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route exact path="/3" component={Page3}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
