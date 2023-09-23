let hangmanArray = [
    {
        q: "What is the largest desert in the world, known for its vast sand dunes?",
        a: "Sahara",
    },
    {
        q: "Which gas makes up about 78% of Earth's atmosphere?",
        a: "Nitrogen",
    },
    {
        q: 'Which element, with the symbol "Na," is essential for nerve function in the human body?',
        a: "Sodium",
    },
    {
        q: 'Who wrote the play "Romeo and Juliet"?',
        a: "Shakespeare",
    },
    {
        q: "Which famous scientist developed the theory of relativity?",
        a: "Einstein",
    },
    {
        q: "Which planet is known as the Red Planet?",
        a: "Mars",
    },
    {
        q: 'Which planet in our solar system is often called the "Morning Star", or "Evening Star" and is known for its brightness?',
        a: "Venus",
    },
    {
        q: 'Which element, with the symbol "Au," is often used in making jewelry?',
        a: "Gold",
    },
    {
        q: "What is the smallest planet in our solar system?",
        a: "Mercury",
    },
    {
        q: "What is the study of the Earth's history as revealed in rock layers?",
        a: "Geology",
    },
    {
        q: "What is the largest desert in the world, known for its vast sand dunes?",
        a: "Sahara",
    },
    {
        q: "What is the largest mammal in the world?",
        a: "Whale",
    },
    {
        q: "What is the largest ocean on Earth?",
        a: "Pacific",
    },
    {
        q: "What is the tallest mountain in the world?",
        a: "Everest",
    },
    {
        q: "What is the capital of Kosova?",
        a: "Prishtina",
    },
    {
        q: "What is the capital of Albania?",
        a: "Tirana",
    },
    {
        q: "What is the largest organ in the human body?",
        a: "Skin",
    },
    {
        q: "Who wrote 'The Iliad and Odyssey'?",
        a: "Homer",
    },
    {
        q: "Where is the Great Pyramid of Giza located, one of the Seven Wonders of the Ancient World?",
        a: "Egypt",
    },
    {
        q: "In which country was the game of football first played?",
        a: "England",
    },
    {
        q: "Which country is famous for the ancient city of Machu Picchu?",
        a: "Peru",
    },
    {
        q: "Inventor of the telephone?",
        a: "Bell",
    },
    {
        q: "Unit of electrical resistance?",
        a: "Ohm",
    },
    {
        q: "Code language used for creating web pages?",
        a: "HTML",
    },
    {
        q: "Protocol for secure data transmission over the internet?",
        a: "HTTPS",
    },
    {
        q: "Device used to connect to the internet via a telephone line?",
        a: "Modem",
    },
    {
        q: "Open-source operating system known for its penguin mascot?",
        a: "Linux",
    },
    {
        q: "Digital currency based on blockchain technology?",
        a: "Cryptocurrency",
    },
    {
        q: "Portable computer input device used for pointing and clicking?",
        a: "Mouse",
    },
    {
        q: "Sport involving punches, jabs, and knockouts?",
        a: "Boxing",
    },
    {
        q: "Team sport with a round ball and goals, played on a pitch?",
        a: "Football",
    },
    {
        q: "Water sport where participants ride on a board and catch waves?",
        a: "Surfing",
    },
    {
        q: "Individual sport involving a bicycle and races against the clock?",
        a: "Cycling",
    },
];

let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

let question = document.querySelector("#question");
let answer = document.querySelector("#answer");
let buttonGrid = document.querySelector("#buttonGrid");
let time = document.querySelector("#time");
let incorrectGuess = document.querySelector("#incorrectGuess");
let gameResult = document.querySelector("#gameResult");
let startGame = document.querySelector("#startGame");
let nextQuestion = document.querySelector("#nextQuestion");
let countdown;
let seconds = 200;
let guesses = 5;
let score = 0;
let attempts = 0;
let children;
let newArr;

/* BUTTON TO START THE GAME */
startGame.addEventListener("click", () => {
    seconds = 200;
    guesses = 5;
    attempts = 0;
    score = 0;
    gameResult.innerHTML = "";

    newArr = [...hangmanArray];

    startGame.style.display = "none";
    nextQuestion.style.display = "block";

    countdown = setInterval(() => {
        seconds--;
        time.textContent = seconds;

        if (seconds === 0) {
            endgame();
        }
    }, 1000);

    clearGrid();

    printQuestion();
});

/* BUTTON TO DISPLAY NEXT QUESTION */
nextQuestion.addEventListener("click", () => {
    clearGrid();
    printQuestion();
});

/* PRINT BUTTONS */
(function () {
    alphabet.forEach((a) => {
        let button = document.createElement("button");
        button.textContent = a;
        button.classList.add("buttons");
        button.disabled = true;
        buttonGrid.appendChild(button);
    });
})();

/* CLEAR GRID */
function clearGrid() {
    for (let i = 0; i < buttonGrid.children.length; i++) {
        buttonGrid.children[i].disabled = false;
        buttonGrid.children[i].classList.remove("correct");
        buttonGrid.children[i].classList.remove("incorrect");
    }
}

/* DISPLAY QUESTIONS AND ANSWERS */
let spanArray = [];
let spanLetter = [];
let l = 0;

function printQuestion() {
    answer.innerHTML = "";

    let randomIndex = Math.floor(Math.random() * newArr.length);
    spanArray = [];
    spanLetter = [];

    if (newArr.length > 0) {
        question.textContent = newArr[randomIndex].q;
        newArr[randomIndex].a
            .toUpperCase()
            .split("")
            .forEach((value) => {
                let p = document.createElement("p");

                let span = document.createElement("span");
                span.textContent = value;
                span.classList.add("hide");
                spanArray.push(span);
                spanLetter.push(value);

                p.appendChild(span);
                answer.appendChild(p);
            });

        l = spanArray.length;

        newArr.splice(randomIndex, 1);
    } else {
        endgame();
    }
}

/* CHECK SPAN */
function checkSpan(event) {
    const target = event.target;

    if (!target.classList.contains("not-this")) {
        // CORRECT
        if (spanLetter.includes(target.textContent)) {
            target.classList.add("correct");
            target.disabled = true;

            spanArray.forEach((value) => {
                if (value.textContent === target.textContent) {
                    value.classList.remove("hide");
                    score += 10;
                    l--;
                    attempts += 1;
                }
            });

            if (l === 0) {
                spanArray.forEach((value) => {
                    value.classList.add("correct");
                });

                setTimeout(() => {
                    clearGrid();
                    printQuestion();
                }, 500);
            }
        }
        // INCORRECT
        else {
            target.classList.add("incorrect");
            target.disabled = true;
            guesses--;
            incorrectGuess.textContent = guesses;
            score -= 10;
            attempts += 1;

            if (guesses === 0) {
                endgame();
            }
        }
    }
}

/* ADD EVENT LISTENER TO BUTTONS */
buttonGrid.addEventListener("click", checkSpan);

/* GAME END */
function endgame() {
    startGame.style.display = "block";
    nextQuestion.style.display = "none";
    startGame.textContent = "Start Again";

    clearInterval(countdown);

    for (let i = 0; i < buttonGrid.children.length; i++) {
        buttonGrid.children[i].disabled = true;
    }

    if (newArr.length === 0) {
        gameResult.innerHTML = `<h3>Congratulations! You found all the answers. Great job!</h3>
        <p>Your Score : ${score}</p>
        <p>Total attempts : ${attempts}</p>`;
    }

    if (guesses === 0) {
        gameResult.innerHTML = `<h3>Oops! You made too many mistakes. Better luck next time!</h3>
        <p>Your Score : ${score}</p>
        <p>Total attempts : ${attempts}</p>`;
    }

    if (seconds === 0) {
        gameResult.innerHTML = `<h3>Time's up! Game over. You can try again to beat the clock!</h3>
        <p>Your Score : ${score}</p>
        <p>Total attempts : ${attempts}</p>`;
    }
}
