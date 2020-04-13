const app = {

initialize: function () {
      $('.click').dblclick(function(){
        app.leave();
  });
  $('.impatient').mouseover(function(){
     app.highlight();
});



},

leave: function() {
   $('.calm').text("please calm down");
   $( ".click" ).remove();
    $('.impatient').text("has anyone every told you that you are impatient");
},

highlight: function() {
  $(".impatient").mouseover(function(){
    $(".impatient").css("background-color", "yellow");
    $("#sectionTwo").delay(4000).fadeIn();
    $('.lastPoint').text("*eye roll*");
  });
  $(".impatient").mouseout(function(){
    $(".impatient").css("background-color", "white");
  });



}
}
