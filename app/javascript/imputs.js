const imputs = (gameScene) => {
  gameScene.playerMove = {
    player_up: gameScene.input.keyboard.addKey('Z'),
    player_down: gameScene.input.keyboard.addKey('S'),
    player_left: gameScene.input.keyboard.addKey('Q'),
    player_right: gameScene.input.keyboard.addKey('D'),

  }
}
export {imputs}
