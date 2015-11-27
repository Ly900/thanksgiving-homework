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
      var movie = all_movies[i];
      $("#movie_options").append("<option value='" + movie.imdbID + "'>" + movie.Title + "</option>");
    }
    $("#movie_options").show();
  }


  // Shows the movie's title and poster picture
  function showInfo(movie_imbdID){
    console.log(movie.imbdID);
    var url = "http://www.omdbapi.com/?t=" + movie_imbdID;
    $("#movie_options").on("change", function() {
      $.ajax({
        url: url,
        type: "get",
        dataType: "json"
      })
      .done(function(response){
        console.log(movie_name)
      })
      .fail(function(){
      }).always(function(){
      }) //ends ajax request
    }) //ends on method
  } // ends showInfo


}) //ends ready method
