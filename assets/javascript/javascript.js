
// WHEN I click the start button
// - What does the markup look like?
// - How is it styled?
// - Generate a click event that starts the game function
// THEN a timer starts and I am presented with a question
// - Timer will be 60 seconds long
// WHEN I answer a question
// - Another click listener
// THEN I am presented with another question
// - Hide the dprevious question, then show the next question
// WHEN I answer a question incorrectly
// - Check for true/false comparison to correct answer
// THEN time is subtracted from the clock
// - Subtract 15 seconds with an incorrect answer
// WHEN all questions are answered or the timer reaches 0
// - When timer reaches zero, OR all questions are answered
// THEN the game is over
// - Show the number of correct and incorrect answers
// - Show a button that will take user to another page to log high score
// WHEN the game is over
// THEN I can save my initials and my score
// - What does the markup look like?
// - How is it styled?
// - Generate a form for user initials that has the score already generated
// - Use local storage to store high score information

// Link elements to the DOM
var questions = document.getElementById("questions");
var showAnswer = document.getElementById("answer")
var start = document.getElementById("start");
var sbutton = document.getElementById("sbutton");
var quiz = document.getElementById("quiz");
var choices = document.getElementById("choices");
var scoreId = document.getElementById("score");
var timer = document.querySelector(".timer");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var savebtn = document.getElementById("savebtn");
var providedints = document.getElementById("providedints");

// Come up with multiple choice questions
// Questions are from: https://topessaywriter.org/multiple-choice-trivia-questions/

var questions = [
    {
        question: "1.) Which of the following ingredients is not normally used to brew beer?",
        choiceA : "Hops",
        choiceB : "Yeast",
        choiceC : "Malt",
        choiceD: "Vinegar",
        correct: "Vinegar",
    },
    {
        question: "2.) What is the most densely populated U.S. state?",
        choiceA : "Connecticut", 
        choiceB : "New Jersey",
        choiceC : "Rhode Island",
        choiceD: "Maryland",
        correct: "New Jersey",
    },
    {
        question: "3.) Albert Einstein was a scientist famous for his work on physics. Where was he born?",
        choiceA : "Germany",
        choiceB : "United States",
        choiceC : "France",
        choiceD: "Austria",
        correct: "Germany",
    },
    {
        question: "4.) How fast can an ostrich run?",
        choiceA : "15 mph",
        choiceB : "30 mph",      
        choiceC : "40 mph",
        choiceD: "45 mph",
        correct: "40 mph",
    },
    {
        question: "5.) Which state of the U.S. has recorded the fastest surface wind?",
        choiceA: "Illinios",
        choiceB: "New Hampshire",
        choiceC: "Montana",
        choiceD: "Alaska",
        correct: "New Hampshire",
    },
    {
        question: "How much of your vision do you lose if you go blind in one eye?",
        choiceA: "50%",
        choiceB: "10%",
        choiceC: "35%",
        choiceD: "20%",
        correct: "20%",
    },
    {
        question: "Which of the following means not equal to in Javascript",
        choiceA: "!=",
        choiceB: "<>",
        choiceC: "=!",
        choiceD: "not",
        correct: "!=",
    },
    {
        question: "What is the origin of the name “America”?",
        choiceA: "From Amerigo Vespucci, famous 15th century explorer",
        choiceB: "It was given as war compensation from Spain (“amerce”=fine)",
        choiceC: "Named by king Ferdinand II after his favourite stallion",
        choiceD: "From a spanish word meaning 'rich plains'",
        correct: "From Amerigo Vespucci, famous 15th century explorer",
    },
    {
        question: "Zulia is a province of which country?:",
        choiceA: "Colombia",
        choiceB: "Brazil",
        choiceC: "Venezuela ",
        choiceD: "Ecuador",
        correct: "Venezuela",
    },
]

// Initial variables
var count = 0;
var currentQuestion = 0;
var timer;
var startingTime = 50;
var ticker;
var score = 0;
var correct = questions.correct;

sbutton.addEventListener("click", startQuiz);
choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);
choiceD.addEventListener("click", checkAnswer);

function startQuiz() {
    ticker = setInterval(() => {
        startingTime--;
        timer.innerHTML = "Timer: " + startingTime;
        if (startingTime <= 0) {
            clearTimeout(ticker)
            endGame()
        }
    }, 1000);

    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}

function renderQuestion() {
    var q = questions[currentQuestion];
    question.innerHTML = "<p>" + q.question + "</p>"
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    showAnswer.innerHTML = "";
}

function checkAnswer(event) {
    var chosenAnswer = event.target.innerHTML;

    if (chosenAnswer === questions[currentQuestion].correct) {
        score++;
        showAnswer.innerHTML = "<span style='color:#008000'>CORRECT</span>";
        currentQuestion++;
        if (currentQuestion === questions.length) {
            endGame();
        } else {
            setTimeout(function () {
                renderQuestion();
            }, 500)
        }

    } else {
        showAnswer.innerHTML = "<span style='color:#ff0000'>WRONG</span>";
        currentQuestion++;
        startingTime = startingTime - 10;
        if (currentQuestion === questions.length) {
            endGame();
        } else {
            setTimeout(function () {
                renderQuestion();
            }, 500)
        }
    }
}

function endGame() {
    quiz.innerHTML = " Your Score: " + score + " of 10";
    scoreId.style.display = "block";
    clearTimeout(ticker)
}

savebtn.addEventListener("click", function (event) {
    event.preventDefault();
    var savelocal = providedints.value
    saveinitials(savelocal)
    storeinitials(savelocal)
});

function storeinitials(e) {
    localStorage.getItem("initals");
    quiz.innerHTML = e + " Score " + score;
    scoreId.style.display = "block";
}

function saveinitials(e) {
    localStorage.setItem("initials", e)
}

