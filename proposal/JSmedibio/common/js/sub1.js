$(window).load(function(){

  
  // 헤더 ---------------------------------------------------------------------------------------
  // gsap.to("header", {duration: 1.3, top: 0, ease: Cubic.easeOut});
  // $("header .nav").hover(function(){
  //   $("header").addClass("hover");
  //   $("header").removeClass("wht");
    
  // }, function(){
  //   $("header").removeClass("hover");
  //   if(curMainV == 0){
  //     $("header").removeClass("wht");
  //   }else if(curMainV == 1){
  //     $("header").addClass("wht");
  //   }else if(curMainV == 2){
  //     $("header").addClass("wht");
  //   }
  // });
  // $("header .nav li").hover(function(){
  //   $(this).addClass("hover")
  // }, function(){
  //   $(this).removeClass("hover")
  // });



  // 키비주얼 영역 ---------------------------------------------------------------------------------------
  gsap.to(".intro .txt img", {duration: 1.3, delay: .4, y: 0, opacity: 1, ease: Cubic.easeInOut});
  // gsap.to(".intro .txt img", {duration: 1.3, delay: 2.2, y: -180, opacity: 0, ease: Cubic.easeInOut});


  // var teraAni = gsap.timeline();
  // teraAni.fromTo(".intro .txt img", {delay: .4, y: 0, opacity: 1,}, {y: -180, opacity: 0}, 0.1)
  //         .fromTo(".intro .bg .img", {y: 0}, {y: -200}, .6)
  //         .fromTo(".intro .copy", {top: "60%", opacity: 0,}, {top: "0%", opacity: 1,}, .6)

	// 	var teraAniTgr = ScrollTrigger.create({
	// 		animation: teraAni,
	// 		trigger: ".intro ",
	// 		start: "top top",
	// 		end: "200% top",
	// 		scrub: 2,
	// 		pin: true,
	// 		anticipatePin: 1,
	// 		// markers: true,
	// 		onEnter: function () {
	// 		},
	// 		onLeaveBack: function () {
	// 		},
	// 	});


  // 인트로 메인 텍스트 
  gsap.to($(".intro .txt .img"), {
    scrollTrigger: {
      trigger: ".intro .txt",
      start: "0 top",
      end: "100% bottom",
      // scrub : 1,
      pin: ".intro",
      // markers: true,
      onUpdate : function(self){
        if(self.progress.toFixed(3) == 0){
          gsap.to(".intro .txt img", {duration: 1.5, y: 0, opacity: 1, ease: Cubic.easeInOut});
        } else if (self.progress.toFixed(3) > 0.2) {
          gsap.to(".intro .txt img", {duration: 1.3, y: -120, opacity: 0, ease: Cubic.easeInOut});
          // setTimeout(function(){
          //   gsap.to(".intro .txt img", {duration: .1, y: 0, ease: Cubic.easeInOut});
          // }, 1300)
        }
      },
    },
  });


  // bg 이미지
  gsap.to(".intro .bg .img", {
    scrollTrigger: {
      trigger: ".intro",
      start: "3% top",
      end: "200% bottom",
      // markers: true,
      scrub : 1,
      // pin: ".intro",
    },
    y : -300,
  });


  
  // // 긍휼지심 텍스트 패럴랙스
  gsap.to(".intro .copy", {
    scrollTrigger: {
      trigger: ".intro",
      start: "18% top",
      end: "100% bottom",
      // markers: true,
      // scrub : 1,
      // pin: ".intro",
    },
    duration : 1.2,
    y : 0,
  });
  // // 긍휼지심 텍스트 각각 불켜기
  gsap.to(".intro .copy p", {
    scrollTrigger: {
      trigger: ".intro",
      start: "30% top",
      end: "100% bottom",
      // markers: true,
      // scrub : 1,
      // pin: ".intro .bg",
    },
    opacity : 1,
    stagger : .4,
  });

  // // 고서 이미지 아래쪽 올라오기
  gsap.to(".intro .obj p:first-of-type", {
    scrollTrigger: {
      trigger: ".intro",
      start: "30% top",
      end: "100% bottom",
      // markers: true,
      // scrub : 1,
      // pin: ".intro .bg",
    },
    duration : 1.2,
    y : 0,
  });
  // // 고서 이미지 위쪽 올라오기
  gsap.to(".intro .obj p:last-of-type", {
    scrollTrigger: {
      trigger: ".intro",
      start: "30% top",
      end: "100% bottom",
      // markers: true,
      // scrub : 1,
      // pin: ".intro .bg",
    },
    duration : 1.2,
    y : 0,
  });


  gsap.to(".intro .for_pin", {
    scrollTrigger: {
      trigger: ".intro .for_pin",
      start: "0 top",
      end: "500% bottom",
      markers: true,
      // scrub : 1,
      pin: ".intro .for_pin",
      pinSpacing:false,
    },
    // duration : 1.2,
    top : "unset",
  });

  // var theNextAni = ScrollTrigger.create({
  //   trigger: ".intro .for_pin",
  //   start: "0 top",
  //   markers: true,
  //   end: "200% top",
  //   // scrub: 2,
  //   pin: true,
  //   // toggleActions: "play none none reverse"
  //   onEnter: function () {
      
  //   },
  //   // onUpdate: function(self){
  //   // 	if (self.progress.toFixed(3) > 0.1) {
  //   // 		gsap.to(".the_next .intro .step2 li .dimd" , 2, {opacity: 1, ease:Power3.easeOut});
  //   // 		gsap.to(".the_next .intro .step1 .txt" , 2, {opacity: 1, top: "50%", ease:Power3.easeOut});
  //   // 	}else{
  //   // 		gsap.to(".the_next .intro .step2 li .dimd" , 2, {opacity: 0, ease:Power3.easeOut});
  //   // 		gsap.to(".the_next .intro .step1 .txt" , 1, {opacity: 0, top: "55%", ease:Power3.easeOut});
  //   // 	}
  //   // }
  // });


  // sec1 덮으면서 올라오기
  


// $(window).on("load resize scroll", function() {
//   var winTop = $(window).scrollTop(),
//       winHeight = $(window).height(),
//       sec1Top = $(".sec1").offset().top,
//       isAnimated = false;
      
//   if (winTop + winHeight > sec1Top && !isAnimated) {
    
//     // $("html, body").animate({scrollTop: sec1Top}, 1100, function() {
//     //   setTimeout(function(){
//     //     $("html, body").scrollTop();
//     //   }, 3000)
//     // });

//     // gsap.to(".sec1", {duration: 1.3, "margin-top": "-100vh", ease: Cubic.easeInOut, onComplete: function() {
//     //   // $('body').addClass('scrl');
//     //   // isAnimated = true;
//     // }});
//     gsap.to(".sec1", {duration: 1.3, delay: 1.2, "background": "#fff", ease: Cubic.easeInOut});
//     gsap.to(".sec1 .txt", {duration: 1.3, delay: 1.2, "width": "385px", "padding-top": "200px", ease: Cubic.easeInOut});
//     gsap.to(".sec1 .map", {duration: 1.3, delay: 2, "margin": "240px 0 70px", opacity: 1, ease: Cubic.easeInOut});
//     gsap.to(".sec1 .list", {duration: 1.3, delay: 2, "padding-top": "580px", opacity: 1, ease: Cubic.easeInOut, onComplete: function() {
//       // $('body').removeClass('scrl');
//     }});
//     // setTimeout(function() {
//     // }, 2000);

//     isAnimated = true;
    
//   } else if (winTop + winHeight < sec1Top) {
//     isAnimated = false;
//     gsap.to(".sec1", {duration: 1.5, "transform": "translateY(0)", ease: Cubic.easeInOut});
//   }
  
//   if (winTop > $(".sec1").offset().top + $(".sec1").height()){
//     // console.log($(".sec1").offset().top + $(".sec1").height());
//     gsap.to(".sec2 .txt", {duration: 1.2, opacity: 1, ease: Cubic.easeInOut});
//     gsap.to(".sec2 .bg video", {duration: 1.2, opacity: 1, ease: Cubic.easeInOut});
//   }
// });


$(window).on("load resize scroll", function() {
  var winTop = $(window).scrollTop(),
      winHeight = $(window).height(),
      sec1Top = $(".sec1").offset().top,
      pinTop = $(".for_pin").offset().top,
      isAnimated = false;

  // if (winTop > pinTop && !isAnimated) {
  //   $(".for_pin").addClass("fixed");
  // } 

  // if (winTop + winHeight > sec1Top && !isAnimated) {
    
  //   // $("html, body").animate({scrollTop: sec1Top}, 1100, function() {
  //   //   setTimeout(function(){
  //   //     $("html, body").scrollTop();
  //   //   }, 3000)
  //   // });

    

  //   // gsap.to(".sec1", {duration: 1.3, "margin-top": "-100vh", ease: Cubic.easeInOut, onComplete: function() {
  //   //   // $('body').addClass('scrl');
  //   //   // isAnimated = true;
  //   // }});
  //   gsap.to(".sec1", {duration: 1.3, delay: 1.2, "background": "#fff", ease: Cubic.easeInOut});
  //   gsap.to(".sec1 .txt", {duration: 1.3, delay: 1.2, "width": "385px", "padding-top": "200px", ease: Cubic.easeInOut});
  //   gsap.to(".sec1 .map", {duration: 1.3, delay: 2, "margin": "240px 0 70px", opacity: 1, ease: Cubic.easeInOut});
  //   gsap.to(".sec1 .list", {duration: 1.3, delay: 2, "padding-top": "580px", opacity: 1, ease: Cubic.easeInOut, onComplete: function() {
  //     // $('body').removeClass('scrl');
  //   }});
  //   // setTimeout(function() {
  //   // }, 2000);

  //   isAnimated = true;
    
  // } else if (winTop + winHeight < sec1Top) {
  //   isAnimated = false;
  //   gsap.to(".sec1", {duration: 1.5, "transform": "translateY(0)", ease: Cubic.easeInOut});
  // }
  
  if (winTop > $(".sec1").offset().top + $(".sec1").height()){
    // console.log($(".sec1").offset().top + $(".sec1").height());
    gsap.to(".sec2 .txt", {duration: 1.2, opacity: 1, ease: Cubic.easeInOut});
    gsap.to(".sec2 .bg video", {duration: 1.2, opacity: 1, ease: Cubic.easeInOut});
  }
});


  // var sec1Ani = gsap.timeline();
  // sec1Ani.fromTo(".sec1 ", {background: "pink"}, {background: "#fff"}, 2)
  //         .fromTo(".sec1 .txt", {"width": "577px", "padding-top": "45vh"}, {"width": "385px", "padding-top": "200px"}, 2)
  //         .fromTo(".sec1 .map", {"margin": "100vh 0 70px", opacity: 0}, {"margin": "240px 0 70px", opacity: 1}, 3)
  //         .fromTo(".sec1 .list", {"padding-top": "120vh", opacity: 0}, {"padding-top": "580px", opacity: 1}, 3.1)
  //         // .fromTo(".intro .copy", {top: "60%", opacity: 0,}, {top: "0%", opacity: 1,}, .6)

	// 	var sec1AniTgr = ScrollTrigger.create({
	// 		animation: sec1Ani,
	// 		trigger: ".sec1",
	// 		start: "top bottom",
	// 		// end: "100% bottom",
	// 		// scrub: 2,
	// 		pin: true,
  //     // pinspacing: false,
	// 		// anticipatePin: 1,
	// 		markers: true,
	// 		onEnter: function () {
  //       gsap.to(".sec1", {duration: 1.3, "margin-top": "-100vh", ease: Cubic.easeInOut, onComplete: function() {
  //   //       // $('body').addClass('scrl');
  //   //       // isAnimated = true;
  //       }});
	// 		},
	// 		onLeaveBack: function () {
  //       gsap.to(".sec2 .txt", {duration: 1.2, opacity: 1, ease: Cubic.easeInOut});
  //       gsap.to(".sec2 .bg video", {duration: 1.2, opacity: 1, ease: Cubic.easeInOut});
	// 		},
	// 	});





  // sec1 ---------------------------------------------------------------------------------------
  $(".sec1 .list li a").hover(function() {
    $(".sec1 .list li a").css("opacity", ".3");
    $(".sec1 .list li a").prev("span").css("opacity", "0");
    $(this).css("opacity", "1");
    $(this).before('<span class="line"></span>') 
    $(this).prev("span").css("opacity", "1");
  });
  
  $(".sec1 .list li a").click(function() {
    $(".card").removeClass("on");
    $(".sec1 .list li a").css("opacity", "1");
    $(this).next(".card").addClass("on");
    var idex = $(this).parent(".sec1 .list li").index();
    $(".sec1 .map li").removeClass("on")
    $(".sec1 .map li").eq(idex).addClass("on")
  });



  // var isFirstCardOn = false;
  // $(".sec1 .list li .card").each(function(q){
  //   gsap.to($(this), {
  //     scrollTrigger: {
  //       trigger: $(this),
  //       start: "top 75%",
  //       end:"bottom top",
  //       once: true,
  //       onEnter: function() {
  //         if (!isFirstCardOn && q === 0) {
  //           $(".sec1 .list li .card").eq(0).addClass("on");
  //           isFirstCardOn = true;
  //         }
  //       }
  //     },
  //   });
  // });



  $(window).scroll(function() {
    var mapTop = $(".sec1").offset().top;
    var scrollTop = $(window).scrollTop();
    if (scrollTop > mapTop) {
      $(".sec1 .for_fixed").addClass("fixed");
    } else {
      $(".sec1 .for_fixed").removeClass("fixed");
    }
  });



  // var introH = $(".sec2").offset().top;
  // var introH = $(".intro").height();
  // var secH = $(".sec1").height();
  // var sec2Top = introH + secH;
  // console.log(sec2Top);
  // $(".sec2").css({top: sec2Top})

  // scroll motion ------------------------------------------------------------------------------
  if($(".scroll_motion").size() > 0){
    $(".scroll_motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 75%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll_motion:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }


  // var _getScrollObjY = function () {
  //   var _arrY = [];
  //   $(".scroll_motion").each(function (q) {
  //     // _arrY.push(parseInt($(".scroll_motion").eq(q).offset().top - 350 : ($(window).height()/50)));
  //     _arrY.push(parseInt($(".scroll_motion").eq(q).offset().top) + ($(".colorful-bg").hasClass("scroll_motion") ? 350 : ($(window).height()/50)));
  //   });
  //   return _arrY;
  // };
  // $(".scroll_motion").each(function (q) {
  //   if($(window).scrollTop() + $(window).height() > _getScrollObjY()[q]){
  //     $(".scroll_motion").eq(q).addClass("active");
  //   }
  // });


  // header + 스크롤 ------------------------------------------------------------------------------
  var _this_scroll;
  var _isScrollTop;

  

  $(window).on("scroll", function(){
    _isScrollTop =  $(window).scrollTop();

    
    // if ($(window).scrollTop() + 500 > $(".sec1 .map").offset().top) {
    //   console.log("??");
    //   $(".sec1 .map").addClass("fixed");
    // }

    

    if(_isScrollTop > _this_scroll) { // down
      if(_isScrollTop > 0){
        if($("header").size() != 0){
          gsap.to(("header"), 1.2, {top: -120, ease:Power3.easeOut});
          // gsap.to(".intro .txt img", {duration: 1.3, delay: .4, y: 0, opacity: 1, ease: Cubic.easeInOut});
        }
        if (_isScrollTop > $(".sec1").offset().top - 100){
          // $(".sec1 .list li .card").removeClass("on");
          // $(".sec1 .list li .card").eq(0).addClass("on");
          // $(".sec1 .map li").removeClass("on")
          // $(".sec1 .map li").eq(0).addClass("on")
        }
      }
    }
    
    if(_isScrollTop < _this_scroll) { // up
      if(_isScrollTop != 0 && _isScrollTop > 0){
        gsap.to(("header"), 1.3, {top: 0, ease:Power3.easeOut});
        // $("header").css("background", "#fff");
        // gsap.to(("aside"), 1, {top: 150, ease:Power3.easeOut});
        $("header").removeClass("dark").addClass("up_scroll").removeClass("top");
      }else if (_isScrollTop == 0) {
        $("header").addClass("top");
      }
      if(_isScrollTop > $(".sec1").offset().top) {
      }
      if(_isScrollTop == 0){
        // $("header").css("background", "");
        // $("header").addClass("dark").removeClass("up_scroll");
      }
    }


    _this_scroll = _isScrollTop;
  });$(window).scroll()

});