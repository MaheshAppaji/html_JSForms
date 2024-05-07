let myFormEl = document.getElementById("myForm");

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});

let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let errorMessageEl = document.getElementById("errorMessage");
let errorMessageEmailEl = document.getElementById("errorMessageEmail");

let validationError = document.querySelector(".error-message");

let blurValidFunction = function(event) {
    if (event.target === nameEl) {
        if (event.target.value === "") {
            validationError.textContent = "Name is required*";
            validationError.style.color = "Red";
        } else {
            validationError.textContent = "";
        }
    } else if (event.target === emailEl) {
        if (event.target.value === "") {
            validationError.textContent = "Email is required*";
            validationError.style.color = "Red";
        } else {
            validationError.textContent = "";
        }
    }
};
nameEl.addEventListener("blur", blurValidFunction);
emailEl.addEventListener("blur", blurValidFunction);

// nameEl.addEventListener("blur",function(event){
//     if(event.target.value === ""){
//         errorMessageEl.textContent = "Required*";
//         errorMessageEl.style.color = "Red";
//     }else{
//         errorMessageEl.textContent = "";
//     }
// });
// emailEl.addEventListener("blur",function(event){
//     if(event.target.value === ""){
//         errorMessageEmailEl.textContent = "Required*";
//         errorMessageEmailEl.style.color = "Red";
//     }else{
//         errorMessageEmailEl.textContent = "";
//     }
// });