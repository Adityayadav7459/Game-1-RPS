// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");

// const genCompChoice = () => {
//     const options = ["rock", "paper", "scissors"]; //Array of choices
//     //Rock,Ppar, Scissors
//    const randIdx = Math.floor(Math.random() * 3); //Generate Random Index
//    return options[randIdx] //Get Random Choice from Array
// }

// // const showWinner = (userWin) => {
// //     if (userWin0) {
// //         console.log("You win!");
// //      } else {
// //         console.log("Computer wins!");
// //     }

// const playGame = (userChoice) => {
//     console.log("user choice is", userChoice);
//     //Generate Computer Choice -> This is called modular Way of Programming Means Harr Kaam Alag Functionme divide krna 
//     const compChoice = genCompChoice();
//     console.log("computer choice is", compChoice);

// //     if(userChoice === compChoice) {
// //         console.log("It's a tie!");
// //     } else{
// //         let userWin= true;
// //         if(userChoice === "rock") {
// //             //scissors, paper
// //             userWin = compChoice === "paper" ? false : true;
// //         } else if(userChoice === "paper") {
// //             //rock, scissors
// //             userWin = compChoice === "scissors" ? false : true;
// //         } else {
// //             //paper, rock
// //             userWin = compChoice === "rock" ? false : true;
// //         }
// //         showWinner(userWin);
// //     }
// // };

// choices.forEach((choice) => {
//     // console.log(choice);
//     choice.addEventListener("click", () => {
//         const userChoice = choice.getAttribute("id");
//         playGame(userChoice);
//     });
// });
// };



// upar ka code bhi padh lena modular explain kiye hai !!!!!


let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; //Array of choices
    //Rock, Paper, Scissors
    const randIdx = Math.floor(Math.random() * 3); //Generate Random Index
    return options[randIdx]; //Get Random Choice from Array
};

const drawGame = () => {
    console.log("It's a tie!");
    msg.innerText = "It's a tie! Please try again.";
    msg.style.background = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Computer wins!");
        msg.innerText = `Computer wins! ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice is", userChoice);
    //Generate Computer Choice -> This is called modular Way of Programming Means Harr Kaam Alag Functionme divide krna 
    const compChoice = genCompChoice();
    console.log("computer choice is", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
    