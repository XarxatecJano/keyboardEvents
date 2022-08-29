function printVocalButton(e){
    for (let vocalSpace of vocalSpaces){
        if (vocalSpace.innerText == "_"){
            vocalSpace.innerText = e.target.value.toUpperCase();
            e.target.setAttribute("disabled", true);
            availableKeys.splice(availableKeys.indexOf(e.target.value),1);
            break;
        }      
    }
}

function printVocalKeyboard(e){
    if (availableKeys.includes(e.key)){
        for (let vocalSpace of vocalSpaces){
            if (vocalSpace.innerText == "_"){
                vocalSpace.innerText = e.key.toUpperCase();
                document.querySelector(`[value=${e.key}]`).setAttribute("disabled", true);
                availableKeys.splice(availableKeys.indexOf(e.key),1);
                break;
            } 
            
        }  
    }
}

const vocalButtons = document.getElementsByTagName("button");
const vocalSpaces = document.getElementsByClassName("vocalSpaces");
let availableKeys = ["a", "e", "i", "o", "u"];


for (let button of vocalButtons){
    button.addEventListener("click", printVocalButton);
}

window.addEventListener("keypress", printVocalKeyboard)
