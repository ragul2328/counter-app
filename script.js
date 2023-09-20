function handleIncrement(){
    let counter =document.getElementById("result").innerHTML;
    counter++;
    document.getElementById("result").innerHTML=counter;

}

function handleDecrement(){
    let counter =document.getElementById("result").innerHTML;
    counter--;
    document.getElementById("result").innerHTML=counter;

}
function reset(){
    let counter =document.getElementById("result").innerHTML=0;
   

}