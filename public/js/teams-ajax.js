$(document).ready(function() {
 console.log('Hello from ajax.js!');
});

$("#edit-team").submit(function(e){
		e.preventDefault();  //don't submit/send form
	console.log(this);
		var url = $(this).attr("action");
		var data = $(this).serialize();
		console.log("team url:", url);
		console.log("data:", data);

		$.ajax({
			method: "PUT",
			url: url,
			data: data

	}).done(function(data){
		 window.location = "/teams";
	}).fail(function(err){
		console.log("Error", err);
		});  //end of ajax put

});

$("#delete-btn").click(function(e){
		e.preventDefault();
		var articleUrl = $(this).attr("href");
		console.log("article url", articleUrl);
		$.ajax({
			method: "DELETE",
			url: articleUrl	
		}).done(function(data){
			window.location = "/teams";
		}).fail(function(err){
			console.log("error:", err);
		}); //END AJAX DELETE
	
	}); //END DELETE FUNCTION