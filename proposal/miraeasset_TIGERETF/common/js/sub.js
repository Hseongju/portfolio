$(function () {
	//로드
	var _wHeight;
	var device = '';
	var _subH;
  var isLnb = false;

	var _getScrollObjY1 = function(){ //  scroll early
    var scrollArray =[];
    var pHeight;
    if(device == "pc"){
        pHeight = 400; // default 400
    }else{
        pHeight = 400;
    }
    $(".scrollMotion").each(function(index){
        scrollArray.push(parseInt($(".scrollMotion").eq(index).offset().top) + pHeight);
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
			TweenMax.to($(".header"), 0.5, {top:0, ease:Power0.Linear});
      console.log(isLnb)
      if(isLnb){
        TweenMax.to($(".fixed_lnb_area"), 0.5, {top:120, ease:Power0.Linear});
      }
		}else{
			//down
			TweenMax.to($(".header"), 0.5, {top:-120, ease:Power0.Linear});
      console.log(isLnb)
      if(isLnb){
        TweenMax.to($(".fixed_lnb_area"), 0.5, {top:0, ease:Power0.Linear});
      }
		}
	});
    
  if($(".sub1").length > 0){
    gsap.to($('.sub1 .visual_area .img'), {
      scrollTrigger: {
        trigger:$('.sub1 .visual_area .img'),
        start: "0 0",
        end:"+=130% bottom",
        endTrigger:$(".sub1 .visual_area"),
        scrub: true,
        pin:true,
        //markers: true,
        onUpdate : function(self){
          console.log(self.progress.toFixed(3))
          if(self.progress.toFixed(3) < 0.25){
            $(".sub1 .visual_div .txt_div p").addClass("on");
            $(".sub1 .visual_div .btn_div").addClass("on");
            TweenMax.to($(".sub1 .visual_div .scroll img"), 0.6, {bottom:45, ease:Power3.easeOut});
            $(".sub1 .cross_txt p").removeClass("on");
            $(".sub1 .trigger_txt_area .info_txt p").removeClass("on");
          }else if(self.progress.toFixed(3) >= 0.25 && self.progress.toFixed(3) < 0.8){
            $(".sub1 .visual_div .txt_div p").removeClass("on");
            $(".sub1 .visual_div .btn_div").removeClass("on");
            TweenMax.to($(".sub1 .visual_div .scroll img"), 0.6, {bottom:-200, ease:Power3.easeOut});
            $(".sub1 .cross_txt p").removeClass("on");
            $(".sub1 .trigger_txt_area .info_txt p").removeClass("on");
          }else if(self.progress.toFixed(3) >= 0.8 && self.progress.toFixed(3) < 0.99){
            $(".sub1 .cross_txt p").addClass("on")
            $(".sub1 .trigger_txt_area .info_txt p").removeClass("on");
          }else if(self.progress.toFixed(3) >= 0.99){
            $(".sub1 .trigger_txt_area .info_txt p").addClass("on");
          }
        }
      },
      transform:"translate3d(0,0,0)",
      scale:0.4,
      opacity:0.6
    });

    gsap.to($('.sub1'), {
      scrollTrigger: {
        trigger:$('.sub1 .visual_area'),
        start: "60% 0",
        end:"+=1500% bottom",
        //endTrigger:$(".sub1 .visual_area"),
        //markers: true,
        scrub:true
      },
      "background":"#ffffff",
    });

    gsap.to($('.industry_sec .bg_area .bg_div'), {
      scrollTrigger: {
        trigger:$('.industry_sec .bg_area'),
        start: "0 0",
        end:"+=200% bottom",
        endTrigger:$(".industry_sec .bg_area"),
        //markers: true,
        //scrub:true,
        pin:true,
        onEnter : function(self){
          $(".industry_sec .mask_div .mask").addClass("on")
        },
        onUpdate : function(self){
          console.log(self.progress.toFixed(3))
          if(self.progress.toFixed(3) >= 0.009){
            $(".industry_sec .bg_area .bg:nth-child(2) .txt").addClass("active")
          }
        }
      },
      
    });

    // gsap.to($('.industry_sec .bg_area'), {
    //   scrollTrigger: {
    //     trigger:$('.industry_sec .bg_area'),
    //     start: "0 0",
    //     end:"+=200% bottom",
    //     //endTrigger:$(".industry_sec .bg_area .bg:nth-child(2)"),
    //     //markers: true,
    //     //scrub:true,
    //     pin:true,
    //   },
    // });

    gsap.to($('.industry_sec .bg_area .bg:nth-child(2)'), {
      scrollTrigger: {
        trigger:$('.industry_sec .bg_area .bg:nth-child(2)'),
        start: "300px 0",
        end:"+=200% bottom",
        endTrigger:$(".industry_sec .bg_area .bg:nth-child(3)"),
        //markers: true,
        scrub:true,
        onEnter : function(self){
          $(".industry_sec .bg_area .bg:nth-child(2)").addClass("on")
        },
        onUpdate : function(self){
          //console.log(self.progress.toFixed(3))
          if(self.progress.toFixed(3) >= 0.4){
            $(".industry_sec .bg_area .bg:nth-child(3) .txt").addClass("active")
          }
        }
      },
      "height":"0"
    });
  }
  
	var scTop;
	$(window).scroll(function(){
    var isFirstStart = false;
		scTop = $(window).scrollTop() + $(window).height();

		if($(".scrollMotion").length != 0){ // scrollMotion
			$(".scrollMotion").each(function(index){
				if($(window).scrollTop() + $(window).height()  > _getScrollObjY1()[index]) $(".scrollMotion").eq(index).addClass("active");
				//else $(".scrollMotion").eq(index).removeClass("active");
			});
		}
    

    if($(window).scrollTop() > 1){
      $(".lnb_area").addClass("on")
    }else{
      $(".lnb_area").removeClass("on")
    }
    
    if($(window).scrollTop() <= 0){
      $(".header").removeClass("on")
    }

    if($(window).scrollTop() >= 150){
      $(".header").addClass("on")
    }

    if($(window).scrollTop() >= 200){
      $(".fixed_lnb_area").fadeIn()
      isLnb = true;
    }else{
      $(".fixed_lnb_area").fadeOut()
    }

		$(".industry_list .list").each(function(q){
      if($(this).hasClass("active")){
        if(!$(this).hasClass("countup")){
          $(this).addClass("countup");
          if(q == 0){
            $(this).find(".count .num").counterUp({
              time: 200,
            });
          }else{
            $(this).find(".count .num").counterUp({
              time: 800,
            });
          }
        }
      }

    });

  });$(window).scroll();

  

  if(!$(".sub1 .header").hasClass("on")){
    TweenMax.to($(".sub1 .header"), 1.5, {top:0, ease:Power3.easeOut});
  }
  TweenMax.to($(".sub1 .visual_area .img img"), 3.5, {scale:1, ease:Power3.easeOut});
  TweenMax.to($(".sub1 .visual_div .txt_div p:nth-child(1)"), 1.8, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});
  TweenMax.to($(".sub1 .visual_div .txt_div p:nth-child(2)"), 1.8, {top:0, opacity:1, delay:0.6, ease:Power3.easeOut});
  TweenMax.to($(".sub1 .visual_div .txt_div p:nth-child(3)"), 1.8, {top:0, opacity:1, delay:0.9, ease:Power3.easeOut});
  TweenMax.to($(".sub1 .visual_div .btn_div"), 1.8, {right:80, opacity:1, delay:1.2, ease:Power3.easeOut});
  TweenMax.to($(".sub1 .lnb_area"), 1.8, {bottom:0, delay:1.5, ease:Power3.easeOut});

});