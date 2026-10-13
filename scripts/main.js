import { isValidTitle,isValidDueDate,isValidDuration,isValidTag, hasRepeatedWord } from "./validators.js";
const form =document.getElementById("record-form");
const status = document.getElementById("form-status");
const title= document.getElementById("title");
const error = document.getElementById("t-error"); 
form.addEventListener("submit",function(event){
event.preventDefault();

if (!isValidTitle(title.value)){
    title.setAttribute("aria-invalid","true");
    error.textContent ="title can't be empty or start with a space";
    status.textContent="";
    return;
}
error.textContent ="";
status.textContent="saved"
});