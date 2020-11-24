
const contactForm = document.getElementById("contacts")
const name = document.getElementById("name")
const mail = document.getElementById("mail")
const sendBtn = document.getElementById("send")
const phone = document.getElementById("phone")

const mailAccess = document.getElementById("mailAccess")
const mailError = document.getElementById("mailError")

const phoneAccess = document.getElementById("phoneAccess")
const phoneError = document.getElementById("phoneError")

const nameAccess = document.getElementById("nameAccess")
const nameError = document.getElementById("nameError")

const navBtn = document.getElementById("nav");

const success = document.querySelector(".success")

const minLen = 5;

const closeBtn = document.getElementById("close")
const checkForValid = () =>
{
   if(nameAccess.classList.contains("visible")
   && phoneAccess.classList.contains("visible")
   && mailAccess.classList.contains("visible"))
   {
       sendBtn.classList.add("active")
   }
   else{
    sendBtn.classList.remove("active")
   }
}

name.addEventListener("input",function()
{
    const minName = 3;
    console.log();
    if(name.value.length > minName)
    {
        nameAccess.classList.add("visible");
        nameError.classList.remove("visible")
    }
    else{
        nameAccess.classList.remove("visible");
        nameError.classList.add("visible")
    }
    checkForValid()
})
mail.addEventListener("input",function()
{
    if(mail.value.length > minLen && mail.value.includes("@mail.ru"))
    {
        mailAccess.classList.add("visible");
        mailError.classList.remove("visible")
    }
    else {
        mailAccess.classList.remove("visible");
        mailError.classList.add("visible")
    }
    checkForValid()
})
phone.addEventListener("input",function()
{
    if(phone.value.length == 16)
    {
        phoneAccess.classList.add("visible")
        phoneError.classList.remove("visible")
    }
    else {
        phoneAccess.classList.remove("visible")
        phoneError.classList.add("visible")
    }
    checkForValid()
})

navBtn.addEventListener("click",function()
{
    orderForm.classList.remove("hidden");
    contactForm.classList.add("hidden")
    navBtn.classList.add("hidden")
})

sendBtn.addEventListener("click",function()
{
    if(sendBtn.classList.contains("active"))
    {
        contactForm.classList.add("hidden")
        success.classList.remove("hidden")
        document.getElementById("nav").classList.add("hidden")
        closeBtn.classList.remove("hidden")

    const successMail = document.querySelector(".success__mail");
    successMail.textContent = mail.value;

    const userName = document.querySelector(".success__name")
    userName.textContent = name.value
    }
})

const clearInputs = inputs => inputs.forEach(inp => inp.value = "")

closeBtn.addEventListener("click",function()
{
    success.classList.add("hidden");
    orderForm.classList.remove("hidden")
    clearInputs(
        Array.from(
            document.querySelectorAll("input")
        )
    )
    Array.from(document.querySelectorAll(".visible")).forEach(item => item.classList.remove("visible"));
    closeBtn.classList.add("hidden");
    contBtn.classList.remove("pressed");
    contBtn.classList.remove("active");
    sendBtn.classList.remove("active");
    sum.forEach(item => item.textContent = "0")
    montage.checked = false;

})