## Project Title

GBDA302 Week 3 Side Quest: The Mysterious File

---

## Authors

Fiona Luo

---

## Description

This p5.js project is an interactive branching story with a file virus theme. The player takes on the role of a computer user who encounters a suspicious file ("virus.exe") and must decide whether to "Accept" or "Reject" it.

The project demonstrates a state-based architecture with separate files for each screen ("start", "game", "win", "lose"). It features a global variable to track the player's "systemHealth" stat, which changes based on their decision. The visual style uses a retro terminal aesthetic, and the "Lose" screen includes a custom glitch effect to simulate a system crash.

---

## Learning Goals

- Practice separating code across multiple files for readability and maintenance
- Implement clickable and keyboard-accessible UI buttons
- Learn how to route draw(), mousePressed() and user-defined fucntion logic based on the active screen
- Created a global "systemHealth" variable to track player status across different scenes
- Learned "random()" to create a "glitch" animation for the bad ending, iterating beyong the basic static screen
- Build a basic instructions screen with a functional back button
- Implemented a decision tree where player choice leads to distinct "Win" or "Lose" states.
- Used a central router in main.js to manage multiple screen files.

---

## Assets

N/A

---

## GenAI

- I used GenAI to generate the initial Game States file structure
- I manually modified the AI's output by changing the variable from to fit my theme
- Renaming the ending files for consistency, and debugging the start button's interaction logic

---
