import React from 'react';
import Home from '../src/Pages/Home';
import Sukses from '../src/Pages/Sukses';
import LandingPage from '../src/Pages/LandingPage';
import About from '../src/Pages/About';
import Houses from '../src/Pages/Houses';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={LandingPage}></Route>
            <Route path="/home" component={Home} />
            <Route path="/sukses" component={Sukses} />
            <Route path="/about" component={About}></Route>
            <Route path="/houses" component={Houses}></Route>
          </Switch>
      </Router>
    )
  }
}

export default App;