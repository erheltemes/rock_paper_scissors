var score = {
    wins: 0,
    losses: 0,
    ties: 0,
}

function askInput() {
    var choice = window.prompt("R, P, or S to play");
    choice = choice.toUpperCase();
    if (choice === "R" || choice === "P" || choice === "S") {
        return choice;
    }
    else {
        window.alert("Please choose R, P, or S")
        return askInput()
    }
}

function askComputer() {
    var choices = ["R", "P", "S"]
    var randNum = Math.floor(Math.random() * Math.floor(3));
    return choices[randNum];

}

function findWinner(user, computer) {
    if (user == "R") {
        if (computer == "R") {
            window.alert("Computer chose R, you tie!")
            return "ties"}
        else if (computer == "P") {
            window.alert("Computer chose P, you lose!")
            return "losses"}
        else if (computer == "S") {
            window.alert("Computer chose S, you win!")
            return "wins"}
    }
    if (user == "P") {
        if (computer == "R") {
            window.alert("Computer chose R, you win!")
            return "wins"}
        else if (computer == "P") {
            window.alert("Computer chose P, you tie!")
            return "ties"}
        else if (computer == "S") {
            window.alert("Computer chose S, you lose!")
            return "losses"}
    }
    if (user == "S") {
        if (computer == "R") {
            window.alert("Computer chose R, you lose!")
            return "losses"}
        else if (computer == "P") {
            window.alert("Computer chose P, you win!")
            return "wins"}
        else if (computer == "S") {
            window.alert("Computer chose S, you tie!")
            return "ties"}
    }
    return
}

function startGame() {
    var userInput = askInput();
    var computerInput = askComputer();
    var result = findWinner(userInput, computerInput)

    score[result] += 1;

    console.log(score)
    
    var keepPlaying = window.confirm("Wins: " + score.wins + "\nLosses: " + score.losses + "\nTies: " + score.ties + "\n\nWould you like to play again?")
 
    if (keepPlaying) {
        startGame();
    }
}

startGame()
