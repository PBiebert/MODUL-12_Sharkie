class MovableObject {
  x = 120; // Startposition auf der x-Achse
  y = 250; // Startposition auf der y-Achse
  img; // Variable für das Bild des Objekts
  width = 100;
  height = 150;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log(`rechts`); // Gibt "rechts" in der Konsole aus, wenn die Methode aufgerufen wird
  }

  moveLeft() {}
}
