$(window).on("load", function(){  
  gsap.registerPlugin(ScrollToPlugin);
  main.commonFn();
  main.swiperEvtFn();
  main.scrollTriggerFn();
  main.gnbFn();
  main.resizeFn();
  main.scrollFn();
});

var main = function () {
  return {
    commonFn: function () {
      // 페이지 로드시 quick-menu motion
      $(".quick-menu").each(function(){
        $(this).find(".quick-btn").on("click", function(){
          if(!$(this).closest(".quick-menu").hasClass("on")){
            $(".quick-menu").removeClass("on")
            $(this).closest(".quick-menu").addClass("on");
            // $(this).closest(".quick-menu").find(".quick-con").fadeIn();
          }else{
            $(".quick-menu").removeClass("on")
            /* $(this).closest(".quick-menu").find(".quick-con").fadeOut(); */
          }
        });
      });

      $(".quick-area .quick-menu:nth-child(2) .quick-con .service").on("click", function(){
        $(".quick-area .quick-menu:nth-child(2) .quick-con .tit-wrap").addClass("on");
        $(".quick-area .quick-menu:nth-child(2) .quick-con .robot .img").fadeOut();
        $(".quick-area .quick-menu:nth-child(2) .quick-con .chatting-wrap").fadeIn(300, function(){
          $(".quick-area .quick-menu:nth-child(2) .quick-con .chatting-wrap .talk-wrap").eq(0).addClass("active");
          $(".quick-area .quick-menu:nth-child(2) .quick-con .chatting-wrap .talk-wrap").eq(1).addClass("active");
        });
      });

      $(".quick-area .quick-menu:nth-child(2) .quick-con .tit-wrap.on .prev-btn").on("click", function(){
        $(".quick-area .quick-menu:nth-child(2) .quick-con .tit-wrap").removeClass("on");
        $(".quick-area .quick-menu:nth-child(2) .quick-con .robot .img").fadeIn();
      })

      // setTimeout(function(){
      //   $(".quick-menu.on").find(".quick-con").fadeOut();
      //   $(".quick-menu").removeClass("on");
      // }, 1000)
    },
    swiperEvtFn: function(){
      const Insiteswiper = new Swiper(".insite-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        scrollbar: {
          el: ".insite-swiper .swiper-scrollbar",
          hide: false,
        },
      });
      const Viewswiper = new Swiper(".view-swiper", {
        slidesPerView: "auto",
        spaceBetween: 4,
        scrollbar: {
          el: ".view-swiper .swiper-scrollbar",
          hide: false,
        },
      });
    },
    scrollTriggerFn:function(){
      const tl = gsap.timeline();
      tl.to(".pro-img span", {top: 0, opacity: 1, duration: 1.2, ease: Power3.easeOut, delay: .1});
      tl.to(".pro-nav span", {opacity: 1, duration: .8, ease: Power3.easeOut}, ">-0.8");
      tl.to(".pro-name span", {top: 0, opacity: 1, duration: .8, ease: Power3.easeOut}, ">-0.4");
      tl.to(".pro-info span", {top: 0, opacity: 1, duration: .8, ease: Power3.easeOut}, ">-0.6");
      tl.to(".pro-txt-wrap span", {top: 0, opacity: 1, duration: .8, ease: Power3.easeOut}, ">-0.2");
      
      gsap.to(".pro-img", {
        top: 0,
        width: 348,
        scrollTrigger: {
          trigger: $(".pro-img-wrap"), 
          start: "top top",
          end: "bottom bottom",
          endTrigger: $(".main-area"),
          scrub: 1,
          pin: true,
        }
      })

      gsap.to(".intro-cont .f-inner", {
        top: "-20%",
        scrollTrigger: {
          trigger: $(".intro-cont"), 
          start: "top top",
          end: "bottom top",
          scrub: 1,
          // markers: true,
        }
      })
      gsap.to(".main-area", {
        background: "#002554",
        scrollTrigger: {
          trigger: $(".outline-cont"), 
          start: "top 30%",
          end: "center 60%",
          scrub: 1,
          // markers: true,
        }
      })

      gsap.to($(".out-tit-wrap"), {
        scrollTrigger: {
          trigger: $(".out-tit-wrap"),
          start: ()=> "top " + 320,
          endTrigger: $(".outline-cont"),
          end: "bottom bottom",
          pin: true,
          scrub: 1,
          // markers:true,
        },
      });

      gsap.to(".out-list", {
        top: "-20%",
        scrollTrigger: {
          trigger: $(".outline-cont"), 
          start: "top top",
          end: "bottom top",
          scrub: 1,
          // markers: true,
        }
      })

      setTimeout(() => {
        scrollMotionFuc();
      }, 100)
    },
    gnbFn: function(){
      $("header nav").on("mouseenter focusin", function(){
        $("header").addClass("hover");
        $(".dimd").stop(true, true).fadeIn();
      });

      $("header").on("mouseleave", function(){
        $("header").removeClass("hover");
        $(".dimd").stop(true, true).fadeOut();
      });
    },
    resizeFn: function(){
      $(window).resize(function () {
      }).resize();
    },
    scrollFn: function () {
      let thisScrollT;
      let scrollT;
      let windowH;
      let footerT;
      
      $(window).on("scroll", function () {
        scrollT =  $(window).scrollTop();
        footerT = $("footer").offset().top;
        windowH = $(window).innerHeight();

        if(scrollT >= 100) {
          gsap.to(".scroll-fixed", 1, {
            bottom: 0,
            ease:Power3.easeOut
          })
        } else {
          gsap.to(".scroll-fixed", 1, {
            bottom: "-90px",
            ease:Power3.easeOut
          })
        }
        
        setTimeout(function(){
          $(".scroll-gauge .bar").width(`${(scrollT / ($("#wrap").height() - windowH) * 100)}%`);
        }, 40)

        if(footerT >= (windowH + scrollT)) {
          $(".scroll-fixed").addClass("fixed");
        } else { 
          $(".scroll-fixed").removeClass("fixed");
        }

        if(scrollT > thisScrollT) { // down
          if(scrollT > 0){
            if($("header").size() != 0){
              if(!$("header").hasClass("fixed")){
                gsap.to(("header"), 1.4, {top: -110, ease:Power2.easeOut});
              }
            }

            $(".quick-area").addClass("on");
          }
        }
        
        if(scrollT < thisScrollT) { // up
          if(scrollT != 0 && scrollT > 0){
            gsap.to(("header"), 1, {top: 0, ease:Power2.easeOut});
            $("header").addClass("up-scroll");
          }else if (scrollT < 1) {
            $("header").removeClass("up-scroll");
          }

        }
        thisScrollT = scrollT;
      }).scroll();
    },
  }
}();

  // 공통 스크롤 모션
  function scrollMotionFuc () {
    $(".scroll-motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: () => "top 75%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll-motion:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }
