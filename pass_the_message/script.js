const deliver = document.getElementById("deliver");

deliver.innerHTML = "No Messages Delivered"

function submit(){

    let input = document.getElementById("message").value;

    if(input == ""){
        deliver.innerHTML ="Message field is empty";
    }else{
        deliver.innerHTML = input
    }
}