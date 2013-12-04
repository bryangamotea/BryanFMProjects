$(document).ready(function() {

$("#pause-but").hide();
	
var myInterval;
// functions
function onNextHandler() {

			$(".slider").animate({"margin-left": "-100%"},500, function(){
				$(".slider img:first-child").appendTo(".slider");
				$(this).css("margin-left", "0px");

			});
}

function onPreviousHandler() {

			$(".slider img:last-child").prependTo(".slider");
			$(".slider").css({"margin-left": "-100%"});		
			$(".slider").animate({"margin-left": "0px"}, 500, function(){

			});
}

	function onMouseLeave() {
	clearInterval(myInterval);
	myInterval = setInterval(onNextHandler,1000);
}


	function onMouseEnter() {
	clearInterval(myInterval);

}


	// image sliding code
	$("#right-but").click(onNextHandler);


	$("#left-but").click(onPreviousHandler);




	// image counter
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




	// show and hide play/pause button
	$("#play-but").click(function() {
		$("#pause-but").show(200);
		$("#play-but").hide(200);

			myInterval = setInterval(onNextHandler,2000);

	});

	$("#pause-but").click(function() {
		$("#pause-but").hide(200);
		$("#play-but").show(200);
		clearInterval(myInterval);
	});	

	
	$(".slider").mouseenter(onMouseEnter);

	$(".slider").mouseleave(onMouseLeave);


});