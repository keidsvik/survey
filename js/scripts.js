var sign = $("#sign").val();

var food = $("input:radio[name=food]:checked").val();

var favoriteColor = $("#color").val();



$(document).ready(function() {
  $("form#survey").submit(function(event) {
   var survey = $("input#survey").val();
  
    event.preventDefault();
  });
});