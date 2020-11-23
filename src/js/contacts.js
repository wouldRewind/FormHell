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

const minLen = 5;
const checkForValid = () =>
{
   if(nameAccess.classList.contains("visible")
   && phoneAccess.classList.contains("visible")
   && mailAccess.classList.contains("visible"))
   {
       sendBtn.classList.add("active")
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
