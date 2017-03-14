$(function() {


	var count = 0;

	var mybad = 0;

	var life = 21;


	$(".a").click(function() {
	    count++;
	    $(".touch").html(' '+count);
	     $('#ghost').attr('src','img/ghosttickled.png');

	});

	$("#playg").click(function() {
	    mybad++;
	    $(".miss").html(' '+mybad);
	    $('#ghost').attr('src','img/ghostmiss.png');
	});

	$("#pause").click(function() {
	    $('#ghost').attr('src','img/ghost.png');
	});

	$("#home").click(function() {
	    $('#ghost').attr('src','img/ghost.png');
	});
});
