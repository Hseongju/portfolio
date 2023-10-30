$(window).load(function(){

	$(".slide_div .slide").on("click", function() {$(this).toggleClass("on");});

	$(".util a").each(function(q) {
		$(this).on("click", function() {
			if(q == 0) {
				$(".news_div").toggleClass("on");
				
				if($(".news_div").hasClass("on")) {
					$(".news_div .img").removeAttr("style");
					gsap.fromTo(".news_div .img", {y: 30, opacity: 0}, {duration: 0.6, y: 0, opacity: 1, stagger: 0.2, ease: Power3.ease});
				} else {
					$(".news_div .img").removeClass("hide");
					$(".news_div .img").removeAttr("style");
				}
			} else if(q == 1) {
				$(".menu_area").addClass("show");
			}
		});
	});

	// news 알림 닫기
	$(".news_div .img").on("click", function() { $(this).addClass("hide");});

	// menu
	if($(".menu_area").size() > 0) {
		$(".menu_area .story").on("click", function() {
			$(this).toggleClass("on");
		});

		$(".btn_close").on("click", function() {
			$(".menu_area").removeClass("show");
		});
	}

	// search, hiring
	if($(".visual .btn_wrap").size() > 0) {
		$(".visual .btn_wrap .btn").each(function(q) {
			$(this).on("click", function() {
				if(q == 0) { // search
					$(".dimd").addClass("on");
					$(".srch_popup").addClass("show");
				} else if(q == 1) { // hire
					$(".hire_area").addClass("show");
				}
			})
		});

		$(".hire_area .btn_close").on("click", function() {
			$(".hire_area").removeClass("show");
		});

		$(".banner").on("click", function() {
			$(".dimd").addClass("on");
			$(".position_popup").addClass("show");
		});
	}

	$(".btn_faq").on("click", function() {
		$(".dimd").addClass("on");
		$(".srch_popup").addClass("show");
	});

	$(".srch_popup, .position_popup, .dimd").on("click", function() {
		$(".dimd").removeClass("on");
		$(".srch_popup").removeClass("show");
		$(".position_popup").removeClass("show");
	});

  // header 역스크롤
  var _this_scroll;
  var _isScrollTop;

  $("#mobileWrap .content .scroll").on("scroll", function(){
    _isScrollTop =  $("#mobileWrap .content .scroll").scrollTop();

		if(_isScrollTop > _this_scroll) {
			gsap.to("header", {y: -60});
			$("header").removeClass().addClass("down");
		} else if(_isScrollTop == 0) {
			$("header").removeClass();
		} else {
			gsap.to("header", {y: 0});
			$("header").removeClass().addClass("up");
		}    

    _this_scroll = _isScrollTop;

  });$("#mobileWrap .content .scroll").scroll();
});