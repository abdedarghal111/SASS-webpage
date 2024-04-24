const hamburguer = document.getElementById("hamburguerElement");
const list = document.getElementById("hamburguerElementList");

const listHeight = list.offsetHeight;

let isActivated = true;

list.style.transition = "all 0.2s linear";
list.style.overflow = "hidden";
list.style.height = listHeight+"px";


hamburguer.onclick = function(){
    if(isActivated){
        deactivate();
    }else{
        activate();
    }
    isActivated = !isActivated;
}

function activate() {
    list.style.height = listHeight+"px";
    hamburguer.style.rotate = "180deg";
}

function deactivate(){
    list.style.height = "0px";
    hamburguer.style.rotate = "0deg";
}