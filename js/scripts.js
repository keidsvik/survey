
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var sign = $("#sign").val();
    var food = $("input:radio[name=food]:checked").val();
    var color = $("#fear").val();
    console.log("sign:", sign, "food:", food, "color:", color)

  //  var survey = $("#survey").select();
  //  alert(survey);
  
  });
});
