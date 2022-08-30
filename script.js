function printVocal(vocal){
    for (let vocalSpace of vocalSpaces){
        if (vocalSpace.innerText == "_"){
            vocalSpace.innerText = vocal.toUpperCase();
            break;
        }      
    }
}

function disableVocal(vocal){
    availableKeys.splice(availableKeys.indexOf(vocal),1);
    document.querySelector(`[value=${vocal}]`).setAttribute("disabled", true);
}


const vocalButtons = document.getElementsByTagName("button");
const vocalSpaces = document.getElementsByClassName("vocalSpaces");
let availableKeys = ["a", "e", "i", "o", "u"];


for (let button of vocalButtons){
    button.addEventListener("click", (e)=>{
        printVocal(e.target.value);
        disableVocal(e.target.value);
    });
}

window.addEventListener("keypress", (e)=>{
    if (availableKeys.includes(e.key)){
        printVocal(e.key);
        disableVocal(e.key);
    }
})
