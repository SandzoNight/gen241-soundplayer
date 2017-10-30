import React, { Component } from 'react';
import Keybox from './Keybox.js'

class Scene extends Component {
  componentWillMount() {
    console.log(this.props.data)
    this.setState({
      data:this.props.data
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          {
            this.state.data.keys.map((key,i)=>(
              key.attr.map((value,i)=>(
                  <Keybox key={i} vol={value.vol} sound={value.src} keyswitch={value.button}>{value.title}</Keybox>
              ))
            ))
          }
        </div>
      </div>
    );
  }
}

export default Scene;
