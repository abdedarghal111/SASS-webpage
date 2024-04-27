let text = document.getElementById("ponerEdad");

let time = new Date();
let actYear = time.getFullYear();
let years = (actYear - 1) - 2004;
let month = time.getMonth()+1;
let day = time.getDate();

if(month > 4 || month == 4 && day >= 16){
    years++;
}

text.innerText = years;