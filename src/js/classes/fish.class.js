class Fish extends MovableObject {
  width = 241 / 2; //Bildgröße durch 2
  height = 198 / 2; //Bildgröße durch 2
  constructor() {
    super().loadImage("src/img/2.Enemy/1.Puffer fish/1.Swim/1.swim1.png");
    this.x = 200 + Math.random() * 500; // Startposition auf der x-Achse
  }
}
