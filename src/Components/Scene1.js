import React, { Component } from 'react';
import Keybox from './Keybox.js'

class Scene1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="1">ปืน</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="2">2</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="3">3</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="4">4</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="5">5</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="6">6</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="7">7</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="8">8</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="9">9</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="0">0</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="-">-</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="=">=</Keybox>
        </div>
        <div className="container">
          <Keybox sound="/audio/themeMu.wav" keyswitch="Q">theme song</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="W">W</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="E">E</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="R">R</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="T">T</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="Y">Y</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="U">U</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="I">I</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="O">O</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="P">P</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="[">[</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="]">]</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="\">\</Keybox>
        </div>
        <div className="container">
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="A">A</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="S">S</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="D">D</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="F">F</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="G">G</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="H">H</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="J">J</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="K">K</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="L">L</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch=";">;</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="'">'</Keybox>
        </div>
        <div className="container">
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="Z">A</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="X">S</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="C">D</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="V">F</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="B">G</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="N">H</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="M">J</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch=",">K</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch=".">L</Keybox>
          <Keybox sound="/audio/ShotGun.mp3" keyswitch="/">;</Keybox>
        </div>
      </div>
    );
  }
  
}

export default Scene1;
