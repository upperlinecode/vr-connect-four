var turn = 0

$(document).ready(function(){
  for (var x = 0; x < 7; x++) {
    for (var y = 0; y < 6; y++) {
      $("a-scene").append("<a-box position='" + x.toString()+ " "+ y.toString() + " -2"+"' color='red' metalness='0.5' scale='0.5 0.5 0.5'><a-animation attribute='rotation' begin='click' to='0 360 0'><a-animation attribute='color' begin='red' to='blue'></a-box>")

    }
  }

  $("a-box").click(function(){
    if(turn % 2 == 0){
      $(this).attr('color', 'blue')
    }else{
        $(this).attr('color', 'green')
    }
    turn++;
    console.log(turn)
  })
})
