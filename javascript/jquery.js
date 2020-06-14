$(document).ready(function() {
	$("#regform").hide();
	$(".login").click(function(event) {
		$(this).css({"background": "linear-gradient(to bottom right,red,yellow)", "color": "#fff"});
		$("#loginform").show();
		$("#regform").hide();
		$(".reg").css({"background": "transparent", "color": "#000"});
	});
	$(".reg").click(function(event) {
		$(this).css({"background": "linear-gradient(to bottom right,red,yellow)", "color": "#fff"});
		$("#loginform").hide();
		$("#regform").show();
		$(".login").css({"background": "transparent", "color": "#000"});
	});
});