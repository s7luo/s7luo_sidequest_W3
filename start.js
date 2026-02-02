// ------------------------------
// start.js - Retro Terminal Style
// ------------------------------

function drawStart() {
  // 1. Background: Terminal Black
  background(0);

  // 2. Retro Grid Lines (Optional visual flair)
  stroke(0, 50, 0); // Faint green lines
  strokeWeight(1);
  for (let i = 0; i < height; i += 10) {
    line(0, i, width, i);
  }

  // 3. Title Text
  noStroke();
  fill(0, 255, 0); // Hacker Green
  textAlign(CENTER, CENTER);
  
  // Large Title
  textSize(50);
  text("> THE_FILE.EXE", width / 2, 200);
  
  // Subtitle with blinking cursor effect
  textSize(20);
  let cursorChar = (frameCount % 60 < 30) ? "_" : " ";
  text("v.1.0.4 Ready " + cursorChar, width / 2, 260);

  // 4. Draw Button
  // We define the button object here so we can pass it to the drawer
  const bootBtn = {
    x: width / 2,
    y: 420,
    w: 260,
    h: 60,
    label: "[ BOOT SYSTEM ]"
  };

  drawTerminalButton(bootBtn);

  // Change cursor to hand if hovering
  cursor(isHover(bootBtn) ? HAND : ARROW);
}

// ---- Input Handling ----
function startMousePressed() {
  // Define button same as in drawStart
  const bootBtn = { x: width / 2, y: 420, w: 260, h: 60 };
  
  if (isHover(bootBtn)) {
    currentScreen = "game";
  }
}

function startKeyPressed() {
  // Allow Enter key to start
  if (keyCode === ENTER) {
    currentScreen = "game";
  }
}

// ---- Helper Function to Draw Button ----
function drawTerminalButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  stroke(0, 255, 0);
  strokeWeight(2);
  
  if (hover) {
    // On hover: Filled Green box, Black text
    fill(0, 255, 0);
    rect(x, y, w, h);
    fill(0);
  } else {
    // Normal: Empty box, Green text
    noFill();
    rect(x, y, w, h);
    fill(0, 255, 0);
  }

  noStroke();
  textSize(24);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}