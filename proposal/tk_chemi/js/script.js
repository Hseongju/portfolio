$(function() {
	//$("#header").addClass("blk");
	
	var tkVid = $("#video1").get(0);

	var mainNum = 0;

	//풀페이지
	if($("#mainPage").length > 0){
		$('#mainPage').fullpage({
	 		lockAnchors: true,
	 		scrollingSpeed: 1000,
	 		scrollOverflow: true,
	 		scrollOverflowOptions: {
	 			Click : true
	 		},
	 		onLeave: function(index, nextIndex, direction){
				//alert(index + "," + nextIndex)
	 			mainNum = nextIndex;

	 			$(".main_nav").removeClass("on" + index).addClass("on" + nextIndex);

	 			if(nextIndex > 1) {
					$("#header").addClass("blk");
					$(".inLife").addClass("section");
					TweenMax.to($(".inLife"), .5, {bottom:0, right:0, ease:Power3.easeOut});					
					TweenMax.to($(".inLife a.open"), .5, {width:50, height:232, 'border-radius':'20px 0px 0px 0px', 'padding-top':43, ease:Power3.easeOut});
	 			}else{
					$("#header").removeClass("blk");
					$(".inLife	").removeClass("section");
					TweenMax.to($(".inLife"), .5, {bottom:40, right:40, ease:Power3.easeOut});
					TweenMax.to($(".inLife a.open"), .5, {width:160, height:160, 'border-radius':'80px', 'padding-top':59, ease:Power3.easeOut});
					tkVid.load();
				};

				if(nextIndex == 2){
					TweenMax.to($("#mainPage .section.sec2 .right .title"), 0, {top:'60%', opacity:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec2 .right > div"), 0, {top:'60%', opacity:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec2 .right .title"), 1, {top:'50%', opacity:1, delay:0.5, ease:Power3.easeOut, onComplete:function(){
						TweenMax.to($("#mainPage .section.sec2 .right .title"), 1, {top:'30%', opacity:0, delay:0.5, ease:Power3.easeOut});
						TweenMax.to($("#mainPage .section.sec2 .right > div"), 1, {top:'50%', opacity:1, delay:0.8, ease:Power3.easeOut});
					}});
				}else if(nextIndex == 3){
					TweenMax.to($("#mainPage .section.sec3 .title"), 0, {top:330, opacity:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec3 .title"), 1, {top:230, opacity:1, delay:0.5, ease:Power3.easeOut, onComplete:function(){
						TweenMax.to($("#mainPage .section.sec3 .title"), 1, {top:130, opacity:0, delay:0.5, ease:Power3.easeOut});
					}});
				}else if(nextIndex == 4){
					TweenMax.to($("#mainPage .section.sec4 .txt_area .title"), 0, {top:'60%', opacity:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(0).find("a > .on"), 0, {left:-112, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(0).find("a > .off"), 0, {left:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(1).find("a > .on"), 0, {left:-102, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(1).find("a > .off"), 0, {left:0, ease:Power3.easeOut});

					TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(0), 0, {top:'100%', ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(0).find(".txt1"), 0, {top:320, opacity:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(0).find(".txt2"), 0, {top:390, opacity:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(0).find(".txt3"), 0, {top:440, opacity:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(0).find(".txt4"), 0, {top:540, opacity:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(0).find(".txt5"), 0, {top:715, opacity:0, ease:Power3.easeOut});

					TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(1), 0, {top:'100%', ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(1).find(".txt1"), 0, {top:320, opacity:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(1).find(".txt2"), 0, {top:390, opacity:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(1).find(".txt3"), 0, {top:440, opacity:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(1).find(".txt4"), 0, {top:540, opacity:0, ease:Power3.easeOut});
					TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(1).find(".txt5"), 0, {top:715, opacity:0, ease:Power3.easeOut});

					TweenMax.to($("#mainPage .section.sec4 .txt_area .title"), 1, {top:'50%', opacity:1, delay:0.5, ease:Power3.easeOut, onComplete:function(){
						TweenMax.to($("#mainPage .section.sec4 .txt_area .title"), 1, {top:'30%', opacity:0, delay:0.5, ease:Power3.easeOut});

						TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(0).find("a > .on"), .5, {left:0, delay:0.8, ease:Power3.easeOut});
						TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(0).find("a > .off"), .5, {left:112, delay:0.8, ease:Power3.easeOut});

						TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(0), .8, {top:0, delay:0.8, ease:Power3.easeOut});
						TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(1), .8, {top:0, delay:0.8, ease:Power3.easeOut});
						TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(0).find(".txt1"), .8, {top:220, opacity:1, delay:0.8, ease:Power3.easeOut});
						TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(0).find(".txt2"), .8, {top:290, opacity:1, delay:0.9, ease:Power3.easeOut});
						TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(0).find(".txt3"), .8, {top:340, opacity:1, delay:1, ease:Power3.easeOut});
						TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(0).find(".txt4"), .8, {top:440, opacity:1, delay:1.1, ease:Power3.easeOut});
						TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(0).find(".txt5"), .8, {top:615, opacity:1, delay:1.2, ease:Power3.easeOut});
					}});
				}
	 		},
	 		afterLoad: function(anchorLink, index){
	 			var loadedSection = $(this);
	 			var nextSection = loadedSection.next();
	 			if(nextSection.find('.fp-scrollable').length > 0) {
	 				var IScroll = nextSection.find('.fp-scrollable').data('iscrollInstance');
	 				IScroll.scrollTo(0, 0, 0)
	 			}
	 		}
	 	});

	 	$(".mainNav li").each(function(i){
	 		$(this).find("a").click(function(){
	 			$.fn.fullpage.moveTo(i + 1);
	 		});
	 	});

	 	$("#footer").click(function(){
			$.fn.fullpage.moveTo(1);
	 	});

	 	$(".inLife a.open").click(function(){
			$.fn.fullpage.setAllowScrolling(false);

			TweenMax.to($(this), .8, {width:'100%', height:'100%', 'border-radius':0, background:'#ffffff', opacity:0, ease:Power3.easeOut, onComplete:function(){
				$(".inLife a.open").css('display', 'none');
			}});
			TweenMax.to($(".inLife"), .8, {bottom:0, right:0, width:'100%', height:'100%', 'border-radius':0, ease:Power3.easeOut});
			TweenMax.to($(".inlife-con"), .8, {opacity:1, 'border-radius':0, ease:Power3.easeOut, onComplete:function(){
				TweenMax.to($(".inlife-con .top"), .8, {opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".inlife-con #bottom"), .8, {opacity:1, ease:Power3.easeOut});
			}});
		 });
		 
		$(".inlife-con .gomain").click(function(){
			$.fn.fullpage.setAllowScrolling(true);
			$(".inLife a.open").css('display', 'block');
			TweenMax.to($(".inLife"), .8, {bottom:40, right:40, width:160, height:160, 'border-radius':80, ease:Power3.easeOut});
			TweenMax.to($(".inLife a.open"), .8, {width:160, height:160, 'border-radius':80, background:'', opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".inlife-con .top"), .8, {opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".inlife-con #bottom"), .8, {opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".inlife-con"), .8, {opacity:0, 'border-radius':80, ease:Power3.easeOut});	
			
			
			numWheelCount = 0;

			TweenMax.to($(".inlife-con #bottom .botSec.sec1"), 0, {top:0, ease:Power3.easeInOut});
			TweenMax.to($(".inlife-con #bottom .botSec.sec2"), 0, {top:'100%', ease:Power3.easeInOut});
			TweenMax.to($(".inlife-con #bottom .botSec.sec3"), 0, {top:'100%', ease:Power3.easeInOut});
			TweenMax.to($(".bot_nav"), 0, {right:0, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".inlife-con .life-menu"), 0, {top:-72, ease:Power3.easeOut});
			TweenMax.to($(".inlife-con .top"), 0, {top:0, ease:Power3.easeInOut});
			TweenMax.to($(".inlife-con #bottom"), 0, {top:'100%', ease:Power3.easeInOut});
			TweenMax.to($(".inlife-con .top .top-con"), 0, {top:785, width:800, ease:Power3.easeInOut});
			TweenMax.to($(".inlife-con .top .top-con .topcon-bg .dimd"), 0, {opacity:0, ease:Power3.easeInOut});
			TweenMax.to($(".inlife-con .top .top-txt"), 0, {top:380, width:702, height:227, ease:Power3.easeInOut});
			TweenMax.to($(".inlife-con .top .top-txt img.off"), 0, {opacity:1, ease:Power3.easeInOut});
			TweenMax.to($(".inlife-con .top .top-txt img.on"), 0, {opacity:0, ease:Power3.easeInOut});

			TweenMax.to($(".inlife-con .gomain img.off"), .8, {opacity:1, ease:Power3.easeInOut});
			TweenMax.to($(".inlife-con .gomain img.on"), .8, {opacity:0, ease:Power3.easeInOut});

			$(".bot_nav li a").removeClass("on");
			$(".bot_nav li a").eq(0).addClass("on");

			TweenMax.to($(".inlife-con .life-menu a img.off"), 0, {opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".inlife-con .life-menu a img.on"), 0, {opacity:0, ease:Power3.easeOut});
	 	});

		var numWheelCount = 0;
	 	$(".inLife").on("mousewheel DOMMouseScroll", function(e){
	 		var E = e.originalEvent;
	 		delta = 0;
	 		if (E.detail) {
	 			delta = E.detail * -40;
	 		}else{
	 			delta = E.wheelDelta;
	 		}

			 if(delta < 0){ // 휠다운
				if(numWheelCount == 0){
					TweenMax.to($(".inlife-con .top .top-con"), .8, {top:0, width:'100%', ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con .top .top-con .topcon-bg .dimd"), .8, {opacity:0.5, ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con .top .top-txt"), .8, {top:250, width:608, height:183, ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con .top .top-txt img.off"), .8, {opacity:0, ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con .top .top-txt img.on"), .8, {opacity:1, ease:Power3.easeInOut});

					TweenMax.to($(".inlife-con .gomain img.off"), .8, {opacity:0, ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con .gomain img.on"), .8, {opacity:1, ease:Power3.easeInOut, onComplete:function(){
						numWheelCount=1;
					}});
					
				}else if(numWheelCount == 1){
					TweenMax.to($(".inlife-con .top"), 1, {top:'-100%', ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con #bottom"), 1, {top:'0', ease:Power3.easeInOut});

					TweenMax.to($(".inlife-con .life-menu"), .5, {top:0, delay:1, ease:Power3.easeOut});
					TweenMax.to($(".bot_nav"), .5, {right:72, opacity:1, delay:1, ease:Power3.easeOut});
					$(".bot_nav li a").removeClass("on");
					$(".bot_nav li a").eq(0).addClass("on");

					TweenMax.to($(".inlife-con #bottom .botSec.sec1 .txt-area .txt1"), 0, {top:770, opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec1 .txt-area .txt2"), 0, {top:815, opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec1 .txt-area .txt3"), 0, {top:937, opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec1 .txt-area .txt1"), .8, {top:670, opacity:1, delay:0.8, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec1 .txt-area .txt2"), .8, {top:715, opacity:1, delay:0.9, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec1 .txt-area .txt3"), .8, {top:837, opacity:1, delay:1, ease:Power3.easeOut, onComplete:function(){
						numWheelCount=2;
					}});

				}else if(numWheelCount == 2){
					TweenMax.to($(".inlife-con #bottom .botSec.sec1"), 1, {top:'-100%', ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec2"), 1, {top:'0', ease:Power3.easeInOut});

					$(".bot_nav li a").removeClass("on");
					$(".bot_nav li a").eq(1).addClass("on");

					TweenMax.to($(".inlife-con #bottom .botSec.sec2 .txt-area .txt1"), 0, {top:770, opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec2 .txt-area .txt2"), 0, {top:815, opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec2 .txt-area .txt3"), 0, {top:937, opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec2 .txt-area .txt1"), .8, {top:670, opacity:1, delay:0.8, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec2 .txt-area .txt2"), .8, {top:715, opacity:1, delay:0.9, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec2 .txt-area .txt3"), .8, {top:837, opacity:1, delay:1, ease:Power3.easeOut, onComplete:function(){
						numWheelCount=3;
					}});
				}else if(numWheelCount == 3){
					TweenMax.to($(".inlife-con #bottom .botSec.sec2"), 1, {top:'-100%', ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec3"), 1, {top:'0', ease:Power3.easeInOut});

					$(".bot_nav li a").removeClass("on");
					$(".bot_nav li a").eq(2).addClass("on");

					TweenMax.to($(".inlife-con .life-menu a img.off"), 0.8, {opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con .life-menu a img.on"), 0.8, {opacity:1, ease:Power3.easeOut});

					TweenMax.to($(".inlife-con #bottom .botSec.sec3 .txt-area .txt1"), 0, {top:770, opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec3 .txt-area .txt2"), 0, {top:815, opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec3 .txt-area .txt3"), 0, {top:937, opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec3 .txt-area .txt1"), .8, {top:670, opacity:1, delay:0.8, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec3 .txt-area .txt2"), .8, {top:715, opacity:1, delay:0.9, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec3 .txt-area .txt3"), .8, {top:837, opacity:1, delay:1, ease:Power3.easeOut, onComplete:function(){
						numWheelCount=4;
					}});
				}
				//console.log(numWheelCount);
			 }else if(delta > 0){ // 휠업
				if(numWheelCount == 4){
					TweenMax.to($(".inlife-con #bottom .botSec.sec2"), 1, {top:0, ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec3"), 1, {top:'100%', ease:Power3.easeInOut, onComplete:function(){
						numWheelCount=3;
					}});

					$(".bot_nav li a").removeClass("on");
					$(".bot_nav li a").eq(1).addClass("on");

					TweenMax.to($(".inlife-con .life-menu a img.off"), 0.8, {opacity:1, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con .life-menu a img.on"), 0.8, {opacity:0, ease:Power3.easeOut});

				}if(numWheelCount == 3){
					TweenMax.to($(".inlife-con #bottom .botSec.sec1"), 1, {top:0, ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con #bottom .botSec.sec2"), 1, {top:'100%', ease:Power3.easeInOut, onComplete:function(){
						numWheelCount=2;
					}});

					$(".bot_nav li a").removeClass("on");
					$(".bot_nav li a").eq(0).addClass("on");

				}if(numWheelCount == 2){
					TweenMax.to($(".bot_nav"), .5, {right:0, opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".inlife-con .life-menu"), .5, {top:-72, ease:Power3.easeOut});
					
					TweenMax.to($(".inlife-con .top"), .8, {top:0, ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con #bottom"), .8, {top:'100%', ease:Power3.easeInOut, onComplete:function(){
						numWheelCount=1;
					}});
				}else if(numWheelCount == 1){
					TweenMax.to($(".inlife-con .top .top-con"), .8, {top:785, width:800, ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con .top .top-con .topcon-bg .dimd"), .8, {opacity:0, ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con .top .top-txt"), .8, {top:380, width:702, height:227, ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con .top .top-txt img.off"), .8, {opacity:1, ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con .top .top-txt img.on"), .8, {opacity:0, ease:Power3.easeInOut});

					TweenMax.to($(".inlife-con .gomain img.off"), .8, {opacity:1, ease:Power3.easeInOut});
					TweenMax.to($(".inlife-con .gomain img.on"), .8, {opacity:0, ease:Power3.easeInOut, onComplete:function(){
						numWheelCount=0;
					}});
				}
				//console.log(numWheelCount);
	 		}
		 });
		 
     } // //풀페이지
    
	if($("#wrap").hasClass("main")){
    	var mainSkrollr = skrollr.init({
            edgeStrategy: 'set',
            easing: {
                WTF: Math.random,
                inverted: function(p) {
                    return 1-p;
                }
            }
        }); 
    }else if($("#wrap").hasClass("sub")){
    	var mainSkrollr = skrollr.init(); 
	};

	//gnb
	$("#header .gnb").hover(function(){
		$("#header").addClass("twod");
		$(".two-dep").stop().slideDown(250, function(){
			$(".two-dep").css('z-index', 100);
		});
		$(".dimd-bg").stop().fadeIn(250);
	}, function(){
		$(".two-dep").stop().slideUp(250, function(){
			$("#header").removeClass("twod");
			$(".two-dep").css('z-index', 99);
		});
		$(".dimd-bg").stop().fadeOut(250);
	});

	$(".two-dep").hover(function(){
		$("#header").addClass("twod");
		$(".two-dep").stop().slideDown(0, function(){
			$(".two-dep").css('z-index', 100);
		});
		$(".dimd-bg").stop().fadeIn(0);
	}, function(){
		$(".two-dep").slideUp(250, function(){
			$(".two-dep").css('z-index', 99);
			$("#header").removeClass("twod");
		});
		$(".dimd-bg").fadeOut(250);
	});

	//contactus
	$("#header .util").on("click", function(){
		TweenMax.to($(".contact-us"), .8, {right:0, ease:Power3.easeOut});
		$(".dimd-bg").css('z-index', 100);
		$(".dimd-bg").stop().fadeIn(250);	
	})

	$(".contact-us a").on("click", function(){
		TweenMax.to($(".contact-us"), .8, {right:-480, ease:Power3.easeOut});
		$(".dimd-bg").css('z-index', 90);
		$(".dimd-bg").stop().fadeOut(250);
	})
	
	//section2
	var sec2btNum = -1;
	TweenMax.to($("#mainPage .section.sec2 .right > div a").find(".deco"), 0, {scale:0, opacity:0, ease:Power3.easeOut});
	$("#mainPage .section.sec2 .right > div a").each(function(q){
		$(this).on("click", function(){
			TweenMax.to($("#mainPage .section.sec2 .right > div a"), .8, {opacity:0.4, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec2 .right > div > div"), .8, {opacity:0.4, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec2 .right > div a").eq(sec2btNum), .8, {height:123, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec2 .right > div a").eq(sec2btNum).find(".deco"), .5, {scale:0, opacity:0, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec2 .right > div a").eq(sec2btNum).find(".txt2"), .4, {top:100, left:0, scale:1, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec2 .right > div a").eq(sec2btNum).find(".txt3"), .5, {top:120, opacity:0, ease:Power3.easeOut});
			sec2btNum = q;
			TweenMax.to($("#mainPage .section.sec2 .right > div a").eq(sec2btNum), .8, {opacity:1, height:163, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec2 .right > div a").eq(sec2btNum).find(".deco"), .5, {scale:1, opacity:1, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec2 .right > div a").eq(sec2btNum).find(".txt2"), .4, {top:97, left:-5, scale:0.9, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec2 .right > div a").eq(sec2btNum).find(".txt3"), .5, {top:140, opacity:1, ease:Power3.easeOut});

			if(sec2btNum == 0){
				TweenMax.to($("#mainPage .section.sec2 .left > div"), .8, {top:'-100vh', ease:Power3.easeOut});
			}else if(sec2btNum == 1){
				TweenMax.to($("#mainPage .section.sec2 .left > div"), .8, {top:'-200vh', ease:Power3.easeOut});
			}
		});
	});

	$("#mainPage .section.sec2 .left > div").on("click", function(){
		TweenMax.to($("#mainPage .section.sec2 .left > div"), .8, {top:0, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec2 .right > div a"), .8, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec2 .right > div > div"), .8, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec2 .right > div a"), .8, {height:123, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec2 .right > div a").find(".deco"), .5, {scale:0, opacity:0, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec2 .right > div a").find(".txt2"), .4, {top:100, left:0, scale:1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec2 .right > div a").find(".txt3"), .5, {top:120, opacity:0, ease:Power3.easeOut});
		sec2btNum = -1;
	});

	//section3
	$("#mainPage .section.sec3 li").eq(0).children("div").hover(function(){
		TweenMax.to($("#mainPage .section.sec3 .bgs p.bg1"), .8, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 .bgs p.bg2"), .8, {opacity:1, ease:Power3.easeOut});

		TweenMax.to($("#mainPage .section.sec3 li").eq(0).children(".bg"), .8, {opacity:0.8, ease:Power3.easeOut});

		TweenMax.to($("#mainPage .section.sec3 li").eq(0).find("div .txt1"), .8, {top:0, delay:0.1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(0).find("div .txt2"), .8, {top:34, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(0).find("div .txt3"), .8, {top:90, opacity:1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(0).find("div a"), .8, {bottom:0, rotationY:360, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(0).find("div a .off"), .8, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(0).find("div a .on"), .8, {opacity:1, ease:Power3.easeOut});
	},function(){
		TweenMax.to($("#mainPage .section.sec3 .bgs p.bg1"), .8, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 .bgs p.bg2"), .8, {opacity:0, ease:Power3.easeOut});

		TweenMax.to($("#mainPage .section.sec3 li").eq(0).children(".bg"), .8, {opacity:0, ease:Power3.easeOut});

		TweenMax.to($("#mainPage .section.sec3 li").eq(0).find("div .txt1"), .8, {top:51, delay:0.1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(0).find("div .txt2"), .8, {top:90, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(0).find("div .txt3"), .8, {top:80, opacity:0, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(0).find("div a"), .8, {bottom:32, rotationY:0, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(0).find("div a .off"), .8, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(0).find("div a .on"), .8, {opacity:0, ease:Power3.easeOut});
	});
	
	$("#mainPage .section.sec3 li").eq(1).children("div").hover(function(){
		TweenMax.to($("#mainPage .section.sec3 .bgs p.bg1"), .8, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 .bgs p.bg3"), .8, {opacity:1, ease:Power3.easeOut});

		TweenMax.to($("#mainPage .section.sec3 li").eq(1).children(".bg"), .8, {opacity:0.8, ease:Power3.easeOut});

		TweenMax.to($("#mainPage .section.sec3 li").eq(1).find("div .txt1"), .8, {top:0, delay:0.1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(1).find("div .txt2"), .8, {top:34, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(1).find("div .txt3"), .8, {top:90, opacity:1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(1).find("div a"), .8, {bottom:0, rotationY:360, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(1).find("div a .off"), .8, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(1).find("div a .on"), .8, {opacity:1, ease:Power3.easeOut});
	},function(){
		TweenMax.to($("#mainPage .section.sec3 .bgs p.bg1"), .8, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 .bgs p.bg3"), .8, {opacity:0, ease:Power3.easeOut});

		TweenMax.to($("#mainPage .section.sec3 li").eq(1).children(".bg"), .8, {opacity:0, ease:Power3.easeOut});

		TweenMax.to($("#mainPage .section.sec3 li").eq(1).find("div .txt1"), .8, {top:51, delay:0.1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(1).find("div .txt2"), .8, {top:90, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(1).find("div .txt3"), .8, {top:80, opacity:0, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(1).find("div a"), .8, {bottom:32, rotationY:0, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(1).find("div a .off"), .8, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($("#mainPage .section.sec3 li").eq(1).find("div a .on"), .8, {opacity:0, ease:Power3.easeOut});
	});

	//section4
	var curSec4 = 0;
	$("#mainPage .section.sec4 .tab_area li.click").each(function(q){
		$(this).on("click", function(){
			if(q == 0){
				TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(0).find("a > .on"), .5, {left:0, ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(0).find("a > .off"), .5, {left:112, ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(1).find("a > .on"), .5, {left:-102, ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(1).find("a > .off"), .5, {left:0, ease:Power3.easeOut});
			}else if(q == 1){
				TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(0).find("a > .on"), .5, {left:-112, ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(0).find("a > .off"), .5, {left:0, ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(1).find("a > .on"), .5, {left:0, ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec4 .tab_area li.click").eq(1).find("a > .off"), .5, {left:102, ease:Power3.easeOut});
			}
			
			TweenMax.to($("#mainPage .section.sec4 .img_area .img").eq(curSec4), .8, {top:'100%', ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4), .8, {top:'-100%', ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt1"), .8, {top:20, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt2"), .8, {top:90, delay:0.1, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt3"), .8, {top:140, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt4"), .8, {top:240, delay:0.3, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt5"), .8, {top:415, delay:0.4, ease:Power3.easeOut});

			curSec4 = q;

			TweenMax.to($("#mainPage .section.sec4 .img_area .img").eq(curSec4), 0, {top:'-100%', ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .img_area .img").eq(curSec4), .8, {top:0, ease:Power3.easeOut});

			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4), 0, {top:'100%', ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4), .8, {top:0, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt1"), 0, {top:320, opacity:0, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt2"), 0, {top:390, opacity:0, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt3"), 0, {top:440, opacity:0, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt4"), 0, {top:540, opacity:0, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt5"), 0, {top:715, opacity:0, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt1"), .8, {top:220, opacity:1, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt2"), .8, {top:290, opacity:1, delay:0.1, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt3"), .8, {top:340, opacity:1, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt4"), .8, {top:440, opacity:1, delay:0.3, ease:Power3.easeOut});
			TweenMax.to($("#mainPage .section.sec4 .txt_area .list").eq(curSec4).find(".txt5"), .8, {top:615, opacity:1, delay:0.4, ease:Power3.easeOut});
		})
	});

	//section5
	var curSec5 = 0;
	$("#mainPage .section.sec5 .left .roll_nav a").each(function(q){
		$(this).on("click", function(){
			if(q != 2){
				$("#mainPage .section.sec5 .left .roll_nav a").eq(curSec5).removeClass("on");
				TweenMax.to($("#mainPage .section.sec5 .left .roll").eq(curSec5), .8, {left:'-100%', ease:Power3.easeOut});
				curSec5 = q;
				$("#mainPage .section.sec5 .left .roll_nav a").eq(curSec5).addClass("on");
				TweenMax.to($("#mainPage .section.sec5 .left .roll").eq(curSec5), 0, {left:'100%', ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec5 .left .roll").eq(curSec5), .8, {left:0, ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec5 .left .roll").eq(curSec5).find(".txt1"), 0, {top:470, opacity:0, ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec5 .left .roll").eq(curSec5).find(".txt2"), 0, {top:528, opacity:0, ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec5 .left .roll").eq(curSec5).find(".txt3"), 0, {top:670, opacity:0, ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec5 .left .roll").eq(curSec5).find(".txt1"), .8, {top:370, opacity:1, delay:0.5, ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec5 .left .roll").eq(curSec5).find(".txt2"), .8, {top:428, opacity:1, delay:0.6, ease:Power3.easeOut});
				TweenMax.to($("#mainPage .section.sec5 .left .roll").eq(curSec5).find(".txt3"), .8, {top:570, opacity:1, delay:0.7, ease:Power3.easeOut});
			}
			
		})
	})

	//inlife
	$(".inlife-con .top .top-con .bts a").hover(function(){
		TweenMax.to($(this).find(".bg img.off"), .5, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($(this).find(".bg img.on"), .5, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($(this).find(".txt1"), .5, {top:80, delay:0.1, ease:Power3.easeOut});
		TweenMax.to($(this).find(".txt2"), .5, {top:120, ease:Power3.easeOut});
		TweenMax.to($(this).find(".arrow"), .5, {top:163, opacity:1, ease:Power3.easeOut});	
	}, function(){
		TweenMax.to($(this).find(".bg img.off"), .5, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($(this).find(".bg img.on"), .5, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($(this).find(".txt1"), .5, {top:98, ease:Power3.easeOut});
		TweenMax.to($(this).find(".txt2"), .5, {top:136, delay:0.1, ease:Power3.easeOut});
		TweenMax.to($(this).find(".arrow"), .5, {top:155, delay:0.1, opacity:0, ease:Power3.easeOut});	
	});

	//overpoint
	var setTimer = setInterval(function(){
		TweenMax.to($(".inlife-con #bottom .botSec .over-area a p.off img"), .8, {scale:1, opacity:0, ease:Power3.easeOut, onComplete:function(){
			TweenMax.to($(".inlife-con #bottom .botSec .over-area a p.off img"), 0, {scale:0, opacity:1, ease:Power3.easeOut});
		}});
	}, 1000);

	var curClickPoint = false;
	TweenMax.to($(".inlife-con #bottom .botSec .over-area a p.on"), 0, {scale:0.5, opacity:0, ease:Power3.easeOut});
	$(".inlife-con #bottom .botSec .over-area a.sample1").on("click", function(){
		if(curClickPoint == false){
			TweenMax.to($(this).find(".off"), .8, {opacity:0, ease:Power3.easeOut});
			TweenMax.to($(this).find(".on"), .8, {opacity:1, scale:1, ease:Power3.easeOut});
			$(".over_con").stop().fadeIn(350);

			curClickPoint = true;

		}else{
			TweenMax.to($(this).find(".off"), .8, {opacity:1, ease:Power3.easeOut});
			TweenMax.to($(this).find(".on"), .8, {opacity:0, scale:0, ease:Power3.easeOut});
			$(".over_con").stop().fadeOut(350);

			curClickPoint = false;
		}
	})
});