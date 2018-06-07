$(document).ready(function(){
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();

		if(scrollTop > 80){
			$(".titan-navbar").addClass('navbar-shrink');
		}else{
			$(".titan-navbar").removeClass('navbar-shrink');
		}
	});
});