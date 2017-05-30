var turn = 0
var board = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
]



$(document).ready(function(){
  for (var x = 0; x < 7; x++) {
    for (var y = 0; y < 6; y++) {
      $("a-scene").append("<a-box coordinates='" + x + " "+ (5-y) + " '"+ "position='" + x.toString()+ " "+ y.toString() + " -2"+"' color='red' metalness='0.5' scale='0.5 0.5 0.5'><a-animation attribute='rotation' begin='click' to='0 360 0'></a-box>")

    }
  }

  $("a-box").click(function(){
    if(turn % 2 == 0){
      $(this).attr('color', 'blue')
      var spot = $(this).attr('coordinates').split(" ")
      var row = parseInt(spot[1])
      var column = parseInt(spot[0])
      board[row][column] = 1
    }else{
        $(this).attr('color', 'lime')
        var spot = $(this).attr('coordinates').split(" ")
        var row = parseInt(spot[1])
        var column = parseInt(spot[0])
        board[row][column] = 2

    }
    turn++;
     console.log(board)
    // console.log(turn)
  })
})


// update board array when someone clicks on a cube
// Get x and y position of clicked cube and then use that to update the board
