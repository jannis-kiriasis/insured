let formName = document.getElementById("name");
let formSalary = document.getElementById("salary");
let formYears = document.getElementById("years");
let formContact = document.getElementById("phone");
let formEmail = document.getElementById("email");
let formApply = document.getElementById("apply");
let saveName = "";
let saveSalary = 0;
let saveYears = 0;
let saveEmail = "";
let saveContact = 0;

//Prepopulate existing values
formName.setAttribute("value", `${sessionStorage.getItem("name")}`);
formSalary.setAttribute("value", `${sessionStorage.getItem("salary")}`);
formYears.setAttribute("value", `${sessionStorage.getItem("years")}`);

//round entered Salary
function roundSalary () {
    let formSalaryValue = formSalary.value;
    formSalary.value = Math.round(formSalaryValue);
}

//round entered Years
function roundYears () {
    let formYearsValue = formYears.value;
    formYears.value = Math.round(formYearsValue);
}

formSalary.addEventListener('focusout', roundSalary);
formYears.addEventListener('focusout', roundYears);

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
    sessionStorage.setItem("phone", saveContact);
    sessionStorage.setItem("email", saveEmail);
    sessionStorage.setItem("name", saveName);
}

//Show thank you and information submitted
function displayThankYou() {
    let newHeading = document.getElementById("heading").firstElementChild;
    newHeading.textContent = "Thank you for applying for a life insurance policy";
    textArea.innerHTML = `
    <p>An Insured representative will contact you shortly to verify the information submitted and process your application.</p><br>
    <p>Information submitted:</p>
    <p>Name: ${saveName}</p>
    <p>Years of cover needed: ${saveYears}</p>
    <p>Salary: ${saveSalary}</p>
    <p>Contact phone: ${saveContact}</p>
    <p>Contact email: ${saveEmail}</p>
    `
    restart(); 
}

function formValidation () {
    const min = 3;
    const max = 25;
    const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    // Username must be provided to start the questionnaire
    const isRequired = value => value === '' ? false : true;
    // Use to set username min and max length
    const isBetween = (length, min, max) => length < min || length > max ? false : true;
    if (!isRequired(formName.value.trim())) {
        formName.style.borderColor="red";
        alert("Username cannot be blank. Try Again!");
    } else if (!isBetween(formName.value.trim().length, min, max)) {
        formName.style.borderColor="red";
        alert(`Username must be between ${min} and ${max} characters. Try Again!`);
    } else if (/\s/.test(formName.value.trim())) {
        formName.style.borderColor="red";
        alert("Username must be one word! Try again.");
    } else if (specialChar.test(formName.value.trim())) {
        formName.style.borderColor="red";
        alert("Username can't contain special characters! Try again.");
    } else {
        //store username in sessionStorage
        saveFormData();
        displayThankYou();
    }
}

//Prevent default form submit
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event){
    event.preventDefault();
    formValidation();
});

let textArea = document.getElementById("text-area");

function restart () {
    let restart = document.createElement("button");
    restart.setAttribute("id", "restart");
    restart.setAttribute("onclick", "window.location.href='index.html'");
    restart.innerHTML = `Restart with new name`;
    textArea.appendChild(restart);
}



