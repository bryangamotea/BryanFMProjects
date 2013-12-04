$(document).ready(function() {
	

	$("#pause-but").hide();

	
	$("#right-but").click(function(){


			$(".slider").animate({"margin-left": "-100%"},500, function(){
				$(".slider img:first-child").appendTo(".slider");
				$(this).css("margin-left", "0px");
			});
	});

	$("#left-but").click(function(){


			$(".slider img:last-child").prependTo(".slider");
			$(".slider").css({"margin-left": "-100%"});		
			$(".slider").animate({"margin-left": "0px"}, 500, function(){

			});

	});



	$(".slider").tabs();

	var TotImg = $(".slider > .banner").length
	imgCounter(1,TotImg);

	$(".slider").bind("tabselect", function(event, ui){
		var index = ui.index;
		var imgNum = index + 1;
		imgCounter(imgNum, TotImg)
	});

	function imgCounter(imgNum, imgCounter) {
		$("#counter").text(imgNum + "/" + TotImg);
	}



	$("#play-but").click(function() {
		$("#pause-but").show(200);
		$("#play-but").hide(200);

		setTimeout(function(){
			$(".slider").animate({"margin-left": "-100%"},500, function(){
				$(".slider img:first-child").appendTo(".slider");
				$(this).css("margin-left", "0px");
			});
		});

	});

	$("#pause-but").click(function() {
		$("#pause-but").hide(200);
		$("#play-but").show(200);

	});

});