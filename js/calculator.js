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