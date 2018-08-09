$(document).ready(function() {
    var age = parseInt(prompt("How old are you?"));

    if (age > 20) {
      $('#legal').show();
    } else {
      $('#illegal').show();
    }
  });
