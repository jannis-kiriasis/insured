const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

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

// Store username in a variable
let username = "";

//Start game when Start is clicked
function startQuestionnaire() {
    username = document.getElementById("username").value;
    start.classList.add("hide");
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    nextQuestion()
}

//Listen to 'start' clicks
let start = document.getElementById("start");
start.addEventListener("click", startQuestionnaire);
 

function nextQuestion() {
    questionCounter++;
    document.getElementsByTagName("h1")[1].innerText = questions[0].question;
    document.getElementById("yes").innerText = questions[0].answers.a;
    document.getElementById("no").innerText = questions[0].answers.b;
    

    let showButtons = document.getElementById("answers");
    showButtons.classList.remove("hide");

    let hide = document.getElementById("question-body");
    hide.style.display="none";
};