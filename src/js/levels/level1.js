let level1 = new Level(
  [new Fish(), new Fish(), new Fish()],
  [new LightBeam()],
  [],
  0
);

let backgroundImagesLevel = [
  "src/img/3. Background/Layers/5. Water/D1.png",
  "src/img/3. Background/Layers/4.Fondo 2/D1.png",
  "src/img/3. Background/Layers/3.Fondo 1/D1.png",
  "src/img/3. Background/Layers/2. Floor/D1.png",
  "src/img/3. Background/Layers/5. Water/D2.png",
  "src/img/3. Background/Layers/4.Fondo 2/D2.png",
  "src/img/3. Background/Layers/3.Fondo 1/D2.png",
  "src/img/3. Background/Layers/2. Floor/D2.png",
];

renderBackground(level1, 5, backgroundImagesLevel);

function renderBackground(level, backgroundRepeats, backgroundImages) {
  let repeats = backgroundRepeats;
  let insertPosition = 0;

  for (let i = 0; i < repeats; i++) {
    level.backgroundObjects.push(
      // 1.Teil vom Hintergrund
      new BackgroundObject(backgroundImages[0], insertPosition + 0),
      new BackgroundObject(backgroundImages[1], insertPosition + 0),
      new BackgroundObject(backgroundImages[2], insertPosition + 0),
      new BackgroundObject(backgroundImages[3], insertPosition + 0),

      // 2. teil vom Hintergrund
      new BackgroundObject(backgroundImages[4], insertPosition + 720),
      new BackgroundObject(backgroundImages[5], insertPosition + 720),
      new BackgroundObject(backgroundImages[6], insertPosition + 720),
      new BackgroundObject(backgroundImages[7], insertPosition + 720)
    );
    insertPosition += 1440;
  }
  level.levelLength = insertPosition;
}
