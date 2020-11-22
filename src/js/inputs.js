//"чистит" значение инпутов
export const clearInputs = inputs => inputs.forEach(inp => inp.value = "")
// проверяет, все ли инпуты в данной форме заполнены верно
export const numberInInput = inp => Number(inp.value);
//

