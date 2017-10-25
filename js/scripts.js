var vowels = ["a", "e", "i", "o", "u"]
var y = ["y"]



var pigLatin = function(sentence){
   for (var v = 0; v < vowels.length; v++){
    if (vowels[v] === sentence[0])
      sentence.charAt(0);
   }
   $("#output").text(sentence + "way");
 }

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    $("#output").text(sentence + "way");
    event.preventDefault();

    var input = $("#textInput").val();
    var sentence = input.substr(1);

//    var temporary = input.split();
//    var temp2 = temporary.shift();
//    var sentence = temp2.join();

    pigLatin(sentence);

  });
});
