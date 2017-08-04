$(document).ready(function(){
    var rowMax = 96;
    var colMax = 96;
    $("body").append('<div class="container">');
    for(var i = 0; i < rowMax; i++){
      $(".container").append('<div class="row" id="row' + i + '">');
      for (var j = 0; j < colMax; j++){
        $("#row" + i).append('<div class="square" id ="square' + i + j + '">');
      }
    }
    $(".square").hover(function(){
        $(this).css("background-color", "grey");
    });
});
