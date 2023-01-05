$(function() {
   var detreMaxH = $(window).outerHeight();
   var device = '';

	// scroll_motion
	var _getScrollObjY1 = function(){ 
		var scrollArray1 =[];
		var pHeight;
		if(device == "pc"){
			pHeight = 400;
		}else{
			pHeight = 300;
		}
		$(".scroll_motion").each(function(index){
			scrollArray1.push(parseInt($(".scroll_motion").eq(index).offset().top) + pHeight);
		});
		return scrollArray1;
	}

    // detre start
    if($("#wrap.detre").size() > 0){
        // console.log("detre main");

		// common header		
		$("#header .gnb a").hover(function(){
			$("#header").addClass("on");
			$(".two_depth").stop().slideDown(350);
		}, function(){
			$("#header").removeClass("on");
			$(".two_depth").stop().slideUp(350);
		});
		$(".two_depth").hover(function(){
			$("#header").addClass("on");
			$(".two_depth").stop().slideDown(0);
		}, function(){
			$("#header").removeClass("on");
			$(".two_depth").stop().slideUp(350);
		});

		TweenMax.to($("#header"),2,{top:0, delay:0.6, ease:Power3.easeOut});

		$(".util .one").on("click", function(){
			TweenMax.to($(".cal"),1,{top:0, ease:Power3.easeOut});
		});
		$(".cal .btn").on("click", function(){
			TweenMax.to($(".cal"),1,{top:"-100%", ease:Power3.easeOut});
		});
		
		$(".util .thr").on("click", function(){
			$(".menu").fadeIn(400);
		});
		$(".menu .btn").on("click", function(){
			$(".menu").fadeOut(400);
		});
		// // common header

        // vis
        // gsap.to("#wrap.detre .detre_visual .bg video", 5, {transform:"translate(-50%, -50%) scale(1.0)"});
        gsap.to(".detre .detre_visual .txt_cont .txt1", 2, {delay:0.1, opacity:1, top:0});
        gsap.to(".detre .detre_visual .txt_cont .txt2", 2, {delay:0.3, opacity:1, top:0});
        gsap.to(".detre .detre_visual .txt_cont .txt3", 2, {delay:0.5, opacity:1, top:0});

        //pop icon clk evt
        $("#wrap.detre .pop_cont .icon").on("click", function(){
            if(!$(this).hasClass("on")){
                $(this).addClass("on");
                $(this).next(".info").fadeIn(300);
                $(this).find("img").attr("src", "./images/detre-pop-close-icon.png");
            }else{
                $(this).removeClass("on");
                $(this).next(".info").fadeOut(300);
                $(this).find("img").attr("src", "./images/detre-pop-icon.png");
            }
        });

		$("#wrap.detre .pop_cont .icon").hover(function(){
            if($(this).hasClass("on")){
				console.log("on");
				$(this).find("img").attr("src", "./images/detre-pop-close-icon-hover.png");
			}
		}, function(){
            if($(this).hasClass("on")){
				$(this).find("img").attr("src", "./images/detre-pop-close-icon.png");
			}
		})

		// 3 list hover
		$("#wrap.detre .detre_cont #section1 .cont2 .imgArea .txt_cont .list a").each(function(q){
			$(this).hover(function(){
				// $(this).find("img").attr("src", $(this).find("img").attr("src").replace("-off.png", "-on.png"));
				gsap.to("#wrap.detre .detre_cont #section1 .cont2 .imgArea .dimd", 0.4, {opacity:0.6 });
				$("#wrap.detre .detre_cont #section1 .cont2 .imgArea .img_fixed .list_img p").eq(q).stop(true, true).fadeIn(500);

				$(this).addClass("on").css("transition-delay", 0);
				
			}, function(){
				// $(this).find("img").attr("src", $(this).find("img").attr("src").replace("-on.png", "-off.png"));
				gsap.to("#wrap.detre .detre_cont #section1 .cont2 .imgArea .dimd", 0.4, {opacity:0 });
				$("#wrap.detre .detre_cont #section1 .cont2 .imgArea .img_fixed .list_img p").eq(q).stop(true, true).fadeOut(300);
				
				$(this).removeClass("on");
			});
		})


        // ** scrolltrigger
        gsap.registerPlugin(ScrollTrigger);

        var detreSec1Move = gsap.timeline();
        detreSec1Move.fromTo("#wrap.detre .detre_cont #section1 .cont1 .txt", 20, {top:"30%"}, {top:"10%"}, 0)
        .fromTo("#wrap.detre .detre_cont #section1 .cont1 .img1", 20, {top:"50%"}, {top:"10%"}, 0)
        .fromTo("#wrap.detre .detre_cont #section1 .cont1 .img2", 30, {top:"70%"}, {delay:5, top:"40%"}, 0)
        .fromTo("#wrap.detre .detre_cont #section1 .cont1 .img3", 20, {top:"100%"}, {delay:10, top:"60%"}, 0);
        ScrollTrigger.create({
            animation: detreSec1Move,
            trigger: "#wrap.detre .detre_cont #section1",
            start: "-20% 0",
            end: detreMaxH * 2.6,
            scrub: 1,
        });

        // 아치형 fixed
        var detreSec1_1Move = gsap.timeline();
        detreSec1_1Move.to("#wrap.detre .detre_cont #section1 .cont2 .imgArea .img_fixed", 1, { "width":"800px"}, 0.3)
		.to("#wrap.detre .detre_cont #section1 .cont2 .imgArea .img_fixed .change_img img.small", 1, {width :"800px", bottom:0}, 0.4);
        ScrollTrigger.create({
            animation: detreSec1_1Move,
			trigger: "#wrap.detre .detre_cont #section1 .cont2 .imgArea",
			end:"+=100%",
            scrub: 1,
			pin:true,
        });

        gsap.to("#wrap.detre .detre_cont #section1 .cont2 .move_img", {
            scrollTrigger: {
                trigger: "#wrap.detre .detre_cont #section1 .cont2 .imgArea",
                start: "0 0",
                end: "+=100%",
                scrub: 1,
                pin: true,
                onUpdate: function(self){
					console.log(self.progress.toFixed(3));
                    if(self.progress.toFixed(3) >= 0.1 && self.progress.toFixed(3) < 0.7 ){
                        $("#wrap.detre .detre_cont #section1 .cont2 .white_cont").css({"opacity" : self.progress.toFixed(3) * 1.7});
                    }else if(self.progress.toFixed(3) >= 0.7 ){
                        $("#wrap.detre .detre_cont #section1 .cont2 .white_cont").css({"background" : "#fff"}  );
					}else if(self.progress.toFixed(3) == 0 ){
						$("#wrap.detre .detre_cont #section1 .cont2 .white_cont").css({"opacity" : 0});
						gsap.to("#wrap.detre .detre_cont #section1 .cont2 .imgArea .img_fixed .change_img img.big", 0.4, {opacity:1});
						gsap.to("#wrap.detre .detre_cont #section1 .cont2 .imgArea .img_fixed .change_img img.small", 0.4, {opacity:0});
					}else{
					}

					if(self.progress.toFixed(3) >= 0.3 ){
						gsap.to("#wrap.detre .detre_cont #section1 .cont2 .imgArea .img_fixed .change_img img.big", 0.4, {opacity:0});
						gsap.to("#wrap.detre .detre_cont #section1 .cont2 .imgArea .img_fixed .change_img img.small", 0.4, {opacity:1});
					}
					
					if(self.progress.toFixed(3) >= 0.7 ){
						$("#wrap.detre .detre_cont #section1 .cont2 .imgArea .txt_cont > .txt1").addClass("active");
						$("#wrap.detre .detre_cont #section1 .cont2 .imgArea .txt_cont > .txt2").addClass("active");
						$("#wrap.detre .detre_cont #section1 .cont2 .imgArea .txt_cont .list a").addClass("active");
						$("#wrap.detre .detre_cont #section1 .cont2 .imgArea .txt_cont").css("z-index", 5);
					}else{
						$("#wrap.detre .detre_cont #section1 .cont2 .imgArea .txt_cont > .txt1").removeClass("active");
						$("#wrap.detre .detre_cont #section1 .cont2 .imgArea .txt_cont > .txt2").removeClass("active");
						$("#wrap.detre .detre_cont #section1 .cont2 .imgArea .txt_cont .list a").removeClass("active");
						$("#wrap.detre .detre_cont #section1 .cont2 .imgArea .txt_cont").css("z-index", 1);
					}
					
					if(self.progress.toFixed(3) >= 0.1 ){
						gsap.to("#wrap.detre .detre_cont #section1 .cont2 .imgArea .b_radius .left", 0.5, {"width":0});
						gsap.to("#wrap.detre .detre_cont #section1 .cont2 .imgArea .b_radius .right", 0.5, {"width":0});
					}else{
						gsap.to("#wrap.detre .detre_cont #section1 .cont2 .imgArea .b_radius .left", 0.5, {"border-radius":"10%", "width":"500%"});
						gsap.to("#wrap.detre .detre_cont #section1 .cont2 .imgArea .b_radius .right", 0.5, {"border-radius":"10%", "width":"500%"});
					}
                },
				onLeave: function(){
					$("#wrap.detre .detre_cont #section1 .cont2 .white_cont").css({"background" : "#fff", opacity:1}  );
				}
            },
        });

		// sec2
        var detreSec2Move = gsap.timeline();
        detreSec2Move.to("#wrap.detre .detre_cont #section2 .cont1 .left", 5, {top:"50%", transform:"translateY(-50%)"}, 0.1);
        ScrollTrigger.create({
            animation: detreSec2Move,
			trigger: "#wrap.detre .detre_cont #section2 .cont1",
			end:"+=100%",
            scrub: 1,
			pin:true,
        });

        gsap.to("#wrap.detre .detre_cont #section2 .cont1", {
			scrollTrigger: {
				trigger: "#wrap.detre .detre_cont #section2 .cont1",
				start: "0% 0",
				end:"+=100%",
				scrub:1,
				pin:true,
				onUpdate: function(self){
					// console.log(self.progress.toFixed(3));
					if(self.progress.toFixed(3) >= 0){
						$("#wrap.detre .detre_cont #section2 .cont1 .right").addClass("active");
					}else{
						$("#wrap.detre .detre_cont #section2 .cont1 .right").removeClass("active");
					}
					
					if(self.progress.toFixed(3) == 0){
						$("#wrap.detre .detre_cont #section2 .cont1 .right").removeClass("active");
					}
				}

			},
			ease:"none",
		});

		// video area
		gsap.to("#wrap.detre .detre_cont #section2 .cont2", {
			scrollTrigger: {
				trigger: "#wrap.detre .detre_cont #section2 .cont2",
				start: "0 0",
				end:"bottom top",
				scrub:1,
				// pin:true,
				onUpdate: function(self){
					if(self.progress.toFixed(3) >= 0) {
						$("#wrap.detre .detre_cont #section2 .cont2").addClass("fixed");
					}

					if(self.progress.toFixed(3) == 0){
						$("#wrap.detre .detre_cont #section2 .cont2").removeClass("fixed");
					}
				},
			},
			ease:"slow",
		});

		var rollListNum = 0;
		var rollList = $(".roll_sec3 .slide_list .slide .img .img_list");
		var rollTxtList = $(".roll_sec3 .slide_list .slide .txt .txt_list");
		$(".roll_sec3 .rolling_btn .next").on("click", function(){
			if(rollListNum == 0){
				rollListNum = 1;
				TweenMax.to(rollList, 0.8, {left:-300, ease:Power3.easeOut});
				TweenMax.to(rollTxtList, 0.8, {left:-300, ease:Power3.easeOut});
			}else if(rollListNum == 1){
				rollListNum = 2;
				TweenMax.to(rollList, 0.8, {left:-600, ease:Power3.easeOut});
				TweenMax.to(rollTxtList, 0.8, {left:-600, ease:Power3.easeOut});
			}else if(rollListNum == 2){
				rollListNum = 0;
				TweenMax.to(rollList, 0.8, {left:0, ease:Power3.easeOut});
				TweenMax.to(rollTxtList, 0.8, {left:0, ease:Power3.easeOut});
			}
		});

		//slide hover
		$("#wrap.detre .detre_cont #section3 .roll_sec3 .slide_list .slide").each(function(q){
			$(this).hover(function(){
				TweenMax.to($("#wrap.detre .detre_cont #section3 .roll_sec3 .slide_list .slide").eq(q).find(".img_list "), 1, {"top":"-20%", ease:Power3.easeOut});
				TweenMax.to($("#wrap.detre .detre_cont #section3 .roll_sec3 .slide_list .slide").eq(q).children(".img"), 1, {"height":"300px", ease:Power3.easeOut});
			}, function(){
				TweenMax.to($("#wrap.detre .detre_cont #section3 .roll_sec3 .slide_list .slide").eq(q).find(".img_list "), 1, {"top":"0%", ease:Power3.easeOut});
				TweenMax.to($("#wrap.detre .detre_cont #section3 .roll_sec3 .slide_list .slide").eq(q).children(".img"), 1, {"height":"420px", ease:Power3.easeOut});

			});
		});
		
		
		var swiper2 = new Swiper('.roll_sec4 .swiper-container', {
			slidesPerView: 3,
			spaceBetween: 300,
			// loop: true,
			speed:1000,
			allowTouchMove: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			on: {
				init: function(index){
					$(".roll_sec4 .swiper-slide").each(function (q) {
						$(this).on("click", function(){
							swiper2.slideTo($(".roll_sec4 .swiper-slide").eq(q).index(), 1000);
						});
					});
					$(".roll_sec4 .swiper-slide").removeClass("on");
					$(".roll_sec4 .swiper-slide").eq(this.activeIndex).addClass("on");
					// $(".roll_sec4 .roll_txt a").eq(this.activeIndex).delay(300).fadeIn(1000);
					$(".roll_sec4 .roll_txt a").removeClass("active");
					$(".roll_sec4 .roll_txt a").eq(this.activeIndex).addClass("active");
				},
				slideChangeTransitionStart: function(){
					$(".roll_sec4 .swiper-slide").removeClass("on");
					$(".roll_sec4 .swiper-slide").eq(this.activeIndex).addClass("on");
					// $(".roll_sec4 .roll_txt a").delay(0).fadeOut(200);
					// $(".roll_sec4 .roll_txt a").eq(this.activeIndex).delay(300).fadeIn(1000);
					$(".roll_sec4 .roll_txt a").removeClass("active");
					$(".roll_sec4 .roll_txt a").eq(this.activeIndex).addClass("active");
				},
			}
		});
    }

    var scTop;
    var lastY = 0;
    var isCheck = false;
    var agent = navigator.userAgent.toLowerCase();
    if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) isIeCheck = true;
    else isIeCheck = false;

	$(window).on('scroll', function(){ // scroll
		if($(".scroll_motion").length != 0){
			$(".scroll_motion").each(function(index){
				if($(window).scrollTop() + $(window).height() > _getScrollObjY1()[index]) $(".scroll_motion").eq(index).addClass("active");
				else $(".scroll_motion").eq(index).removeClass("active");
			});
        }
				
		// if(isIeCheck) {
		// 	$("body").on("mousewheel", function (event) {
		// 		if(event.originalEvent.wheelDelta < 0) {
		// 			$("#header").addClass("hide");
		// 		}
		// 		else $("#header").removeClass("hide");
		// 	});
		// } else {
		// 	if($(window).scrollTop() > lastY){
		// 		$("#header").addClass("hide");
		// 	} 
		// 	else $("#header").removeClass("hide");
		// 	lastY = $(window).scrollTop();
		// }

		$("#footer .txt3").on("click", function(){
			$(window).scrollTop(0);
		});
	});$(window).scroll();
});
