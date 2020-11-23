//"чистит" значение инпутов
export const clearInputs = inputs => inputs.forEach(inp => inp.value = "")
// проверяет, все ли инпуты в данной форме заполнены верно
export const numberInInput = inp => Number(inp.value);
// добавляет маски ко всем инпутам
export function addMasks()
{
    $('#phone').mask('+7-000-000-00-00');
    $('#mail').mask("A", {
        translation: {
            "A": { pattern: /[\w@\-.+]/, recursive: true }
        }
    });
    $('input[type=number]').mask('ZZZ', {
        translation: {
          'Z': {
            pattern: /[0-9]/, optional: true
          }
        }
    })
    $('input[type=text]').mask("АААААААААААА", {
        translation: {
          'А': {
            pattern: /^[а-яё]+$/i, optional: true
          }
        }
    })
}
// проверяет, если инпут заполнен правильно, отображает галочку рядом с ним, иначе - сообщение об ошибке


