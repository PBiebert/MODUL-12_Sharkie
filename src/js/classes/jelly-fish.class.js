class JellyFish extends MovableObject {
  width = 211 / 2;
  height = 300 / 2;
  IMAGES_SWIMMING;

  constructor(levelLength, IMAGES_SWIMMING) {
    super().loadImage(IMAGES_SWIMMING[0]);
    this.loadImages(IMAGES_SWIMMING);
    this.IMAGES_SWIMMING = IMAGES_SWIMMING;
    this.x = 720 + Math.random() * (levelLength - 2 * 720); // Bereich: 720 bis levelLength-720
    this.y = 430 * Math.random();

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveUpAndDown();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIMMING);
    }, this.speedImgChange);
  }
}
