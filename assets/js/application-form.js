//Get user inputs
const formName = document.getElementById("name");
const formSalary = document.getElementById("salary");
const formYears = document.getElementById("years");
const formContact = document.getElementById("phone");
const formEmail = document.getElementById("email");

//Get main text area
const textArea = document.getElementById("text-area");

// Get form html
const form = document.getElementsByTagName("form")[0];

// Variables for username validation
const min = 3;
const max = 25;
const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

// New heading for thank you message
const newHeading = document.getElementById("heading").firstElementChild;

// Initialise variables for user inputs
let saveName = "";
let saveSalary = 0;
let saveYears = 0;
let saveEmail = "";
let saveContact = 0;

// Wait DOM to be loaded then run funtion
document.addEventListener("DOMContentLoaded", function() {
  const currentStage = document.getElementsByTagName("img")[5];
  currentStage.classList.add("verdigris");
});

//Prevent default form submit
form.addEventListener("submit", function(event) {
  event.preventDefault();
  formValidation();
});

// Round user inputs on focus out
formSalary.addEventListener("focusout", roundSalary);
formYears.addEventListener("focusout", roundYears);

/**
 * EmailJS public key
 * to send emails with JS
 */
(function() {
  emailjs.init("DDKNXpYjXyUnLG1Vo");
})();

// Prepopulate existing values
formName.setAttribute("value", `${sessionStorage.getItem("name")}`);
formSalary.setAttribute("value", `${sessionStorage.getItem("salary")}`);
formYears.setAttribute("value", `${sessionStorage.getItem("years")}`);

/**
 * Round input salary to the nearest integer
 */
function roundSalary() {
  let formSalaryValue = formSalary.value;
  formSalary.value = Math.round(formSalaryValue);
}

/**
 * Round input years to the nearest integer
 */
function roundYears() {
  let formYearsValue = formYears.value;
  formYears.value = Math.round(formYearsValue);
}

/**
 * Save form inputs,
 * can be used for future development.
 */
function saveFormData() {
  saveName = formName.value;
  saveSalary = formSalary.value;
  saveYears = formYears.value;
  saveEmail = formEmail.value;
  saveContact = formContact.value;

  // Update session storage in case information has changed
  // and for future use
  sessionStorage.setItem("salary", saveSalary);
  sessionStorage.setItem("years", saveYears);
  sessionStorage.setItem("phone", 0 + saveContact);
  sessionStorage.setItem("email", saveEmail);
  sessionStorage.setItem("name", saveName);
}

/**
 * Show thank you message after the user succesfully applied.
 * Append html to the show restart button.
 */
function displayThankYou() {

  newHeading.textContent =
    "Thank you for applying for a life insurance policy";

  textArea.innerHTML = `
    <p>An Insured representative will contact you shortly to verify 
    the information submitted and process your application.</p><br>
    <p>Information submitted:</p>
    <p>Name: ${saveName}</p>
    <p>Years of cover needed: ${saveYears}</p>
    <p>Salary: ${saveSalary}</p>
    <p>Contact phone: ${saveContact}</p>
    <p>Contact email: ${saveEmail}</p>
    `;
  restart();
}

/**
 * Validate form input fields and
 * save inputs in session storage and
 * send email to user and Insured and 
 * display thank you message
 */
function formValidation() {

  // Username must be provided to start the questionnaire
  const nameExists = value => value === "" ? false : true;

  // Use to set username min and max length
  const nameLength = (length, min, max) => length < min ||
    length > max ? false : true;

  if (!nameExists(formName.value.trim())) {
    formName.style.borderColor = "red";
    Swal.fire("Your name cannot be blank. Try Again!");
  } else if (!nameLength(formName.value.trim().length, min, max)) {
    formName.style.borderColor = "red";
    Swal.fire(`Your name must be between ${min} and ${max} characters. 
        Try Again!`);
  } else if (/\s/.test(formName.value.trim())) {
    formName.style.borderColor = "red";
    Swal.fire("Your name must be one word! Try again.");
  } else if (specialChar.test(formName.value.trim())) {
    formName.style.borderColor = "red";
    Swal.fire("Your name can't contain special characters! Try again.");
  } else if (/\d/.test(formName.value.trim())) {
    formName.style.borderColor = "red";
    Swal.fire("Your name can't contain numbers! Try again.");
  } else if (formContact.value.trim().length < 7 ||
    formContact.value.trim().length > 9) {
    formContact.style.borderColor = "red";
    Swal.fire(`Your phone number must be between 7 and 9 digits long. 
        Try again.`);
  } else {
    // store username in sessionStorage
    saveFormData();
    // Send email to Insured and user
    emailjs.sendForm("service_dnybmhl", "template_r1haoio", "form");
    displayThankYou();
  }
}

/**
 * Display restart button with attributes
 */
function restart() {
  const restart = document.createElement("button");
  restart.setAttribute("id", "restart");
  restart.setAttribute("onclick", "restartClick()");
  restart.innerHTML = `Restart with new name`;
  textArea.appendChild(restart);
}

/**
 * On restart link click, open to homepage and 
 * clear session storage
 */
function restartClick() {
  sessionStorage.clear();
  window.location.href = "index.html";
}