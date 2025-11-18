"use strict";
/** @type {HTMLCanvasElement} */ // Typdefinition für das Canvas-Element

let canvas;
let world;

function init() {
  canvas = document.getElementById("canvas"); // Holt das Canvas-Element aus dem DOM
  world = new World(canvas);

  console.log("Mein Charakter ist:", world.enemies); // Gibt die Charakter-Instanz in der Konsole aus
}
