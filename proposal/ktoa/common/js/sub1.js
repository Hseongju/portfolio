$(function() {
  var _this_scroll;
  var _isScrollTop;
  var colorTop = $(".sc_swiper").offset().top;

  //헤더 컬러 변경으로 인해 해당 섹션 높이 갑 불러오기
  setTimeout(function() { 
    colorTop = $(".sc_swiper").offset().top;
  }, 100)
  
  setTimeout(function() { 
    gsap.to("header", {"top": 0, "opacity": 1})
    $(".visual_area .move_one .now_tab .ig_wrap").css("opacity", 1).css("transform", "translateY(0)");
    $(".visual_area .move_one .tit_box .ig_wrap + .ig_wrap").css("opacity", 1).css("transform", "translateY(0)");
    $(".visual_area .move_one .tit_box .ig_wrap .sub_wrap").addClass("active");
  }, 500)

  setTimeout(function() { 
  }, 600)

  // 헤더 컬러 변경
  if (colorTop <= $(window).scrollTop()) {
    $("header").addClass("on");
  }
  
  $(window).on("scroll", function () {
    // header
    _isScrollTop = $(window).scrollTop();

    
    if (_isScrollTop > _this_scroll) {
      // down
      if (colorTop <= _isScrollTop) { //헤더 컬러 변경
        $("header").addClass("on");
      } 

      if (_isScrollTop > 0) {
        if ($("header").size() != 0) {
          gsap.to("header", 1.2, { top: -130, ease: Power2.easeOut });
        }
      }
    }

    if (_isScrollTop < _this_scroll) {
      // up
      if (colorTop >= _isScrollTop) { // 헤더 컬러 변경
        $("header").removeClass("on");
      } 

      if (_isScrollTop != 0 && _isScrollTop > 0) {
        gsap.to("header", 1.3, { top: 0, ease: Power2.easeOut });
        $("header").addClass("up-scroll");
      } else if (_isScrollTop < 1) {
        $("header").removeClass("up-scroll");
      }
    }
    _this_scroll = _isScrollTop;
  });


  //메인 비주얼 모션
  var full01Tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".visual_area",
      start: "top top",
      end: "+=200%",
      // end() {
      //   return "+=".concat($(".video_area .txt_wrap img").height())
      // },
      scrub: 1.5,
      // markers: true,
      pin: true,
    },
  });
  full01Tl.addLabel("m1")
          .to(".visual_area .bg_area .ig_wrap", .8, {yPercent: -20}, "m1")
          .to(".visual_area .move_one", .5, {opacity: 0}, "m1")
          .to(".visual_area .move_one", {yPercent: -100}, "m1")
          .to(".visual_area .move_two", {y: -($(".visual_area .move_one").height() + 476), delay: .3}, "m1")
          .to(".visual_area .bg_area .ig_wrap", {delay: .1}, "-=.2")

  var networkSwiper = new Swiper(".network_swiper", {
    slidesPerView: "auto",
    spaceBetween: 100,
    allowTouchMove: false,
    // pagination: {
    //   el: ".network_swiper .swiper-pagination-custom",
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     var currentIndex = index + 1;
    //     var totalSlides = $(".swiper-slide").length;
    //     return '<span class="' + className + '">' + (currentIndex < 10 ? "0" : "") + currentIndex + '</span>' +
    //             '<span class="' + className + '">' + ' - ' + (totalSlides < 10 ? "0" : "") + totalSlides + '</span>';
    //   },
    // },
    navigation: {
      nextEl: ".network_swiper .swiper-button-next",
    },
  });
  
  // 현재 페이지 및 전체 페이지 업데이트
  networkSwiper.on("slideChange", function () {
    var prevIndex = networkSwiper.activeIndex - 1;
    var currentIndex = networkSwiper.activeIndex;
    // console.log(prevIndex, currentIndex);
    $(".sc_swiper .swiper-pagination-custom .pagi_wrap > span").eq(prevIndex).addClass("on").removeClass("active");
    $(".sc_swiper .swiper-pagination-custom .pagi_wrap > span").eq(currentIndex).addClass("active");
  });
  
  // // 페이네이션 업데이트
  // function updatePagination() {
  //   var currentIndex = networkSwiper.activeIndex + 1;
  //   var totalSlides = networkSwiper.slides.length;
  
  //   var paginationText = '<span>' + (currentIndex < 10 ? "0" : "") + currentIndex + '</span>' +
  //                         '<span>' + ' - ' + (totalSlides < 10 ? "0" : "") + totalSlides + '</span>';
  
  //   document.querySelector(".swiper-pagination-custom").innerHTML = paginationText;
  // }

  //스와이퍼 가로 스크롤 모션
  gsap.to($(".left_motion"), {
    scrollTrigger: {
      trigger: $(".left_motion"),
      start: "-50px 90%",
      end:"bottom top",
      toggleClass: {targets: $(".left_motion"), className: "active"},
      once: true,
      // markers: true,
    },
  });

  //배경 컬러 바뀌는 모션
  gsap.to("body", {
    scrollTrigger: {
      trigger: ".sc_support",
      start: "-20% top",
      end: "30% bottom",
      //pin: true,
      scrub: 1,
      // markers: true,
    },
    backgroundColor: "#6463A1"
  });

  //텍스트 가로 스크롤 모션
  gsap.to(".sc_envir .txt_scroll .ig_wrap img", {
    scrollTrigger: {
      trigger: ".sc_envir",
      start: "-30% top",
      end: "bottom bottom",
      //pin: true,
      scrub: 1,
      // markers: true,
    },
    x: "-50%",
  });

  // 공통 스크롤 모션
  if($(".scroll_motion").size() > 0){
    $(".scroll_motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "-50px 95%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll_motion:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }
  
})
