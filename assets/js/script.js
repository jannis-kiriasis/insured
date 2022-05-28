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

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

// Store username in a variable
let username = "";

//Start game when Start is clicked
function startQuestionnaire() {
    username = document.getElementById("username").value;
    start.classList.add("hide");
    questionCounter = 0;
    nextQuestion()
}

//Listen to 'start' clicks
let start = document.getElementById("start");
start.addEventListener("click", startQuestionnaire);
 
//render a question
function nextQuestion() {
    let q = questions[runningQuestion];
    document.getElementsByTagName("h1")[1].innerText = q.question;
    document.getElementById("yes").innerText = q.answers.a;
    document.getElementById("no").innerText = q.answers.b;

    showButtons();
    hideTextArea();
    leftQuestions();
}

function showButtons(){
    let showButtons = document.getElementById("answers");
    showButtons.classList.remove("hide");
}

function hideTextArea() {
    let hide = document.getElementById("text-area");
    hide.style.display="none";
}

function leftQuestions() {
    if (runningQuesition < lastQuestion) {
        runningQuestion++;
        nextQuestion();
    }
}