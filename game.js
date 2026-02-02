// ------------------------------
// game.js - The Decision Screen
// ------------------------------

function drawGame() {
  background(50); // Dark Grey Desktop

  // ---- Popup Window Container ----
  rectMode(CENTER);
  
  // Shadow
  fill(0, 0, 0, 100);
  rect(width / 2 + 8, height / 2 + 8, 500, 350, 4);
  
  // Window Body
  fill(220); // Light grey window
  stroke(0);
  strokeWeight(2);
  rect(width / 2, height / 2, 500, 350, 4);

  // Window Title Bar (Blue)
  fill(0, 0, 150);
  rect(width / 2, height / 2 - 155, 500, 40, 4, 4, 0, 0);
  
  fill(255);
  noStroke();
  textSize(18);
  textAlign(CENTER, CENTER);
  text("SECURITY ALERT", width / 2, height / 2 - 155);

  // ---- Warning Message ----
  fill(0);
  textSize(28);
  text("Incoming Suspicious File", width / 2, height / 2 - 50);
  
  textSize(16);
  text("Do you want to accept this transfer?", width / 2, height / 2);

  // ---- Buttons ----
  
  // Button A: ACCEPT (Risky/Bad)
  const btnAccept = {
    x: width / 2 - 110,
    y: height / 2 + 100,
    w: 180,
    h: 50,
    label: "ACCEPT",
    color: color(255, 100, 100) // Reddish
  };

  // Button B: REJECT (Safe/Good)
  const btnReject = {
    x: width / 2 + 110,
    y: height / 2 + 100,
    w: 180,
    h: 50,
    label: "REJECT",
    color: color(100, 255, 100) // Greenish
  };

  drawGameButton(btnAccept);
  drawGameButton(btnReject);

  // Cursor handling
  if (isHover(btnAccept) || isHover(btnReject)) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

// ---- Input Handling ----
function gameMousePressed() {
  const btnAccept = { x: width / 2 - 110, y: height / 2 + 100, w: 180, h: 50 };
  const btnReject = { x: width / 2 + 110, y: height / 2 + 100, w: 180, h: 50 };

  // Logic: ACCEPT -> LOSE (Health 0)
  if (isHover(btnAccept)) {
    systemHealth = 0;
    currentScreen = "lose";
  }
  
  // Logic: REJECT -> WIN (Health 100)
  else if (isHover(btnReject)) {
    systemHealth = 100;
    currentScreen = "win";
  }
}

// ---- Helper ----
function drawGameButton({ x, y, w, h, label, color }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });
  
  stroke(0);
  strokeWeight(1);

  // Darken color slightly if not hovering
  if (hover) {
    fill(color);
  } else {
    // Create a slightly darker version manually or just use the color
    fill(red(color)-30, green(color)-30, blue(color)-30);
  }

  rect(x, y, w, h, 5);

  fill(0);
  noStroke();
  textSize(18);
  text(label, x, y);
}