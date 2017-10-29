import React, { Component } from 'react';
import Keybox from './Keybox.js'

class Scene1 extends Component {
  render() {
    var vol1 = 100
    var vol2 = 60
    var vol3 = 30
    var vol4 = 10
    var vol5 = 50

    return (
      <div>
        <div className="container">
          <Keybox vol={vol1} sound="/audio/ShotGun.mp3" keyswitch="1">ปืน</Keybox>
          <Keybox vol={vol1} sound="/audio/Body Falling Grass.mp3" keyswitch="2">body falling</Keybox>
          <Keybox vol={vol1} sound="/audio/dark fight_01.wav" keyswitch="3">dark fight</Keybox>
          <Keybox vol={vol1} sound="/audio/Day Forest.mp3" keyswitch="4">Day Forest</Keybox>
          <Keybox vol={vol1} sound="/audio/Door_BeforePlus.wav" keyswitch="5">Door_BeforePlus</Keybox>
          <Keybox vol={vol1} sound="/audio/Knife Sound Effects.mp3" keyswitch="6">knife</Keybox>
          <Keybox vol={vol1} sound="/audio/Lightning Storm Sound Effect.mp3" keyswitch="7">lightning</Keybox>
          <Keybox vol={vol1} sound="/audio/Running On Grass Sound Effect.mp3" keyswitch="8">running grass</Keybox>
          <Keybox vol={vol1} sound="/audio/Screams - Woman-Girl2.mp3" keyswitch="9">scream</Keybox>
          <Keybox vol={vol1} sound="/audio/Walking on grass (sound effect).mp3" keyswitch="0">walking</Keybox>
          <Keybox vol={vol1} sound="/audio/ShotGun.mp3" keyswitch="-">-</Keybox>
          <Keybox vol={vol1} sound="/audio/ShotGun.mp3" keyswitch="=">=</Keybox>
        </div>
        <div className="container">
          <Keybox vol={vol2} sound="/audio/themeMu.wav" keyswitch="Q">theme song</Keybox>
          <Keybox vol={vol2} sound="/audio/Page Turn Sound Effect.mp3" keyswitch="W">page turn</Keybox>
          <Keybox vol={vol2} sound="/audio/Night Forest.wav" keyswitch="E">night forest</Keybox>
          <Keybox vol={vol2} sound="/audio/Rain .mp3" keyswitch="R">rain</Keybox>
          <Keybox vol={vol2} sound="/audio/ShotGun.mp3" keyswitch="T">T</Keybox>
          <Keybox vol={vol2} sound="/audio/ShotGun.mp3" keyswitch="Y">Y</Keybox>
          <Keybox vol={vol2} sound="/audio/ShotGun.mp3" keyswitch="U">U</Keybox>
          <Keybox vol={vol2} sound="/audio/ShotGun.mp3" keyswitch="I">I</Keybox>
          <Keybox vol={vol2} sound="/audio/ShotGun.mp3" keyswitch="O">O</Keybox>
          <Keybox vol={vol2} sound="/audio/ShotGun.mp3" keyswitch="P">P</Keybox>
          <Keybox vol={vol2} sound="/audio/ShotGun.mp3" keyswitch="[">[</Keybox>
          <Keybox vol={vol2} sound="/audio/ShotGun.mp3" keyswitch="]">]</Keybox>
          <Keybox vol={vol2} sound="/audio/ShotGun.mp3" keyswitch="\">\</Keybox>
        </div>
        <div className="container">
          <Keybox vol={vol3} sound="/audio/ShotGun.mp3" keyswitch="A">A</Keybox>
          <Keybox vol={vol3} sound="/audio/ShotGun.mp3" keyswitch="S">S</Keybox>
          <Keybox vol={vol3} sound="/audio/ShotGun.mp3" keyswitch="D">D</Keybox>
          <Keybox vol={vol3} sound="/audio/ShotGun.mp3" keyswitch="F">F</Keybox>
          <Keybox vol={vol3} sound="/audio/ShotGun.mp3" keyswitch="G">G</Keybox>
          <Keybox vol={vol3} sound="/audio/ShotGun.mp3" keyswitch="H">H</Keybox>
          <Keybox vol={vol3} sound="/audio/ShotGun.mp3" keyswitch="J">J</Keybox>
          <Keybox vol={vol3} sound="/audio/ShotGun.mp3" keyswitch="K">K</Keybox>
          <Keybox vol={vol3} sound="/audio/ShotGun.mp3" keyswitch="L">L</Keybox>
          <Keybox vol={vol3} sound="/audio/ShotGun.mp3" keyswitch=";">;</Keybox>
          <Keybox vol={vol3} sound="/audio/ShotGun.mp3" keyswitch="'">'</Keybox>
        </div>
        <div className="container">
          <Keybox vol={vol4} sound="/audio/ShotGun.mp3" keyswitch="Z">A</Keybox>
          <Keybox vol={vol4} sound="/audio/ShotGun.mp3" keyswitch="X">S</Keybox>
          <Keybox vol={vol4} sound="/audio/ShotGun.mp3" keyswitch="C">D</Keybox>
          <Keybox vol={vol4} sound="/audio/ShotGun.mp3" keyswitch="V">F</Keybox>
          <Keybox vol={vol4} sound="/audio/ShotGun.mp3" keyswitch="B">G</Keybox>
          <Keybox vol={vol4} sound="/audio/ShotGun.mp3" keyswitch="N">H</Keybox>
          <Keybox vol={vol4} sound="/audio/ShotGun.mp3" keyswitch="M">J</Keybox>
          <Keybox vol={vol4} sound="/audio/ShotGun.mp3" keyswitch=",">K</Keybox>
          <Keybox vol={vol4} sound="/audio/ShotGun.mp3" keyswitch=".">L</Keybox>
          <Keybox vol={vol4} sound="/audio/ShotGun.mp3" keyswitch="/">;</Keybox>
        </div>
        <div className="container">
          <Keybox vol={vol5} sound="/audio/ShotGun.mp3" keyswitch="space">SPACE</Keybox>
        </div>
      </div>
    );
  }
}

export default Scene1;
