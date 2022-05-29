//Questions
let questions = [
    {
        question: "Do you have children below the age of 25?",
        answers: {
            a: "yes",
            b: "no",
        }
    },
    {
        question: "Are you self-employed?",
        answers: {
            a: "yes",
            b: "no",
        }
    },
    {
        question: "Do you own a house or planning to buy one?",
        answers: {
            a: "yes",
            b: "no",
        }
    },
    {
        question: "Is the vast majority of your household income coming from 1 person only?",
        answers: {
            a: "yes",
            b: "no",
        }
    },
    {
        question: "Does your family members depend mostly on 1 person?",
        answers: {
            a: "yes",
            b: "no",
        }
    },
 ]

// Variables to loop through questions
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let currentProgress = 0;

// Store yes/no button elements
const yesClick = document.getElementById("yes");
const noClick = document.getElementById("no");

// Store username in a variable
let username = "";
let userAnswers = [];

//Start game when Start is clicked
function startQuestionnaire() {
    username = document.getElementById("username").value;
    start.classList.add("hide");
    //Make first bar progress border-color green
    document.getElementById("i").classList.add("past-question");
    nextQuestion();
    progressUpdate();
}

//Listen to 'start' clicks
let start = document.getElementById("start");
start.addEventListener("click", startQuestionnaire);
 
/**
* Render the first question,
* show yes / no buttons,
* hide Text area
*/
function nextQuestion() {
    let q = questions[runningQuestion];
    document.getElementsByTagName("h1")[1].innerText = q.question;
    document.getElementById("yes").innerText = q.answers.a;
    document.getElementById("no").innerText = q.answers.b;

    showButtons();
    hideTextArea();
    progressUpdate();
}

// Show yes / no buttons
function showButtons(){
    let showButtons = document.getElementById("answers");
    showButtons.classList.remove("hide");
}

// Hide intro text area
function hideTextArea() {
    let hide = document.getElementById("text-area");
    hide.style.display="none";
}

/**
 * Save user ansers in an array,
 * go to next question
 */
function saveAnswers() {
    userAnswers.push(this.id);
    leftQuestions();
}

//Variable to loop through buttons
var buttons = document.getElementsByClassName("choice-text");
var buttonsCount = buttons.length;

//On button click run saveAnswers
for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = saveAnswers; 
}

/**
 * Check if there are questions left to loop through,
 * if so, increment runningQuestion and
 * show the next question.
 */
function leftQuestions() {
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        nextQuestion();
    } else {
        showResults();
    }
}

// On yes/no click, run leftQuestions()
yesClick.addEventListener("click", leftQuestions);
noClick.addEventListener("click", leftQuestions);

/**
 * Update progress bar,
 * current question progress becomes blue,
 * past questions become green
 */
function progressUpdate () {

    //Get the id of the progress circle that matches the running question
    currentProgress = document.getElementsByClassName("progress")[runningQuestion + 1 ].id;
    let pastQuestion = currentProgress - 1;

    if (parseInt(currentProgress) === runningQuestion) {
        let blueCircle = document.getElementById(runningQuestion);
        blueCircle.classList.add("current-question");
        let greenCircle = document.getElementById(pastQuestion);
        greenCircle.classList.add("past-question");
    }
}

function validateUsername () {

}

function showResults () {
    document.getElementById("answers").classList.add("hide");
    document.getElementById("question").classList.add("hide");
    document.getElementById("text-area").classList.remove("hide");

    document.getElementById("5").classList.add("current-question");
    document.getElementById("4").classList.add("past-question");
}