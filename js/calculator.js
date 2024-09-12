const displays =document.getElementById("display");

function digit_calculate(input){
    displays.value+=input;
}

function digit_Del(){
    displays.value=displays.value.toString().slice(0,-1);
}
function all_Clear(){
    displays.value="";
}
function Calculate(){
    try{
        displays.value=eval(displays.value);

    }
    catch(error){
        displays.value="error";

    }
}
//Keyboard response
document.addEventListener('keydown', (event)=>{
    const keys = '0123456789/*-+.%';
    if (keys.includes(event.key)){
        digit_calculate(event.key);
    }
    else if(event.key === 'Enter'){
        Calculate();
    }
    else if(event.key === 'Backspace'){
        digit_Del();
    }
    else if(event.key === 'Escape'){
        all_Clear();
    }
});