let displey = document.querySelector(".displey");
let displey1 = document.querySelector(".displey1");
let celerbtn = document.querySelector(".celerbtn");

function append(char){
    displey.value += char;
    celerbtn.innerHTML = "AC";

    displey1.value =  eval(displey.value);

}

 function cut (){
    displey.value = displey.value.slice(0,-1);
    displey1.value = ""
 }
 function celer (){
    displey1.value = "";
    displey.value = "";
    celerbtn.innerHTML = "c";
 }
function calculate(){
    if(displey.value){
        
        displey.value = eval(displey.value);
        
    }
}
window.addEventListener("keydown", function(event){
    if(event.key === "1"){
        append('1');
    }
     if(event.key === "2"){
        append('2');
    }
     if(event.key === "3"){
        append('3');
    } if(event.key === "4"){
        append('4');
    } if(event.key === "5"){
        append('5');
    } if(event.key === "6"){
        append('6');
    } if(event.key === "7"){
        append('7');
    } if(event.key === "8"){
        append('8');
    } if(event.key === "9"){
        append('9');
    } if(event.key === "0"){
        append('0');
    } if(event.key === "+"){
        append('+');
    }
     if(event.key === "-"){
        append('-');
    }
     if(event.key === "*"){
        append('*');
    }
     if(event.key === "."){
        append('.');
    }
     if(event.key === "X"){
        append('X');
    }
    if(event.key === "Enter"){
        calculate();
    }
    if(event.key === "Backspace"){
        cut();
    }
    if(event.key === "Escape"){
        celer();
    }
})
