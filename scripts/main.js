$(document).ready(function(){
  var startGridSize = 16;
  var newGridSize = startGridSize;
  buildGrid(startGridSize);

  $("#set-btn").click(function(){
    newGridSize = prompt("Choose a new grid size between 1 and 72", newGridSize);
    if ((newGridSize <= 72) && (newGridSize >= 1)){
      buildGrid(newGridSize);
    }
    else{
      alert("Invalid size.")
      $("#set-btn").click();
    }
  });

  function buildGrid(grid){
    var rowLimit = grid;
    var colLimit = grid;

    $(".container").remove();

    $("body").append('<div class="container">');
    for(var i = 0; i < rowLimit; i++){
      $(".container").append('<div class="row" id="row' + i + '">');
      for (var j = 0; j < colLimit; j++){
        $("#row" + i).append('<div class="square" id ="square' + i + j + '">');
      }
    }

    $(".square").on( "mouseenter", function(){
      var newOpacity = parseFloat($(this).css("opacity")) + 0.1;
      $(this).css("opacity", newOpacity);
    });

    var squareWidth = $(".container").width()/grid;
    var squareHeight = $(".container").height()/grid;
    $(".square").css("width", squareWidth + "px");
    $(".row").css("height", squareHeight + "px");
  }
});
