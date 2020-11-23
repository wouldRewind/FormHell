const orderForm = document.getElementById("order");
const len = document.getElementById("len");
const hi = document.getElementById("hi");

const lenAccess = document.getElementById("lenAccess");
const lenError = document.getElementById("lenError");
const hiDisp =  document.getElementById("hiDisp")
const lenDisp = document.getElementById("lenDisp")

// const hiDisps = document.querySelectorAll(".hiDisp");
// const hiLens = document.querySelectorAll(".hiLen");

const montage = document.getElementById("montage")

const hiAccess = document.getElementById("hiAccess");
const hiError = document.getElementById("hiError");

const sum = [...document.querySelectorAll(".sum")]

const contBtn = document.getElementById("continue");

const changeEnding = function(value,container)
{
    switch (value) {
        case 1:
        container.textContent = "метр"    
            break;
        case 2:
            container.textContent = "метра"
            break;
        case 3:
            container.textContent = "метра"
            break;
        case 4:
            container.textContent = "метра"
            break;
        case 5:
            container.textContent = "метров"
            break;
        case 6:
            container.textContent = "метров"
            break;
        case 7:
            container.textContent = "метров"
            break;
        case 8:
            container.textContent = "метров"
            break;
        case 9:
            container.textContent = "метров"
            break;
        default:
            container.textContent = "метров"
            break;
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
    changeEnding(e.target.value % 10,lenDisp)
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
    changeEnding(e.target.value % 10,hiDisp)
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


contBtn.addEventListener("click",function()
{
    if(contBtn.classList.contains("active"))
    {
        const contacts = document.getElementById("contacts");

        orderForm.classList.add("hidden")
        contacts.classList.remove("hidden")
        contBtn.classList.add("pressed")     

        completePurchase();
        navBtn.classList.remove("hidden");
    }
})
