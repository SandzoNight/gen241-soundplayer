import React, { Component } from 'react';
import Scene1 from './Components/Scene1'
// import Scene2 from './Components/Scene2'
import {
  Route
} from 'react-router-dom'

class Routes extends Component {

  render() {
    return (
      <Route path="/scene1" component={Scene1}/>
    );
  }
  
}

export default Routes;
