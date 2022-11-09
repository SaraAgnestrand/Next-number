//Deklaration of variables from html
const inputNr=document.querySelector(".inputNr");
const button=document.querySelector("button");
const h3=document.querySelector("h3");


//Adding eventlistener on button and fuction that run when click

button.addEventListener("click", function() {

    //Declaration of nextNumber
    //Then sets innertext for h3
    const nextNumber = getNextNumber();
    h3.innerText = "Nästa nummer är " + nextNumber + ".";
    
});

//Function for getting nextNumber, return to function in Eventlistener
function getNextNumber(){
    let nr = Number(inputNr.value);
    let nextNr = nr + 1;

return nextNr;

}
 