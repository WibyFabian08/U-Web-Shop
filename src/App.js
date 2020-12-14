import React from 'react';
import Home from '../src/Pages/Home';
import Sukses from '../src/Pages/Sukses';
// import NavigationBar from '../src/Component/NavigationBar'
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
            <Route exact path="/" component={Home} />
            <Route path="/sukses" component={Sukses} />
          </Switch>
      </Router>
    )
  }
}

export default App;