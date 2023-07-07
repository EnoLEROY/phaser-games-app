const loadAnimations = (gameScene) => {

  // animations player
  gameScene.anims.create({
    key:"player_idle_down",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 0, end: 5}),
    repeat: -1,
  })
  gameScene.anims.create({
    key:"player_idle_side",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 6, end: 11}),
    repeat: -1,
  })
  gameScene.anims.create({
    key:"player_idle_up",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 12, end: 17}),
    repeat: -1,
  })
  gameScene.anims.create({
    key:"player_down",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 18, end: 23}),
    repeat: -1,
  })
  gameScene.anims.create({
    key:"player_side",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 24, end: 29}),
    repeat: -1,
  })
  gameScene.anims.create({
    key:"player_up",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 30, end: 35}),
    repeat: -1,
  })
  gameScene.anims.create({
    key:"player_attack_down",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 36, end: 39}),
    repeat: -1,
  })
  gameScene.anims.create({
    key:"player_attack_side",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 40, end: 43}),
    repeat: -1,
  })
  gameScene.anims.create({
    key:"player_attack_up",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 44, end: 47}),
    repeat: -1,
  })
  gameScene.anims.create({
    key:"player_dead",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 48, end: 50}),
    repeat: -1,
  })
  gameScene.anims.create({
    key:"player_crit_attack_down",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 51, end: 54}),
    repeat: -1,
  })
  gameScene.anims.create({
    key:"player_crit_attack_side",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 55, end: 58}),
    repeat: -1,
  })
  gameScene.anims.create({
    key:"player_crit_attack_up",
    frameRate: 3,
    frames: gameScene.anims.generateFrameNumbers("player_all", {start: 59, end: 62}),
    repeat: -1,
  })

}
export {loadAnimations}
