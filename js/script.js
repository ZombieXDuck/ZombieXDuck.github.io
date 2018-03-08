$(document).ready(function(){
  $('.heroButton').click(function(event){
      $('html, body').animate({
          scrollTop: $('.about').offset().top
      }, 1000);
      event.preventDefault();
  });

  $('#passion-button').click(function(event){
      $('html, body').animate({
          scrollTop: $('#work').offset().top
      }, 1000);
      event.preventDefault();
  });

  $('#back-to-top-button').click(function(event){
      $('html, body').animate({
          scrollTop: $('#hero').offset().top
      }, 500);
      event.preventDefault();
  });
});
