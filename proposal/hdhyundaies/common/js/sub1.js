$(function() {
  let scrollT;
  let windowH;
  let footerT;
  let lastY;
  let isScrollDown;

  let tl = gsap.timeline();

  

  $(window).on("scroll", function () {
    scrollT =  $(window).scrollTop();

    if (scrollT > lastY) {
      isScrollDown = true;
      $("header").addClass("active");
    } else {
      isScrollDown = false;
      $("header").removeClass("active");
    }
    lastY = scrollT;

    footerT = $("footer").offset().top;
    windowH = $(window).innerHeight();

    
    if(footerT >= (windowH + scrollT)) {
      $(".sticky-wrap").addClass("fixed");
    } else { 
      $(".sticky-wrap").removeClass("fixed");
    }

    if(scrollT >= 100) {
      gsap.to(".sticky-wrap", 1, {
        bottom: 0,
        ease:Power3.easeOut
      })
    } else {
      gsap.to(".sticky-wrap", 1, {
        bottom: "-70px",
        ease:Power3.easeOut
      })
    }
  });



  // swiper
  var thumbSwiper = new Swiper(".thumbSwiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });
  var mainSwiper = new Swiper(".mainSwiper", {
    effect: 'fade',
    loop: true,
    spaceBetween: 10,
    loopedSlides: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: thumbSwiper,
    },
  });
      // mainSwiper.controller.control = thumbSwiper;


  
   // 공통 스크롤 모션
  function scrollMotionFuc () {
    $(".scroll-motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 75%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll-motion:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }
  scrollMotionFuc();



  // Features
  let txtHeight = 0;
  let titHeight = 0;
  let barPos = 0;
  let prevNum = -1;
  let prevTxtHeight = 0;
  let itemMargin = 0;

  var test1 = $(".control li").eq(0).offset().top;
  var test2 = $(".control li").eq(1).offset().top;
  var test3 = $(".control li").eq(2).offset().top;
  var test4 = $(".control li").eq(3).offset().top;
  var test5 = $(".control li").eq(4).offset().top;

  var _isScrollTop =  $(window).scrollTop();

  if(_isScrollTop < test1) {
    $(".feat-list .item").eq(0).addClass("on");
    $(".feat-list .item").eq(0).find(".txt").slideDown(0, function() {
      $(".list-bar .bar").css("height", $(".feat-list .item.on").height());
    });
    
  }
  if(_isScrollTop > test2 && _isScrollTop < test3) {
    $(".feat-list .item").eq(1).addClass("on");
    $(".feat-list .item").eq(1).find(".txt").slideDown(0, function() {
      $(".list-bar .bar").css("height", $(".feat-list .item.on").height());
    });
  }
  if(_isScrollTop > test3 && _isScrollTop < test4) {
    $(".feat-list .item").eq(2).addClass("on");
    $(".feat-list .item").eq(2).find(".txt").slideDown(0, function() {
      $(".list-bar .bar").css("height", $(".feat-list .item.on").height());
    });
  }
  if(_isScrollTop > test4 && _isScrollTop < test5) {
    $(".feat-list .item").eq(3).addClass("on");
    $(".feat-list .item").eq(3).find(".txt").slideDown(0, function() {
      $(".list-bar .bar").css("height", $(".feat-list .item.on").height());
    });
  }
  if(_isScrollTop > test5) {
    $(".feat-list .item").eq(4).addClass("on");
    $(".feat-list .item").eq(4).find(".txt").slideDown(0, function() {
      $(".list-bar .bar").css("height", $(".feat-list .item.on").height());
    });
  }

  function featListFunc(listNum) {
    var num = listNum;

    if(prevNum != num) {
      $(".feat-list .item").eq(num).addClass("on");
      $(".feat-list .item").eq(num).siblings().removeClass("on");
      $(".feat-list .item").eq(num).find(".txt").slideDown(400);
      $(".feat-list .item").eq(num).siblings().find(".txt").slideUp(400);

      titHeight = $(".feat-list .item").eq(num).find(".tit").height();
      txtHeight = $(".feat-list .item").eq(num).find(".txt span").outerHeight(true);
      barPos = $(".feat-list .item").eq(num).position().top;
      itemMargin = parseInt($(".feat-list .item").eq(num).css("margin-top"), 10);

      $(".list-bar .bar").css("height", titHeight + txtHeight);

      if(num > prevNum) {
        barPos = $(".feat-list .item").eq(num).position().top - (prevTxtHeight - itemMargin);
        $(".list-bar .bar").css("top", barPos);
      } else {
        barPos = $(".feat-list .item").eq(num).position().top + itemMargin;
        $(".list-bar .bar").css("top", barPos);
      }

      var slide = $(".bg-list li").eq(num);
      var slide2 = $(".bg-list li").eq(num).siblings();

      tl.addLabel("start")
      .to(slide, 0, {zIndex: 1})
      .to(slide, .6, {opacity: 1})
      .to(slide2, 0, {opacity: 0})
      .to(slide, 0, {zIndex: 0})

      prevTxtHeight = txtHeight;
      prevNum = num;
    }
  }

  $(window).on("scroll", function () {
    test1 = $(".control li").eq(0).offset().top;
    test2 = $(".control li").eq(1).offset().top;
    test3 = $(".control li").eq(2).offset().top;
    test4 = $(".control li").eq(3).offset().top;
    test5 = $(".control li").eq(4).offset().top;

    _isScrollTop =  $(window).scrollTop();

    if($(".module-features").offset().top <= $(window).scrollTop() && ($(".module-features").offset().top + $(".module-features").height()) >= ($(window).scrollTop() + $(window).height())) {
      if(!($(".feat-fixed").hasClass("fix"))) {
        $(".feat-fixed").addClass("fix");
      }
    } else {
      if($(window).scrollTop() + $(window).height() >= $(".module-features").offset().top + $(".module-features").height()) {
        if($(".feat-fixed").hasClass("fix")) {
          $(".feat-fixed").css("bottom", 0).css("top", "unset");
          $(".feat-fixed").removeClass("fix");
        }
      } else {
        if($(".feat-fixed").hasClass("fix")) {
            $(".feat-fixed").css("bottom", "unset").css("top", 0);
            $(".feat-fixed").removeClass("fix");
          }
      }
    }

    if(_isScrollTop > test1 && _isScrollTop < test2) {
      featListFunc(0);
    }
    if(_isScrollTop > test2 && _isScrollTop < test3) {
      featListFunc(1);
    }
    if(_isScrollTop > test3 && _isScrollTop < test4) {
      featListFunc(2);
    }
    if(_isScrollTop > test4 && _isScrollTop < test5) {
      featListFunc(3);
    }
    if(_isScrollTop > test5) {
      featListFunc(4);
    }
});

  $(".feat-list .item").on("click", function() {
    var t = $(this).index();
    $(window).scrollTop($(".control li").eq(t).offset().top);
    featListFunc($(this).index());
  });



  // check
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".check-area",
      start: "top top",
      end: "bottom+=200% bottom",
      scrub: 2,
      pin: ".check-area",
      // markers: true,
    },
  });
  
  tl2.addLabel("start")
    .to($(".check-area .tit-cont .tit"), 2, {opacity: 1, transform: "translateY(0)"})
    .to($(".check-area .tit-cont"), 10, {top: "-100%"},  ">2")
    .to($(".check-area .check-cont .check-wrap .list-tit"), 4, {opacity: 1, transform: "translateY(0)"}, ">-7")
    .to($(".check-area .check-cont .check-wrap .check-list"), 4, {opacity: 1, transform: "translateY(0)"}, ">-2")



    // tab
    let pageBoxHeight = $(".tab-wrap2").outerHeight(true);
    
    // function tabFixedFunc() {
    //   ScrollTrigger.create({
    //     trigger: ".tab-fixed",
    //     start: "top top",
    //     endTrigger: ".tab-area",
    //     end: () => "bottom " + (pageBoxHeight),
    //     pin: true,
    //     markers: true,
    //   })
    // }
    // tabFixedFunc();

    $(window).on("scroll", function() {
      _isScrollTop =  $(window).scrollTop();

      if($(".module-spec").offset().top <= _isScrollTop && (_isScrollTop <= ($(".tab-area").offset().top + $(".tab-area").height() - pageBoxHeight - 377))) {
        $(".tab-fixed").addClass("fix");
        $(".tab-fixed").css("bottom", "unset").css("top", 377);
      } else if((_isScrollTop + 377 + pageBoxHeight) > ($(".tab-area").offset().top + $(".tab-area").height())) {
        $(".tab-fixed").removeClass("fix");
        $(".tab-fixed").css("bottom", 0).css("top", "unset");
      }

      if($(".module-spec").offset().top > _isScrollTop) {
        $(".tab-fixed").removeClass("fix");
          $(".tab-fixed").css("bottom", "unset").css("top", 0);
      }
      // $(".tab-fixed").removeClass("fix");
      //   $(".tab-fixed").css("bottom", "unset").css("top", 0);
    });

    $(".tab-area .tab-wrap2 .tab-btn").on("click", function() {
      
      $(this).siblings().removeClass("on");
      $(this).addClass("on");

      $(window).scrollTop($(".module-spec").offset().top)
      $(".tab-fixed").addClass("fix");
      $(".tab-fixed").css("bottom", "unset").css("top", 377);

      tabIdx = $(this).index();

      $(".tab-area .tab-cons .tab-cont").removeClass("active");
      $(".tab-area .tab-cons .tab-cont").eq(tabIdx).siblings().removeClass("on");
      $(".tab-area .tab-cons .tab-cont").eq(tabIdx).addClass("on");

      setTimeout(() => {
        ScrollTrigger.refresh();
        scrollMotionFuc();
        // tabFixedFunc();
      }, 100);
    });

});