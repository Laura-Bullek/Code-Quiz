 // Linked elements to the DOM
// const homePageEl = document.getElementById("homePage");
// const questionsPageEl = document.getElementById("questionsPage");
// const gameOverPageEl = document.getElementById("gameOverPage");
// const scoresPageEl = document.getElementById("scoresPage");

// The object with questions, choices, and the answer
// These trivia questions are from: https://topessaywriter.org/multiple-choice-trivia-questions/
 const quizQuestions = [
    {question : "1.) Which of the following ingredients is not normally used to brew beer?",
    choiceA : "Hops",
    choiceB : "Yeast",
    choiceC : "Malt",
    choiceD: "Vinegar",
    correctAnswer : "d"},
    
    {question : "2.) What is the most densely populated U.S. state?", 
    choiceA : "Connecticut", 
    choiceB : "New Jersey",
    choiceC : "Rhode Island",
    choiceD: "Maryland",
    correctAnswer : "b"},
  
    {question : "3.) Albert Einstein was a scientist famous for his work on physics. Where was he born?",
    choiceA : "Germany",
    choiceB : "United States",
    choiceC : "France",
    choiceD: "Austria",
    correctAnswer : "a"},
  
    {question : "4.) How fast can an ostrich run?", 
    choiceA : "15 mph",
    choiceB : "30 mph",      
    choiceC : "40 mph",
    choiceD: "45 mph",
    correctAnswer: "c"},
  ];

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
