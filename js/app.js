

$(document).ready(function() {

  var animate;
  var original = null;

  function moveRight(imgObj, amountToMoveTotal, amountToMovePerStep, timeToWaitBeforeNextIncrement)
  {
      //Copy original image location
      if (original === null){
          original = parseInt(imgObj.style.left);
      }

      //Check if the image has moved the distance requested
      //If the image has not moved requested distance continue moving.
      if (parseInt(imgObj.style.left) < amountToMoveTotal) {
          imgObj.style.left = (parseInt(imgObj.style.left) + amountToMovePerStep) + 'px';

          animate = setTimeout(function(){moveRight(imgObj, amountToMoveTotal, amountToMovePerStep, timeToWaitBeforeNextIncrement);},timeToWaitBeforeNextIncrement);
      }else {
          imgObj.style.left = original;
          original = null;
          clearTimeout(animate);
      }
  }


// // reset
//   $reset = $('#reset');
//     $reset = $('#reset');
//     // back to beginning
//     var raceAgain = function() {
//       $reset.addClass('tmp-hidden');
//       $('.playerimages').css({left: 0});
//       winner = null;
//       };
// // reset button
//
// var executeWin = function() {
//
//   $reset.removeClass('tmp-hidden');
//   +  };
//
// }
// //
//  var movePlayer = function(keypressEvent) {
//     var keyCode = String.fromCharCode(keypressEvent.keyCode);
//     var $playerimages = $('[data-key="' + keyCode + '"]');
//      var leftPosition = $playerimages.offset().left;
// // Make Player move
//  $playerimages.css({left: leftPosition + 20});
//
// // how to win
// if ($playerimages.offset().left >= $('#track').width() - $playerimages.width()) {
//   winner = $player;
//   winner = $player;
//    }
// });
//
// // other
//  var race = function() {
//    $(window).on('keypress', function(event) {
//       if (!winner) {
//          movePlayer(event);
//        }
//         });
//         $reset.on('click', function() {
//           raceAgain();
//            });
//          };
// // Play
// race();

//
// var realwinner =document.getElementbyId("player1");
// var otherwinner=document.getElementbyId("player2")
//
// function determineWinner(endoftrack){
//   if(elplayer1.style.){
//     elMsg.textContent="You won";
//   }
// }
