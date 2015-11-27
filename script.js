$(document).ready(function() {

  $("#movie_options").hide();


  // Search Form and Button:
  $("#submit_button").on("click", function(evt) {
    evt.preventDefault();
    var movie_name = $("#movie_name").val();
    // clears input field
    $("#movie_name").val("");
    moviesSearch(movie_name);
  }) // ends on method


  // Search for Movie using movie_name
  function moviesSearch(movie_name) {
    var url = "http://www.omdbapi.com/?s=" + movie_name;
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    })
    .done(function(response){
      moviesFound(movie_name, response);
    })
    .fail(function(){
    }).always(function(){
    })
  } // Ends findMovie


  // Use movie_name and ajax response object to list out movie titles
  function moviesFound(movie_name, response) {
    $("#movie_options").append("<option>Movies matching " + "\"" + movie_name + "\"" + "</option>");
    var all_movies = response.Search;
    for (var i=0; i < all_movies.length; i++) {
      $("#movie_options").append("<option><a href='google.com'>" + all_movies[i].Title +   "</a></option>");
    }
    $("#movie_options").show(); 
  }
      // lists the movie titles from the response object as option elements in the select element created earlier


      // Shows options





}) //ends ready method
