import { Controller } from "@hotwired/stimulus"
import * as Phaser from "phaser"
import { loadAnimations } from "load_animations"

// Connects to data-controller="game1"
export default class extends Controller {
  static values = {
    playerImageUrl: String,

  }


  connect() {
    console.log('je suis conecter')

    // importation des assets
    const playerImageUrl = this.playerImageUrlValue


    this.gameScene = new Phaser.Scene('Game');


    this.gameScene.preload = () => {
      // import des images
      this.gameScene.load.image('player', playerImageUrl)

      // import des spritsheets
      this.gameScene.load.spritesheet('player_all', playerImageUrl, {frameWidth: 48, frameHeight: 48})

      // load des audios
      // this.gameScene.load.audio("death_sound", deathSound)


    } // preload end

    this.gameScene.create = () => {
      loadAnimations(this.gameScene)

    } // create end

    this.gameScene.update = () => {


    } // update end

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
