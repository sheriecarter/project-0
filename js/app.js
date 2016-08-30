

$(document).ready(function() {

  var distance=0;
  $(document).on("keydown", function(e){
    var akey=65;
    var lkey=76;
    if (e.which===akey){
      distance+=2;
      console.log(distance)
      $("#player1").animate({
        left: distance + "%"
      }, 300, function(){
        // animation complete
      })
    }
    if (e.which===lkey){
      distance+=2;
      console.log(distance)
      $("#player2").animate({
        left: distance + "%"
      }, 300, function(){
        // animation complete
      })
    }
  })




























});
