const loadAnimations = (gameScene) => {
  gameScene.anims.create({
    key:"player_idle",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 0, end: 3}),
    repeat: -1,
  })
}
export {loadAnimations}
