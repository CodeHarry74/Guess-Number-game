function name() {
    let inputBtn = document.querySelector("input")
    let submitBtn = document.querySelector(".submit-btn")
    let startBtn = document.querySelector(".start-btn")
    let forms = document.querySelector("form")
    let result = document.querySelector(".result")
    let allGuesses = document.querySelector(".all-guesses")
    let allGuessesArray = []

    let randomNumber = Math.round(Math.random() * 100)
    startBtn.disabled = true;
    forms.addEventListener("submit", (e) => {
        e.preventDefault()
        let inputValue = parseInt(inputBtn.value)
        if (inputValue > randomNumber) {
            result.innerText = "too high!"

        }
        else if (inputValue < randomNumber) {
            result.innerText = "too low!"

        }
        else {
            console.log("congrats");
            result.innerText = "You got it Congrats!"
            submitBtn.disabled = true;
            startBtn.disabled = false;
        }
        allGuessesArray.push(inputValue)
        allGuesses.innerText = "Your guesses:" + allGuessesArray.join(",")
        forms.reset();

        startBtn.addEventListener("click", () => {
            result.innerText = " "
            allGuesses.innerText = " "
            submitBtn.disabled = false;
            startBtn.disabled = true;
            randomNumber = Math.round(Math.random() * 100)
        })
    })
}
name()
