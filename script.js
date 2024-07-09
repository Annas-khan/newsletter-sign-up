const emailInput = document.querySelector("input");
const form = document.querySelector("form");
const successState = document.querySelector(".success-state");
const contentDiv = document.querySelector(".content");


form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const errorMessage = document.getElementById("error-message");
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    if(!emailPattern.test(emailValue)){
        emailInput.classList.add('invalid');
        errorMessage.style.display ='block';    
    } else {
        emailInput.classList.remove('invalid');
        successState.style.display = "block";
        contentDiv.style.display = "none";
        errorMessage.style.display = "none";
    };
});     
