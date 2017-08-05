$(document).ready(function(){
  var startGridSize = 16;
  var newGridSize = startGridSize;
  buildGrid(startGridSize);

  $("#set-btn").click(function(){
    newGridSize = prompt("Enter new grid size", newGridSize);
    buildGrid(newGridSize);
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
      $(this).css("background-color", "grey");
    });

    var squareWidth = $(".container").width()/grid;
    var squareHeight = $(".container").height()/grid;
    $(".square").css("width", squareWidth + "px");
    $(".row").css("height", squareHeight + "px");
  }
});
