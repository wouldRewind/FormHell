// работа с формами
const inputs = Array.from(document.querySelectorAll(".input"))
import {addMasks} from "./inputs.js"
$(document).ready(function()
{
  addMasks();
})