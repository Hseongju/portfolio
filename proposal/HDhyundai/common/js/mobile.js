$(function(){
  // 헤더 영역
  // let scrollTop = 0;

  // $("#mobileWrap .content .scroll").on("scroll", function(){
  //   scrollTop =  $("#mobileWrap .content .scroll").scrollTop();

  //   if(scrollTop > 100){
  //     gsap.to(("header a"), .4, {opacity: 0});
  //   } else {
  //     gsap.to(("header a"), .4, {opacity: 1});
  //   }
  // });


  // 메인 sec
  setTimeout(() => {
    $(".intro-sec").hide();
    gsap.to(".main-sec .main-wrap .bg", 0, {opacity: 1});
    gsap.fromTo(".main-sec .main-wrap .tit", 1, {opacity: 0, yPercent: 30}, {opacity: 1, yPercent: 0, delay: .2})
    gsap.fromTo(".slider-sec .slider-area", 1, {opacity: 0, yPercent: 30}, {opacity: 1, yPercent: 0, delay: .3})
    gsap.to(".main-sec .main-wrap .bg", 1, {width: "252px", top: "520px", right: "16px", transform: 0})
  }, 1000);


  // 메인 sec 고정 영역
  // gsap.to(".main-sec .main-wrap", {
  //   scrollTrigger: {
  //     trigger: ".main-sec .main-wrap",
  //     start: "top top",
  //     end: "bottom top",
  //     pin: true,
  //     pinSpacing: false,
  //     // markers: true,
  //     scroller: "#mobileWrap .content .scroll",
  //   },
  // });


  // 슬라이드 width
  gsap.to($(".slider-wrap"), {
    width: "100%",
    scrollTrigger: {
      trigger: $(".slider-sec"),
      start: "top 80%",
      end: "bottom bottom",
      // markers: true,
      scrub: 1,
      scroller: "#mobileWrap .content .scroll",
      onUpdate: function (self) {
        if(self.progress > 0.3) {
          gsap.to(".main-sec .main-wrap .tit img", .4, {opacity: 0})
          gsap.to(("header .logo"), .4, {opacity: 0});
        } else {
          gsap.to(".main-sec .main-wrap .tit img", .4, {opacity: 1})
          gsap.to(("header .logo"), .4, {opacity: 1});
        }
        if(self.progress > 0.9) {
          gsap.to($(".one").find(".txt"), .4, {opacity: 1, yPercent: 0});
        } else {
          gsap.to($(".one").find(".txt"), .4, {opacity: 0, yPercent: 30});
        }
      },
    },
  });


  // 슬라이드 sec 고정 영역
  // gsap.to(".slider-sec", {
  //   scrollTrigger: {
  //     trigger: ".slider-sec",
  //     start: "top top",
  //     // end: "bottom top",
  //     end: "+=1000",
  //     pin: true,
  //     pinSpacing: false,
  //     // pinSpacing: true,
  //     // markers: true,
  //     scroller: "#mobileWrap .content .scroll",
  //   },
  // });


  // 슬라이드 sec 종료
  gsap.to(".three .bg", {
    yPercent: -10,
    ease: Power1.easeInOut,
    scrollTrigger: {
      trigger: ".sec3",
      start: "top bottom",
      end: "top top",
      scrub: 1,
      // markers: true,
      scroller: "#mobileWrap .content .scroll",
    },
  });


  // 슬라이드 sec 스크롤 스와이프
  let delta = 0;
  let restart = false;
  let isStop = false; 
  let sliderSecX = $(".slider-sec").position().top;
  let sec3X = $(".sec3").position().top;

  $("#mobileWrap .content .scroll").on("mousewheel",function(event){
    delta = event.originalEvent.deltaY;
    sliderSecX = $(".slider-sec").position().top;
    sec3X = $(".sec3").position().top;

    if(delta > 0) {
      if(sliderSecX <= 0 && !$(".slider-sec").hasClass("fixed")) {
        $("#mobileWrap").addClass("scroll-lock");
        $(".slider-sec").addClass("fixed");
        $(".slider-list").addClass("swipe");
        $(".one").addClass("on");
      }
  
    } else if(delta < 0) {
      if(sec3X > 798 && restart) {
        restart = false;
        $("#mobileWrap").addClass("scroll-lock");
        $(".slider-list").addClass("swipe");
      }
    }

    if($(".slider-list").hasClass("swipe")) {
      if(delta > 0) { // down
        $(".slider-list .slider-item").each((idx, item) => {
          if(!isStop && !$(item).hasClass("on")) {
            isStop = true;
            $(item).addClass("on");
            $(item).find(".dimd").fadeOut(0);
            $(item).prev().find(".dimd").fadeIn(400);
            gsap.to($(item).prev().find(".bg"), .4, {xPercent: -30, ease: Power2.easeInOut});
            gsap.fromTo($(item).find(".txt"), .4, {opacity: 0, yPercent: 30}, {opacity: 1, yPercent: 0, delay: .4});

            gsap.to($(".bar-box .bar"), .4, {width: `${33.4 * (idx + 1)}%`});

            setTimeout(() => {
              isStop = false;
            }, 800);
          }
          if($(".slider-list .slider-item.on").length === $(".slider-list .slider-item").length && $(".slider-list").hasClass("swipe")) {
            setTimeout(() => {
              $("#mobileWrap").removeClass("scroll-lock");
              $(".slider-list").removeClass("swipe");
              restart = true;
              isStop = false;
            }, 100);
          }
          
        });
      } else if(delta < 0) { // up
        let reverseItems = $($(".slider-list .slider-item").get().reverse());
        $(reverseItems).each((idx, item) => {
          if(!isStop && $(item).hasClass("on")) {
            isStop = true;
            $(item).removeClass("on");
            $(item).prev().find(".dimd").fadeOut(0);
            if(!$(item).hasClass("one")) {
              $(item).find(".dimd").fadeIn(400);
            }
            gsap.to($(item).prev().find(".bg"), .4, {xPercent: 0, ease: Power2.easeInOut});
            gsap.fromTo($(item).prev().find(".txt"), .4, {opacity: 0, yPercent: 30}, {opacity: 1, yPercent: 0, delay: .4});

            if(!$(item).hasClass("one")) {
              gsap.to($(".bar-box .bar"), .4, {width: `${100 - ((idx + 1) * 33.4)}%`});
            }

            setTimeout(() => {
              isStop = false;
            }, 800);
          }
          if($(".slider-list .slider-item.on").length === 0 && $(".slider-list").hasClass("swipe")) {
            setTimeout(() => {
              $("#mobileWrap").removeClass("scroll-lock");
              $(".slider-sec").removeClass("fixed");
              $(".slider-list").removeClass("swipe");
              isStop = false;
              }, 100);
          }
          
        });
      }
    }
  });

});