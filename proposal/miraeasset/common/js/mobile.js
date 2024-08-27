$(window).on("load", function(){
  gsap.registerPlugin(ScrollToPlugin);
  main.commonFn();
  main.swiperFn();
  main.scrollTriggerFn();
  main.scrollFn();
});

var main = function () {
  return {
    commonFn: function () {
      if($(".popup").length > 0) {
        $(".popup").addClass("on"); 
      }
      if($(".sec2").length > 0) {
        $(".sec2 .lists").on("click", function() {
          if(!$(this).hasClass("on")) {
            $(this).addClass("on");
            $(".save-btn").addClass("on");
          } else {
            $(this).removeClass("on");
            $(".save-btn").removeClass("on");
          }
        })
      }
      $(".today-btn").on("click", function() {
        $(".scroll2:has(.sec3)").scrollTop(0);
        $(".mob-cont").addClass("on");
        gsap.to(".mob-cont:has(.sec1)", 0.6, {
          left: "-40%"
        });
      })
      $("header .prev").on("click", function() {
        $(".mob-cont").removeClass("on");
        $(".scroll:has(.sec1)").scrollTop(0);
        gsap.to(".mob-cont:has(.sec1)", 0.6, {
          left: "0"
        });
      })
      $(".foot-btn").on("click", function() {
        $(".mob-cont").removeClass("on");
        $(".scroll:has(.sec1)").scrollTop(0);
        gsap.to(".mob-cont:has(.sec1)", 0.6, {
          left: "0"
        });
      })
    },
    swiperFn:function(){
      if($(".products-swiper").length > 0) {
        const productsSwiper = new Swiper(".products-swiper", {
          slidesPerView: "auto",
          spaceBetween: 16,
        });
      }
      if($(".list-swiper").length > 0) {
        const listSwiper1 = new Swiper(".list-swiper1", {
          slidesPerView: "auto",
          spaceBetween: 8,
          pagination: {
            el: ".list-swiper1 .swiper-pagination",
          },
        });
        const listSwiper2 = new Swiper(".list-swiper2", {
          slidesPerView: "auto",
          spaceBetween: 8,
          pagination: {
            el: ".list-swiper2 .swiper-pagination",
          },
        });
        const listSwiper3 = new Swiper(".list-swiper3", {
          slidesPerView: "auto",
          spaceBetween: 8,
          pagination: {
            el: ".list-swiper3 .swiper-pagination",
          },
        });
        const tabSwiper = new Swiper(".tab-swiper", {
          slidesPerView: "auto",
          spaceBetween: 4,
        });
      }
    },
    scrollTriggerFn:function(){
      scrollMotionFuc();
      scrollMotionFuc2();

      if($(".mob-cont.main").length > 0) {
        gsap.to(".m-sec4 .bg-area", {
          scrollTrigger: {
            trigger: ".m-sec4 .bg-area",
            pin: true,
            start: "top top",
            end:"bottom bottom",
            endTrigger: ".m-sec5",
            scurb: 1,
            // markers: true,
            scroller: "#mobileWrap .content .scroll",
          }
        });
        gsap.to(".m-sec4 .bg-area .bg-wrap", {
          width: "100%",
          height: "100%",
          top: 0,
          scrollTrigger: {
            trigger: ".m-sec4 .bg-area .bg-wrap",
            start: "top 75%",
            end: "bottom bottom",
            endTrigger: ".m-sec4 .bg-area",
            scrub: 1,
            // markers: true,
            scroller: "#mobileWrap .content .scroll",
          }
        })
      }
    },
    scrollFn: function () {
      let scrollT;
      let windowH;
      let thisScrollT;

      $(".scroll2:has(.sec3)").on("scroll", function () {
        if($(".scroll2:has(.sec3)").length > 0){
          scrollT =  $(".scroll2:has(.sec3)").scrollTop();
          windowH = $(".scroll2:has(.sec3)").innerHeight();
  
          $(".gauge-wrap .gauge .bar").width(`${(scrollT / ($(".scroll2:has(.sec3) .scrollDiv").height() - windowH) * 100)}%`);
        }
      }).scroll();

      $(".scroll:has(.sec4)").on("scroll", function () {
        scrollT =  $(".scroll:has(.sec4)").scrollTop();

        if(scrollT > thisScrollT) { // down
          if(scrollT > 0) {
            $(".search-fixed").addClass("on")
          }
        }
        
        if(scrollT < thisScrollT) { // up
          $(".search-fixed").removeClass("on")
        }
        thisScrollT = scrollT;
      }).scroll();
      
      $(".main .scroll").on("scroll", function () {
        scrollT =  $(".scroll").scrollTop();

        if(scrollT > thisScrollT) { // down
          if(scrollT > 0) {
            if(scrollT > 0) {
              $("header").removeClass("trans");
            }
          }
        }
        
        if(scrollT < thisScrollT) { // up
          if(scrollT == 0) {
            $("header").addClass("trans");
          }
        }
        thisScrollT = scrollT;
      }).scroll();
    },
  }
}();

  // 공통 스크롤 모션
  function scrollMotionFuc () {
    $(".scroll .scroll-motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: () => "top 75%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll .scroll-motion:visible").eq(q), className: "active"},
          once: true,
          scroller: "#mobileWrap .content .scroll",
          // markers: true,
        },
      });
    });
  }
  function scrollMotionFuc2 () {
    $(".scroll2 .scroll-motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: () => "top 75%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll2 .scroll-motion:visible").eq(q), className: "active"},
          once: true,
          scroller: "#mobileWrap .content .scroll2",
          // markers: true,
        },
      });
    });
  }