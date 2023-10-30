$(function () {
	$("#header .gnb a").each(function(q){
        $(this).hover(function(){
            $("#header .gnb a").removeClass("on");
            $(this).addClass("on");
            $("#header").addClass("on")
            TweenMax.to($(this).find("p"), .5, {'opacity':1, ease:Power3.easeOut});
            //$(".twoD").stop(true, true).slideDown(350);
			//$(".twoD").stop(true, true).slideDown(350);
            if(q == 0){
				TweenMax.to($(".twoD a:nth-child(2)"), 0, {'opacity':0, ease:Power3.easeOut});
				TweenMax.to($(".twoD a:nth-child(1)"), 0, {'opacity':1, ease:Power3.easeOut});
            }else if(q == 1){
				TweenMax.to($(".twoD a:nth-child(1)"), 0, {'opacity':0, ease:Power3.easeOut});
				TweenMax.to($(".twoD a:nth-child(2)"), 0, {'opacity':1, ease:Power3.easeOut});
			}
        }, function(){
            $("#header").removeClass("on");
            TweenMax.to($(this).find("p"), .5, {'opacity':0, ease:Power3.easeOut}); 
            //$(".twoD").stop().slideUp(350);
        });
    });

    $(".twoD").hover(function(){
        $("#header").addClass("on")
        if($(".first").hasClass("on")){
            TweenMax.to($("#header .gnb a").eq(0).find("p"), .5, {'opacity':1, ease:Power3.easeOut});
        }else if($(".second").hasClass("on")){
            TweenMax.to($("#header .gnb a").eq(1).find("p"), .5, {'opacity':1, ease:Power3.easeOut});
        }
        $(this).addClass("on");
		//$(this).stop().slideDown(0);
	}, function(){
        if($(".first").hasClass("on")){
            TweenMax.to($("#header .gnb a").eq(0).find("p"), .5, {'opacity':0, ease:Power3.easeOut}); 
        }else if($(".second").hasClass("on")){
            TweenMax.to($("#header .gnb a").eq(1).find("p"), .5, {'opacity':0, ease:Power3.easeOut}); 
        }
		$("#header").removeClass("on")
        $(this).removeClass("on");
		//$(this).stop().slideUp(350);
    });
    // $("#header .gnb a").mouseenter(function(){
	// 	$("#header .twoD").slideDown(400);
	// });
	// $("#header").mouseleave(function(){		
	// 	$("#header .twoD").stop().slideUp(400, function(){
	// 		$("#header .twoD").removeClass("over");
	// 	});
	// });
	
	var banNum = 0;
    var banMax = $(".visual_div .visual").length-1;
    var isLast = false;

	$(".visual_info").on("click", function(){
		$(".visual_info .txt_div").fadeOut();
		TweenMax.to($(".visual").eq(banNum).find(".white_bg"), 0, {left:"0"});
		TweenMax.to($(".visual").eq(banNum), 0, {delay:1.5, left:"100%"});
		TweenMax.to($(".visual").eq(banNum).find(".white_bg"), 0, {delay:1.5, left:"100%"});

        banNum++;
        $(".visual").eq(0).css("z-index", ""); 
		if(banNum > banMax) {
			banNum = 0;
            $(".visual").eq(0).css("z-index", "3");
        }
        

		$(".visual_info .txt_div").eq(banNum).fadeIn(600);
		TweenMax.to($(".visual").eq(banNum), 0.45 ,{left:"0", onComplete:function(){
			TweenMax.fromTo($(".visual_div .visual").eq(banNum).find(".txt_area img:nth-child(1)"), 1.2, {top:30, opacity:0}, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut})
			TweenMax.fromTo($(".visual_div .visual").eq(banNum).find(".txt_area img:nth-child(2)"), 1.2, {top:30, opacity:0}, {top:0, opacity:1, delay:1.1, ease:Power3.easeOut})
			TweenMax.fromTo($(".visual_div .visual").eq(banNum).find(".txt_area img:nth-child(3)"), 1.2, {top:30, opacity:0}, {top:0, opacity:1, delay:1.5, ease:Power3.easeOut})
			TweenMax.fromTo($(".visual_div .visual").eq(banNum).find(".txt_area img:nth-child(4)"), 1.2, {top:30, opacity:0}, {top:0, opacity:1, delay:1.9, ease:Power3.easeOut})
            TweenMax.fromTo($(".visual_div .visual").eq(banNum).find(".txt_area img:nth-child(5)"), 1.2, {top:30, opacity:0}, {opacity:1, delay:2.3, ease:Power3.easeOut});

            $(".visual").removeClass("on")
            $(".visual").eq(banNum+1).addClass("on");
            if(banNum >= banMax){
                $(".visual").eq(0).addClass("on")
            }
            
		}});
	});

	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.defaults({
		//markers:true,
    });
    
    gsap.to(".system .icon1", {
		scrollTrigger: {
			trigger: ".system",
			start: "0 205%",
			end: "+=130%",
			//pin: true,
			scrub: true,
			//markers : true,
		},
        "top":675,
        "opacity":1,
		ease: "none"
    });
    
    gsap.to(".system .icon2", {
		scrollTrigger: {
			trigger: ".system",
			start: "0 205%",
			end: "+=130%",
			//pin: true,
			scrub: true,
			//markers : true,
		},
        "top":798,
        "opacity":1,
        "scale":1,
		ease: "none"
    });
    
    gsap.to(".system .icon3", {
		scrollTrigger: {
			trigger: ".system",
			start: "0 205%",
			end: "+=130%",
			//pin: true,
			scrub: true,
			//markers : true,
		},
        "right":0,
        "opacity":1,
		ease: "none"
	});

	gsap.to(".content", {
		scrollTrigger: {
			trigger: ".visual_area",
			start: "0 0",
			end: "+=150%",
			//pin: true,
			scrub: true,
			//markers : true,
		},
		"top":0,
		ease: "none"
	});


    var isAcco = false;

	$(window).load(function(){
		TweenMax.to($(".visual_div .visual:nth-child(1) .txt_area img:nth-child(1)"), 1.2, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
		TweenMax.to($(".visual_div .visual:nth-child(1) .txt_area img:nth-child(2)"), 1.2, {top:0, opacity:1, delay:0.8, ease:Power3.easeOut});
		TweenMax.to($(".visual_div .visual:nth-child(1) .txt_area img:nth-child(3)"), 1.2, {top:0, opacity:1, delay:1.2, ease:Power3.easeOut});
		TweenMax.to($(".visual_div .visual:nth-child(1) .txt_area img:nth-child(4)"), 1.2, {top:0, opacity:1, delay:1.6, ease:Power3.easeOut});
        TweenMax.to($(".visual_div .visual:nth-child(1) .txt_area img:nth-child(5)"), 1.2, {opacity:1, delay:2, ease:Power3.easeOut});

		TweenMax.to($(".visual_info"), 1.2, {bottom:60, opacity:1, delay:0.2, ease:Power3.easeOut});
        $(".visual_info .txt_div:nth-child(1)").show();
        
        $(".acco_div .list").each(function(q){
            $(".acco_div .list").eq(1).addClass("mt");
            $(".acco_div .list").eq(0).find(".tit").hide();
            $(".acco_div .list").eq(0).find(".con").show();
            if(!isAcco){
                console.log(isAcco)
                $(this).find("a").on("click", function(){
                    isAcco = true;
                    if(isAcco){
                        if(!$(this).parents(".list").hasClass("on")){
                            $(".acco_div .list").removeClass("on");
                            $(".acco_div .list").find(".tit").fadeIn();
                            $(".acco_div .list").find(".con").hide();
                            $(this).parents(".list").addClass("on");
                            $(this).find(".tit").fadeOut();
                            $(this).find(".con").show();
                            TweenMax.to($(".acco_div .list").find(".right"), 0, {opacity:0})
                            TweenMax.to($(".acco_div .list").find(".left img:nth-child(1)"), 0, {opacity:0})
                            TweenMax.to($(".acco_div .list").find(".left img:nth-child(2)"), 0, {opacity:0, top:40})
                            TweenMax.to($(".acco_div .list").find(".left img:nth-child(3)"), 0, {opacity:0, top:40})
                            TweenMax.to($(".acco_div .list").find(".left img:nth-child(4)"), 0, {opacity:0, top:40})

                            TweenMax.to($(".acco_div .list").eq(q).find(".right"), 3, {opacity:1, delay:0.4, ease:Power3.easeOut})
                            TweenMax.to($(".acco_div .list").eq(q).find(".left img:nth-child(1)"), 2, {opacity:1, top:0, delay:0.4, ease:Power3.easeOut})
                            TweenMax.to($(".acco_div .list").eq(q).find(".left img:nth-child(2)"), 2, {opacity:1, top:0, delay:0.5, ease:Power3.easeOut})
                            TweenMax.to($(".acco_div .list").eq(q).find(".left img:nth-child(3)"), 2, {opacity:1, top:0, delay:0.6, ease:Power3.easeOut})
                            TweenMax.to($(".acco_div .list").eq(q).find(".left img:nth-child(4)"), 2, {opacity:1, top:0, delay:1, ease:Power3.easeOut})
                            
                            // TweenMax.fromTo($(".acco_div .list").eq(q).find(".right"), 3, {opacity:0}, {opacity:1, delay:0.4, ease:Power3.easeOut})
                            // TweenMax.fromTo($(".acco_div .list").eq(q).find(".left img:nth-child(1)"), 2, {top:40, opacity:0}, {top:0, opacity:1, delay:0.4, ease:Power3.easeOut})
                            // TweenMax.fromTo($(".acco_div .list").eq(q).find(".left img:nth-child(2)"), 2, {top:40, opacity:0}, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut})
                            // TweenMax.fromTo($(".acco_div .list").eq(q).find(".left img:nth-child(3)"), 2, {top:40, opacity:0}, {top:0, opacity:1, delay:0.6, ease:Power3.easeOut})
                            // TweenMax.fromTo($(".acco_div .list").eq(q).find(".left img:nth-child(4)"), 2, {top:40, opacity:0}, {top:0, opacity:1, delay:1, ease:Power3.easeOut, onComplete:function(){
                            //     isAcco = false;
                            // }})
                        }
        
                        if(q == 0){
                            $(".acco_div .list").removeClass("mt");
                            $(".acco_div .list").eq(1).addClass("mt");
                        }else if(q == 1){
                            $(".acco_div .list").removeClass("mt");
                            $(".acco_div .list").eq(2).addClass("mt");
                        }else if(q == 2){
                            $(".acco_div .list").removeClass("mt");
                            $(".acco_div .list").eq(3).addClass("mt");
                        }
                    }
                });
            }
        });

        var swiper1 = new Swiper('.solution .swiper-container', {
            spaceBetween:0,
            loop:true,
            speed:100,
            effect: 'fade',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on:{
                slideChangeTransitionEnd : function(){
                    $(".solution .swiper-slide").find("p").removeAttr("style");
                    TweenMax.fromTo($(".solution .swiper-slide").eq(this.activeIndex).find(".one"), 0, {width:0}, {width:860, ease:Power3.easeOut});
                    TweenMax.fromTo($(".solution .swiper-slide").eq(this.activeIndex).find(".two"), 0, {width:0}, {width:544, delay:0.4, ease:Power3.easeOut});
                    TweenMax.fromTo($(".solution .swiper-slide").eq(this.activeIndex).find(".thr"), 0, {width:0}, {width:910, delay:0.8, ease:Power3.easeOut});
                }
            }
        });

        var swiper3 = new Swiper('.right_swiper .swiper-container', {
            slidesPerView: 3,
            spaceBetween:20,
            speed:600
        });

        var swiper2 = new Swiper('.left_swiper .swiper-container', {
            spaceBetween:0,
            speed:600,
            navigation: {
                nextEl: '.left_swiper .swiper-button-next',
                prevEl: '.left_swiper .swiper-button-prev',
            },
            on:{
                slideChange : function(){
                    swiper3.slideTo(this.activeIndex, 600);
                    $(".name_div p").removeClass("on");
                    $(".name_div p").eq(this.activeIndex).addClass("on");
                }
            }
        });

    });$(window).load();
    
    var scTop;
    var lastY = 0;
    var isCheck = false;
    var agent = navigator.userAgent.toLowerCase();
    if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) isIeCheck = true;
    else isIeCheck = false;

	$(window).scroll(function(){
		scTop = $(window).scrollTop() + $(window).height();
		
		if($(".scrollMotion1").length != 0){ // scrollMotion
			$(".scrollMotion1").each(function(index){
				if($(window).scrollTop() + $(window).height()  > _getScrollObjY1()[index]) $(".scrollMotion1").eq(index).addClass("active");
				else $(".scrollMotion1").eq(index).removeClass("active");
			});
        }

        if(isIeCheck) {
            $("body").on("mousewheel", function (event) {
                console.log(event.originalEvent.wheelDelta +"aaa")
                if(event.originalEvent.wheelDelta < 0) {
                    $("#header").addClass("hide");
                }
                else $("#header").removeClass("hide");
            });
        } else {
            if($(window).scrollTop() > lastY){
                $("#header").addClass("hide");
            } 
            else $("#header").removeClass("hide");
            lastY = $(window).scrollTop();
        }

        if($(".main").size() > 0){
            
            

            if($(window).scrollTop() + $(window).height() >= $(".news").offset().top){
                TweenMax.to($(".news .bg img"), 1, {top:-300 + ($(window).scrollTop() + $(window).height() - $(".news").offset().top)*0.28, ease:Power3.easeOut});
            }


            if(scTop > $(".content").offset().top + 650 && scTop < $(".content .system").offset().top){
                TweenMax.to($(".content .txt1 span:nth-child(1)"), 2, {opacity:1, top:0, ease:Power3.easeOut});
                TweenMax.to($(".content .txt1 span:nth-child(2)"), 2, {opacity:1, top:0, delay:0.1, ease:Power3.easeOut});
                TweenMax.to($(".content .txt1 span:nth-child(3)"), 2, {opacity:1, top:0, delay:0.2, ease:Power3.easeOut});
                TweenMax.to($(".content .txt1 span:nth-child(4)"), 2, {opacity:1, top:0, delay:0.3, ease:Power3.easeOut});
            }else if(scTop > $(".content .system").offset().top + 500 && scTop < $(".inside").offset().top - 300){
                TweenMax.to($(".system .chip"), 1.8, {opacity:1, top:-140, delay:0.1, ease:Power3.easeOut});
                TweenMax.to($(".system .cloud1"), 1.8, {opacity:1, right:485, delay:0.1, ease:Power3.easeOut});
                TweenMax.to($(".system .cloud2"), 1.8, {opacity:1, right:255, delay:0.2, ease:Power3.easeOut});
                TweenMax.to($(".system .cloud3"), 1.8, {opacity:1, left:-40, delay:0.3, ease:Power3.easeOut});
            }else if(scTop >= $(".inside").offset().top + 200 && scTop < $(".inside").offset().top + 300){
                TweenMax.to($(".inside .title"), 2, {top:0, opacity:1, ease:Power3.easeOut});
            }else if(scTop >= $(".inside").offset().top + 550 && scTop < $(".solution").offset().top - 700){
                TweenMax.to($(".acco_div .list").eq(0).find(".right"), 3, {opacity:1, ease:Power3.easeOut});
                TweenMax.to($(".acco_div .list").eq(0).find(".left img:nth-child(1)"), 2, {top:0, opacity:1, delay:0.1, ease:Power3.easeOut});
                TweenMax.to($(".acco_div .list").eq(0).find(".left img:nth-child(2)"), 2, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
                TweenMax.to($(".acco_div .list").eq(0).find(".left img:nth-child(3)"), 2, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});
                TweenMax.to($(".acco_div .list").eq(0).find(".left img:nth-child(4)"), 2, {opacity:1, delay:0.6, ease:Power3.easeOut});
            }else if(scTop >= $(".solution").offset().top + 200 && scTop < $(".solution .txt2").offset().top - 700){
                TweenMax.to($(".solution .title"), 2, {top:0, opacity:1, ease:Power3.easeOut});
            }else if(scTop >= $(".solution .txt2").offset().top + 100 && scTop < $(".marketing").offset().top - 300){
                TweenMax.to($(".solution .txt2 p:nth-child(1)"), 2, {opacity:1, top:0, ease:Power3.easeOut});
                TweenMax.to($(".solution .txt2 p:nth-child(2)"), 2, {opacity:1, top:0, delay:0.1, ease:Power3.easeOut});
                TweenMax.to($(".solution .txt2 p:nth-child(3)"), 2, {opacity:1, top:0, delay:0.2, ease:Power3.easeOut});
                TweenMax.to($(".solution .txt2 p:nth-child(4)"), 2, {opacity:1, top:0, delay:0.3, ease:Power3.easeOut});
            }else if(scTop >= $(".marketing").offset().top + 100 && scTop < $(".marketing").offset().top + 400){
                TweenMax.to($(".marketing .top_img"), 2, {opacity:1, top:-100, ease:Power3.easeOut});
                TweenMax.to($(".marketing .right_div p:nth-child(1)"), 2, {opacity:1, top:0, delay:0.2, ease:Power3.easeOut});
                TweenMax.to($(".marketing .right_div p:nth-child(2)"), 2, {opacity:1, top:0, delay:0.3, ease:Power3.easeOut});
                TweenMax.to($(".marketing .right_div p:nth-child(3)"), 2, {opacity:1, top:0, delay:0.4, ease:Power3.easeOut});
                TweenMax.to($(".marketing .right_div p:nth-child(4)"), 3, {opacity:1, delay:0.7, ease:Power3.easeOut});
            }else if(scTop >= $(".marketing").offset().top + 800 && scTop < $(".news").offset().top){
                TweenMax.to($(".marketing .bottom_div > p:nth-child(1)"), 2, {opacity:1, top:0, ease:Power3.easeOut});
                TweenMax.to($(".marketing .bottom_div > p:nth-child(2)"), 2, {opacity:1, top:0, delay:0.1, ease:Power3.easeOut});
            }
            else if(scTop >= $(".news").offset().top + 400){
                TweenMax.to($(".news .left"), 2, {opacity:1, top:199, ease:Power3.easeOut});
                TweenMax.to($(".news .right"), 2, {opacity:1, top:249, delay:0.1, ease:Power3.easeOut});
            }
        }

	});$(window).scroll();

})