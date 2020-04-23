const app = {
  initialize: function () {
    $('.prompt').click(function () {
      app.rover();
      app.toDo();
    });

  },

  rover: function() {
    $.ajax({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=dRIKo0fwLmL6Wn73dUxAwbCekkgChgWYcALn3pTX',
      dataType: 'json',
      success: data => {
        var i;
      for (i = 0; i < 10; i++) {
       // console.log(data.photos[i].img_src);
        app.displayImages(data.photos[i].img_src);
        }
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
$("#myUrl").attr('src', data);
  },

  listThings: function (data) {
    $('.todoContainer').html(data);
  },
}