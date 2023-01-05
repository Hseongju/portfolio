$(function () {
	//로드
	var device = '';
	var isCheck = false;
    var agent = navigator.userAgent.toLowerCase();
	var _winW;
	var _winH;
	var scTop;
	var lastY = 0;

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

	var sectionN = 0;
	var sectionMove = false;
	var sectionScrollN = 0;
	var sectionScrollMove = true;

	$("#wrap").on('mousewheel DOMMouseScroll', function(e) {
		var E = e.originalEvent;
		delta = 0;
		if (E.detail) {
		}else{
			delta = E.wheelDelta;
			deltaY = E.deltaY
			if(delta == 120){
				//위
				if(sectionN == 1){
					if(!sectionMove){
						if($(window).scrollTop() == 0){
							sectionMove = true;
							TweenMax.to($(".discover_div"), 1, {height:'0', ease:Power3.easeOut, onComplete:function(){
								$("body").css("overflow","hidden");
								sectionN = 0;
								sectionMove = false;
								$(".scroll_click").show();
							}});
						}
					}
				}
			}else if(delta == -120){
				//아래
				if(sectionN == 0){
					if(!sectionMove){
						sectionMove = true;
						TweenMax.to($(".discover_div"), 1, {height:'100vh', ease:Power3.easeOut, onComplete:function(){
							$("body").css("overflow","");
							sectionN = 1;
							sectionMove = false;
							TweenMax.to($(".discover_div .txt_div1 .txt1 img"), 1.2, {top:0, opacity:1, ease:Power3.easeOut})
							TweenMax.to($(".discover_div .txt_div1 .txt2 img"), 1.2, {top:0, opacity:1, delay:0.1, ease:Power3.easeOut})
							TweenMax.to($(".discover_div .txt_div1 .txt3 img"), 1.2, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut})
							TweenMax.to($(".discover_div .txt_div2 .txt1 img"), 1.2, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut})
							TweenMax.to($(".discover_div .txt_div2 .txt2 img"), 1.2, {top:0, opacity:1, delay:0.4, ease:Power3.easeOut})
							$(".scroll_click").hide();
						}});
					}
				}
			}
		}
	});

	$(".scroll_click").on("click", function(){
		if(sectionN == 0){
			if(!sectionMove){
				sectionMove = true;
				TweenMax.to($(".discover_div"), 1, {height:'100vh', ease:Power3.easeOut, onComplete:function(){
					$("body").css("overflow","");
					sectionN = 1;
					sectionMove = false;
					TweenMax.to($(".discover_div .txt_div1 .txt1 img"), 1.2, {top:0, opacity:1, ease:Power3.easeOut})
					TweenMax.to($(".discover_div .txt_div1 .txt2 img"), 1.2, {top:0, opacity:1, delay:0.1, ease:Power3.easeOut})
					TweenMax.to($(".discover_div .txt_div1 .txt3 img"), 1.2, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut})
					TweenMax.to($(".discover_div .txt_div2 .txt1 img"), 1.2, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut})
					TweenMax.to($(".discover_div .txt_div2 .txt2 img"), 1.2, {top:0, opacity:1, delay:0.4, ease:Power3.easeOut});
					$(".scroll_click").hide();
				}});
			}
		}
	});
	
	var windowH = ($(window).height() / 2);

	$(window).scroll(function(){
		if($(window).scrollTop() > $(".brand .detre_cont #section1").offset().top - windowH && $(window).scrollTop() <= $(".brand .detre_cont #section2").offset().top - windowH){
			TweenMax.to($("#wrap.detre.brand .detre_cont #section1 .cont .txt_div1"), 1.5, {top:0, opacity:1, ease:Power3.easeOut})
			TweenMax.to($("#wrap.detre.brand .detre_cont #section1 .cont .img_div1"), 1.5, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut})
			TweenMax.to($("#wrap.detre.brand .detre_cont #section1 .cont .img_div2"), 1.5, {bottom:190, opacity:1, delay:0.4, ease:Power3.easeOut})
		}else if($(window).scrollTop() > $(".brand .detre_cont #section2").offset().top - windowH && $(window).scrollTop() <= $(".brand .detre_cont #section2").offset().top + 100){
			TweenMax.to($("#wrap.detre.brand .detre_cont #section2 .cont .img_div1"), 1.5, {top:0, opacity:1, ease:Power3.easeOut})
			TweenMax.to($("#wrap.detre.brand .detre_cont #section2 .cont .txt_div1"), 1.5, {top:30, opacity:1, delay:0.2, ease:Power3.easeOut})
		}else if($(window).scrollTop() > $(".brand .detre_cont #section2").offset().top + 100 && $(window).scrollTop() <= $(".brand .detre_cont #section3").offset().top - windowH - 100){
			TweenMax.to($("#wrap.detre.brand .detre_cont #section2 .cont .txt_div2"), 1.5, {top:370, opacity:1, ease:Power3.easeOut})
			TweenMax.to($("#wrap.detre.brand .detre_cont #section2 .cont .txt_div2 .txt1"), 0.5, {opacity:0, delay:0.4, ease:Power3.easeOut})
			TweenMax.to($("#wrap.detre.brand .detre_cont #section2 .cont .img_div2"), 1.5, {bottom:0, opacity:1, delay:0.4, ease:Power3.easeOut})
		}else if($(window).scrollTop() > $(".brand .detre_cont #section3").offset().top - windowH - 100){
			TweenMax.to($("#wrap.detre.brand .detre_cont #section3 .cont .title"), 1.5, {top:0, opacity:1, ease:Power3.easeOut})
		}

		if($(window).scrollTop() > $(".brand .detre_cont #section4").offset().top - windowH && $(window).scrollTop() <= $(".brand .detre_cont #section4").offset().top + 200){
			TweenMax.to($("#wrap.detre .detre_cont #section4.identity .inner .iden_div:nth-child(1) .left"), 1.5, {top:0, opacity:1, ease:Power3.easeOut})
			TweenMax.to($("#wrap.detre .detre_cont #section4.identity .inner .iden_div:nth-child(1) .right .img_div"), 1.5, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($("#wrap.detre .detre_cont #section4.identity .inner .iden_div:nth-child(1) .right > img"), 1.5, {opacity:1, delay:0.3, ease:Power3.easeOut});
		}else if($(window).scrollTop() > $(".brand .detre_cont #section4").offset().top + 200){
			TweenMax.to($("#wrap.detre .detre_cont #section4.identity .inner .iden_div:nth-child(2) .left"), 1.5, {top:0, opacity:1, ease:Power3.easeOut})
			TweenMax.to($("#wrap.detre .detre_cont #section4.identity .inner .iden_div:nth-child(2) .right > img"), 1.5, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($("#wrap.detre .detre_cont #section4.identity .inner .iden_div:nth-child(2) .right .color_div"), 1.5, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});
		}

		if($(".scroll_motion").length != 0){
			$(".scroll_motion").each(function(index){
				if($(window).scrollTop() + $(window).height() > _getScrollObjY1()[index]) $(".scroll_motion").eq(index).addClass("active");
				else $(".scroll_motion").eq(index).removeClass("active");
			});
        }


		$("#footer .txt3").on("click", function(){
			$(window).scrollTop(0);
			TweenMax.to($(".discover_div"), 0, {height:'0', ease:Power3.easeOut, onComplete:function(){
				$("body").css("overflow","hidden");
				sectionN = 0;
				sectionMove = false;
				$(".scroll_click").show();
			}});
		});
    });$(window).scroll();


	var video = $(".discover_div .bg video").get(0);

	$(window).load(function(){
		video.play();
	});
    
    if($(".brand").length > 0){
		gsap.to(".brand .brand_visual .txt_cont .txt1", 0.7, {delay:0.1, opacity:1, top:0});
		gsap.to(".brand .brand_visual .txt_cont .txt2", 0.7, {delay:0.2, opacity:1, top:0});
		gsap.to(".brand .brand_visual .txt_cont .txt3", 0.7, {delay:0.3, opacity:1, top:0});
		gsap.to(".brand .brand_visual .txt_cont .txt4", 0.7, {delay:0.4, opacity:1, top:0});
		gsap.to(".brand .brand_visual .txt_cont .txt5", 0.7, {delay:0.5, opacity:1, top:0});
		gsap.to(".brand .brand_visual .txt_cont .txt6", 0.7, {delay:0.6, opacity:1, top:0});
		gsap.to(".brand .brand_visual .txt_cont .txt7", 0.7, {delay:0.7, opacity:1, top:0});
		gsap.to(".brand .brand_visual .txt_cont .txt8", 0.7, {delay:0.8, opacity:1, top:0});
		gsap.to(".brand .brand_visual .txt_cont .txt9", 0.7, {delay:0.9, opacity:1, top:0});
		gsap.to(".brand .brand_visual .txt_cont .txt10", 0.7, {delay:1, opacity:1, top:0});

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

        // scrolltrigger
		gsap.registerPlugin(ScrollTrigger);

        // sec1
        var brandSlideMove = gsap.timeline();
        brandSlideMove.to("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_img p.img2", 1, {top:"0"}, 0)
					  .to("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_img p.img3", 1, {top :"0"}, 0.95);
        ScrollTrigger.create({
            animation: brandSlideMove,
			trigger: ".slide_div",
			end:"+=300%",
            scrub: 1,
			pin:true,
			onUpdate: function(self){
				console.log(self.progress.toFixed(3));
				if(self.progress.toFixed(3) > 0 && self.progress.toFixed(3) < 0.28){
					/*$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div").hide();
					$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(1)").show();
					TweenMax.to($("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(1) .txt1 img"), 1.6, {top:0, opacity:1, ease:Power3.easeOut});
					TweenMax.to($("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(1) .txt2 img"), 1.6, {top:0, opacity:1, delay:0.1,  ease:Power3.easeOut});
					TweenMax.to($("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(1) .txt3 img"), 1.6, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});*/
					//$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div").hide();
					$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div").removeClass("on");
					//$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(1)").show();
					$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(1)").addClass("on");
				}else if(self.progress.toFixed(3) >= 0.28 && self.progress.toFixed(3) < 0.6){
					/*$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div").hide();
					$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(2)").show();
					TweenMax.to($("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(2) .txt1 img"), 1.6, {top:0, opacity:1, ease:Power3.easeOut});
					TweenMax.to($("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(2) .txt2 img"), 1.6, {top:0, opacity:1, delay:0.1,  ease:Power3.easeOut});
					TweenMax.to($("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(2) .txt3 img"), 1.6, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});*/
					//$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div").hide();
					$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div").removeClass("on");
					//$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(2)").show();
					$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(2)").addClass("on");
				}else if(self.progress.toFixed(3) >= 0.6){
					/*$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div").hide();
					$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(3)").show();
					TweenMax.to($("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(3) .txt1 img"), 1.6, {top:0, opacity:1, ease:Power3.easeOut});
					TweenMax.to($("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(3) .txt2 img"), 1.6, {top:0, opacity:1, delay:0.1,  ease:Power3.easeOut});
					TweenMax.to($("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(3) .txt3 img"), 1.6, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});*/
					//$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div").hide();
					$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div").removeClass("on");
					//$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(3)").show();
					$("#wrap.detre.brand .detre_cont #section3 .cont .slide_div .slide_txt .txt_div:nth-child(3)").addClass("on");
				}
			},
        });

        /*gsap.to($(".slide_div .slide_img"), {
            scrollTrigger: {
                trigger: ".slide_div",
                start: "0 0",
                end: "+=150%",
                scrub: 1,
				pin:true,
				markers:true,
				onUpdate: function(self){
					console.log(self.progress.toFixed(3));
					if(self.progress.toFixed(3) >= 0.3){
						
					}else{
					}
					if(self.progress.toFixed(3) >= 0.6){
					}
				},

            },
            ease: "none"
        });
        */
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
    }

	$(window).on('beforeunload', function(){
		$(window).scrollTop(0);
	});
});