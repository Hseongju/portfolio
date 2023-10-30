$(function(){
    main.swipe();
	main.visualChange();
	main.scrollMotion();
	//브랜드 탭버튼
	$('.brand .tab li button').on("click", function(event) {
		$('.brand .tab li').removeClass('active');
		$(this).parents('li').addClass('active');
	});

	//
	$('.visualBtn').bind('click', function(){
		TweenMax.to($('.heritage'), 0.8, {right:0, ease:Power3.easeOut});
	});
	$('.heritage .close').bind('click', function(){
		TweenMax.to($('.heritage'), 0.8, {right:'-100%', ease:Power3.easeOut});
	});
	
	//견학신청
	$('.visit a').on('mouseenter', function(){
		TweenMax.to($(".visit .bgImg"), 0.8, {transform:'scale(1.1)', ease:Power3.easeinOut});
	});
	$('.visit a').on('mouseleave', function(){
		TweenMax.to($(".visit .bgImg"), 0.8, {transform:'scale(1)',  ease:Power3.easeinOut});
	});

	$('#footer a').on('click', function(){
		$("html, body").animate({scrollTop : 0},400);
	});

});


var main = function(){
   	var _myTween1, _myTween2, _myTween3, _myTween5;
	var countMotion = false;
    return {

	//start
        swipe : function(){
			var visualMenu = ['<img src="./images/visual-indi-01.png" alt="">', '<img src="./images/visual-indi-02.png" alt="">', '<img src="./images/visual-indi-03.png" alt="">'];
			var mainVisual = new Swiper('.mainVisual .swiper-container', {
				pagination: {
					el: '.mainVisual .swiper-pagination',
					clickable: true,
					
					renderBullet: function (index, className) {
					  return '<span class="' + className + '"><span class="indiBar"><span class="cover"></span></span>' + (visualMenu[index]) + '</span>';
					},

				},
					speed : 1000,
				autoplay: {
					delay: 5000,
					//autoplayDisableOnInteraction: true,
				},
				on : {
					slideChangeTransitionStart : function () {
						main.visualChange();
						//console.log(this.activeIndex); // this.activeIndex 에 현재 슬라이드 번호가 들어있습니다
						$(".mainVisual .swiper-pagination-bullet").removeClass("prevSwipe");
						for(var i=0; i<this.activeIndex; i++) {
							$(".mainVisual .swiper-pagination-bullet").eq(i).addClass("prevSwipe");
						}
					},
				},

			});


			var brandText = new Swiper('.brand .textSlide .swiper-container', {
				slidesPerView: 1,
				loop: true,
				loopedSlides: 3,
				effect: 'fade',
				navigation: {
					nextEl: '.brand .swiper-button-next',
					prevEl: '.brand .swiper-button-prev',
				},
				on : {
					slideChange : function () {
						console.log(this.activeIndex); // this.activeIndex 에 현재 슬라이드 번호가 들어있습니다

						var currentNum = this.activeIndex-2;
						if(currentNum == 0){
							currentNum = 3;
						}
						$('.brand .swiper-control').attr('data-current', 'currentNum'+currentNum)

						if(this.activeIndex==5){
							$('.brand .tab li').removeClass('active');
							$('.brand .tab li:nth-child(2)').addClass('active');
						}else{
							$('.brand .tab li').removeClass('active');
							$('.brand .tab li:first-child').addClass('active');
						}
					},
				},
			});
			var brandImg = new Swiper('.brand .imgSlide .swiper-container', {
				slidesPerView: 'auto',
				spaceBetween: 480,
				loop: true,
				loopedSlides: 3
			});
			$('.brand .tab1').on('click', function (e) {
				e.preventDefault();
				brandImg.slideTo(0, 0);
				brandText.slideTo(0, 0);
			});
			$('.brand .tab2').on('click', function (e) {
				e.preventDefault();
				brandImg.slideTo(2, 0);
				brandText.slideTo(2, 0);
			});

			brandImg.controller.control = brandText;
			brandText.controller.control = brandImg;

		var channel = new Swiper('.channel .smallSlide .swiper-container', {
				slidesPerView : 'auto',
				spaceBetween : 14,
				cssMode : true,
				navigation: {
					nextEl: '.channel .swiper-button-next',
					prevEl: '.channel .swiper-button-prev',
				},
				pagination: {
					el: '.channel .swiper-pagination',
					type : 'progressbar',
				},

			});
		},
		visualChange : function () {
			//none active motion
			if(_myTween1 != undefined) {
				_myTween1.kill();
				_myTween2.kill();
				_myTween3.kill();
				_myTween5.kill();
			}
			_myTween1 = new TweenMax.to($(".mainVisual .title"), 0, {top:100, opacity:0, ease:Power3.easeOut});
			_myTween2 = new TweenMax.to($(".mainVisual .text"), 0, {top:100, opacity:0, ease:Power3.easeOut});
			_myTween3 = new TweenMax.to($(".mainVisual .more"), 0, {top:100, opacity:0, ease:Power3.easeOut});
		
			_myTween5 = new TweenMax.to($(".mainVisual .swiper-pagination-bullet .indiBar .cover"), 0, {width: 0, ease:Power0.easeNone});
			
			//active motion
			_myTween1 = new TweenMax.to($(".mainVisual .swiper-slide-active .title"), 0.8, {delay:0.3, top:0, opacity:1, ease:Power3.easeOut});
			_myTween2 = new TweenMax.to($(".mainVisual .swiper-slide-active .text"), 0.6, {delay:0.6, top:0, opacity:1, ease:Power3.easeOut});
			_myTween3 = new TweenMax.to($(".mainVisual .swiper-slide-active .more"), 0.6, {delay:0.8, top:0, opacity:1, ease:Power3.easeOut});
	
			_myTween5 = new TweenMax.to($(".mainVisual .swiper-pagination-bullet-active .indiBar .cover"), 5, {width: "100%", ease:Power0.easeNone});


		},
		scrollMotion : function(){
			$(window).scroll(function(){
				//브랜드
				if( $(window).scrollTop() > $('.brand').offset().top - 950){
					TweenMax.to($(".brand .title"), 0.5, {top:0, opacity:1, ease:Power3.easeOut});
					TweenMax.to($(".brand .tab"), 0.5, {delay:0.2, top:0, opacity:1, ease:Power3.easeOut});

				};
				if( $(window).scrollTop() > $('.brand').offset().top - 600){
					TweenMax.to($(".brand .imgSlide"), 0.8, {left:0, opacity:1, ease:Power1.easeOut});
					TweenMax.to($(".brand .textSlide"), 0.8, {x:0, opacity:1, ease:Power1.easeOut});
				}
				//네트워크
				if( $(window).scrollTop() > $('.network').offset().top - 900){
					TweenMax.to($(".network .title"), 2, {delay:0.3, top:0, opacity:1, ease:Power3.easeOut});
					TweenMax.to($(".network .sectionText"), 2, {delay:0.6, top:0, opacity:1, ease:Power3.easeOut});
					TweenMax.to($(".network .count li:nth-child(1)"), 0.6, {delay:0.8, top:0, opacity:1, ease:Power3.easeOut});
					TweenMax.to($(".network .count li:nth-child(2)"), 0.6, {delay:0.95, top:0, opacity:1, ease:Power3.easeOut});
					TweenMax.to($(".network .count li:nth-child(3)"), 0.6, {delay:1.1, top:0, opacity:1, ease:Power3.easeOut});
					


					if(!countMotion) {
						countMotion = true;
						$('#num1').counterUp({
							delay: 10,
							time: 2000
						});

						$('#num2').counterUp({
							delay: 15,
							time: 3000
						});
						$('#num3').counterUp({
							delay: 15,
							time: 2000
						});
					};
				};
				if( $(window).scrollTop() > $('.network').offset().top - 200){
					TweenMax.to($(".network .textBox li:nth-child(1)"), 0.6, {top:0, opacity:1, ease:Power3.easeOut});
					TweenMax.to($(".network .textBox li:nth-child(2)"), 0.6, {delay:0.2, top:0, marginTop:-70, opacity:1, ease:Power3.easeOut});
					TweenMax.to($(".network .textBox li:nth-child(3)"), 0.6, {delay:0.4, top:0, opacity:1, ease:Power3.easeOut});
				}

				TweenMax.to($(".network .bgArea img"), 1, {top:($(window).scrollTop()*0.2)*-1, ease:Power3.easeOut});


				//KGC채널
				if( $(window).scrollTop() > $('.channel').offset().top - 950){
					TweenMax.to($(".channel .title"), 3, {delay:0.3, top:0, opacity:1, ease:Power3.easeOut});
					TweenMax.to($(".channel .largeSlide"), 3, {delay:0.8, top:0, opacity:1, ease:Power3.easeOut});

				};
				if( $(window).scrollTop() > $('.channel').offset().top - 100){
					TweenMax.to($(".channel .smallSlide"), 1, {top:0, opacity:1, ease:Power3.easeOut});
				}
				//KGC채널
				/*
				if( $(window).scrollTop() > $('.visit').offset().top - 900){
					TweenMax.to($(".visit .bgImg"), 2, {top:-80, ease:Power0.easeNone});
				}
				if( $(window).scrollTop() > $('.visit').offset().top - 600){
					TweenMax.to($(".visit .bgImg"), 2, {top:0, ease:Power0.easeNone});
				};*/
				TweenMax.to($(".visit .bgImg"), 0.6, {top:400+($(window).scrollTop()*0.1021)*-1, ease:Power3.easeOut});
			});
		},
//end
    }
}();



