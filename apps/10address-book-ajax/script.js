'use strict';

$(document).ready(function() {
  // You code here


  
/*
$.ajax('http://jsonplaceholder.typicode.com/users', {
  success: function(response) {
    for (var i = 0; i < response.length; i++) {
      console.log(response[i]['name']);
    }
  }
});
*/


$.ajax('https://reqres-api.herokuapp.com/api/users', {
  success: function(response) {
    response.forEach(function(user){
      var IDS = user.id;
      var str = '<tr>' + 
      '<td>' + 
      user.id + 
      '</td>' + 
      '<td>' + 
      user.first_name + 
      '</td>' + 
      '<td>' + 
      user.last_name + 
      '</td>' + 
      '<td>' + 
      '<a href="#" data-id="' + IDS + '">view</a></td>' + 
      '</tr>';
      $('#names').append(str);
      console.log(IDS);
      //$('#names').append('<tr>' + '<td>' + user.id + '</td>' + '<td>' + user.first_name + '</td>' + '<td>' + user.last_name + '</td>' + '<td>' + '<a href="#" data-id="' + user.id + '">view</a></td>' + '</tr>');
})
  }


});
 
 $('#names').on('click', 'a',function(){
    event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
    var id = $(this).data("id");
    var url = 'https://reqres-api.herokuapp.com/api/users/' + id;

    console.log(id);


    $.ajax(url, {
  success: function(user) {
    
      var IDS = user.id;
      /*
      var partOne = IDS.substring(0, 1);
      var partTwo = IDS.substring(1, 4);
      var partThree = IDS.substring(4,7);
      var partFour = IDS.substring(7,11);
      var phone_Num = '(' + part_One + ')' + '(' + part_Two + ')' + '(' + part_Three + ')' + '(' part_Four + ')';
     */

      var str = '<tr>' + 
      '<td>' + 
      '<h3>' + user.first_name + '  ' + user.last_name + '</h3>' + 
      '</td>' + 
    '<td>' + 
    '<h4>' + user.occupation + '</h4>' + 
    '</td>' + 
    '<td>' + 
    '<p>' + user.phone + '</p>' + 
    '</td>' + 
    '<td>' + 
    '<p>' + 
      user.address + 
    '</p>' + 
    '</td>' + 
    '<td>' + 
    '<img src=' + user.avatar + '>'
    '</td>';
    
      $('#profile').html(str);
      console.log(IDS);
      //$('#names').append('<tr>' + '<td>' + user.id + '</td>' + '<td>' + user.first_name + '</td>' + '<td>' + user.last_name + '</td>' + '<td>' + '<a href="#" data-id="' + user.id + '">view</a></td>' + '</tr>');
}
  
});
 
});



 

/*
$(this).click(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
        event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
        var id = $(this).data("id");
        var url = 'https://reqres-api.herokuapp.com/api/users/' + id;

        console.log( id ); // let's log out our "this" context (our form element) as a jQuery object
      });
*/

});
