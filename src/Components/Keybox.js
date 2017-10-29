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
      style: ['pressed','paused',''],
      duration: 0,
      position: 0,
    }
  }

  render() {

    return (
      <div>
        <div>
          {this.props.children}
        </div>
        <div className={`keybox ${this.state.style[this.state.statusIndex]}`}>
            <div style={{width:'100%'}}>
              {this.props.keyswitch}
            </div>
            <div className="time">{Math.ceil(this.state.position)}/{Math.ceil(this.state.duration)}</div>
        </div>
          <Sound 
            url={this.props.sound} 
            playStatus={this.state.status[this.state.statusIndex]}
            autoLoad={true}
            onFinishedPlaying={()=>this.stopped()}
            onPlaying={(val) => this.playing(val)}
            onLoading={(val => this.loading(val))}
          />
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
  playing(val) {
    this.setState({position: val.position/100,duration: val.duration/100})
    console.log(this.state.position)
  }
  loading(val) {
    // console.log(this.state.bytesLoaded)
    // console.log(val.position)
  }
}

export default Keybox;
