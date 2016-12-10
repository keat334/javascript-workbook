'use strict';
$(document).ready(function() {
    $('form').submit(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
        
        //tells webpage to not refresh
        
        event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
        console.log( $(this) ); // let's log out our "this" context (our form element) as a jQuery object
      
        //data from form is submitted into a var here
        var value = $(this).find('input[type="text"]').val();

        //clears form input
        $(this).find('input[type="text"]').val('')

//put txt from form into div underneith
//    

//sends form data to body of html when submit is clicked
//add in checkbox to .append form
  $('#todo-list').append('<li>' + value + '<input type="checkbox">' + '</li>');

$( "#todo-list" ).sortable();
$( "#todo-list" ).disableSelection();

});

$("#Delete").on("click", function() {
  $(".checkbox input:checked").parent().remove();
});

//if statements for if a checkbox is selected to delete the <div>



  })