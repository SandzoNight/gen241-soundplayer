import React, { Component } from 'react';
import key from './../keymaster'
import Sound from 'react-sound';

class Keybox extends Component {
  constructor(props) {
    super(props);
    key(this.props.keyswitch, () => this.pressed());
    key('shift+'+this.props.keyswitch, () =>this.pause())
    this.state = {
      press:false,
      status: [Sound.status.PLAYING,Sound.status.PAUSED,Sound.status.STOPPED],
      statusIndex:2,
      style: ['pressed','paused','']
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.props.children}
        </div>
        <div className={`keybox ${this.state.style[this.state.statusIndex]}`}>
            {this.props.keyswitch}
          <Sound 
            url={this.props.sound} 
            playStatus={this.state.status[this.state.statusIndex]}
            autoLoad={true}
            onFinishedPlaying={()=>this.stopped()}
          />
        </div>
      </div>
    );
  }
  
  pressed() {
    if(this.state.statusIndex==0){
      this.setState({statusIndex:2})
    }else if(this.state.statusIndex==2||this.state.statusIndex==1){
      this.setState({statusIndex:0})
    }
  }

  pause() {
    this.setState({statusIndex:1})
  }

  stopped() {
    this.setState({statusIndex:2})
  }
}

export default Keybox;
