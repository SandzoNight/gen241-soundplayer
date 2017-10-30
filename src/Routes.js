import React, { Component } from 'react';
import Main from './Components/Main'
import Scene from './Components/Scene'
import data from './config/data.json'
import {
  Route,Switch
} from 'react-router-dom'

class Routes extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Main}/>
          {data.map((scenes,i)=>(
            scenes.scene.map((scene,i)=>(
              <Route path={`/scene/${i}`} key={i} render={(props)=>(<Scene data={scene} />)}/>
            ))
          ))}
        </Switch>
      </div>
    );
  }
  
}

export default Routes;
