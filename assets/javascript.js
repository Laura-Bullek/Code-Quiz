 // Linked elements to the DOM
const homePageEl = document.getElementById("homePage");
const questionsPageEl = document.getElementById("questionsPage");
const gameOverPageEl = document.getElementById("gameOverPage");
const scoresPageEl = document.getElementById("scoresPage");

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