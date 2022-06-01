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
}

//Prevent default form submit
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event){
    event.preventDefault();
    saveFormData();
    displayThankYou();
  });


//Show thank you and information submitted
function displayThankYou() {
let newHeading = document.getElementById("heading").firstElementChild;
let textArea = document.getElementById("text-area");
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
}