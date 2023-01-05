var _this_scroll = 0;
$(function () {
    TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner .txt1"), 1.2, {transform:'translate(0, 0)', opacity:1, delay:0.2, ease:Power3.easeOut});
    TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner .txt2"), 1.2, {transform:'translate(0, 0)', opacity:1, delay:0.4, ease:Power3.easeOut});
    TweenMax.to($(".main-visual .swiper-slide").eq(0).find(".inner .con"), 0, {left:490, ease:Power3.easeOut});
    TweenMax.to($(".main-visual .swiper-slide").eq(0).find(".inner .con"), 1.2, {left:390, delay:0.5, ease:Power3.easeOut});
    $(".main-visual .text-indicator .indi").eq(1).find(".inner .txt2").on('click', function(){
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1), 1.2, {left:0, 'z-index' : 0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1).find(".inner"), 1.2, {width:1000, transform:'translate(0, 0)', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1).find(".inner .txt1"), 1.2, {opacity:1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1).find(".inner .txt2"), 1.2, {opacity:1, ease:Power3.easeOut, onComplete:function(){
            TweenMax.to($(".main-visual .text-indicator .indi").eq(1).find(".inner .txt2 span"), 0.5, {width:280, ease:Power3.easeOut});
        }});

        TweenMax.to($(".main-visual .text-indicator .indi").eq(0), 1.2, {left:'-100%', 'z-index' : 0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner"), 1.2, {width:'auto', transform:'translate(-285px, 0)', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner .txt1"), 1.2, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner .txt2"), 1.2, {opacity:0.1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner .txt2 span"), 0.5, {width:0, ease:Power3.easeOut});

        TweenMax.to($(".main-visual .text-indicator .indi").eq(2), 0, {left:'200%', 'z-index' : 1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2), 1.2, {left:'100%', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2).find(".inner"), 1.2, {width:'auto', transform:'translate(-285px, 0)', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2).find(".inner .txt1"), 1.2, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2).find(".inner .txt2"), 1.2, {opacity:0.1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2).find(".inner .txt2 span"), 0.5, {width:0, ease:Power3.easeOut});
        
        TweenMax.to($(".main-visual .swiper-slide").eq(0), 1.2, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .swiper-slide").eq(1), 1.2, {opacity:1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .swiper-slide").eq(2), 1.2, {opacity:0, ease:Power3.easeOut, onComplete:function(){
            $(".main-visual .swiper-slide").eq(0).removeClass("active");
            $(".main-visual .swiper-slide").eq(1).addClass("active");
            $(".main-visual .swiper-slide").eq(2).removeClass("active");
        }});
		TweenMax.to($(".main-visual .swiper-slide").eq(1).find(".inner .con a p").eq(0), 0, {opacity:0, transform:'translate(-50px, -50px)', ease:Power3.easeOut});
		TweenMax.to($(".main-visual .swiper-slide").eq(1).find(".inner .con a p").eq(1), 0, {opacity:0, transform:'translate(50px, -50px)', ease:Power3.easeOut});
		TweenMax.to($(".main-visual .swiper-slide").eq(1).find(".inner .con a p").eq(2), 0, {opacity:0, transform:'translate(19px, 50px)', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .swiper-slide").eq(1).find(".inner .con a p").eq(0), 0.8, {opacity:1, transform:'translate(0, 0)', delay:0.5, ease:Power3.easeOut});
		TweenMax.to($(".main-visual .swiper-slide").eq(1).find(".inner .con a p").eq(1), 0.8, {opacity:1, transform:'translate(0, 0)', delay:0.5, ease:Power3.easeOut});
		TweenMax.to($(".main-visual .swiper-slide").eq(1).find(".inner .con a p").eq(2), 0.8, {opacity:1, transform:'translate(0, 0)', delay:0.5, ease:Power3.easeOut});

        TweenMax.to($(".main-visual .number > p"), 0.5, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .number > p").eq(1), 0.5, {opacity:1, ease:Power3.easeOut});
    });

    $(".main-visual .text-indicator .indi").eq(2).find(".inner .txt2").on('click', function(){
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2), 1.2, {left:0, 'z-index' : 0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2).find(".inner"), 1.2, {width:1000, transform:'translate(0, 0)', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2).find(".inner .txt1"), 1.2, {opacity:1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2).find(".inner .txt2"), 1.2, {opacity:1, ease:Power3.easeOut, onComplete:function(){
            TweenMax.to($(".main-visual .text-indicator .indi").eq(2).find(".inner .txt2 span"), 0.5, {width:300, ease:Power3.easeOut});
        }});

        TweenMax.to($(".main-visual .text-indicator .indi").eq(1), 1.2, {left:'-100%', 'z-index' : 0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1).find(".inner"), 1.2, {width:'auto', transform:'translate(-285px, 0)', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1).find(".inner .txt1"), 1.2, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1).find(".inner .txt2"), 1.2, {opacity:0.1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1).find(".inner .txt2 span"), 0.5, {width:0, ease:Power3.easeOut});
        
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0), 0, {left:'200%', 'z-index' : 1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0), 1.2, {left:'100%', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner"), 1.2, {width:'auto', transform:'translate(-285px, 0)', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner .txt1"), 1.2, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner .txt2"), 1.2, {opacity:0.1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner .txt2 span"), 0.5, {width:0, ease:Power3.easeOut});

        $(".main-visual .swiper-slide").eq(0).removeClass("active");
        $(".main-visual .swiper-slide").eq(1).removeClass("active");
        $(".main-visual .swiper-slide").eq(2).addClass("active");
        TweenMax.to($(".main-visual .swiper-slide").eq(0), 1.2, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .swiper-slide").eq(1), 1.2, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .swiper-slide").eq(2), 1.2, {opacity:1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .swiper-slide").eq(2).find(".inner .con"), 0, {opacity:0, top:100, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .swiper-slide").eq(2).find(".inner .con"), 1.2, {opacity:1, top:0, delay:0.5, ease:Power3.easeOut});

        TweenMax.to($(".main-visual .number > p"), 0.5, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .number > p").eq(2), 0.5, {opacity:1, ease:Power3.easeOut});
    })

    $(".main-visual .text-indicator .indi").eq(0).find(".inner .txt2").on('click', function(){
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0), 1.2, {left:0, 'z-index' : 0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner"), 1.2, {width:1000, transform:'translate(0, 0)', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner .txt1"), 1.2, {opacity:1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner .txt2"), 1.2, {opacity:1, ease:Power3.easeOut, onComplete:function(){
            TweenMax.to($(".main-visual .text-indicator .indi").eq(0).find(".inner .txt2 span"), 0.5, {width:280, ease:Power3.easeOut});
        }});

        TweenMax.to($(".main-visual .text-indicator .indi").eq(2), 1.2, {left:'-100%', 'z-index' : 0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2).find(".inner"), 1.2, {width:'auto', transform:'translate(-285px, 0)', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2).find(".inner .txt1"), 1.2, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2).find(".inner .txt2"), 1.2, {opacity:0.1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(2).find(".inner .txt2 span"), 0.5, {width:0, ease:Power3.easeOut});

        TweenMax.to($(".main-visual .text-indicator .indi").eq(1), 0, {left:'200%', 'z-index' : 1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1), 1.2, {left:'100%', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1).find(".inner"), 1.2, {width:'auto', transform:'translate(-285px, 0)', ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1).find(".inner .txt1"), 1.2, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1).find(".inner .txt2"), 1.2, {opacity:0.1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .text-indicator .indi").eq(1).find(".inner .txt2 span"), 0.5, {width:0, ease:Power3.easeOut});

        $(".main-visual .swiper-slide").eq(0).addClass("active");
        $(".main-visual .swiper-slide").eq(1).removeClass("active");
        $(".main-visual .swiper-slide").eq(2).removeClass("active");
        TweenMax.to($(".main-visual .swiper-slide").eq(0), 1.2, {opacity:1, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .swiper-slide").eq(1), 1.2, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .swiper-slide").eq(2), 1.2, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .swiper-slide").eq(0).find(".inner .con"), 0, {left:490, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .swiper-slide").eq(0).find(".inner .con"), 1.2, {left:390, ease:Power3.easeOut});

        TweenMax.to($(".main-visual .number > p"), 0.5, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-visual .number > p").eq(0), 0.5, {opacity:1, ease:Power3.easeOut});
    });

    var isVoneClick = 0;
    $(".main-visual .swiper-slide").eq(0).find(".inner .con").on('click', function(){
        if(isVoneClick == 0){
            TweenMax.to($(this), 0.8, {left:0, ease:Power3.easeOut});
            TweenMax.to($(".main-visual .swiper-slide").eq(0).find(".inner .tit"), 0.8, {opacity:0, ease:Power3.easeOut});

            isVoneClick = 1;
        }else if(isVoneClick == 1){
            TweenMax.to($(this), 0.8, {left:-390, ease:Power3.easeOut});
            TweenMax.to($(".main-visual .swiper-slide").eq(0).find(".inner .tit"), 0.8, {opacity:0, ease:Power3.easeOut});

            isVoneClick = 2;
        }else if(isVoneClick == 2){
            TweenMax.to($(this), 0.8, {left:390, ease:Power3.easeOut});
            TweenMax.to($(".main-visual .swiper-slide").eq(0).find(".inner .tit"), 0.8, {opacity:1, ease:Power3.easeOut});

            isVoneClick = 0;
        }
    });

    var clickMainCon1 = false;
    $(".main-con1 .inner .list-con1 .list").on('click', function(){
        if(clickMainCon1 == false){
            TweenMax.to($(this), 0.8, {transform:'translate(-330px, 0)', ease:Power3.easeOut});

            clickMainCon1 = true;
        }else{
            TweenMax.to($(this), 0.8, {transform:'translate(0px, 0)', ease:Power3.easeOut});

            clickMainCon1 = false;
        }
    });
    var clickMainCon2 = false;
    $(".main-con1 .inner .list-con2 .list").on('click', function(){
        if(clickMainCon2 == false){
            TweenMax.to($(this), 0.8, {transform:'translate(-330px, 0)', ease:Power3.easeOut});

            clickMainCon2 = true;
        }else{
            TweenMax.to($(this), 0.8, {transform:'translate(0px, 0)', ease:Power3.easeOut});

            clickMainCon2 = false;
        }
    });
    var clickMainCon3 = false;
    $(".main-con3 .inner .list-con .list").on('click', function(){
        if(clickMainCon3 == false){
            TweenMax.to($(this), 0.8, {transform:'translate(-330px, 0)', ease:Power3.easeOut});

            clickMainCon3 = true;
        }else{
            TweenMax.to($(this), 0.8, {transform:'translate(0px, 0)', ease:Power3.easeOut});

            clickMainCon3 = false;
        }
    });

    $(".main-con1 .part2 .bttxt").on('click', function(){
        TweenMax.to($(".main-con1 .part2"), 1.2, {width:'100%', height:1764, padding:'180px 0 250px', ease:Power3.easeOut});
        TweenMax.to($(".main-con1 .part2 .inner .tit"), 1.2, {width:505, height:100, transform:'translate(0px, 0px)', ease:Power3.easeOut});
        TweenMax.to($(this), 0.2, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".main-con1 .part2 .bticon"), 0.2, {opacity:0, ease:Power3.easeOut, onComplete:function(){
            $(".main-con1").addClass("click")
        }});

        TweenMax.to($("html, body"), 1.2, {scrollTop:$(".main-con1").offset().top, ease:Power3.easeOut});
    });

    $(".main-con1 .part2 .xbt").on('click', function(){
        $(".main-con1").removeClass("click")
        TweenMax.to($(".main-con1 .part2"), 1.2, {width:410, height:240, padding:'0', ease:Power3.easeOut});
        TweenMax.to($(".main-con1 .part2 .inner .tit"), 1.2, {width:130, height:25, transform:'translate(50px, 50px)', ease:Power3.easeOut});
        TweenMax.to($(".main-con1 .part2 .bttxt"), 1.2, {opacity:1, ease:Power3.easeOut});
        TweenMax.to($(".main-con1 .part2 .bticon"), 1.2, {opacity:1});

        TweenMax.to($("html, body"), 1.2, {scrollTop:$(".main-con1").offset().top, ease:Power3.easeOut});
    });

    $(".main-con2 .top > a").on('click', function(){
        $(".laypop1").fadeIn(500);
        TweenMax.to($(".laypop1 .right"), 1.2, {right:-2080, ease:Power3.easeOut});
    });
    $(".laypop1 .left a").on('click', function(){
        TweenMax.to($(".laypop1 .right"), 1.2, {right:-(2600 - $(window).width()), ease:Power3.easeOut});
    });
    $(".laypop1 .right .que.thr a").on('click', function(){
        TweenMax.to($(".laypop1 .right .que.thr a img.on"), 0.5, {opacity:1, ease:Power3.easeOut});
    });
    $(".laypop1 .right .que.fou a").on('click', function(){
        TweenMax.to($(".laypop1 .right .que.fou a img.on"), 0.5, {opacity:1, ease:Power3.easeOut});
        TweenMax.to($(".laypop1 .right"), 1.2, {right:0, ease:Power3.easeOut});
    });
    $(".laypop1 .right .que.fiv a").on('click', function(){
        TweenMax.to($(".laypop1 .right .que.fiv a img.on"), 0.5, {opacity:1, ease:Power3.easeOut, onComplete:function(){
            TweenMax.to($(".laypop2"), 1.2, {top:0, ease:Power3.easeOut});
            $('body').css('overflow', 'hidden');
			$(".laypop2 .xbt").css('position', 'fixed');
        }});
    });

    $(".laypop1 .xbt").on('click', function(){
        $(".laypop1").fadeOut(500);
        TweenMax.to($(".laypop1 .right"), 1.2, {left:'100%', ease:Power3.easeOut});
    });

    $(".laypop2 .xbt").on('click', function(){
        TweenMax.to($(".laypop2"), 1.2, {top:'-100%', ease:Power3.easeOut});
        $("body").css('overflow', '');
		$(".laypop2 .xbt").css('position', 'absolute');
        $(".laypop1").fadeOut(0);
        TweenMax.to($(".laypop1 .right"), 0, {right:-2600, ease:Power3.easeOut});
        TweenMax.to($(".laypop1 .right .que.thr a img.on"), 0, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".laypop1 .right .que.fou a img.on"), 0, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($(".laypop1 .right .que.fiv a img.on"), 0, {opacity:0, ease:Power3.easeOut});
    });

    $("header .util a.pick").on('click', function(){
        TweenMax.to($(".laypop3"), 1.2, {top:0, ease:Power3.easeOut});
    });

	$(".laypop3 .stepone").on('click', function(){
        TweenMax.to($(".laypop3 .tab .on"), 0.5, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($(".laypop3 .tab p a.step1"), 0.5, {opacity:0, ease:Power3.easeOut, onComplete:function(){
            $(".laypop3 .tab p a.step1").css('display', 'none');
        }});
		$(".laypop3 .tab p a.step2").css('display', 'block');
		TweenMax.to($(".laypop3 .tab p a.step2"), 0.5, {opacity:1, ease:Power3.easeOut});


		TweenMax.to($(this), 0.8, {opacity:0, ease:Power3.easeOut, onComplete:function(){
			$(".laypop3 .stepone").css('display', 'none');
		}});
		TweenMax.to($(".laypop3 .result .curation .txt2"), 0.8, {opacity:1, transform:'translate(0, 0px)', ease:Power3.easeOut});
		TweenMax.to($(".laypop3 .result .curation .txt1"), 0.8, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($(".laypop3 .result .curation .txt3"), 0.8, {opacity:1, ease:Power3.easeOut});
    });
	
    $(".laypop3 .tab p a.step2").on('click', function(){
        TweenMax.to($(".laypop3 .tab .on"), 0.5, {top:379, ease:Power3.easeOut});
        TweenMax.to($(".laypop3 .tab p a.step2"), 0.5, {opacity:0, ease:Power3.easeOut, onComplete:function(){
            $(".laypop3 .tab p a.step2").css('display', 'none');
        }});
        TweenMax.to($(".laypop3 .tab p a.step1"), 0.5, {opacity:0, ease:Power3.easeOut, onComplete:function(){
            $(".laypop3 .tab p a.step1").css('display', 'none');
        }});
        $(".laypop3 .tab p a.step3").css('display', 'block');
        TweenMax.to($(".laypop3 .tab p a.step3"), 0.5, {opacity:1, ease:Power3.easeOut});

        TweenMax.to($(".laypop3 .result .curation").eq(0), 1, {left:-2000, ease:Power3.easeOut});
        TweenMax.to($(".laypop3 .result .curation").eq(1), 1, {left:0, ease:Power3.easeOut});
    });

    $(".laypop3 .tab p a.step3").on('click', function(){
        TweenMax.to($(".laypop3 .tab .on"), 0.5, {top:321, ease:Power3.easeOut});
        TweenMax.to($(".laypop3 .tab p a.step3"), 0.5, {opacity:0, ease:Power3.easeOut, onComplete:function(){
            $(".laypop3 .tab p a.step3").css('display', 'none');
        }});
        TweenMax.to($(".laypop3 .tab p a.step1"), 0.5, {opacity:0, ease:Power3.easeOut, onComplete:function(){
            $(".laypop3 .tab p a.step1").css('display', 'none');
        }});
        $(".laypop3 .tab p a.step2").css('display', 'block');
        TweenMax.to($(".laypop3 .tab p a.step2"), 0.5, {opacity:1, ease:Power3.easeOut});

        TweenMax.to($(".laypop3 .result .curation").eq(0), 1, {left:0, ease:Power3.easeOut});
        TweenMax.to($(".laypop3 .result .curation").eq(1), 1, {left:2000, ease:Power3.easeOut});
    });

    $(".laypop3 .xbt").on('click', function(){
        TweenMax.to($(".laypop3"), 1.2, {top:-900, ease:Power3.easeOut});
    });

    $(window).scroll(function(){
        // console.log($(window).scrollTop())
        if($(window).scrollTop() > $(".main-con1").offset().top - 400 && $(window).scrollTop() <= $(".main-con2").offset().top - 400){
			$(".main-con1").addClass("scroll")
		}else if($(window).scrollTop() > $(".main-con2").offset().top - 400 && $(window).scrollTop() <= $(".main-con3").offset().top - 400){
            $(".main-con2").addClass("scroll")
        }else if($(window).scrollTop() > $(".main-con3").offset().top - 400 && $(window).scrollTop() <= $("footer").offset().top - 400){
			$(".main-con3").addClass("scroll");
            $(".main-con4").addClass("scroll");
		}else if($(window).scrollTop() > $("footer").offset().top - 400){
			$("footer").addClass("scroll");
		}


        //역스크롤시 
        var _isScrollTop = $(window).scrollTop();// scrollTop 변수
        if(_isScrollTop > _this_scroll) { // down
            TweenMax.to($("header"), 0.8, {top:-120, ease:Power3.easeOut});
        }
        if(_isScrollTop < _this_scroll) { // up
            TweenMax.to($("header"), 0.8, {top:0, ease:Power3.easeOut});
        }
        _this_scroll = _isScrollTop;
    });$(window).trigger("scroll");
})

$(window).load(function(){
	gsap.registerPlugin(ScrollTrigger);
    gsap.to(".main-con2 .bot .inner .list", {
        scrollTrigger: {
            trigger: ".main-con2 .bot",
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
            //markers:true,
        },
        top: -400,
    });
})