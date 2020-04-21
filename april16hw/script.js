

var app = {
	nyTimesArticles : [],

	initialize: function() {
		app.getNYTimesData();
	},

	getNYTimesData: function() {
		console.log("Get NY Times Data");
		var nyTimesURL = 'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=';
		var myNYKey = 'XGatKZCyzv22zdmJDEeMe5snzNsnogVv';
		var nyTimesReqURL = nyTimesURL + myNYKey;
		console.log(nyTimesReqURL);
		$.ajax({
			url: nyTimesReqURL,
			type: 'GET',
			dataType: 'json',
			error: function(err){
				console.log("Uh oh...");
				console.log(err);
			},
			success: function(data){
				document.getElementById("myBtn").addEventListener("click", function(){
					var random = Math.floor(Math.random()*11);
					var article = data.results[random].title;
		 			$('.container').html(article);
			 });
			// app.nyTimesArticles = data.url
				//console.log(app.nyTimesArticles);
			}
		});
	}



};
