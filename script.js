let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber)
let scoreNumber = 20;
let highscore = 0;

document.querySelector(".number_button").addEventListener("click", mainOperation);
document.querySelector(".reset_button").addEventListener("click", resetOperation);

function mainOperation() {
    const userInput = Number(document.querySelector('.input').value);
    if(userInput == randomNumber) {
        document.querySelector(".messege").textContent = "🎉 Correct Number!";
        document.querySelector(".random_number").textContent = randomNumber;
        document.querySelector("body").style.backgroundColor = "green";
        if (scoreNumber > highscore) {
            highscore = scoreNumber;
            document.querySelector(".highscore").textContent = `🥇 Highscore: ${highscore}`;
        }
    }
    else if(userInput > randomNumber) {
        document.querySelector(".messege").textContent = "📈 Too high!";
        scoreNumber -= 1;
        document.querySelector(".score").textContent = `💯 Score: ${scoreNumber}`;
    } else {
        document.querySelector(".messege").textContent = "📉 Too low!";
        scoreNumber -= 1;
        document.querySelector(".score").textContent = `💯 Score: ${scoreNumber}`;
    }
};

function resetOperation() {
    document.querySelector(".random_number").textContent = "?";
    document.querySelector(".messege").textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector('.input').value = "";
    document.querySelector(".score").textContent = "💯 Score: 20";
    randomNumber = Math.floor(Math.random() * 20) + 1;
}