var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {

      }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var player;
var cursors;

function preload ()
{
  this.load.spritesheet('pokedex', 'images/pokedex.png', {frameWidth: 80, frameHeight: 80})
  this.load.spritesheet('trainer', 'images/trainer.png', {frameWidth: 64, frameHeight: 60});
}

function create ()
{
  this.add.image(400, 300, 'pokedex', 1);
  player = this.physics.add.sprite(0, 0, 'trainer', 0);
  player.setOrigin(0,0)
  cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
  movePlayer();
}

function movePlayer() {
  player.x = Math.round(player.x);
  player.y = Math.round(player.y);
  console.log((player.x % 64))
  if ((player.x % 32 == 0) && (player.y % 32 == 0)) {
    let xdir = cursors.right.isDown - cursors.left.isDown;
    let ydir = cursors.down.isDown - cursors.up.isDown;

    if (xdir != 0) {
      player.setVelocityX(xdir * 128);
      player.setVelocityY(0);
    } else {
      player.setVelocityX(0);
    }
    if (ydir != 0) {
      player.setVelocityX(0);
      player.setVelocityY(ydir * 128);
    } else {
      player.setVelocityY(0);
    }
  }
}
