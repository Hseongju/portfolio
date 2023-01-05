$(window).load(function() {
    TweenMax.to($("header"), 0.8, {top:0, delay:0.5, ease:Power3.easeOut});
	TweenMax.to($(".main_tab"), 0.8, {opacity:1, delay:0.5, ease:Power3.easeOut});
	TweenMax.to($(".main_v .txt .txt1"), 1.5, {'transform' : 'translate(0, 0px)', opacity : 1, delay:0.2, ease:Power3.easeOut});
	TweenMax.to($(".main_v .txt .txt2"), 1.5, {'transform' : 'translate(0, 0px)', opacity : 1, delay:0.4, ease:Power3.easeOut});
	TweenMax.to($(".menubt"), 1.5, {left : 60, opacity : 1, delay:0.6, ease:Power3.easeOut});
	TweenMax.to($(".main_v .video_bt"), 1.5, {opacity : 1, delay:0.5, ease:Power3.easeOut});
	
	var mainMtop = $(".main_tab").offset().top;
	var curScrollmv = false;

	var mainVisualSwiper = new Swiper('.main_v.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 1000,

		on:{
			init : function(){
			},
			slideChangeTransitionStart : function(){
				$(".main_tab .inner a").removeClass("on");
				$(".main_tab .inner a").eq(this.activeIndex).addClass("on");
				TweenMax.to($(".main_v").find(".swiper-slide").find(".txt .txt1"), 0, {transform:'translate(0, 100px)', opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".main_v").find(".swiper-slide").find(".txt .txt2"), 0, {transform:'translate(0, 100px)', opacity:0, ease:Power3.easeOut});
			},
			slideChangeTransitionEnd : function(){
				TweenMax.to($(".main_v").find(".swiper-slide").eq(this.activeIndex).find(".txt .txt1"), 1.2, {transform:'translate(0, 0px)',opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_v").find(".swiper-slide").eq(this.activeIndex).find(".txt .txt2"), 1.2, {transform:'translate(0, 0px)',opacity:1, delay:0.3, ease:Power3.easeOut});
			}
		}
	});

	$(".main_v .video_bt").on('click', function(){
		$(".movie_pop").css('display', 'block');
		TweenMax.to($(".movie_pop"), 1, {opacity:1, ease:Power3.easeOut});
	});

	$(".movie_pop > a").on('click', function(){
		TweenMax.to($(".movie_pop"), 1, {opacity:0, ease:Power3.easeOut, onComplete:function(){
			$(".movie_pop").css('display', 'none');
		}});
	});

	var curMainVisualswiper = 0;
	$(".main_container").css('height', 7497);
	$(".main_part").css('z-index', 0);
	$(".main_part").eq(curMainVisualswiper).css('z-index', 1);
	$(".main_tab .inner a").each(function(index){
		$(this).on('click', function(){
			$(".main_tab .inner a").eq(curMainVisualswiper).removeClass("on");
			$(".main_part").eq(curMainVisualswiper).css('z-index', 0);
			curMainVisualswiper = index;
			$(".main_tab .inner a").eq(curMainVisualswiper).addClass("on"); 
			$(".main_part").eq(curMainVisualswiper).css('z-index', 1);

			if(curMainVisualswiper == 0){
				$(".main_container").css('height', 7497);
			}else if(curMainVisualswiper == 1){
				$(".main_container").css('height', 6176);
			}else if(curMainVisualswiper == 2){
				$(".main_container").css('height', 6763);
			}
			
			mainVisualSwiper.slideTo(index, 1000);

			if(curScrollmv == true){
				$(window).scrollTop($(window).height());
			}

			if(index == 0){
				$(".main_container .mcon1 .con5 .img").addClass("nfix");
				$(".main_container .mcon1 .con5 .dimd").addClass("nfix");
				$(".main_container .mcon1").css("padding-bottom", 0);
			}else{
				$(".main_container .mcon1 .con5 .img").removeClass("nfix");
				$(".main_container .mcon1 .con5 .dimd").removeClass("nfix");
				$(".main_container .mcon1").css("padding-bottom", 600);
			}
		})
	});
	
	$(window).on('scroll', function(){
		if($(window).scrollTop() >= mainMtop){
			$(".main_tab").addClass("fixed");
			curScrollmv = true;
		}else{
			$(".main_tab").removeClass("fixed");
			curScrollmv = false;
		}
		
		if(curMainVisualswiper == 0){
			if($(window).scrollTop() >= $(".main_container .mcon1 .con1").offset().top && $(window).scrollTop() < $(".main_container .mcon1 .con2").offset().top - 400){
				TweenMax.to($(".main_container .mcon1 .con1 .txt_pack .txt1"), 1.5, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon1 .con1 .txt_pack .txt2"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon1 .con1 .txt_pack .d_bt"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.4, ease:Power3.easeOut});
			}else if($(window).scrollTop() >= $(".main_container .mcon1 .con2").offset().top - 400 && $(window).scrollTop() < $(".main_container .mcon1 .con3").offset().top - 400){
				TweenMax.to($(".main_container .mcon1 .con2 .txt_pack .txt1"), 1.5, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon1 .con2 .txt_pack .txt2"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon1 .con2 .txt_pack .d_bt"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.4, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon1 .con2 .img_pack"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.6, ease:Power3.easeOut});
			}else if($(window).scrollTop() >= $(".main_container .mcon1 .con3").offset().top - 400 && $(window).scrollTop() < $(".main_container .mcon1 .con4").offset().top - 400){
				TweenMax.to($(".main_container .mcon1 .con3 .tit_pack"), 1.5, {transform:'translate(0, -50%)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon1 .con3 .siwper-container"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.3, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon1 .con3 .bt_side"), 1.5, {transform:'translate(0, -50%)', opacity:1, delay:0.6, ease:Power3.easeOut});
			}else if($(window).scrollTop() >= $(".main_container .mcon1 .con4").offset().top - 400 && $(window).scrollTop() < $(".main_container .mcon1 .con5").offset().top - 600){
				TweenMax.to($(".main_container .mcon1 .con4 .tit_pack .tit"), 1.5, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon1 .con4 .tit_pack .txt2"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon1 .con4 .swiper-container"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.6, ease:Power3.easeOut});
			}else if($(window).scrollTop() >= $(".main_container .mcon1 .con5").offset().top - 600){
				TweenMax.to($(".main_container .mcon1 .con5 .txt_pack .txt"), 1.5, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon1 .con5 .txt_pack .bt"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
			}
		}else if(curMainVisualswiper == 1){
			if($(window).scrollTop() >= $(".main_container .mcon2 .con1").offset().top - 400 && $(window).scrollTop() < $(".main_container .mcon2 .con2").offset().top - 400){
				TweenMax.to($(".main_container .mcon2 .con1 .txt_pack .txt1"), 1.5, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon2 .con1 .txt_pack .txt2"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon2 .con1 .txt_pack .d_bt"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.4, ease:Power3.easeOut});
			}else if($(window).scrollTop() >= $(".main_container .mcon2 .con2").offset().top - 400 && $(window).scrollTop() < $(".main_container .mcon2 .con3").offset().top - 400){
			}else if($(window).scrollTop() >= $(".main_container .mcon2 .con3").offset().top - 400 && $(window).scrollTop() < $(".main_container .mcon2 .con4").offset().top - 400){
				TweenMax.to($(".main_container .mcon2 .con3 .inner .left"), 2, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon2 .con3 .inner .right"), 2, {transform:'translate(0, 0)', opacity:1, delay:0.4, ease:Power3.easeOut});
			}else if($(window).scrollTop() >= $(".main_container .mcon2 .con4").offset().top - 400 && $(window).scrollTop() < $(".main_container .mcon2 .con5").offset().top - 600){
				TweenMax.to($(".main_container .mcon2 .con4 .txt_pack .txt1"), 1.5, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon2 .con4 .txt_pack .txt2"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon2 .con4 .txt_pack .d_bt"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.4, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon2 .con4 .list_div li .answer"), 0.8, {'margin-top':'30px', height:114, delay:0.8, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon2 .con4 .list_div li a > span"), 0.8, {rotation : 360, delay:0.8, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon2 .con4 .list_div li a > span > img").eq(0), 0.8, {opacity : 0, delay:0.8, ease:Power3.easeOut});
			}else if($(window).scrollTop() >= $(".main_container .mcon2 .con5").offset().top - 600){
				TweenMax.to($(".main_container .mcon2 .con5 .txt_pack .txt"), 1.5, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon2 .con5 .txt_pack .bt"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
			}
		}else if(curMainVisualswiper == 2){
			if($(window).scrollTop() >= $(".main_container .mcon3 .con1").offset().top && $(window).scrollTop() < $(".main_container .mcon3 .con2").offset().top - 400){
				TweenMax.to($(".main_container .mcon3 .con1 .txt_pack .txt1"), 1.5, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con1 .txt_pack .txt2"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con1 .txt_pack .d_bt"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.4, ease:Power3.easeOut});
			}else if($(window).scrollTop() >= $(".main_container .mcon3 .con2").offset().top - 400 && $(window).scrollTop() < $(".main_container .mcon3 .con3").offset().top - 400){
				TweenMax.to($(".main_container .mcon3 .con2 .txt_pack .txt1"), 1.5, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con2 .txt_pack .txt2"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con2 .txt_pack .d_bt"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.4, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con2 .img_pack"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.6, ease:Power3.easeOut});
			}else if($(window).scrollTop() >= $(".main_container .mcon3 .con3").offset().top - 400 && $(window).scrollTop() < $(".main_container .mcon3 .con4").offset().top - 400){
				TweenMax.to($(".main_container .mcon3 .con3 .txt_pack .txt1"), 1.5, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con3 .txt_pack .txt2"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con3 .img_pack"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.4, ease:Power3.easeOut});
			}else if($(window).scrollTop() >= $(".main_container .mcon3 .con4").offset().top - 400 && $(window).scrollTop() < $(".main_container .mcon3 .con5").offset().top - 600){
				TweenMax.to($(".main_container .mcon3 .con4 .txt_pack .txt1"), 1.5, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con4 .txt_pack .txt2"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con4 .txt_pack .d_bt"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.4, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con4 .swiper-container"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.6, ease:Power3.easeOut});
			}else if($(window).scrollTop() >= $(".main_container .mcon3 .con5").offset().top - 600){
				TweenMax.to($(".main_container .mcon3 .con5 .txt_pack .txt1"), 1.5, {transform:'translate(0, 0)', opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con5 .txt_pack .txt2"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con5 .txt_pack .d_bt"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.4, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con5 .list"), 1.5, {transform:'translate(0, 0)', opacity:1, delay:0.6, ease:Power3.easeOut});
			}
		}
	});$(window).scroll();

	var main1Con3swiper = new Swiper('.main_container .mcon1 .con3 .siwper-container', {
		speed:1000,
		spaceBetween: 0,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		on:{
			init : function(){
			},
			slideChangeTransitionStart : function(){
				$(".main_container .mcon1 .con3 .bt_side a").removeClass("on");
				$(".main_container .mcon1 .con3 .bt_side a").eq(this.activeIndex).addClass("on");
			},
		}
	});

	var main1Con4swiper = new Swiper('.main_container .mcon1 .con4 .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 80,
		speed:1000,

		navigation: {
			nextEl: '.main_container .mcon1 .con4 .swiper_bts .bts .right',
			prevEl: '.main_container .mcon1 .con4 .swiper_bts .bts .left',
		},
	});

	var mainCon1st1 = gsap.timeline();
	mainCon1st1.fromTo(".main_container .mcon1 .con1 .img_pack .one", {"transform":"translate(0, -100px)"}, {"transform":"translate(0, 100px)"}, 0)
	ScrollTrigger.create({
		animation: mainCon1st1,
		trigger: ".main_container .mcon1 .con1 .img_pack",
		start: "top top",
		end: "bottom top",
		pin: false,
		//markers: true,
		scrub: 1,
	});

	var mainCon1st2 = gsap.timeline();
	mainCon1st2.fromTo(".main_container .mcon1 .con1 .img_pack .two", {"transform":"translate(0, -100px)"}, {"transform":"translate(0, 100px)"}, 0.04)
	ScrollTrigger.create({
		animation: mainCon1st2,
		trigger: ".main_container .mcon1 .con1 .img_pack",
		start: "top top",
		end: "bottom top",
		pin: false,
		//markers: true,
		scrub: 1,
	});

	var mainCon1st3 = gsap.timeline();
	mainCon1st3.fromTo(".main_container .mcon1 .con1 .img_pack .thr", {"transform":"translate(0, -100px)"}, {"transform":"translate(0, 100px)"}, 0.08)
	ScrollTrigger.create({
		animation: mainCon1st3,
		trigger: ".main_container .mcon1 .con1 .img_pack",
		start: "top top",
		end: "bottom top",
		pin: false,
		//markers: true,
		scrub: 1,
	});

	var mainCon1banner = gsap.timeline();
	mainCon1banner.fromTo(".main_container .mcon1 .con5 .img", {"transform":"scale(1) translate(-50%, 0)"}, {"transform":"scale(1.1) translate(-50%, 0)"}, 0)
	ScrollTrigger.create({
		animation: mainCon1banner,
		trigger: ".main_container .mcon1 .con4",
		start: "400px top",
		end: "950px top",
		pin: false,
		//markers: true,
		scrub: 1,

		onUpdate: function(self){
			if(self.progress.toFixed(3) >= 1){
				$(".main_container .mcon1 .con5 .img").addClass("nfix");
				$(".main_container .mcon1").css("padding-bottom", 0);
			}else{
				$(".main_container .mcon1 .con5 .img").removeClass("nfix");
				$(".main_container .mcon1").css("padding-bottom", 600);
			}
		}
	});

	var mainCon1banner2 = gsap.timeline();
	mainCon1banner2.fromTo(".main_container .mcon1 .con5 .dimd", {"opacity":"0.8"}, {"opacity":"0.3"}, 0)
	ScrollTrigger.create({
		animation: mainCon1banner2,
		trigger: ".main_container .mcon1 .con4",
		start: "400px top",
		end: "1000px top",
		pin: false,
		//markers: true,
		scrub: 1,

		onUpdate: function(self){
			if(self.progress.toFixed(3) >= 1){
				$(".main_container .mcon1 .con5 .dimd").addClass("nfix");
			}else{
				$(".main_container .mcon1 .con5 .dimd").removeClass("nfix");
			}
		}
	});

	var curMain2Con1Num = 0;
	TweenMax.to($(".main_container .mcon2 .con2 .left .roll .r_unit"), 0, {width:'0%', ease:Power2.easeOut});
	$(".main_container .mcon2 .con2 .left .roll .r_unit").css('left', 'auto').css('right', 0);
	TweenMax.to($(".main_container .mcon2 .con2 .left .roll .r_unit").find("img"), 0, {scale:1.2, ease:Power2.easeOut});
	$(".main_container .mcon2 .con2 .left .roll .r_unit").find("img").css('left', 'auto').css('right', 0);

	TweenMax.to($(".main_container .mcon2 .con2 .left .roll .r_unit").eq(curMain2Con1Num), 0, {width:'100%', ease:Power2.easeOut});
	$(".main_container .mcon2 .con2 .left .roll .r_unit").eq(curMain2Con1Num).css('right', 'auto').css('left', 0);
	TweenMax.to($(".main_container .mcon2 .con2 .left .roll .r_unit").eq(curMain2Con1Num).find("img"), 0, {scale:1, ease:Power2.easeOut});
	$(".main_container .mcon2 .con2 .left .roll .r_unit").eq(curMain2Con1Num).find("img").css('right', 'auto').css('left', 0);

	TweenMax.to($(".main_container .mcon2 .con2 .right .bot .roll .r_unit"), 0, {height:'0', ease:Power2.easeOut});
	$(".main_container .mcon2 .con2 .right .bot .roll .r_unit").css('bottom', 'auto').css('top', 0);
	TweenMax.to($(".main_container .mcon2 .con2 .right .bot .roll .r_unit").find("img"), 0, {scale:1.2, ease:Power2.easeOut});
	$(".main_container .mcon2 .con2 .right .bot .roll .r_unit").find("img").css('bottom', 'auto').css('top', 0);

	TweenMax.to($(".main_container .mcon2 .con2 .right .bot .roll .r_unit").eq(curMain2Con1Num), 0, {height:'50vh', ease:Power2.easeOut});
	$(".main_container .mcon2 .con2 .right .bot .roll .r_unit").eq(curMain2Con1Num).css('top', 'auto').css('bottom', 0);
	TweenMax.to($(".main_container .mcon2 .con2 .right .bot .roll .r_unit").eq(curMain2Con1Num).find("img"), 0, {scale:1, ease:Power2.easeOut});
	$(".main_container .mcon2 .con2 .right .bot .roll .r_unit").eq(curMain2Con1Num).find("img").css('top', 'auto').css('bottom', 0);

	TweenMax.to($(".main_container .mcon2 .con2 .right .top .roll .r_unit"), 0, {opacity:0, ease:Power2.easeOut});
	TweenMax.to($(".main_container .mcon2 .con2 .right .top .roll .r_unit").eq(curMain2Con1Num), 0, {opacity:1, ease:Power2.easeOut});

	$(".main_container .mcon2 .con2 .left .bts a").eq(0).on('click', function(){
		TweenMax.to($(".main_container .mcon2 .con2 .left .roll .r_unit").eq(curMain2Con1Num), 1.2, {width:'0%', ease:Power2.easeOut});
		$(".main_container .mcon2 .con2 .left .roll .r_unit").eq(curMain2Con1Num).css('left', 'auto').css('right', 0);
		TweenMax.to($(".main_container .mcon2 .con2 .left .roll .r_unit").eq(curMain2Con1Num).find("img"), 1.2, {scale:1.2, ease:Power2.easeOut});
		$(".main_container .mcon2 .con2 .left .roll .r_unit").eq(curMain2Con1Num).find("img").css('left', 'auto').css('right', 0);

		TweenMax.to($(".main_container .mcon2 .con2 .right .bot .roll .r_unit").eq(curMain2Con1Num), 1.2, {height:'0', ease:Power2.easeOut});
		$(".main_container .mcon2 .con2 .right .bot .roll .r_unit").eq(curMain2Con1Num).css('bottom', 'auto').css('top', 0);
		TweenMax.to($(".main_container .mcon2 .con2 .right .bot .roll .r_unit").eq(curMain2Con1Num).find("img"), 1.2, {scale:1.2, ease:Power2.easeOut});
		$(".main_container .mcon2 .con2 .right .bot .roll .r_unit").eq(curMain2Con1Num).find("img").css('bottom', 'auto').css('top', 0);

		TweenMax.to($(".main_container .mcon2 .con2 .right .top .roll .r_unit"), 1.2, {opacity:0, ease:Power2.easeOut});

		$(".main_container .mcon2 .con2 .right .top .r_num span").eq(curMain2Con1Num).removeClass("on")

		curMain2Con1Num++;
		if(curMain2Con1Num > 2){
			curMain2Con1Num = 0
		}

		TweenMax.to($(".main_container .mcon2 .con2 .left .roll .r_unit").eq(curMain2Con1Num), 1.2, {width:'100%', ease:Power2.easeOut});
		$(".main_container .mcon2 .con2 .left .roll .r_unit").eq(curMain2Con1Num).css('right', 'auto').css('left', 0);
		TweenMax.to($(".main_container .mcon2 .con2 .left .roll .r_unit").eq(curMain2Con1Num).find("img"), 1.2, {scale:1, ease:Power2.easeOut});
		$(".main_container .mcon2 .con2 .left .roll .r_unit").eq(curMain2Con1Num).find("img").css('right', 'auto').css('left', 0);

		TweenMax.to($(".main_container .mcon2 .con2 .right .bot .roll .r_unit").eq(curMain2Con1Num), 1.2, {height:'50vh', ease:Power2.easeOut});
		$(".main_container .mcon2 .con2 .right .bot .roll .r_unit").eq(curMain2Con1Num).css('top', 'auto').css('bottom', 0);
		TweenMax.to($(".main_container .mcon2 .con2 .right .bot .roll .r_unit").eq(curMain2Con1Num).find("img"), 1.2, {scale:1, ease:Power2.easeOut});
		$(".main_container .mcon2 .con2 .right .bot .roll .r_unit").eq(curMain2Con1Num).find("img").css('top', 'auto').css('bottom', 0);

		TweenMax.to($(".main_container .mcon2 .con2 .right .top .roll .r_unit").eq(curMain2Con1Num), 1.2, {opacity:1, ease:Power2.easeOut});

		$(".main_container .mcon2 .con2 .right .top .r_num span").eq(curMain2Con1Num).addClass("on")
	});

	$(".main_container .mcon2 .con2 .left .bts a").eq(1).on('click', function(){
		curMain2Con1Num--;
		if(curMain2Con1Num < 0){
			curMain2Con1Num = 2
		}
	});

	
	var mainCon2st1 = gsap.timeline();
	mainCon2st1.fromTo(".main_container .mcon2 .con1 .img_pack .one", {"transform":"translate(0, -200px)"}, {"transform":"translate(0, 0)"}, 0)
	ScrollTrigger.create({
		animation: mainCon2st1,
		trigger: ".main_container .mcon2 .con1",
		start: "-20% top",
		end: "30% top",
		pin: false,
		//markers: true,
		scrub: 1,
	});

	var mainCon2st2 = gsap.timeline();
	mainCon2st2.fromTo(".main_container .mcon2 .con1 .img_pack .two", {"transform":"translate(-50%, 200px)"}, {"transform":"translate(-50%, 0)"}, 0.04)
	ScrollTrigger.create({
		animation: mainCon2st2,
		trigger: ".main_container .mcon2 .con1",
		start: "-20% top",
		end: "30% top",
		pin: false,
		//markers: true,
		scrub: 1,
	});

	var mainCon2st3 = gsap.timeline();
	mainCon2st3.fromTo(".main_container .mcon2 .con1 .img_pack .thr", {"transform":"translate(0, -200px)"}, {"transform":"translate(0, 0)"}, 0.04)
	ScrollTrigger.create({
		animation: mainCon2st3,
		trigger: ".main_container .mcon2 .con1",
		start: "-20% top",
		end: "30% top",
		pin: false,
		//markers: true,
		scrub: 1,
	});


	var mainCon2banner = gsap.timeline();
	mainCon2banner.fromTo(".main_container .mcon2 .con5 .img", {"transform":"scale(1) translate(-50%, 0)"}, {"transform":"scale(1.1) translate(-50%, 0)"}, 0)
	ScrollTrigger.create({
		animation: mainCon2banner,
		trigger: ".main_container .mcon2 .con4",
		start: "650px top",
		end: "1200px top",
		pin: false,
		//markers: true,
		scrub: 1,

		onUpdate: function(self){
			if(self.progress.toFixed(3) >= 1){
				$(".main_container .mcon2 .con5 .img").addClass("nfix");
				$(".main_container .mcon2").css("padding-bottom", 0);
			}else{
				$(".main_container .mcon2 .con5 .img").removeClass("nfix");
				$(".main_container .mcon2").css("padding-bottom", 600);
			}
		}
	});

	var mainCon2banner2 = gsap.timeline();
	mainCon2banner2.fromTo(".main_container .mcon2 .con5 .dimd", {"opacity":"0.8"}, {"opacity":"0.3"}, 0)
	ScrollTrigger.create({
		animation: mainCon2banner2,
		trigger: ".main_container .mcon2 .con4",
		start: "650px top",
		end: "1200px top",
		pin: false,
		//markers: true,
		scrub: 1,

		onUpdate: function(self){
			if(self.progress.toFixed(3) >= 1){
				$(".main_container .mcon2 .con5 .dimd").addClass("nfix");
			}else{
				$(".main_container .mcon2 .con5 .dimd").removeClass("nfix");
			}
		}
	});

	var main3Con4swiper = new Swiper('.main_container .mcon3 .con4 .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 135,
		speed:1000,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		on:{
			init : function(){
			},
			slideChangeTransitionStart : function(){
				TweenMax.to($(".main_container .mcon3 .con4").find(".swiper-slide").find(".txt_div .txt1"), 0, {transform:'translate(0, 100px)', opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con4").find(".swiper-slide").find(".txt_div .txt2"), 0, {transform:'translate(0, 100px)', opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con4").find(".swiper-slide").find(".txt_div .txt3"), 0, {transform:'translate(0, 100px)', opacity:0, ease:Power3.easeOut});
			},
			slideChangeTransitionEnd : function(){
				TweenMax.to($(".main_container .mcon3 .con4").find(".swiper-slide").eq(this.activeIndex).find(".txt_div .txt1"), 1.2, {transform:'translate(0, 0px)',opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con4").find(".swiper-slide").eq(this.activeIndex).find(".txt_div .txt2"), 1.2, {transform:'translate(0, 0px)',opacity:1, delay:0.1, ease:Power3.easeOut});
				TweenMax.to($(".main_container .mcon3 .con4").find(".swiper-slide").eq(this.activeIndex).find(".txt_div .txt3"), 1.2, {transform:'translate(0, 0px)',opacity:1, delay:0.2, ease:Power3.easeOut});
			}
		}
	});

	var curMain3Con2Num = 0;
	TweenMax.to($(".main_container .mcon3 .con2 .img_pack .txt_roll .txt_area").eq(1), 0, {opacity:0, ease:Power3.easeOut});

	$(".main_container .mcon3 .con2 .next").on('click', function(){
		if(curMain3Con2Num == 0){
			TweenMax.to($(".main_container .mcon3 .con2 .img_pack .img_roll .r_unit").eq(0), 1.5, {left:'-100%', ease:Power3.easeOut});
			TweenMax.to($(".main_container .mcon3 .con2 .img_pack .img_roll .r_unit").eq(1), 0, {left:'100%', ease:Power3.easeOut});
			TweenMax.to($(".main_container .mcon3 .con2 .img_pack .img_roll .r_unit").eq(1), 1.5, {left:0, ease:Power3.easeOut});

			TweenMax.to($(".main_container .mcon3 .con2 .img_pack .txt_roll .txt_area").eq(0), 1.5, {opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".main_container .mcon3 .con2 .img_pack .txt_roll .txt_area").eq(1), 1.5, {opacity:1, ease:Power3.easeOut});

			curMain3Con2Num = 1;
		}else{
			TweenMax.to($(".main_container .mcon3 .con2 .img_pack .img_roll .r_unit").eq(1), 1.5, {left:'-100%', ease:Power3.easeOut});
			TweenMax.to($(".main_container .mcon3 .con2 .img_pack .img_roll .r_unit").eq(0), 0, {left:'100%', ease:Power3.easeOut});
			TweenMax.to($(".main_container .mcon3 .con2 .img_pack .img_roll .r_unit").eq(0), 1.5, {left:0, ease:Power3.easeOut});

			TweenMax.to($(".main_container .mcon3 .con2 .img_pack .txt_roll .txt_area").eq(1), 1.5, {opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".main_container .mcon3 .con2 .img_pack .txt_roll .txt_area").eq(0), 1.5, {opacity:1, ease:Power3.easeOut});

			curMain3Con2Num = 0;
		}
	});

	var mainCon3st1 = gsap.timeline();
	mainCon3st1.fromTo(".main_container .mcon3 .con1 .img_pack .one", {"transform":"translate(0, -200px)"}, {"transform":"translate(0, 0)"}, 0)
	ScrollTrigger.create({
		animation: mainCon3st1,
		trigger: ".main_container .mcon3 .con1",
		start: "-20% top",
		end: "30% top",
		pin: false,
		//markers: true,
		scrub: 1,
	});

	var mainCon3st2 = gsap.timeline();
	mainCon3st2.fromTo(".main_container .mcon3 .con1 .img_pack .two", {"transform":"translate(0, 200px)"}, {"transform":"translate(0, 0)"}, 0.04)
	ScrollTrigger.create({
		animation: mainCon3st2,
		trigger: ".main_container .mcon3 .con1",
		start: "-20% top",
		end: "30% top",
		pin: false,
		//markers: true,
		scrub: 1,
	});

	// 메뉴버튼
	$(".menubt").on('click', function(){
		$(".gnb").css('display', 'block');
		TweenMax.to($(".gnb .bg_div .white li > p"), 1, {left:0, ease:Power3.easeOut});
		TweenMax.to($(".gnb .bg_div .black li > p"), 1, {left:0, ease:Power3.easeOut});
		TweenMax.to($(".gnb .menu_head"), 1, {opacity:1, ease:Power3.easeOut});

		TweenMax.to($(".gnb .menu_div .white li > a"), 1, {left:0, delay:0.5, ease:Power3.easeOut});
		TweenMax.to($(".gnb .menu_div .white li > a.xbt"), 1, {left:60, delay:0.5, ease:Power3.easeOut});
		TweenMax.to($(".gnb .menu_div .black li > a"), 1, {left:80, delay:0.5, ease:Power3.easeOut});
	});

	$(".gnb .menu_div .white li > a.xbt").on('click', function(){
		TweenMax.to($(".gnb .bg_div .white li > p"), 1, {left:'-100%', delay:0.5, ease:Power3.easeOut});
		TweenMax.to($(".gnb .bg_div .black li > p"), 1, {left:'-100%', delay:0.5, ease:Power3.easeOut});
		TweenMax.to($(".gnb .menu_head"), 1, {opacity:0, delay:0.5, ease:Power3.easeOut, onComplete:function(){
			$(".gnb").css('display', 'none');
		}});

		TweenMax.to($(".gnb .menu_div .white li > a"), 1, {left:'-100%', ease:Power3.easeOut});
		TweenMax.to($(".gnb .menu_div .white li > a.xbt"), 1, {left:'-100%', ease:Power3.easeOut});
		TweenMax.to($(".gnb .menu_div .black li > a"), 1, {left:'-100%', ease:Power3.easeOut});
	});

	$("#footer .inner .right a").on('click', function(){
		TweenMax.to($("body, html"), 2, {scrollTop : 0, ease:Power3.easeOut});
	});
});
