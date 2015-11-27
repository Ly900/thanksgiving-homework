$(document).ready(function() {

  $("#movie_options").hide();


  // Search Form and Button:
  $("#submit_button").on("click", function(evt) {
    evt.preventDefault();
    var movie_name = $("#movie_name").val();
    // clears input field
    $("#movie_name").val("");
    movieSearch(movie_name);
  }) // ends on method


  // Search for Movie using movie_name
  function movieSearch(movie_name) {
    var url = "http://www.omdbapi.com/?s=" + movie_name;
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    })
    .done(function(response){
      movieFound(movie_name, response);
    })
    .fail(function(){
    }).always(function(){
    })
  } // Ends findMovie


  // 
  function movieFound(movie_name, response) {
    $("#movie_options").show();
    var all_movies = response.Search;
    console.log(all_movies);
  }
      // lists the movie titles from the response object as option elements in the select element created earlier
      for (var i=0; i < all_movies.length; i++) {
        $("#movie_options").append("<option><a href='google.com'>" + all_movies[i].Title +   "</a></option>");
        var movie_name = $("#movie_name").val();
      }

      // Shows options





}) //ends ready method
