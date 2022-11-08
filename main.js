
const inputNr=document.querySelector(".inputNr");
const button=document.querySelector("button");
const h3=document.querySelector("h3");

button.addEventListener("click", function() {
    console.log("Innan funktionsanrop")
    const nextNumber = getNextNumber();
    h3.innerText = "Nästa nummer är " + nextNumber + ".";
    
});


function getNextNumber(){
    let nr = Number(inputNr.value);
    let nextNr = nr + 1;

return nextNr;

}
 