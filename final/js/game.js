$( document ).ready(function() {

var discardCount = 0;
var convictCount = 0;

console.log ("current dicard count starts at " + discardCount);
console.log ("current convict starts at" + convictCount);

  $( ".discard" ).click(function() {

    discardCount = discardCount + 1;
    console.log ("the current count is" + discardCount);

    if (discardCount>2) {
    window.location.replace("final_Win.html");
    }

  });

  $( ".convict" ).click(function() {

    convictCount = convictCount + 1;
    console.log ("the current CONVICT count is " + convictCount);

    if (convictCount>2) {
    window.location.replace("final_lose.html");
    }

  });
  $(".submitsearch").click(function(){
      $('.hint').addClass('off');
  });

});
