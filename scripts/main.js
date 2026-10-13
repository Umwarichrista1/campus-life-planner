import { isValidTitle,isValidDueDate,isValidDuration,isValidTag, hasRepeatedWord } from "./validators.js";
const form =document.getElementById("record-form");
const status =document.getElementById("form-status");
form.addEventListener("submit",function(event){
event.preventDefault()
status.textContent="saved"
});