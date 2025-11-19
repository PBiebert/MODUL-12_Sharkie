class MovableObject {
  x = 120; // Startposition auf der x-Achse
  y = 250; // Startposition auf der y-Achse
  img; // Variable für das Bild des Objekts
  width = 100;
  height = 150;
  imageCache = {};
  otherDirection = false;
  currentImage = 0;
  speed = 0.2;

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

  moveRight() {}

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60); // 1s (1000ms) / 60 entspricht 60 fps
  }
}
