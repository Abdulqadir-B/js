document.getElementById("btn1").addEventListener("click", () => {
    console.log("button1 is clicked");
    
})

document.getElementById("btn2").addEventListener("mouseover", () => {
    console.log("mouse over !!");
    
})

document.addEventListener("keydown", (e) => {
    const keyName = e.key;
    document.getElementById("keyname").innerHTML = `${keyName} is pressed`;
})

// NOTE : in the addEventListener() we can also give the 3rd parameter which by default is false,
// and if we give it true it means their will be event bubbling which will trigger the events from child elements to parent elements