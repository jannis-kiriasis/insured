//Questions
let questions = [
    {
        Question: "Do you have children below the age of 25?",
        Answers: {
            a: "yes",
            b: "no",
        }
    },
    {
        Question: "Are you self-employed?",
        Answers: {
            a: "yes",
            b: "no",
        }
    },
    {
        Question: "Do you own a house or planning to buy one?",
        Answers: {
            a: "yes",
            b: "no",
        }
    },
    {
        Question: "Is the vast majority of your household income coming from 1 person only?",
        Answers: {
            a: "yes",
            b: "no",
        }
    },
    {
        Question: "Does your family members depend mostly on 1 person?",
        Answers: {
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
}

let start = document.getElementById("start");
start.addEventListener("click", startQuestionnaire);




function Questionnaire () {

}

function validateUsername () {

}

