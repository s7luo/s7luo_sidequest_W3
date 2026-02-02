// ------------------------------
// win.js - Good Ending (Reject)
// ------------------------------

function drawWin() {
  // Green background to indicate safety
  background(100, 220, 100);

  fill(255);
  stroke(0);
  strokeWeight(4);
  textAlign(CENTER, CENTER);

  // Big Icon
  textSize(80);
  text("🛡️", width / 2, 200);

  // Main Text
  noStroke();
  fill(0, 50, 0); // Dark Green Text
  textSize(40);
  text("Threat Blocked.", width / 2, 300);
  text("System Safe.", width / 2, 350);

  // Show System Health (Global Variable)
  textSize(30);
  fill(0);
  text("System Health: " + systemHealth + "%", width / 2, 450);

  // Restart Instruction
  textSize(18);
  fill(255);
  text("[ Click or Press R to Restart ]", width / 2, 550);
}

// ---- Input Handling ----
function winMousePressed() {
  currentScreen = "start";
}

function winKeyPressed() {
  if (key === 'r' || key === 'R') {
    currentScreen = "start";
  }
}