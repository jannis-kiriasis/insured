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
let user = [
    username = "",
    {
        answer0: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
    }
]

//Start game when Start is clicked
function startQuestionnaire() {
    user.username = document.getElementById("username").value;
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
 * Check if there are questions left to loop through,
 * if so, increment runningQuestion and
 * show the next question.
 */
function leftQuestions() {
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        nextQuestion();
    }
}

// On yes/no click, run leftQuestions()
yesClick.addEventListener("click", leftQuestions);
noClick.addEventListener("click", leftQuestions);

function saveAnswers () {

}


function progressUpdate () {
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

}