class Level {
  enemies;
  lightBeams;
  backgroundObjects;
  levelLength; // Länge des Levels in px

  constructor(enemies, lightBeams, backgroundObjects, levelLength) {
    this.enemies = enemies;
    this.lightBeams = lightBeams;
    this.backgroundObjects = backgroundObjects;
    this.levelLength = levelLength;
  }
}
