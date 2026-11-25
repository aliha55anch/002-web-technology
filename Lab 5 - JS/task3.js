
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(user, computer) {
    if (user === computer) {
        console.log("Draw");
        return "draw";
    } else if (user === "rock" && computer === "scissors") {
        console.log("User Won");
        return "user";
    } else if (user === "scissors" && computer === "paper") {
        console.log("User Won");
        return "user";
    } else if (user === "paper" && computer === "rock") {
        console.log("User Won");
        return "user";
    } else {
        console.log("Computer Won");
        return "computer";
    }
}

function playRound() {
    let user = prompt("Enter your choice");
    let computer = getComputerChoice();

    console.log("Computer:", computer);

    return determineWinner(user, computer);
}

function playMatch() {
    let user = 0;
    let computer = 0;

    while (user < 2 && computer < 2) {
        let winner = playRound();

        if (winner === "user") {
            user = user + 1;
        } else if (winner === "computer") {
            computer = computer + 1;
        }
    }

    console.log("Final User Score:", user);
    console.log("Final Computer Score:", computer);
}

playMatch();
