import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import CountryDetail from './Components/CountryDetail/CountryDetail';



function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/Home" >
          <Home/>
        </Route>
        <Route path = "/country/:countryName">
          <CountryDetail/>
        </Route>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
