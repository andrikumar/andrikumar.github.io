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
    $('.secondLine').append("did you know that Curiosity, the Mars Rover, is the only rover still active <br></br><br>the others have lost contact </br>");
},

  ending: function() {
    //placing text for the ending
    $('.thirdLine').append("being in the company of just your own presence can be a wonderful path to take<br></br>");
    $('.fourthLine').append("or <a href='https://twitter.com/MarsCuriosity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>learn</a> what Curiosity is doing today<br></br>");
    $('.fifthLine').text("Soon Perseverance, a new Rover, will be joining Curiosity ");
  },

  rover: function() {
var number = [2,4,8, 30];
var rando = Math.floor(Math.random() * 4);
var num = number[rando];

    $.ajax({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page='+num+'&api_key=dRIKo0fwLmL6Wn73dUxAwbCekkgChgWYcALn3pTX',
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
      '{ "lineOne":"I breathe the same air as the people I love", "lineTwo":"and the poeple I lost the particles of their existence" , "lineThree":"are still surrounding me and", "lineFour": "this loneliness does not know how to find me alone", "lineFive": "~Noor Unnahar"},' +
      '{ "lineOne":"And you were just like the moon" , "lineTwo":"so lonely, so full of imperfections", "lineThree": "but just like the moon, you", "lineFour": "shined in times of darkness", "lineFive":"~cw" },' +
      '{ "lineOne":"Last night I whispered" , "lineTwo":"a thank you note to the universe", "lineThree": "for it made oceans and stars equally beautiful", "lineFour": "and accessible for all of us", "lineFive": "~Noor Unnahar" },' +
      '{ "lineOne":"I am not a loner" , "lineTwo":"I prefer Introspection", "lineThree": "I weave my world", "lineFour": "With no fear of oblivion", "lineFive": "~Rinki Tiwari"  },' +
      '{ "lineOne":"Peter" , "lineTwo":"Jones" } ]}';
      var obj = JSON.parse(text);

      //selecting a random poem to display
      var r = Math.floor(Math.random() * 4);
      const values = Object.values(obj.poems[r])

      //going through the lines of a poem along with the images
      for (i = 0; i < 5;  i++) {
            //trying to remove every other image from the array 
        const newPhotoArray = data.photos.filter((photo, index) => {        
          // use two for even, one for odd
          if (index % 2 === 1) {
            return photo;
          }
        });
         const img = $(`<div class="roverImage"><img src=${newPhotoArray[i].img_src} /></div>`);
           $('.photosContainer').append(img);
              //breaking up the lines of poetry
              $('.photosContainer').append("<p>" + values[i] + "</p>" );
              $("p").addClass("blink");
  }
},

  listThings: function (data) {
    //providing a task to do in isolation
    $('.todoContainer').html("today, maybe " + data + "<br></br>");
},

  collectDate: function() {
    var thehours = new Date().getHours();
    var themessage;
    var morning = ('Good morning');
    var afternoon = ('Good afternoon');
    var evening = ('Good evening');
  
    if (thehours >= 0 && thehours < 12) {
      themessage = morning;
      $("body").addClass("morning");
  
    } else if (thehours >= 12 && thehours < 17) {
      themessage = afternoon;
      $("body").addClass("afternoon");
  
    } else if (thehours >= 17 && thehours < 24) {
      themessage = evening;
      $("body").addClass("evening");
    }
    else {
    
    }
  
  },

  
  

}

