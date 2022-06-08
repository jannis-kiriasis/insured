//Questions
const questions = [{
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
    question: 
    "Is the vast majority of your household income coming from 1 person only?",
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

//Results to show at the end of the questionnaire
const needLifeInsurance = 
`Considering that you have children below the age of 25, you may want 
to protect their future with a life cover.`;

const needIncomeProtection = 
`You said you are self-employed so an income protection 
(a specific type of life insurance) can help you out in case you can't work 
due to injury or illness.`;

const needMortgageProtection = 
`Homeowners who have a mortgage must have a specific type of life insurance 
called mortgage protection. This insurance will repay your mortgage in case you 
can't pay anymore. It isn't the same as a life cover: mortgage protection only 
repays your mortgage.`;

const noNeed = 
`Based on the answers you provided, you can park the life insurance 
for the moment! you probably don't need it!`;

const needLifeInsuranceExtra = 
`Considering that your family depends on 1 person (or 1 source of income), 
would be wise that person get a life insurance to protect the family.`;

const resultsArea = document.getElementById("text-area");
const start = document.getElementById("start");
const buttons = document.getElementsByClassName("choice-text");

// Variables to loop through questions
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let currentProgress = 0;

// Store username in a variable
let username = "";
let userAnswers = [];

// Listen to 'start' clicks
start.addEventListener("click", validateUsername);

// Wait DOM to be loaded then run funtion
document.addEventListener("DOMContentLoaded", function() {
  const currentStage = document.getElementsByTagName("img")[1];
  currentStage.classList.add("verdigris");
});

// On yes/no click, run saveAnswer()
for (let button of buttons) {
  button.addEventListener("click", saveAnswers);
}

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
const nameExists = value => value === '' ? false : true;

// Use to set username min and max length
const nameLength = (length, min, max) => length < min || 
length > max ? false : true;

/**
 * Validate username and initialize questionnaire. Username must be
 * between 3 and 25 characters long
 * one word
 * no digits
 * no special characters
 * cannot be blank
 */
function validateUsername() {
  const min = 3;
  const max = 25;
  const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  username = document.getElementById("username").value;
  username = username.trim();
  // Logic to check username is valid
  if (!nameExists(username)) {
    document.getElementById("username").style.borderColor = "red";
    alert("Your name cannot be blank. Try Again!");
  } else if (!nameLength(username.length, min, max)) {
    document.getElementById("username").style.borderColor = "red";
    alert(`Your name must be between ${min} and ${max} characters. Try Again!`);
  } else if (/\s/.test(username)) {
    document.getElementById("username").style.borderColor = "red";
    alert("Your name must be one word! Try again.");
  } else if (specialChar.test(username)) {
    document.getElementById("username").style.borderColor = "red";
    alert("Your name can't contain special characters! Try again.");
  } else if (/\d/.test(username)) {
    document.getElementById("username").style.borderColor = "red";
    alert("Your name can't contain numbers! Try again.");
  } else {
    //store username in sessionStorage
    sessionStorage.setItem("name", username);
    startQuestionnaire();
  }
}

/**
 * Render the first question,
 * show yes / no buttons,
 * hide Text area (the intro message)
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

/**
 * Show yes / no buttons below the question
 */
function showButtons() {
  const showButtons = document.getElementById("answers");
  showButtons.classList.remove("hide");
}

/**
 * Hide intro text area
 */
function hideTextArea() {
  const hide = document.getElementById("text-area");
  hide.style.display = "none";
}

/**
 * Check if there are questions left to loop through,
 * if so, increment runningQuestion and
 * show the next question. If there are no questions left,
 * show results.
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

/**
 * Update progress bar colors:
 * current question progress becomes blue,
 * past questions become green.
 * If the progress id = running questions,
 * progress circle becomes blue,
 * if the question is past and
 * there are past questions,
 * circle becomes green
 */
function progressUpdate() {
  //Get the id of the progress circle that matches the running question
  currentProgress = document.getElementsByClassName("progress")
  [runningQuestion + 1].id;
  //Check if currentProgress = running question to change the progress color
  if (parseInt(currentProgress) === runningQuestion) {
    let blueCircle = document.getElementById(runningQuestion);

    document.getElementById("mobile-progress").innerText = 
    `${document.getElementById(runningQuestion).innerText} / 5`;

    blueCircle.classList.add("current-question");
  }
  // Check if there are past questions to change the progress color
  if (parseInt(currentProgress) > runningQuestion - 1 && runningQuestion !== 0) 
  {
    let greenCircle = document.getElementById(runningQuestion - 1);
    greenCircle.classList.add("past-question");
  }
}

/**
 * Initialise the DOM preor to display comments
 */
function showResults() {
  document.getElementById("answers").style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("text-area").style.display = "block";
  document.getElementById("intro").innerHTML = "";

  document.getElementById("5").classList.add("current-question");
  document.getElementById("4").classList.add("past-question");
  displayComments();
}

/**
 * Show calculator buttons and set properties
 */
function calculatorButton() {
  const calculatorBtn = document.createElement("button");

  calculatorBtn.setAttribute("onclick", 
  "window.location.href='life-insurance-calculator.html'");

  calculatorBtn.textContent = `Calculate your life insurance need`;
  calculatorBtn.setAttribute("id", "life-calculator-btn");
  resultsArea.appendChild(calculatorBtn);
}

/**
 * Show back button and set properties
 */
function backButton() {
  start.classList.remove("hide");
  start.removeAttribute("id");
  start.classList.add("back-button");
  start.setAttribute("onclick", "window.location.href='index.html'");
  start.innerHTML = `Restart with new name`;
}

/**
 * addInsuranceMessage passing the paramenter message.
 * This function creates paragraphs and spaces.
 * The content of the message is equal to the user needs (life, mortgage or
 * income protection).
 * The value of message changes based on the conditional logic in the function
 * displayComments().
 */
function addInsuranceMessage(message) {
  const p = document.createElement('p');
  p.textContent = message;
  resultsArea.appendChild(p);
  const br = document.createElement('br');
  resultsArea.appendChild(br);
}

/**
 * Show messages following the if conditions. Different user answers trigger
 * different messages.
 */
  function displayComments() {
  document.getElementById("mobile-progress").innerText = `R`;
  document.getElementById("mobile-progress").classList.add("past-question");
  resultsArea.firstChild.textContent = `Hi ${username},`;

  if (userAnswers[0] === "yes") {
    addInsuranceMessage(needLifeInsurance);
  }
  if (userAnswers[1] === "yes") {
    addInsuranceMessage(needIncomeProtection);
  }
  if (userAnswers[2] === "yes") {
    addInsuranceMessage(needMortgageProtection);
  }
  if (userAnswers[3] === "yes" || userAnswers[4] === "yes") {
    addInsuranceMessage(needLifeInsuranceExtra);
  }
  if (userAnswers[0] === "no" && userAnswers[1] === "no" && 
    userAnswers[2] === "no" && userAnswers[3] === "no" && 
    userAnswers[4] === "no") {
      addInsuranceMessage(noNeed);
  }
  if (userAnswers[0] === "yes" || userAnswers[1] === "yes" || 
  userAnswers[2] === "yes" || userAnswers[3] === "yes" || 
  userAnswers[4] === "yes") 
  {
    calculatorButton();
  }
  backButton();
}

