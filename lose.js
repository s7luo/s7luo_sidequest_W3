// ------------------------------
// lose.js - Bad Ending (Accept)
// ------------------------------

function drawLose() {
  // Red background for danger
  background(200, 50, 50);

  fill(255);
  textAlign(CENTER, CENTER);

  // Big Icon
  textSize(80);
  text("☠️", width / 2, 200);

  // Main Text
  textSize(38);
  text("CRITICAL ERROR", width / 2, 300);
  
  textStyle(NORMAL);
  textSize(32);
  text("SYSTEM COMPROMISED", width / 2, 350);

  // Show System Health (Global Variable)
  // This should display "0%" based on game.js logic
  textSize(30);
  fill(0); 
  text("System Health: " + systemHealth + "%", width / 2, 450);

  // Restart Instruction
  textSize(18);
  fill(255);
  text("[ Click to Restart ]", width / 2, 550);
}

// ---- Input Handling ----
function loseMousePressed() {
  // Reset health (optional, but good practice for restart)
  systemHealth = 100; 
  currentScreen = "start";
}

