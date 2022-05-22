const COUNTER_TEXT = document.getElementById("counter");

var counter = 0;

function lowerCount(){
    counter --;
    COUNTER_TEXT.innerHTML = counter;
    colorChecker();
}

function addCount(){
    counter ++;
    COUNTER_TEXT.innerHTML = counter;
    colorChecker();
}

function colorChecker(){
    if(counter > 0){
        COUNTER_TEXT.className = "positive";
    }else if (counter < 0){
        COUNTER_TEXT.className = "negative";
    }else if (counter == 0){
        COUNTER_TEXT.className = "neutral";
    }
}