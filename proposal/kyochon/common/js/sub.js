$(function () {
	//로드
	var _wHeight;
	var device = '';
	var _subH;

	var _getScrollObjY1 = function(){ //  scroll early
        var scrollArray =[];
        var pHeight;
        if(device == "pc"){
            pHeight = 400; // default 400
        }else{
            pHeight = 400;
        }
        $(".scrollMotion_sub").each(function(index){
            scrollArray.push(parseInt($(".scrollMotion_sub").eq(index).offset().top) + pHeight);
        });
        return scrollArray;
	}

	var agent = navigator.userAgent.toLowerCase()
	$("#wrap").on('mousewheel DOMMouseScroll', function(e) {
		var E = e.originalEvent;
		var upDown = 0;
		if(agent.indexOf('firefox') > -1) { 
			upDown = E.detail * -1;
		}else{
			upDown = E.wheelDelta;
		}
		if(upDown > 0){
			//up
			// TweenMax.to($(".header.type2"),0.1, {top:0, ease:Power3.easeOut});
		}else{
			//down
			// TweenMax.to($(".header.type2"),0.1, {top:-170, ease:Power3.easeOut});
		}
	});

	var scTop;
	$(window).scroll(function(){
		scTop = $(window).scrollTop() + $(window).height();

		if($(".scrollMotion_sub").length != 0){ // scrollMotion
			$(".scrollMotion_sub").each(function(index){
				if($(window).scrollTop() + $(window).height()  > _getScrollObjY1()[index]) $(".scrollMotion_sub").eq(index).addClass("active");
				else $(".scrollMotion_sub").eq(index).removeClass("active");
			});
		}

		if($(".sub1").size() > 0){ 
            if($("#wrap.sub1 .sub_con .section.one .sec_inner .rolling_div").offset().top + 500 <= scTop){
                $("#wrap.sub1 .sub_con .section.one .sec_inner .rolling_div").addClass("active");
            }

            if($(window).scrollTop() >= $(".section.thr").offset().top && $(window).scrollTop() < $("#wrap.sub1 .sub_con .section.thr .sec_inner").offset().top - $(window).height()){
                $("#wrap.sub1 .sub_con .section.thr .list1 .tit").addClass("fixed").removeClass("bottom");
            }else if($(window).scrollTop() >= $("#wrap.sub1 .sub_con .section.thr .sec_inner").offset().top - $(window).height()){
                $("#wrap.sub1 .sub_con .section.thr .list1 .tit").removeClass("fixed").addClass("bottom");
            }else{
                $("#wrap.sub1 .sub_con .section.thr .list1 .tit").removeClass("fixed").removeClass("bottom");
            }
		}
    });$(window).scroll();
    
    if($(".sub1").length > 0){
        var rollingNum = 0;
        var rollingList = $("#wrap.sub1 .sub_con .section.one .sec_inner .rolling_div .txt_div .clkTxt .list");
        $("#wrap.sub1 .sub_con .section.one .sec_inner .rolling_div").on("click", function(){
            rollingList.eq(rollingNum).removeClass("active").fadeOut(0);
            rollingList.eq(rollingNum).find("p").removeClass("on");
            if(rollingNum == 0) rollingList.eq(rollingNum).fadeOut(0);
            rollingNum++;
            rollingList.eq(rollingNum).addClass("active").fadeIn(300);
            rollingList.eq(rollingNum).find("p").addClass("on");
            if(rollingNum >= 4) {
                rollingList.eq(rollingNum).removeClass("active");
                rollingList.eq(rollingNum).find("p").removeClass("on");
                rollingNum = 0;
                rollingList.eq(rollingNum).addClass("active").fadeIn(300);
                rollingList.eq(rollingNum).find("p").addClass("on");
            }
        })

        // scrolltrigger
		gsap.registerPlugin(ScrollTrigger);

        // sec1
        
        gsap.to($(".sub_vis .bg"), 2, {
            scrollTrigger: {
                trigger: ".sub_vis",
                start: "top top",
                end: "bottom top",
                //markers: true,
                scrub: true,
            },
            opacity:0,
            width:1440,
			scale:0.95,
            ease: "none"
        });

		gsap.to($(".sub_vis .bg"), 2, {
            scrollTrigger: {
                trigger: ".sub_vis",
                start: "top top",
                end: "bottom top",
                //markers: true,
                scrub: true,
            },
            opacity:0,
            width:1440,
            ease: "none"
        });

        gsap.to($(".sub_con >  .bg_div .bg"), 2, {
            scrollTrigger: {
                trigger: ".sub_con .section.thr",
                start: "top top",
                end: "+=150%",
                //markers: true,
                scrub: true,
            },
            scale:1,
            ease: "none"
        });      

        //sec2
        gsap.to($(".section.two"), {
            scrollTrigger: {
                trigger: ".section.two",
                start: "0 0",
                end: "+=100%",
                // markers: true,
                scrub: true,
                onUpdate: function(self){
                    if (self.progress.toFixed(3) >= 0.18) { 
                        $(".section.two .dimd").css("opacity", self.progress.toFixed(3));
                    }else{
                        $(".section.two .dimd").css("opacity", 0);
                    }
                }
            },
            "background-position" : "0 -60%",
            ease: "slow"
        });

        // gsap.to($(".section.thr .list1"), {
        //     scrollTrigger: {
        //         trigger: ".section.thr .list1",
        //         start: "top top",
        //         end: "+=100%",
        //         // markers: true,
        //         scrub: true,
        //         onUpdate: function(self){
        //             console.log(self.progress.toFixed(3));
        //             if (self.progress.toFixed(3) >= 0 && self.progress.toFixed(3) <= 0.7) { 
        //                 $("#wrap.sub1 .sub_con .section.thr .list1 .tit").addClass("fixed").removeClass("bottom");
        //             }else if(self.progress.toFixed(3) > 0.7){
        //                 $("#wrap.sub1 .sub_con .section.thr .list1 .tit").removeClass("fixed").addClass("bottom");
        //             }
        //              if(self.progress.toFixed(3) == 0){
        //                 $("#wrap.sub1 .sub_con .section.thr .list1 .tit").removeClass("fixed bottom");
        //             }
        //         },
        //         onLeave: function(){
        //             $("#wrap.sub1 .sub_con .section.thr .list1 .tit").removeClass("fixed");
        //         }
        //     },
        //     ease: "slow"
        // });

        //sec4
        gsap.to($("#wrap.sub1 .sub_con .section.fou .secCont1 "), {
            scrollTrigger: {
                trigger: "#wrap.sub1 .sub_con .section.fou .secCont1",
                start: "0 0",
                end: "+=30%",
                // markers: true,
                scrub: true,
            },
            "background-attachment":"fixed",
            ease: "slow"
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
    }
});