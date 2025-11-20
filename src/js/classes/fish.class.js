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

  constructor(levelLength) {
    super().loadImage(this.IMAGES_SWIMMING[0]);
    this.loadImages(this.IMAGES_SWIMMING);
    this.x = 720 + levelLength * Math.random(); // Startposition auf der x-Achse
    this.y = 430 * Math.random();
    console.log(this.x);
    this.speedLeft = this.minSpeedLeft + Math.random() * 0.75;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIMMING);
    }, this.speedImgChange);
  }
}
