$(document).ready(function(){

	var flag=false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if (scroll >200) {
			if(!flag){
				$("#logo").css({"margin-top": "0px","width": "150px","height": "50px","font-size":"4.5em",});
				$("header").css({"background-color":"#3f3f3f"});
				$("label .fa-bars").css({"color":"white"});
				$("nav.menu").css({"background":"#3f3f3f", "color":"blue"});
				flag = true;
			}
		}else{
			if (flag){
				$("#logo").css({"margin-top": "0px","width":"250px","height": "250px","font-size":"4.5em"});
				$("header").css({"background-color":"transparent"});
				$("label .fa-bars").css({"color":"black"});
				$("nav.menu").css({"background":"transparent"});
				
				flag = false;
			}
		}

	});



});