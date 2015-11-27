$(document).ready(function() {

  $("#submit_button").on("click", function(evt) {
    evt.preventDefault();
    var movie_name = $("#movie_name").val();
    var url = "http://www.omdbapi.com/?s=" + movie_name;
    console.log(url);
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log(response);
      
    }).fail(function(){
        console.log("Ajax request fails!")
    }).always(function(){
        console.log("Ajax request sent.")
    })

  }) // ends on method

}) //ends ready method
