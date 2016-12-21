'use strict';

$(document).ready(function() {
  // You code here

  $.ajax('api/gists.json', {
  success: function(response) {
    response.forEach(function(gists){
      var IDS = gists.id;
      var url = gists.url;
      var desc = gists.description;
      var posts = desc.substring(0, 5);
      var newDesc = desc.substring(6);
      var str = '<tr>' + 
                '<td>' + 
                '<a href = "#" data-url="' + gists.url + '">' + newDesc + '</a>' + 
                '</td>' + 
                '</tr>';

      if(posts === '#post'){
        $('#post').append(str);     
      } //end if statement

      }) //end forEach function
  } //end success call
}); //end ajax call





$('#post').on('click', 'a',function(links){
  links.preventDefault();
  var URL = $(this).data('url');
  
  $.ajax(URL, {
    success: function(post) {
      var test = post.files;
      var str = '<div>' + '<h4>' + 'Post' + '</h4>' + marked(post.files['post.md'].content) + '</div>';     
      
      $('#comments').empty();
      $('#comments').append(str); 
      console.log('yes: ' + post.comments_url);

    } //end of success call
  }); //end ajax call

var urls = post.comments_url;

 $.ajax(urls, {
    success: function(comment) {
      console.log('asd');
      //console.log(logins.user);
      $('#post').empty();
        
          var commentt = '<li><span>' + comment.user.login + '</span> says "<span>' + comment.body + '"</span></li>';
          $('#post').append(commentt);
         
        
    } //end of success call
  }); //end ajax call



}); // end .on(click) method for posts


}); //End program

