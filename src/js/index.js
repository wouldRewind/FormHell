// работа с формами
const inputs = Array.from(document.querySelectorAll(".input"))
import {addMasks} from "./inputs.js"
$(document).ready(function()
{
  addMasks();
})

window.onload = function()
{
  setTimeout(function(){
    document.querySelector(".llpopup").remove();
Array.from(
  document.querySelectorAll("iframe")
)
.forEach(item => item.remove())
  },1000)
}


