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
const body = document.getElementById("records-body");
const cancelBtn = document.getElementById("cancel-btn");
const sortSelect = document.getElementById("sort");
const searchInput= document.getElementById("search");
const caseToggle = document.getElementById("case-toggle");
const searchMsg = document.getElementById("search-msg");



let records = [];
let editingId =null;

function clearForm(){
    form.reset();
    editingId =null;
    error.textContent ="";
    dError.textContent="";
    durError.textContent="";
    tagError.textContent="";
    title.setAttribute("aria-invalid","false");
    dDate.setAttribute("aria-invalid","false");
    duration.setAttribute("aria-invalid","false");
    tag.setAttribute("aria-invalid","false");

    
}
function compileRegex(text,flags){
    try{
        return new RegExp(text,flags);
    }catch (e){
        return null;
    }
}

function getFiltered(){
    const text =searchInput.value;

    if (text === ""){
        searchMsg.textContent ="";
        return records.slice()
    }
    const flags = caseToggle.checked ? "i" :"";
    const re = compileRegex(text,flags);

    if(re === null){
        searchMsg.textContent = "Invalid pattern";
        return records.slice();
    }

    searchMsg.textContent ="";
    return records.filter(function(r){
        return re.test(r.title) || re.test(r.tag) || re.test (r.dueDate);
    });
}
function getSorted(){
    const list = getFiltered();
    const choice = sortSelect.value;
    if(choice.startsWith("date")){
        list.sort(function(a,b){return a.dueDate.localeCompare(b.dueDate);});
    }
    if(choice.startsWith("title")){
        list.sort(function(a,b){return a.title.localeCompare(b.title);});
    }
    if(choice.startsWith("duration")){
        list.sort(function(a,b){return a.duration - b.duration; });
    }
    if(choice.endsWith("desc")){
       list.reverse();
    }
    

return list;
}

function render() {
    body.textContent ="";

if (records.length === 0){
    body.innerHTML ='<tr><td colspan ="5">no task yet.</td></tr>';
    return;
}

const list = getSorted();

if(list.length === 0 ){
    body.innerHTML ='<td><td colspan="5"></td>no matching tasks</td></tr>';
    return;
}
    for(const r of list){
        const row =document.createElement("tr");

        const tdTitle =document.createElement("td");
        tdTitle.textContent =r.title;
        row.appendChild(tdTitle);

        const tdDate =document.createElement("td");
        tdDate.textContent = r.dueDate;
        row.appendChild(tdDate);

        const tdDuration = document.createElement("td");
        tdDuration.textContent =r.duration;
        row.appendChild(tdDuration);

        const tdTag = document.createElement("td");
        tdTag.textContent =r.tag;
        row.appendChild(tdTag);

        const tdActions = document.createElement("td");

        const editBtn = document.createElement("button");
        editBtn.textContent ="Edit";
        editBtn.setAttribute("aria-label","Edit " + r.title);

        editBtn.addEventListener("click",function(){
            clearForm();
            title.value=r.title;
            dDate.value=r.dueDate;
            duration.value = r.duration;
            tag.value=r.tag;
            editingId=r.id;
            status.textContent ="Edit and change then click save task"
            title.focus();
        });
        
        const delBtn = document.createElement("button");
        delBtn.textContent="Delete";
        delBtn.setAttribute("aria-label","Delete " + r.title);

        delBtn.addEventListener("click",function(){
            records =records.filter(function(x){
                return x.id !== r.id;
            });
            if(editingId ===r.id){
                clearForm();
            }
            render();
        });
        tdActions.appendChild(editBtn);
        tdActions.appendChild(delBtn);
        row.appendChild(tdActions);

        body.appendChild(row);

    }
}

form.addEventListener("submit",function(event){
event.preventDefault();

if (!isValidTitle(title.value)){
    title.setAttribute("aria-invalid","true");
    error.textContent ="title can't be empty or start with a space";
    status.textContent="";
    return;
}
title.setAttribute("aria-invalid","false");
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

if(editingId){
    for(const r of records){
        if(r.id === editingId){
            r.title = title.value;
            r.dueDate =dDate.value;
            r.duration = Number(duration.value);
            r.tag = tag.value;
            r.updatedAt = new Date().toISOString();

        }
    }
    render();
    clearForm();
    status.textContent = "updated";
    return;
}





const record = {
    id:"rec_" + Date.now(),
    title: title.value,
    dueDate:dDate.value,
    duration:Number(duration.value),
    tag :tag.value,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
   }; 

   records.push(record);
   render();
   clearForm();
   status.textContent ="saved";
   
});

cancelBtn.addEventListener("click",function(){
    clearForm();
    status.textContent ="";
});
sortSelect.addEventListener("change",render);
searchInput.addEventListener("input",render);
caseToggle.addEventListener("change",render);
render();