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
  static speedImgChange = 100;

  constructor() {
    super().loadImage("src/img/1.Sharkie/1.IDLE/1.png");
    // wenn Super.loadImage einmal aufgerufenb wurde kann man via this drauf zureifen und hier das Array für die funktion LoadImages reingeben
    this.loadImages(this.IMAGES_STANDING);

    this.animate();
  }
  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        this.x += this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
      if (this.world.keyboard.UP) {
        this.y -= this.speed;
      }
      if (this.world.keyboard.DOWN) {
        this.y += this.speed;
      }
      if (this.world.keyboard.SPACE) {
        this.speed = 4;
      } else {
        this.speed = 2;
      }

      this.world.camera_x = -this.x; //!new
    }, 1000 / 60); //60 fps

    setInterval(() => {
      let i = this.currentImage % this.IMAGES_STANDING.length;
      let path = this.IMAGES_STANDING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, Character.speedImgChange);
  }

  jump() {}
}
