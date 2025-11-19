class Fish extends MovableObject {
  width = 241 / 3; //Bildgröße durch 2
  height = 198 / 3; //Bildgröße durch 2
  IMAGES_SWIMMING = [
    "src/img/2.Enemy/1.Puffer fish/1.Swim/1.swim1.png",
    "src/img/2.Enemy/1.Puffer fish/1.Swim/1.swim2.png",
    "src/img/2.Enemy/1.Puffer fish/1.Swim/1.swim3.png",
    "src/img/2.Enemy/1.Puffer fish/1.Swim/1.swim4.png",
    "src/img/2.Enemy/1.Puffer fish/1.Swim/1.swim5.png",
  ];

  minSpeedLeft = 0.25;

  static speedImgChange = 100;
  constructor() {
    super().loadImage("src/img/2.Enemy/1.Puffer fish/1.Swim/1.swim1.png");
    this.loadImages(this.IMAGES_SWIMMING);
    this.x = 200 + Math.random() + 500; // Startposition auf der x-Achse
    this.speed = this.minSpeedLeft + Math.random() * 0.75;
    this.animate();
  }

  animate() {
    this.moveLeft();

    setInterval(() => {
      let i = this.currentImage % this.IMAGES_SWIMMING.length;
      let path = this.IMAGES_SWIMMING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, Fish.speedImgChange);
  }
}
