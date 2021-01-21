import React from 'react';
import Home from './Home';
import {BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';

class App extends React.Component {
  render() {
    return (
    <BrowserRouter>
      <Route path="/about" component={About}/>
      <Route path="/howto" component={HowTo}/>
      <Route path="/profile" render={() => <Profile name="Leonardo Sardinha DEV"/>}/>
      <Route exact path="/" component={Home}/>
    </BrowserRouter>
    );
  }
}

export default App;
