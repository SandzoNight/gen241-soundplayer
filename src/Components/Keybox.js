import React, { Component } from 'react';
import key from './../keymaster'
import ReactHowler from 'react-howler'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import raf from 'raf'

class Keybox extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      press:false,
      statusIndex:3,
      style: ['pressed','paused',''],
      duration: 0,
      position: 0,
      vol: 100,
      playing: false
    }
    
  }
  
  componentDidMount() {
    this.setState({duration:this.player.duration()})
    key(this.props.keyswitch, () => this.pressed());
    key('shift+'+this.props.keyswitch, () =>this.handleStop())
    this.setState({vol:this.props.vol})
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
            <div className="time">{this.state.position}/{this.state.duration}</div>
        </div>
        <InputRange minValue={0} maxValue={100} value={this.state.vol-0} onChange={(value)=>{this.setState({vol:value})}}/>
        <ReactHowler 
          src={this.props.sound}
          playing={this.state.playing}
          preLoad={true}
          onLoad={() => this.handleLoad()}
          onStop={()=>this.handlePause()}
          onEnd={()=>this.handleStop()}
          onPlay={() => this.playing()}
          volume={this.state.vol/100}
          ref={(ref) => (this.player = ref)}
          html5={false}
        />
        
      </div>
    );
  }
  
  pressed() {
    if(this.state.playing===true){
      this.setState({playing:false})
      this.setState({statusIndex:1})
    }else if(this.state.playing===false){
      this.setState({playing:true})
      this.setState({statusIndex:0})
    }
  }
  handleLoad() {
    this.setState({duration:this.player.duration().toFixed(2)})
  }
  handleStop() {
    try{
      this.player.seek(0);
    }catch(err){
    }
    this.setState({
      playing:false,
      statusIndex:2
    })
  }
  handlePause() {
    this.player.stop()
    this.setState({
      statisIndex:1
    })
  }
  handleSeek() {
    try{
      this.setState({position:this.player.seek().toFixed(2)})
    }catch(err){

    }
    if(this.state.playing){
      this._raf = raf(()=>this.handleSeek())
    }
  }

  playing(val) {
    
    this.handleSeek();
  }
}

export default Keybox;
