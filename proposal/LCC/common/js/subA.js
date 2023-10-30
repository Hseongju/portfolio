$(function() {
  gsap.registerPlugin(ScrollTrigger);
  AOS.init({once: true});

  // 필터 pin 효과
  var leftSidePin = ScrollTrigger.create({ pin: ".left-side", start: "top 105px", anticipatePin: true, end: "+=1500", pinSpacing: false});

  // 필터 숨기기 클릭
  var isFilterClick = true;

  $(".filter-btn").on("click", function() {
    if(isFilterClick) {
      gsap.to(".filter-wrap", {xPercent: -100, duration: .3});
      $(".section").addClass("active");
      $(".grid-area").removeClass("default");
      $(".grid-area").addClass("long");
      $(".grid-area li").eq(8).removeClass("scroll-motion");
      $(".grid-area li").eq(9).removeClass("scroll-motion");
      leftSidePin.disable(true);
      isFilterClick = false;
    } else {
      setTimeout(function() {
        gsap.to(".filter-wrap", {xPercent: 0, duration: .3});
      }, 200);      
      $(".section").removeClass("active");
      leftSidePin.enable(true);
      isFilterClick = true;
    }
  });

  // 그리드, 캘린더 hide show 이벤트
  var isGrid = true;
  $("main .cate-area .cate-icon .icon-calendar").on("click", function() {
    if(isGrid) {
      $("main").addClass("calendar-active");
      leftSidePin.disable(true);
      isGrid = false;
    }
  });
  $("main .cate-area .cate-icon .icon-grid").on("click", function() {
    if(!isGrid) {
      $("main").removeClass("calendar-active");
      leftSidePin.enable(true);
      isGrid = true;
    }
    if($(".section").hasClass("active")) {
      leftSidePin.disable(true);
    }
  });

  //날짜 클릭 시 달력 표시
  var isCalendarShow = true;
  $("main .calendar-area .calendar-click").on("click", function() {
    if(isCalendarShow) {
      $(".calendar-img-on").addClass("active");
      isCalendarShow = false;
    } else {
      $(".calendar-img-on").removeClass("active");
      isCalendarShow = true;
    }
  });

  // footer 영역 효과
  gsap.to(".main-bg", {
    scrollTrigger: {
      trigger: ".fake-footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
    },
    scale: .96,
  });

    // scroll-motion
    var scrollObjT = function() {
      var _arrY = [];
      $(".scroll-motion").each(function(i) {
        _arrY.push($(".scroll-motion").eq(i).offset().top + 150);
      });
      return _arrY;
    }

    $(window).on("scroll", function() {
      var winScrTop = $(window).scrollTop();
      var wh = $(window).height();

      $(".scroll-motion").each(function(i) {
        if(winScrTop + wh > scrollObjT()[i]) $(".scroll-motion").eq(i).addClass("active");
      });
    });
}); //end