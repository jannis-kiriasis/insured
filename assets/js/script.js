// Store username in a variable
let username = "";

//Start game when Start is clicked
function startQuestionnaire() {
        username = document.getElementById("username").value;
}

let start = document.getElementById("start");
start.addEventListener("click", startQuestionnaire);

