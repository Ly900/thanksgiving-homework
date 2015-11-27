$(document).ready(function() {

  $("#submit_button").on("click", function(evt) {
    evt.preventDefault();
    var movie_name = $("#movie_name").val();
    var url = "http://www.omdbapi.com/?s=" + movie_name;
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      var all_movies = response.Search;

      $("#movie_results_form").append(
        "<select id='movie_options'><option>Movies matching " + "\"" + movie_name + "\"..." + "</option></select>")

      for (var i=0; i < all_movies.length; i++) {
        $("#movie_options").append("<option>" + all_movies[i].Title + "</option>");
      }

    }).fail(function(){
    }).always(function(){
    })

  }) // ends on method

}) //ends ready method
