$(function() {
  //헤더 모션
  gsap.to("header", 1.2, {top: 0, delay: .8});

  //메인 비주얼 모션
  gsap.to(".main_area .main_txt img", .8, {y: 0, opacity: 1, delay: .7});
  $(".main_area").addClass("active");
  $(".main_area .main_ig_wrap").addClass("active");

  // 기업현황 모션
  var full01Tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".video_area",
      start: "top top",
      end() {
        return "+=".concat($(".video_area .txt_wrap img").height())
      },
      scrub: 1.5,
      // markers: true,
      pin: ".video_area",
    },
  });
  full01Tl.to(".video_area .txt_wrap img", {yPercent: -100});

  //사업소개 스와이퍼
  var companyswiper = new Swiper(".companySwiper", {
    loop: true,
    speed: 1000,     
    navigation: {
      nextEl: ".sc_companyintro .swiper-button-next",
      prevEl: ".sc_companyintro .swiper-button-prev",
    },
    observer : true,
    observeParents: true,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 5000
    // },
    on: {       
      slideChangeTransitionEnd: function() {
       if($(".sc_companyintro .swiper_wrap").hasClass("active")) {
          $(".sc_companyintro .companySwiper .swiper-slide").removeClass("on");
          $(".sc_companyintro .companySwiper .swiper-slide.swiper-slide-active").addClass("on");
          $(".sc_companyintro .companySwiper .swiper-slide.swiper-slide-duplicate-active").addClass("on");
        }
      // slideChangeTransitionStart: function() {
      //  if($(".sc_companyintro .swiper_wrap").hasClass("active")) {
      //   gsap.to($(".sc_companyintro .companySwiper .swiper-slide .slide_text > div"), {
      //     opacity: 0,
      //     y: 100,
      //     delay: 1
      //   })
      //   gsap.to($(".sc_companyintro .companySwiper .swiper-slide.swiper-slide-active .slide_text > div"), {
      //     opacity: 1,
      //     y: 0,
      //     stagger: .3,
      //     delay: 1
      //   })}
      // },
      }
    }
  });

  // companyswiper.autoplay.stop();
   // 영역 스크롤 모션
  $(window).on("scroll", function () {
    $(".main_area .main_ig_wrap").addClass("on");

    if ($(".sc_customer .tit_wrap .box").hasClass("active")) {
      gsap.to(".sc_customer .text_box .sub_wrap", 1, {delay: .8, y: 0, opacity: 1, stagger: .2})
    }
    if ($(".sc_vision .text_wrap.circle").hasClass("active")) {
      gsap.to(".sc_vision .graph_wrap .sub_wrap:nth-child(1)", 1.2, {left: 0, delay: .3})
      gsap.to(".sc_vision .graph_wrap .sub_wrap:nth-child(3)", 1.2, {right: 0, delay: .3})
    }
    if ($(".sc_vision .text_wrap.list").hasClass("active")) {
      gsap.to(".sc_vision .sec_graph_wrap .sub_wrap", 1, {y: 0, opacity: 1, delay: .2})
    }
    if ($(".sc_companyintro .swiper_wrap").hasClass("active") && $(".sc_companyintro .swiper_wrap").hasClass("first")) {
      // companyswiper.autoplay.start();
      setTimeout(function() {
        $(".sc_companyintro .companySwiper .swiper-slide.swiper-slide-active").addClass("on");
      }, 800);
      $(".sc_companyintro .swiper_wrap").removeClass("first");
    } 
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
  }
})

