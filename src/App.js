import React, { Component } from 'react';
import './css/style.css'
import Scene1 from './Components/Scene1'
// import Scene2 from './Components/Scene2'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
        <Router>
          <div className="page">
            <div className="scene-panel">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/scene1">Scene1</Link></li>
                {/* <li><Link to="/scene2">Scene2</Link></li> */}
              </ul>
            </div>
            <div className="key-panel">
              กด Shift+ปุ่ม เพื่อ pause
              <Route path="/scene1" component={Scene1}/>
              {/* <Route path="/scene2" component={Scene2}/> */}
            </div>
          </div>
        </Router>
      
    );
  }
  
}

export default App;
