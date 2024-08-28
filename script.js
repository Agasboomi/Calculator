const display = document.getElementById("input")
const special = ["+","-","*"]

function clearinput(){
    let input = document.getElementById("input");
    input.value = "";
}

function append(input){
    let display = document.getElementById("input")
    display.value += input;
}

function clearone(){
    let input = document.getElementById("input")

            let currentValue = input.value;
            
            if (currentValue.length > 0) {
                input.value = currentValue.slice(0, -1);
            }
}

function result(){
     
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="Error"
    }
    


}

