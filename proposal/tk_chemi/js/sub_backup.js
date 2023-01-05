$(function(){
	$(window).load(function(){
		TweenMax.to($(".sub .con1 .txt1"), 0.6, {delay:0.4, opacity:1, top:323, ease:Power3.easeOut});
		TweenMax.to($(".sub .con1 .txt2"), 0.6, {delay:0.6, opacity:1, top:533, ease:Power3.easeOut});
		TweenMax.to($(".sub .bookBtn"), 0.6, {delay:0.8, opacity:1, bottom:0, ease:Power3.easeOut});
	});
	$(".sub .con1").height($(window).height());
	
	$(window).on("scroll", function(){
		if($(window).scrollTop() > $(".sub .con2").offset().top - 500){
			$(".sub .con2").addClass("on");
		}
		if($(window).scrollTop() > $(".sub .con3").offset().top - 500){
			$(".sub .con3").addClass("on");
		}
		if($(window).scrollTop() > $(".sub .con4").offset().top - 500){
			$(".sub .con4").addClass("on");
		}
		if($(window).scrollTop() > $(".sub .con5").offset().top - 500){
			$(".sub .con5").addClass("on");
		}
		if($(window).scrollTop() > $(".sub .con6").offset().top - 500){
			$(".sub .con6").addClass("on");
		}
	});

	$(".txtAcoD > a").on("click", function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".acoC").slideDown(500);
		}else{
			$(this).removeClass("on");
			$(".acoC").slideUp(500);

			$(".txtAcoD a").css("position","");
			$(".txtAcoD a").css("top","");
			$(".txtAcoD a").css("width","");
			$(".txtAcoD a").css("left","");
		}
	});


	$(".hamburger").click(function(){
		TweenMax.to($(".allMenu"), 0.6, {right:0, ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeIn(600);

	});

	$(".allMenu .closeBtn").click(function(){
		TweenMax.to($(".allMenu"), 0.6, {right:"-100%", ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeOut(600);
	});
  
	$(".footer").click(function(){
		TweenMax.to($("html ,body"), 0.6, {scrollTop:0});
	});
	
	var offsetLeft;
	$(window).resize(function(){
		offsetLeft = $("#cBody").offset().left;
		$(".header .logo").css("left", offsetLeft + 80);
		$(".utill").css("left", offsetLeft + 1385);
		$(".hamburger").css("left", offsetLeft + 1550);
		$(".headBooking").css("left", offsetLeft + 1640);
	});$(window).resize();

	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			$("#wrap").addClass("on");
		}else{
			$("#wrap").removeClass("on");
		}
		
		if($(".txtAcoD a").hasClass("on")){
			if($(".sub .con4 .txtAcoD").offset().top <= $(window).scrollTop() + $(".header").outerHeight() && $(".sub .con4 .txtAcoD").offset().top + $(".sub .con4 .txtAcoD").outerHeight() >= $(window).scrollTop() + $(".header").outerHeight() + $(".sub .sub2 .con4 .txtAcoD a").outerHeight()){
				$(".txtAcoD a").css("position","fixed");
				$(".txtAcoD a").css("top","120px");
				$(".txtAcoD a").css("width","1920px");
				$(".txtAcoD a").css("left","0");
			}else{
				$(".txtAcoD a").css("position","");
				$(".txtAcoD a").css("top","");
				$(".txtAcoD a").css("width","");
				$(".txtAcoD a").css("left","");
			}
		}
	});$(window).scroll();
});