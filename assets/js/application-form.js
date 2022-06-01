let formName = document.getElementById("name");
let formSalary = document.getElementById("salary");
let formYears = document.getElementById("years");
let formApply = document.getElementById("apply");

//Prepopulate existing values
formName.setAttribute("value", `${sessionStorage.getItem("name")}`);
formSalary.setAttribute("value", `${sessionStorage.getItem("salary")}`);
formYears.setAttribute("value", `${sessionStorage.getItem("years")}`);

//Prevent default form submit
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event){
    event.preventDefault()
    alert("works");
  });

  