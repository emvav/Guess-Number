let randomNumber = Math.floor(Math.random() * 20) + 1;

document.querySelector(".number_button").addEventListener("click", function() {
    const userInput = Number(document.querySelector('.input').value);
    console.log(userInput)
});



