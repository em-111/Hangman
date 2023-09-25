let hangmanArray = [
    {
        q: "What is the capital of Kosova?",
        a: "Prishtina",
    },
    {
        q: "What is the capital of Albania?",
        a: "Tirana",
    },
    {
        q: "In which country was the game of football first played?",
        a: "England",
    },
    {
        q: "What is the largest ocean on Earth?",
        a: "Pacific",
    },
    {
        q: "Sport involving punches, jabs, and knockouts?",
        a: "Boxing",
    },
    {
        q: 'Which planet in our solar system is often called the "Morning Star", or "Evening Star" and is known for its brightness?',
        a: "Venus",
    },
    {
        q: "Who wrote 'The Iliad and Odyssey'?",
        a: "Homer",
    },
    {
        q: "What is the largest desert in the world, known for its vast sand dunes?",
        a: "Sahara",
    },
    {
        q: "Which famous scientist developed the theory of relativity?",
        a: "Einstein",
    },
    {
        q: "How are new Bitcoins created?",
        a: "Mining",
    },
    {
        q: "What is the first cryptocurrency?",
        a: "Bitcoin",
    },
    {
        q: "Code language used for creating web pages?",
        a: "HTML",
    },
    {
        q: "Which gas makes up about 78% of Earth's atmosphere?",
        a: "Nitrogen",
    },
    {
        q: "Water sport where participants ride on a board and catch waves?",
        a: "Surfing",
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
        q: "Which country is famous for the ancient city of Machu Picchu?",
        a: "Peru",
    },
    {
        q: "What is the tallest mountain in the world?",
        a: "Everest",
    },
    {
        q: "Which planet is known as the Red Planet?",
        a: "Mars",
    },
    {
        q: "Individual sport involving a bicycle and races against the clock?",
        a: "Cycling",
    },
    {
        q: "What is the largest mammal in the world?",
        a: "Whale",
    },
    {
        q: "What is the study of the Earth's history as revealed in rock layers?",
        a: "Geology",
    },
    {
        q: 'Who wrote the play "Romeo and Juliet"?',
        a: "Shakespeare",
    },
    {
        q: "What is the smallest planet in our solar system?",
        a: "Mercury",
    },
    {
        q: "Where is the Great Pyramid of Giza located, one of the Seven Wonders of the Ancient World?",
        a: "Egypt",
    },
    {
        q: "Which element, with the symbol 'Au,' is often used in making jewelry?",
        a: "Gold",
    },
    {
        q: 'Which element, with the symbol "Na," is essential for nerve function in the human body?',
        a: "Sodium",
    },
    {
        q: "What is the largest organ in the human body?",
        a: "Skin",
    },
    {
        q: "What is the smallest unit of matter?",
        a: "Atom",
    },
    {
        q: "What gas do plants absorb from the atmosphere during photosynthesis?",
        a: "Carbon",
    },
    {
        q: "What is the process by which plants make their own food using sunlight?",
        a: "Photosynthesis",
    },
    {
        q: "What is the study of the Earth's atmosphere called?",
        a: "Meteorology",
    },
    {
        q: "What force keeps planets in orbit around the sun?",
        a: "Gravity",
    },
    {
        q: "What is the study of the behavior and properties of matter?",
        a: "Chemistry",
    },
    {
        q: "What is the process by which a caterpillar becomes a butterfly?",
        a: "Metamorphosis",
    },
    {
        q: "What is the powerhouse of the cell?",
        a: "Mitochondria",
    },
    {
        q: "What is the largest internal organ in the human body?",
        a: "Liver",
    },
    {
        q: "What is the body's primary organ for hearing?",
        a: "Ear",
    },
    {
        q: "What is the molecule that carries genetic information?",
        a: "DNA",
    },
    {
        q: "What is the longest river in Africa?",
        a: "Nile",
    },
    {
        q: "What is the capital of Brazil?",
        a: "Brasilia",
    },
    {
        q: "What country is known as the Land of the Rising Sun?",
        a: "Japan",
    },
    {
        q: "What is the smallest continent by land area?",
        a: "Australia",
    },
    {
        q: "What is the term for the total value of all goods and services produced within a country in a given year?",
        a: "GDP",
    },
    {
        q: "What economic term describes a period of declining economic activity when businesses and unemployment rates rise?",
        a: "Recession",
    },
    {
        q: "What term describes a sustained increase in the general price level of goods and services in an economy?",
        a: "Inflation",
    },
    {
        q: "Which economic system is characterized by government ownership of key industries and central planning of economic activities?",
        a: "Socialism",
    },
    {
        q: "What is the term for a massive, gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter?",
        a: "Galaxy",
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
let seconds = 300;
let guesses = 5;
let score = 0;
let attempts = 0;
let children;
let newArr;
let answeredQuestions = 0;
let skipQuestions = 0;

/* BUTTON TO START THE GAME */
startGame.addEventListener("click", () => {
    seconds = 300;
    guesses = 5;
    attempts = 0;
    score = 0;
    answeredQuestions = 0;
    skipQuestions = 0;
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
    skipQuestions++;
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
                answeredQuestions++;

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

    if (newArr.length === 0 && skipQuestions === 0) {
        gameResult.innerHTML = `<h3 style="margin-bottom: 20px;">Congratulations! You've found all the words. You're a Hangman master!</h3>
        <p>Your Score : ${score}</p>
        <p>Total Attempts : ${attempts}</p>
        <p>Words Guessed : ${answeredQuestions}</p>
        <p>Words Skipped : ${skipQuestions}</p>`;
    }

    if (answeredQuestions === 0) {
        gameResult.innerHTML = `<h3 style="margin-bottom: 20px;">Oops! It seems you didn't guess any words this time. Give it another try!</h3>
        <p>Your Score : ${score}</p>
        <p>Total Attempts : ${attempts}</p>
        <p>Words Guessed : ${answeredQuestions}</p>
        <p>Words Skipped : ${skipQuestions}</p>`;
    }

    if (newArr.length === 0 && skipQuestions > 0) {
        gameResult.innerHTML = `<h3 style="margin-bottom: 20px;">You've found some words, but there are still more to discover!</h3>
        <p>Your Score : ${score}</p>
        <p>Total Attempts : ${attempts}</p>
        <p>Words Guessed : ${answeredQuestions}</p>
        <p>Words Skipped : ${skipQuestions}</p>`;
    }

    if (guesses === 0) {
        gameResult.innerHTML = `<h3 style="margin-bottom: 20px;">Oops! You made too many mistakes. Better luck next time!</h3>
        <p>Your Score : ${score}</p>
        <p>Total Attempts : ${attempts}</p>
        <p>Words Guessed : ${answeredQuestions}</p>
        <p>Words Skipped : ${skipQuestions}</p>`;
    }

    if (seconds === 0) {
        gameResult.innerHTML = `<h3 style="margin-bottom: 20px;">Time's up! Game over. You can try again to beat the clock!</h3>
        <p>Your Score : ${score}</p>
        <p>Total Attempts : ${attempts}</p>
        <p>Words Guessed : ${answeredQuestions}</p>
        <p>Words Skipped : ${skipQuestions}</p>`;
    }
}
