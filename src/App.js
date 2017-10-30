import React, { Component } from 'react';
import './css/style.css'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import Routes from './Routes'
import data from './config/data.json'

class App extends Component {
  render() {
    return (
      
        <Router>
          <div className="page">
            <div className="scene-panel">
              <ul>
                <li><Link to="/">Home</Link></li>
                {data.map((scenes,i)=>(
                  scenes.scene.map((scene,i)=>(
                    <li key={i}><Link key={i} to={`/scene/${i}`}>{scene.scenename}</Link></li>)
                  ))
                )}
              </ul>
            </div>
            <div className="key-panel">
              กด Shift+ปุ่ม เพื่อ หยุด
              <Routes/>
            </div>
          </div>
        </Router>
      
    );
  }
  
}

export default App;
