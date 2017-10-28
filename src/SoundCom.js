import React, { Component } from 'react';
import Sound from 'react-sound';

class SoundCom extends Component {
  render() {
    return <Sound url="/audio/themeMu.wav" playStatus={Sound.status.PLAYING}/>
  }
}

export default SoundCom;
