class World {
  character = new Character(); // Erstellt eine neue Instanz
  enemies = [new Fish(), new Fish(), new Fish()];
  lightBeams = [new LightBeam()];
  backgroundObjects = [
    new BackgroundObject("src/img/3. Background/Layers/5. Water/D1.png", 0),
    new BackgroundObject("src/img/3. Background/Layers/4.Fondo 2/D1.png", 0),
    new BackgroundObject("src/img/3. Background/Layers/3.Fondo 1/D1.png", 0),
    new BackgroundObject("src/img/3. Background/Layers/2. Floor/D1.png", 0),
  ];
  canvas;
  ctx;
  keyboard;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.setWorld();
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //Löscht das dargestellte Bild

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.lightBeams);
    this.addObjectsToMap(this.enemies);
    this.addToMap(this.character);

    let self = this; //rendert die maximale anzahl an Frames die die grafuickarte her gibt
    requestAnimationFrame(() => {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(object) {
    if (object.otherDirection) {
      this.ctx.save();
      this.ctx.translate(object.width, 0);
      this.ctx.scale(-1, 1);
      object.x = object.x * -1;
    }
    this.ctx.drawImage(
      object.img,
      object.x,
      object.y,
      object.width,
      object.height
    );
    if (object.otherDirection) {
      object.x = object.x * -1;
      this.ctx.restore();
    }
  }

  // übergibt die referenz zur world an alle MovableObjects damit auf keybord zugegriffen werden kann
  setWorld() {
    this.character.world = this;
  }
}
