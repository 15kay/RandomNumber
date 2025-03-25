const diceLabel = document.getElementById("diceLabel");
const roll = document.getElementById("roll");

roll.onclick =  function() {
    let number = Math.floor(Math.random() * 6);
    diceLabel.textContent = number;
}