$(function() {
  var maxLength = 140;
  var currentCharacters = $('#comentarios').val().length;
  // 
  $('#contador').html(maxLength + 'caracteres restantes');

  $('#comentarios').keyup(function characterNumberEntered() {
    var newCharacters = maxLength - $('#comentarios').val().length;
    $('#contador').html(newCharacters + 'caracteres restantes');
  });
});