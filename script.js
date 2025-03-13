const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber)
let scoreNumber = 20;
let highscore = 0;

document.querySelector(".number_button").addEventListener("click", mainOperation);

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



