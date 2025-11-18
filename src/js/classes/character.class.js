class Character extends MovableObject {
  height = 1000 / 4; //Bildgröße durch 4
  width = 815 / 4; //Bildgröße durch 4
  constructor() {
    super().loadImage("src/img/1.Sharkie/1.IDLE/1.png");
  }

  jump() {}
}
