import React, { Component } from 'react';
import key from './../keymaster'
import Sound from 'react-sound';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

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
      vol: this.props.vol
    }
  }

  render() {

    return (
      <div className="keybox-container">
        <div>
          {this.props.children}
        </div>
        <div className={`keybox ${this.state.style[this.state.statusIndex]}`}>
            <div style={{width:'100%'}}>
              {this.props.keyswitch}
            </div>
            <div className="time">{Math.ceil(this.state.position)}/{Math.ceil(this.state.duration)}</div>
        </div>
        <InputRange minValue={0} maxValue={100} value={this.state.vol} onChange={(value)=>{this.setState({vol:value})}}/>
        <Sound 
          url={this.props.sound}
          playStatus={this.state.status[this.state.statusIndex]}
          autoLoad={false}
          onFinishedPlaying={()=>this.stopped()}
          onPlaying={(val) => this.playing(val)}
          volume={this.state.vol}
        />
        
      </div>
    );
  }
  
  pressed() {
    if(this.state.statusIndex===0){
      this.setState({statusIndex:2})
    }else if(this.state.statusIndex===2||this.state.statusIndex===1){
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
}

export default Keybox;
