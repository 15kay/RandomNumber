# Dice Roller

## Overview
This is a simple JavaScript-based dice roller. When the user clicks the "Roll" button, a random number between 0 and 5 is displayed.

## Features
- Generates a random number between 0 and 5.
- Updates the dice label dynamically when the button is clicked.

## Technologies Used
- HTML
- CSS
- JavaScript

## Code Example
```javascript
const diceLabel = document.getElementById("diceLabel");
const roll = document.getElementById("roll");

roll.onclick = function() {
    let number = Math.floor(Math.random() * 6);
    diceLabel.textContent = number;
}
```

## How to Use
1. Open the HTML file in a web browser.
2. Click the **Roll** button.
3. A random number between 0 and 5 will appear.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project folder:
   ```bash
   cd dice-roller
   ```
3. Open `index.html` in your browser.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Author
Developed by Kgaugelo

