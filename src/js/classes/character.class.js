class Character extends MovableObject {
  height = 1000 / 4; //Bildgröße durch 4
  width = 815 / 4; //Bildgröße durch 4
  imgBottom = this.height - 50;
  imgTop = this.height / 2 - 10;
  imgLeft = -35;
  imgRight = this.width;

  IMAGES_STANDING = [
    "src/img/1.Sharkie/1.IDLE/1.png",
    "src/img/1.Sharkie/1.IDLE/2.png",
    "src/img/1.Sharkie/1.IDLE/3.png",
    "src/img/1.Sharkie/1.IDLE/4.png",
    "src/img/1.Sharkie/1.IDLE/5.png",
    "src/img/1.Sharkie/1.IDLE/6.png",
    "src/img/1.Sharkie/1.IDLE/7.png",
    "src/img/1.Sharkie/1.IDLE/8.png",
    "src/img/1.Sharkie/1.IDLE/9.png",
    "src/img/1.Sharkie/1.IDLE/10.png",
    "src/img/1.Sharkie/1.IDLE/11.png",
    "src/img/1.Sharkie/1.IDLE/12.png",
    "src/img/1.Sharkie/1.IDLE/13.png",
    "src/img/1.Sharkie/1.IDLE/14.png",
    "src/img/1.Sharkie/1.IDLE/15.png",
    "src/img/1.Sharkie/1.IDLE/16.png",
    "src/img/1.Sharkie/1.IDLE/17.png",
    "src/img/1.Sharkie/1.IDLE/18.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_STANDING[0]);
    this.loadImages(this.IMAGES_STANDING);
    this.y = 480 - this.imgBottom;
    console.log(this.imgBottom);
    this.applyGravity();
    this.animate();
  }
  animate() {
    setInterval(() => {
      console.log("X = " + this.x);
      console.log("Y = " + this.y);
    }, 2000);

    setInterval(() => {
      this.checkMovementKeys();
      this.sprint();
      this.updateCameraPosition();
    }, 1000 / 60); //60 fps

    setInterval(() => {
      this.playAnimation(this.IMAGES_STANDING);
    }, this.speedImgChange);
  }

  checkMovementKeys() {
    if (
      this.world.keyboard.RIGHT &&
      this.x < this.world.level.levelLength - this.imgRight - 70
    ) {
      this.moveRight();
      this.otherDirection = false;
    }
    if (this.world.keyboard.LEFT && this.x > 0 + this.imgLeft) {
      this.moveLeft();
      this.otherDirection = true;
    }
    if (this.world.keyboard.UP) {
      this.moveUp();
    }
    if (this.world.keyboard.DOWN && this.y < 480 - this.imgBottom) {
      this.moveDown();
    }
  }

  updateCameraPosition() {
    if (this.x <= 100) {
      this.world.camera_x = 0;
    } else if (this.x < this.world.level.levelLength - 720) {
      this.world.camera_x = -this.x + 100;
    } else {
      this.world.camera_x = -(this.world.level.levelLength - 720) + 100;
    }
  }
}
