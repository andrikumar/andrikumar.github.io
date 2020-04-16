const app = {
  initialize: function () {
    $('.prompt').click(function () {
      app.rover();
      app.toDo();
    });

  },

  rover: function() {
    $.ajax({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=dRIKo0fwLmL6Wn73dUxAwbCekkgChgWYcALn3pTX',
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
        app.listThings(data);
      }
    })
  },

  displayImages: function (data) {
    $('.photoContainer').html(`${data}`);
  },

  listThings: function (data) {
    $('.todoContainer').html(data);
  },
}