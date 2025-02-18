var _visualTxtMotion;
var _isPopupOpen = false;

$(window).load(function () {
  main.commonFn();
  main.swiperFn();
  main.scrollFn();
  main.scrollTriggerFn();
})

const main = (function () {
  return {
    commonFn: function () {
      scrollMotion();

      $(".video-area .img-div").on("click", function () {
        !$(".video-area .img-div").hasClass("click") ? $(".video-area .img-div").addClass("click") : $(".video-area .img-div").removeClass("click");
      });
      

      // 헤더 등장
      $("header").addClass("scroll");

      // commonFn 내부의 팝업 열기 이벤트에 추가
      // popScrollMotion();
      $(".btn-pop").on("click", function () {
        $(".deep-dive-popup").addClass("active");
        $("body").addClass("stop-scroll");
        setTimeout(() => {
          popScrollMotion(); // 팝업 스크롤 모션 초기화
          ScrollTrigger.refresh();
        }, 1000);
      });

      $(".deep-dive-popup .back-home").on("click", function () {
        _isPopupOpen = false;
        $(".deep-dive-popup").removeClass("active");
        $("body").removeClass("stop-scroll");
        setTimeout(() => {
          // 기존 ScrollTrigger 정리
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          
          // ScrollTrigger 기본 설정 초기화
          ScrollTrigger.defaults({
            scroller: "body"
          });
          
          // scrollMotion 다시 초기화
          scrollMotion();
          main.scrollTriggerFn();
          ScrollTrigger.refresh();
        }, 1000);
      });

    },
    swiperFn: function () {
      // Visual
      var visualSwiper = new Swiper(".visual-swiper .swiper-container", {
        navigation: {
          nextEl: ".visual-swiper .swiper-button-next",
          prevEl: ".visual-swiper .swiper-button-prev",
        },
        autoHeight: true,
        speed:800,
        on: {
          slideChange: function () {
            
            

            setTimeout(updateVisualMotion, 0);
          },
          slideChangeTransitionStart: function() {
            $(".visual-area .fixed-area .visual-txt-wrap .txt-wrap").removeClass("active");
            $(".visual-area .fixed-area .visual-txt-wrap .txt-wrap").eq(this.activeIndex).addClass("active");
          },
          slideChangeTransitionEnd: function() {
            setTimeout(() => {
              const athletesTrigger = ScrollTrigger.getById("athletesTrigger");
              athletesTrigger.refresh();
            }, 800)
          },
          init: function() {
            updateVisualMotion();
          }
        }
      });

    },
    scrollFn: function () {
      let _this_scroll;
      let _isScrollTop;

      $(window).on("scroll", function () {
        // header
        _isScrollTop =  $(window).scrollTop();

        if(_isScrollTop > _this_scroll) { // down
          if(_isScrollTop > 0){
            $("header").removeClass("scroll");
            $("header").removeClass("active");
          }
        }
        
        if(_isScrollTop < _this_scroll){ // up
          if(_isScrollTop == 0){
            $("header").removeClass("active");
          }else{
            $("header").addClass("scroll");
            $("header").addClass("active");
          }
        }

        
        
        _this_scroll = _isScrollTop;
      });
    },
    scrollTriggerFn: function () {

      // Athletes
      // gsap.to($(".athletes-area"), {
      //   scrollTrigger: {
      //     trigger: ".athletes-wrap .txt",
      //     start: "top-=120px top",
      //     end: "bottom top",
      //     endTrigger: ".athletes-wrap section:nth-child(1)",
      //     pin:true,
      //     // markers:true,
      //   }
      // });
      gsap.to($(".athletes-area"), {
        scrollTrigger: {
          id: "athletesTrigger", // ID 추가
          trigger: ".athletes-wrap .txt",
          start: "top-=120 top", // 기본 시작점
          end: "bottom top",
          endTrigger: ".athletes-wrap section:nth-child(1)",
          pin: true,
          // markers: true,
          invalidateOnRefresh: true
        }
      });
    }
  }
})();

let visualST;

function updateVisualMotion() {
  const activeSlide = document.querySelector('.visual-swiper .swiper-slide-active');
  
  if (visualST) {
    visualST.kill();
  }
  
  const slideHeight = activeSlide.offsetHeight;
  
  visualST = ScrollTrigger.create({
    trigger: ".visual-area",
    start: "top top",
    end: `top+=${slideHeight} bottom`,
    pin: ".fixed-area",
    pinSpacing: false,
    invalidateOnRefresh: true,
    ease: "power2.inOut",
  });
}

function scrollMotion() {
  if ($(".scroll-motion").size() > 0 && !_isPopupOpen) {
    $(".scroll-motion:visible").each(function (q) {
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: () => "top 70%", // 함수로 변경하여 동적 계산
          end: () => "bottom top", // 함수로 변경하여 동적 계산
          toggleClass: { targets: $(".scroll-motion:visible").eq(q), className: "active" },
          once: true,
          // markers: true,
          invalidateOnRefresh: true // 스크롤 위치가 변경될 때 재계산
        },
      });
    });
  }
}

function popScrollMotion() {
  _isPopupOpen = true;

  // 기존 ScrollTrigger들을 정리
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  if ($(".pop-scroll-motion").size() > 0) {
    // ScrollTrigger 기본 설정
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      scroller: ".deep-dive-popup .scroll-area"
    });

    $(".pop-scroll-motion:visible").each(function (q) {
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 70%",
          end: "bottom top",
          toggleClass: { targets: $(".pop-scroll-motion:visible").eq(q), className: "active" },
          once: true,
          invalidateOnRefresh: true
        },
      });
    });
  }
}
