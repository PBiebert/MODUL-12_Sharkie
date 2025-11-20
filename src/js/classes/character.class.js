class Character extends MovableObject {
  height = 1000 / 4; //Bildgröße durch 4
  width = 815 / 4; //Bildgröße durch 4
  world; //Referenz auf world um auf keybords zugreifen zu können
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

  speed = 2;

  constructor() {
    super().loadImage(this.IMAGES_STANDING[0]);
    // wenn Super.loadImage einmal aufgerufenb wurde kann man via this drauf zureifen und hier das Array für die funktion LoadImages reingeben
    this.loadImages(this.IMAGES_STANDING);

    this.animate();
  }
  animate() {
    setInterval(() => {
      console.log("X = " + this.x);
      console.log("Y = " + this.y);
    }, 2000);

    setInterval(() => {
      if (
        this.world.keyboard.RIGHT &&
        this.x < this.world.level.levelLength - 720
      ) {
        this.x += this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
      if (this.world.keyboard.UP && this.y > 0 - this.height / 2 + 10) {
        // canvas start - halbe characterHöhe + Transparenzen
        this.y -= this.speed;
      }
      if (this.world.keyboard.DOWN && this.y < 480 - this.height + 55) {
        // canvas end - characterHöhe + Transparenzen
        this.y += this.speed;
      }
      if (this.world.keyboard.SPACE) {
        this.speed = 4;
      } else {
        this.speed = 2;
      }

      this.world.camera_x = -this.x + 100; //Caracter ist weiter links
    }, 1000 / 60); //60 fps

    setInterval(() => {
      this.playAnimation(this.IMAGES_STANDING);
    }, this.speedImgChange);
  }

  jump() {}
}
