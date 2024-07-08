const emailInput = document.querySelector("input");
const form = document.querySelector("form");

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
        errorMessage.style.display = "none";
        alert('email is valid');
    };
});     
