import {numberInInput} from "./inputs.js";

const numInputs = Array.from(document.querySelectorAll("input[type=number]"));

numInputs.forEach(inp => {
    inp.addEventListener("focusout",function()
    {
        
        if(numberInInput(inp)) 
    })
})