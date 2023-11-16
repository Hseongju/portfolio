$(function() {
  var _this_scroll;
  var _isScrollTop;
  var stickyOn = false;
  
  $(window).on("scroll", function () {
    // header
    // _isScrollTop =  $(window).scrollTop();

    // if(_isScrollTop > _this_scroll) { // down
    //   if(_isScrollTop > 0){
    //     if($("header").size() != 0){
    //       gsap.to(("header"), .8, {top: -130, ease:Power2.easeOut});
    //     }
    //   }
    // }
    
    // if(_isScrollTop < _this_scroll) { // up
    //   if(_isScrollTop != 0 && _isScrollTop > 0){
    //     gsap.to(("header"), .8, {top: 0, ease:Power2.easeOut});
    //     $("header").addClass("up-scroll");
    //   }else if (_isScrollTop < 1) {
    //     $("header").removeClass("up-scroll");
    //   }
    // }
    // _this_scroll = _isScrollTop;

    // 게이지바 모션 
    var $footer = $("footer");
    var $stickyMenu = $(".sticky_util");
    var stickyMenuHeight = $stickyMenu.outerHeight();
    var footerOffsetTop = $footer.offset().top;
    var windowHeight = $(window).height();

    if(stickyOn == true){
      // 스크롤 높이가 footer를 만나기 전까지는 메뉴를 화면 하단에 고정합니다.
      if ($(window).scrollTop() + windowHeight < footerOffsetTop) {
        $stickyMenu.css({
          bottom: 0
        });
      } else {
        // 스크롤 높이가 footer를 만나면 메뉴를 footer 위에 배치합니다.
        $stickyMenu.css({
          bottom: windowHeight - ($footer.offset().top - $(window).scrollTop())
        });
      }
    }
  });

  gsap.to($(".sticky_util"), .2, {
    scrollTrigger: {
      trigger: ".sc_tomorrow",
      start: "top top",
      // end: "+=100%",
      // pin: true,
      // scrub: .5,
      // markers: true,
      onEnter:function() {
        stickyOn = true;
        gsap.to($(".sticky_util") , 0.8, {"bottom": 0, ease:Power3.easeOut});
      }, 
      onLeaveBack: function(){
        stickyOn = false;
        gsap.to($(".sticky_util") , 0.8, {"bottom": -62, ease:Power3.easeOut});
      }
    },
  });

  gsap.to(".sticky_util .gage > span", {
    scrollTrigger: {
      trigger: ".main_area",
      start: "100% top",
      end() {
        return "+=".concat($(".sc_product .banner_wrap").offset().top - 200)
      },
      //pin: true,
      scrub: 1,
      // markers: true,
    },
    "width": "100%",
  });


  // 페이지 로드 시 메인 비주얼 텍스트 모션
  setTimeout(function() {
    gsap.to(".main_area .txt_wrap .ig_wrap:first-child img", 1, {y: 0, opacity: 1});
    gsap.to(".main_area .txt_wrap .ig_wrap:nth-child(2) img", 1, {y: 0, opacity: 1});
  }, 800);


  // 메인 비주얼 모션
  var full01Tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main_area",
      start: "top top",
      end: "+=100%",
      scrub: 1.5,
      // markers: true,
      pin: true
    },
  });
  full01Tl.addLabel("m1")
  .to(".main_area .txt_wrap .ig_wrap:first-child", 1, {top: "-500px"}, "m1")
  .to(".main_area .txt_wrap .ig_wrap:nth-child(2)", 1, {top: "100px"}, "m1")
  .to(".main_area .txt_wrap .ig_wrap:nth-child(3)", 1, {top: "50vh"}, "m1")
  .to(".main_area .main_wrap .mech_wrap", .5, {top: "calc(100vh - 989px)"}, "m1")
  .to(".main_area .main_wrap .dimmed", 1, {opacity: ".5"}, "m1");

  //첫 섹션 이미지 움직이는 모션
  var full02Tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc_tomorrow",
      start: "top top",
      end() {
        return "+=".concat($(".sc_tomorrow").height())
      },
      scrub: 1.5,
      // markers: true,
    },
  });
  full02Tl.addLabel("m1")
  .to(".sc_tomorrow .box_list .box_wrap .ig_wrap:nth-child(1)", {y: -250}, "m1")
  .to(".sc_tomorrow .box_list .box_wrap .ig_wrap:nth-child(2)", {y: -500}, "m1")
  .to(".sc_tomorrow .box_list .box_wrap .ig_wrap:nth-child(3)", .4, {y: -600}, "m1")
  .to(".sc_tomorrow .box_list .box_wrap .ig_wrap:nth-child(4)", {y: -200}, "m1")
  .to(".sc_tomorrow .box_list .box_wrap .ig_wrap:nth-child(5)", .4, {y: -300}, "m1+=.2");

  // 360도 이미지 픽스 모션
  var full05Tl = gsap.to($(".sc_image .movie_wrap"), {
    scrollTrigger: {
      trigger: ".sc_image .bg_wrapper",
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: .5,
      // markers: true,
      // onEnter:function() {
      //   console.log("enter");
      //   $(".sc_image").addClass("on");
      // }, 
      // onEnterBack:function() {
      //   console.log("enterBack");
      //   $(".sc_image").addClass("on");
      // }, 
      // onLeave: function() {
      //   console.log("leave");
      //   $(".sc_image").addClass("active");
      // },
      // onLeaveBack: function(){
      //   console.log("leaveback");
      //   $(".sc_image").removeClass("on");
      // }
    },
  });


 // 360 이미지 버튼 클릭
  $(".sc_image .btn_list a.btn_front").on("click", function() {
    $(".sc_image .bg_area > *").removeClass("on");
    $(".sc_image .bg_area .front_mec").addClass("on");
    $(".sc_image .btn_list .ig_wrap").removeClass("on");
    $(".sc_image .btn_list .ig_wrap:nth-child(2)").addClass("on");
    $(".sc_image .center_btn").css("opacity", 0);

    video.pause();
    video.currentTime = 0; 
  });
  $(".sc_image .btn_list a.btn_side").on("click", function() {
    $(".sc_image .bg_area > *").removeClass("on");
    $(".sc_image .bg_area .side_mec").addClass("on");
    $(".sc_image .btn_list .ig_wrap").removeClass("on");
    $(".sc_image .btn_list .ig_wrap:nth-child(3)").addClass("on");
    $(".sc_image .center_btn").css("opacity", 0);

    video.pause();
    video.currentTime = 0; 
  });

  // 360 이미지 비디오 재생 모션
  let video = $(".sc_image .bg_area .video_wrap").find("video")[0];
  $(".sc_image .center_btn").on("click", function() {
    $(".sc_image .center_btn").css("opacity", 0);
    video.play();
  });

  // HX320A 스와이퍼
  var swiper = new Swiper(".sc_action .actionSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    initialSlide: 0
  });

  // 제품 사양
  $(".sc_product .list_wrap .list_desc").slideUp(0);
  gsap.to($(".sc_product .list_wrap a").find(".arr_down") , 0.8, {rotateZ: "180deg", ease:Power3.easeOut}); 

  $(".sc_product .list_wrap a").on("click", function() {
    if($(this).next(".list_desc").is(":visible") == true){
      gsap.to($(this).find(".arr_down") , 0.8, {rotateZ: "180deg", ease:Power3.easeOut}); 
      $(this).next(".list_desc").slideUp(400);
    }else{
      gsap.to($(this).find(".arr_down") , 0.8, {rotateZ: "0deg", ease:Power3.easeOut});
      $(this).next(".list_desc").slideDown(400);
    }
  });

  $(".sc_product .list_wrap a").hover(function(){
    $(this).css("background", "#EDEDED");
  }, function(){
    $(this).css("background", "#F6F6F6");
  })

  //최근 본 제품 모션
  $(".sc_recentview .list_item").hover(function(){
    gsap.to($(this).find(".ig_wrap") , 0.8, {scale: 1.1, ease:Power3.easeOut}); 
  }, function(){
    gsap.to($(this).find(".ig_wrap") , 0.8, {scale: 1, ease:Power3.easeOut}); 
  })

  
  // 공통 스크롤 모션
  if($(".scroll_motion").size() > 0){
    $(".scroll_motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "-50px 60%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll_motion:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  };
})