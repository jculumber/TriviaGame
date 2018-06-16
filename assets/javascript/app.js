// GLOBAL VARIABLES (accessible by all functions)
// ==========================================================================================

var number = 60;            // Set our timer to 60.
var intervalId;             // Variable that will hold our interval ID
var correct = 0;            // Questions answered correctly
var incorrect = 0;          // Questions answered incorrectly
var unanswered = 0;         // Questions not answered
var playerAnswer = [];      // Array of answers chosen by player
var correctAnswer = [       // Array of correct answers to the question
    "option3",              //Question 1 answer
    "option1",              //Question 2 answer
    "option4",              //Question 3 answer
    "option2",              //Question 4 answer
    "option3",              //Question 5 answer
    "option1",              //Question 6 answer
    "option1",              //Question 7 answer
    "option4",              //Question 8 answer
    "option2",              //Question 9 answer
];

// Function constructor that will build the questions and answers
function Question(question, option1, option2, option3, option4) {
    this.question = question
    this.option1 = option1
    this.option2 = option2
    this.option3 = option3
    this.option4 = option4
};

// Question #1
var question1 = new Question("How many times have the Cubs been World Series Champions?", "1", "2", "3", "They've never won.");
$("#questionOne").text(question1.question);
$("#1-1").text(question1.option1);
$("#1-2").text(question1.option2);
$("#1-3").text(question1.option3);
$("#1-4").text(question1.option4);
console.log(question1);

// Question #2
var question2 = new Question("What is the name of the fictional company run by Cubs players Anthony Rizzo and Kris Bryant?", "Bryzzo Souvenir Co.", "Cubs Homerun Balls Co.", "Rizzant's Homerun Balls Co.", "Ballpark Escapees Co.");
$("#questionTwo").text(question2.question);
$("#2-1").text(question2.option1);
$("#2-2").text(question2.option2);
$("#2-3").text(question2.option3);
$("#2-4").text(question2.option4);
console.log(question2);

// Question #3
var question3 = new Question("What is the name of the ballpark the Cubs call home?", "Guaranteed Rate Field", "Fenway Park", "Great American Ball Park", "Wrigley Field");
$("#questionThree").text(question3.question);
$("#3-1").text(question3.option1);
$("#3-2").text(question3.option2);
$("#3-3").text(question3.option3);
$("#3-4").text(question3.option4);
console.log(question3);

// Question #4
var question4 = new Question("Which animal was not allowed entrance to Wrigley Field, resulting in a team curse?", "dog", "goat", "parrot", "rabbit");
$("#questionFour").text(question4.question);
$("#4-1").text(question4.option1);
$("#4-2").text(question4.option2);
$("#4-3").text(question4.option3);
$("#4-4").text(question4.option4);
console.log(question4);

// Question #5
var question5 = new Question("Whenever the Cubs win a game, what is on the flag that is flown?", "Go Cubs Go", "C", "W", "Win");
$("#questionFive").text(question5.question);
$("#5-1").text(question5.option1);
$("#5-2").text(question5.option2);
$("#5-3").text(question5.option3);
$("#5-4").text(question5.option4);
console.log(question5);

// Question #6
var question6 = new Question("Before winning in 2016, how many years had it been since the Cubs won a World Series?", "108", "69", "96", "100");
$("#questionSix").text(question6.question);
$("#6-1").text(question6.option1);
$("#6-2").text(question6.option2);
$("#6-3").text(question6.option3);
$("#6-4").text(question6.option4);
console.log(question6);

// Question #7
var question7 = new Question("Who did the Cubs beat in game 7 of the 2016 World Series?", "Cleveland Indians", "Chicago White Sox", "St. Louis Cardinals", "Milwaukee Brewers");
$("#questionSeven").text(question7.question);
$("#7-1").text(question7.option1);
$("#7-2").text(question7.option2);
$("#7-3").text(question7.option3);
$("#7-4").text(question7.option4);
console.log(question7);

// Question #8
var question8 = new Question("What is a fan expected to do if he or she catches an opponent's homerun ball?", "Keep it to sell on eBay", "Give it to a fan of the opponents", "Throw it away", "Throw it back");
$("#questionEight").text(question8.question);
$("#8-1").text(question8.option1);
$("#8-2").text(question8.option2);
$("#8-3").text(question8.option3);
$("#8-4").text(question8.option4);
console.log(question8);

// Question #9
var question9 = new Question("In what years did the Cubs win back-to-back World Series titles?", "1904-1905", "1907-1908", "1944-1945", "1885-1886");
$("#questionNine").text(question9.question);
$("#9-1").text(question9.option1);
$("#9-2").text(question9.option2);
$("#9-3").text(question9.option3);
$("#9-4").text(question9.option4);
console.log(question9);


// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// =========================================================================================
// (Note: It's not being run here. It's just being made for future use.)

// Functions to hide/show elements
var hideSection = function(element) {
    $(element).hide();
};
var showSection = function(element) {
    $(element).show();
};

// FUNCTIONS FOR THE GAME QUESTIONS AND ANSWERS
//==========================================================================================

// Define playerAnswer and correctAnswer variables
var checkAnswers = function() {
    playerAnswer[0] = $("input[name='question1']:checked").val();
    playerAnswer[1] = $("input[name='question2']:checked").val();
    playerAnswer[2] = $("input[name='question3']:checked").val();
    playerAnswer[3] = $("input[name='question4']:checked").val();
    playerAnswer[4] = $("input[name='question5']:checked").val();
    playerAnswer[5] = $("input[name='question6']:checked").val();
    playerAnswer[6] = $("input[name='question7']:checked").val();
    playerAnswer[7] = $("input[name='question8']:checked").val();
    playerAnswer[8] = $("input[name='question9']:checked").val();
};
$("input").on("click", checkAnswers)

// Function that runs when player clicks on answers
function playerChoice() {
    clearInterval(intervalId);
    hideSection(".part1");
    hideSection(".part2");
    showSection(".part3");
    correct = 0;
    incorrect = 0;
    unanswered = 0;

    for (i = 0; i < playerAnswer.length; i++) {
        if (playerAnswer[i] == correctAnswer[i]) {
            correct++;          
        }
        else if ((playerAnswer[i] < correctAnswer[i]) || (playerAnswer[i] > correctAnswer[i])) {
            incorrect++;        
        }
        else if (playerAnswer.indexOf(i) == -1) {
            unanswered++;
        };
    };
        $("#correctAnswers").html("Correct Answers: " + correct);
        $("#incorrectAnswers").html("Incorrect Answers: " + incorrect);
        $("#notAnswered").html("Unanswered: " + unanswered);
        console.log(playerAnswer);
        console.log(correct);
        console.log(incorrect);
        console.log(unanswered);
        console.log(number);
    
};

// FUNCTIONS FOR THE GAME TIMER
//=======================================================================================

//  The run function sets an interval
function run() {
    number = 60;
    clearInterval(intervalId);
    setTimeout(hideSection(".part1"), 1000);
    setTimeout(showSection(".part2"), 1000);
    intervalId = setInterval(countdown, 1000);
    
    checkAnswers();
};

//  The countdown function decrements the number
function countdown() {

    // Decrease number by one
    number--;

    //Show the number in the #timeRemain tag
    $("#timeRemain").html("<h3>Time Remaining: " + number + " seconds</h3>");

    //Once number hits zero...
    if (number < 0) {
        clearInterval(intervalId);
        alert("OUT OF TIME!!!")
        playerChoice();
    };
};

// Function that starts/restarts the game when button is clicked
function startGame() {
    
    hideSection(".part2");
    hideSection(".part3");
    showSection(".part1");
    

// When the Start button is clicked, run the countdown function
$("#start").on("click", run);

// When the Submit button is clicked, run playerChoice function
$("#finish").on("click", playerChoice);

};

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// =========================================================================================
$(document).ready(function() {
    
    startGame();

});
$("#restart").on("click", startGame);