$(document).ready(function() {


	$("#right-but").click(function(){

		
		var my_margin = ($(".slider").css("margin-left"));
		console.log(my_margin);
		my_margin = my_margin.replace("px", "");
		var next_margin = (my_margin - 650) + "px";

		if (my_margin > -1000) {
			$(".slider").animate({"margin-left": next_margin},500, function(){
			
			});
		} 


	});

	$("#left-but").click(function(){

		var my_margin = ($(".slider").css("margin-left"));
		my_margin = my_margin.replace("px", "");
		var next_margin = (my_margin - -650) + "px";

		if (my_margin < 0) {
			$(".slider").animate({"margin-left": next_margin}, 500, function(){
			});
		}

	});

});