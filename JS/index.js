console.log("Hi")
const spellBook = ["AbraCadabra", "Wingardium Leviosa", "Hickory Dickory Dock"];
let manaPoints = 50;
console.log("Hi")
const castSpell = () => {
    if (manaPoints >= 5) {  // Ensure enough mana points
        console.log("Huzzah! A spell has been cast");

        // Choose a random spell from the array
        const randomIndex = Math.floor(Math.random() * spellBook.length);
        console.log("randomIndex:", randomIndex);

        const randomSpell = spellBook[randomIndex];
        console.log("randomSpell:", randomSpell);

        const spellElement = document.getElementById("spell");

        // Subtract points from total (5 points)
        manaPoints -= 5;
        console.log("manaPoints:", manaPoints);

        // Show new mana points on screen
        const manaElement = document.getElementById("mana-points");
        manaElement.textContent = manaPoints;
    } else {
        console.log("Not enough mana to cast a spell!");
    }
}