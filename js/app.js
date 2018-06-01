
$(document).ready(function(){
  // Code goes here

  var move = 1;
  var play = true;

  $("td").click(function() {
    if ($(this).text()=="" && play) {
      if ((move%2)==1) {
        $(this).append("X"),
        $(this).addClass("X");
      }
      else {
        $(this).append("O"),
        $(this).addClass("O"); }
      move++;
    }
    console.log($(this. text));
  });


  //-------------------------------------



  //-------------------------------------

  $("#reset").click(function(event){
    console.log(event);
    // $("td").attr("id", "reset")
    $("td").removeClass("X");
    $("td").removeClass("O");

    $("td").text("");


  });

  // $("table").click(function{
  //
  // })
});

//------------------------------------------------
