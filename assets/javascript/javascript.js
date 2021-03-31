
//************* Pseudocode ******************/
// WHEN I click the start button
// - What does the markup look like?
// - How is it styled?
// - Generate a click event that starts the game function
// THEN a timer starts and I am presented with a question
// - Timer will be 60 seconds long
// WHEN I answer a question
// - Another click listener
// THEN I am presented with another question
// - Hide the previous question, then show the next question
// WHEN I answer a question incorrectly
// - Check for true/false comparison to correct answer
// THEN time is subtracted from the clock
// - Subtract 10 seconds with an incorrect answer
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
var showAnswer = document.getElementById("answer");
var start = document.getElementById("start");
var sbutton = document.getElementById("sbutton");
var quiz = document.getElementById("quiz");
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
    question: "Which of the following ingredients is not normally used to brew beer?",
    choiceA : "Hops",
    choiceB : "Yeast",
    choiceC : "Malt",
    choiceD: "Vinegar",
    correct: "Vinegar",
},
{
    question: "What is the most densely populated U.S. state?",
    choiceA : "Connecticut", 
    choiceB : "New Jersey",
    choiceC : "Rhode Island",
    choiceD: "Maryland",
    correct: "New Jersey",
},
{
    question: "Albert Einstein was a scientist famous for his work on physics. Where was he born?",
    choiceA : "Germany",
    choiceB : "United States",
    choiceC : "France",
    choiceD: "Austria",
    correct: "Germany",
},
{
    question: "How fast can an ostrich run?",
    choiceA : "15 mph",
    choiceB : "30 mph",      
    choiceC : "40 mph",
    choiceD: "45 mph",
    correct: "40 mph",
},
{
    question: "Which state of the U.S. has recorded the fastest surface wind?",
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

// Initialize variables
var count = 0;
var currentQuestion = 0;
var timer;
var startingTime = 50;
var ticker;
var score = 0;
var correct = questions.correct;

// Event listeners for start button
sbutton.addEventListener("click", startQuiz);

// Initializing the quiz
function startQuiz() {
    ticker = setInterval(() => {
        startingTime--;
        timer.innerHTML = "Timer: " + startingTime;
        // Ends the game when timer gets to zero
        if (startingTime <= 0) {
            clearTimeout(ticker)
            endGame()
        }
    }, 1000);

    // Hide start page when next function is called
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

// Event listeners for answer clicks
choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);
choiceD.addEventListener("click", checkAnswer);

function checkAnswer(event) {
    var chosenAnswer = this.innerHTML;

    // When a correct answer is chosen, a <p> tag shows "CORRECT"
    if (chosenAnswer === questions[currentQuestion].correct) {
        // Add one to the score
        score++;
        showAnswer.innerHTML = "<span style='color:#008000'>CORRECT</span>";
        // Go to the next question
        currentQuestion++;
        // When there are no more questions, end the game
        if (currentQuestion === questions.length) {
            endGame();
        } else {
            setTimeout(function () {
                renderQuestion();
            }, 500)
        }

    } else {
        // When a wrong answer is chosen, a <p> tag shows "WRONG"
        showAnswer.innerHTML = "<span style='color:#ff0000'>WRONG</span>";
        currentQuestion++;
        // Lose ten seconds when a wrong answer is clicked
        startingTime = startingTime - 10;
        // When there are no more questions, end the game
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
    quiz.innerHTML = " Your Score: " + score + " out of 10";
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

