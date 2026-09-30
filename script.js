let display = document.getElementById("display")
function append(value) {
    display.value += value;
}
function calculate() {
    try{
        display.value = 
        eval(display.value.replace(`*`, `*`)
    .replace(`/`, `/`));
    }catch {
        display.value = "error"
    }
}
    function cleardisplay(){
        display.value = "";
    
}
