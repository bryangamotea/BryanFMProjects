$(document).ready(function() {


	$("#next").click(function(){

		
		var my_margin = ($(".slider").css("margin-left"));
		my_margin = my_margin.replace("px", "");
		var next_margin = (my_margin - 300) + "px";

		if (my_margin > -600) {
			$(".slider").animate({"margin-left": next_margin},2000, function(){
			
			});
		} 


	});

	$("#prev").click(function(){

		var my_margin = ($(".slider").css("margin-left"));
		my_margin = my_margin.replace("px", "");
		var next_margin = (my_margin - -300) + "px";

		if (my_margin < 0) {
			$(".slider").animate({"margin-left": next_margin}, 2000, function(){
			});
		}

	});

});