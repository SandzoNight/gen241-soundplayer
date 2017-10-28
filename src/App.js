import React, { Component } from 'react';
import './css/style.css'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      
        <Router>
          <div className="page">
            <div className="scene-panel">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/scene1">Scene1</Link></li>
                <li><Link to="/scene2">Scene2</Link></li>
                <li><Link to="/scene3">Scene3</Link></li>
                <li><Link to="/scene4">Scene4</Link></li>
                <li><Link to="/scene5">Scene5</Link></li>
                <li><Link to="/scene6">Scene6</Link></li>
                <li><Link to="/scene7">Scene7</Link></li>
                <li><Link to="/scene8">Scene8</Link></li>
                <li><Link to="/scene9">Scene9</Link></li>
                <li><Link to="/scene10">Scene10</Link></li>
              </ul>
            </div>
            <div className="key-panel">
              กด Shift+ปุ่ม เพื่อ pause
              <Routes/>
            </div>
          </div>
        </Router>
      
    );
  }
  
}

export default App;
