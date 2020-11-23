// работа с формами
$(document).ready(function()
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
        

})