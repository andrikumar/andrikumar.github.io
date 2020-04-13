const app = {

initialize: function () {
    //listener one
      $('.click').dblclick(function(){
        app.leave();
  });
      //listener two
  $('.impatient').mouseover(function(){
     app.highlight();
     app.remove();
});
//listener four
$('.heading').click(function(){
   app.hideIt();
});

},
//basic function 1!
leave: function() {
   $('.calm').text("please calm down");
   $( ".click" ).remove();
    $('.impatient').text("has anyone every told you that you are impatient");
},
//basic function 2!
highlight: function() {
  $(".impatient").mouseover(function(){
    $(".impatient").css("background-color", "yellow");
    $("#sectionTwo").delay(4000).fadeIn();
    $('.lastPoint').text("*eye roll*");

  });
  $(".impatient").mouseout(function(){
    $(".impatient").css("background-color", "white");
  });
},
//basic function 3!
remove: function() {
//listener three
  $('.lastPoint').click(function() {
$( ".lastPoint" ).hide();
});
},

hideIt: function() {
   $( ".heading" ).hide();
}
}
