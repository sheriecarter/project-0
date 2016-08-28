

// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  // var topLeft= "topleft"
  // var 2= "$(#"topmiddle"
  // var 3="topright"
  // var 4="middleleft"
  // var 5="center"
  // var 6="middleright"
  // var 7="bottomleft"
  // var 8="bottommiddle"
  // var 9="bottomright"

  $(".box").on("click", function designate(event){
    var clickedBox =$(this)
    console.log ('box clicked')

    if (box clicked) {
      greeting="hello"
    }
  });


function startGame() {
  document.turn = "X";
  <div id="whosturn">Its your turn</div>
  saywhosturn(document.turn +"play now");
}

function saywhosturn(message){
   document.getElementsbyID('message').innertext =message;
}
function nextMove(square{
  square.innterText=document.turn;
  switchTurn();
})
function switchTurn(){
  if (document.turn = "X"){
    document.turn = "O";

  } else {
    document.turn = "X";
  }
  setMessage("It's" + document.turn + " 's turn")
}
  // $(topleft)
  // $(topmiddle)
  // $(topright)
  // $(middleleft)
  // $(center)
  // $(middleright)
  // $(bottomleft)
  // $(bottommiddle)
  // $(bottomright)
});
