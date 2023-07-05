import { Controller } from "@hotwired/stimulus"
import * as Phaser from "../phaser"
// import {Phaser} from "phaser"

// Connects to data-controller="game1"
export default class extends Controller {
  static values = {

  }


  connect() {
    console.log('je suis conecter')


    this.gameScene = new Phaser.Scene('Game');

    this.gameScene.preload = () => {
      console.log('preload ok')
    }

    this.gameScene.create = () => {
      console.log('create ok')

    }

    this.gameScene.update = () => {
      

    }

    let config = {
      type: Phaser.AUTO,
      scale : {
        parent: 'game',
        mode: Phaser.Scale.FIT,
        width: 800,
        height: 800,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      scene: [this.gameScene, this.UIScene, this.pauseScene, this.SelectCharacter],
      physics: {
        default: 'arcade',
        arcade: { debug: true }
      },
      fps: {
        target: 60,
        forceSetTimeOut: true
      },
    };
    let game = new Phaser.Game(config);
  }
}
