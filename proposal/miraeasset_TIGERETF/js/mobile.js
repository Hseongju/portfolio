$(window).load(function(){
	// swiper
	if($(".main_visual").size() > 0){
		mainVisSwiper = new Swiper('.main_visual .swiper-container', {
			//autoHeight: true,
			slidesPerView: 'auto',
			observer : true,
			observeParents : true,
			on : {
				init: function(){
				},
				slideChangeTransitionStart: function(){
				},
				slideChangeTransitionEnd: function(){
				},
			},
		});
	}

	$(".main_visual .swiper_img").on("click", function(){
		if(!$(".main_visual .swiper_img").hasClass("on")){
			gsap.to($(".main_visual .swiper_img"), 1, {left: -269, ease:Power3.easeOut});
			$(".main_visual .swiper_img").addClass("on");
		}else{
			gsap.to($(".main_visual .swiper_img"), 1, {left: -11, ease:Power3.easeOut});
			$(".main_visual .swiper_img").removeClass("on");
		}
	});

	$(".for_you .swiper_img").each(function(q){
		$(this).on("click", function(){
			if(!$(this).hasClass("on")){
				gsap.to($(this), 1, {left: -283, ease:Power3.easeOut});
				$(this).addClass("on");
			}else{
				gsap.to($(this), 1, {left: 24, ease:Power3.easeOut});
				$(this).removeClass("on");
			}
		});
	});

	// pick
	$(".bot_tab_bar .tab_btn.pick").on("click", function(){
		if(!$(this).hasClass("on")){
			gsap.to($(".pick_popup"), 0.9, {left: 0, ease:Power3.easeOut});
			$(".dimd").stop().fadeIn(500);
			$(this).addClass("on")
		}else{
			gsap.to($(".pick_popup"), 0.9, {left: "100%", ease:Power3.easeOut});
			$(".dimd").stop().fadeOut(500);
			$(this).removeClass("on")
		}
	});

	/*$(".pick_popup .pick_tab_bar").on("click", function(){
		if(!$(this).parent(".pick_popup").hasClass("on")){
			$(this).parent(".pick_popup").addClass("on")
		}else{
			$(this).parent(".pick_popup").removeClass("on")
		}
	});*/

	$(".pick_popup .change_area").on("click", function(){
		if(!$(this).parent(".pick_popup").hasClass("on")){
			$(this).parent(".pick_popup").addClass("on")
		}else{
			$(this).parent(".pick_popup").removeClass("on")
		}
	});



	// mbti
	$(".bot_tab_bar .tab_btn.mbti").on("click", function(){
		gsap.to($(".mbti_popup"), 0.9, {left: 0, ease:Power3.easeOut});
		$(".dimd").stop().fadeIn(500);
		$(this).addClass("on")
	});

	// mbti - 시작하기
	$(".mbti_popup .start_area .txt_wrap .btn_start").on("click", function(){
		if(!$(this).hasClass("on")){
			gsap.to($(".mbti_popup .start_area"), 0.7, {opacity: 0, ease:Power4.easeOut, onComplete: function(){
				$(".mbti_popup .start_area").css("z-index", 1);
			}});
			$(".mbti_popup .btn_x").addClass("on");
			$(".mbti_popup").addClass("started");
		}
	});

	// mbti - 결과보기
	$(".mbti_popup .bg").on("click", function(){
		if($(".mbti_popup").hasClass("started")){
			$(".mbti_popup .btn_x").removeClass("on");
			gsap.to($(".mbti_popup .result_area"), 0.7, {left: 0, ease:Power4.easeOut});
		}
	});

	$(".mbti_popup .btn_x").on("click", function(){
		$(".mbti_popup .btn_x").removeClass("on");
		gsap.to($(".mbti_popup"), 0.7, {left: "100%", ease:Power4.easeOut, onComplete: function(){
			$(".mbti_popup .start_area").css({"opacity":1, "z-index": 3});
			$(".mbti_popup .result_area").css({"left": "100%"});
		}});
		$(".dimd").stop().fadeOut(500);
		$(".bot_tab_bar .tab_btn.mbti").removeClass("on");
	});
});
