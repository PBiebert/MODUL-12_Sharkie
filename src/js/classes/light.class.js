//src/img/3. Background/Layers/1. Light/1.png
class LightBeam extends MovableObject {
  y = 0;
  height = 480;
  width = 720;
  constructor() {
    super().loadImage("src/img/3. Background/Layers/1. Light/1.png");
    this.x = Math.random() * 500;
  }
}
