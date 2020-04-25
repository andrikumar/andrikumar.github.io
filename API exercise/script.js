const app = {
  initialize: function () {
    $('.prompt').click(function () {
      app.rover();
      app.toDo();
      $("button").remove();
      app.header();
      app.ending();
      app.collectDate();
    });
  
  },

  header: function() {
    //placing text for the heading/introduction
    $('.firstLine').text("its going to be okay");
    $('.secondLIne').text("did you know that Curiosity, the Mars Rover, is the only rover still activethe others have lost contact");
  },

  ending: function() {
    //placing text for the ending
    $('.thirdLine').text("being in the company of just your own presence can be a wonderful path to take");
    $('.fourthLine').text("or learn what Curiosity is doing today");
  },

  rover: function() {
    $.ajax({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=dRIKo0fwLmL6Wn73dUxAwbCekkgChgWYcALn3pTX',
      dataType: 'json',
      success: data => {
           app.displayImages(data);
      }
    })
  },

  toDo: function() {
    $.ajax({
      url: 'http://www.boredapi.com/api/activity?minaccessibility=0&maxaccessibility=0.1',
      dataType: 'json',
      success: data => {
        var activity = data.activity;
        app.listThings(activity);
      }
    })
  },

  displayImages: function (data) {
      //list of poetry
      var text = '{ "poems" : [' +
      '{ "lineOne":"John" , "lineTwo":"Doe" , "lineThree":"Hola" },' +
      '{ "lineOne":"Anna" , "lineTwo":"Smith" },' +
      '{ "lineOne":"Peter" , "lineTwo":"Jones" } ]}';
      var obj = JSON.parse(text);

      //selecting a random poem to display
      var r = Math.floor(Math.random() * 3) + 1;
      console.log(r);
      const values = Object.values(obj.poems[r])

      //going through the lines of a poem along with the images
      for (i = 0; i < 4;  i++) {
            //trying to remove every other image from the array 

            const img = $(`<div class="roverImage"><img src=${data.photos[i].img_src} /></div>`);
            $('.photosContainer').append(img);
              //breaking up the lines of poetry
              console.log(values[i]);
              $('.photosContainer').append(values[i]);
      
  }
},

  listThings: function (data) {
    //providing a task to do in isolation
    $('.todoContainer').html("today maybe " + data);
  },

  collectDate: function() {
    var today = new Date();
    var date = today.getDate();
    console.log(date);
  },

}

