const orderForm = document.getElementById("order");
const len = document.getElementById("len");
const hi = document.getElementById("hi");

const lenAccess = document.getElementById("lenAccess");
const lenError = document.getElementById("lenError");
const hiDisp =  document.getElementById("hiDisp")
const lenDisp = document.getElementById("lenDisp")

const lenDisps = Array.from(document.querySelectorAll(".lenDisp"))
const hiDisps = Array.from(document.querySelectorAll(".hiDisp"))

// const hiDisps = document.querySelectorAll(".hiDisp");
// const hiLens = document.querySelectorAll(".hiLen");

const montage = document.getElementById("montage")

const hiAccess = document.getElementById("hiAccess");
const hiError = document.getElementById("hiError");

const sum = [...document.querySelectorAll(".sum")]

const contBtn = document.getElementById("continue");



const changeEnding = function(value,container)
{
    //lenDisp, hiDisp
    const lastTwo = value % 100;
    const lastDigit = value % 10;
    if(lastTwo > 10 && lastTwo < 20)
    container.forEach(item => item.textContent = "метров" )
    else{
        switch (lastDigit) {
            case 1:
                container.forEach(item => item.textContent = "метр" )
                break;
            case 2:
                container.forEach(item => item.textContent = "метра" )
                break;
            case 3:
                container.forEach(item => item.textContent = "метра" )
                break;
            case 4:
                container.forEach(item => item.textContent = "метра" )
                break;
            case 5:
                container.forEach(item => item.textContent = "метров" )
                break;
            case 6:
                container.forEach(item => item.textContent = "метров" )
                break;
            case 7:
                container.forEach(item => item.textContent = "метров" )
                break;
            case 8:
                container.forEach(item => item.textContent = "метров" )
                break;
            case 9:
                container.forEach(item => item.textContent = "метров" )
                break;
            default:
                container.forEach(item => item.textContent = "метров" )
                break;
        }
    }
    
}

const material = document.getElementById("material")



const calculSum = function()
{
    if(!contBtn.classList.contains("active"))
    {
        sum.forEach(item => item.textContent = 0)
    }
    else {
        sum.forEach(item => item.textContent = (len.value * hi.value * material.value + (montage.checked ? 200 : 0)).toFixed(2))
    }
}

const allowBtn = function()
{
    if(hiAccess.classList.contains("visible") && lenAccess.classList.contains("visible"))
        contBtn.classList.add("active")
    else
        contBtn.classList.remove("active")
        contBtn.classList.remove("pressed")
}


len.addEventListener("input",function(e)
{ 
    if(Number(e.target.value))
    {
        lenAccess.classList.add("visible");
        lenError.classList.remove("visible")
    }
    else {
        lenAccess.classList.remove("visible");
        lenError.classList.add("visible")
    }
    allowBtn();
    changeEnding(e.target.value,lenDisps)
    calculSum()
    
});

hi.addEventListener("input",function(e)
{
    if(Number(e.target.value))
    {
        hiAccess.classList.add("visible");
        hiError.classList.remove("visible")
    }
    else {
        hiAccess.classList.remove("visible");
        hiError.classList.add("visible")
    }
    allowBtn()
    changeEnding(e.target.value,hiDisps)
    calculSum()

});
material.addEventListener("change",function()
{
    calculSum();
})

montage.addEventListener("change",function()
{
    calculSum();
})

function completePurchase()
{
    const length = document.getElementById("length");
    const height = document.getElementById("height");

    length.textContent = len.value;
    height.textContent = hi.value;

}


contBtn.addEventListener("click",function(e)
{
    if(contBtn.classList.contains("active"))
    {
        const contacts = document.getElementById("contacts");
        
        const mat = document.getElementById("mat");
        switch (+material.value) {
            case 200:
                mat.textContent = "сетка";
                break;
            case 400:
                mat.textContent = "профнастил";
                break;
            case 700:
                mat.textContent = "бетон";
                break;
            case 500:
                mat.textContent = "модули"
                break;
            default:
                break;
        }

        orderForm.classList.add("hidden")
        contacts.classList.remove("hidden")
        contBtn.classList.add("pressed")     

        completePurchase();
        navBtn.classList.remove("hidden");
    }
    else 
        e.preventDefault();
})
