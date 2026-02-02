// ------------------------------
// GLOBAL VARIABLES
// ------------------------------
// These variables are available to ALL other files (start.js, game.js, etc.)

// 1. State Router Variable
let currentScreen = "start"; // Options: "start", "game", "win", "lose"

// 2. Gameplay Stat (The Side Quest Requirement)
// We track systemHealth across different screens.
let systemHealth = 100; 

// ------------------------------
// SETUP - Runs once
// ------------------------------
function setup() {
  createCanvas(800, 600); // 4:3 aspect ratio fits the "retro monitor" vibe
  textFont("Courier New"); // Monospaced font for that system/hacking look
}

// ------------------------------
// DRAW - Runs every frame
// ------------------------------
// The "Router": checks currentScreen and runs the correct function [cite: 63, 64]
function draw() {
  background(30); // Default dark background to prevent trails

  if (currentScreen === "start") {
    drawStart(); 
  } else if (currentScreen === "game") {
    drawGame();
  } else if (currentScreen === "win") {
    drawWin();
  } else if (currentScreen === "lose") {
    drawLose();
  }
}

// ------------------------------
// INPUTS - Mouse Clicks
// ------------------------------
// Routes clicks to the specific file handling the current screen [cite: 97]
function mousePressed() {
  if (currentScreen === "start") {
    startMousePressed();
  } else if (currentScreen === "game") {
    gameMousePressed();
  } else if (currentScreen === "win") {
    // Optional: Restart the game on click
    setup(); // Reset variables if needed
    currentScreen = "start";
  } else if (currentScreen === "lose") {
    setup(); 
    currentScreen = "start";
  }
}

// ------------------------------
// HELPER FUNCTION: isHover
// ------------------------------
// Checks if mouse is inside a button (centered rect)
// Useful for your "Accept" / "Reject" buttons later.
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 && 
    mouseX < x + w / 2 && 
    mouseY > y - h / 2 && 
    mouseY < y + h / 2 
  );
}