var vowels = ["a", "e", "i", "o", "u"]

//sentence.charAt(0);


var pigLatin = function(sentence) {
  for (var v = 0; v < vowels.length; v++) {
    if (vowels[v] === sentence[0]) {
      $("#output").text(sentence + "way");

    } else if (sentence[0] === "q") {
      var letter1 = sentence.charAt(0);
      var letter2 = sentence.charAt(1);
      var conSentence2 = sentence.substr(2);
      $("#output").text(conSentence2 + "quay")

      } else if (vowels[v] !== sentence[0]) {
          var letter1 = sentence.charAt(0);
          var conSentence = sentence.substr(1);
          $("#output").text(conSentence + letter1 + "ay")

    }
  }
}

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    $("#output").text(sentence + "way");
    event.preventDefault();

    var sentence = $("#textInput").val();


//    var temporary = input.split();
//    var temp2 = temporary.shift();
//    var sentence = temp2.join();

    pigLatin(sentence);

  });
});
