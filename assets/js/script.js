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
 ];

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

// Results
let needLifeInsurance = "Considering that you have children below the age of 25, you may want to protect their future with a life cover.";
let needIncomeProtection = "You said you are self-employed so an income protection (a specific type of life insurance) can help you out in case you can't work due to injury or illness.";
let needMortgageProtection = "Homeowners who have a mortgage must have a specific type of life insurance called mortgage protection. This insurance will repay your mortgage in case you can't pay anymore. It isn't the same as a life cover: mortgage protection only repays your mortgage.";
let noNeed = "Based on the answers you provided, you can park the life insurance for the moment! you probably don't need it!";
let resultsArea = document.getElementById("text-area");
let needLifeInsuranceExtra = "Considering that your family depends on 1 person (or 1 source of income), would be wise that person get a life insurance to protect the family.";


/**
 * After the username is validated,
 * initialize the questionnaire and
 * show the first question
 */
function startQuestionnaire() {
    start.classList.add("hide");
    // Make first bar progress border-color green
    document.getElementById("i").classList.add("past-question");
    nextQuestion();
    progressUpdate();
}

// Username must be provided to start the questionnaire
const isRequired = value => value === '' ? false : true;

// Use to set username min and max length
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// Validate username and initialize questionnaire
function validateUsername () {
    let valid = false;
    const min = 3;
    const max = 25;
    const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    username = document.getElementById("username").value;
    username = username.trim();
    // Logic to check username is valid
    if (!isRequired(username)) {
        document.getElementById("username").style.borderColor="red";
        alert("Username cannot be blank. Try Again!");
    } else if (!isBetween(username.length, min, max)) {
        document.getElementById("username").style.borderColor="red";
        alert(`Username must be between ${min} and ${max} characters. Try Again!`);
    } else if (/\s/.test(username)) {
        document.getElementById("username").style.borderColor="red";
        alert("Username must be one word! Try again.");    
    } else if (specialChar.test(username)) {
        document.getElementById("username").style.borderColor="red";
        alert("Username can't contain special characters! Try again.");
    } else {
        valid = true;
        //store username in sessionStorage
        sessionStorage.setItem("name", username);
        startQuestionnaire();
    }
}

// Listen to 'start' clicks
let start = document.getElementById("start");
start.addEventListener("click", validateUsername);
 
/**
* Render the first question,
* show yes / no buttons,
* hide Text area
*/
function nextQuestion() {
    let q = questions[runningQuestion];
    document.getElementsByTagName("h1")[0].innerText = q.question;
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
    } else {
        showResults();
    }
}

/**
 * Save user ansers in an array,
 * go to next question
 */
function saveAnswers() {
    userAnswers.push(this.id);
    leftQuestions();
}

// On yes/no click, run leftQuestions()
yesClick.addEventListener("click", saveAnswers);
noClick.addEventListener("click", saveAnswers);

/**
 * Update progress bar,
 * current question progress becomes blue,
 * past questions become green
 */
function progressUpdate () {
    //Get the id of the progress circle that matches the running question
    currentProgress = document.getElementsByClassName("progress")[runningQuestion + 1 ].id;
    let pastQuestion = currentProgress - 1;
    /**
     * If the progress id = running questions,
     * progress circle becomes blue,
     * if the question is past circle becomes green
     */
    if (parseInt(currentProgress) === runningQuestion) {
        let blueCircle = document.getElementById(runningQuestion);
        document.getElementById("mobile-progress").innerText = `${document.getElementById(runningQuestion).innerText} / 5`;
        blueCircle.classList.add("current-question");
        let greenCircle = document.getElementById(pastQuestion);
        greenCircle.classList.add("past-question");
        }
}

//Prepare DOM to display comments
function showResults () {
    document.getElementById("answers").style.display="none";
    document.getElementById("question").style.display="none";
    document.getElementById("text-area").style.display="block";
    document.getElementById("intro").innerHTML = "";

    document.getElementById("5").classList.add("current-question");
    document.getElementById("4").classList.add("past-question");
    displayComments ();
}

//show calculator buttons
function calculatorButton() {
    let calculatorBtn = document.createElement("button");
    calculatorBtn.setAttribute("onclick", "window.location.href='life-insurance-calculator.html'");
    calculatorBtn.textContent = `Calculate your life insurance need`;
    calculatorBtn.setAttribute("id", "life-calculator-btn");
    resultsArea.appendChild(calculatorBtn);
}

function backButton () {
    let start = document.getElementById("start");
    start.classList.remove("hide");
    start.removeAttribute("id");
    start.classList.add("back-button");
    start.setAttribute("onclick", "window.location.href='index.html'");
    start.innerHTML = `Restart with new name`;
}

//Show comments based on the user's answers
function displayComments () {
    document.getElementById("mobile-progress").innerText = `R`;
    document.getElementById("mobile-progress").classList.add("past-question");
    resultsArea.firstChild.textContent = `Hi ${username},`;
    
    if (userAnswers[0] === "yes") {
        let p = document.createElement('p');
        p.textContent = needLifeInsurance;
        resultsArea.appendChild(p);
        let br = document.createElement('br');
        resultsArea.appendChild(br);
    } 
    if (userAnswers[1] === "yes") {
        let p = document.createElement('p');
        p.textContent = needIncomeProtection;
        resultsArea.appendChild(p);
        let br = document.createElement('br');
        resultsArea.appendChild(br);
    } 
    if (userAnswers[2] === "yes") {
        let p = document.createElement('p');
        p.textContent = needMortgageProtection;
        resultsArea.appendChild(p);
        let br = document.createElement('br');
        resultsArea.appendChild(br);
    }
    if (userAnswers[3] === "yes" || userAnswers[4] === "yes") {
        let p = document.createElement('p');
        p.textContent = needLifeInsuranceExtra;
        resultsArea.appendChild(p);
        let br = document.createElement('br');
        resultsArea.appendChild(br);
    }
    if (userAnswers[0] === "no" && userAnswers[1] === "no" && userAnswers[2] === "no" && userAnswers[3] === "no" && userAnswers[4] === "no") {
        let p = document.createElement('p');
        p. textContent = noNeed;
        resultsArea.appendChild(p);
        let br = document.createElement('br');
        resultsArea.appendChild(br);
    }
    if (userAnswers[0] === "yes" || userAnswers[1] === "yes" || userAnswers[2] === "yes" || userAnswers[3] === "yes" || userAnswers[4] === "yes") {
        calculatorButton();
    }
    backButton ();
}


