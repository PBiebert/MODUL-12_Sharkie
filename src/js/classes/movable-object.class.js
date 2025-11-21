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
  speedLeft = 0.2;
  world; //Referenz auf world um auf keybords zugreifen zu können
  moveUpDownToggle = true;

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

  moveLeft() {
    this.x -= this.speedLeft;
  }

  moveUpAndDown() {
    if (this.moveUpDownToggle) {
      this.y -= 1;
      if (this.y <= -10) {
        this.moveUpDownToggle = false;
      }
    } else {
      this.y += 1;
      if (this.y >= 480 - this.height + 10) {
        this.moveUpDownToggle = true;
      }
    }
  }

  playAnimation(imageArray) {
    let i = this.currentImage % imageArray.length;
    let path = imageArray[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
