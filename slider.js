// branch TIMEOUT

$(document).ready(function() {

$("pause-but").hide();

var autoSlide = false;

var hover = false;
	
var myTimeout;

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
				$(".slider").animate({"margin-left": "-100%"},1000, function(){
				$(".slider img:first-child").appendTo(".slider");
				$(this).css("margin-left", "0px");
				myTimeout = setTimeout(onPlayClick,1000);

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
	$("#play-but").click(function(){
		
		$("#play-but").hide();
		$("#pause-but").show();
		autoSlide = true;
		hover = true;

		if (!hover) {

		console.log("play");	
		myTimeout = setTimeout(onPlayClick);

		}
		
	});

	$("#pause-but").click(function (){
		$("#pause-but").hide();
		$("#play-but").show();
		autoSlide = false;

			console.log("pause");
			clearTimeout(myTimeout);
			console.log("TIMEOUT");

	});


	$("#left").mouseleave(function (){
		hover = false;
		if (autoSlide){

			setTimeout(onPlayClick);

			console.log("leave");

			}

	});


	$("#left").mouseenter(function (){

			hover = true;

			clearTimeout(myTimeout);
			console.log("Enter");
			console.log("TIMEOUT");


	});

});