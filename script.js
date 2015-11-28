$(document).ready(function() {

  $("#movie_options").hide();
  $("#movie_poster_div").hide();

  // Search Form and Button:
  $("#submit_button").on("click", function(evt) {
    evt.preventDefault();
    var movie_name = $("#movie_name").val();
    // clears input field
    $("#movie_name").val("");
    $("h1#movie_title, #movie_poster_div").hide();
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
      moviesFound(movie_name, response);
    })
    .fail(function(){
    }).always(function(){
    })
  } // Ends findMovie


  // Use movie_name and ajax response object to list out movie titles
  function moviesFound(movie_name, response) {
    var options = "<option>Movies matching " + "\"" + movie_name + "\"" + "</option>";
    var all_movies = response.Search;
    for (var i=0; i < all_movies.length; i++) {
      var movie = all_movies[i];
      $("#movie_options").html(options += "<option value='" + movie.imdbID + "'>" + movie.Title + "</option>");
    }
    $("#movie_options").show();
    showInfo();
  }


  // Shows the movie's title and poster picture
  function showInfo(){
    $("#movie_options").on("change", function() {
      var url = "http://www.omdbapi.com/?i=" + this.value;
      $.ajax({
        url: url,
        type: "get",
        dataType: "json"
      })
      .done(function(response){
        $("#movie_title_div").html(response.Title);
        $("#movie_poster_div img").attr({"src": response.Poster, alt: "Poster of " + response.Title});
        $("h1#movie_title, #movie_poster_div").show();
      })
      .fail(function(){
      }).always(function(){
      }) //ends ajax request
    }) //ends on method
  } // ends showInfo

}) //ends ready method
