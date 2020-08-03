//by default notify area will be hidden. it can be done by CSS but i do it in JavaScript;
document.getElementById("notify-wrong").style.display = "none";
document.getElementById("notify-right").style.display = "none";

//handler for Generate Pin button and after clicking the button notify area will hide again;
document.querySelector(".generate-btn").addEventListener("click", function(){
    const randomNumber = Math.floor(1000 + Math.random() * 9000); //this calculation, i learned it from StackOverflow;
    document.querySelector(".generate-num-screen").value = randomNumber;
    document.getElementById("notify-wrong").style.display = "none";
    document.getElementById("notify-right").style.display = "none";
})

//this fuction is for the the pin matching calculator's button;
function handleCalculatorButton(number){
    document.querySelector(".matching-num-screen").value += number; //the '+=' calculation, i learned it from Youtube;
}

//this handler is for the the pin matching calculator's clear button;
document.querySelector(".clear").addEventListener("click", function(){
    document.querySelector(".matching-num-screen").value = "";
})

//this handler is for the the pin matching calculator's delete button;
document.querySelector(".delete").addEventListener("click", function(){
    let number = document.querySelector(".matching-num-screen").value;
    document.querySelector(".matching-num-screen").value = number.substring (0, number.length -1); //the 'substring' calculation, i found it on StackOverflow and i have many confusion/doubt about this;
})

//this function is to handle the pin matching calculator's submit button;
function handleSubmitButton(){
    const pin = document.querySelector(".generate-num-screen").value;
    const pinMatcher = document.querySelector(".matching-num-screen").value;
    //this alert is for empty input submitting or validation;
    if(pin == ""){
        alert("Before submitting, Please press the Generate Pin button!"); 
    }
    else if (pin == pinMatcher){
        document.getElementById("notify-right").style.display = "block";
        document.getElementById("notify-wrong").style.display = "none";
        //if the pin matched then Pin Generator screen will be empty;
        document.querySelector(".generate-num-screen").value = "";
    }
    else if (pin != pinMatcher){
        document.getElementById("notify-right").style.display = "none";
        document.getElementById("notify-wrong").style.display = "block";
        let actionNumber = document.getElementById("action-number").innerText;
        actionNumber = parseInt(actionNumber);
        actionNumber = actionNumber - 1;
        document.getElementById("action-number").innerText = actionNumber;
        if (actionNumber===0) {
            document.querySelector(".submit-btn").style.opacity = 0.4;
            document.querySelector(".submit-btn").disabled = true; //this 'disabled = true', i learned it from StackOverflow;
            //this alert is for validation;
            alert("Reload the page for more attempt!"); 
        }
    }    
    //every time clicked on Submit button, Matching Screen will be empty;
    document.querySelector(".matching-num-screen").value = "";
}
