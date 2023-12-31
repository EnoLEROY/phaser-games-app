import * as Phaser from "phaser"

export class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(start, gameScene) {
    super(gameScene, start.x, start.y, 'player')
    this.start = start
    this.gameScene = gameScene
    // this.setScale(1, 1)

    gameScene.physics.add.world.enableBody(this, 0);
    gameScene.add.existing(this);
    console.log(this)
  }

  update () {
    const speed = 20

    if (this.gameScene.playerMove.player_up.isDown) {
      this.setVelocityY(-speed);
    } else if (this.gameScene.playerMove.player_down.isDown) {
      this.setVelocityY(speed)
    } else {
      this.setVelocityY(0)
    }

    if (this.gameScene.playerMove.player_left.isDown) {
      this.setVelocityX(-speed)
    } else if (this.gameScene.playerMove.player_right.isDown) {
      this.setVelocityX(speed)
    } else {
      this.setVelocityX(0)
    }
  }
}
