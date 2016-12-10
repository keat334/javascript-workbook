'use strict';

$(document).ready(function() {
  // You code here

var getGistsSettings = {


};

var getGistSettings = {


};

var getGistComments = {


}; 



  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
  success: function(response) {
    response.forEach(function(gists){
      var IDS = gists.id;
      var str = gists.description;
      //$('#posts').append(str);
      console.log(IDS + '  ' + str);
      //$('#names').append('<tr>' + '<td>' + user.id + '</td>' + '<td>' + user.first_name + '</td>' + '<td>' + user.last_name + '</td>' + '<td>' + '<a href="#" data-id="' + user.id + '">view</a></td>' + '</tr>');
})
  }


});



$.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json')



});
