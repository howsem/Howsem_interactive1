var howsemSearch;
var howsemButton;
var savestring;
var hi;


function preload() {

  // PICK A RANDOM NUMBER BETWEEN 1 and 3
  var rnum = int(random(1,5));
  hi = loadStrings("text/text" + rnum + ".txt");

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

  // WHEN SUBMIT SEARCH IS PRESSED, RUN THE FUNCTION CALLED SEARCHTEXT
  howsemButton.mousePressed(searchText);

}

function searchText() {

  // GET THE VALUE OF THE SEARCH BOX
  searchtext = howsemSearch.value();

  // CONVERT TXT FILE INTO A SEARCHABLE "STRING"
  var hi2 = hi + "";

  // CREATE THE STARTING PLACE FOR EACH SEARCH TERM
  var searchindex = 0;

  // CREATE THE COUNT FOR EACH TERM
  var searchindexcount = 0;

  // AS LONG AS THE SEACH IS NOT EMPTY ...
  while (hi2.indexOf(searchtext,searchindex) != -1){

    searchindex = searchindex + 1;

    if (him == searchindex - 1){

      // SEARCH UNTIL YOU FIND IT ....
      searchindexcount = searchindexcount + 1;
    }

    var him = hi2.indexOf(searchtext,searchindex);

  };


  var parcontainer = document.getElementById('input-here');
  var counters = createP(searchtext+" ("+searchindexcount+")").addClass('counted');
  counters.parent(parcontainer);

}
