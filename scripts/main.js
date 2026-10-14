import { isValidTitle,isValidDueDate,isValidDuration,isValidTag, hasRepeatedWord } from "./validators.js";
const form =document.getElementById("record-form");
const status = document.getElementById("form-status");
const title= document.getElementById("title");
const error = document.getElementById("t-error"); 
const dDate= document.getElementById("dueDate");
const dError= document.getElementById("dderror");
const duration = document.getElementById("duration");
const durError= document.getElementById("duration-error");
const tag=document.getElementById("tag");
const tagError=document.getElementById("tag-error");



form.addEventListener("submit",function(event){
event.preventDefault();

if (!isValidTitle(title.value)){
    title.setAttribute("aria-invalid","true");
    error.textContent ="title can't be empty or start with a space";
    status.textContent="";
    return;
}
title.setAttribute("aria-Invalid","false");
error.textContent ="";

 //due date
 if (!isValidDueDate(dDate.value)){
    dDate.setAttribute("aria-invalid","true");
    dError.textContent = "use the format YYYY-MM-DD";
    status.textContent ="";
    return;
 }
 dDate.setAttribute("aria-invalid","false");
 dError.textContent ="";


//duration
if(!isValidDuration(duration.value)){
    duration.setAttribute("aria-invalid","true");
    durError.textContent ="Enter a number like 20 or 1.4 (max 2 decimal )"
    status.textContent ="";
    return;
}
duration.setAttribute("aria-invalid","false");
durError.textContent ="";

//tag
if(!isValidTag(tag.value)){
    tag.setAttribute("aria-invalid","true");
    tagError.textContent ="use letter only , space or hyphens between words";
    status.textContent ="";
    return;
}
tag.setAttribute("aria-invalid","false");
tagError.textContent="";

status.textContent ="saved";
});

