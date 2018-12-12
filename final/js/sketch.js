var howsemSearch;
var howsemButton;
var savestring;
var hi;

var judgecount = 0;

var shuffle1 = [1, 2, 4, 5, 3];
var shuffle2 = [5, 4, 1, 3, 2];
var shuffle3 = [3, 5, 4, 2, 1];
var shuffle4 = [2, 1, 3, 5, 4];
var shuffle5 = [4, 2, 3, 1, 5];

var thisshuffle = [0, 0, 0, 0, 0];


function preload() {

  // PICK A RANDOM NUMBER BETWEEN 1 and 4
  var pickrandom = int(random(1, 5));


  if (pickrandom == 1) {
    thisshuffle = shuffle1
  } else if (pickrandom == 2) {
    thisshuffle = shuffle2
  } else if (pickrandom == 3) {
    thisshuffle = shuffle3
  } else {
    thisshuffle = shuffle4
  }

  hi = loadStrings("text/text" + thisshuffle[0] + ".txt");
  hi2 = loadStrings("text/text" + thisshuffle[1] + ".txt");
  hi3 = loadStrings("text/text" + thisshuffle[2] + ".txt");
  hi4 = loadStrings("text/text" + thisshuffle[3] + ".txt");
  hi5 = loadStrings("text/text" + thisshuffle[4] + ".txt");

}


function setup() {

  noCanvas();

  // REFERENCE THE EXISTING HTML ELEMENT WITH ID 'text-here'
  var parcontainer = document.getElementById('text-here');

  // CREATE A NEW PARAGRAPH WITH ALL THE TEXT FROM THE .TX FILE
  var parchild = createP(join(hi, "<br/>")).addClass("randompar");

  // PUT THAT TEXT INSIDE THE HTML ELEMENT (FROM ABOVE)
  parchild.parent(parcontainer);

  // REFERENCE THE EXISTING HTML ELEMENT WITH ID '#searchbox'
  howsemSearch = select('#searchbox');

  // REFERENCE THE EXISTING HTML ELEMENT WITH ID '#submitsearch'
  howsemButton = select('#submitsearch');

  // REFERENCE THE EXISTING HTML ELEMENT WITH ID '#click2judge'
  howsemJudge = select('#click2judge');



  // WHEN SUBMIT SEARCH IS PRESSED, RUN THE FUNCTION CALLED SEARCHTEXT
  howsemJudge.mousePressed(judge);
  howsemButton.mousePressed(searchText);


}

function judge() {



  if (judgecount == 0) {

    var parcontainer = document.getElementById('text-here');
    select('.randompar').html("");

    hi = hi2;
    var parchild = createP(join(hi, "<br/>")).addClass("randompar2");
    parchild.parent(parcontainer);

    console.log("I judged 1 time");

  } else if (judgecount == 1) {

    var parcontainer = document.getElementById('text-here');
    select('.randompar2').html("");

    hi = hi3;
    var parchild = createP(join(hi, "<br/>")).addClass("randompar3");
    parchild.parent(parcontainer);

    console.log("I judged 2 times");

  } else if (judgecount == 2) {

    var parcontainer = document.getElementById('text-here');
    select('.randompar3').html("");

    hi = hi4;
    var parchild = createP(join(hi, "<br/>")).addClass("randompar4");
    parchild.parent(parcontainer);

    console.log("I judged 3 times");

  } else {

    var parcontainer = document.getElementById('text-here');
    select('.randompar4').html("");

    hi = hi5;
    var parchild = createP(join(hi, "<br/>")).addClass("randompar5");
    parchild.parent(parcontainer);

    console.log("I judged 4 times");

  }

  judgecount = judgecount + 1;

}

function searchText() {

  // GET THE VALUE OF THE SEARCH BOX
  searchtext = howsemSearch.value();

  // CONVERT TXT FILE INTO A SEARCHABLE "STRING"
  var hiSearch = hi + "";

  // CREATE THE STARTING PLACE FOR EACH SEARCH TERM
  var searchindex = 0;

  // CREATE THE COUNT FOR EACH TERM
  var searchindexcount = 0;

  // AS LONG AS THE SEACH IS NOT EMPTY ...
  while (hiSearch.indexOf(searchtext, searchindex) != -1) {

    searchindex = searchindex + 1;

    if (him == searchindex - 1) {

      // SEARCH UNTIL YOU FIND IT ....
      searchindexcount = searchindexcount + 1;
    }

    var him = hiSearch.indexOf(searchtext, searchindex);

  };


  var parcontainer = document.getElementById('input-here');
  var counters = createP(searchtext + " (" + searchindexcount + ")").addClass('counted');
  counters.parent(parcontainer);

}
