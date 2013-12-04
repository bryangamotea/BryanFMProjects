// branch TIMEOUT

$(document).ready(function() {

$("#pause-but").hide();

var autoSlide = false;
var hover = false;
	
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

function onPlayClick () {
				$(".slider").animate({"margin-left": "-100%"},500, function(){
				$(".slider img:first-child").appendTo(".slider");
				$(this).css("margin-left", "0px");
				myTimeout = setTimeout(2000);

			});
}

function onPreviousClick () {
	clearTimeout(myTimeout);
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
	$("#play-but").click(onPlayClick); 

	$("#pause-but").click();

	
	$(".slider").mouseenter(onPreviousClick);
		

	$(".slider").mouseleave(onMouseLeave);


});