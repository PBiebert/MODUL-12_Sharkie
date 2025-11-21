class MovableObject {
  x = 100; // Startposition auf der x-Achse
  y = 250; // Startposition auf der y-Achse
  img; // Variable für das Bild des Objekts
  width = 100;
  height = 150;
  imageCache = {};
  otherDirection = false;
  currentImage = 0;
  speedImgChange = 100;
  world;
  moveUpDownToggle = true;
  speedDefault = 2;
  speedBoost = 4;
  speedX = 2;
  speedY = 0;
  minSpeedLeft = 0.25;
  graphiteValue = 0.15;
  graphiteSpeed = 60;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {
    this.x += this.speedX;
  }

  moveLeft() {
    this.x -= this.speedX;
  }

  moveUp() {
    this.speedY = this.speedDefault;
    if (this.y <= 0 - (this.height / 2 + 10)) {
      this.speedY = 0;
    }
  }

  moveDown() {
    this.y += this.speedX;
    this.speedY = 0;
  }

  sprint() {
    if (this.world.keyboard.SPACE) {
      this.speedX = this.speedBoost;
    } else {
      this.speedX = this.speedDefault;
    }
  }

  playAnimation(imageArray) {
    let i = this.currentImage % imageArray.length;
    let path = imageArray[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.graphiteValue;
      }
    }, 1000 / this.graphiteSpeed);
    console.log(this.speedY);
  }

  isAboveGround() {
    return this.y < 480 - this.height + 55;
  }
}
