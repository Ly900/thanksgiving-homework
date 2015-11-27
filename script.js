$(document).ready(function() {

$("#submit_button").on("click", function(evt) {
  evt.preventDefault();
  var movie_name = $("#movie_name").val();
  var url = "http://www.omdbapi.com/?s=" + movie_name;
console.log(url);







})


}) //ends ready method
