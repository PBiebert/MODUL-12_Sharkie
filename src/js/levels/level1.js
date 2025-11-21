let level = new Level([], [], [], 0);
let levelLength;

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

renderBackground(level, 5, backgroundImagesLevel);
setLevelLength();
renderEnemies(5, GreenFish);
renderEnemies(7, PinkFish);
renderEnemies(4, RedFish);
renderEnemies(3, JellyFishGreen);
renderEnemies(6, JellyFishLila);
renderEnemies(3, JellyFishPink);
renderEnemies(6, JellyFishYellow);
setEndboss();

function renderBackground(level, backgroundRepeats, backgroundImages) {
  let repeats = backgroundRepeats;
  let insertPosition = -100;

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
  levelLength = insertPosition;
}

function setLevelLength() {
  level.levelLength = levelLength;
}

function renderEnemies(sumEnemies, enemySpecies) {
  for (let i = 0; i < sumEnemies; i++) {
    level.enemies.push(new enemySpecies(levelLength));
  }
}

function setEndboss() {
  level.enemies.push(new Endboss(levelLength));
}
