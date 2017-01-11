$(document).ready(function(){
  $('.codeImg').attr("src","images/codeBlue.png"); //Default code button to blue

  $('.codeButton').click(function(){ //Code button pressed
    $('.codeImg').attr("src","images/codeBlue.png");
    $('.designImg').attr("src","images/design.png");
    $('.pasImg').attr("src","images/passion.png");
    $('.codeDets').show();
    $('.designDets').hide();
    $('.passionDets').hide();
  });
  $('.desButton').click(function(){ //Design button pressed
    $('.codeImg').attr("src","images/code.png");
    $('.designImg').attr("src","images/designBlue.png");
    $('.pasImg').attr("src","images/passion.png");
    $('.codeDets').hide();
    $('.designDets').show();
    $('.passionDets').hide();
  });
  $('.pasButton').click(function(){ //Passion button pressed
    $('.codeImg').attr("src","images/code.png");
    $('.designImg').attr("src","images/design.png");
    $('.pasImg').attr("src","images/passionBlue.png");
    $('.codeDets').hide();
    $('.designDets').hide();
    $('.passionDets').show();
  });
});
