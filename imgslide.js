$(document).ready(function() {


	$("#next").click(function(){
		
		var my_margin = ($(".slider").css("margin-left"));
		console.log(my_margin);
		my_margin = my_margin.replace("px", "");
		console.log(my_margin);

		$(".slider").animate({"margin-left": (my_margin - 300) + "px"},1000, function(){
			console.log($(this).css("margin-left"));


		});
	});
});