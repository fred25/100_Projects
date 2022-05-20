const HEX_VALUES = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const style = document.querySelector('#jsStyle');
const text = document.querySelector('#hexText');

text.innerHTML = "Try me!";

function changeColor(){

    applyColor(getRandomHEX());
}

function getRandomHEX(){

    let color = ""
    color += "#";
    
    for(let i = 0; i < 6; i++){
        let value = HEX_VALUES[parseInt(Math.random()*16)];
        color += value;
    }
    return color;
}

function applyColor(color){

    style.innerHTML = `body{ background-color: ${color} }`
    text.innerHTML = color
}