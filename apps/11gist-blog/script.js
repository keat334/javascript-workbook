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
      var str = '<div class="box">' + 
                '<tr>' + 
                '<td>' + 
                '<a href = "#" data-url="' + gists.url + '">' + 
                '<h1 align="center">' + '<font face="Arial Black" color="green">' + newDesc + 
                '</font>' + 
                '</h1>' + 
                '</a>' + 
                '</td>' + 
                '</tr>'+ 
                '</div>';

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
      var str = '<div class="right_Side">' + 
         '<div class="box" id="details">' + 
         '<font face="monospace" color="red">' + 
         marked(post.files['post.md'].content) + 
         '</font>' + 
         '</div>' + 
         '</div>';     
      
      $('#comments').empty().append(str);
      

    } //end of success call
  }); //end ajax call

var urls = post.comments_url;


/*
 $.ajax(urls, {
    success: function(comments) {
      console.log('asd');
      //console.log(logins.user);
      $('#comments').empty();

         
        
    } //end of success call
  }); //end ajax call

*/

}); // end .on(click) method for posts


}); //End program

