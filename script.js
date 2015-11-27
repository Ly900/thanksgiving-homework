$(document).ready(function() {
  $("#movie_options").hide();

  $("#submit_button").on("click", function(evt) {
    evt.preventDefault();
    $("#movie_options").show();
    var movie_name = $("#movie_name").val();
    var url = "http://www.omdbapi.com/?s=" + movie_name;
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      var movie_name = $("#movie_name").val();
      var all_movies = response.Search;
      console.log(movie_name)
      console.log(url)

      // lists the movie titles from the response object as option elements in the select element created earlier
      for (var i=0; i < all_movies.length; i++) {
        $("#movie_options").append("<option><a href='google.com'>" + all_movies[i].Title +   "</a></option>");
        var movie_name = $("#movie_name").val();
      }

      // clears input field
      $("#movie_name").val("");



    }).fail(function(){
    }).always(function(){
    })

  }) // ends on method

}) //ends ready method
