import _ from 'underscore';
import $ from 'jquery';
import 'jquery-colpick';
import Postit from './models/postit.js';
import PostitNotes from './collections/postit_notes.js';


var postitData = [{
    text: "Backbone is a library not a Framework.",
    color: "#AC1200"
},
{
    text: "That means it doesn't dictate to you how the code is structured",
    color: "#752310"
}];

var newPostit = new Postit({
  text: "blablabla",
  color: "#752310"
});

var myPostitNotes = new PostitNotes(postitData);

var render = function(postit) {
  var templateText = $('#postit-template').html();

  // create an underscore template object
  var templateObject = _.template(templateText);

  // Fill in the ERB wth data from our task
  var compiledHTML = templateObject(postit.toJSON());

// append the result to the DOM
  $('#postits').append(compiledHTML);
  console.log(compiledHTML);

};

var renderPostitNotes = function(postitNotes) {
  $('#postits').empty();

  postitNotes.each(function(note){
    render(note);
  });
};

var getFormData = function() {
  var formText = $("#text").val();
  $("#text").val('');

  var formColor = $("#color").val();
  $("#color").val('#fdfd86');

  return {
    text: formText,
    color: formColor
  };
};


$(document).ready(function() {

  // render(newPostit);
  // console.log(newPostit);
  // console.log(newPostit.get("text"));

  renderPostitNotes(myPostitNotes);


  $(".success").click(function() {
    var formData = getFormData();
    var newPostit = new Postit(formData);
    // console.log(formData.completed);
    render(newPostit);
    // console.log(newTask.get("completed"));
  });


});

// end
