// Para que estos eventos ocurran cuando la página haya cargado completamente, uso el evento load

window.addEventListener('load', function() {
  var button = document.querySelector('button');
  var textarea = document.querySelector('textarea'); 
  button.addEventListener('click', function() {
    // Condición if else que me permitirá habilitar y desabilitar mi botón dependiendo si tienen contenido o no 
    if (textarea.value !== '') {
      var sectionDivs = document.getElementsByTagName('section')[0];
      var div = document.createElement('div'); 
      var message = textarea.value; 
      var text = document.createTextNode(message);
      div.appendChild(text);    
      sectionDivs.appendChild(div);
      div.classList.add('divText');  
    } else {
      button.setAttribute('disabled', 'true');
    }
  });
});
  